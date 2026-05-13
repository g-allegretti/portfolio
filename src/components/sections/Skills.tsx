import { skillGroups } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-16">
      <h2 className="text-3xl font-bold text-white mb-12">
        <span className="text-[#38bdf8] font-mono text-lg mr-3">04.</span>Skills
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-[#111e2e] border border-[#1a3050] rounded-lg p-5"
          >
            <h3 className="text-[#38bdf8] text-xs font-mono uppercase tracking-widest mb-4">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="w-1 h-1 rounded-full bg-[#38bdf8]/50 shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
