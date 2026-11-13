// Generated from stitch/pd_garage-management.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './AutoWorkshop.css'

export default function AutoWorkshop() {
  return (
    <div className="pg-auto-workshop bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed relative overflow-x-hidden min-h-screen">
      <title>{"Auto Workshop Manager — Horizon Enterprise Solutions"}</title>
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-primary-fixed/25 rounded-full blur-[140px] transform-gpu" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-tertiary-fixed/30 rounded-full blur-[160px] transform-gpu" />
        <div className="absolute bottom-1/4 left-10 w-[550px] h-[550px] bg-secondary-fixed/20 rounded-full blur-[150px] transform-gpu" />
      </div>
      {' '}
      {' '}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-8 pt-6 pb-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8 text-body-sm font-body-sm text-on-surface-variant">
          <Link to="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          {' '}
          <span className="text-outline-variant">
            /
          </span>
          {' '}
          <a className="hover:text-primary transition-colors" href="#">
            Industry Systems
          </a>
          {' '}
          <span className="text-outline-variant">
            /
          </span>
          {' '}
          <span className="text-on-surface font-medium">
            Auto Workshop Manager
          </span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary-fixed/40 border border-primary/20 text-on-primary-fixed-variant text-label-sm font-label-sm w-fit mb-5 tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {' '}
              {"AUTOMOTIVE & WORKSHOP OPERATIONS"}
            </div>
            <h1 className="text-display-lg-mobile lg:text-display-lg font-display-lg text-on-surface tracking-tight mb-4 leading-none">
              Auto Workshop Manager
            </h1>
            <p className="text-headline-sm lg:text-headline-md font-headline-md text-on-surface-variant max-w-2xl mb-8 leading-snug">
              Turn every walk-in, phone booking, and diagnostic query into an itemized, trackable job card from intake to final settlement.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] glass-card-subtle text-on-surface text-label-md font-label-md shadow-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  verified
                </span>
                {' '}
                <span>
                  {"Digital Inspection & Evidence Vault"}
                </span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] glass-card-subtle text-on-surface text-label-md font-label-md shadow-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  account_balance_wallet
                </span>
                {' '}
                <span>
                  {"Live Labor & Parts Cost Ledger"}
                </span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] glass-card-subtle text-on-surface text-label-md font-label-md shadow-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  sync_alt
                </span>
                {' '}
                <span>
                  Real-Time Parts Vendor Catalog Sync
                </span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] glass-card-subtle text-on-surface text-label-md font-label-md shadow-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  sms
                </span>
                {' '}
                <span>
                  Two-Way SMS Client Approvals
                </span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] glass-card-subtle text-on-surface text-label-md font-label-md shadow-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  speed
                </span>
                {' '}
                <span>
                  {"Bay & Technician Efficiency Metrics"}
                </span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] glass-card-subtle text-on-surface text-label-md font-label-md shadow-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  notifications_active
                </span>
                {' '}
                <span>
                  {"Mileage-Based Service & Inspection Triggers"}
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5" id="book-demo">
            <div className="glass-card rounded-2xl p-7 lg:p-8 shadow-xl border border-white/80 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-[6px] text-label-sm font-label-sm uppercase tracking-wide font-semibold">
                Zero Disruption Setup
              </div>
              <h2 className="text-headline-md font-headline-md text-on-surface mb-2">
                Book a live workshop walk-through
              </h2>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
                See how your technicians, parts managers, and service advisors coordinate in a unified dashboard.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface mb-1.5 font-medium">
                    Full Name
                  </label>
                  {' '}
                  <input className="w-full h-12 px-4 rounded-[10px] bg-white/70 border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md text-on-surface transition-all outline-none" placeholder="e.g. Marcus Vance" required type="text" />
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface mb-1.5 font-medium">
                    Work Email
                  </label>
                  {' '}
                  <input className="w-full h-12 px-4 rounded-[10px] bg-white/70 border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md text-on-surface transition-all outline-none" placeholder="marcus@servicecenter.com" required type="email" />
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface mb-1.5 font-medium">
                    Phone Number
                  </label>
                  {' '}
                  <input className="w-full h-12 px-4 rounded-[10px] bg-white/70 border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md text-on-surface transition-all outline-none" placeholder="+1 (555) 019-2834" required type="tel" />
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface mb-1.5 font-medium">
                    Workshop Fleet / Bay Volume
                  </label>
                  {' '}
                  <select className="w-full h-12 px-4 rounded-[10px] bg-white/70 border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md text-on-surface transition-all outline-none">
                    <option value="1-4">
                      1 – 4 Active Bays (Independent Garage)
                    </option>
                    <option value="5-12">
                      5 – 12 Bays (Multi-Tech Service Facility)
                    </option>
                    <option value="13+">
                      13+ Bays (Multi-Location Dealership Network)
                    </option>
                    <option value="fleet">
                      Fleet Maintenance Center
                    </option>
                  </select>
                </div>
                {' '}
                <button className="w-full h-12 brand-gradient brand-gradient-hover text-on-primary font-label-lg text-label-lg rounded-[10px] shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-2 mt-2" type="submit">
                  <span>
                    Request Tailored Demo
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[20px]">
                    calendar_month
                  </span>
                </button>
                {' '}
                <p className="text-center text-[12px] text-on-surface-variant flex items-center justify-center gap-1.5 pt-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">
                    verified_user
                  </span>
                  {' '}
                  <span>
                    Guaranteed response within 24 hours. No sales lock-in.
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
        <section className="mt-28">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-tertiary-fixed/40 border border-tertiary/20 text-on-tertiary-fixed-variant text-label-sm font-label-sm uppercase tracking-wide font-semibold mb-3">
              LIVE WORKSHOP DISPATCH ENGINE
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              See Auto Workshop Manager in action: Intake to closed job card
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-2">
              Experience real-time orchestration across diagnostic bays, digital line-item pricing, and automated inventory sync.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-12 glass-card rounded-2xl p-6 lg:p-7 border border-white/80 shadow-xl flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  {' '}
                  <span className="text-headline-sm font-headline-sm text-on-surface">
                    Live Bay Dispatch Matrix
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-[6px] bg-secondary-container text-on-secondary-container text-label-sm font-label-sm font-semibold">
                    3 Active Bays
                  </span>
                  {' '}
                  <span className="px-2.5 py-1 rounded-[6px] bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm">
                    Shift #1
                  </span>
                </div>
              </div>
              <div className="space-y-4 my-4">
                <div className="p-4 rounded-[10px] bg-white/80 border border-outline-variant/30 shadow-sm hover:border-primary/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed-variant rounded-[6px] text-label-sm font-label-sm font-bold">
                        BAY 01
                      </span>
                      {' '}
                      <span className="font-headline-sm text-label-lg font-label-lg text-on-surface">
                        [2023 Audi RS6 Avant]
                      </span>
                    </div>
                    {' '}
                    <span className="px-2.5 py-0.5 rounded-[6px] bg-secondary-container text-on-secondary-container text-label-sm font-label-sm font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        check_circle
                      </span>
                      {' '}
                      Customer SMS Approved via Mobile Vault
                    </span>
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant mb-3">
                    {"Scope: Brake Rotor Replacement & Caliper Overhaul • Job Card #JC-9042"}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-label-sm font-label-sm pt-2 border-t border-outline-variant/20">
                    <div>
                      <span className="text-outline">
                        Lead Tech:
                      </span>
                      {' '}
                      <strong className="text-on-surface">
                        Alex M. (Master Tier)
                      </strong>
                    </div>
                    <div>
                      <span className="text-outline">
                        Parts Requisition:
                      </span>
                      {' '}
                      <strong className="text-secondary font-semibold">
                        Delivered to Bay
                      </strong>
                    </div>
                    <div>
                      <span className="text-outline">
                        Live Timer:
                      </span>
                      {' '}
                      <strong className="text-primary font-mono font-bold">
                        01h 44m / 02h 30m
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-[10px] bg-white/80 border border-outline-variant/30 shadow-sm hover:border-primary/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-[6px] text-label-sm font-label-sm font-bold">
                        BAY 02
                      </span>
                      {' '}
                      <span className="font-headline-sm text-label-lg font-label-lg text-on-surface">
                        [2021 BMW M3 Competition]
                      </span>
                    </div>
                    {' '}
                    <span className="px-2.5 py-0.5 rounded-[6px] bg-primary-fixed text-on-primary-fixed-variant text-label-sm font-label-sm font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        pending
                      </span>
                      {' '}
                      Diagnostic Awaiting Additional Scope
                    </span>
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant mb-3">
                    {"Scope: Engine Diagnostic & Sensor Harness Rewire • Job Card #JC-9045"}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-label-sm font-label-sm pt-2 border-t border-outline-variant/20">
                    <div>
                      <span className="text-outline">
                        Lead Tech:
                      </span>
                      {' '}
                      <strong className="text-on-surface">
                        Devon K. (Diagnostic)
                      </strong>
                    </div>
                    <div>
                      <span className="text-outline">
                        Parts Requisition:
                      </span>
                      {' '}
                      <strong className="text-tertiary font-semibold">
                        OEM Sensor In Stock
                      </strong>
                    </div>
                    <div>
                      <span className="text-outline">
                        Live Timer:
                      </span>
                      {' '}
                      <strong className="text-primary font-mono font-bold">
                        00h 52m / 01h 15m
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-[10px] bg-white/80 border border-outline-variant/30 shadow-sm hover:border-primary/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-surface-container-high text-on-surface-variant rounded-[6px] text-label-sm font-label-sm font-bold">
                        BAY 03
                      </span>
                      {' '}
                      <span className="font-headline-sm text-label-lg font-label-lg text-on-surface">
                        [2022 Porsche Macan GTS]
                      </span>
                    </div>
                    {' '}
                    <span className="px-2.5 py-0.5 rounded-[6px] bg-secondary-container text-on-secondary-container text-label-sm font-label-sm font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        hourglass_top
                      </span>
                      {' '}
                      Final Inspection In Progress
                    </span>
                  </div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant mb-3">
                    Scope: Scheduled Milestone Maintenance (60k) • Job Card #JC-9038
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-label-sm font-label-sm pt-2 border-t border-outline-variant/20">
                    <div>
                      <span className="text-outline">
                        Lead Tech:
                      </span>
                      {' '}
                      <strong className="text-on-surface">
                        Elena S. (Service Spec.)
                      </strong>
                    </div>
                    <div>
                      <span className="text-outline">
                        Parts Requisition:
                      </span>
                      {' '}
                      <strong className="text-on-surface font-semibold">
                        Complete / Fitted
                      </strong>
                    </div>
                    <div>
                      <span className="text-outline">
                        Live Timer:
                      </span>
                      {' '}
                      <strong className="text-secondary font-mono font-bold">
                        02h 10m / 02h 15m
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-[10px] bg-surface-container-low text-body-sm font-body-sm text-on-surface-variant">
                <span>
                  Automated vendor link:
                  {' '}
                  <strong>
                    14 parts suppliers connected via live EDI/API
                  </strong>
                </span>
                {' '}
                <span className="font-mono text-label-sm font-label-sm font-semibold text-primary">
                  Latency: 42 ms
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary-fixed/40 border border-primary/20 text-on-primary-fixed-variant text-label-sm font-label-sm uppercase tracking-wide font-semibold mb-4">
                OPERATIONAL BOTTLENECK
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-5 leading-tight">
                Run the bays with total operational clarity, not just paper tickets and memory.
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed mb-6">
                Independent garages and multi-bay service centers hemorrhage margin every single day on untracked shop supplies, forgotten diagnostic hours, and delayed phone-tag approvals. When job cards live on clipboards resting on dashboards, grease marks replace accountability, customers contest unrecognized repair charges, and mechanics sit idle waiting for manual parts verification.
              </p>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Horizon Auto Workshop Manager creates a synchronized digital loop that captures every minute spent, itemizes every consumable used, and transmits verifiable photo evidence directly to the car owner’s smartphone before work starts.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-md flex items-start gap-4">
                <div className="w-10 h-10 rounded-[10px] bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    assignment_turned_in
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                    Digital job cards from customer intake to invoice reconciliation
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Every vehicle arrival triggers a single deterministic master record. Technicians log labor units with bay stopwatches while advisors link OEM parts directly from the warehouse catalog without double entry.
                  </p>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-md flex items-start gap-4">
                <div className="w-10 h-10 rounded-[10px] bg-secondary-container/40 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    inventory
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                    Real-time parts inventory tracking with automated stockout triggers
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Avoid stalled lifts. When a filter or brake fluid unit is assigned to a bay, it instantly deducts from inventory. If stock hits safety minimums, emergency reorders trigger across preferred vendor feeds.
                  </p>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-md flex items-start gap-4">
                <div className="w-10 h-10 rounded-[10px] bg-tertiary-container/30 text-tertiary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    calendar_view_week
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                    Dynamic bay and technician scheduling mapped by specialist skill tiers
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Align complex transmission work with master electrical diagnostic techs and routine lube services with junior apprentices. Balance work orders to maximize billable hour realization per stall.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-28">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary-fixed/40 border border-primary/20 text-on-primary-fixed-variant text-label-sm font-label-sm uppercase tracking-wide font-semibold mb-3">
              ENGINEERED CAPABILITIES
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              Six integrated operational capabilities built around the job card.
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant mt-2">
              Deterministic digital workflows engineered to eliminate unbilled labor and unapproved parts.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-3">
              <div className="glass-card rounded-[14px] p-5 border-l-4 border-l-primary border border-white/80 shadow-md cursor-pointer transition-all">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-primary font-bold text-headline-sm">
                      01.
                    </span>
                    {' '}
                    <h3 className="text-headline-sm font-headline-sm text-on-surface">
                      {"Digital Vehicle Inspection with Photo & Video Evidence"}
                    </h3>
                  </div>
                  {' '}
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-label-sm font-label-sm rounded-[6px] font-semibold">
                    Active Inspector
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant pl-9">
                  Technicians capture hi-res defect shots directly inside the inspection card. Customers see exact caliper wear, torn CV boots, or fluid leaks on their phones.
                </p>
              </div>
              <div className="glass-card-subtle rounded-[14px] p-5 border border-outline-variant/30 hover:bg-white/80 transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-on-surface-variant font-bold text-headline-sm">
                    02.
                  </span>
                  {' '}
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">
                    {"Real-Time Parts Vendor Sync & Requisition"}
                  </h3>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant pl-9">
                  Integrated parts catalogs show live vendor availability, wholesale pricing, and expected delivery windows before customer quotes are finalized.
                </p>
              </div>
              <div className="glass-card-subtle rounded-[14px] p-5 border border-outline-variant/30 hover:bg-white/80 transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-on-surface-variant font-bold text-headline-sm">
                    03.
                  </span>
                  {' '}
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">
                    {"Live Labor Tracking & Dynamic Bay Scheduling"}
                  </h3>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant pl-9">
                  Digital bay timers record actual vs. book hours with single-tap punches, providing clean operational data to eliminate labor slippage.
                </p>
              </div>
              <div className="glass-card-subtle rounded-[14px] p-5 border border-outline-variant/30 hover:bg-white/80 transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-on-surface-variant font-bold text-headline-sm">
                    04.
                  </span>
                  {' '}
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">
                    Itemized Two-Way SMS Remote Approvals
                  </h3>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant pl-9">
                  Push estimates to customers via encrypted SMS links. Clients approve individual repairs with one touch, creating an unshakeable audit trail.
                </p>
              </div>
              <div className="glass-card-subtle rounded-[14px] p-5 border border-outline-variant/30 hover:bg-white/80 transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-on-surface-variant font-bold text-headline-sm">
                    05.
                  </span>
                  {' '}
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">
                    {"Technician Productivity & Billing Efficiency"}
                  </h3>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant pl-9">
                  Clear reporting on efficiency ratios, rework percentages, and diagnostic accuracy per mechanic to reward high performers and coach junior staff.
                </p>
              </div>
              <div className="glass-card-subtle rounded-[14px] p-5 border border-outline-variant/30 hover:bg-white/80 transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-on-surface-variant font-bold text-headline-sm">
                    06.
                  </span>
                  {' '}
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">
                    {"Mileage Triggers & Preventative Recall Tracking"}
                  </h3>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant pl-9">
                  Automated reminders based on odometer prediction and seasonal service intervals, driving recurring workshop revenue without manual telemarketing.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 glass-card rounded-2xl p-6 lg:p-7 border border-white/80 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30 mb-5">
                <div>
                  <span className="text-label-sm font-label-sm text-primary font-bold uppercase tracking-wider">
                    Deep Dive Module
                  </span>
                  {' '}
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">
                    Digital Vehicle Inspection (DVI)
                  </h3>
                </div>
                {' '}
                <span className="px-2.5 py-1 bg-secondary-container text-on-secondary-container rounded-[6px] text-label-sm font-label-sm font-semibold">
                  Live Vault
                </span>
              </div>
              <div className="space-y-4">
                <div className="p-3.5 rounded-[10px] bg-white/70 border border-outline-variant/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-label-lg font-label-lg text-on-surface">
                      Front Brake Pad Wear
                    </span>
                    {' '}
                    <span className="px-2 py-0.5 bg-error-container text-on-error-container rounded-[6px] text-label-sm font-label-sm font-bold">
                      18% Remaining
                    </span>
                  </div>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mb-2">
                    Measured pad thickness: 2.1mm. High safety hazard. Replacement recommended immediately.
                  </p>
                  <div className="w-full bg-surface-container-high h-2 rounded-[6px] overflow-hidden">
                    <div className="bg-error h-full rounded-[6px]" style={{"width":"18%"}} />
                  </div>
                </div>
                <div className="p-3.5 rounded-[10px] bg-white/70 border border-outline-variant/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-label-lg font-label-lg text-on-surface">
                      Tire Tread Depth (All 4 Axles)
                    </span>
                    {' '}
                    <span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed-variant rounded-[6px] text-label-sm font-label-sm font-bold">
                      3.2mm Average
                    </span>
                  </div>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mb-2">
                    Approaching legal replacement threshold. Customer alerted for seasonal replacement quote.
                  </p>
                  <div className="w-full bg-surface-container-high h-2 rounded-[6px] overflow-hidden">
                    <div className="bg-primary h-full rounded-[6px]" style={{"width":"42%"}} />
                  </div>
                </div>
                <div className="p-3.5 rounded-[10px] bg-white/70 border border-outline-variant/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-label-lg font-label-lg text-on-surface">
                      Brake Fluid Moisture Boiling Point
                    </span>
                    {' '}
                    <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded-[6px] text-label-sm font-label-sm font-bold">
                      Optimal (1.1%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-[6px] overflow-hidden mt-2">
                    <div className="bg-secondary h-full rounded-[6px]" style={{"width":"88%"}} />
                  </div>
                </div>
                <div className="p-3.5 rounded-[10px] bg-surface-container-low border border-outline-variant/20 space-y-2">
                  <div className="flex items-center justify-between text-label-sm font-label-sm">
                    <span className="flex items-center gap-1.5 text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        photo_camera
                      </span>
                      {' '}
                      Photo attachment confirmed
                    </span>
                    {' '}
                    <strong className="text-on-surface">
                      4 Raw JPEGs Attached
                    </strong>
                  </div>
                  <div className="flex items-center justify-between text-label-sm font-label-sm">
                    <span className="flex items-center gap-1.5 text-on-surface">
                      <span className="material-symbols-outlined text-tertiary text-[18px]">
                        send_to_mobile
                      </span>
                      {' '}
                      Customer view link dispatched
                    </span>
                    {' '}
                    <strong className="text-tertiary font-mono">
                      14:02:18 GMT
                    </strong>
                  </div>
                  <div className="flex items-center justify-between text-label-sm font-label-sm">
                    <span className="flex items-center gap-1.5 text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        verified
                      </span>
                      {' '}
                      Zero unverified defects
                    </span>
                    {' '}
                    <span className="text-secondary font-bold">
                      ISO-compliant audit
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-secondary-container/60 border border-secondary/20 text-on-secondary-container text-label-sm font-label-sm uppercase tracking-wide font-semibold mb-3">
              EXECUTION WORKFLOW
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              From Initial Intake to Cleared Bay: Four Connected Stages.
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-2">
              Eliminate lost paperwork and delayed phone approvals with a unified digital lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-md flex flex-col justify-between relative group hover:border-primary/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-[10px] bg-primary-fixed text-primary font-bold font-mono text-headline-sm flex items-center justify-center mb-5">
                  01
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                  {"Intake & Open Digital Job Card"}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Customer arrives or books. Vehicle VIN, odometer, and reported symptoms are logged directly via tablet or mobile check-in kiosk.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-primary font-semibold flex items-center gap-1">
                <span>
                  VIN Decoder Verified
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]">
                  check
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-md flex flex-col justify-between relative group hover:border-primary/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-[10px] bg-tertiary-fixed text-tertiary font-bold font-mono text-headline-sm flex items-center justify-center mb-5">
                  02
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                  {"Bay Allocation & Live Labor Logging"}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Assigned technician performs the multi-point inspection, records time per operation, and requests parts straight from warehouse stock.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-tertiary font-semibold flex items-center gap-1">
                <span>
                  Real-Time Time Clock
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]">
                  timer
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-md flex flex-col justify-between relative group hover:border-primary/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-[10px] bg-secondary-fixed text-secondary font-bold font-mono text-headline-sm flex items-center justify-center mb-5">
                  03
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                  {"Mobile Estimate Dispatch & Client Sign-Off"}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Itemized findings and photos are pushed to the vehicle owner via SMS. Customers authorize single repairs or the full estimate in 1 click.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-secondary font-semibold flex items-center gap-1">
                <span>
                  Cryptographic SMS Vault
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]">
                  lock
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-md flex flex-col justify-between relative group hover:border-primary/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-[10px] bg-primary-container/20 text-on-primary-container font-bold font-mono text-headline-sm flex items-center justify-center mb-5">
                  04
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                  {"Automated Ledger Posting & Service History"}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Settlement reconciles immediately to accounting software, inventory reorder triggers fire, and the vehicle's permanent digital book updates.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-primary font-semibold flex items-center gap-1">
                <span>
                  Zero Re-entry Invoicing
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]">
                  receipt_long
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-28">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-tertiary-fixed/40 border border-tertiary/20 text-on-tertiary-fixed-variant text-label-sm font-label-sm uppercase tracking-wide font-semibold mb-3">
              OPERATIONAL ADVANTAGE
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              Why modern service centers replace paper tickets with Horizon.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card rounded-2xl p-7 border border-white/80 shadow-md">
              <div className="w-11 h-11 rounded-[10px] brand-gradient flex items-center justify-center text-on-primary mb-5 shadow-sm">
                <span className="material-symbols-outlined text-[24px]">
                  verified_user
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-2">
                Fewer Billing Disputes
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Every bolt, shop supply charge, and diagnostic labor hour is backed by timestamped inspection photos and cryptographic customer authorizations. Friction at checkout disappears.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-7 border border-white/80 shadow-md">
              <div className="w-11 h-11 rounded-[10px] bg-secondary flex items-center justify-center text-on-secondary mb-5 shadow-sm">
                <span className="material-symbols-outlined text-[24px]">
                  published_with_changes
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-2">
                Minimized Bay Downtime
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                No idle technicians waiting around for parts or telephone call-backs. Automated vendor replenishment feeds ensure required gaskets and brake pads arrive before the car is hoisted.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-7 border border-white/80 shadow-md">
              <div className="w-11 h-11 rounded-[10px] bg-tertiary flex items-center justify-center text-on-tertiary mb-5 shadow-sm">
                <span className="material-symbols-outlined text-[24px]">
                  analytics
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-2">
                Frontline Accountability
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Establish transparent technician efficiency benchmarks and diagnostic accuracy scores. Give service advisors complete visibility into job card status without walking out to the workshop floor.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-7 border border-white/80 shadow-md">
              <div className="w-11 h-11 rounded-[10px] bg-inverse-surface flex items-center justify-center text-inverse-on-surface mb-5 shadow-sm">
                <span className="material-symbols-outlined text-[24px]">
                  loyalty
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-2">
                {"Accelerated Turnaround & Retention"}
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Delivering clean digital inspection videos builds long-term vehicle owner loyalty. Returning customers receive instant milestone alerts based on predicted mileage wear.
              </p>
            </div>
          </div>
          <div className="glass-card-subtle rounded-2xl p-6 lg:p-8 border border-outline-variant/30 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[24px] mt-0.5">
                shield
              </span>
              {' '}
              <div>
                <h4 className="text-label-lg font-label-lg text-on-surface font-semibold mb-1">
                  Enterprise-Grade Security
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Encrypted hosting, role-based access control, regular backups. Data stays yours and fully exportable.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">
                price_check
              </span>
              {' '}
              <div>
                <h4 className="text-label-lg font-label-lg text-on-surface font-semibold mb-1">
                  Transparent, Scoped Pricing
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Every deployment scoped with fixed price and timeline agreed upfront. Zero unexpected user licensing traps.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-tertiary text-[24px] mt-0.5">
                groups
              </span>
              {' '}
              <div>
                <h4 className="text-label-lg font-label-lg text-on-surface font-semibold mb-1">
                  Built for Your Whole Team
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Dedicated role-based views for service advisors, master technicians, parts managers, and shop owners.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-28">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary-fixed/40 border border-primary/20 text-on-primary-fixed-variant text-label-sm font-label-sm uppercase tracking-wide font-semibold mb-3">
              OPERATIONAL CONTRAST
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              What Changes on Day One
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-2">
              Comparing chaotic paper workshop workflows against Horizon Auto Workshop Manager.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card-subtle rounded-2xl p-7 lg:p-8 border border-error/20 relative">
              <div className="flex items-center gap-2 text-error mb-4">
                <span className="material-symbols-outlined text-[24px]">
                  cancel
                </span>
                {' '}
                <span className="text-label-lg font-label-lg font-bold uppercase tracking-wider">
                  Before: The Paper Ticket Dilemma
                </span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Paper job cards get greasy and lost under windshields, obscuring critical customer notes and work authorization limits.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Parts run out mid-repair without alert, leaving vehicles dismantled on active lifts while technicians wait on supply runs.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Double-booked bays leave mechanics waiting while service advisors chase phone-tag voicemails for quote sign-offs.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Re-typing handwritten estimates into separate invoicing accounting software introduces missed parts and billing friction.
                  </span>
                </li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-7 lg:p-8 border border-secondary/40 shadow-lg relative bg-white/80">
              <div className="flex items-center gap-2 text-secondary mb-4">
                <span className="material-symbols-outlined text-[24px] fill-1">
                  check_circle
                </span>
                {' '}
                <span className="text-label-lg font-label-lg font-bold uppercase tracking-wider">
                  After: The Horizon Synchronized Shop
                </span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Digital job card follows the car seamlessly through every bay on rugged tablets with live photo annotations.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Parts auto-decrement from stock with early warning thresholds and instant vendor EDI re-order integration.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Bay and specialist scheduling united in one live dispatch matrix with dynamic customer SMS approval updates.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Approved estimates convert to final invoices with zero manual re-entry, syncing ledger accounts automatically.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mt-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary-fixed/40 border border-primary/20 text-on-primary-fixed-variant text-label-sm font-label-sm uppercase tracking-wide font-semibold mb-3">
              {"SYSTEM ARCHITECTURE & WORKSHOP OPERATIONS"}
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="glass-card rounded-2xl p-6 border border-primary/30 shadow-sm">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                  1. Can customers see the real-time status of their car while it is in the shop?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-primary text-[24px]">
                  expand_less
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-outline-variant/30 text-body-md font-body-md text-on-surface-variant leading-relaxed">
                <p className="mb-3">
                  Yes. Auto Workshop Manager issues a secure, cryptographic web link via SMS showing live vehicle progress, inspected items with photos, technician notes, and an interactive quote approval slider.
                </p>
                <p>
                  Customers do not need to download an application or create a password. The link expires automatically upon final billing settlement, ensuring customer privacy and protecting your workshop's internal operational notes.
                </p>
              </div>
            </div>
            <div className="glass-card-subtle rounded-2xl p-6 border border-outline-variant/30">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  2. What happens if a job requires a part we do not currently have in inventory?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-outline text-[24px]">
                  expand_more
                </span>
              </div>
            </div>
            <div className="glass-card-subtle rounded-2xl p-6 border border-outline-variant/30">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  3. Can we track manufacturer warranty claims separately from regular customer billing?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-outline text-[24px]">
                  expand_more
                </span>
              </div>
            </div>
            <div className="glass-card-subtle rounded-2xl p-6 border border-outline-variant/30">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  4. Does the platform support physical printed work orders if a customer or technician requests paper?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-outline text-[24px]">
                  expand_more
                </span>
              </div>
            </div>
            <div className="glass-card-subtle rounded-2xl p-6 border border-outline-variant/30">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  5. Can Auto Workshop Manager coordinate corporate fleet accounts with multi-vehicle billing?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-outline text-[24px]">
                  expand_more
                </span>
              </div>
            </div>
            <div className="glass-card-subtle rounded-2xl p-6 border border-outline-variant/30">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  6. Does the system issue automated reminders for upcoming scheduled maintenance, MOT, and manufacturer recalls?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-outline text-[24px]">
                  expand_more
                </span>
              </div>
            </div>
            <div className="glass-card-subtle rounded-2xl p-6 border border-outline-variant/30">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  7. How long does the workshop onboarding and catalog migration process typically take?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-outline text-[24px]">
                  expand_more
                </span>
              </div>
            </div>
            <div className="glass-card-subtle rounded-2xl p-6 border border-outline-variant/30">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  8. Is our customer and repair data secure, and who owns the records?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-outline text-[24px]">
                  expand_more
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
                Looking for something else?
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant mt-2">
                Browse productized software modules and autonomous enterprise packages.
              </p>
            </div>
            {' '}
            <Link to="/products" className="text-primary hover:text-on-primary-fixed-variant text-label-lg font-label-lg font-semibold inline-flex items-center gap-1.5 transition-colors">
              <span>
                Browse all product packages
              </span>
              {' '}
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-primary-fixed/50 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[22px]">
                    inventory_2
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 group-hover:text-primary transition-colors">
                  Smart Inventory Control
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Know exactly what is on your shelves, in your service trucks, and on backorder down to the unit.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center gap-1 text-label-sm font-label-sm text-primary font-semibold">
                <span>
                  Explore Package
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-secondary-fixed/50 text-secondary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[22px]">
                    directions_car
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 group-hover:text-secondary transition-colors">
                  Field Service Management
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Get the right technician to the right job with the right parts, without a whiteboard or phone tag.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center gap-1 text-label-sm font-label-sm text-secondary font-semibold">
                <span>
                  Explore Package
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed/50 text-tertiary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[22px]">
                    smart_toy
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 group-hover:text-tertiary transition-colors">
                  AI QC Agent
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Centralised installation knowledge and schematic verification on your technician's phone.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center gap-1 text-label-sm font-label-sm text-tertiary font-semibold">
                <span>
                  Explore Package
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-surface-container-high text-on-surface flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[22px]">
                    warehouse
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2 group-hover:text-primary transition-colors">
                  Warehouse Operations Platform
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Turn parts storage into a barcode-verified system your pickers and managers can trust.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center gap-1 text-label-sm font-label-sm text-on-surface font-semibold">
                <span>
                  Explore Package
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-28">
          <div className="brand-gradient rounded-[20px] p-8 lg:p-14 text-on-primary shadow-2xl relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full border-[32px] border-white/10 pointer-events-none" />
            <div className="max-w-3xl relative z-10">
              <h2 className="text-display-lg-mobile lg:text-headline-lg font-headline-lg font-bold tracking-tight mb-4 text-white">
                Ready to run your workshop with deterministic certainty?
              </h2>
              <p className="text-headline-sm font-body-lg text-white/90 mb-8 max-w-2xl font-normal leading-relaxed">
                Schedule a fixed-scope technical consultation with our automotive systems team within 48 hours.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Link to="/contact" className="bg-white text-on-primary-container hover:bg-surface transition-colors font-label-lg text-label-lg px-6 py-3.5 rounded-[10px] font-bold shadow-md">
                  Book an Architectural Scoping Consultation
                </Link>
              </div>
              <p className="text-label-sm font-label-sm text-white/80 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  lock
                </span>
                {' '}
                Encrypted hosting, role-based access, and regular backups. Your data always remains fully yours and exportable.
              </p>
            </div>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
