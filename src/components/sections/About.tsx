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
            full stack - from low-level pipeline architecture to Qt/QML interfaces and CI/CD
            infrastructure.
          </p>
          <p>
            At DMA (Plasser &amp; Theurer Group) I lead the architecture of a real-time video
            inspection framework for railway infrastructure, now being brought to high-speed train
            inspection. I redesigned its execution model from a thread-per-stage pipeline into a
            DAG-based task graph with GPU-aware scheduling, and scaled TensorRT inference across
            multiple GPUs (~4.6x on four cards). I also led the redesign of the catenary wear
            measurement product, from 1 to up to 8 wires, now moving to line-scan cameras at up to
            5 kHz. Beyond my own work, I review colleagues' code and help steer design decisions
            across the team.
          </p>
          <p>
            Before that I spent nearly three years at Leonardo S.p.A. - Aircraft Division (via ALTEN),
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

          {/* Certifications */}
          <div className="bg-[#161616] border border-[#2a2a2a] rounded-lg p-5">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Certifications</h3>
            <a
              href="https://learn.nvidia.com/certificates?id=8KBBifzeQl6efUG8R2WA1g"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <p className="text-slate-300 font-medium group-hover:text-[#f59e0b] transition-colors">
                Getting Started with Accelerated Computing in Modern CUDA C++
              </p>
              <p className="text-slate-500 text-sm">NVIDIA Deep Learning Institute · Oct 2026</p>
            </a>
          </div>

          {/* Quick facts */}
          <div className="bg-[#161616] border border-[#2a2a2a] rounded-lg p-5">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Currently</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#f59e0b] mt-0.5">▸</span>
                Bringing real-time video inspection to high-speed trains
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f59e0b] mt-0.5">▸</span>
                Based in Rome, Italy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
