// Generated from stitch/pd_restaurant-management.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './RestaurantOperations.css'

export default function RestaurantOperations() {
  return (
    <div className="pg-restaurant-operations bg-surface text-on-surface font-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <title>{"Restaurant Operations System — Horizon Enterprise Suite"}</title>
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[600px] overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-[#ffebd8]/60 via-[#ffe4dc]/30 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#d9f99d]/20 blur-3xl rounded-full" />
        <div className="absolute top-40 left-10 w-80 h-80 bg-[#a5f3fc]/25 blur-3xl rounded-full" />
      </div>
      {' '}
      {' '}
      <main className="max-w-[1600px] mx-auto px-4 md:px-8 space-y-24 md:space-y-32 pt-6">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
          <div className="lg:col-span-7 space-y-6">
            <nav className="flex items-center space-x-2 text-body-sm font-body-sm text-on-surface-variant">
              <Link to="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              {' '}
              <span className="material-symbols-outlined text-[14px] text-outline-variant" data-icon="chevron_right">
                chevron_right
              </span>
              {' '}
              <Link to="/solutions" className="hover:text-primary transition-colors">
                {"Hospitality & Food Service"}
              </Link>
              {' '}
              <span className="material-symbols-outlined text-[14px] text-outline-variant" data-icon="chevron_right">
                chevron_right
              </span>
              {' '}
              <span className="text-on-surface font-semibold">
                Restaurant Operations System
              </span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#d9f99d] text-[#2d4a08] border border-[#bef264] text-label-sm font-label-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#4d7c0f] animate-pulse" />
              {' '}
              <span>
                {"HOSPITALITY & RESTAURANT FLOOR"}
              </span>
            </div>
            <h1 className="text-display-lg font-display-lg text-on-surface leading-[1.08] tracking-tight">
              Restaurant Operations System — Deterministic tableside ordering, course firing orchestration, and zero-defect kitchen sync.
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Unify dine-in tables, takeaway tickets, and multi-channel delivery queues into a synchronized operational loop. Eliminate paper delays and lost modifiers from dining room to kitchen pass.
            </p>
            <div className="pt-2">
              <p className="text-label-md font-label-md uppercase tracking-wider text-outline mb-3">
                Core Floor Primitives
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2.5 p-3 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 text-body-sm font-body-sm text-on-surface hover:border-primary/40 transition-colors shadow-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]" data-icon="countertops">
                    countertops
                  </span>
                  {' '}
                  <span>
                    Kitchen Display System with Course Firing
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 text-body-sm font-body-sm text-on-surface hover:border-primary/40 transition-colors shadow-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]" data-icon="fork_spoon">
                    fork_spoon
                  </span>
                  {' '}
                  <span>
                    Modifier-Aware Order Routing
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 text-body-sm font-body-sm text-on-surface hover:border-primary/40 transition-colors shadow-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]" data-icon="table_restaurant">
                    table_restaurant
                  </span>
                  {' '}
                  <span>
                    {"Table, Course & Split-Check Management"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 text-body-sm font-body-sm text-on-surface hover:border-primary/40 transition-colors shadow-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]" data-icon="calendar_clock">
                    calendar_clock
                  </span>
                  {' '}
                  <span>
                    Sales-Forecast-Driven Labor Scheduling
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 text-body-sm font-body-sm text-on-surface hover:border-primary/40 transition-colors shadow-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]" data-icon="moped">
                    moped
                  </span>
                  {' '}
                  <span>
                    Native Delivery Marketplace Sync
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 text-body-sm font-body-sm text-on-surface hover:border-primary/40 transition-colors shadow-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]" data-icon="analytics">
                    analytics
                  </span>
                  {' '}
                  <span>
                    {"Menu Engineering & Plate Margin Analytics"}
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-outline-variant/30 grid grid-cols-3 gap-4">
              <div className="p-3.5 rounded-[12px] bg-surface-container-low/70 border border-outline-variant/20">
                <span className="text-headline-md font-headline-md font-bold text-on-surface tracking-tight">
                  [00] min
                </span>
                {' '}
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Avg. Ticket Turnaround
                </p>
              </div>
              <div className="p-3.5 rounded-[12px] bg-surface-container-low/70 border border-outline-variant/20">
                <span className="text-headline-md font-headline-md font-bold text-secondary tracking-tight">
                  [00.00%]
                </span>
                {' '}
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Modifier Accuracy Rate
                </p>
              </div>
              <div className="p-3.5 rounded-[12px] bg-surface-container-low/70 border border-outline-variant/20">
                <span className="text-headline-md font-headline-md font-bold text-tertiary tracking-tight">
                  [00] hr
                </span>
                {' '}
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  {"Setup & Kitchen Cutover"}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5" id="demo">
            <div className="glass-card rounded-[16px] p-8 space-y-6 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#a5f3fc]/40 text-[#0e4a56] text-label-sm font-label-sm">
                  <span className="material-symbols-outlined text-[16px]" data-icon="verified">
                    verified
                  </span>
                  {' '}
                  <span>
                    CONSULTATIVE ARCHITECTURE
                  </span>
                </div>
                <h2 className="text-headline-md font-headline-md text-on-surface">
                  Book a live product demo
                </h2>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Evaluate real-time KDS routing, course pacing, and split-tender billing customized to your restaurant's floor volume.
                </p>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface mb-1.5">
                    Full Name
                  </label>
                  {' '}
                  <input className="w-full h-11 px-3.5 bg-surface-container-lowest/80 border border-outline-variant/50 rounded-[10px] text-body-md font-body-md text-on-surface placeholder:text-outline/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Executive Chef or General Manager" type="text" />
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface mb-1.5">
                    Work Email
                  </label>
                  {' '}
                  <input className="w-full h-11 px-3.5 bg-surface-container-lowest/80 border border-outline-variant/50 rounded-[10px] text-body-md font-body-md text-on-surface placeholder:text-outline/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="operations@restaurantgroup.com" type="email" />
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface mb-1.5">
                    Phone Number
                  </label>
                  {' '}
                  <input className="w-full h-11 px-3.5 bg-surface-container-lowest/80 border border-outline-variant/50 rounded-[10px] text-body-md font-body-md text-on-surface placeholder:text-outline/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="[phone]" type="tel" />
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface mb-1.5">
                    Restaurant Type / Floor Volume
                  </label>
                  {' '}
                  <select className="w-full h-11 px-3.5 bg-surface-container-lowest/80 border border-outline-variant/50 rounded-[10px] text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                    <option value="1-3">
                      1 - 3 Locations (Single Floor)
                    </option>
                    <option value="4-10">
                      4 - 10 Multi-Unit Fleet
                    </option>
                    <option value="10+">
                      10+ High-Volume Enterprise
                    </option>
                  </select>
                </div>
                {' '}
                <button className="w-full h-12 btn-gradient text-on-primary font-label-lg text-label-lg rounded-[10px] flex items-center justify-center gap-2 mt-2 cursor-pointer transition-all" type="submit">
                  <span>
                    Request Tailored Demo
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[18px]" data-icon="send">
                    send
                  </span>
                </button>
              </form>
              <div className="pt-2 flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant/80 border-t border-outline-variant/30">
                <span className="material-symbols-outlined text-[16px] text-secondary" data-icon="lock">
                  lock
                </span>
                {' '}
                <span>
                  Encrypted hosting, role-based access and regular backups.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[6px] bg-[#e0f2fe] text-[#0369a1] text-label-sm font-label-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
              {' '}
              <span>
                {"LIVE KITCHEN TELEMETRY & EXPEDITER DISPLAY"}
              </span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Operational Control at the Pass — See the Kitchen in Live Sync
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Simulate high-velocity dinner service: real-time ticket aging, automated course progression, and allergy alert propagation across multi-station kitchen lines.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 bg-inverse-surface text-inverse-on-surface rounded-[16px] p-6 flex flex-col justify-between border border-outline/30 relative overflow-hidden min-h-[460px]">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-tertiary-fixed/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-red-950/80 text-primary-fixed-dim border border-primary/40 text-label-sm font-label-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  {' '}
                  <span>
                    {"Live Stream: Main Line & Expediter Station"}
                  </span>
                </span>
                {' '}
                <span className="text-label-sm font-label-sm text-outline-variant font-mono">
                  PASS_CAM_01
                </span>
              </div>
              <div className="my-auto py-12 flex flex-col items-center justify-center text-center z-10">
                <button className="w-16 h-16 rounded-[10px] bg-surface-container-lowest/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:scale-105 hover:bg-white/20 transition-all cursor-pointer shadow-lg mb-4">
                  <span className="material-symbols-outlined text-[32px] ml-1" data-icon="play_arrow">
                    play_arrow
                  </span>
                </button>
                {' '}
                <p className="text-label-md font-label-md text-white font-medium">
                  Interactive Floor Runthrough (04:15)
                </p>
                <p className="text-body-sm font-body-sm text-outline-variant max-w-xs mt-1">
                  Watch 60 covers fired, timed, and expedited with zero voice shouting across stations.
                </p>
              </div>
              <div className="z-10 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-label-sm">
                <span className="text-secondary-fixed">
                  Active Kitchen Session: Dinner Rush [00] | Station Verified
                </span>
                {' '}
                <span className="text-outline-variant">
                  FPS: 60.0 / SYNCD
                </span>
              </div>
            </div>
            <div className="lg:col-span-7 glass-card rounded-[16px] p-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-outline-variant/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[8px] bg-primary text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]" data-icon="view_kanban">
                      view_kanban
                    </span>
                  </div>
                  <div>
                    <h3 className="text-label-lg font-label-lg text-on-surface font-bold">
                      Horizon KitchenOS v4.2 — Expediter Command Hub
                    </h3>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      {"Live pass tickets & station routing"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-[6px] bg-[#d9f99d] text-[#2d4a08] text-label-sm font-label-sm font-medium">
                    Grill [2 active]
                  </span>
                  {' '}
                  <span className="px-2.5 py-1 rounded-[6px] bg-[#a5f3fc] text-[#0e4a56] text-label-sm font-label-sm font-medium">
                    Sauté [1 active]
                  </span>
                  {' '}
                  <span className="px-2.5 py-1 rounded-[6px] bg-primary-fixed text-on-primary-fixed font-semibold text-label-sm font-label-sm">
                    Expo Pass [Awaiting Runner]
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-[12px] bg-surface-container-lowest border-2 border-primary/30 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-label-lg font-label-lg font-bold text-on-surface">
                        Ticket #412
                      </span>
                      {' '}
                      <span className="text-body-sm font-body-sm text-on-surface-variant ml-2">
                        Table 14 (4 Guests)
                      </span>
                    </div>
                    {' '}
                    <span className="px-2 py-0.5 rounded-[6px] bg-[#dcfce7] text-[#166534] text-label-sm font-label-sm font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
                      {' '}
                      On Pace
                    </span>
                  </div>
                  <div className="space-y-2 py-1 border-y border-outline-variant/20">
                    <div className="text-body-sm font-body-sm">
                      <div className="font-medium text-on-surface">
                        2x Dry-Aged Ribeye (Medium Rare)
                      </div>
                      <div className="text-label-sm font-label-sm text-primary font-semibold">
                        [Hold Peppercorn]
                      </div>
                    </div>
                    <div className="text-body-sm font-body-sm pt-1">
                      <div className="font-medium text-on-surface">
                        1x Pan-Seared Halibut
                      </div>
                      <div className="inline-block px-1.5 py-0.5 rounded-[4px] bg-red-100 text-error font-bold text-label-sm tracking-wide">
                        GLUTEN ALERT
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant pt-1">
                    <span className="flex items-center gap-1 font-mono text-label-sm">
                      <span className="material-symbols-outlined text-[16px] text-secondary" data-icon="timer">
                        timer
                      </span>
                      {' '}
                      Entrée Fired 4:12 ago
                    </span>
                    {' '}
                    <button className="px-2.5 py-1 rounded-[6px] bg-surface-container text-on-surface text-label-sm font-label-sm hover:bg-surface-container-high transition-colors">
                      Fire Dessert
                    </button>
                  </div>
                </div>
                <div className="p-4 rounded-[12px] bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-label-lg font-label-lg font-bold text-on-surface">
                        Ticket #415
                      </span>
                      {' '}
                      <span className="text-body-sm font-body-sm text-[#0369a1] font-medium ml-2">
                        Marketplace #UB-982
                      </span>
                    </div>
                    {' '}
                    <span className="px-2 py-0.5 rounded-[6px] bg-[#e0f2fe] text-[#0369a1] text-label-sm font-label-sm font-bold">
                      Bagging Stage
                    </span>
                  </div>
                  <div className="space-y-2 py-1 border-y border-outline-variant/20">
                    <div className="text-body-sm font-body-sm">
                      <div className="font-medium text-on-surface">
                        1x Truffle Tagliatelle
                      </div>
                      <div className="text-label-sm font-label-sm text-outline">
                        [Eco Container Sealed]
                      </div>
                    </div>
                    <div className="text-body-sm font-body-sm pt-1">
                      <div className="font-medium text-on-surface">
                        {"2x Burrata & Heirloom Salad"}
                      </div>
                      <div className="text-label-sm font-label-sm text-outline">
                        [Dressing on side]
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant pt-1">
                    <span className="flex items-center gap-1 font-mono text-label-sm text-primary">
                      <span className="material-symbols-outlined text-[16px]" data-icon="alarm">
                        alarm
                      </span>
                      {' '}
                      Driver Arrives: 03:40 SLA
                    </span>
                    {' '}
                    <span className="text-label-sm font-label-sm text-secondary font-semibold">
                      Packaging Complete
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 px-1 text-label-sm font-label-sm text-on-surface-variant">
                <span>
                  Pass Status:
                  {' '}
                  <strong className="text-on-surface">
                    All 3 stations responding under 0.8s SLA
                  </strong>
                </span>
                {' '}
                <span className="text-primary hover:underline cursor-pointer">
                  Re-route to secondary expo →
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[6px] bg-primary-fixed/40 text-on-primary-fixed-variant text-label-sm font-label-sm">
              <span>
                THE RESTAURANT FLOOR REALITY CHECK
              </span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Every Order Touches Three Places. When They Desynchronize, Service Collapses.
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Dine-in tables, pickup orders, and third-party delivery dispatch hit prep stations asynchronously. When paper chits get stained, modifiers get misheard, and course timing rests on memory, kitchen velocity stalls and table turnaround suffers. Horizon replaces ticket chaos with a unified, deterministic order loop.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-[16px] p-8 space-y-4 hover:border-primary/40 transition-all group">
              <div className="w-12 h-12 rounded-[10px] bg-primary-fixed/60 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[26px]" data-icon="floor_lamp">
                  floor_lamp
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                {"Live Table Status & Dynamic Floor Map"}
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Interactive visual floor overview reflecting seated tables, current course stage, and bill status in real time. Never wonder which table is ready for dessert or waiting for a check.
              </p>
              <div className="pt-2 flex items-center gap-2 text-label-sm font-label-sm text-secondary">
                <span className="material-symbols-outlined text-[18px]" data-icon="check_circle">
                  check_circle
                </span>
                {' '}
                <span>
                  Real-time seat synchrony
                </span>
              </div>
            </div>
            <div className="glass-card rounded-[16px] p-8 space-y-4 hover:border-primary/40 transition-all group">
              <div className="w-12 h-12 rounded-[10px] bg-[#d9f99d]/60 text-[#2d4a08] flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[26px]" data-icon="bolt">
                  bolt
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Direct-to-Display Ticket Dispatch
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Instant routing straight to station screens with zero transcription lag, eliminating lost slips and manual runner calls. Orders route directly to line cook eyes in sub-second time.
              </p>
              <div className="pt-2 flex items-center gap-2 text-label-sm font-label-sm text-secondary">
                <span className="material-symbols-outlined text-[18px]" data-icon="check_circle">
                  check_circle
                </span>
                {' '}
                <span>
                  Zero paper loss guarantee
                </span>
              </div>
            </div>
            <div className="glass-card rounded-[16px] p-8 space-y-4 hover:border-primary/40 transition-all group">
              <div className="w-12 h-12 rounded-[10px] bg-[#a5f3fc]/60 text-[#0e4a56] flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[26px]" data-icon="merge_type">
                  merge_type
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Single Unified Ingestion Loop
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Harmonizes dine-in, takeaway, and third-party aggregators into one prioritized prep queue. Auto-throttles marketplace incoming tickets during unexpected floor rushes.
              </p>
              <div className="pt-2 flex items-center gap-2 text-label-sm font-label-sm text-secondary">
                <span className="material-symbols-outlined text-[18px]" data-icon="check_circle">
                  check_circle
                </span>
                {' '}
                <span>
                  Auto-throttled queue balance
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[6px] bg-secondary-fixed/50 text-secondary text-label-sm font-label-sm">
              <span>
                ENGINEERED FLOOR CAPABILITIES
              </span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              From Table to Pass: Six Deterministic Capabilities Built for Dinner Service
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Eliminate order discrepancies and station confusion with purpose-built restaurant operational infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card rounded-[16px] p-7 space-y-4 relative overflow-hidden border-2 border-primary/30">
              <div className="flex items-center justify-between">
                <span className="text-display-lg font-display-lg font-extrabold text-primary/20 leading-none">
                  01
                </span>
                {' '}
                <span className="px-2 py-0.5 rounded-[6px] bg-primary text-white text-label-sm font-label-sm font-semibold">
                  Active Inspector
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Kitchen Display System with Course Firing Logic
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Tickets route dynamically to sauté, grill, or prep stations. Expediters fire courses manually, via automated target timers, or upon server prompting.
              </p>
            </div>
            <div className="glass-card rounded-[16px] p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-display-lg font-display-lg font-extrabold text-outline/20 leading-none">
                  02
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline" data-icon="tune">
                  tune
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Modifier-Aware Order Routing
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Complex dietary preferences, allergies, and substitutions parse automatically to the relevant prep lines with high-contrast safety tags and cook warnings.
              </p>
            </div>
            <div className="glass-card rounded-[16px] p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-display-lg font-display-lg font-extrabold text-outline/20 leading-none">
                  03
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline" data-icon="payments">
                  payments
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                {"Table, Course & Split-Check Management"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Dynamic bill splitting by seat or shared plate, synchronized table status, and seamless guest transfers across bar and dining rooms in one stroke.
              </p>
            </div>
            <div className="glass-card rounded-[16px] p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-display-lg font-display-lg font-extrabold text-outline/20 leading-none">
                  04
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline" data-icon="groups">
                  groups
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Sales-Forecast-Driven Labor Scheduling
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Matches historical covers, weather, and real-time reservation density to generate optimized labor shift coverage without overtime leakage.
              </p>
            </div>
            <div className="glass-card rounded-[16px] p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-display-lg font-display-lg font-extrabold text-outline/20 leading-none">
                  05
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline" data-icon="hub">
                  hub
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                {"Native Online & Delivery Marketplace Sync"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Bi-directional ingestion from DoorDash, UberEats, and direct web portals straight into the kitchen queue without duplicate tablet clutter.
              </p>
            </div>
            <div className="glass-card rounded-[16px] p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-display-lg font-display-lg font-extrabold text-outline/20 leading-none">
                  06
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline" data-icon="query_stats">
                  query_stats
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                {"Menu Engineering & Plate Margin Reporting"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Live food cost reconciliation combining POS sales velocities with ingredient supplier invoices to flag low-margin recipes in real time.
              </p>
            </div>
          </div>
          <div className="glass-card rounded-[20px] p-8 border border-primary/20 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm mb-1">
                  <span>
                    DEEP-DIVE INSPECTION
                  </span>
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface">
                  {"Feature 01: KDS & Course Firing Inspector"}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Live station load-balancing telemetry and expedited course pacing engine
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-label-sm font-label-sm text-on-surface-variant font-mono">
                  STATION STATUS: BALANCED
                </span>
                {' '}
                <span className="w-3 h-3 rounded-full bg-[#16a34a]" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-[12px] bg-surface-container-lowest/80 border border-outline-variant/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-label-md font-label-md font-bold text-on-surface">
                    Station A: Sauté Line
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-[#dcfce7] text-[#166534] text-label-sm font-semibold">
                    92% Capacity
                  </span>
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant space-y-1">
                  <div>
                    3 Active Pans (Risotto, Halibut, Gnocchi)
                  </div>
                  <div className="text-label-sm font-mono text-outline">
                    Target Pacing: 06:30 Avg
                  </div>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-full w-[65%]" />
                </div>
              </div>
              <div className="p-4 rounded-[12px] bg-surface-container-lowest/80 border border-outline-variant/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-label-md font-label-md font-bold text-on-surface">
                    Station B: Char-Grill
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-[#e0f2fe] text-[#0369a1] text-label-sm font-semibold">
                    Normal
                  </span>
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant space-y-1">
                  <div>
                    4 Steaks Fired | 2 Resting at Expo
                  </div>
                  <div className="text-label-sm font-mono text-outline">
                    Target Pacing: 09:00 Avg
                  </div>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-secondary h-full w-[45%]" />
                </div>
              </div>
              <div className="p-4 rounded-[12px] bg-surface-container-lowest/80 border border-outline-variant/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-label-md font-label-md font-bold text-on-surface">
                    {"Station C: Cold & Raw Bar"}
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-[#dcfce7] text-[#166534] text-label-sm font-semibold">
                    Optimal
                  </span>
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant space-y-1">
                  <div>
                    Appetizers: 0 Queued (All Cleared)
                  </div>
                  <div className="text-label-sm font-mono text-outline">
                    Target Pacing: 03:10 Avg
                  </div>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-tertiary h-full w-[20%]" />
                </div>
              </div>
              <div className="p-4 rounded-[12px] bg-surface-container-lowest/80 border border-outline-variant/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-label-md font-label-md font-bold text-on-surface">
                    Expo Pass Gateway
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-primary-fixed text-on-primary-fixed text-label-sm font-semibold">
                    Hot Pass Active
                  </span>
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant space-y-1">
                  <div>
                    5 Complete Trays Ready for Runners
                  </div>
                  <div className="text-label-sm font-mono text-primary font-bold">
                    Max Tray Age: 01:18
                  </div>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary-container h-full w-[80%]" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[6px] bg-tertiary-fixed text-on-tertiary-fixed text-label-sm font-label-sm">
              <span>
                EXECUTION WORKFLOW
              </span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              From Order Placement to Nightly Reconciliation: Four Deterministic Steps
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              A continuous loop that synchronizes diners, floor servers, culinary stations, and financial ledgers without friction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-[16px] p-6 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-[10px] bg-primary text-white font-bold flex items-center justify-center text-label-lg">
                  01
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline" data-icon="tablet_mac">
                  tablet_mac
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Capture Order Tableside or Online
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Instant input on handheld terminals, web store, or partner delivery apps with complete custom modifier validation.
              </p>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-[10px] bg-primary text-white font-bold flex items-center justify-center text-label-lg">
                  02
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline" data-icon="alt_route">
                  alt_route
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Intelligent Multi-Station Routing
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Deterministic split: steaks to grill, cocktails to bar, cold appetizers to larder with synchronized prep lead times.
              </p>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-[10px] bg-primary text-white font-bold flex items-center justify-center text-label-lg">
                  03
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline" data-icon="speed">
                  speed
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                {"Live Course Monitoring & Expediter Pacing"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Visual aging indicators alert expediters before target prep SLAs breach, holding entrees until appetizers clear.
              </p>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-[10px] bg-primary text-white font-bold flex items-center justify-center text-label-lg">
                  04
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline" data-icon="receipt_long">
                  receipt_long
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                {"Instant Settlement & Inventory Depletion"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                One-tap split payment triggers instant ingredient reduction, stock ledger deduction, and daily accounting reconciliation.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[6px] bg-[#d9f99d] text-[#2d4a08] text-label-sm font-label-sm">
              <span>
                OPERATIONAL IMPACT
              </span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Why Modern Restaurants Retire Paper Chits and Whiteboards
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Built to deliver concrete floor efficiency, guest retention, and protected profit margins during high-intensity service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-[16px] p-6 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-primary-fixed/60 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]" data-icon="error_outline">
                  error_outline
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Fewer Order Errors
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Eliminate misplaced modifiers and verbal miscommunications between floor servers, expediter, and line cooks.
              </p>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-[#a5f3fc]/60 text-[#0e4a56] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]" data-icon="pace">
                  pace
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Accelerated Table Turnover
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Faster order firing and instantaneous contactless payment shorten dining cycles during peak rush without rushing guests.
              </p>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-[#d9f99d]/60 text-[#2d4a08] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]" data-icon="trending_up">
                  trending_up
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                True Plate-Level Margins
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Transparent recipe costing and waste monitoring protect operational cash flow against shifting food supplier prices.
              </p>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-surface-container text-on-surface flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]" data-icon="hub">
                  hub
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Unified Multi-Channel Control
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Manage counter service, VIP dining, and delivery orders through one synchronized dashboard with centralized menu control.
              </p>
            </div>
          </div>
          <div className="pt-6">
            <p className="text-label-md font-label-md uppercase tracking-wider text-outline mb-4">
              Horizon Enterprise Commitment
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-[16px] bg-surface-container-low/70 border border-outline-variant/30 space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <span className="material-symbols-outlined text-[20px]" data-icon="security">
                    security
                  </span>
                  {' '}
                  <span className="text-label-lg font-label-lg">
                    Enterprise-Grade Security
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Encrypted hosting, role-based access control, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
                </p>
              </div>
              <div className="p-6 rounded-[16px] bg-surface-container-low/70 border border-outline-variant/30 space-y-2">
                <div className="flex items-center gap-2 text-secondary font-bold">
                  <span className="material-symbols-outlined text-[20px]" data-icon="price_check">
                    price_check
                  </span>
                  {' '}
                  <span className="text-label-lg font-label-lg">
                    Transparent, Scoped Pricing
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Every engagement is scoped individually with a fixed price and timeline agreed upfront — book a free consultation for a tailored quote.
                </p>
              </div>
              <div className="p-6 rounded-[16px] bg-surface-container-low/70 border border-outline-variant/30 space-y-2">
                <div className="flex items-center gap-2 text-tertiary font-bold">
                  <span className="material-symbols-outlined text-[20px]" data-icon="badge">
                    badge
                  </span>
                  {' '}
                  <span className="text-label-lg font-label-lg">
                    Built for Your Whole Team
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Role-based views mean owners, managers, kitchen expeditors, and frontline servers each see exactly what they need, nothing more, nothing missing.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm">
              <span>
                OPERATIONAL TRANSFORMATION
              </span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              What Changes on Day One: Paper Chit Chaos vs. Horizon Synchronized Floor
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Compare the standard reality of high-volume kitchen strain against deterministic, synchronized operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[16px] bg-[#fff5f5] border border-red-200 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[8px] bg-red-100 text-error flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[22px]" data-icon="close">
                    close
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-error">
                    Before: The Fragile Paper Ticket Dilemma
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Unsynchronized legacy restaurant floor
                  </p>
                </div>
              </div>
              <ul className="space-y-4 text-body-md font-body-md text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5" data-icon="cancel">
                    cancel
                  </span>
                  {' '}
                  <span>
                    Handwritten chits misread or lost near humid fryers and bustling expo counters.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5" data-icon="cancel">
                    cancel
                  </span>
                  {' '}
                  <span>
                    Dine-in tables, phone takeaways, and delivery orders tracked across separate tablets.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5" data-icon="cancel">
                    cancel
                  </span>
                  {' '}
                  <span>
                    Chefs and managers lack real-time visibility into which menu items generate genuine profit.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5" data-icon="cancel">
                    cancel
                  </span>
                  {' '}
                  <span>
                    Servers waste valuable service time sprinting back and forth to stationary POS terminals.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-[16px] bg-[#f7fee7] border border-[#bef264] space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[8px] bg-[#d9f99d] text-[#2d4a08] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[22px]" data-icon="check">
                    check
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-[#2d4a08]">
                    After: The Horizon Synchronized Architecture
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Unified, sub-second restaurant execution
                  </p>
                </div>
              </div>
              <ul className="space-y-4 text-body-md font-body-md text-on-surface">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5" data-icon="check_circle">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Orders route instantaneously to dedicated kitchen displays with clear visual aging and allergy alerts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5" data-icon="check_circle">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Every dine-in, takeaway, and marketplace order converges into a single prioritized queue.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5" data-icon="check_circle">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Ingredient depletion and supplier costs tie directly to every sold plate for live gross margin tracking.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5" data-icon="check_circle">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Handheld tableside tablets fire courses and process multi-tender bill splits right at the table.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[6px] bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm">
              <span>
                {"ENTERPRISE & RESTAURANT INQUIRIES"}
              </span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Frequently Asked Questions: Clear answers regarding floor management, KDS sync, and multi-unit deployments
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Everything technical leaders and restaurateurs need to evaluate Horizon's operational architecture.
            </p>
          </div>
          <div className="max-w-4xl space-y-4">
            <div className="glass-card rounded-[14px] p-6 border-l-4 border-l-primary space-y-3">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  1. Can it handle split bills and group orders?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-primary text-[20px]" data-icon="expand_less">
                  expand_less
                </span>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed pt-2 border-t border-outline-variant/20">
                Yes. Horizon supports dynamic split-billing by seat, item, or custom percentage, including split cash/card payments and multi-card tipping without locking table turnover. Servers can split a shared bottle of wine across six covers or detach a single guest bill in two taps right at the tableside terminal.
              </p>
            </div>
            <div className="glass-card rounded-[14px] p-5 flex items-center justify-between cursor-pointer hover:border-primary/40 transition-colors">
              <h3 className="text-label-lg font-label-lg text-on-surface">
                2. Does the kitchen display work for both a hot line and a bar station?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-outline text-[20px]" data-icon="expand_more">
                expand_more
              </span>
            </div>
            <div className="glass-card rounded-[14px] p-5 flex items-center justify-between cursor-pointer hover:border-primary/40 transition-colors">
              <h3 className="text-label-lg font-label-lg text-on-surface">
                3. Can we track which ingredients are running low mid-service?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-outline text-[20px]" data-icon="expand_more">
                expand_more
              </span>
            </div>
            <div className="glass-card rounded-[14px] p-5 flex items-center justify-between cursor-pointer hover:border-primary/40 transition-colors">
              <h3 className="text-label-lg font-label-lg text-on-surface">
                4. Can we manage multiple locations from one account?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-outline text-[20px]" data-icon="expand_more">
                expand_more
              </span>
            </div>
            <div className="glass-card rounded-[14px] p-5 flex items-center justify-between cursor-pointer hover:border-primary/40 transition-colors">
              <h3 className="text-label-lg font-label-lg text-on-surface">
                5. Does it support online ordering integration?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-outline text-[20px]" data-icon="expand_more">
                expand_more
              </span>
            </div>
            <div className="glass-card rounded-[14px] p-5 flex items-center justify-between cursor-pointer hover:border-primary/40 transition-colors">
              <h3 className="text-label-lg font-label-lg text-on-surface">
                6. Can we update prices across all locations at once?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-outline text-[20px]" data-icon="expand_more">
                expand_more
              </span>
            </div>
            <div className="glass-card rounded-[14px] p-5 flex items-center justify-between cursor-pointer hover:border-primary/40 transition-colors">
              <h3 className="text-label-lg font-label-lg text-on-surface">
                7. How long does implementation typically take?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-outline text-[20px]" data-icon="expand_more">
                expand_more
              </span>
            </div>
            <div className="glass-card rounded-[14px] p-5 flex items-center justify-between cursor-pointer hover:border-primary/40 transition-colors">
              <h3 className="text-label-lg font-label-lg text-on-surface">
                8. Is our data secure, and who owns it?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-outline text-[20px]" data-icon="expand_more">
                expand_more
              </span>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[6px] bg-[#a5f3fc]/40 text-[#0e4a56] text-label-sm font-label-sm">
                <span>
                  CONNECTED ENTERPRISE MODULES
                </span>
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface">
                Looking for something else? Browse our productized operational software packages
              </h2>
            </div>
            {' '}
            <Link to="/products" className="text-label-lg font-label-lg text-primary font-bold hover:underline flex items-center gap-1">
              <span>
                Explore all [00+] product packages
              </span>
              {' '}
              <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-[16px] p-6 space-y-4 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-primary-fixed/60 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]" data-icon="inventory_2">
                    inventory_2
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Smart Inventory Control
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Know exactly what is on your shelves, in your coolers, and on order down to the gram across every kitchen.
                </p>
              </div>
              {' '}
              <a className="inline-flex items-center gap-1 text-label-md font-label-md text-primary font-bold pt-2 hover:underline" href="#">
                <span>
                  View Architecture
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">
                  chevron_right
                </span>
              </a>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-4 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#d9f99d]/60 text-[#2d4a08] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]" data-icon="point_of_sale">
                    point_of_sale
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Retail Point of Sale
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Offline-first counter checkout, customer loyalty sync, and multi-till reporting for front-of-house operations.
                </p>
              </div>
              {' '}
              <a className="inline-flex items-center gap-1 text-label-md font-label-md text-primary font-bold pt-2 hover:underline" href="#">
                <span>
                  View Architecture
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">
                  chevron_right
                </span>
              </a>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-4 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#a5f3fc]/60 text-[#0e4a56] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]" data-icon="account_balance">
                    account_balance
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Business Accounting Software
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Invoicing, payroll reconciliation, and vendor payments unified into one real-time operational ledger.
                </p>
              </div>
              {' '}
              <a className="inline-flex items-center gap-1 text-label-md font-label-md text-primary font-bold pt-2 hover:underline" href="#">
                <span>
                  View Architecture
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">
                  chevron_right
                </span>
              </a>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-4 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-surface-container text-on-surface flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]" data-icon="receipt">
                    receipt
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Employee Expense Management
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Snap ingredient receipts, manage petty cash, and automate manager approvals with policy enforcement.
                </p>
              </div>
              {' '}
              <a className="inline-flex items-center gap-1 text-label-md font-label-md text-primary font-bold pt-2 hover:underline" href="#">
                <span>
                  View Architecture
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">
                  chevron_right
                </span>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="rounded-[20px] p-10 md:p-14 bg-gradient-to-br from-[#ffedd5] via-[#fed7aa] to-[#fecdd3] border border-[#fb923c]/30 shadow-lg relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary-container text-on-primary-container text-label-sm font-label-sm font-bold shadow-xs">
                <span className="material-symbols-outlined text-[16px]" data-icon="rocket_launch">
                  rocket_launch
                </span>
                {' '}
                <span>
                  SCOPED DEPLOYMENT GUARANTEE
                </span>
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface leading-tight">
                Ready to synchronize your restaurant floor with fixed-scope certainty?
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                Connect directly with our hospitality solutions engineering team to map your table layout, kitchen stations, and KDS rollout within 48 hours.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-gradient text-on-primary font-label-lg text-label-lg px-6 py-3.5 rounded-[10px] inline-flex items-center gap-2 transition-transform active:scale-[0.99] shadow-md">
                  <span>
                    Book an Architectural Scoping Consultation
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[18px]" data-icon="calendar_month">
                    calendar_month
                  </span>
                </Link>
                {' '}
                <a className="bg-surface-container-lowest/80 text-on-surface hover:bg-white font-label-lg text-label-lg px-6 py-3.5 rounded-[10px] border border-outline-variant/50 inline-flex items-center gap-2 transition-all" href="#">
                  <span className="material-symbols-outlined text-[18px]" data-icon="download">
                    download
                  </span>
                  {' '}
                  <span>
                    Download Platform Specification
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
