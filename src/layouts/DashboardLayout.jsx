import { useTravel } from '../context/TravelContext';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

export default function DashboardLayout({ children }) {
  const { isSidebarOpen, setIsSidebarOpen } = useTravel();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="flex min-h-screen flex-1 flex-col">
          <TopBar />
          <main className="flex-1 overflow-y-auto px-4 pb-8 pt-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
