import { Bell, Menu, Search, SlidersHorizontal } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>

          <label className="relative block w-full max-w-md">
            <span className="sr-only">Search trips</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              aria-label="Search trips"
              type="search"
              placeholder="Search destinations"
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 focus:border-cyan-500/60 focus:outline-none"
            />
          </label>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Filter trips"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Notifications"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-950" />
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-2 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500 text-sm font-semibold text-slate-950">
              JR
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-white">Jayanth R</p>
              <p className="text-xs text-slate-400">Adventure Planner</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
