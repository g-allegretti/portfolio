export default function Footer() {
  return (
    <footer className="border-t border-[#1a3050] py-8 px-6 text-center">
      <p className="text-slate-600 text-sm font-mono">
        Built with React + Tailwind · Giovanni Allegretti · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
