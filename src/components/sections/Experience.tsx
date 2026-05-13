import { useState } from 'react';
import { experience } from '../../data/experience';
import Tag from '../ui/Tag';

export default function Experience() {
  const [active, setActive] = useState(0);
  const item = experience[active];

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-16">
      <h2 className="text-3xl font-bold text-white mb-12">
        <span className="text-[#38bdf8] font-mono text-lg mr-3">02.</span>Experience
      </h2>

      <div className="md:flex gap-8">
        {/* Tab list */}
        <div className="md:w-52 flex md:flex-col mb-6 md:mb-0 border-b md:border-b-0 md:border-l border-[#1a3050] shrink-0">
          {experience.map((e, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-3 text-left text-sm transition-all whitespace-nowrap md:whitespace-normal border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px ${
                active === i
                  ? 'border-[#38bdf8] text-[#38bdf8] bg-[#38bdf8]/5'
                  : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-[#111e2e]'
              }`}
            >
              {e.company.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="mb-1 flex flex-wrap items-baseline gap-2">
            <h3 className="text-white font-semibold text-lg">{item.role}</h3>
            <span className="text-[#38bdf8]">@ {item.company}</span>
          </div>
          <p className="text-slate-500 text-sm font-mono mb-4">
            {item.period} · {item.location}
          </p>

          <p className="text-slate-400 text-sm leading-relaxed mb-5">{item.description}</p>

          <ul className="space-y-3 mb-6">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                <span className="text-[#38bdf8] mt-0.5 shrink-0">▸</span>
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
