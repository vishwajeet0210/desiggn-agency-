interface GradientTextProps {
  children: React.ReactNode;
}

export default function GradientText({
  children,
}: GradientTextProps) {
  return (
    <span className="bg-gradient-to-r' from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
      {children}
    </span>
  );
}