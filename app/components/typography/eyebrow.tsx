interface Props {
  children: React.ReactNode;
}

export default function Eyebrow({
  children,
}: Props) {
  return (
    <span className="mb-6 block text-xs uppercase tracking-[0.45em] text-black/45">
      {children}
    </span>
  );
}