import type { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  // Kept for existing call sites; sections now render immediately to avoid
  // hiding content behind scroll-triggered animations.
  delay?: number;
  distance?: number;
};

export default function MotionSection({
  children,
  className,
}: MotionSectionProps) {
  return <div className={className}>{children}</div>;
}
