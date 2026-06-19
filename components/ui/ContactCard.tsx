import { ReactNode } from "react";
import GlassCard from "./GlassCard";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
}

export default function ContactCard({
  icon,
  title,
  value,
}: ContactCardProps) {
  return (
    <GlassCard className="p-8 text-center transition-all duration-300 hover:-translate-y-2">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {value}
      </p>
    </GlassCard>
  );
}