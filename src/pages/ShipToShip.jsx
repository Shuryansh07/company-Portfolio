// Generated from stitch/pd_ship-to-ship-transfer.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './ShipToShip.css'

export default function ShipToShip() {
  return (
    <div className="pg-ship-to-ship bg-surface text-[#1b1c1b] antialiased selection:bg-[#ffdbd2] selection:text-[#3b0900] min-h-screen flex flex-col">
      <title>{"Horizon | Ship-to-Ship Transfer Management"}</title>
      {' '}
      {' '}
      <main className="flex-grow custom-gradient-bg pt-6 pb-20">
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <nav className="flex items-center gap-2 text-[13px] font-medium text-[#474744] mb-6" aria-label="Breadcrumb">
            <Link to="/products" className="hover:text-[#1b1c1b] transition-colors">
              Products
            </Link>
            {' '}
            <span className="text-[#c7c6c1] text-xs">
              /
            </span>
            {' '}
            <a href="#" className="hover:text-[#1b1c1b] transition-colors">
              Maritime Cargo Ops
            </a>
            {' '}
            <span className="text-[#c7c6c1] text-xs">
              /
            </span>
            {' '}
            <span className="text-[#1b1c1b] font-semibold">
              Ship-to-Ship Transfer Management
            </span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-lime-container border border-[#d6eda6] rounded-[6px] text-on-lime text-[11px] font-bold tracking-wider uppercase mb-4 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#527d00]" />
                {' '}
                Maritime Cargo Ops
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1b1c1b] leading-[1.12] mb-5">
                Ship-to-Ship Transfer Management
              </h1>
              <p className="text-lg sm:text-xl text-[#474744] leading-relaxed mb-8 max-w-2xl font-normal">
                Coordinate cargo transfers between vessels at sea with the same discipline and cryptographic audit trail a premier port terminal demands on land.
              </p>
              <div className="grid grid-cols-3 gap-4 p-4 rounded-[16px] bg-white/70 border border-[#c7c6c1]/40 mb-8 max-w-2xl">
                <div>
                  <div className="text-2xl font-black text-[#1b1c1b] tracking-tight">
                    [00] min
                  </div>
                  <div className="text-[12px] font-medium text-[#474744]">
                    Avg. plan sign-off
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#1b1c1b] tracking-tight">
                    [0.00%]
                  </div>
                  <div className="text-[12px] font-medium text-[#474744]">
                    Transfer discrepancy
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#1b1c1b] tracking-tight">
                    [00+]
                  </div>
                  <div className="text-[12px] font-medium text-[#474744]">
                    Active offshore transfers
                  </div>
                </div>
              </div>
              <div className="space-y-2 mb-6 max-w-2xl">
                <div className="text-[12px] font-bold text-[#777773] uppercase tracking-wider mb-2">
                  Platform Capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/80 border border-[#c7c6c1]/60 rounded-[10px] text-[13px] font-semibold text-[#1b1c1b] shadow-2xs">
                    <span className="material-symbols-outlined text-[#ff7555] text-[18px]">
                      assignment_turned_in
                    </span>
                    {' '}
                    <span>
                      STS Operation Plan Builder
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/80 border border-[#c7c6c1]/60 rounded-[10px] text-[13px] font-semibold text-[#1b1c1b] shadow-2xs">
                    <span className="material-symbols-outlined text-[#ff7555] text-[18px]">
                      verified_user
                    </span>
                    {' '}
                    <span>
                      {"Pre-Transfer Meeting Checklist & Sign-Off"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/80 border border-[#c7c6c1]/60 rounded-[10px] text-[13px] font-semibold text-[#1b1c1b] shadow-2xs">
                    <span className="material-symbols-outlined text-[#ff7555] text-[18px]">
                      badge
                    </span>
                    {' '}
                    <span>
                      {"Mooring Master & POAC Credential Tracking"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/80 border border-[#c7c6c1]/60 rounded-[10px] text-[13px] font-semibold text-[#1b1c1b] shadow-2xs">
                    <span className="material-symbols-outlined text-[#ff7555] text-[18px]">
                      shield_with_heart
                    </span>
                    {' '}
                    <span>
                      {"Fender Inspection & Certification Register"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/80 border border-[#c7c6c1]/60 rounded-[10px] text-[13px] font-semibold text-[#1b1c1b] shadow-2xs">
                    <span className="material-symbols-outlined text-[#ff7555] text-[18px]">
                      air
                    </span>
                    {' '}
                    <span>
                      Weather Window Monitoring Against Limits
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/80 border border-[#c7c6c1]/60 rounded-[10px] text-[13px] font-semibold text-[#1b1c1b] shadow-2xs">
                    <span className="material-symbols-outlined text-[#ff7555] text-[18px]">
                      swap_horiz
                    </span>
                    {' '}
                    <span>
                      {"Cargo Transfer Rate & Volume Reconciliation"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div id="demo-form" className="lg:col-span-5">
              <div className="glass-card rounded-[22px] p-7 shadow-lg border border-[#c7c6c1]/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff7555]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-[#ff7555]/10 text-[#ff7555] text-[11px] font-bold rounded-[6px] tracking-wide uppercase">
                    Fast-Track Consultation
                  </span>
                  {' '}
                  <span className="flex items-center gap-1.5 text-[12px] font-semibold text-[#474744]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {' '}
                    Available Today
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-[#1b1c1b] tracking-tight mb-2">
                  Book a live platform demo
                </h2>
                <p className="text-[13px] text-[#474744] leading-relaxed mb-6">
                  See how Horizon coordinates vessel telemetry, OCIMF compliance logs, and dual-master digital sign-offs in under [00] minutes.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[12px] font-semibold text-[#1b1c1b] mb-1.5">
                      Full Name
                    </label>
                    {' '}
                    <input type="text" placeholder="e.g. Captain Julian Vance" className="w-full px-3.5 py-2.5 bg-white/90 border border-[#c7c6c1]/80 rounded-[10px] text-[14px] text-[#1b1c1b] placeholder:text-[#777773] focus:outline-none focus:ring-2 focus:ring-[#ff7555]/20 focus:border-[#ff7555] transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-[#1b1c1b] mb-1.5">
                      Work Email
                    </label>
                    {' '}
                    <input type="email" placeholder="julian@maritime-ops.com" className="w-full px-3.5 py-2.5 bg-white/90 border border-[#c7c6c1]/80 rounded-[10px] text-[14px] text-[#1b1c1b] placeholder:text-[#777773] focus:outline-none focus:ring-2 focus:ring-[#ff7555]/20 focus:border-[#ff7555] transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-[#1b1c1b] mb-1.5">
                      Phone Number
                    </label>
                    {' '}
                    <input type="tel" placeholder="Phone number" className="w-full px-3.5 py-2.5 bg-white/90 border border-[#c7c6c1]/80 rounded-[10px] text-[14px] text-[#1b1c1b] placeholder:text-[#777773] focus:outline-none focus:ring-2 focus:ring-[#ff7555]/20 focus:border-[#ff7555] transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-[#1b1c1b] mb-1.5">
                      Fleet / Operation Scale
                    </label>
                    {' '}
                    <select className="w-full px-3.5 py-2.5 bg-white/90 border border-[#c7c6c1]/80 rounded-[10px] text-[14px] text-[#1b1c1b] focus:outline-none focus:ring-2 focus:ring-[#ff7555]/20 focus:border-[#ff7555] transition-all">
                      <option>
                        1 - 5 Active STS Transfer Operations / Month
                      </option>
                      <option>
                        6 - 20 Operations / Month (High-Volume Hub)
                      </option>
                      <option>
                        {"20+ Operations (Global Tanker & Terminal Ops)"}
                      </option>
                    </select>
                  </div>
                  {' '}
                  <button type="submit" className="w-full py-3 px-4 bg-[#ff7555] hover:bg-[#f0613f] text-white font-bold text-[14px] rounded-[10px] shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 mt-2">
                    <span>
                      Request Live Walkthrough
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                  {' '}
                  <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-[#474744] font-medium">
                    <span className="material-symbols-outlined text-[14px] text-[#777773]">
                      lock
                    </span>
                    {' '}
                    <span>
                      Encrypted hosting, role-based access, and regular backups.
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-container border border-[#b2e5f1] rounded-[6px] text-on-cyan text-[11px] font-bold tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00839c]" />
              {' '}
              Real-Time Operations Console
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b1c1b] tracking-tight mb-4">
              See Ship-to-Ship Transfer Management in Action
            </h2>
            <p className="text-base text-[#474744] leading-relaxed">
              Watch automated mooring line tension alerts, dual-master checklist sign-offs, and live manifold telemetry resolve offshore cargo uncertainty in real time.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 rounded-[20px] bg-[#141517] border border-[#2b2d31] p-6 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                  {' '}
                  <span className="text-[12px] font-mono tracking-wider text-white/90 font-bold uppercase">
                    LIVE FEED: GULF STS ZONE [00]
                  </span>
                </div>
                {' '}
                <span className="text-[11px] px-2 py-0.5 rounded-[6px] bg-white/10 font-mono text-white/70">
                  LAT: 26°14.2' N
                </span>
              </div>
              <div className="relative z-10 my-16 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-[12px] bg-[#ff7555]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined text-[36px] ml-1">
                    play_arrow
                  </span>
                </div>
                <div className="mt-4 font-semibold text-[15px] tracking-tight">
                  Watch 4-Minute Telemetry Walkthrough
                </div>
                <div className="text-[12px] text-white/60 mt-1">
                  VLCC-to-Aframax crude transfer simulation with wave buoy sync
                </div>
              </div>
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-[12px] text-white/70 font-mono">
                <span>
                  Manifold Pressure: [00.0] Bar
                </span>
                {' '}
                <span className="text-lime font-bold">
                  Mooring Safe: Tier-1
                </span>
              </div>
            </div>
            <div className="lg:col-span-7 glass-card rounded-[20px] p-6 border border-[#c7c6c1]/60 shadow-lg flex flex-col justify-between bg-white/85">
              <div className="flex items-center justify-between pb-4 border-b border-[#c7c6c1]/40 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    {' '}
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    {' '}
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  {' '}
                  <span className="text-[13px] font-bold text-[#1b1c1b]">
                    Horizon Maritime Console v4.8
                  </span>
                  {' '}
                  <span className="text-[11px] px-2 py-0.5 rounded-[6px] bg-lime-container text-on-lime font-bold uppercase tracking-wider">
                    Synchronized
                  </span>
                </div>
                <div className="text-[12px] font-mono text-[#474744]">
                  OPS-REF: [STS-2025-084]
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-[12px] bg-surface-container-low border border-[#c7c6c1]/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold uppercase text-[#777773]">
                        Discharging Vessel (Mother Ship)
                      </span>
                      {' '}
                      <span className="text-[11px] px-2 py-0.2 rounded-[6px] bg-emerald-100 text-emerald-800 font-bold">
                        STABLE
                      </span>
                    </div>
                    <div className="font-extrabold text-[15px] text-[#1b1c1b]">
                      [Vessel Name 01] · VLCC
                    </div>
                    <div className="text-[12px] text-[#474744] font-mono mt-0.5">
                      MMSI: [000000000] · Master: [Master Name 01]
                    </div>
                  </div>
                  <div className="p-3.5 rounded-[12px] bg-surface-container-low border border-[#c7c6c1]/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold uppercase text-[#777773]">
                        Receiving Vessel (Daughter Ship)
                      </span>
                      {' '}
                      <span className="text-[11px] px-2 py-0.2 rounded-[6px] bg-emerald-100 text-emerald-800 font-bold">
                        MANIFOLD LOCKED
                      </span>
                    </div>
                    <div className="font-extrabold text-[15px] text-[#1b1c1b]">
                      [Vessel Name 02] · Suezmax
                    </div>
                    <div className="text-[12px] text-[#474744] font-mono mt-0.5">
                      MMSI: [000000000] · Master: [Master Name 02]
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2.5 text-center">
                  <div className="p-2.5 rounded-[10px] bg-white border border-[#c7c6c1]/60">
                    <div className="text-[11px] text-[#474744] font-medium">
                      Flow Rate
                    </div>
                    <div className="text-[16px] font-black text-[#1b1c1b] font-mono">
                      [0,000] m³/h
                    </div>
                    <div className="text-[10px] text-emerald-600 font-bold">
                      Nominal Rate
                    </div>
                  </div>
                  <div className="p-2.5 rounded-[10px] bg-white border border-[#c7c6c1]/60">
                    <div className="text-[11px] text-[#474744] font-medium">
                      Transferred
                    </div>
                    <div className="text-[16px] font-black text-[#1b1c1b] font-mono">
                      [00,000] MT
                    </div>
                    <div className="text-[10px] text-[#474744]">
                      [00%] of Target
                    </div>
                  </div>
                  <div className="p-2.5 rounded-[10px] bg-white border border-[#c7c6c1]/60">
                    <div className="text-[11px] text-[#474744] font-medium">
                      Swell Height
                    </div>
                    <div className="text-[16px] font-black text-[#1b1c1b] font-mono">
                      [0.0] m
                    </div>
                    <div className="text-[10px] text-emerald-600 font-bold">
                      Limit: 2.5m (Safe)
                    </div>
                  </div>
                  <div className="p-2.5 rounded-[10px] bg-white border border-[#c7c6c1]/60">
                    <div className="text-[11px] text-[#474744] font-medium">
                      Fender Deflection
                    </div>
                    <div className="text-[16px] font-black text-[#1b1c1b] font-mono">
                      [00%]
                    </div>
                    <div className="text-[10px] text-emerald-600 font-bold">
                      Yokohama Primary
                    </div>
                  </div>
                </div>
                <div className="p-3.5 rounded-[12px] bg-white border border-[#c7c6c1]/60">
                  <div className="flex items-center justify-between text-[12px] font-bold text-[#1b1c1b] mb-2">
                    <span>
                      Joint Pre-Transfer Safety Verification (OCIMF Matrix)
                    </span>
                    {' '}
                    <span className="text-[#ff7555] font-mono text-[11px]">
                      18 of 18 Checks Countersigned
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[12px] py-1 border-b border-[#c7c6c1]/30">
                      <span className="flex items-center gap-2 text-[#1b1c1b]">
                        <span className="material-symbols-outlined text-[16px] text-emerald-600">
                          check_circle
                        </span>
                        {' '}
                        {"Vapor Balancing & Emergency Shutdown (ESD) Link Tested"}
                      </span>
                      {' '}
                      <span className="text-[11px] font-mono text-[#777773]">
                        [Signed: 08:14 UTC]
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[12px] py-1 border-b border-[#c7c6c1]/30">
                      <span className="flex items-center gap-2 text-[#1b1c1b]">
                        <span className="material-symbols-outlined text-[16px] text-emerald-600">
                          check_circle
                        </span>
                        {' '}
                        {"POAC & Mooring Master Endorsement Stamped"}
                      </span>
                      {' '}
                      <span className="text-[11px] font-mono text-[#777773]">
                        [POAC ID: MM-084]
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[12px] py-1">
                      <span className="flex items-center gap-2 text-[#1b1c1b]">
                        <span className="material-symbols-outlined text-[16px] text-emerald-600">
                          check_circle
                        </span>
                        {' '}
                        Continuous Weather Alert Boundary Active (Next check [00] min)
                      </span>
                      {' '}
                      <span className="text-[11px] font-mono text-emerald-700 font-semibold">
                        [Green Window]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#c7c6c1]/40 flex items-center justify-between text-[12px] text-[#474744]">
                <span>
                  Cryptographic dual-master audit trail active
                </span>
                {' '}
                <span className="font-mono text-[11px] text-[#777773]">
                  Ledger Hash: [0x4f...92d1]
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="glass-card rounded-[22px] p-8 sm:p-12 border border-[#c7c6c1]/60 shadow-md">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#ff7555]/10 rounded-[6px] text-[#ff7555] text-[11px] font-bold tracking-wider uppercase mb-3">
                The Operational Bottleneck
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b1c1b] tracking-tight mb-4">
                STS Operations Run on Timing, Not Luck
              </h2>
              <p className="text-base sm:text-lg text-[#474744] leading-relaxed mb-8">
                Transferring cargo between two vessels alongside each other—whether crude oil, LNG, chemical parcels, or dry bulk cargo—depends on uncompromising scheduling, equipment readiness, and strict adherence to international maritime safety standards. Horizon coordinates the end-to-end operational plan, documentation packages, and compliance checklists so nothing gets missed in high-risk, high-value open-water operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#c7c6c1]/40">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-600 text-[22px] mt-0.5">
                    check_circle
                  </span>
                  {' '}
                  <div>
                    <h3 className="text-[15px] font-bold text-[#1b1c1b] mb-1">
                      Full Operational Planning
                    </h3>
                    <p className="text-[13px] text-[#474744] leading-normal">
                      End-to-end choreography for vessel-to-vessel cargo transfers, from initial anchorage to departure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-600 text-[22px] mt-0.5">
                    check_circle
                  </span>
                  {' '}
                  <div>
                    <h3 className="text-[15px] font-bold text-[#1b1c1b] mb-1">
                      Compliance Tracking
                    </h3>
                    <p className="text-[13px] text-[#474744] leading-normal">
                      Verifiable compliance tracking against global maritime safety standards and OCIMF/ISGOTT protocols.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-600 text-[22px] mt-0.5">
                    check_circle
                  </span>
                  {' '}
                  <div>
                    <h3 className="text-[15px] font-bold text-[#1b1c1b] mb-1">
                      Centralized Documentation
                    </h3>
                    <p className="text-[13px] text-[#474744] leading-normal">
                      Unified documentation repositories for every transfer, accessible by both vessel masters and port authorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-lime-container border border-[#d6eda6] rounded-[6px] text-on-lime text-[11px] font-bold tracking-wider uppercase mb-2">
                Engineered Maritime Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b1c1b] tracking-tight">
                Built for the Realities of Open-Water Transfer
              </h2>
            </div>
            <p className="text-[14px] text-[#474744] mt-2 md:mt-0 max-w-md">
              Six deterministic features that systematically eliminate manual oversight, unverified gear, and coordination lag during offshore transfers.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="glass-card rounded-[16px] p-5 border-l-4 border-l-[#ff7555] border-[#c7c6c1]/60 shadow-sm bg-white">
                <div className="flex items-baseline justify-between mb-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[#ff7555] font-mono font-black text-lg">
                      01
                    </span>
                    {' '}
                    <h3 className="text-lg font-bold text-[#1b1c1b]">
                      STS Operation Plan Builder
                    </h3>
                  </div>
                  {' '}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff7555] px-2 py-0.5 bg-[#ff7555]/10 rounded-[6px]">
                    Deep Dive
                  </span>
                </div>
                <p className="text-[13.5px] text-[#474744] leading-relaxed pl-8">
                  Construct complete mooring configurations, fender layouts, and manifold transfer sequences into an immutable digital operations plan. Each plan requires dual-master digital countersignatures before execution can proceed.
                </p>
              </div>
              <div className="glass-card rounded-[16px] p-5 border border-[#c7c6c1]/60 hover:border-[#ff7555]/40 transition-colors">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[#777773] font-mono font-bold text-lg">
                    02
                  </span>
                  {' '}
                  <h3 className="text-lg font-bold text-[#1b1c1b]">
                    Pre-Transfer Meeting Checklist and Sign-Off
                  </h3>
                </div>
                <p className="text-[13.5px] text-[#474744] leading-relaxed pl-8">
                  Digitize comprehensive safety meetings between both vessel commands, the POAC, and attending mooring masters. Every item—from vapor return tests to ESD link verification—is recorded with timestamped approvals.
                </p>
              </div>
              <div className="glass-card rounded-[16px] p-5 border border-[#c7c6c1]/60 hover:border-[#ff7555]/40 transition-colors">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[#777773] font-mono font-bold text-lg">
                    03
                  </span>
                  {' '}
                  <h3 className="text-lg font-bold text-[#1b1c1b]">
                    Mooring Master and POAC Credential Tracking
                  </h3>
                </div>
                <p className="text-[13.5px] text-[#474744] leading-relaxed pl-8">
                  Maintain an audited register of Person in Overall Advisory Control (POAC) licenses, pilot endorsements, and simulator currency hours. Automated gate checks prevent uncertified personnel assignment to hazardous transfers.
                </p>
              </div>
              <div className="glass-card rounded-[16px] p-5 border border-[#c7c6c1]/60 hover:border-[#ff7555]/40 transition-colors">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[#777773] font-mono font-bold text-lg">
                    04
                  </span>
                  {' '}
                  <h3 className="text-lg font-bold text-[#1b1c1b]">
                    Fender Inspection and Certification Register
                  </h3>
                </div>
                <p className="text-[13.5px] text-[#474744] leading-relaxed pl-8">
                  Track pneumatic and foam fender maintenance cycles, pressure tests, and visual inspection logs across the entire equipment pool. Deploys alerts when primary or baby fenders approach inspection expiry.
                </p>
              </div>
              <div className="glass-card rounded-[16px] p-5 border border-[#c7c6c1]/60 hover:border-[#ff7555]/40 transition-colors">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[#777773] font-mono font-bold text-lg">
                    05
                  </span>
                  {' '}
                  <h3 className="text-lg font-bold text-[#1b1c1b]">
                    Weather Window Monitoring Against Operational Limits
                  </h3>
                </div>
                <p className="text-[13.5px] text-[#474744] leading-relaxed pl-8">
                  Integrate live wave buoy feeds, tide schedules, wind speed forecasts, and swell periods directly against specific hull compatibility envelopes. System automatically flags abort thresholds before critical limits are breached.
                </p>
              </div>
              <div className="glass-card rounded-[16px] p-5 border border-[#c7c6c1]/60 hover:border-[#ff7555]/40 transition-colors">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[#777773] font-mono font-bold text-lg">
                    06
                  </span>
                  {' '}
                  <h3 className="text-lg font-bold text-[#1b1c1b]">
                    Cargo Transfer Rate and Volume Reconciliation
                  </h3>
                </div>
                <p className="text-[13.5px] text-[#474744] leading-relaxed pl-8">
                  Continuous comparative logging between discharging and receiving vessel flow meters and ullage calculations. Immediately surfaces flow variances or line friction discrepancies to prevent cargo loss disputes.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 glass-card rounded-[22px] p-6 border border-[#c7c6c1]/60 shadow-lg bg-surface-container-low/60 sticky top-24">
              <div className="flex items-center justify-between pb-3 border-b border-[#c7c6c1]/40 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff7555]">
                  Deep Dive Module
                </span>
                {' '}
                <span className="px-2 py-0.5 rounded-[6px] bg-lime-container text-on-lime text-[11px] font-mono font-bold">
                  OCIMF/ISGOTT Verified
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1b1c1b] mb-2">
                Digital STS Operation Plan
              </h3>
              <p className="text-[13px] text-[#474744] mb-5">
                Every transfer builds a structured operation plan covering mooring patterns, fendering arrangements, and cargo pumping sequences, digitally countersigned by both masters before authorization.
              </p>
              <div className="space-y-3 bg-white p-4 rounded-[14px] border border-[#c7c6c1]/50 text-[12px]">
                <div className="flex justify-between items-center pb-2 border-b border-[#c7c6c1]/30">
                  <span className="text-[#777773] font-medium">
                    Operation Code
                  </span>
                  {' '}
                  <span className="font-mono font-bold text-[#1b1c1b]">
                    STS-OPS-[0000]-W
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#c7c6c1]/30">
                  <span className="text-[#777773] font-medium">
                    Discharging Master Approval
                  </span>
                  {' '}
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      check_circle
                    </span>
                    {' '}
                    {"Verified & Signed"}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#c7c6c1]/30">
                  <span className="text-[#777773] font-medium">
                    Receiving Master Approval
                  </span>
                  {' '}
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      check_circle
                    </span>
                    {' '}
                    {"Verified & Signed"}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#c7c6c1]/30">
                  <span className="text-[#777773] font-medium">
                    POAC License Verification
                  </span>
                  {' '}
                  <span className="text-[#1b1c1b] font-mono font-semibold">
                    Active (Class-1 Master)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#777773] font-medium">
                    Fender Certificate Expiry
                  </span>
                  {' '}
                  <span className="text-[#1b1c1b] font-mono">
                    [00] Days Remaining
                  </span>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-[10px] bg-[#ff7555]/10 border border-[#ff7555]/20 text-[12px] text-[#3b0900] leading-relaxed">
                <strong>
                  Deterministic Safeguard:
                </strong>
                {' '}
                Mooring release permits are locked until ullage differences are mathematically certified and signed across both vessel bridges.
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-cyan-container border border-[#b2e5f1] rounded-[6px] text-on-cyan text-[11px] font-bold tracking-wider uppercase mb-3">
              Execution Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b1c1b] tracking-tight mb-3">
              From Request to Closed Operation
            </h2>
            <p className="text-[15px] text-[#474744]">
              Four structured steps that govern high-risk open-water cargo transfers from intake to regulatory closeout.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="glass-card rounded-[18px] p-6 border border-[#c7c6c1]/60 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-[#ff7555]/15 text-[#ff7555] font-mono font-extrabold flex items-center justify-center text-[16px] mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#1b1c1b] mb-2">
                  Log the Transfer Request
                </h3>
                <p className="text-[13px] text-[#474744] leading-relaxed">
                  Transfer request is initialized with full mother and daughter vessel specifications, cargo classification, volume requirements, and nominated anchorage coordinates.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#c7c6c1]/30 text-[11px] font-mono text-[#777773]">
                {"Stage 1: Intake & Feasibility"}
              </div>
            </div>
            <div className="glass-card rounded-[18px] p-6 border border-[#c7c6c1]/60 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-[#ff7555]/15 text-[#ff7555] font-mono font-extrabold flex items-center justify-center text-[16px] mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#1b1c1b] mb-2">
                  Build the Operational Plan
                </h3>
                <p className="text-[13px] text-[#474744] leading-relaxed">
                  Operational choreography is constructed incorporating tide curves, fender positioning, POAC assignments, and the pre-transfer joint safety checklist.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#c7c6c1]/30 text-[11px] font-mono text-[#777773]">
                {"Stage 2: Plan & Matrix Check"}
              </div>
            </div>
            <div className="glass-card rounded-[18px] p-6 border border-[#c7c6c1]/60 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-[#ff7555]/15 text-[#ff7555] font-mono font-extrabold flex items-center justify-center text-[16px] mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#1b1c1b] mb-2">
                  Execute with Live Logging
                </h3>
                <p className="text-[13px] text-[#474744] leading-relaxed">
                  Transfer is executed alongside with continuous telemetry logging of manifold pressures, flow rates, environmental wind limits, and any operational deviations.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#c7c6c1]/30 text-[11px] font-mono text-[#777773]">
                Stage 3: Manifold Telemetry
              </div>
            </div>
            <div className="glass-card rounded-[18px] p-6 border border-[#c7c6c1]/60 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-[#ff7555]/15 text-[#ff7555] font-mono font-extrabold flex items-center justify-center text-[16px] mb-4">
                  04
                </div>
                <h3 className="text-lg font-bold text-[#1b1c1b] mb-2">
                  Close with Documentation
                </h3>
                <p className="text-[13px] text-[#474744] leading-relaxed">
                  Post-operation reconciliation report, signed ullage certificates, and compliance documentation are automatically compiled into permanent records for audit.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#c7c6c1]/30 text-[11px] font-mono text-[#777773]">
                Stage 4: Compliance Seal
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-lime-container border border-[#d6eda6] rounded-[6px] text-on-lime text-[11px] font-bold tracking-wider uppercase mb-3">
              Operational Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b1c1b] tracking-tight mb-3">
              Why Operators Formalize Planning
            </h2>
            <p className="text-[15px] text-[#474744]">
              Lower risk, uncompromised documentation, and synchronized bridge-to-shore communication.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="glass-card rounded-[18px] p-6 border border-[#c7c6c1]/60">
              <div className="w-10 h-10 rounded-[10px] bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">
                  shield
                </span>
              </div>
              <h3 className="text-[16px] font-bold text-[#1b1c1b] mb-2">
                Reduced Operational Risk
              </h3>
              <p className="text-[13px] text-[#474744] leading-relaxed">
                Eliminate procedural shortcuts through mandatory, structured safety checklists and automated environmental abort boundaries.
              </p>
            </div>
            <div className="glass-card rounded-[18px] p-6 border border-[#c7c6c1]/60">
              <div className="w-10 h-10 rounded-[10px] bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">
                  fact_check
                </span>
              </div>
              <h3 className="text-[16px] font-bold text-[#1b1c1b] mb-2">
                Clear Documentation
              </h3>
              <p className="text-[13px] text-[#474744] leading-relaxed">
                Establish a defensible, immutable documentation trail for coastal state port authorities, maritime insurers, and charterers.
              </p>
            </div>
            <div className="glass-card rounded-[18px] p-6 border border-[#c7c6c1]/60">
              <div className="w-10 h-10 rounded-[10px] bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">
                  hub
                </span>
              </div>
              <h3 className="text-[16px] font-bold text-[#1b1c1b] mb-2">
                Better Coordination
              </h3>
              <p className="text-[13px] text-[#474744] leading-relaxed">
                Synchronize bridge commands between vessels, service craft, terminal superintendents, and shore-side operations in real time.
              </p>
            </div>
            <div className="glass-card rounded-[18px] p-6 border border-[#c7c6c1]/60">
              <div className="w-10 h-10 rounded-[10px] bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">
                  bolt
                </span>
              </div>
              <h3 className="text-[16px] font-bold text-[#1b1c1b] mb-2">
                Faster Reporting
              </h3>
              <p className="text-[13px] text-[#474744] leading-relaxed">
                Generate and dispatch audited post-transfer dossiers within minutes of unmooring instead of assembling paperwork days later.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#c7c6c1]/40">
            <div className="p-5 rounded-[16px] bg-white/70 border border-[#c7c6c1]/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#ff7555] text-[20px]">
                  lock
                </span>
                {' '}
                <h4 className="text-[14px] font-bold text-[#1b1c1b]">
                  Enterprise-Grade Security
                </h4>
              </div>
              <p className="text-[12.5px] text-[#474744] leading-relaxed">
                Encrypted hosting, role-based access control, and regular backups. Your operational data always remains fully yours and exportable, with no lock-in.
              </p>
            </div>
            <div className="p-5 rounded-[16px] bg-white/70 border border-[#c7c6c1]/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#ff7555] text-[20px]">
                  payments
                </span>
                {' '}
                <h4 className="text-[14px] font-bold text-[#1b1c1b]">
                  Transparent, Scoped Pricing
                </h4>
              </div>
              <p className="text-[12.5px] text-[#474744] leading-relaxed">
                Every engagement is scoped individually with a fixed price and timeline agreed upfront—book a free consultation for a tailored quote.
              </p>
            </div>
            <div className="p-5 rounded-[16px] bg-white/70 border border-[#c7c6c1]/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#ff7555] text-[20px]">
                  groups
                </span>
                {' '}
                <h4 className="text-[14px] font-bold text-[#1b1c1b]">
                  Built for Your Whole Team
                </h4>
              </div>
              <p className="text-[12.5px] text-[#474744] leading-relaxed">
                Role-based views mean owners, managers, mooring masters, and frontline bridge officers each see exactly what they need, nothing more, nothing missing.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#ff7555]/10 rounded-[6px] text-[#ff7555] text-[11px] font-bold tracking-wider uppercase mb-2">
              Operational Transformation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b1c1b] tracking-tight mb-2">
              What Changes on Day One
            </h2>
            <p className="text-[14px] text-[#474744]">
              Comparing fragmented ad-hoc vessel coordination with the Horizon synchronized standard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[20px] p-7 bg-[#faebe8] border border-[#f5cfc7]">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#f0c2b8]">
                <h3 className="text-lg font-bold text-[#1b1c1b]">
                  The Legacy Transfer Routine
                </h3>
                {' '}
                <span className="text-[11px] font-mono font-bold uppercase px-2 py-0.5 rounded-[6px] bg-rose-200 text-rose-900">
                  Fragmented
                </span>
              </div>
              <ul className="space-y-4 text-[13.5px] text-[#1b1c1b]">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-rose-600 text-[18px] mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Safety checklists tracked on paper binders across two independent vessels with no live sync.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-rose-600 text-[18px] mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Documentation scattered across separate vessel agents, bunkering brokers, and shore operators.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-rose-600 text-[18px] mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Equipment certifications and crew readiness confirmed only by unrecorded radio VHF calls.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-rose-600 text-[18px] mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Post-operation compliance reports laboriously assembled days after the fact from hand-scribbled logs.
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-[20px] p-7 bg-[#f4fae6] border border-[#dcedbe]">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#d0e6ab]">
                <h3 className="text-lg font-bold text-[#1b1c1b]">
                  The Horizon Synchronized Protocol
                </h3>
                {' '}
                <span className="text-[11px] font-mono font-bold uppercase px-2 py-0.5 rounded-[6px] bg-lime text-on-lime">
                  Deterministic
                </span>
              </div>
              <ul className="space-y-4 text-[13.5px] text-[#1b1c1b]">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-700 text-[18px] mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Structured digital checklists tied directly to each operation, requiring dual-bridge verification.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-700 text-[18px] mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Centralized documentation ready for instant regulatory and port state control review.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-700 text-[18px] mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Vessel readiness, certified mooring masters, and inspected fendering logged in one unified plan.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-700 text-[18px] mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Auditable reports generated automatically from real-time operational telemetry upon hose disconnection.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-cyan-container border border-[#b2e5f1] rounded-[6px] text-on-cyan text-[11px] font-bold tracking-wider uppercase mb-2">
              {"Technical & Regulatory Clarifications"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b1c1b] tracking-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-[14px] text-[#474744]">
              Clear answers regarding cargo compatibility, audit readiness, offline bridge access, and data governance.
            </p>
          </div>
          <div className="space-y-3">
            <div className="glass-card rounded-[14px] border border-[#c7c6c1]/60 overflow-hidden bg-white shadow-2xs">
              <div className="p-5 flex items-center justify-between cursor-pointer border-b border-[#c7c6c1]/30">
                <span className="font-bold text-[15px] text-[#1b1c1b]">
                  Does the system account for different cargo types with different handling requirements?
                </span>
                {' '}
                <span className="material-symbols-outlined text-[#ff7555] text-[20px]">
                  remove
                </span>
              </div>
              <div className="p-5 pt-3 text-[13.5px] text-[#474744] leading-relaxed bg-surface/40">
                Yes. Horizon includes pre-configured operational templates and safety interlocks for crude oil, petroleum products, LNG/LPG cryogenic transfers, bulk chemicals, and dry bulk commodities. Each profile enforces the corresponding OCIMF, SIGTTO, or ISGOTT checklists, vapor pressure thresholds, and emergency shutdown sequence timings.
              </div>
            </div>
            <div className="glass-card rounded-[14px] border border-[#c7c6c1]/60 bg-white shadow-2xs p-5 flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors">
              <span className="font-semibold text-[15px] text-[#1b1c1b]">
                Can it help demonstrate compliance during a regulatory audit?
              </span>
              {' '}
              <span className="material-symbols-outlined text-[#777773] text-[20px]">
                add
              </span>
            </div>
            <div className="glass-card rounded-[14px] border border-[#c7c6c1]/60 bg-white shadow-2xs p-5 flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors">
              <span className="font-semibold text-[15px] text-[#1b1c1b]">
                Can multiple parties, vessel agents, terminal operators, see the same operational plan?
              </span>
              {' '}
              <span className="material-symbols-outlined text-[#777773] text-[20px]">
                add
              </span>
            </div>
            <div className="glass-card rounded-[14px] border border-[#c7c6c1]/60 bg-white shadow-2xs p-5 flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors">
              <span className="font-semibold text-[15px] text-[#1b1c1b]">
                Can weather delays be logged against an operation?
              </span>
              {' '}
              <span className="material-symbols-outlined text-[#777773] text-[20px]">
                add
              </span>
            </div>
            <div className="glass-card rounded-[14px] border border-[#c7c6c1]/60 bg-white shadow-2xs p-5 flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors">
              <span className="font-semibold text-[15px] text-[#1b1c1b]">
                Is the system usable from a vessel with limited connectivity?
              </span>
              {' '}
              <span className="material-symbols-outlined text-[#777773] text-[20px]">
                add
              </span>
            </div>
            <div className="glass-card rounded-[14px] border border-[#c7c6c1]/60 bg-white shadow-2xs p-5 flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors">
              <span className="font-semibold text-[15px] text-[#1b1c1b]">
                Can shore-side teams monitor an operation in progress?
              </span>
              {' '}
              <span className="material-symbols-outlined text-[#777773] text-[20px]">
                add
              </span>
            </div>
            <div className="glass-card rounded-[14px] border border-[#c7c6c1]/60 bg-white shadow-2xs p-5 flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors">
              <span className="font-semibold text-[15px] text-[#1b1c1b]">
                How long does implementation typically take?
              </span>
              {' '}
              <span className="material-symbols-outlined text-[#777773] text-[20px]">
                add
              </span>
            </div>
            <div className="glass-card rounded-[14px] border border-[#c7c6c1]/60 bg-white shadow-2xs p-5 flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors">
              <span className="font-semibold text-[15px] text-[#1b1c1b]">
                Is our data secure, and who owns it?
              </span>
              {' '}
              <span className="material-symbols-outlined text-[#777773] text-[20px]">
                add
              </span>
            </div>
          </div>
        </section>
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#c7c6c1]/40">
            <div>
              <div className="text-[11px] font-bold text-[#ff7555] tracking-wider uppercase mb-1">
                Connected Enterprise Ecosystem
              </div>
              <h2 className="text-2xl font-extrabold text-[#1b1c1b] tracking-tight">
                Looking for something else?
              </h2>
            </div>
            {' '}
            <Link to="/products" className="inline-flex items-center gap-1 text-[13px] font-bold text-[#ff7555] hover:underline">
              <span>
                Browse all [00+] product packages
              </span>
              {' '}
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-[16px] p-5 border border-[#c7c6c1]/60 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-8 h-8 rounded-[8px] bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[18px]">
                    sailing
                  </span>
                </div>
                <div className="text-[11px] font-bold text-[#777773] uppercase tracking-wider mb-1">
                  {"Maritime & Luxury"}
                </div>
                <h3 className="text-[16px] font-bold text-[#1b1c1b] mb-2">
                  Yacht Charter Management
                </h3>
                <p className="text-[12.5px] text-[#474744] leading-relaxed">
                  Every charter, from the first inquiry to the last owner payout, unified in one operational ledger.
                </p>
              </div>
              {' '}
              <Link to="/products/yacht-charter-management" className="inline-flex items-center gap-1 text-[12px] font-bold text-[#ff7555] mt-4 pt-3 border-t border-[#c7c6c1]/30">
                <span>
                  Explore Package
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="glass-card rounded-[16px] p-5 border border-[#c7c6c1]/60 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-8 h-8 rounded-[8px] bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[18px]">
                    inventory_2
                  </span>
                </div>
                <div className="text-[11px] font-bold text-[#777773] uppercase tracking-wider mb-1">
                  Supply Chain
                </div>
                <h3 className="text-[16px] font-bold text-[#1b1c1b] mb-2">
                  Smart Inventory Control
                </h3>
                <p className="text-[12.5px] text-[#474744] leading-relaxed">
                  Know exactly what's on your shelves, in your trucks, and on order—down to the unit across every hub.
                </p>
              </div>
              {' '}
              <Link to="/products/inventory-control" className="inline-flex items-center gap-1 text-[12px] font-bold text-[#ff7555] mt-4 pt-3 border-t border-[#c7c6c1]/30">
                <span>
                  Explore Package
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="glass-card rounded-[16px] p-5 border border-[#c7c6c1]/60 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-8 h-8 rounded-[8px] bg-cyan-container text-on-cyan flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[18px]">
                    smart_toy
                  </span>
                </div>
                <div className="text-[11px] font-bold text-[#777773] uppercase tracking-wider mb-1">
                  Field Intelligence
                </div>
                <h3 className="text-[16px] font-bold text-[#1b1c1b] mb-2">
                  AI QC Agent
                </h3>
                <p className="text-[12.5px] text-[#474744] leading-relaxed">
                  Centralized installation knowledge, schematics, and verification SOPs straight on your technician's mobile device.
                </p>
              </div>
              {' '}
              <Link to="/products/ai-qc-agent" className="inline-flex items-center gap-1 text-[12px] font-bold text-[#ff7555] mt-4 pt-3 border-t border-[#c7c6c1]/30">
                <span>
                  Explore Package
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="glass-card rounded-[16px] p-5 border border-[#c7c6c1]/60 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-8 h-8 rounded-[8px] bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[18px]">
                    flight_takeoff
                  </span>
                </div>
                <div className="text-[11px] font-bold text-[#777773] uppercase tracking-wider mb-1">
                  Autonomous Travel
                </div>
                <h3 className="text-[16px] font-bold text-[#1b1c1b] mb-2">
                  AI Travel Agent
                </h3>
                <p className="text-[12.5px] text-[#474744] leading-relaxed">
                  Intelligent business travel automation: hotels, flights, and support booked strictly within enterprise policy.
                </p>
              </div>
              {' '}
              <Link to="/products/ai-travel-agent" className="inline-flex items-center gap-1 text-[12px] font-bold text-[#ff7555] mt-4 pt-3 border-t border-[#c7c6c1]/30">
                <span>
                  Explore Package
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <div className="rounded-[24px] p-10 sm:p-14 bg-gradient-to-r from-[#ff7555] via-[#ff6543] to-[#f45330] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-[6px] text-white text-[11px] font-extrabold tracking-wider uppercase mb-4">
                Fixed-Scope Maritime Deployment
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
                Ready to coordinate your offshore transfers with deterministic certainty?
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 max-w-2xl font-normal">
                Retire unrecorded radio handshakes and scattered PDF checklists. Schedule an architectural consultation with our maritime systems engineering team within 48 hours.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact" className="px-6 py-3.5 bg-white text-[#1b1c1b] font-bold text-[14px] rounded-[10px] shadow hover:bg-neutral-100 transition-all active:scale-[0.98]">
                  Book an Architectural Scoping Consultation
                </Link>
                {' '}
                <a href="#" className="px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold text-[14px] rounded-[10px] backdrop-blur-sm transition-all flex items-center gap-2">
                  <span>
                    Download Platform Specification
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">
                    download
                  </span>
                </a>
              </div>
              <div className="mt-8 flex items-center gap-2 text-[12px] text-white/80">
                <span className="material-symbols-outlined text-[16px]">
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
      </main>
      {' '}
    </div>
  )
}
