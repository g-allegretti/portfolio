import { skillGroups } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-16">
      <h2 className="text-3xl font-bold text-white mb-12">
        <span className="text-[#f59e0b] font-mono text-lg mr-3">04.</span>Skills
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-[#161616] border border-[#2a2a2a] rounded-lg p-5"
          >
            <h3 className="text-[#f59e0b] text-xs font-mono uppercase tracking-widest mb-4">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="w-1 h-1 rounded-full bg-[#f59e0b]/50 shrink-0" />
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
