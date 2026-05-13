export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-16 max-w-6xl mx-auto"
    >
      <div className="max-w-3xl">
        <p className="font-mono text-[#38bdf8] text-sm mb-4 tracking-widest">Hello, I'm</p>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          Giovanni
          <br />
          Allegretti
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-400 font-normal mb-6">
          Senior C++ / Qt Software Engineer
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
          I build real-time embedded and desktop systems — from multithreaded C++ inspection
          pipelines running on railway vehicles to Qt/QML dashboards and DNN inference backends.
          Five years of production experience across railway infrastructure, avionics, and robotics.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#38bdf8] text-[#0b1623] font-semibold rounded hover:bg-[#7dd3fc] transition-colors text-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#1a3050] text-slate-300 font-semibold rounded hover:border-[#38bdf8] hover:text-[#38bdf8] transition-colors text-sm"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/g-allegretti"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#1a3050] text-slate-300 font-semibold rounded hover:border-[#38bdf8] hover:text-[#38bdf8] transition-colors text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce hidden md:block">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
