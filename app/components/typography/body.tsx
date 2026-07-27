import { cn } from "../../lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Body({
  children,
  className,
}: Props) {
  return (
    <p
      className={cn(
        "text-lg leading-9 text-black/65",
        className
      )}
    >
      {children}
    </p>
  );
}