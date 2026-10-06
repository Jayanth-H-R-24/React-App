import {
  Bell,
  CalendarDays,
  Compass,
  Map,
  Plane,
  Settings,
  Sparkles,
  Wallet,
} from 'lucide-react';

export const navItems = [
  { label: 'Overview', icon: Map },
  { label: 'Trips', icon: Plane },
  { label: 'Itinerary', icon: CalendarDays },
  { label: 'Budget', icon: Wallet },
  { label: 'Insights', icon: Compass },
  { label: 'Alerts', icon: Bell },
  { label: 'Settings', icon: Settings },
];

export const tripData = [
  {
    id: 1,
    title: 'Kyoto Escape',
    destination: 'Kyoto, Japan',
    date: '2026-11-18T08:00:00',
    status: 'upcoming',
    timezone: 'GMT+9',
    budget: 4200,
    spent: 2320,
    rating: 4.9,
    accent: 'from-cyan-500/80 to-sky-600/80',
    weather: '15°C',
    travelers: 2,
  },
  {
    id: 2,
    title: 'Iceland Horizon',
    destination: 'Reykjavík, Iceland',
    date: '2026-12-12T10:30:00',
    status: 'soon',
    timezone: 'GMT',
    budget: 5600,
    spent: 4100,
    rating: 4.8,
    accent: 'from-violet-500/80 to-fuchsia-600/80',
    weather: '6°C',
    travelers: 3,
  },
  {
    id: 3,
    title: 'Marrakech Glow',
    destination: 'Marrakech, Morocco',
    date: '2027-01-06T09:00:00',
    status: 'planning',
    timezone: 'GMT+1',
    budget: 3100,
    spent: 1390,
    rating: 4.7,
    accent: 'from-amber-500/80 to-orange-600/80',
    weather: '22°C',
    travelers: 2,
  },
];

export const itineraryData = [
  {
    day: 1,
    date: 'Nov 18',
    title: 'Arrival & old-town stroll',
    activities: [
      {
        time: '08:30',
        title: 'Airport transfer',
        location: 'Kansai Airport',
        description: 'Private pickup and a relaxed check-in at the Kyoto central hotel.',
        type: 'flight',
      },
      {
        time: '12:00',
        title: 'Lunch in Gion',
        location: 'Gion district',
        description: 'Signature kaiseki lunch and tea tasting near the lantern-lined streets.',
        type: 'food',
      },
      {
        time: '16:00',
        title: 'Temple walk',
        location: 'Kiyomizu-dera',
        description: 'Golden-hour walk through the historic temple complex and surrounding lanes.',
        type: 'walk',
      },
    ],
  },
  {
    day: 2,
    date: 'Nov 19',
    title: 'Culture & café day',
    activities: [
      {
        time: '09:00',
        title: 'Tea ceremony',
        location: 'Shoren-in Temple',
        description: 'Traditional Japanese tea ceremony with a local host and quiet reflection.',
        type: 'culture',
      },
      {
        time: '13:15',
        title: 'Arashiyama bamboo grove',
        location: 'Western Kyoto',
        description: 'Scenic walk across the bamboo grove and riverside trail.',
        type: 'walk',
      },
      {
        time: '19:00',
        title: 'Sunset rooftop dinner',
        location: 'Skybar Kyoto',
        description: 'Dinner overlooking the city lights with a cocktail pairing menu.',
        type: 'food',
      },
    ],
  },
  {
    day: 3,
    date: 'Nov 20',
    title: 'Day trip & final moments',
    activities: [
      {
        time: '07:45',
        title: 'Early train to Nara',
        location: 'Kyoto Station',
        description: 'Comfortable rail transfer to the deer-filled ancient capital.',
        type: 'travel',
      },
      {
        time: '11:30',
        title: 'Nara park loop',
        location: 'Nara Park',
        description: 'Guided walk with heritage stops and scenic viewpoints.',
        type: 'walk',
      },
      {
        time: '18:30',
        title: 'Farewell dinner',
        location: 'Pontocho alley',
        description: 'Final evening in Kyoto with small plates and lantern-lit streets.',
        type: 'celebrate',
      },
    ],
  },
];

export const summaryStats = [
  {
    label: 'Trips planned',
    value: '12',
    icon: Sparkles,
    tone: 'text-cyan-300',
  },
  {
    label: 'Budget health',
    value: '82%',
    icon: Wallet,
    tone: 'text-emerald-300',
  },
  {
    label: 'Saved hours',
    value: '24h',
    icon: CalendarDays,
    tone: 'text-violet-300',
  },
];
