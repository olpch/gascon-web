import { cn } from "../../lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Heading({
  children,
  className,
}: Props) {
  return (
    <h2
      className={cn(
        "font-light tracking-[-0.04em] leading-[0.95]",
        "text-[clamp(3rem,7vw,5rem)]",
        className
      )}
    >
      {children}
    </h2>
  );
}