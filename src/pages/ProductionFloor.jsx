// Generated from stitch/pd_production-management-software.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './ProductionFloor.css'

export default function ProductionFloor() {
  return (
    <div className="pg-production-floor bg-surface text-[#1b1b1a] antialiased selection:bg-[#ff7555]/20 selection:text-[#ff7555]">
      <title>{"Horizon | Production Floor Management"}</title>
      {' '}
      {' '}
      <section className="relative pt-10 pb-16 px-6 max-w-7xl mx-auto mesh-gradient-hero">
        <nav className="flex items-center gap-2 text-xs font-medium text-[#474744] mb-6">
          <Link to="/products" className="hover:text-[#1b1b1a] transition-colors">
            Products
          </Link>
          {' '}
          <span>
            /
          </span>
          {' '}
          <a href="#" className="hover:text-[#1b1b1a] transition-colors">
            {"Operations & Supply Chain"}
          </a>
          {' '}
          <span>
            /
          </span>
          {' '}
          <span className="text-[#1b1b1a] font-semibold">
            Production Floor Management
          </span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-accent-lime text-accent-lime-text text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime-text" />
              {' '}
              {"Shop Floor Control & Execution"}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#1b1b1a] leading-[1.12]">
              Production Floor Management
            </h1>
            <p className="text-lg sm:text-xl text-[#474744] leading-relaxed font-normal">
              Know exactly what is being made, by whom, and how far behind or ahead of schedule it is, in real time.
            </p>
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#787773] mb-3">
                Core Floor Capabilities
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-[6px] bg-white border border-[#c7c6c1]/40 text-xs font-medium text-[#1b1b1a] shadow-xs">
                  <svg className="w-4 h-4 text-[#ff7555] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {' '}
                  <span>
                    Real-Time Work-in-Progress Tracking
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-[6px] bg-white border border-[#c7c6c1]/40 text-xs font-medium text-[#1b1b1a] shadow-xs">
                  <svg className="w-4 h-4 text-[#ff7555] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  {' '}
                  <span>
                    Overall Equipment Effectiveness (OEE)
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-[6px] bg-white border border-[#c7c6c1]/40 text-xs font-medium text-[#1b1b1a] shadow-xs">
                  <svg className="w-4 h-4 text-[#ff7555] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  {' '}
                  <span>
                    Downtime Reason Code Capture
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-[6px] bg-white border border-[#c7c6c1]/40 text-xs font-medium text-[#1b1b1a] shadow-xs">
                  <svg className="w-4 h-4 text-[#ff7555] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {' '}
                  <span>
                    Genealogy and Lot Traceability
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-[6px] bg-white border border-[#c7c6c1]/40 text-xs font-medium text-[#1b1b1a] shadow-xs">
                  <svg className="w-4 h-4 text-[#ff7555] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {' '}
                  <span>
                    In-Process Quality Checks at Hold Points
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-[6px] bg-white border border-[#c7c6c1]/40 text-xs font-medium text-[#1b1b1a] shadow-xs">
                  <svg className="w-4 h-4 text-[#ff7555] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {' '}
                  <span>
                    Shop Floor Terminal Labor Tracking
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="demo-form" className="lg:col-span-5">
            <div className="bg-surface-container-lowest border border-[#c7c6c1]/40 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#ff7555]">
                  Live Walk-Through
                </span>
                {' '}
                <span className="px-2 py-0.5 rounded-[6px] bg-accent-lime text-accent-lime-text text-[11px] font-semibold">
                  Active Scoping
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#1b1b1a] tracking-tight">
                Book a free product demo
              </h2>
              <p className="text-xs text-[#474744] mt-1 mb-6 leading-normal">
                See how Horizon unifies work orders, terminal labor, and machine telemetry in one live dispatch board.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-semibold text-[#1b1b1a] mb-1">
                    Full Name
                  </label>
                  {' '}
                  <input type="text" placeholder="e.g. Jordan Vance" className="w-full px-3.5 py-2.5 text-sm bg-surface-container-low border border-[#c7c6c1]/50 rounded-[10px] focus:outline-none focus:border-[#ff7555] focus:ring-1 focus:ring-[#ff7555] text-[#1b1b1a] placeholder:text-[#787773]/70" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1b1b1a] mb-1">
                    Work Email
                  </label>
                  {' '}
                  <input type="email" placeholder="jordan@plant-operations.com" className="w-full px-3.5 py-2.5 text-sm bg-surface-container-low border border-[#c7c6c1]/50 rounded-[10px] focus:outline-none focus:border-[#ff7555] focus:ring-1 focus:ring-[#ff7555] text-[#1b1b1a] placeholder:text-[#787773]/70" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1b1b1a] mb-1">
                    Phone Number
                  </label>
                  {' '}
                  <input type="tel" placeholder="Phone number" className="w-full px-3.5 py-2.5 text-sm bg-surface-container-low border border-[#c7c6c1]/50 rounded-[10px] focus:outline-none focus:border-[#ff7555] focus:ring-1 focus:ring-[#ff7555] text-[#1b1b1a] placeholder:text-[#787773]/70" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1b1b1a] mb-1">
                    Active Production Lines / Facilities
                  </label>
                  {' '}
                  <select className="w-full px-3.5 py-2.5 text-sm bg-surface-container-low border border-[#c7c6c1]/50 rounded-[10px] focus:outline-none focus:border-[#ff7555] focus:ring-1 focus:ring-[#ff7555] text-[#1b1b1a]">
                    <option>
                      1 – 4 Active Lines
                    </option>
                    <option>
                      5 – 12 Production Bays
                    </option>
                    <option>
                      13+ Multi-Facility Operation
                    </option>
                  </select>
                </div>
                {' '}
                <button type="submit" className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#ff7555] hover:bg-primary-hover rounded-[10px] shadow-sm transition-all duration-150 active:scale-[0.99] flex items-center justify-center gap-2">
                  <span>
                    Request Tailored Walk-Through
                  </span>
                  {' '}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
              <div className="mt-4 pt-4 border-t border-[#c7c6c1]/30 flex items-center gap-2 text-[11px] text-[#787773]">
                <svg className="w-3.5 h-3.5 text-accent-lime-text shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {' '}
                <span>
                  Encrypted hosting, role-based access and regular backups.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-[#c7c6c1]/30">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-accent-cyan text-accent-cyan-text text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan-text" />
            {' '}
            Live Floor Telemetry
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#1b1b1a]">
            Operational Control in Real Time — See the Floor in Action
          </h2>
          <p className="text-sm text-[#474744] mt-2">
            Observe real-time work center statuses, automated downtime reason classification, and deterministic WIP progression.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-[#e9e7e3] rounded-2xl border border-[#c7c6c1]/40 p-6 flex flex-col justify-between shadow-xs relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-[#474744]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                {' '}
                <span className="font-semibold text-[#1b1b1a]">
                  Floor Terminal Walkthrough
                </span>
              </div>
              {' '}
              <span className="px-2 py-0.5 rounded-[6px] bg-white text-[11px] font-mono font-medium text-[#1b1b1a] border border-[#c7c6c1]/30">
                HD 1080p
              </span>
            </div>
            <div className="my-8 rounded-xl bg-[#1b1b1a] text-white p-8 flex flex-col items-center justify-center text-center relative overflow-hidden aspect-video">
              <div className="w-16 h-16 rounded-full bg-[#ff7555]/90 text-white flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform mb-4">
                <svg className="w-7 h-7 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm font-semibold tracking-wide">
                Interactive Work Center Feed
              </p>
              <p className="text-xs text-surface-dim mt-1 max-w-xs">
                Observe operator hold-point validation, barcode scan events, and instantaneous ERP synchronizations.
              </p>
              <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[10px] text-surface-dim/80 font-mono">
                <span>
                  Terminal #04 // CNC Line
                </span>
                {' '}
                <span>
                  Latency: 14ms
                </span>
              </div>
            </div>
            <div className="space-y-2 text-xs text-[#474744] border-t border-[#c7c6c1]/30 pt-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  Active Assembly Session
                </span>
                {' '}
                <span className="font-mono text-[#1b1b1a] font-semibold">
                  WO-4821-B9
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  Operator Authentication
                </span>
                {' '}
                <span className="px-2 py-0.5 rounded-[6px] bg-accent-lime text-accent-lime-text font-semibold text-[10px]">
                  Station Verified
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#c7c6c1]/50 p-6 shadow-sm flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#c7c6c1]/30">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <div>
                  <h3 className="text-sm font-bold text-[#1b1b1a]">
                    Floor Dispatch Engine v4.2
                  </h3>
                  <p className="text-[11px] text-[#474744] font-mono">
                    {"Line 01: Precision Milling & Automated Assembly"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-[6px] bg-accent-lime text-accent-lime-text text-xs font-semibold">
                  Shift In Progress
                </span>
                {' '}
                <span className="px-2.5 py-1 rounded-[6px] bg-[#efede9] text-[#1b1b1a] text-xs font-mono">
                  OEE: 87%
                </span>
              </div>
            </div>
            <div className="py-4 space-y-3">
              <div className="p-3.5 rounded-[10px] bg-surface-container-lowest border border-[#c7c6c1]/40 hover:border-[#ff7555]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-[6px] bg-[#efede9] text-[11px] font-bold text-[#1b1b1a]">
                      BAY 01
                    </span>
                    {' '}
                    <span className="text-xs font-bold text-[#1b1b1a]">
                      CNC Multi-Axis Spindle
                    </span>
                  </div>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                    Cutting Cycle (Active)
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-[11px] text-[#474744] mt-2 pt-2 border-t border-[#c7c6c1]/20">
                  <div>
                    <span className="text-[#787773] text-[10px] block">
                      Work Order:
                    </span>
                    {' '}
                    <span className="font-mono font-semibold text-[#1b1b1a]">
                      WO-4822
                    </span>
                  </div>
                  <div>
                    <span className="text-[#787773] text-[10px] block">
                      Operator:
                    </span>
                    {' '}
                    <span className="font-medium text-[#1b1b1a]">
                      Marcus V.
                    </span>
                  </div>
                  <div>
                    <span className="text-[#787773] text-[10px] block">
                      Progress:
                    </span>
                    {' '}
                    <span className="font-mono font-semibold text-[#ff7555]">
                      84 / 100 units
                    </span>
                  </div>
                  <div>
                    <span className="text-[#787773] text-[10px] block">
                      Schedule Delta:
                    </span>
                    {' '}
                    <span className="font-mono text-emerald-600 font-semibold">
                      +12 min Ahead
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-3.5 rounded-[10px] bg-amber-50/60 border border-amber-200/80">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-[6px] bg-amber-200 text-[11px] font-bold text-amber-900">
                      BAY 02
                    </span>
                    {' '}
                    <span className="text-xs font-bold text-[#1b1b1a]">
                      {"Tolerance & Ultrasonic Weld Inspection"}
                    </span>
                  </div>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-amber-100 text-amber-800 border border-amber-300 text-[11px] font-semibold">
                    Hold Point #3 Required
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-[11px] text-[#474744] mt-2 pt-2 border-t border-amber-200/50">
                  <div>
                    <span className="text-[#787773] text-[10px] block">
                      Lot Genealogy:
                    </span>
                    {' '}
                    <span className="font-mono font-semibold text-[#1b1b1a]">
                      LOT-17-98
                    </span>
                  </div>
                  <div>
                    <span className="text-[#787773] text-[10px] block">
                      Inspector:
                    </span>
                    {' '}
                    <span className="font-medium text-[#1b1b1a]">
                      Sarah J.
                    </span>
                  </div>
                  <div>
                    <span className="text-[#787773] text-[10px] block">
                      Sample Size:
                    </span>
                    {' '}
                    <span className="font-mono font-semibold text-[#1b1b1a]">
                      5 of 50 Passed
                    </span>
                  </div>
                  <div>
                    <span className="text-[#787773] text-[10px] block">
                      Action:
                    </span>
                    {' '}
                    <span className="font-semibold text-amber-900 underline cursor-pointer">
                      Sign-off Signet
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-3.5 rounded-[10px] bg-rose-50/50 border border-rose-200/80">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-[6px] bg-rose-200 text-[11px] font-bold text-rose-900">
                      BAY 03
                    </span>
                    {' '}
                    <span className="text-xs font-bold text-[#1b1b1a]">
                      Final Enclosure Robotic Riveting
                    </span>
                  </div>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-rose-100 text-rose-800 border border-rose-300 text-[11px] font-semibold">
                    Downtime Logged (Code: E-14)
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-[11px] text-[#474744] mt-2 pt-2 border-t border-rose-200/50">
                  <div>
                    <span className="text-[#787773] text-[10px] block">
                      Reason:
                    </span>
                    {' '}
                    <span className="font-medium text-rose-900">
                      Feed Jam / Pneumatic
                    </span>
                  </div>
                  <div>
                    <span className="text-[#787773] text-[10px] block">
                      Logged At:
                    </span>
                    {' '}
                    <span className="font-mono text-[#1b1b1a]">
                      14:02:18
                    </span>
                  </div>
                  <div>
                    <span className="text-[#787773] text-[10px] block">
                      Maintenance:
                    </span>
                    {' '}
                    <span className="text-rose-700 font-semibold">
                      Dispatched (Alex P.)
                    </span>
                  </div>
                  <div>
                    <span className="text-[#787773] text-[10px] block">
                      Duration:
                    </span>
                    {' '}
                    <span className="font-mono text-rose-700 font-bold">
                      18 min elapsed
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-[#c7c6c1]/30 flex items-center justify-between text-[11px] text-[#474744] font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7555]" />
                {' '}
                <span>
                  Live PLC / Terminal Link: 14 Work Centers Synced
                </span>
              </div>
              {' '}
              <span>
                Cryptographic Work Order Ledger Validated
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-[#c7c6c1]/30">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-primary-soft text-[#ff7555] text-xs font-semibold uppercase tracking-wider mb-3">
            Shop Floor Reality Check
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1b1b1a] leading-tight">
            Close the Gap Between Plan and Floor
          </h2>
          <p className="text-base sm:text-lg text-[#474744] mt-4 leading-relaxed">
            A production plan on paper means little if nobody can see what is actually happening at the machine level. This system captures live data from work orders, operators, and stations, so managers see work-in-progress, downtime, and bottlenecks as they happen, not in next week’s post-mortem spreadsheet report.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs">
            <div className="w-8 h-8 rounded-[6px] bg-accent-lime text-accent-lime-text flex items-center justify-center font-bold mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
              {"Real-Time Work Order & WIP Tracking"}
            </h3>
            <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
              Continuous operational intelligence across every production step, eliminating status blind spots and unrecorded delays between work centers.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs">
            <div className="w-8 h-8 rounded-[6px] bg-accent-lime text-accent-lime-text flex items-center justify-center font-bold mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
              {"Downtime & Root-Cause Capture"}
            </h3>
            <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
              Standardized downtime categorization logged directly at the terminal by operators, surfacing chronic machine friction instantly.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs">
            <div className="w-8 h-8 rounded-[6px] bg-accent-lime text-accent-lime-text flex items-center justify-center font-bold mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
              Digital Work Instructions
            </h3>
            <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
              Replace torn, oil-stained paper travelers with interactive, revision-locked visual guidance and verified sign-off checkpoints.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-[#c7c6c1]/30">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-[#efede9] text-[#1b1b1a] text-xs font-semibold uppercase tracking-wider mb-3">
            Engineered Floor Primitives
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1b1b1a]">
            Real-Time Visibility, Not End-of-Shift Reports
          </h2>
          <p className="text-sm sm:text-base text-[#474744] mt-3">
            Six foundational capabilities that bridge the operational gap between frontline shop floor execution and executive decisions.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-3.5">
            <div className="p-4 sm:p-5 rounded-xl bg-white border-2 border-[#ff7555] shadow-sm relative">
              <div className="flex items-start gap-4">
                <span className="text-[#ff7555] font-mono font-bold text-lg pt-0.5">
                  01
                </span>
                {' '}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-[#1b1b1a]">
                      Real-Time Work-in-Progress Tracking
                    </h3>
                    {' '}
                    <span className="px-2 py-0.5 rounded-[6px] bg-primary-soft text-[#ff7555] font-semibold text-[10px]">
                      Active Focus
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
                    Work order status updates live as operators log each step, showing supervisors exactly where every job sits, no end-of-shift tally needed. Eliminates status speculation across multiple parallel production runs.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs hover:border-[#c7c6c1] transition-colors">
              <div className="flex items-start gap-4">
                <span className="text-[#787773] font-mono font-bold text-lg pt-0.5">
                  02
                </span>
                {' '}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#1b1b1a]">
                    Overall Equipment Effectiveness (OEE) Measurement
                  </h3>
                  <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
                    Automated continuous computation of machine availability, performance rate, and quality output directly from terminal cycle inputs and sensor feeds.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs hover:border-[#c7c6c1] transition-colors">
              <div className="flex items-start gap-4">
                <span className="text-[#787773] font-mono font-bold text-lg pt-0.5">
                  03
                </span>
                {' '}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#1b1b1a]">
                    Downtime Reason Code Capture
                  </h3>
                  <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
                    One-tap categorization of operational micro-stoppages, tool breakages, and material starvation to generate reliable Pareto distributions.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs hover:border-[#c7c6c1] transition-colors">
              <div className="flex items-start gap-4">
                <span className="text-[#787773] font-mono font-bold text-lg pt-0.5">
                  04
                </span>
                {' '}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#1b1b1a]">
                    Genealogy and Lot Traceability
                  </h3>
                  <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
                    Deterministic forward and backward component linkage that associates serialized sub-assemblies with raw material heats and operator IDs.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs hover:border-[#c7c6c1] transition-colors">
              <div className="flex items-start gap-4">
                <span className="text-[#787773] font-mono font-bold text-lg pt-0.5">
                  05
                </span>
                {' '}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#1b1b1a]">
                    In-Process Quality Checks at Defined Hold Points
                  </h3>
                  <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
                    Mandatory digital interlocks that halt line progression until critical dimensional tolerances and safety criteria receive cryptographic supervisor approval.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs hover:border-[#c7c6c1] transition-colors">
              <div className="flex items-start gap-4">
                <span className="text-[#787773] font-mono font-bold text-lg pt-0.5">
                  06
                </span>
                {' '}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#1b1b1a]">
                    Shop Floor Terminal Labor Tracking
                  </h3>
                  <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
                    Frictionless badge-scan time allocation tying direct operator touch-hours and machine runtimes directly into unified job-costing ledgers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-surface-container-low rounded-2xl border border-[#c7c6c1]/50 p-6 space-y-6 sticky top-28">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff7555]">
                Feature 01 Deep Dive
              </span>
              {' '}
              <h3 className="text-xl font-bold text-[#1b1b1a] mt-1">
                Live WIP Orchestration Engine
              </h3>
              <p className="text-xs text-[#474744] mt-2 leading-relaxed">
                Every step completed on a ruggedized shop floor terminal emits an immutable progress record. Production supervisors see active cycle times, sub-assembly milestones, and scrap tallies as they happen.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#c7c6c1]/40 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#1b1b1a]">
                  Active Production Routing Sample
                </span>
                {' '}
                <span className="px-2 py-0.5 rounded-[6px] bg-accent-lime text-accent-lime-text font-semibold text-[10px]">
                  99.8% Sync Integrity
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-[#c7c6c1]/20">
                  <span className="text-[#474744]">
                    Active Job Batch:
                  </span>
                  {' '}
                  <span className="font-mono font-semibold text-[#1b1b1a]">
                    WO-4842-Precision-Gear
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#c7c6c1]/20">
                  <span className="text-[#474744]">
                    Scheduled Lot Size:
                  </span>
                  {' '}
                  <span className="font-mono font-semibold text-[#1b1b1a]">
                    640 Finished Units
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#c7c6c1]/20">
                  <span className="text-[#474744]">
                    Current Hold Station:
                  </span>
                  {' '}
                  <span className="font-semibold text-[#ff7555]">
                    Station 03 (Heat Treatment)
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-[#474744]">
                    Scrap / Rework Rate:
                  </span>
                  {' '}
                  <span className="font-mono text-emerald-700 font-bold">
                    0.42% (Within Spec)
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#c7c6c1]/30 text-xs text-[#474744] italic leading-relaxed">
              “Work orders are verified against the bill-of-materials and routing rules in real time, preventing unauthorized deviation or uncalibrated tooling use.”
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#787773] font-mono">
              <span>
                Automated dispatch update interval:
              </span>
              {' '}
              <span className="font-bold text-[#1b1b1a]">
                42 ms
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-[#c7c6c1]/30">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-accent-cyan text-accent-cyan-text text-xs font-semibold uppercase tracking-wider mb-3">
            Execution Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1b1b1a]">
            From Released Work Order to Reported Cost
          </h2>
          <p className="text-sm sm:text-base text-[#474744] mt-2">
            Four deterministic stages that connect the physical shop floor to management in real time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs flex flex-col justify-between h-full relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-[6px] bg-[#ff7555] text-white font-mono font-bold text-sm flex items-center justify-center">
                  01
                </span>
                {' '}
                <span className="text-[11px] font-semibold text-[#787773] uppercase tracking-wider">
                  Release
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
                Release the Work Order
              </h3>
              <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
                Work orders are released to the floor with digital instructions, bill-of-materials, and inspection criteria attached directly to the batch traveler.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#c7c6c1]/20 flex items-center gap-1.5 text-xs text-[#ff7555] font-semibold">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {' '}
              <span>
                CAD/SOP Embedded
              </span>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs flex flex-col justify-between h-full relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-[6px] bg-[#ff7555] text-white font-mono font-bold text-sm flex items-center justify-center">
                  02
                </span>
                {' '}
                <span className="text-[11px] font-semibold text-[#787773] uppercase tracking-wider">
                  Logging
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
                Log Progress at the Station
              </h3>
              <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
                Operators log progress, material lot consumption, and downtime reasons directly on ruggedized touchscreen terminals at each station.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#c7c6c1]/20 flex items-center gap-1.5 text-xs text-[#ff7555] font-semibold">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {' '}
              <span>
                Terminal Touch Sync
              </span>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs flex flex-col justify-between h-full relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-[6px] bg-[#ff7555] text-white font-mono font-bold text-sm flex items-center justify-center">
                  03
                </span>
                {' '}
                <span className="text-[11px] font-semibold text-[#787773] uppercase tracking-wider">
                  Supervision
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
                Monitor Live Dashboards
              </h3>
              <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
                Supervisors and operations leaders track live WIP status, pace deviations, and bottlenecks through dynamic floor boards in real time.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#c7c6c1]/20 flex items-center gap-1.5 text-xs text-[#ff7555] font-semibold">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {' '}
              <span>
                Sub-second Triage
              </span>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs flex flex-col justify-between h-full relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-[6px] bg-[#ff7555] text-white font-mono font-bold text-sm flex items-center justify-center">
                  04
                </span>
                {' '}
                <span className="text-[11px] font-semibold text-[#787773] uppercase tracking-wider">
                  Reporting
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
                Feed Data into Reporting
              </h3>
              <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
                Completed orders automatically push precise labor hours, actual material costs, and verified quality data straight back into ERP accounting ledgers.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#c7c6c1]/20 flex items-center gap-1.5 text-xs text-[#ff7555] font-semibold">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {' '}
              <span>
                Ledger Reconciliation
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-[#c7c6c1]/30">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-accent-lime text-accent-lime-text text-xs font-semibold uppercase tracking-wider mb-3">
            Business Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1b1b1a]">
            Why Floors Move Off Paper Travelers
          </h2>
          <p className="text-sm sm:text-base text-[#474744] mt-2">
            Fewer surprises, faster root-cause fixes, and total precision in production job costing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs">
            <div className="w-10 h-10 rounded-[6px] bg-primary-soft text-[#ff7555] flex items-center justify-center font-bold mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
              Fewer Surprises
            </h3>
            <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
              Fewer surprises about where production orders actually stand. True visibility eliminates guesswork and customer delivery misses.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs">
            <div className="w-10 h-10 rounded-[6px] bg-primary-soft text-[#ff7555] flex items-center justify-center font-bold mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
              Faster Root-Cause Fixes
            </h3>
            <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
              Faster identification of recurring downtime causes, enabling engineering teams to address tool wear and line jams proactively.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs">
            <div className="w-10 h-10 rounded-[6px] bg-primary-soft text-[#ff7555] flex items-center justify-center font-bold mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
              Accurate Costing
            </h3>
            <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
              More accurate cost tracking per production run, calculating precise raw material consumption and station touch-time down to the penny.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs">
            <div className="w-10 h-10 rounded-[6px] bg-primary-soft text-[#ff7555] flex items-center justify-center font-bold mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
              Earlier Quality Catches
            </h3>
            <p className="text-xs sm:text-sm text-[#474744] leading-relaxed">
              Quality issues caught earlier in the process at defined hold points, not during final packaging when scrap costs are highest.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#c7c6c1]/30">
          <div className="p-5 rounded-xl bg-surface-container-low border border-[#c7c6c1]/40">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-[#ff7555]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              {' '}
              <h4 className="text-sm font-bold text-[#1b1b1a]">
                Enterprise-Grade Security
              </h4>
            </div>
            <p className="text-xs text-[#474744] leading-relaxed">
              Encrypted hosting, role-based access control, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-surface-container-low border border-[#c7c6c1]/40">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-[#ff7555]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {' '}
              <h4 className="text-sm font-bold text-[#1b1b1a]">
                Transparent, Scoped Pricing
              </h4>
            </div>
            <p className="text-xs text-[#474744] leading-relaxed">
              Every engagement is scoped individually with a fixed price and timeline agreed upfront — book a free consultation for a tailored quote.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-surface-container-low border border-[#c7c6c1]/40">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-[#ff7555]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {' '}
              <h4 className="text-sm font-bold text-[#1b1b1a]">
                Built for Your Whole Team
              </h4>
            </div>
            <p className="text-xs text-[#474744] leading-relaxed">
              Role-based views mean owners, managers, and frontline staff each see exactly what they need, nothing more, nothing missing.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-[#c7c6c1]/30">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-[#efede9] text-[#1b1b1a] text-xs font-semibold uppercase tracking-wider mb-3">
            Operational Transformation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1b1b1a]">
            What Changes on Day One
          </h2>
          <p className="text-sm sm:text-base text-[#474744] mt-2">
            Comparing fragmented paper travelers against the Horizon synchronized shop floor core.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-rose-200/60 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-rose-100">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-[6px] bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-bold">
                  ✕
                </span>
                {' '}
                <h3 className="text-base font-bold text-[#1b1b1a]">
                  The Fragmented Floor Model
                </h3>
              </div>
              {' '}
              <span className="px-2 py-0.5 rounded-[6px] bg-rose-50 text-rose-700 text-[11px] font-semibold">
                Before Horizon
              </span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-[#474744] leading-relaxed">
                <span className="text-rose-500 font-bold text-sm mt-0.5">
                  ✕
                </span>
                {' '}
                <span>
                  Paper travelers follow the job around the floor, getting misplaced, soiled, or updated with illegible pencil handwriting.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-[#474744] leading-relaxed">
                <span className="text-rose-500 font-bold text-sm mt-0.5">
                  ✕
                </span>
                {' '}
                <span>
                  Downtime causes guessed at during a shift meeting based on memory and subjective operator recollections.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-[#474744] leading-relaxed">
                <span className="text-rose-500 font-bold text-sm mt-0.5">
                  ✕
                </span>
                {' '}
                <span>
                  Costs calculated after the job is already finished, making variance adjustments impossible mid-run.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-[#474744] leading-relaxed">
                <span className="text-rose-500 font-bold text-sm mt-0.5">
                  ✕
                </span>
                {' '}
                <span>
                  Defects caught only at final inspection, forcing entire lots into scrap or costly teardown cycles.
                </span>
              </li>
            </ul>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-emerald-200/60 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-emerald-100">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-[6px] bg-accent-lime text-accent-lime-text flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                {' '}
                <h3 className="text-base font-bold text-[#1b1b1a]">
                  The Horizon Synchronized Shop Floor
                </h3>
              </div>
              {' '}
              <span className="px-2 py-0.5 rounded-[6px] bg-emerald-50 text-emerald-800 text-[11px] font-semibold">
                After Horizon
              </span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-[#474744] leading-relaxed">
                <span className="text-emerald-600 font-bold text-sm mt-0.5">
                  ✓
                </span>
                {' '}
                <span>
                  Digital work instructions updated at each station with verified revision control and CAD drawings.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-[#474744] leading-relaxed">
                <span className="text-emerald-600 font-bold text-sm mt-0.5">
                  ✓
                </span>
                {' '}
                <span>
                  Downtime and root cause logged automatically at the terminal, triggering instant maintenance escalation.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-[#474744] leading-relaxed">
                <span className="text-emerald-600 font-bold text-sm mt-0.5">
                  ✓
                </span>
                {' '}
                <span>
                  Labor and material tracked live at each station, providing immediate actual-vs-standard variance alerts.
                </span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-[#474744] leading-relaxed">
                <span className="text-emerald-600 font-bold text-sm mt-0.5">
                  ✓
                </span>
                {' '}
                <span>
                  Quality checkpoints built into the workflow itself, preventing subsequent processing if tolerances fail.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-4xl mx-auto border-t border-[#c7c6c1]/30">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-primary-soft text-[#ff7555] text-xs font-semibold uppercase tracking-wider mb-3">
            Enterprise Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1b1b1a]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#474744] mt-2">
            Clear, deterministic answers regarding plant floor rollout, device compatibility, and data security.
          </p>
        </div>
        <div className="space-y-3">
          <div className="border border-[#c7c6c1]/40 rounded-xl bg-white overflow-hidden shadow-xs">
            <button className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#1b1b1a] focus:outline-none">
              <span>
                Can it connect to the machines we already have on the floor?
              </span>
              {' '}
              <svg className="w-5 h-5 text-[#ff7555] shrink-0 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {' '}
            <div className="px-5 pb-5 text-xs sm:text-sm text-[#474744] leading-relaxed border-t border-[#c7c6c1]/20 pt-3">
              Yes. Horizon integrates directly with existing PLC controllers, CNC nodes, MTConnect streams, and OPC-UA servers. For legacy or mechanical work centers without digital outputs, operators utilize ruggedized touch terminals or Bluetooth barcode/RFID scanners to log cycle starts, completions, and downtime codes seamlessly.
            </div>
          </div>
          <div className="border border-[#c7c6c1]/40 rounded-xl bg-white overflow-hidden shadow-xs">
            <button className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#1b1b1a] focus:outline-none">
              <span>
                How does this differ from just using a spreadsheet to track jobs?
              </span>
              {' '}
              <svg className="w-5 h-5 text-[#787773] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {' '}
            <div className="hidden px-5 pb-5 text-xs sm:text-sm text-[#474744] leading-relaxed border-t border-[#c7c6c1]/20 pt-3">
              Spreadsheets rely on delayed manual re-typing at the conclusion of shifts, creating stale reporting and undetected bottlenecks. Horizon captures events at the instant of execution, enforces physical hold points, and updates inventory and accounting balances automatically.
            </div>
          </div>
          <div className="border border-[#c7c6c1]/40 rounded-xl bg-white overflow-hidden shadow-xs">
            <button className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#1b1b1a] focus:outline-none">
              <span>
                Can quality inspectors flag a defect mid-run rather than at final inspection?
              </span>
              {' '}
              <svg className="w-5 h-5 text-[#787773] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {' '}
            <div className="hidden px-5 pb-5 text-xs sm:text-sm text-[#474744] leading-relaxed border-t border-[#c7c6c1]/20 pt-3">
              Yes. Inspectors and station operators can place specific work order serialized units or entire lots on Quality Hold at any designated milestone, preventing the routing engine from permitting downline processing until engineering disposition occurs.
            </div>
          </div>
          <div className="border border-[#c7c6c1]/40 rounded-xl bg-white overflow-hidden shadow-xs">
            <button className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#1b1b1a] focus:outline-none">
              <span>
                Can it track multiple production lines at once?
              </span>
              {' '}
              <svg className="w-5 h-5 text-[#787773] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {' '}
            <div className="hidden px-5 pb-5 text-xs sm:text-sm text-[#474744] leading-relaxed border-t border-[#c7c6c1]/20 pt-3">
              Horizon natively orchestrates parallel production lines across multi-bay facilities and multiple geographic plants, allowing centralized plant managers to drill down from global OEE to individual spindle states.
            </div>
          </div>
          <div className="border border-[#c7c6c1]/40 rounded-xl bg-white overflow-hidden shadow-xs">
            <button className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#1b1b1a] focus:outline-none">
              <span>
                Does it work for both make-to-order and make-to-stock production?
              </span>
              {' '}
              <svg className="w-5 h-5 text-[#787773] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {' '}
            <div className="hidden px-5 pb-5 text-xs sm:text-sm text-[#474744] leading-relaxed border-t border-[#c7c6c1]/20 pt-3">
              Both production models are fully supported. Make-to-order work orders link directly to sales orders and customer milestones, while make-to-stock routings connect to reorder points and automated inventory stocking thresholds.
            </div>
          </div>
          <div className="border border-[#c7c6c1]/40 rounded-xl bg-white overflow-hidden shadow-xs">
            <button className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#1b1b1a] focus:outline-none">
              <span>
                Can supervisors get alerts when a line falls behind schedule?
              </span>
              {' '}
              <svg className="w-5 h-5 text-[#787773] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {' '}
            <div className="hidden px-5 pb-5 text-xs sm:text-sm text-[#474744] leading-relaxed border-t border-[#c7c6c1]/20 pt-3">
              Yes. Configurable cycle-time variance triggers push real-time alerts via desktop notifications, SMS, or floor stack-lights whenever a work center exceeds scheduled takt times by a predetermined margin.
            </div>
          </div>
          <div className="border border-[#c7c6c1]/40 rounded-xl bg-white overflow-hidden shadow-xs">
            <button className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#1b1b1a] focus:outline-none">
              <span>
                How long does implementation typically take?
              </span>
              {' '}
              <svg className="w-5 h-5 text-[#787773] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {' '}
            <div className="hidden px-5 pb-5 text-xs sm:text-sm text-[#474744] leading-relaxed border-t border-[#c7c6c1]/20 pt-3">
              Because Horizon deploys pre-compiled shop floor primitives and pre-tested hardware adapters, pilot lines typically go live within weeks, followed by phased facility rollouts on fixed timelines.
            </div>
          </div>
          <div className="border border-[#c7c6c1]/40 rounded-xl bg-white overflow-hidden shadow-xs">
            <button className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#1b1b1a] focus:outline-none">
              <span>
                Is our data secure, and who owns it?
              </span>
              {' '}
              <svg className="w-5 h-5 text-[#787773] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {' '}
            <div className="hidden px-5 pb-5 text-xs sm:text-sm text-[#474744] leading-relaxed border-t border-[#c7c6c1]/20 pt-3">
              Your enterprise retains complete, 100% ownership of all work order data, CAD files, operator logs, and machine metrics. We provide encrypted hosting, role-based access control, and regular backups, with fully exportable database schemas.
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-[#c7c6c1]/30">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-[#efede9] text-[#1b1b1a] text-xs font-semibold uppercase tracking-wider mb-2">
              Connected Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1b1b1a]">
              Looking for something else?
            </h2>
            <p className="text-xs sm:text-sm text-[#474744] mt-1">
              Browse productized software and autonomous AI workflows engineered for operational velocity.
            </p>
          </div>
          {' '}
          <Link to="/products" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#ff7555] hover:text-primary-hover transition-colors">
            <span>
              Explore all product packages
            </span>
            {' '}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs flex flex-col justify-between hover:border-[#ff7555]/40 transition-colors">
            <div>
              <div className="w-8 h-8 rounded-[6px] bg-accent-lime text-accent-lime-text flex items-center justify-center font-bold mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
                Smart Inventory Control
              </h3>
              <p className="text-xs text-[#474744] leading-relaxed">
                Know exactly what's on your shelves, in your trucks, and on order — down to the unit, across every warehouse you run.
              </p>
            </div>
            {' '}
            <Link to="/products/inventory-control" className="mt-6 pt-3 border-t border-[#c7c6c1]/20 inline-flex items-center gap-1 text-xs font-semibold text-[#ff7555] hover:text-primary-hover">
              <span>
                Explore Package
              </span>
              {' '}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs flex flex-col justify-between hover:border-[#ff7555]/40 transition-colors">
            <div>
              <div className="w-8 h-8 rounded-[6px] bg-accent-cyan text-accent-cyan-text flex items-center justify-center font-bold mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
                Warehouse Operations Platform
              </h3>
              <p className="text-xs text-[#474744] leading-relaxed">
                Turn a warehouse floor into a system your pickers, packers, and managers can actually see and trust.
              </p>
            </div>
            {' '}
            <Link to="/products/warehouse-operations" className="mt-6 pt-3 border-t border-[#c7c6c1]/20 inline-flex items-center gap-1 text-xs font-semibold text-[#ff7555] hover:text-primary-hover">
              <span>
                Explore Package
              </span>
              {' '}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs flex flex-col justify-between hover:border-[#ff7555]/40 transition-colors">
            <div>
              <div className="w-8 h-8 rounded-[6px] bg-primary-soft text-[#ff7555] flex items-center justify-center font-bold mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
                {"Production Planning & Scheduling"}
              </h3>
              <p className="text-xs text-[#474744] leading-relaxed">
                Plan what to make, when, and with what materials, before the shop floor finds out the hard way.
              </p>
            </div>
            {' '}
            <Link to="/products/production-planning" className="mt-6 pt-3 border-t border-[#c7c6c1]/20 inline-flex items-center gap-1 text-xs font-semibold text-[#ff7555] hover:text-primary-hover">
              <span>
                Explore Package
              </span>
              {' '}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#c7c6c1]/40 shadow-xs flex flex-col justify-between hover:border-[#ff7555]/40 transition-colors">
            <div>
              <div className="w-8 h-8 rounded-[6px] bg-accent-lime text-accent-lime-text flex items-center justify-center font-bold mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#1b1b1a] mb-2">
                AI QC Agent
              </h3>
              <p className="text-xs text-[#474744] leading-relaxed">
                Centralized installation knowledge and schematic verification on your technician's mobile device.
              </p>
            </div>
            {' '}
            <Link to="/products/ai-qc-agent" className="mt-6 pt-3 border-t border-[#c7c6c1]/20 inline-flex items-center gap-1 text-xs font-semibold text-[#ff7555] hover:text-primary-hover">
              <span>
                Explore Package
              </span>
              {' '}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="cta-banner-gradient rounded-3xl p-8 sm:p-12 text-white shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-2.5 py-1 rounded-[6px] bg-white/20 text-white text-xs font-semibold uppercase tracking-wider">
              Fixed-Scope Shop Floor Rollout
            </span>
            {' '}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Unify your shop floor operations with fixed-scope certainty.
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              Connect directly with our solutions engineering team to map your machine centers, work order routings, and ERP synchronization within 48 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <Link to="/contact" className="w-full sm:w-auto text-center px-6 py-3.5 rounded-[10px] bg-white text-[#ff7555] font-bold text-sm hover:bg-surface-container-low transition-colors shadow-sm">
              Book an Architectural Scoping Consultation
            </Link>
          </div>
        </div>
      </section>
      {' '}
    </div>
  )
}
