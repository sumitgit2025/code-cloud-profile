
import React, { useEffect, useRef, useState } from "react";

type AnimatedTypingProps = {
  text: string;
  className?: string;
  speed?: number;
};

const AnimatedTyping: React.FC<AnimatedTypingProps> = ({
  text,
  className = "",
  speed = 35, // ms per character
}) => {
  const [displayed, setDisplayed] = useState("");
  const index = useRef(0);

  useEffect(() => {
    setDisplayed("");
    index.current = 0;
    const timer = setInterval(() => {
      setDisplayed((prev) => prev + text[index.current]);
      index.current++;
      if (index.current >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-blink border-r-2 border-primary inline-block w-2 h-6 align-bottom ml-1" />
    </span>
  );
};

export default AnimatedTyping;
