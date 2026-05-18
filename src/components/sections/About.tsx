export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-16">
      <h2 className="text-3xl font-bold text-white mb-12">
        <span className="text-[#f59e0b] font-mono text-lg mr-3">01.</span>About
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-slate-400 leading-relaxed">
          <p>
            I'm a Senior C++ Software Engineer based in Rome, Italy, with six years of professional
            experience building performance-critical software for complex systems. My work spans the
            full stack — from low-level pipeline architecture to Qt/QML interfaces and CI/CD
            infrastructure.
          </p>
          <p>
            At DMA I work on a video inspection platform for railway infrastructure, where I lead
            architectural decisions on the framework — execution model, threading strategy, and
            data-flow contracts across the codebase. I'm involved end-to-end, from requirements
            gathering through to CI/CD.
          </p>
          <p>
            Before that I spent nearly three years at Leonardo S.p.A. — Aircraft Division (via ALTEN),
            designing and developing HMI applications for an avionics mission-simulation environment,
            and contributing to the underlying flight-simulation model.
          </p>
          <p>
            My academic background is in Computer Engineering (110/110, University of Salerno), with an
            Erasmus exchange at the University of Groningen where I wrote my master thesis on Automatic
            Facial Expression Recognition.
          </p>
        </div>

        <div className="space-y-6">
          {/* Education */}
          <div className="bg-[#161616] border border-[#2a2a2a] rounded-lg p-5">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate-300 font-medium">M.Sc. Computer Engineering</p>
                <p className="text-slate-500 text-sm">University of Salerno · 2020 · 110/110</p>
                <p className="text-slate-500 text-sm">Erasmus exchange · University of Groningen</p>
              </div>
              <div>
                <p className="text-slate-300 font-medium">B.Sc. Computer Engineering</p>
                <p className="text-slate-500 text-sm">University of Salerno · 2017 · 95/110</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-[#161616] border border-[#2a2a2a] rounded-lg p-5">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Languages</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-300">Italian</span>
                <span className="text-slate-500 text-sm">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">English</span>
                <span className="text-slate-500 text-sm">Advanced</span>
              </div>
            </div>
          </div>

          {/* Quick facts */}
          <div className="bg-[#161616] border border-[#2a2a2a] rounded-lg p-5">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Currently</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#f59e0b] mt-0.5">▸</span>
                Leading architecture on a real-time video inspection framework
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f59e0b] mt-0.5">▸</span>
                Based in Rome — feel free to get in touch
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
