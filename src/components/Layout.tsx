import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <footer className="bg-navy text-white/50 text-center py-6 px-4 text-[12px] font-mono tracking-wide">
        <span className="text-gold">Sneha Pal</span> · Statistician &amp; Data Scientist · ISI Bangalore
      </footer>
    </div>
  )
}
