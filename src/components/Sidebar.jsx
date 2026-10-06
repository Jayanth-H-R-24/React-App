import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Plane,
} from 'lucide-react';
import { useTravel } from '../context/TravelContext';

export default function Sidebar({ isOpen, onToggle }) {
  const { navItems } = useTravel();

  return (
    <aside
      aria-label="Sidebar navigation"
      className={`
        relative flex shrink-0 flex-col border-r border-white/10 bg-slate-950/80
        transition-all duration-300 ease-in-out
        ${isOpen ? 'w-72' : 'w-24'}
      `}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-5">
        <div className={`flex items-center gap-3 overflow-hidden ${isOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-slate-950 shadow-glow">
            <Plane className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">Travel</p>
            <h1 className="truncate text-xl font-semibold text-white">Planventure</h1>
          </div>
        </div>

        {isOpen ? (
          <button
            type="button"
            aria-label="Collapse sidebar"
            onClick={onToggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            aria-label="Expand sidebar"
            onClick={onToggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>

      <nav aria-label="Main navigation" className="flex-1 px-3 py-5">
        <ul className="space-y-2">
          {navItems.map(({ label, icon: Icon }) => {
            const isActive = label === 'Overview' || label === 'Trips';

            return (
              <li key={label}>
                <button
                  type="button"
                  aria-label={label}
                  className={`nav-pill w-full ${isOpen ? 'justify-start' : 'justify-center'} ${isActive ? 'nav-pill-active' : ''}`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {isOpen && (
                    <span className="truncate">{label}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className={`flex items-center gap-3 ${isOpen ? '' : 'justify-center'}`}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/80 to-fuchsia-500/70 text-white">
            <Compass className="h-4 w-4" />
          </div>
          {isOpen && (
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Explorer</p>
              <p className="truncate text-sm font-medium text-white">Curated routes</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
