interface TagProps {
  label: string;
  accent?: boolean;
}

export default function Tag({ label, accent = false }: TagProps) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded text-xs font-mono border ${
        accent
          ? 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30'
          : 'bg-[#161616] text-slate-400 border-[#2a2a2a]'
      }`}
    >
      {label}
    </span>
  );
}
