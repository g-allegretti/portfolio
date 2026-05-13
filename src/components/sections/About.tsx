export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-16">
      <h2 className="text-3xl font-bold text-white mb-12">
        <span className="text-[#38bdf8] font-mono text-lg mr-3">01.</span>About
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-slate-400 leading-relaxed">
          <p>
            I'm a Senior C++ Software Engineer based in Turin, Italy, with five years of professional
            experience building performance-critical software for complex systems. My work sits at the
            intersection of real-time processing, computer vision, and desktop application development.
          </p>
          <p>
            At DMA I'm a core developer on a real-time railway inspection platform — a multithreaded
            C++ pipeline running on inspection vehicles, integrating multiple DNN inference backends
            (TensorRT, PyTorch, MMDeploy) and communicating over ZMQ. I've also owned the Qt/QML
            frontend, including a full redesign of the CatenaryWearProcessor 2.0 GUI.
          </p>
          <p>
            Before that I spent nearly three years at Leonardo Aircraft Division (via ALTEN), developing
            Qt-based HMI software and C++ simulation models for avionics mission systems.
          </p>
          <p>
            My academic background is in Computer Engineering (110/110, University of Salerno), with an
            Erasmus exchange at the University of Groningen where I wrote my master thesis on Automatic
            Facial Expression Recognition.
          </p>
        </div>

        <div className="space-y-6">
          {/* Education */}
          <div className="bg-[#111e2e] border border-[#1a3050] rounded-lg p-5">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate-300 font-medium">M.Sc. Computer Engineering</p>
                <p className="text-slate-500 text-sm">University of Salerno · 2020 · GPA 110/110</p>
                <p className="text-slate-500 text-sm">Erasmus exchange · University of Groningen</p>
              </div>
              <div>
                <p className="text-slate-300 font-medium">B.Sc. Computer Engineering</p>
                <p className="text-slate-500 text-sm">University of Salerno · 2017 · GPA 95/110</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-[#111e2e] border border-[#1a3050] rounded-lg p-5">
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
          <div className="bg-[#111e2e] border border-[#1a3050] rounded-lg p-5">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Currently</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#38bdf8] mt-0.5">▸</span>
                Working on VIRAiL — real-time railway video inspection (C++17, CMake, GitLab CI)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38bdf8] mt-0.5">▸</span>
                Open to senior C++ / Qt / embedded roles in UK, Germany, Netherlands, Switzerland
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
