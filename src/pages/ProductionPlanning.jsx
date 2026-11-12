// Generated from stitch/pd_production-planning-software.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './ProductionPlanning.css'

export default function ProductionPlanning() {
  return (
    <div className="pg-production-planning bg-background text-on-surface antialiased font-body-md selection:bg-primary-container/20 selection:text-primary">
      <title>{"Production Planning & Scheduling | Horizon ERP & AI Automation"}</title>
      {' '}
      {' '}
      <main className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-24 py-8">
        <section className="hero-glow pt-4 pb-12">
          <nav className="flex items-center gap-2 mb-8 text-body-sm font-body-sm text-on-surface-variant">
            <span className="px-2 py-0.5 rounded-[6px] bg-primary-container/15 text-primary text-label-sm font-label-sm tracking-wider uppercase font-semibold">
              {"MANUFACTURING PLANNING & DISPATCH"}
            </span>
            {' '}
            <span className="text-outline-variant/60">
              /
            </span>
            {' '}
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            {' '}
            <span className="text-outline-variant/60">
              /
            </span>
            {' '}
            <a className="hover:text-primary transition-colors" href="#">
              {"Operations & Supply Chain"}
            </a>
            {' '}
            <span className="text-outline-variant/60">
              /
            </span>
            {' '}
            <span className="text-on-surface font-medium">
              {"Production Planning & Scheduling"}
            </span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface tracking-tight leading-tight">
                  {"Production Planning & Scheduling"}
                </h1>
                <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  Plan what to make, when, and with what materials, before the shop floor finds out the hard way.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 shadow-xs hover:border-primary-container/50 transition-colors">
                  <div className="w-8 h-8 rounded-[8px] bg-primary-container/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      account_tree
                    </span>
                  </div>
                  {' '}
                  <span className="text-label-md font-label-md text-on-surface">
                    Multi-Level Bill of Materials Explosion
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 shadow-xs hover:border-primary-container/50 transition-colors">
                  <div className="w-8 h-8 rounded-[8px] bg-secondary-container/30 text-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      calculate
                    </span>
                  </div>
                  {' '}
                  <span className="text-label-md font-label-md text-on-surface">
                    Net Requirements Calculation
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 shadow-xs hover:border-primary-container/50 transition-colors">
                  <div className="w-8 h-8 rounded-[8px] bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      speed
                    </span>
                  </div>
                  {' '}
                  <span className="text-label-md font-label-md text-on-surface">
                    Finite Capacity Scheduling
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 shadow-xs hover:border-primary-container/50 transition-colors">
                  <div className="w-8 h-8 rounded-[8px] bg-primary-container/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      trending_up
                    </span>
                  </div>
                  {' '}
                  <span className="text-label-md font-label-md text-on-surface">
                    Demand Forecasting from Historical Sales
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 shadow-xs hover:border-primary-container/50 transition-colors">
                  <div className="w-8 h-8 rounded-[8px] bg-secondary-container/30 text-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      local_shipping
                    </span>
                  </div>
                  {' '}
                  <span className="text-label-md font-label-md text-on-surface">
                    Supplier Lead-Time-Aware Purchase Timing
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 shadow-xs hover:border-primary-container/50 transition-colors">
                  <div className="w-8 h-8 rounded-[8px] bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      biotech
                    </span>
                  </div>
                  {' '}
                  <span className="text-label-md font-label-md text-on-surface">
                    What-If Scenario Simulation
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 grid grid-cols-3 gap-6">
                <div className="space-y-1">
                  <div className="text-headline-lg font-headline-lg font-bold text-primary tracking-tight">
                    [00%]
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant font-medium">
                    On-Time Job Completion
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-headline-lg font-headline-lg font-bold text-secondary tracking-tight">
                    [00%]
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant font-medium">
                    Stockout Reduction
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-headline-lg font-headline-lg font-bold text-tertiary tracking-tight">
                    [00] hr
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant font-medium">
                    Faster Reschedule Cycle
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-surface-container-lowest rounded-[16px] border border-outline-variant/35 p-8 shadow-sm backdrop-blur-xl space-y-6" id="demo-form">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-[6px] bg-secondary-fixed/40 text-on-secondary-fixed text-label-sm font-label-sm font-semibold tracking-wide uppercase">
                    Interactive Demo
                  </span>
                  {' '}
                  <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {' '}
                    Available Today
                  </span>
                </div>
                <h2 className="text-headline-md font-headline-md text-on-surface">
                  Book a live product demo
                </h2>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  See finite capacity scheduling calibrated to your exact plant layout and ERP data within [00] minutes.
                </p>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface mb-1.5">
                    Full Name
                  </label>
                  {' '}
                  <input className="w-full h-11 px-3.5 rounded-[10px] bg-surface-container-lowest border border-outline-variant/40 text-body-md font-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary-container/30 focus:border-primary-container transition-all" placeholder="e.g. Jordan Vance" type="text" />
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface mb-1.5">
                    Work Email
                  </label>
                  {' '}
                  <input className="w-full h-11 px-3.5 rounded-[10px] bg-surface-container-lowest border border-outline-variant/40 text-body-md font-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary-container/30 focus:border-primary-container transition-all" placeholder="jordan@manufacturing-corp.com" type="email" />
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface mb-1.5">
                    Phone Number
                  </label>
                  {' '}
                  <input className="w-full h-11 px-3.5 rounded-[10px] bg-surface-container-lowest border border-outline-variant/40 text-body-md font-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary-container/30 focus:border-primary-container transition-all" placeholder="Phone number" type="tel" />
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface mb-1.5">
                    Plant / Facility Size
                  </label>
                  {' '}
                  <select className="w-full h-11 px-3.5 rounded-[10px] bg-surface-container-lowest border border-outline-variant/40 text-body-md font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container/30 focus:border-primary-container transition-all">
                    <option value="small">
                      {"Single Site (< 50 Work Centers)"}
                    </option>
                    <option value="medium">
                      Multi-Line Facility (50 - 250 Work Centers)
                    </option>
                    <option value="enterprise">
                      Global Enterprise Network ([00+] Sites)
                    </option>
                  </select>
                </div>
                {' '}
                <button className="w-full h-12 mt-2 rounded-[10px] bg-gradient-to-r from-primary-container to-primary text-on-primary font-semibold text-label-lg font-label-lg shadow-sm hover:shadow-md hover:shadow-primary/20 transition-all flex items-center justify-center gap-2" type="submit">
                  <span>
                    Request Live Demonstration
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              </form>
              <div className="pt-2 flex items-center justify-center gap-2 text-on-surface-variant text-label-sm font-label-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  lock
                </span>
                {' '}
                <span>
                  Encrypted hosting, role-based access, and regular backups.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-3">
            <span className="px-2.5 py-1 rounded-[6px] bg-tertiary-fixed text-on-tertiary-fixed text-label-sm font-label-sm uppercase tracking-wider font-semibold">
              INTERACTIVE COCKPIT VIEW
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              {"See Production Planning & Scheduling in Action"}
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">
              Real-time finite-capacity routing, multi-level BOM explosion, and dynamic dispatch conflict detection.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 bg-inverse-surface rounded-[20px] p-6 text-inverse-on-surface flex flex-col justify-between relative overflow-hidden border border-outline/30 min-h-[460px]">
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  {' '}
                  <span className="text-label-md font-label-md tracking-wide">
                    Main Plant Alpha — Active Dispatch Gantt
                  </span>
                </div>
                <div className="flex items-center gap-2 text-label-sm font-label-sm text-surface-variant font-mono">
                  <span className="material-symbols-outlined text-[14px]">
                    graphic_eq
                  </span>
                  {' '}
                  <span>
                    LIVE [00] FPS
                  </span>
                </div>
              </div>
              <div className="relative z-10 my-auto text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-[10px] bg-primary-container text-on-primary-container mx-auto flex items-center justify-center shadow-lg shadow-primary-container/20 cursor-pointer hover:scale-105 transition-transform group">
                  <span className="material-symbols-outlined fill text-[32px] group-hover:scale-110 transition-transform">
                    play_arrow
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="text-label-lg font-label-lg font-semibold tracking-wide">
                    Interactive Run-Through
                  </div>
                  <div className="text-label-sm font-label-sm text-surface-variant">
                    Runtime: [00]:[00] mins • Real-Time Work Center Audio Telemetry
                  </div>
                </div>
              </div>
              <div className="relative z-10 border-t border-white/10 pt-4 flex items-center justify-between text-surface-variant text-label-sm font-label-sm">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[18px]">
                    tune
                  </span>
                  {' '}
                  <span>
                    Dynamic Routing Sandbox
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono">
                  <span>
                    04:12 / [00]:[00]
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">
                    fullscreen
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-[20px] border border-outline-variant/40 p-6 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="px-2.5 py-1 rounded-[6px] bg-surface-container text-on-surface text-label-sm font-label-sm font-mono font-bold">
                    Horizon Scheduler OS v4.2
                  </div>
                  {' '}
                  <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-secondary font-medium">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {' '}
                    Master Sync Stable
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-label-sm font-label-sm text-on-surface-variant">
                    Active Shift: B (Day 1)
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-primary-container/15 text-primary text-label-sm font-label-sm font-semibold">
                    4 Cells Active
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-label-sm font-label-sm font-semibold text-on-surface-variant tracking-wider uppercase">
                  Live Work Center Dispatch Allocation
                </div>
                <div className="p-3 rounded-[10px] bg-surface-container-low border border-outline-variant/25 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 rounded-[4px] bg-emerald-500" />
                    <div>
                      <div className="text-label-md font-label-md text-on-surface font-semibold">
                        CNC Cell A (5-Axis Milling)
                      </div>
                      <div className="text-body-sm font-body-sm text-on-surface-variant">
                        PO #8849: Titanium Flange Batches
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 bg-surface-container-high rounded-[6px] h-2.5 overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-[6px]" style={{"width":"92%"}} />
                    </div>
                    {' '}
                    <span className="text-label-sm font-label-sm font-mono font-semibold text-on-surface">
                      92% Load
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-[10px] bg-surface-container-low border border-outline-variant/25 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 rounded-[4px] bg-emerald-500" />
                    <div>
                      <div className="text-label-md font-label-md text-on-surface font-semibold">
                        Robotic Weld Line B
                      </div>
                      <div className="text-body-sm font-body-sm text-on-surface-variant">
                        PO #8852: Frame Chassis Enclosures
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 bg-surface-container-high rounded-[6px] h-2.5 overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-[6px]" style={{"width":"84%"}} />
                    </div>
                    {' '}
                    <span className="text-label-sm font-label-sm font-mono font-semibold text-on-surface">
                      84% Load
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-[10px] bg-error-container/40 border border-error/30 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 rounded-[4px] bg-error" />
                    <div>
                      <div className="text-label-md font-label-md text-error font-semibold flex items-center gap-1.5">
                        Sub-Assembly Station 03
                        {' '}
                        <span className="material-symbols-outlined text-[16px]">
                          warning
                        </span>
                      </div>
                      <div className="text-body-sm font-body-sm text-on-surface-variant">
                        Hydraulic Actuator Fastening (Resource Choke)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 bg-surface-container-high rounded-[6px] h-2.5 overflow-hidden">
                      <div className="bg-error h-full rounded-[6px]" style={{"width":"98%"}} />
                    </div>
                    {' '}
                    <span className="text-label-sm font-label-sm font-mono font-semibold text-error">
                      98% Overload
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-[10px] bg-surface-container-low border border-outline-variant/25 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 rounded-[4px] bg-emerald-500" />
                    <div>
                      <div className="text-label-md font-label-md text-on-surface font-semibold">
                        {"Final Testing & QA Cell"}
                      </div>
                      <div className="text-body-sm font-body-sm text-on-surface-variant">
                        High-Pressure Valve Calibration
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 bg-surface-container-high rounded-[6px] h-2.5 overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-[6px]" style={{"width":"72%"}} />
                    </div>
                    {' '}
                    <span className="text-label-sm font-label-sm font-mono font-semibold text-on-surface">
                      72% Load
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-[12px] bg-surface-container-low border border-outline-variant/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-label-sm font-label-sm font-bold text-on-surface">
                      Multi-Level BOM Explosion
                    </span>
                    {' '}
                    <span className="px-1.5 py-0.5 rounded-[6px] bg-secondary-container/40 text-on-secondary-fixed text-label-sm font-label-sm">
                      Allocated
                    </span>
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant">
                    Hydraulic Actuator Sub-Assemblies: 140/140 components reserved from Bay 4.
                  </div>
                </div>
                <div className="p-3.5 rounded-[12px] bg-surface-container-low border border-outline-variant/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-label-sm font-label-sm font-bold text-on-surface">
                      What-If Reschedule Preview
                    </span>
                    {' '}
                    <span className="px-1.5 py-0.5 rounded-[6px] bg-primary-container/20 text-on-primary-container text-label-sm font-label-sm font-semibold">
                      Rush Simulation
                    </span>
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant">
                    Simulating PO #9012 queue jump: Reallocates Station 03 overload to Bay 5 in [00] min.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="px-2.5 py-1 rounded-[6px] bg-error-container text-on-error-container text-label-sm font-label-sm uppercase tracking-wider font-semibold">
              THE OPERATIONAL BOTTLENECK
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Good scheduling prevents the fires you are currently fighting.
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
              Rush orders, material shortages, and overloaded work centers usually trace back to planning that did not account for real capacity. Horizon calculates material requirements, checks capacity against your actual schedule, and lets you resolve conflicts before they hit the floor as an emergency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest rounded-[14px] p-7 border border-outline-variant/35 shadow-xs space-y-4 hover:border-primary-container/40 transition-all">
              <div className="w-10 h-10 rounded-[10px] bg-primary-container/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">
                  inventory_2
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Material requirements calculated against demand and stock
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Gross customer demand is instantly balanced against free, reserved, and en-route stock so no technician ever begins a job lacking key fasteners or raw billet.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-[14px] p-7 border border-outline-variant/35 shadow-xs space-y-4 hover:border-primary-container/40 transition-all">
              <div className="w-10 h-10 rounded-[10px] bg-secondary-container/30 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">
                  engineering
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Capacity checks against real work-center load
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Say goodbye to infinite-capacity assumptions. Horizon verifies certified technician availability, machine tool lockouts, and true shift fixtures before committing jobs.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-[14px] p-7 border border-outline-variant/35 shadow-xs space-y-4 hover:border-primary-container/40 transition-all">
              <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">
                  alt_route
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                What-if scheduling before committing to a production plan
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                When VIP customers demand urgent turnaround, simulate insertion ripple effects across every work cell in sandbox isolation before publishing to the floor.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="space-y-3">
            <span className="px-2.5 py-1 rounded-[6px] bg-primary-container/15 text-primary text-label-sm font-label-sm uppercase tracking-wider font-semibold">
              ENGINEERED CAPABILITIES
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Planning that accounts for reality
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">
              Six deterministic primitives that connect material planning directly to what your factory floor can actually execute.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-3.5">
              <div className="p-5 rounded-[12px] bg-surface-container-lowest border-2 border-primary-container shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-headline-sm font-headline-sm font-bold text-primary font-mono">
                    01
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-primary-container text-on-primary text-label-sm font-label-sm font-semibold tracking-wide">
                    ACTIVE DEEP DIVE
                  </span>
                </div>
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Multi-Level Bill of Materials Explosion
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  A product's full bill of materials explodes down every sub-assembly automatically, calculating exact input quantities at any production volume.
                </p>
              </div>
              <div className="p-5 rounded-[12px] bg-surface-container-lowest border border-outline-variant/30 shadow-xs space-y-2 hover:border-outline-variant/70 transition-colors">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant font-mono">
                  02
                </span>
                {' '}
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Net Requirements Calculation
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Offsets gross demand against existing inventory, allocated reserves, and scheduled receipts to pinpoint precise net component deficits.
                </p>
              </div>
              <div className="p-5 rounded-[12px] bg-surface-container-lowest border border-outline-variant/30 shadow-xs space-y-2 hover:border-outline-variant/70 transition-colors">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant font-mono">
                  03
                </span>
                {' '}
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Finite Capacity Scheduling
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Dynamically schedules jobs against verified machine uptime, tooling availability, and technician labor shifts without phantom over-allocation.
                </p>
              </div>
              <div className="p-5 rounded-[12px] bg-surface-container-lowest border border-outline-variant/30 shadow-xs space-y-2 hover:border-outline-variant/70 transition-colors">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant font-mono">
                  04
                </span>
                {' '}
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Demand Forecasting from Historical Sales
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Ingests historical ERP shipment data, seasonality, and open client orders to anticipate required manufacturing batches before backlog surges.
                </p>
              </div>
              <div className="p-5 rounded-[12px] bg-surface-container-lowest border border-outline-variant/30 shadow-xs space-y-2 hover:border-outline-variant/70 transition-colors">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant font-mono">
                  05
                </span>
                {' '}
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Supplier Lead-Time-Aware Purchase Timing
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Backward-schedules purchase requisitions so raw stock lands on the loading dock precisely when assembly begins, saving precious floor cash flow.
                </p>
              </div>
              <div className="p-5 rounded-[12px] bg-surface-container-lowest border border-outline-variant/30 shadow-xs space-y-2 hover:border-outline-variant/70 transition-colors">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant font-mono">
                  06
                </span>
                {' '}
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  What-If Scenario Simulation
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Test rush order insertions, machine breakdown reroutes, or delayed raw material arrivals in a sandbox before committing the shop floor.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 bg-surface-container-lowest rounded-[16px] border border-outline-variant/35 p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                <div>
                  <span className="text-label-sm font-label-sm text-primary font-semibold tracking-wide uppercase">
                    Feature Deep Dive
                  </span>
                  {' '}
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">
                    Multi-Level BOM Explosion Engine
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-[6px] bg-surface-container text-on-surface-variant text-label-sm font-label-sm font-mono">
                    Part #HA-904-XL
                  </span>
                </div>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Recursive resolution calculates precise component quantities, lead horizon buffers, and scrap multipliers across sub-levels before queuing machine hours.
              </p>
              <div className="overflow-x-auto border border-outline-variant/20 rounded-[10px]">
                <table className="w-full text-left text-body-sm font-body-sm">
                  <thead className="bg-surface-container-low text-on-surface font-semibold text-label-sm font-label-sm border-b border-outline-variant/20">
                    <tr>
                      <th className="py-3 px-3">
                        Part #
                      </th>
                      <th className="py-3 px-3">
                        Description
                      </th>
                      <th className="py-3 px-2">
                        Lvl
                      </th>
                      <th className="py-3 px-2">
                        Qty
                      </th>
                      <th className="py-3 px-2">
                        Scrap
                      </th>
                      <th className="py-3 px-2">
                        Lead
                      </th>
                      <th className="py-3 px-3">
                        Inventory Lock
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/15 font-mono text-[12px]">
                    <tr className="hover:bg-surface-container-low/50">
                      <td className="py-2.5 px-3 font-semibold text-on-surface">
                        HA-904-XL
                      </td>
                      <td className="py-2.5 px-3 font-sans text-on-surface-variant">
                        Dual-Stage Actuator Assm
                      </td>
                      <td className="py-2.5 px-2">
                        0
                      </td>
                      <td className="py-2.5 px-2">
                        1
                      </td>
                      <td className="py-2.5 px-2">
                        0%
                      </td>
                      <td className="py-2.5 px-2">
                        [00]d
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded-[6px] bg-secondary-container/40 text-on-secondary-fixed text-label-sm font-label-sm font-sans">
                          Final Assembly
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/50">
                      <td className="py-2.5 px-3 font-semibold text-on-surface">
                        ↳ SUB-102
                      </td>
                      <td className="py-2.5 px-3 font-sans text-on-surface-variant">
                        Servo Piston Housing
                      </td>
                      <td className="py-2.5 px-2">
                        1
                      </td>
                      <td className="py-2.5 px-2">
                        2
                      </td>
                      <td className="py-2.5 px-2">
                        1.5%
                      </td>
                      <td className="py-2.5 px-2">
                        [00]d
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded-[6px] bg-emerald-100 text-emerald-800 text-label-sm font-label-sm font-sans">
                          100% Reserved
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/50">
                      <td className="py-2.5 px-3 font-semibold text-on-surface">
                        ↳ RM-441
                      </td>
                      <td className="py-2.5 px-3 font-sans text-on-surface-variant">
                        Billet Alum 7075-T6
                      </td>
                      <td className="py-2.5 px-2">
                        2
                      </td>
                      <td className="py-2.5 px-2">
                        4.2 kg
                      </td>
                      <td className="py-2.5 px-2">
                        3%
                      </td>
                      <td className="py-2.5 px-2">
                        [00]d
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded-[6px] bg-emerald-100 text-emerald-800 text-label-sm font-label-sm font-sans">
                          Stocked (Bin 12)
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/50">
                      <td className="py-2.5 px-3 font-semibold text-on-surface">
                        ↳ SUB-204
                      </td>
                      <td className="py-2.5 px-3 font-sans text-on-surface-variant">
                        Modular Seal Cartridge
                      </td>
                      <td className="py-2.5 px-2">
                        1
                      </td>
                      <td className="py-2.5 px-2">
                        1
                      </td>
                      <td className="py-2.5 px-2">
                        0.5%
                      </td>
                      <td className="py-2.5 px-2">
                        [00]d
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded-[6px] bg-emerald-100 text-emerald-800 text-label-sm font-label-sm font-sans">
                          100% Reserved
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/50">
                      <td className="py-2.5 px-3 font-semibold text-on-surface">
                        ↳ FAST-088
                      </td>
                      <td className="py-2.5 px-3 font-sans text-on-surface-variant">
                        Grade 8 Torx Fastener Set
                      </td>
                      <td className="py-2.5 px-2">
                        1
                      </td>
                      <td className="py-2.5 px-2">
                        16
                      </td>
                      <td className="py-2.5 px-2">
                        2%
                      </td>
                      <td className="py-2.5 px-2">
                        [00]d
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded-[6px] bg-emerald-100 text-emerald-800 text-label-sm font-label-sm font-sans">
                          Kitted to Station
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-3.5 rounded-[10px] bg-surface-container-low border border-outline-variant/30 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                <span>
                  Calculated Lead Compression Buffer:
                  {' '}
                  <strong>
                    [00] Days
                  </strong>
                </span>
                {' '}
                <span className="text-secondary font-semibold">
                  Zero Unallocated Shortfalls
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="space-y-3">
            <span className="px-2.5 py-1 rounded-[6px] bg-secondary-container/40 text-on-secondary-fixed text-label-sm font-label-sm uppercase tracking-wider font-semibold">
              EXECUTION METHODOLOGY
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              From forecast to committed: Four deterministic stages
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">
              Four steps that turn demand signals into a workable, conflict-free production schedule.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest rounded-[14px] p-6 border border-outline-variant/35 shadow-xs space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-headline-md font-headline-md font-bold text-primary font-mono">
                    01
                  </span>
                  {' '}
                  <span className="w-8 h-8 rounded-[8px] bg-primary-container/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">
                      input
                    </span>
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Feed in Demand
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Demand forecast and open client purchase orders feed directly into the planning engine from your connected ERP and sales pipelines.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/20 text-label-sm font-label-sm text-on-surface font-semibold flex items-center gap-1 text-primary">
                <span>
                  Automated Ingestion
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-[14px] p-6 border border-outline-variant/35 shadow-xs space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-headline-md font-headline-md font-bold text-secondary font-mono">
                    02
                  </span>
                  {' '}
                  <span className="w-8 h-8 rounded-[8px] bg-secondary-container/30 text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">
                      memory
                    </span>
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Calculate Requirements
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Material requirements and finite capacity needs are calculated against current live inventory, reserved stock, and work-center load.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/20 text-label-sm font-label-sm text-on-surface font-semibold flex items-center gap-1 text-secondary">
                <span>
                  Finite Matching
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-[14px] p-6 border border-outline-variant/35 shadow-xs space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-headline-md font-headline-md font-bold text-tertiary font-mono">
                    03
                  </span>
                  {' '}
                  <span className="w-8 h-8 rounded-[8px] bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">
                      rule
                    </span>
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Resolve Conflicts
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Planners adjust the schedule using what-if scenarios to resolve machine and shift conflicts before releasing anything to the floor.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/20 text-label-sm font-label-sm text-on-surface font-semibold flex items-center gap-1 text-tertiary">
                <span>
                  Sandbox Simulation
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-[14px] p-6 border border-outline-variant/35 shadow-xs space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-headline-md font-headline-md font-bold text-on-surface font-mono">
                    04
                  </span>
                  {' '}
                  <span className="w-8 h-8 rounded-[8px] bg-surface-container text-on-surface flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">
                      published_with_changes
                    </span>
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  {"Release & Trigger Purchasing"}
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Finalized schedule releases to the floor, with material shortages automatically triggering purchase requisitions according to lead times.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/20 text-label-sm font-label-sm text-on-surface font-semibold flex items-center gap-1">
                <span>
                  Floor Dispatch
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  done_all
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="space-y-3">
            <span className="px-2.5 py-1 rounded-[6px] bg-primary-container/15 text-primary text-label-sm font-label-sm uppercase tracking-wider font-semibold">
              OPERATIONAL IMPACT
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Why planners stop firefighting
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">
              Fewer rush orders, zero surprise shortages, and maximized work-center throughput.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest rounded-[14px] p-6 border border-outline-variant/30 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-primary-container/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  timer_off
                </span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Fewer Rush Orders
              </h4>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Eradicate chaotic mid-week schedule reshuffles caused by poor upstream planning. Provide days of clear advance visibility.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-[14px] p-6 border border-outline-variant/30 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-secondary-container/30 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  check_circle
                </span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Fewer Shortages
              </h4>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Prevent mid-production material shortages by linking real-time supplier purchase triggers to BOM lot requirements.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-[14px] p-6 border border-outline-variant/30 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  balance
                </span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Better Capacity Use
              </h4>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Eliminate idle bays and bottleneck choke-points with level-loaded work-center dispatching and balanced shift plans.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-[14px] p-6 border border-outline-variant/30 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-primary-container/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  handshake
                </span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Clearer Commitments
              </h4>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Quote reliable customer delivery lead times backed by verified machine availability and deterministic simulation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-surface-container-low rounded-[14px] p-6 border border-outline-variant/30 space-y-2.5">
              <div className="flex items-center gap-2 text-on-surface font-semibold text-headline-sm font-headline-sm">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  security
                </span>
                {' '}
                <h5>
                  Enterprise-Grade Security
                </h5>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Encrypted hosting, role-based access control, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
              </p>
            </div>
            <div className="bg-surface-container-low rounded-[14px] p-6 border border-outline-variant/30 space-y-2.5">
              <div className="flex items-center gap-2 text-on-surface font-semibold text-headline-sm font-headline-sm">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  receipt_long
                </span>
                {' '}
                <h5>
                  Transparent, Scoped Pricing
                </h5>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Every engagement is scoped individually with a fixed price and timeline agreed upfront — book a free consultation for a tailored quote.
              </p>
            </div>
            <div className="bg-surface-container-low rounded-[14px] p-6 border border-outline-variant/30 space-y-2.5">
              <div className="flex items-center gap-2 text-on-surface font-semibold text-headline-sm font-headline-sm">
                <span className="material-symbols-outlined text-tertiary text-[20px]">
                  groups
                </span>
                {' '}
                <h5>
                  Built for Your Whole Team
                </h5>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Role-based views mean owners, plant managers, and frontline machine operators each see exactly what they need, nothing more, nothing missing.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="space-y-3">
            <span className="px-2.5 py-1 rounded-[6px] bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm uppercase tracking-wider font-semibold">
              OPERATIONAL TRANSFORMATION
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              What Changes on Day One
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">
              Transform from reactive panic meetings into deterministic manufacturing orchestration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50/60 rounded-[16px] border border-red-200/60 p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-[6px] bg-red-100 text-red-800 text-label-sm font-label-sm font-bold uppercase tracking-wider">
                  Before Horizon
                </span>
                {' '}
                <span className="material-symbols-outlined text-red-500 text-[24px]">
                  cancel
                </span>
              </div>
              <ul className="space-y-4 text-body-md font-body-md text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-[20px] shrink-0 mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Rush orders spring surprises on the whole schedule, displacing existing jobs with zero visibility on collateral delays.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-[20px] shrink-0 mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Material shortages discovered mid-production, leaving machines idle and workers waiting while expediting fees mount.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-[20px] shrink-0 mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Work centers overloaded without anyone noticing early, forcing frantic weekend overtime shifts and burn-out teams.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-[20px] shrink-0 mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Purchasing finds out about shortfalls too late, paying high air-freight premiums to salvage customer delivery dates.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-lime-50/60 rounded-[16px] border border-lime-200/80 p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-[6px] bg-lime-100 text-lime-900 text-label-sm font-label-sm font-bold uppercase tracking-wider">
                  After Horizon
                </span>
                {' '}
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  check_circle
                </span>
              </div>
              <ul className="space-y-4 text-body-md font-body-md text-on-surface">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Rush order impact simulated before it is committed, showing exact secondary ripple effects in seconds.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Requirements calculated against demand and stock upfront, locking inventory so jobs only dispatch when 100% kitted.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Capacity checked against real load before committing, smoothing bottlenecks across secondary work centers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Shortfalls trigger purchase requisitions automatically with lead times built-in, arriving just-in-time on standard terms.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="space-y-3">
            <span className="px-2.5 py-1 rounded-[6px] bg-primary-container/15 text-primary text-label-sm font-label-sm uppercase tracking-wider font-semibold">
              {"QUESTIONS & ANSWERS"}
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Frequently Asked Questions
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">
              Clear answers regarding finite-capacity scheduling, ERP integrations, and shop-floor synchronization.
            </p>
          </div>
          <div className="space-y-3.5 max-w-4xl">
            <div className="bg-surface-container-lowest rounded-[10px] border border-outline-variant/40 shadow-xs overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between text-headline-sm font-headline-sm text-on-surface font-semibold hover:text-primary transition-colors" type="button">
                <span>
                  How does it handle a sudden rush order that needs to jump the queue?
                </span>
                {' '}
                <span className="material-symbols-outlined text-primary text-[20px] transform rotate-180">
                  expand_more
                </span>
              </button>
              {' '}
              <div className="px-5 pb-5 text-body-md font-body-md text-on-surface-variant leading-relaxed border-t border-outline-variant/15 pt-3">
                Horizon's What-If Sandbox automatically duplicates your live schedule in memory without altering frontline dispatch. When an expedite is requested, the engine calculates the ripple effects on every existing job, flagging downstream delays, displaced operator shifts, and material contention. Planners can review the cost and schedule impact side-by-side with sales before committing the change. Once authorized, the updated routing pushes to the floor stations instantly.
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-[10px] border border-outline-variant/30 shadow-xs overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between text-headline-sm font-headline-sm text-on-surface font-semibold hover:text-primary transition-colors" type="button">
                <span>
                  Does it factor in supplier lead times for materials we do not stock?
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline text-[20px]">
                  expand_more
                </span>
              </button>
            </div>
            <div className="bg-surface-container-lowest rounded-[10px] border border-outline-variant/30 shadow-xs overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between text-headline-sm font-headline-sm text-on-surface font-semibold hover:text-primary transition-colors" type="button">
                <span>
                  Can it plan across multiple production lines or facilities?
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline text-[20px]">
                  expand_more
                </span>
              </button>
            </div>
            <div className="bg-surface-container-lowest rounded-[10px] border border-outline-variant/30 shadow-xs overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between text-headline-sm font-headline-sm text-on-surface font-semibold hover:text-primary transition-colors" type="button">
                <span>
                  Can it re-plan automatically if a machine goes down?
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline text-[20px]">
                  expand_more
                </span>
              </button>
            </div>
            <div className="bg-surface-container-lowest rounded-[10px] border border-outline-variant/30 shadow-xs overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between text-headline-sm font-headline-sm text-on-surface font-semibold hover:text-primary transition-colors" type="button">
                <span>
                  Does it account for planned maintenance windows?
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline text-[20px]">
                  expand_more
                </span>
              </button>
            </div>
            <div className="bg-surface-container-lowest rounded-[10px] border border-outline-variant/30 shadow-xs overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between text-headline-sm font-headline-sm text-on-surface font-semibold hover:text-primary transition-colors" type="button">
                <span>
                  Can we compare planned versus actual production after the fact?
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline text-[20px]">
                  expand_more
                </span>
              </button>
            </div>
            <div className="bg-surface-container-lowest rounded-[10px] border border-outline-variant/30 shadow-xs overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between text-headline-sm font-headline-sm text-on-surface font-semibold hover:text-primary transition-colors" type="button">
                <span>
                  How long does implementation typically take?
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline text-[20px]">
                  expand_more
                </span>
              </button>
            </div>
            <div className="bg-surface-container-lowest rounded-[10px] border border-outline-variant/30 shadow-xs overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between text-headline-sm font-headline-sm text-on-surface font-semibold hover:text-primary transition-colors" type="button">
                <span>
                  Is our data secure, and who owns it?
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline text-[20px]">
                  expand_more
                </span>
              </button>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded-[6px] bg-tertiary-fixed text-on-tertiary-fixed text-label-sm font-label-sm uppercase tracking-wider font-semibold">
                CONNECTED ENTERPRISE MODULES
              </span>
              {' '}
              <h2 className="text-headline-lg font-headline-lg text-on-surface">
                Looking for something else?
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                Browse our productized software and autonomous AI workflows engineered for operational velocity.
              </p>
            </div>
            {' '}
            <Link to="/products" className="text-label-lg font-label-lg font-semibold text-primary hover:text-primary-container transition-colors inline-flex items-center gap-1.5 shrink-0">
              <span>
                Explore all [00+] product packages
              </span>
              {' '}
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest rounded-[14px] p-6 border border-outline-variant/30 shadow-xs space-y-4 flex flex-col justify-between hover:border-primary-container/50 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-[10px] bg-primary-container/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      warehouse
                    </span>
                  </div>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-surface-container text-on-surface-variant text-label-sm font-label-sm">
                    INVENTORY
                  </span>
                </div>
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Smart Inventory Control
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Know exactly what's on your shelves, in your trucks, and on order — down to the unit, across every warehouse you run.
                </p>
              </div>
              {' '}
              <Link to="/products/inventory-control" className="pt-3 border-t border-outline-variant/15 text-label-sm font-label-sm font-semibold text-primary inline-flex items-center gap-1">
                <span>
                  Learn more
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
              </Link>
            </div>
            <div className="bg-surface-container-lowest rounded-[14px] p-6 border border-outline-variant/30 shadow-xs space-y-4 flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-[10px] bg-secondary-container/30 text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      precision_manufacturing
                    </span>
                  </div>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-surface-container text-on-surface-variant text-label-sm font-label-sm">
                    SHOP FLOOR
                  </span>
                </div>
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Production Floor Management
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Live machine telemetry, shift logs, and real-time station work orders synchronized with stock depletion.
                </p>
              </div>
              {' '}
              <Link to="/products/production-floor-management" className="pt-3 border-t border-outline-variant/15 text-label-sm font-label-sm font-semibold text-secondary inline-flex items-center gap-1">
                <span>
                  Learn more
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
              </Link>
            </div>
            <div className="bg-surface-container-lowest rounded-[14px] p-6 border border-outline-variant/30 shadow-xs space-y-4 flex flex-col justify-between hover:border-tertiary transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      forklift
                    </span>
                  </div>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-surface-container text-on-surface-variant text-label-sm font-label-sm">
                    LOGISTICS
                  </span>
                </div>
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Warehouse Operations Platform
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Turn a warehouse floor into a system your pickers, packers and managers can actually see and trust.
                </p>
              </div>
              {' '}
              <Link to="/products/warehouse-operations" className="pt-3 border-t border-outline-variant/15 text-label-sm font-label-sm font-semibold text-tertiary inline-flex items-center gap-1">
                <span>
                  Learn more
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
              </Link>
            </div>
            <div className="bg-surface-container-lowest rounded-[14px] p-6 border border-outline-variant/30 shadow-xs space-y-4 flex flex-col justify-between hover:border-primary-container/50 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-[10px] bg-primary-container/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      smart_toy
                    </span>
                  </div>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-surface-container text-on-surface-variant text-label-sm font-label-sm">
                    QUALITY AI
                  </span>
                </div>
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  AI QC Agent
                </h4>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Centralized installation knowledge, schematic verification, and defect auditing on your technician's mobile device.
                </p>
              </div>
              {' '}
              <Link to="/products/ai-qc-agent" className="pt-3 border-t border-outline-variant/15 text-label-sm font-label-sm font-semibold text-primary inline-flex items-center gap-1">
                <span>
                  Learn more
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="space-y-16">
          <div className="rounded-[20px] bg-gradient-to-br from-primary-container/15 via-surface-container-low to-background border border-outline-variant/40 p-10 md:p-14 text-center space-y-8 relative overflow-hidden shadow-sm">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <h2 className="text-headline-lg md:text-[42px] md:leading-[48px] font-bold text-on-surface tracking-tight">
                Unify your production schedule with fixed-scope certainty.
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                Retire spreadsheets and whiteboard chaos. Schedule an architectural consultation with our manufacturing systems engineering team within 48 hours.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto px-6 py-3.5 rounded-[10px] bg-gradient-to-r from-primary-container to-primary text-on-primary font-semibold text-label-lg font-label-lg shadow-sm hover:shadow-md hover:shadow-primary/20 transition-all flex items-center justify-center gap-2">
                <span>
                  Book an Architectural Scoping Consultation
                </span>
                {' '}
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>
              </Link>
              {' '}
              <a className="w-full sm:w-auto px-6 py-3.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface font-semibold text-label-lg font-label-lg hover:bg-surface-container-lowest transition-all flex items-center justify-center gap-2" href="#">
                <span>
                  Download Platform Specification
                </span>
                {' '}
                <span className="material-symbols-outlined text-[18px]">
                  download
                </span>
              </a>
            </div>
            <div className="relative z-10 flex items-center justify-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-tertiary">
                verified_user
              </span>
              {' '}
              <span>
                Encrypted hosting, role-based access, and regular backups. Zero technical debt guarantee.
              </span>
            </div>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
