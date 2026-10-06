import {
  Compass,
  Coffee,
  MapPin,
  Plane,
  Sparkles,
  TrainFront,
  UtensilsCrossed,
} from 'lucide-react';

const iconMap = {
  flight: Plane,
  food: UtensilsCrossed,
  walk: MapPin,
  culture: Coffee,
  travel: TrainFront,
  celebrate: Sparkles,
};

export default function ItineraryTimeline({ itinerary }) {
  return (
    <section
      aria-labelledby="itinerary-heading"
      className="glass-panel rounded-[28px] p-5 sm:p-6"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-200/80">Plan</p>
          <h2 id="itinerary-heading" className="mt-2 text-2xl font-semibold text-white">
            Itinerary timeline
          </h2>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-slate-300">
          <Compass className="h-3.5 w-3.5 text-cyan-300" />
          3 days
        </div>
      </div>

      <div className="relative mt-8 space-y-8 before:absolute before:left-[16px] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-400/60 before:via-violet-500/30 before:to-transparent">
        {itinerary.map((day, index) => (
          <div key={day.day} className="relative pl-10">
            <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-950 bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]">
              <span className="text-xs font-bold text-slate-950">{index + 1}</span>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-slate-900/60">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Day {day.day}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{day.title}</h3>
                </div>

                <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-200">
                  {day.date}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {day.activities.map((activity) => {
                  const Icon = iconMap[activity.type] || MapPin;

                  return (
                    <div
                      key={`${day.day}-${activity.time}`}
                      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-white/[0.06]"
                    >
                      <div className="flex gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-200 ring-1 ring-cyan-400/20">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                              {activity.time}
                            </span>
                            <span className="text-xs text-slate-300">{activity.location}</span>
                          </div>

                          <h4 className="mt-2 text-lg font-medium text-white">{activity.title}</h4>
                          <p className="mt-1 text-sm leading-6 text-slate-300">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
