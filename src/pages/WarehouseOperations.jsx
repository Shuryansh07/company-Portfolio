// Generated from stitch/pd_warehouse-management.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './WarehouseOperations.css'

export default function WarehouseOperations() {
  return (
    <div className="pg-warehouse-operations bg-surface text-on-surface font-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <title>{"Warehouse Operations Platform | Horizon ERP & Automation"}</title>
      {' '}
      {' '}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 space-y-24 py-8">
        <section className="pt-4">
          <nav className="flex items-center gap-2 text-xs font-label-md text-on-surface-variant mb-6">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            {' '}
            <span className="text-outline-variant">
              /
            </span>
            {' '}
            <a className="hover:text-primary transition-colors" href="#">
              {"Operations & Supply Chain"}
            </a>
            {' '}
            <span className="text-outline-variant">
              /
            </span>
            {' '}
            <span className="text-on-surface font-semibold">
              Warehouse Operations Platform
            </span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block rounded-[6px] uppercase tracking-wider font-semibold text-xs text-primary bg-primary/10 px-2.5 py-1">
                {"OPERATIONS & SUPPLY CHAIN"}
              </div>
              <h1 className="font-display-lg text-display-lg tracking-tight text-on-surface leading-tight">
                Warehouse Operations Platform
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
                Turn a warehouse floor into a system your pickers, packers and managers can actually see and trust.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/70 px-3.5 py-2 text-xs font-medium text-on-surface flex items-center gap-2 shadow-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    layers
                  </span>
                  {' '}
                  <span>
                    Wave, Batch, and Zone Picking Strategies
                  </span>
                </div>
                <div className="rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/70 px-3.5 py-2 text-xs font-medium text-on-surface flex items-center gap-2 shadow-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    move_to_inbox
                  </span>
                  {' '}
                  <span>
                    Directed Putaway and Dynamic Slotting
                  </span>
                </div>
                <div className="rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/70 px-3.5 py-2 text-xs font-medium text-on-surface flex items-center gap-2 shadow-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    fact_check
                  </span>
                  {' '}
                  <span>
                    ABC-Weighted Cycle Counting
                  </span>
                </div>
                <div className="rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/70 px-3.5 py-2 text-xs font-medium text-on-surface flex items-center gap-2 shadow-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    qr_code_scanner
                  </span>
                  {' '}
                  <span>
                    License Plate and Pallet-Level Tracking
                  </span>
                </div>
                <div className="rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/70 px-3.5 py-2 text-xs font-medium text-on-surface flex items-center gap-2 shadow-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    alt_route
                  </span>
                  {' '}
                  <span>
                    Cross-Docking for Pre-Allocated Inbound Freight
                  </span>
                </div>
                <div className="rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/70 px-3.5 py-2 text-xs font-medium text-on-surface flex items-center gap-2 shadow-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    contactless
                  </span>
                  {' '}
                  <span>
                    RF-Guided Task Execution with Labor Tracking
                  </span>
                </div>
              </div>
              <div className="pt-6 border-t border-outline-variant/20 grid grid-cols-3 gap-6">
                <div className="space-y-1">
                  <div className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                    [00] min
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                    Avg. Order Dispatch Time
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight">
                    [00.00%]
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                    Scan Pick Accuracy
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                    [00+]
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                    Active Floor Terminals Synced
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5" id="demo-section">
              <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant/30 p-8 shadow-sm relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />
                <div className="space-y-2 mb-6">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    Book a live product demo
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    See how Warehouse Operations Platform eliminates search time and coordinates bin-level fulfillment in under [00] minutes.
                  </p>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1.5">
                      Full Name
                    </label>
                    {' '}
                    <input className="w-full h-11 px-3.5 rounded-[10px] border border-outline-variant/50 bg-surface/50 text-on-surface font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="e.g. Jordan Vance" type="text" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1.5">
                      Work Email
                    </label>
                    {' '}
                    <input className="w-full h-11 px-3.5 rounded-[10px] border border-outline-variant/50 bg-surface/50 text-on-surface font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="jordan@warehousegroup.com" type="email" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1.5">
                      Phone Number
                    </label>
                    {' '}
                    <input className="w-full h-11 px-3.5 rounded-[10px] border border-outline-variant/50 bg-surface/50 text-on-surface font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="[phone]" type="tel" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1.5">
                      Warehouse / Facility Scale
                    </label>
                    {' '}
                    <select className="w-full h-11 px-3.5 rounded-[10px] border border-outline-variant/50 bg-surface/50 text-on-surface font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                      <option>
                        1 - 3 Distribution Centers (Single / Multi-tier)
                      </option>
                      <option>
                        4 - 10 Regional Fulfillment Hubs
                      </option>
                      <option>
                        10+ Enterprise Global Logistics Hubs
                      </option>
                    </select>
                  </div>
                  {' '}
                  <button className="w-full coral-gradient text-white rounded-[10px] h-12 font-label-lg text-label-lg font-semibold shadow-sm hover:shadow-md hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2" type="submit">
                    <span>
                      Request Tailored Walk-Through
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                </form>
                <div className="mt-4 pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="text-xs">
                    🔒 Encrypted hosting, role-based access and regular backups.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-block rounded-[6px] uppercase tracking-wider font-semibold text-xs text-tertiary bg-tertiary-fixed/30 px-2.5 py-1">
              {"LIVE WAREHOUSE TELEMETRY & DISPATCH ENGINE"}
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Operational Control on the Floor — See Warehouse Operations in Action
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
              Simulate high-velocity bin routing, scanner-driven putaway validation, and real-time zone pick orchestration across active staging lanes.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 bg-[#181c20] rounded-2xl p-6 text-white flex flex-col justify-between relative shadow-lg overflow-hidden border border-white/10 min-h-[420px]">
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  {' '}
                  <span className="font-mono text-xs font-semibold tracking-wider text-white/90">
                    LIVE FEED: Terminal Hub A2
                  </span>
                </div>
                <div className="rounded-[6px] bg-white/10 px-2.5 py-0.5 text-xs font-mono text-white/80 border border-white/10">
                  AUDIO TELEMETRY: SYNCED
                </div>
              </div>
              <div className="my-auto py-8 z-10 flex flex-col items-center justify-center text-center">
                <div className="relative w-full max-w-md p-4 rounded-xl bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between text-xs text-white/60 mb-2 font-mono">
                    <span>
                      AISLE 04 HIGH-BAY
                    </span>
                    {' '}
                    <span className="text-emerald-400">
                      OPTIMAL PATH
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-2 py-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
                      {' '}
                      <span className="text-[10px] font-mono text-white/70">
                        Bin A-14
                      </span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-400 via-white/40 to-primary-container mx-2 dashed border-t border-dashed border-white/30" />
                    <div className="flex flex-col items-center gap-1">
                      <span className="w-4 h-4 rounded-full bg-primary-container ring-4 ring-primary-container/20" />
                      {' '}
                      <span className="text-[10px] font-mono text-white/70">
                        Cart #08
                      </span>
                    </div>
                    <div className="flex-1 h-0.5 bg-white/20 mx-2" />
                    <div className="flex flex-col items-center gap-1">
                      <span className="w-4 h-4 rounded-full bg-white/30" />
                      {' '}
                      <span className="text-[10px] font-mono text-white/40">
                        Dock 02
                      </span>
                    </div>
                  </div>
                </div>
                {' '}
                <button aria-label="Play Telemetry Simulation" className="w-14 h-14 rounded-full coral-gradient flex items-center justify-center text-white shadow-xl hover:scale-105 active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-[30px]" data-weight="fill">
                    play_arrow
                  </span>
                </button>
                {' '}
                <span className="text-xs text-white/60 mt-3 font-mono">
                  Press to run floor route verification
                </span>
              </div>
              <div className="z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>
                  00:14:28 / LIVE
                </span>
                {' '}
                <div className="flex items-center gap-4">
                  <span>
                    SCAN LATENCY: 12ms
                  </span>
                  {' '}
                  <span>
                    BUFFER: 100%
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between pb-4 border-b border-outline-variant/20 mb-4">
                  <div>
                    <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      Horizon WarehouseOS v4.2
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {"Central Picking & Putaway Matrix"}
                    </p>
                  </div>
                  {' '}
                  <span className="rounded-[6px] bg-secondary-container text-on-secondary-container px-2.5 py-1 text-xs font-semibold">
                    Active Bins Synced: [00,000]
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <div className="rounded-[8px] bg-surface-container-low p-2.5 text-center">
                    <span className="text-[11px] text-on-surface-variant block font-medium">
                      Strategy
                    </span>
                    {' '}
                    <span className="text-xs font-bold text-on-surface">
                      Wave #412
                    </span>
                  </div>
                  <div className="rounded-[8px] bg-surface-container-low p-2.5 text-center">
                    <span className="text-[11px] text-on-surface-variant block font-medium">
                      Pick Units
                    </span>
                    {' '}
                    <span className="text-xs font-bold text-on-surface">
                      [000]
                    </span>
                  </div>
                  <div className="rounded-[8px] bg-surface-container-low p-2.5 text-center">
                    <span className="text-[11px] text-on-surface-variant block font-medium">
                      Active Staff
                    </span>
                    {' '}
                    <span className="text-xs font-bold text-on-surface">
                      [00]
                    </span>
                  </div>
                  <div className="rounded-[8px] bg-surface-container-low p-2.5 text-center">
                    <span className="text-[11px] text-on-surface-variant block font-medium">
                      Congestion
                    </span>
                    {' '}
                    <span className="text-xs font-bold text-tertiary">
                      Optimal
                    </span>
                  </div>
                </div>
                <div className="space-y-3 font-body-sm text-body-sm">
                  <div className="p-3 rounded-[10px] bg-surface-container-low/60 border border-outline-variant/20 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-semibold text-on-surface">
                        Item #SKU-9921: Industrial Servo Drive
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        Bin A-14-3 → Assigned to Picker Marcus T.
                      </div>
                    </div>
                    {' '}
                    <span className="rounded-[6px] bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-0.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        check
                      </span>
                      {' '}
                      Pick Confirmed
                    </span>
                  </div>
                  <div className="p-3 rounded-[10px] bg-surface-container-low/60 border border-outline-variant/20 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-semibold text-on-surface">
                        Item #SKU-4402: Pneumatic Valve Harness
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        Bin B-02-1 → Zone 2 Conveyor Staged
                      </div>
                    </div>
                    {' '}
                    <span className="rounded-[6px] bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        sync
                      </span>
                      {' '}
                      In Transit
                    </span>
                  </div>
                  <div className="p-3 rounded-[10px] bg-surface-container-low/60 border border-outline-variant/20 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-semibold text-on-surface">
                        Inbound LPN #LP-88102: Pallet Putaway
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        Aisle 08 High-Bay Rack 4 → Barcode Verified
                      </div>
                    </div>
                    {' '}
                    <span className="rounded-[6px] bg-cyan-100 text-cyan-900 text-xs font-semibold px-2 py-0.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        verified
                      </span>
                      {' '}
                      Verified
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-xs text-on-surface-variant flex items-center gap-1.5 font-medium">
                  <span className="material-symbols-outlined text-secondary text-[16px]">
                    lock
                  </span>
                  {' '}
                  Deterministic Bin Lock Guaranteed. 0.00% Misplacement Rate.
                </span>
                {' '}
                <span className="font-mono text-[11px] text-outline">
                  SEC-LOG: #HORIZON-SYNC
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-block rounded-[6px] uppercase tracking-wider font-semibold text-xs text-primary bg-primary/10 px-2.5 py-1">
              THE OPERATIONAL BOTTLENECK
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Most warehouse problems are not inventory problems, they are location problems.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Nobody knows which bin has the last three units, pickers walk the same aisle twice, and putaway becomes a guessing game. Horizon assigns every item a precise shelf, rack, or bin so putaway and retrieval stop being a search party.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-3 hover:bg-surface-container-low transition-colors">
              <div className="w-10 h-10 rounded-[10px] bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">
                  pin_drop
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Bin-level location tracking, not just warehouse-level
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Real-time coordinates down to shelf divider, rack level, and tote position. Zero ambiguity when searching for single SKU counts.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-3 hover:bg-surface-container-low transition-colors">
              <div className="w-10 h-10 rounded-[10px] bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">
                  route
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Auto-generated pick lists the moment an order is confirmed
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Dynamic route-optimized pathing that eliminates double-walking, back-tracking, and crisscrossing physical aisles.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-3 hover:bg-surface-container-low transition-colors">
              <div className="w-10 h-10 rounded-[10px] bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">
                  receipt_long
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Full audit trail of every stock movement, shelf to shelf
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Cryptographically logged scans tracking who moved what, when, and to which pallet with indisputable verification.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="inline-block rounded-[6px] uppercase tracking-wider font-semibold text-xs text-primary bg-primary/10 px-2.5 py-1">
              ENGINEERED FLOOR CAPABILITIES
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Everything a High-Volume Floor Needs: Six Deterministic Capabilities
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              These are the mechanics that actually transform how fast and accurately a warehouse executes orders.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-3">
              <div className="p-4 rounded-xl border border-primary/40 bg-surface-container-lowest shadow-xs space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-primary px-2 py-0.5 rounded-[6px] bg-primary/10">
                    01
                  </span>
                  {' '}
                  <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    Wave, Batch, and Zone Picking Strategies
                  </h4>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant pl-9">
                  Orders release in coordinated waves for parallel picking, consolidate identical SKUs into high-speed batch picks, or hand off across designated physical zones.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low/40 space-y-1 hover:bg-surface-container-lowest transition-colors">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-on-surface-variant px-2 py-0.5 rounded-[6px] bg-surface-container-high">
                    02
                  </span>
                  {' '}
                  <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    Directed Putaway and Dynamic Slotting
                  </h4>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant pl-9">
                  Algorithms assign inbound freight to optimal bin coordinates based on velocity, product dimensions, and seasonal turnover.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low/40 space-y-1 hover:bg-surface-container-lowest transition-colors">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-on-surface-variant px-2 py-0.5 rounded-[6px] bg-surface-container-high">
                    03
                  </span>
                  {' '}
                  <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    ABC-Weighted Cycle Counting
                  </h4>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant pl-9">
                  Keep inventory audit-ready without full floor shutdowns by triggering continuous cycle counts prioritized by SKU value and movement rate.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low/40 space-y-1 hover:bg-surface-container-lowest transition-colors">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-on-surface-variant px-2 py-0.5 rounded-[6px] bg-surface-container-high">
                    04
                  </span>
                  {' '}
                  <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    License Plate and Pallet-Level Tracking
                  </h4>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant pl-9">
                  Treat entire pallets and bulk totes as single auditable entities with nested barcode hierarchies from dock to high-bay storage.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low/40 space-y-1 hover:bg-surface-container-lowest transition-colors">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-on-surface-variant px-2 py-0.5 rounded-[6px] bg-surface-container-high">
                    05
                  </span>
                  {' '}
                  <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    Cross-Docking for Pre-Allocated Inbound Freight
                  </h4>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant pl-9">
                  Bypass intermediate shelf storage entirely by routing pre-sold shipments straight from receiving docks to packing lanes.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low/40 space-y-1 hover:bg-surface-container-lowest transition-colors">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-on-surface-variant px-2 py-0.5 rounded-[6px] bg-surface-container-high">
                    06
                  </span>
                  {' '}
                  <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    RF-Guided Task Execution with Labor Tracking
                  </h4>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant pl-9">
                  Frontline handheld scanners direct workers step-by-step while measuring standard time per pick and eliminating idle transit.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-2xl border border-primary/30 bg-surface-container-lowest p-6 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="rounded-[6px] bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5">
                  Feature 01 Deep Dive
                </span>
                {' '}
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Coordinated Pick Orchestration Engine
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Live breakdown of concurrency rules and distance compression across active orders.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-sm text-body-sm">
                  <thead className="text-xs uppercase text-on-surface-variant border-b border-outline-variant/20">
                    <tr>
                      <th className="py-2.5 font-semibold">
                        Picking Strategy
                      </th>
                      <th className="py-2.5 font-semibold">
                        Concurrency
                      </th>
                      <th className="py-2.5 font-semibold">
                        Travel Reduction
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr>
                      <td className="py-3 font-medium text-on-surface">
                        Wave Batching
                      </td>
                      <td className="py-3 text-on-surface-variant">
                        [00] Orders / Wave
                      </td>
                      <td className="py-3 font-semibold text-primary">
                        -[00.0%] distance
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-on-surface">
                        Zone Pass-Through
                      </td>
                      <td className="py-3 text-on-surface-variant">
                        [00] Pickers / Zone
                      </td>
                      <td className="py-3 font-semibold text-primary">
                        -[00.0%] transit
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-on-surface">
                        Cluster Tote Pick
                      </td>
                      <td className="py-3 text-on-surface-variant">
                        [00] Totes / Cart
                      </td>
                      <td className="py-3 font-semibold text-primary">
                        -[00.0%] steps
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 rounded-[10px] bg-surface-container-low border border-outline-variant/20 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-xs text-on-surface-variant font-medium">
                    SLA Compliance Engine
                  </span>
                  {' '}
                  <div className="font-headline-sm text-headline-sm font-bold text-secondary">
                    [00.0%] On Schedule
                  </div>
                </div>
                {' '}
                <span className="rounded-[6px] bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold px-2.5 py-1">
                  REAL-TIME
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="inline-block rounded-[6px] uppercase tracking-wider font-semibold text-xs text-primary bg-primary/10 px-2.5 py-1">
              EXECUTION WORKFLOW
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Four Connected Steps from Floor Plan to Live Fulfillment
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="rounded-[6px] bg-primary/10 text-primary font-mono text-xs font-bold px-2.5 py-1">
                  Step 01
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline text-[20px]">
                  map
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Map the Warehouse Layout
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                The physical facility is digitised down to precise aisles, vertical rack tiers, and micro-bin dividers.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="rounded-[6px] bg-primary/10 text-primary font-mono text-xs font-bold px-2.5 py-1">
                  Step 02
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline text-[20px]">
                  qr_code
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Receive Against Scans
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Incoming freight is checked in at dock doors and directed to specific open bin coordinates via barcode verification.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="rounded-[6px] bg-primary/10 text-primary font-mono text-xs font-bold px-2.5 py-1">
                  Step 03
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline text-[20px]">
                  alt_route
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Auto-Generate Pick Lists
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Confirmed orders automatically calculate shortest-path pick sequences across zones to minimize physical travel.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="rounded-[6px] bg-primary/10 text-primary font-mono text-xs font-bold px-2.5 py-1">
                  Step 04
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline text-[20px]">
                  update
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Live Warehouse Updates
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Picked, packed, and dispatched units instantly deduct from bin availability and update operational ledgers in real time.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-block rounded-[6px] uppercase tracking-wider font-semibold text-xs text-primary bg-primary/10 px-2.5 py-1">
              OPERATIONAL IMPACT
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Why High-Velocity Operations Retire Paper Travelers and Clipboards
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-3">
              <div className="w-8 h-8 rounded-[8px] bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">
                  speed
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Faster Picking
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Accelerate fulfillment velocity and drastically cut wrong-item returns with scan-enforced validation at the cart.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-3">
              <div className="w-8 h-8 rounded-[8px] bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">
                  search_off
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Less Hunting
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Eliminate hours wasted searching for misplaced pallets or orphan inventory through exact bin coordinates.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-3">
              <div className="w-8 h-8 rounded-[8px] bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">
                  verified_user
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Clear Accountability
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Instant forensic traceability identifying who picked, packed, or transferred any item at any timestamp.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-3">
              <div className="w-8 h-8 rounded-[8px] bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">
                  school
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Faster Onboarding
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                New hires follow handheld turn-by-turn pick paths from day one, achieving full target pick rates within hours.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-surface-container-low/40 border border-outline-variant/20 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="space-y-1">
              <h5 className="font-headline-sm text-headline-sm font-semibold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  shield
                </span>
                {' '}
                Enterprise-Grade Security
              </h5>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Encrypted hosting, role-based access control, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
              </p>
            </div>
            <div className="space-y-1">
              <h5 className="font-headline-sm text-headline-sm font-semibold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  price_check
                </span>
                {' '}
                Transparent, Scoped Pricing
              </h5>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Every engagement is scoped individually with a fixed price and timeline agreed upfront — book a free consultation for a tailored quote.
              </p>
            </div>
            <div className="space-y-1">
              <h5 className="font-headline-sm text-headline-sm font-semibold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  group
                </span>
                {' '}
                Built for Your Whole Team
              </h5>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Role-based views mean owners, managers, and frontline staff each see exactly what they need, nothing more, nothing missing.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="inline-block rounded-[6px] uppercase tracking-wider font-semibold text-xs text-primary bg-primary/10 px-2.5 py-1">
              OPERATIONAL TRANSFORMATION
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              What Changes on Day One: Paper Floor Chaos vs. Horizon WarehouseOS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-red-200 bg-red-50/40 p-6 space-y-4">
              <div className="flex items-center gap-2 font-headline-sm text-headline-sm font-bold text-red-950">
                <span className="material-symbols-outlined text-red-600 text-[20px]">
                  cancel
                </span>
                {' '}
                <span>
                  The Fragile Paper Routine
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-red-900/80">
                Legacy paper travelers and unguided tribal memory on the floor:
              </p>
              <ul className="space-y-3 font-body-sm text-body-sm text-red-950">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">
                    ✕
                  </span>
                  {' '}
                  <span>
                    Staff walk aisles hunting for misplaced stock without coordinate clarity.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">
                    ✕
                  </span>
                  {' '}
                  <span>
                    Pick lists written by hand, paper manifests, or memorized shelf habits.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">
                    ✕
                  </span>
                  {' '}
                  <span>
                    No digital record of who moved what, when, or why counts drifted.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">
                    ✕
                  </span>
                  {' '}
                  <span>
                    New pickers take weeks to learn aisle geography before hitting quota.
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-6 space-y-4">
              <div className="flex items-center gap-2 font-headline-sm text-headline-sm font-bold text-emerald-950">
                <span className="material-symbols-outlined text-emerald-600 text-[20px]">
                  check_circle
                </span>
                {' '}
                <span>
                  The Horizon Synchronized Floor
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-emerald-900/80">
                Scan-enforced verification and route-optimized dispatching:
              </p>
              <ul className="space-y-3 font-body-sm text-body-sm text-emerald-950">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">
                    ✔
                  </span>
                  {' '}
                  <span>
                    Every SKU mapped to an exact verified bin coordinate with real-time stock counts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">
                    ✔
                  </span>
                  {' '}
                  <span>
                    Pick lists auto-generated and sequenced the instant an order is confirmed.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">
                    ✔
                  </span>
                  {' '}
                  <span>
                    Complete immutable audit trail capturing every scan, transfer, and cycle count.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">
                    ✔
                  </span>
                  {' '}
                  <span>
                    Scan-guided handheld prompts allow day-one hires to pick at peak productivity.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-block rounded-[6px] uppercase tracking-wider font-semibold text-xs text-primary bg-primary/10 px-2.5 py-1">
              {"SYSTEM ARCHITECTURE & FLOOR RECONCILIATION"}
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Frequently Asked Questions: Clear Answers Regarding Warehouse Deployment
            </h2>
          </div>
          <div className="space-y-3 max-w-4xl">
            <div className="rounded-xl border border-outline-variant/30 bg-surface-container-low/40 p-6">
              <div className="flex items-center justify-between cursor-pointer">
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Do we need special hardware to scan barcodes?
                </h4>
                {' '}
                <span className="material-symbols-outlined text-primary text-[20px]">
                  expand_less
                </span>
              </div>
              <div className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Horizon is hardware-agnostic. It works natively with standard rugged enterprise Android scanners (such as Zebra, Honeywell, and Datalogic), as well as consumer iOS and Android tablets or smartphones via ultra-fast WebAssembly-powered camera barcode reading.
              </div>
            </div>
            <details className={"group rounded-xl border border-outline-variant/30 bg-surface-container-low/40 p-6 [&_summary::-webkit-details-marker]:hidden"}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Can different teams see different warehouses only?
                </h4>
                {' '}
                <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform text-[20px]">
                  expand_more
                </span>
              </summary>
              <div className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Yes. Multi-facility organizations can enforce granular role-based access control (RBAC). A warehouse supervisor can be locked to a single site or designated staging area, while regional logistics directors retain high-level visibility across all distribution hubs.
              </div>
            </details>
            <details className={"group rounded-xl border border-outline-variant/30 bg-surface-container-low/40 p-6 [&_summary::-webkit-details-marker]:hidden"}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  How do you handle a warehouse that is not bin-organized yet?
                </h4>
                {' '}
                <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform text-[20px]">
                  expand_more
                </span>
              </summary>
              <div className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Our deployment team assists in generating systematic bin taxonomy hierarchies. We provide automated barcode label generator templates for rack uprights, crossbeams, and tote dividers before migrating existing SKU counts.
              </div>
            </details>
            <details className={"group rounded-xl border border-outline-variant/30 bg-surface-container-low/40 p-6 [&_summary::-webkit-details-marker]:hidden"}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Can we roll it out to one warehouse before the others?
                </h4>
                {' '}
                <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform text-[20px]">
                  expand_more
                </span>
              </summary>
              <div className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Yes. We strongly advocate phased rollouts. Our deployment architects establish a pilot deployment at your primary facility, validate floor SLAs, and subsequently mirror verified workflows to secondary sites.
              </div>
            </details>
            <details className={"group rounded-xl border border-outline-variant/30 bg-surface-container-low/40 p-6 [&_summary::-webkit-details-marker]:hidden"}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  What happens during a power or internet outage on the floor?
                </h4>
                {' '}
                <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform text-[20px]">
                  expand_more
                </span>
              </summary>
              <div className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Frontline terminal devices maintain an encrypted local queue of scans, task confirmations, and transfers. As soon as wireless connectivity is re-established, the queue deterministically reconciles with the central server.
              </div>
            </details>
            <details className={"group rounded-xl border border-outline-variant/30 bg-surface-container-low/40 p-6 [&_summary::-webkit-details-marker]:hidden"}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Can pickers see instructions in more than one language?
                </h4>
                {' '}
                <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform text-[20px]">
                  expand_more
                </span>
              </summary>
              <div className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Yes. Handheld scanner interfaces support multi-language profiles. Pickers can toggle interface language per user login without affecting central inventory labels.
              </div>
            </details>
            <details className={"group rounded-xl border border-outline-variant/30 bg-surface-container-low/40 p-6 [&_summary::-webkit-details-marker]:hidden"}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  How long does implementation typically take?
                </h4>
                {' '}
                <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform text-[20px]">
                  expand_more
                </span>
              </summary>
              <div className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Typical fixed-scope floor deployments take between [00] and [00] weeks depending on physical facility square footage and ERP integration complexity.
              </div>
            </details>
            <details className={"group rounded-xl border border-outline-variant/30 bg-surface-container-low/40 p-6 [&_summary::-webkit-details-marker]:hidden"}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Is our data secure, and who owns it?
                </h4>
                {' '}
                <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform text-[20px]">
                  expand_more
                </span>
              </summary>
              <div className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Your data remains strictly yours. We deploy encrypted hosting, zero-knowledge operational backups, and clear role-based authorization with full data exportability anytime.
              </div>
            </details>
          </div>
        </section>
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-block rounded-[6px] uppercase tracking-wider font-semibold text-xs text-primary bg-primary/10 px-2.5 py-1">
                CONNECTED ENTERPRISE MODULES
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Looking for something else? Browse our productized operational software packages.
              </h2>
            </div>
            {' '}
            <Link to="/products" className="font-label-lg text-label-lg font-semibold text-primary hover:underline whitespace-nowrap flex items-center gap-1">
              <span>
                Explore all [00+] product packages
              </span>
              {' '}
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-3 hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-primary text-[24px]">
                inventory_2
              </span>
              {' '}
              <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Smart Inventory Control
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Know exactly what's on your shelves, in your trucks, and on order — down to the unit, across every warehouse you run.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-3 hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-primary text-[24px]">
                precision_manufacturing
              </span>
              {' '}
              <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Production Floor Management
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Live machine telemetry, shift logs, and real-time station work orders synchronized with stock depletion.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-3 hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-primary text-[24px]">
                local_shipping
              </span>
              {' '}
              <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Field Service Management
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Dispatch scheduling, route optimization, parts catalog lookup, and live technician maps.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-low/60 border border-outline-variant/30 p-6 space-y-3 hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-primary text-[24px]">
                payments
              </span>
              {' '}
              <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Ecommerce-to-Finance Sync
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Every online order updates your inventory and books automatically, eliminating manual reconciliation.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="coral-gradient rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-block rounded-[6px] bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-xs">
                FIXED-SCOPE FLOOR DEPLOYMENT
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-white tracking-tight leading-tight">
                Ready to coordinate your warehouse floor with fixed-scope certainty?
              </h2>
              <p className="font-body-lg text-body-lg text-white/90 leading-relaxed">
                Retire clipboards, misplaced bins, and walking bottlenecks today. Schedule an architectural consultation with our industrial systems engineers within 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link to="/contact" className="w-full sm:w-auto text-center px-6 py-3 rounded-[10px] bg-white text-on-primary-fixed font-label-lg text-label-lg font-semibold shadow hover:bg-surface transition-all active:scale-[0.99]">
                  Book an Architectural Scoping Consultation
                </Link>
                {' '}
                <a className="w-full sm:w-auto text-center px-6 py-3 rounded-[10px] border border-white/40 bg-white/10 hover:bg-white/20 text-white font-label-lg text-label-lg font-semibold transition-all" href="#">
                  Download Platform Specification
                </a>
              </div>
              <div className="pt-4 border-t border-white/20 text-xs text-white/80 flex items-center gap-1.5">
                <span>
                  🔒 Encrypted hosting, role-based access and regular backups. Zero technical debt guarantee.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
