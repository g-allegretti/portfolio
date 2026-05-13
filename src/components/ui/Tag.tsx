interface TagProps {
  label: string;
  accent?: boolean;
}

export default function Tag({ label, accent = false }: TagProps) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded text-xs font-mono border ${
        accent
          ? 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/30'
          : 'bg-[#111e2e] text-slate-400 border-[#1a3050]'
      }`}
    >
      {label}
    </span>
  );
}
