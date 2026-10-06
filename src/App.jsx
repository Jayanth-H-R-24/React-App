import { ArrowRight, CalendarDays, Sparkles, Wallet } from 'lucide-react';
import { useTravel } from './context/TravelContext';
import TripCard from './components/TripCard';
import ItineraryTimeline from './components/ItineraryTimeline';
import DashboardLayout from './layouts/DashboardLayout';

function DashboardContent() {
  const { trips, itinerary } = useTravel();

  return (
    <div className="space-y-8">
      <section className="glass-panel overflow-hidden rounded-[30px] p-5 sm:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-200/80">
              Dashboard
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Plan your next unforgettable escape.
            </h1>
            <p className="mt-3 text-base leading-7 text-slate-300">
              Your trip ecosystem is ready — check budgets, countdowns, and every island-to-city moment in one calm, elegant workspace.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start xl:self-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-100 transition hover:bg-cyan-500/20"
            >
              Explore ideas
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Sparkles className="h-4 w-4 text-violet-300" />
              AI planner
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CalendarDays className="h-4 w-4 text-cyan-300" />
              Upcoming
            </div>
            <div className="mt-3 text-3xl font-semibold text-white">3</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Wallet className="h-4 w-4 text-emerald-300" />
              Spending
            </div>
            <div className="mt-3 text-3xl font-semibold text-white">$7.8k</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Sparkles className="h-4 w-4 text-violet-300" />
              Experience score
            </div>
            <div className="mt-3 text-3xl font-semibold text-white">94%</div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
        <section aria-labelledby="upcoming-trips" className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 id="upcoming-trips" className="text-xl font-semibold text-white">
              Upcoming trips
            </h2>
            <button
              type="button"
              className="text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
            >
              View all
            </button>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {trips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </section>

        <aside className="space-y-5">
          <div className="glass-panel rounded-[28px] p-5">
            <p className="text-[10px] uppercase tracking-[0.28em] text-violet-200/80">Insights</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Travel pulse</h3>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Best value</span>
                  <span className="font-medium text-emerald-300">+18%</span>
                </div>
                <p className="mt-2 text-2xl font-semibold text-white">$1,240 saved</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Flight timings</span>
                  <span className="font-medium text-cyan-300">Optimal</span>
                </div>
                <p className="mt-2 text-2xl font-semibold text-white">7:30 AM</p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[28px] p-5">
            <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-200/80">Focus</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Trip checklist</h3>

            <ul className="mt-6 space-y-3">
              {['Visa documents', 'Hotel confirmation', 'Train passes', 'Packing list'].map((item, index) => (
                <li key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-medium text-emerald-300">
                    {index + 1}
                  </span>
                  <span className="text-sm text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <ItineraryTimeline itinerary={itinerary} />
    </div>
  );
}

export default function App() {
  const { TravelProvider } = useTravel();
  
  return (
    <useTravel.Provider>
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
    </useTravel.Provider>
  );
}
