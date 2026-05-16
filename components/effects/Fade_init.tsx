"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type FadeInitProps = {
  children: ReactNode;
  durationMs?: number;
  className?: string;
};

export default function FadeInit({
  children,
  durationMs = 500,
  className,
}: FadeInitProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${durationMs}ms ease`,
      }}
    >
      {children}
    </div>
  );
}
