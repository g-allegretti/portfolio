import { useState } from 'react';
import { projects, type Project } from '../../data/projects';
import Tag from '../ui/Tag';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'demo', label: 'Portfolio Demos' },
  { key: 'thesis', label: 'Thesis' },
  { key: 'university', label: 'University' },
] as const;

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="bg-[#161616] border border-[#2a2a2a] rounded-lg overflow-hidden flex flex-col hover:border-[#f59e0b]/40 transition-colors group">
      {/* Thumbnail */}
      {p.image && (
        <div className="px-4 pt-4 shrink-0">
          <div className="w-full aspect-[16/7] overflow-hidden rounded">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                p.category === 'demo'
                  ? 'bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/30'
                  : p.category === 'thesis'
                  ? 'bg-amber-400/10 text-amber-400 border border-amber-400/30'
                  : 'bg-slate-600/20 text-slate-400 border border-slate-600/30'
              }`}>
                {p.category === 'demo' ? 'demo' : p.category === 'thesis' ? 'thesis' : 'university'}
              </span>
              <span className="text-slate-600 text-xs font-mono">{p.year}</span>
            </div>
            <h3 className="text-white font-semibold group-hover:text-[#f59e0b] transition-colors">
              {p.title}
            </h3>
            <p className="text-slate-500 text-xs mt-0.5">{p.subtitle}</p>
          </div>

        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1">{p.description}</p>

        {/* Tags + GitHub button */}
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-[#2a2a2a]">
          {p.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>

        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#f59e0b] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'demo' | 'thesis' | 'university'>('all');

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-16">
      <h2 className="text-3xl font-bold text-white mb-4">
        <span className="text-[#f59e0b] font-mono text-lg mr-3">03.</span>Projects
      </h2>
      <p className="text-slate-500 text-sm mb-10 max-w-xl">
        Portfolio demos are standalone Qt/QML applications reproducing real-time
        data visualization patterns from my production work, without proprietary code.
      </p>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-1.5 rounded text-sm transition-colors ${
              filter === f.key
                ? 'bg-[#f59e0b] text-[#0c0c0c] font-semibold'
                : 'border border-[#2a2a2a] text-slate-400 hover:border-[#f59e0b]/50 hover:text-slate-300'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {visible.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
