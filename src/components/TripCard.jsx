import {
  CalendarDays,
  Clock3,
  MapPin,
  Plane,
  Wallet,
} from 'lucide-react';
import { useEffect, useState } from 'react';

function getTimeRemaining(targetDate) {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function CountdownUnit({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-2.5 text-center">
      <div className="text-xl font-semibold text-white">{String(value).padStart(2, '0')}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">{label}</div>
    </div>
  );
}

export default function TripCard({ trip }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(trip.date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(trip.date));
    }, 1000);

    return () => clearInterval(timer);
  }, [trip.date]);

  const budgetUsed = (trip.spent / trip.budget) * 100;
  const budgetProgress = Math.min(budgetUsed, 100);

  return (
    <article className="glass-panel group rounded-[28px] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-200/70">{trip.status}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{trip.title}</h3>
        </div>

        <div className={`rounded-2xl bg-gradient-to-r ${trip.accent} px-3 py-2 text-xs font-medium text-white`}>
          {trip.timezone}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-slate-300">
        <MapPin className="h-4 w-4 text-cyan-300" />
        <span>{trip.destination}</span>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2">
        <CountdownUnit label="days" value={timeLeft.days} />
        <CountdownUnit label="hrs" value={timeLeft.hours} />
        <CountdownUnit label="min" value={timeLeft.minutes} />
        <CountdownUnit label="sec" value={timeLeft.seconds} />
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4 text-emerald-300" />
            Budget used
          </div>
          <span className="font-medium text-white">
            ${trip.spent.toLocaleString()} / ${trip.budget.toLocaleString()}
          </span>
        </div>

        <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 transition-all duration-500"
            style={{ width: `${budgetProgress}%` }}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <CalendarDays className="h-4 w-4 text-violet-300" />
          <span>{new Date(trip.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-300">
          <Plane className="h-4 w-4 text-cyan-300" />
          <span>{trip.travelers} travelers</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-slate-300">
          <Clock3 className="h-4 w-4 text-amber-300" />
          <span>{trip.weather}</span>
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-cyan-200">
          ★ {trip.rating}
        </div>
      </div>
    </article>
  );
}
