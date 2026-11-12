// Generated from stitch/pd_accounting-software.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './BusinessAccounting.css'

export default function BusinessAccounting() {
  return (
    <div className="pg-business-accounting bg-background text-on-surface font-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <title>{"Business Accounting Software | Horizon Enterprise Solutions"}</title>
      {' '}
      {' '}
      <main className="max-w-[1600px] mx-auto px-4 md:px-8 pt-6 pb-20 space-y-24">
        <section className="relative pt-4">
          <nav className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant mb-6">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            {' '}
            <span className="material-symbols-outlined text-[16px] text-outline">
              chevron_right
            </span>
            {' '}
            <a className="hover:text-primary transition-colors" href="#">
              {"Finance & Books"}
            </a>
            {' '}
            <span className="material-symbols-outlined text-[16px] text-outline">
              chevron_right
            </span>
            {' '}
            <span className="text-on-surface font-semibold">
              Business Accounting Software
            </span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center px-2.5 py-1 bg-primary-container/20 border border-primary-container/40 text-on-primary-container font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
                {"FINANCE & BOOKS"}
              </span>
              {' '}
              <h1 className="text-display-lg font-display-lg text-on-surface tracking-tight">
                Business Accounting Software
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                Invoicing, expenses, and automated bank reconciliation unified into a single ledger — closing your books without a week of manual catch-up.
              </p>
              <div className="pt-4">
                <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider mb-3">
                  Key System Capabilities
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <span className="rounded-[10px] px-4 py-2 border border-outline-variant/40 bg-surface-container-lowest/80 text-on-surface text-body-sm font-body-sm font-medium shadow-sm hover:border-primary/40 transition-colors">
                    {"Bank Feed Auto-Matching & Reconciliation"}
                  </span>
                  {' '}
                  <span className="rounded-[10px] px-4 py-2 border border-outline-variant/40 bg-surface-container-lowest/80 text-on-surface text-body-sm font-body-sm font-medium shadow-sm hover:border-primary/40 transition-colors">
                    {"Recurring Invoicing & Automated Reminders"}
                  </span>
                  {' '}
                  <span className="rounded-[10px] px-4 py-2 border border-outline-variant/40 bg-surface-container-lowest/80 text-on-surface text-body-sm font-body-sm font-medium shadow-sm hover:border-primary/40 transition-colors">
                    {"Multi-Currency Accounting & Gain/Loss Tracking"}
                  </span>
                  {' '}
                  <span className="rounded-[10px] px-4 py-2 border border-outline-variant/40 bg-surface-container-lowest/80 text-on-surface text-body-sm font-body-sm font-medium shadow-sm hover:border-primary/40 transition-colors">
                    {"Project Time & Expense Billing"}
                  </span>
                  {' '}
                  <span className="rounded-[10px] px-4 py-2 border border-outline-variant/40 bg-surface-container-lowest/80 text-on-surface text-body-sm font-body-sm font-medium shadow-sm hover:border-primary/40 transition-colors">
                    Three-Way Matching for Purchases
                  </span>
                  {' '}
                  <span className="rounded-[10px] px-4 py-2 border border-outline-variant/40 bg-surface-container-lowest/80 text-on-surface text-body-sm font-body-sm font-medium shadow-sm hover:border-primary/40 transition-colors">
                    Real-Time Financial Statements
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="specular-border rounded-[20px] p-8 shadow-xl relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-56 h-56 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative space-y-4">
                  <div>
                    <h3 className="text-headline-sm font-headline-sm text-on-surface">
                      Book a live system walk-through
                    </h3>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                      See how Horizon reconciles bank transactions and accelerates your month-end close in [00] minutes.
                    </p>
                  </div>
                  <form className="space-y-4 pt-2" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                        Full Name
                      </label>
                      {' '}
                      <input className="w-full h-12 px-3.5 bg-surface-container-lowest/90 border border-outline-variant/50 rounded-[10px] text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-colors" placeholder="e.g. Eleanor Vance" type="text" />
                    </div>
                    <div>
                      <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                        Work Email
                      </label>
                      {' '}
                      <input className="w-full h-12 px-3.5 bg-surface-container-lowest/90 border border-outline-variant/50 rounded-[10px] text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-colors" placeholder="finance@company.com" type="email" />
                    </div>
                    <div>
                      <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                        Phone Number
                      </label>
                      {' '}
                      <input className="w-full h-12 px-3.5 bg-surface-container-lowest/90 border border-outline-variant/50 rounded-[10px] text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-colors" placeholder="[phone]" type="tel" />
                    </div>
                    <div>
                      <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                        Entity / Transaction Volume
                      </label>
                      {' '}
                      <select className="w-full h-12 px-3.5 bg-surface-container-lowest/90 border border-outline-variant/50 rounded-[10px] text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-colors">
                        <option>
                          Single Entity • [000] - [0,000] monthly txns
                        </option>
                        <option>
                          Multi-Entity • [0,000] - [00,000] monthly txns
                        </option>
                        <option>
                          Global Enterprise • [00,000+] monthly txns
                        </option>
                      </select>
                    </div>
                    {' '}
                    <button className="w-full h-12 primary-btn-gradient text-on-primary font-label-lg text-label-lg rounded-[10px] font-medium transition-transform active:scale-[0.99] mt-2" type="button">
                      Request Tailored Walk-Through
                    </button>
                  </form>
                  <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-center gap-2 text-label-sm font-label-sm text-on-surface-variant/80 text-center">
                    <span>
                      Guaranteed turnaround within 48 hours
                    </span>
                    {' '}
                    <span>
                      •
                    </span>
                    {' '}
                    <span>
                      No spam
                    </span>
                    {' '}
                    <span>
                      •
                    </span>
                    {' '}
                    <span>
                      Fixed-scope quotation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-flex items-center px-2.5 py-1 bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
                INTERACTIVE SYSTEM PREVIEW
              </span>
              {' '}
              <h2 className="text-headline-lg font-headline-lg text-on-surface mt-2">
                Precision Ledger Telemetry
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-label-md font-label-md text-secondary">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              {' '}
              <span>
                Verified Engine Status: Nominal
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 bg-inverse-surface rounded-[18px] p-6 text-inverse-on-surface flex flex-col justify-between relative overflow-hidden border border-outline/30 min-h-[420px]">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between z-10">
                <span className="px-2.5 py-1 bg-white/10 rounded-[6px] text-label-sm font-label-sm text-white/90">
                  HD Screencast
                </span>
                {' '}
                <span className="text-label-sm font-label-sm text-white/70">
                  Duration: [00]:[00] mins
                </span>
              </div>
              <div className="my-auto text-center z-10 py-10">
                <button className="w-16 h-16 rounded-[14px] bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mx-auto hover:scale-105 transition-transform text-white group shadow-lg">
                  <span className="material-symbols-outlined text-[32px] text-primary-fixed group-hover:text-white transition-colors" style={{"fontVariationSettings":"'FILL' 1"}}>
                    play_arrow
                  </span>
                </button>
                {' '}
                <h4 className="text-headline-sm font-headline-sm text-white mt-4 max-w-xs mx-auto">
                  Reconciliation in Action: Live Multi-Entity Bank Ingestion
                </h4>
                <p className="text-body-sm font-body-sm text-white/70 mt-2 max-w-sm mx-auto">
                  Observe automated matching logic resolving cross-border FX invoices and clearing batch dockets.
                </p>
              </div>
              <div className="flex items-center justify-between text-white/60 text-label-sm font-label-sm pt-4 border-t border-white/10 z-10">
                <span>
                  Audio: Professional Narration
                </span>
                {' '}
                <span>
                  Subtitles: Available
                </span>
              </div>
            </div>
            <div className="lg:col-span-7 specular-border rounded-[18px] p-6 flex flex-col justify-between shadow-lg">
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-outline-variant/30 gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    Horizon Books v4.2
                  </span>
                  {' '}
                  <span className="text-on-surface-variant text-body-sm font-body-sm">
                    {"• General Ledger • US & Global Entities"}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary-container/40 rounded-[6px] text-on-secondary-container font-label-sm text-label-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  {' '}
                  <span>
                    Connected: [00] Bank Feeds Syncing
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
                <div className="p-3 bg-surface-container rounded-[10px] border border-outline-variant/20">
                  <p className="text-label-sm font-label-sm text-on-surface-variant">
                    Quick Ratio
                  </p>
                  <p className="text-headline-sm font-headline-sm text-on-surface font-bold mt-0.5">
                    [0.00]
                  </p>
                </div>
                <div className="p-3 bg-surface-container rounded-[10px] border border-outline-variant/20">
                  <p className="text-label-sm font-label-sm text-on-surface-variant">
                    Days Sales O/S
                  </p>
                  <p className="text-headline-sm font-headline-sm text-on-surface font-bold mt-0.5">
                    [00] Days
                  </p>
                </div>
                <div className="p-3 bg-secondary-container/30 rounded-[10px] border border-secondary-container/60">
                  <p className="text-label-sm font-label-sm text-on-secondary-container">
                    Unreconciled Items
                  </p>
                  <p className="text-headline-sm font-headline-sm text-secondary font-bold mt-0.5">
                    0 ($0.00)
                  </p>
                </div>
                <div className="p-3 bg-surface-container rounded-[10px] border border-outline-variant/20">
                  <p className="text-label-sm font-label-sm text-on-surface-variant">
                    Cash Runway
                  </p>
                  <p className="text-headline-sm font-headline-sm text-on-surface font-bold mt-0.5">
                    [00] Months
                  </p>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-label-sm font-label-sm text-outline px-1">
                  <span>
                    REAL-TIME TRANSACTION STREAM
                  </span>
                  {' '}
                  <span>
                    MATCH CONFIDENCE
                  </span>
                </div>
                <div className="p-3.5 bg-surface-container-lowest rounded-[10px] border border-outline-variant/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-[8px] bg-secondary-container/50 text-on-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">
                        south_west
                      </span>
                    </div>
                    <div>
                      <p className="text-body-sm font-body-sm font-semibold text-on-surface">
                        Wire Inflow from [Client name]
                      </p>
                      <p className="text-label-sm font-label-sm text-on-surface-variant">
                        Matched to Invoice #INV-2025-089
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-right">
                    <div>
                      <p className="text-body-sm font-body-sm font-bold text-secondary">
                        +$42,500.00
                      </p>
                      {' '}
                      <span className="inline-block px-2 py-0.5 bg-secondary-container/50 text-on-secondary-container rounded-[6px] text-label-sm font-label-sm">
                        99.8% Match
                      </span>
                    </div>
                    {' '}
                    <button className="px-2.5 py-1 bg-surface-container-high rounded-[6px] text-label-sm font-label-sm text-on-surface hover:bg-primary hover:text-white transition-colors">
                      Clear
                    </button>
                  </div>
                </div>
                <div className="p-3.5 bg-surface-container-lowest rounded-[10px] border border-outline-variant/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-[8px] bg-tertiary-fixed/40 text-on-tertiary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">
                        north_east
                      </span>
                    </div>
                    <div>
                      <p className="text-body-sm font-body-sm font-semibold text-on-surface">
                        Vendor SaaS Cloud Infrastructure Bill
                      </p>
                      <p className="text-label-sm font-label-sm text-on-surface-variant">
                        Matched to Purchase Order #PO-441
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-right">
                    <div>
                      <p className="text-body-sm font-body-sm font-bold text-on-surface">
                        -$1,280.00
                      </p>
                      {' '}
                      <span className="inline-block px-2 py-0.5 bg-tertiary-fixed/50 text-on-tertiary-fixed-variant rounded-[6px] text-label-sm font-label-sm">
                        Auto-Mapped
                      </span>
                    </div>
                    {' '}
                    <button className="px-2.5 py-1 bg-surface-container-high rounded-[6px] text-label-sm font-label-sm text-on-surface hover:bg-primary hover:text-white transition-colors">
                      Clear
                    </button>
                  </div>
                </div>
                <div className="p-3.5 bg-surface-container-lowest rounded-[10px] border border-outline-variant/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-[8px] bg-secondary-container/50 text-on-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">
                        sync_alt
                      </span>
                    </div>
                    <div>
                      <p className="text-body-sm font-body-sm font-semibold text-on-surface">
                        Stripe Daily Settlement Inflow
                      </p>
                      <p className="text-label-sm font-label-sm text-on-surface-variant">
                        Batch [00] customer charges reconciled
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-right">
                    <div>
                      <p className="text-body-sm font-body-sm font-bold text-secondary">
                        +$18,914.20
                      </p>
                      {' '}
                      <span className="inline-block px-2 py-0.5 bg-secondary-container/50 text-on-secondary-container rounded-[6px] text-label-sm font-label-sm">
                        Auto-Cleared
                      </span>
                    </div>
                    {' '}
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      check_circle
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="specular-border rounded-[24px] p-8 md:p-12 space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center px-2.5 py-1 bg-primary-container/20 border border-primary-container/40 text-on-primary-container font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
              THE OPERATIONAL BOTTLENECK
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Bookkeeping Should Not Feel Like Detective Work
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
              Chasing unpaid client invoices, deciphering crumpled expense receipts across team chat channels, and untangling month-end discrepancies between bank statements and outdated spreadsheets consumes dozens of billable hours. Horizon establishes a synchronized continuous ledger: invoicing auto-triggers, expenses OCR directly into tax buckets, and bank streams reconcile without human latency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-surface-container-lowest rounded-[16px] border border-outline-variant/30 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-primary-container/20 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  task_alt
                </span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Automated recurring invoicing and payment tracking
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Establish automated retainer workflows with intelligent dunning sequences that secure faster settlements without manual friction.
              </p>
            </div>
            <div className="p-6 bg-surface-container-lowest rounded-[16px] border border-outline-variant/30 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-secondary-container/50 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  account_tree
                </span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Bank feeds with automatic transaction matching
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Live Open Banking connectors compare transactional signatures against bills and vouchers, proposing confident pairs around the clock.
              </p>
            </div>
            <div className="p-6 bg-surface-container-lowest rounded-[16px] border border-outline-variant/30 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed/40 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  query_stats
                </span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Standard financial reports ready without manual building
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                {"Generate GAAP-compliant balance sheets, profit & loss, and trial balances with line-item audit trails available instantaneously."}
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center px-2.5 py-1 bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
              CORE CAPABILITIES
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              The Mechanics of Clean Books
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Six integrated capabilities that turn monthly accounting from a stressful scramble into a predictable daily routine.
            </p>
          </div>
          <div className="specular-border rounded-[20px] p-8 border border-primary/30 shadow-md bg-gradient-to-br from-surface-container-lowest/90 to-surface-container-low/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-primary text-white font-label-sm text-label-sm rounded-[6px] font-bold">
                    01 • FLAGSHIP ENGINE
                  </span>
                  {' '}
                  <span className="text-label-md font-label-md text-primary font-semibold">
                    Continuous Ledger Synchronization
                  </span>
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface">
                  Bank Feed Auto-Matching and Reconciliation
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Connected bank feeds suggest matches against invoices and bills daily, turning reconciliation into a quick verification click instead of manual ledger entry. No more comparing paper statements with late night journal adjustments.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3 bg-surface-container-lowest rounded-[10px] border border-outline-variant/30">
                    <span className="text-label-sm font-label-sm text-on-surface-variant block">
                      Schema Throughput
                    </span>
                    {' '}
                    <span className="text-headline-sm font-headline-sm font-bold text-on-surface">
                      [00,000+] Transactions Reconciled
                    </span>
                  </div>
                  <div className="p-3 bg-surface-container-lowest rounded-[10px] border border-outline-variant/30">
                    <span className="text-label-sm font-label-sm text-on-surface-variant block">
                      Deterministic Accuracy
                    </span>
                    {' '}
                    <span className="text-headline-sm font-headline-sm font-bold text-secondary">
                      [0.00%] Mismatch Rate
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-surface-container p-5 rounded-[14px] border border-outline-variant/40 space-y-3">
                <div className="text-label-sm font-label-sm font-bold text-on-surface">
                  Algorithm Match Confidence Breakdown
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-body-sm font-body-sm text-on-surface mb-1">
                      <span>
                        Exact Match (Amount + Invoice ID)
                      </span>
                      {' '}
                      <span className="font-bold">
                        94%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-surface-dim rounded-[4px] overflow-hidden">
                      <div className="h-full bg-secondary" style={{"width":"94%"}} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-body-sm font-body-sm text-on-surface mb-1">
                      <span>
                        Multi-Doc Split Ingestion
                      </span>
                      {' '}
                      <span className="font-bold">
                        5.8%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-surface-dim rounded-[4px] overflow-hidden">
                      <div className="h-full bg-tertiary" style={{"width":"5.8%"}} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-body-sm font-body-sm text-on-surface mb-1">
                      <span>
                        Manual Intervention Required
                      </span>
                      {' '}
                      <span className="font-bold">
                        0.2%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-surface-dim rounded-[4px] overflow-hidden">
                      <div className="h-full bg-primary-container" style={{"width":"2%"}} />
                    </div>
                  </div>
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant pt-2 border-t border-outline-variant/30">
                  Validated against standard SOX and IFRS audit standards.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="specular-border rounded-[18px] p-6 space-y-3">
              <span className="text-label-sm font-label-sm text-primary font-bold px-2 py-0.5 bg-primary-container/20 rounded-[6px]">
                02
              </span>
              {' '}
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Recurring Invoicing with Automated Payment Reminders
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Schedule periodic retainer billing, trigger automated overdue reminders via SMS/email, and accept instant digital settlements without friction.
              </p>
            </div>
            <div className="specular-border rounded-[18px] p-6 space-y-3">
              <span className="text-label-sm font-label-sm text-primary font-bold px-2 py-0.5 bg-primary-container/20 rounded-[6px]">
                03
              </span>
              {' '}
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Multi-Currency Accounting with Gain/Loss Tracking
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Transact across global currencies with live rate feeds and automated realized/unrealized foreign exchange gain/loss calculations.
              </p>
            </div>
            <div className="specular-border rounded-[18px] p-6 space-y-3">
              <span className="text-label-sm font-label-sm text-primary font-bold px-2 py-0.5 bg-primary-container/20 rounded-[6px]">
                04
              </span>
              {' '}
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Project Time and Expense Billing
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Tag contractor hours and billable costs directly to client milestone accounts for one-click invoice generation without leakages.
              </p>
            </div>
            <div className="specular-border rounded-[18px] p-6 space-y-3">
              <span className="text-label-sm font-label-sm text-primary font-bold px-2 py-0.5 bg-primary-container/20 rounded-[6px]">
                05
              </span>
              {' '}
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Three-Way Matching for Purchases
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Cross-verify purchase orders, receiving warehouse dockets, and vendor invoices automatically before authorizing accounts payable release.
              </p>
            </div>
            <div className="specular-border rounded-[18px] p-6 space-y-3">
              <span className="text-label-sm font-label-sm text-primary font-bold px-2 py-0.5 bg-primary-container/20 rounded-[6px]">
                06
              </span>
              {' '}
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Real-Time Financial Statements
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                {"Instant P&L, balance sheets, and cash flow forecasts compiled on the fly without waiting for quarterly close cycles."}
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center px-2.5 py-1 bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
              EXECUTION WORKFLOW
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              From Transaction to Closed Ledger
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Four deterministic stages that repeat seamlessly every month.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="p-6 bg-surface-container-lowest rounded-[14px] border border-outline-variant/30 space-y-3 flex flex-col justify-between hover:border-primary/50 transition-colors">
              <div className="space-y-3">
                <span className="text-label-sm font-label-sm font-bold text-primary px-2.5 py-1 bg-primary-container/20 rounded-[6px] inline-block">
                  Stage 01
                </span>
                {' '}
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Send Invoices
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Invoices are generated and dispatched with multi-channel payment links, while settlement status tracks automatically in real-time.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-outline">
                <span className="material-symbols-outlined text-[16px]">
                  send
                </span>
                {' '}
                <span>
                  Automated Dispatches
                </span>
              </div>
            </div>
            <div className="p-6 bg-surface-container-lowest rounded-[14px] border border-outline-variant/30 space-y-3 flex flex-col justify-between hover:border-primary/50 transition-colors">
              <div className="space-y-3">
                <span className="text-label-sm font-label-sm font-bold text-primary px-2.5 py-1 bg-primary-container/20 rounded-[6px] inline-block">
                  Stage 02
                </span>
                {' '}
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Match Bank Transactions
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Bank feeds continuously stream in and match against open invoices, payroll batches, or categorized ledger accounts via deterministic rules.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-outline">
                <span className="material-symbols-outlined text-[16px]">
                  compare_arrows
                </span>
                {' '}
                <span>
                  Algorithmic Matching
                </span>
              </div>
            </div>
            <div className="p-6 bg-surface-container-lowest rounded-[14px] border border-outline-variant/30 space-y-3 flex flex-col justify-between hover:border-primary/50 transition-colors">
              <div className="space-y-3">
                <span className="text-label-sm font-label-sm font-bold text-primary px-2.5 py-1 bg-primary-container/20 rounded-[6px] inline-block">
                  Stage 03
                </span>
                {' '}
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Log Expenses and Bills
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Receipts, vendor bills, and department expenses are ingested via OCR and assigned to the exact general ledger code.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-outline">
                <span className="material-symbols-outlined text-[16px]">
                  receipt_long
                </span>
                {' '}
                <span>
                  Optical Extraction
                </span>
              </div>
            </div>
            <div className="p-6 bg-surface-container-lowest rounded-[14px] border border-outline-variant/30 space-y-3 flex flex-col justify-between hover:border-primary/50 transition-colors">
              <div className="space-y-3">
                <span className="text-label-sm font-label-sm font-bold text-primary px-2.5 py-1 bg-primary-container/20 rounded-[6px] inline-block">
                  Stage 04
                </span>
                {' '}
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Generate Reports
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  {"Auditable balance sheets, P&L statements, and trial balances are compiled on demand, with every metric traceable to its source journal entry."}
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-outline">
                <span className="material-symbols-outlined text-[16px]">
                  description
                </span>
                {' '}
                <span>
                  Board-Ready Artifacts
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center px-2.5 py-1 bg-secondary-container/40 border border-secondary-container/60 text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
              BUSINESS IMPACT
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Why Businesses Stop Reconciling by Hand
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Faster close, crystal-clear liquidity, and deterministic operational velocity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="specular-border rounded-[18px] p-6 space-y-3 hover:border-primary/40 transition-all">
              <span className="material-symbols-outlined text-primary text-[28px]">
                speed
              </span>
              {' '}
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Faster Close
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Cut month-end close time by [00%] with continuous algorithmic matching.
              </p>
            </div>
            <div className="specular-border rounded-[18px] p-6 space-y-3 hover:border-primary/40 transition-all">
              <span className="material-symbols-outlined text-secondary text-[28px]">
                account_balance_wallet
              </span>
              {' '}
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Clear Cash Position
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Live visibility into liquidity, cash burn, and receivables across all corporate accounts.
              </p>
            </div>
            <div className="specular-border rounded-[18px] p-6 space-y-3 hover:border-primary/40 transition-all">
              <span className="material-symbols-outlined text-tertiary text-[28px]">
                schedule
              </span>
              {' '}
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Faster Payment
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Automated reminders and embedded payment rails accelerate debtor collection by [00] days.
              </p>
            </div>
            <div className="specular-border rounded-[18px] p-6 space-y-3 hover:border-primary/40 transition-all">
              <span className="material-symbols-outlined text-primary text-[28px]">
                fact_check
              </span>
              {' '}
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Audit-Ready Reports
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Immutable audit trails and source document linkages ensure zero friction during annual audits.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-surface-container rounded-[14px] border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-headline-sm font-headline-sm text-on-surface">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  security
                </span>
                {' '}
                <h4>
                  Enterprise-Grade Security
                </h4>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Encrypted hosting, role-based access control, and regular backups. Your financial data always remains fully yours, encrypted, and exportable with no platform lock-in.
              </p>
            </div>
            <div className="p-6 bg-surface-container rounded-[14px] border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-headline-sm font-headline-sm text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[22px]">
                  price_check
                </span>
                {' '}
                <h4>
                  Transparent, Scoped Pricing
                </h4>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Every engagement is scoped with a guaranteed fixed fee and deployment timeline agreed upfront — book a free consultation for a tailored quote.
              </p>
            </div>
            <div className="p-6 bg-surface-container rounded-[14px] border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-headline-sm font-headline-sm text-on-surface">
                <span className="material-symbols-outlined text-tertiary text-[22px]">
                  group
                </span>
                {' '}
                <h4>
                  Built for Your Whole Team
                </h4>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Granular role-based views mean founders, finance controllers, and department leads each see exactly what they need, nothing more, nothing missing.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center px-2.5 py-1 bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
              OPERATIONAL TRANSFORMATION
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              What Changes on Day One
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Comparing traditional fragmented bookkeeping against the Horizon accounting backbone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-[18px] p-8 border border-outline-variant/50 bg-surface-container-low/70 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-[8px] bg-error-container text-on-error-container flex items-center justify-center font-bold text-sm">
                  ✕
                </span>
                {' '}
                <h3 className="text-headline-md font-headline-md text-on-surface">
                  The Legacy Bookkeeping Burden
                </h3>
              </div>
              <ul className="space-y-4 text-body-md font-body-md text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                    remove_circle_outline
                  </span>
                  {' '}
                  <span>
                    Bank statements reconciled manually in spreadsheets at month-end under high stress
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                    remove_circle_outline
                  </span>
                  {' '}
                  <span>
                    Invoices tracked in disconnected spreadsheets with unverified payment states
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                    remove_circle_outline
                  </span>
                  {' '}
                  <span>
                    Management reports manually cobbled together before every board meeting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                    remove_circle_outline
                  </span>
                  {' '}
                  <span>
                    Outside accountants require shared master logins and endless export files
                  </span>
                </li>
              </ul>
            </div>
            <div className="specular-border rounded-[18px] p-8 border border-primary/40 shadow-lg space-y-6 bg-gradient-to-b from-white/95 to-surface-container-lowest/90">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-[8px] bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-sm">
                  ✓
                </span>
                {' '}
                <h3 className="text-headline-md font-headline-md text-on-surface">
                  The Horizon Synchronized System
                </h3>
              </div>
              <ul className="space-y-4 text-body-md font-body-md text-on-surface">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Transactions matched automatically as they arrive via verified algorithmic feeds
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Invoice status tracked automatically from issued to paid, with automated dunning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Board-ready financial statements compiled on demand from live transactional data
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Accountants receive secure, scoped access directly to the real-time ledger
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center px-2.5 py-1 bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
              {"SYSTEM ARCHITECTURE & INTEGRATION"}
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Frequently Asked Questions
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Technical, operational, and integration inquiries regarding our business accounting backbone.
            </p>
          </div>
          <div className="space-y-3 max-w-4xl">
            <div className="rounded-[14px] border border-primary/40 bg-surface-container-lowest p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between cursor-pointer">
                <h4 className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                  Can we import historical bank statements if we are switching from another system?
                </h4>
                {' '}
                <span className="material-symbols-outlined text-primary text-[24px]">
                  expand_less
                </span>
              </div>
              <div className="text-body-md font-body-md text-on-surface-variant pt-2 border-t border-outline-variant/20 leading-relaxed">
                Yes. Horizon includes deterministic historical migration utilities supporting direct CSV, OFX, and QBO format ingestion as well as automated REST API ingestion from legacy platforms. Our deployment engineers verify opening balances, validate schema mapping against your prior chart of accounts, and perform historical checksum balance verifications without data loss or duplicate transaction creation.
              </div>
            </div>
            <div className="rounded-[14px] border border-outline-variant/30 bg-surface-container-lowest/80 p-5 flex items-center justify-between cursor-pointer hover:border-outline transition-colors">
              <h4 className="text-body-lg font-body-lg text-on-surface font-medium">
                Does it handle multiple currencies if we bill international clients?
              </h4>
              {' '}
              <span className="material-symbols-outlined text-outline text-[24px]">
                expand_more
              </span>
            </div>
            <div className="rounded-[14px] border border-outline-variant/30 bg-surface-container-lowest/80 p-5 flex items-center justify-between cursor-pointer hover:border-outline transition-colors">
              <h4 className="text-body-lg font-body-lg text-on-surface font-medium">
                Can our accountant get direct access without us sharing login credentials?
              </h4>
              {' '}
              <span className="material-symbols-outlined text-outline text-[24px]">
                expand_more
              </span>
            </div>
            <div className="rounded-[14px] border border-outline-variant/30 bg-surface-container-lowest/80 p-5 flex items-center justify-between cursor-pointer hover:border-outline transition-colors">
              <h4 className="text-body-lg font-body-lg text-on-surface font-medium">
                Can multiple team members work in the books at once?
              </h4>
              {' '}
              <span className="material-symbols-outlined text-outline text-[24px]">
                expand_more
              </span>
            </div>
            <div className="rounded-[14px] border border-outline-variant/30 bg-surface-container-lowest/80 p-5 flex items-center justify-between cursor-pointer hover:border-outline transition-colors">
              <h4 className="text-body-lg font-body-lg text-on-surface font-medium">
                Does it support recurring bills, not just recurring invoices?
              </h4>
              {' '}
              <span className="material-symbols-outlined text-outline text-[24px]">
                expand_more
              </span>
            </div>
            <div className="rounded-[14px] border border-outline-variant/30 bg-surface-container-lowest/80 p-5 flex items-center justify-between cursor-pointer hover:border-outline transition-colors">
              <h4 className="text-body-lg font-body-lg text-on-surface font-medium">
                Can we set up approval workflows for large expenses or invoices?
              </h4>
              {' '}
              <span className="material-symbols-outlined text-outline text-[24px]">
                expand_more
              </span>
            </div>
            <div className="rounded-[14px] border border-outline-variant/30 bg-surface-container-lowest/80 p-5 flex items-center justify-between cursor-pointer hover:border-outline transition-colors">
              <h4 className="text-body-lg font-body-lg text-on-surface font-medium">
                How long does implementation typically take?
              </h4>
              {' '}
              <span className="material-symbols-outlined text-outline text-[24px]">
                expand_more
              </span>
            </div>
            <div className="rounded-[14px] border border-outline-variant/30 bg-surface-container-lowest/80 p-5 flex items-center justify-between cursor-pointer hover:border-outline transition-colors">
              <h4 className="text-body-lg font-body-lg text-on-surface font-medium">
                Is our data secure, and who owns it?
              </h4>
              {' '}
              <span className="material-symbols-outlined text-outline text-[24px]">
                expand_more
              </span>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center px-2.5 py-1 bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
                HORIZON ECOSYSTEM
              </span>
              {' '}
              <h2 className="text-headline-lg font-headline-lg text-on-surface">
                Looking for something else?
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Browse productized software and autonomous AI workflows engineered for mission-critical operations.
              </p>
            </div>
            {' '}
            <Link to="/products" className="text-primary hover:text-on-primary-fixed-variant text-label-lg font-label-lg font-bold inline-flex items-center gap-1 group">
              <span>
                Explore all [00+] productized packages
              </span>
              {' '}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="specular-border rounded-[16px] p-6 space-y-4 flex flex-col justify-between hover:border-primary/50 transition-colors">
              <div className="space-y-2">
                <span className="px-2 py-0.5 bg-tertiary-fixed/50 text-on-tertiary-container text-label-sm font-label-sm rounded-[6px] inline-block font-semibold">
                  INTEGRATION
                </span>
                {' '}
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Ecommerce-to-Finance Sync
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Every online order updates your books automatically, eliminating spreadsheet export delays.
                </p>
              </div>
              {' '}
              <Link to="/products" className="w-full py-2 bg-surface-container border border-outline-variant/40 rounded-[10px] text-label-md font-label-md text-on-surface hover:bg-surface-container-highest transition-colors font-medium">
                View Package
              </Link>
            </div>
            <div className="specular-border rounded-[16px] p-6 space-y-4 flex flex-col justify-between hover:border-primary/50 transition-colors">
              <div className="space-y-2">
                <span className="px-2 py-0.5 bg-secondary-container/60 text-on-secondary-container text-label-sm font-label-sm rounded-[6px] inline-block font-semibold">
                  EXPENSES
                </span>
                {' '}
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Employee Expense Management
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Snap receipts and let automated policy rules categorize, verify, and route for approval.
                </p>
              </div>
              {' '}
              <Link to="/products" className="w-full py-2 bg-surface-container border border-outline-variant/40 rounded-[10px] text-label-md font-label-md text-on-surface hover:bg-surface-container-highest transition-colors font-medium">
                View Package
              </Link>
            </div>
            <div className="specular-border rounded-[16px] p-6 space-y-4 flex flex-col justify-between hover:border-primary/50 transition-colors">
              <div className="space-y-2">
                <span className="px-2 py-0.5 bg-primary-container/20 text-on-primary-container text-label-sm font-label-sm rounded-[6px] inline-block font-semibold">
                  ERP CORE
                </span>
                {' '}
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Integrated ERP Platform
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Sales, inventory, finance, and human resources reading from the same unified live ledger.
                </p>
              </div>
              {' '}
              <Link to="/products" className="w-full py-2 bg-surface-container border border-outline-variant/40 rounded-[10px] text-label-md font-label-md text-on-surface hover:bg-surface-container-highest transition-colors font-medium">
                View Package
              </Link>
            </div>
            <div className="specular-border rounded-[16px] p-6 space-y-4 flex flex-col justify-between hover:border-primary/50 transition-colors">
              <div className="space-y-2">
                <span className="px-2 py-0.5 bg-surface-container-high text-on-surface text-label-sm font-label-sm rounded-[6px] inline-block font-semibold">
                  OPERATIONS
                </span>
                {' '}
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Smart Inventory Control
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Real-time stock velocity, automated supplier replenishment, and batch tracking down to the unit.
                </p>
              </div>
              {' '}
              <Link to="/products" className="w-full py-2 bg-surface-container border border-outline-variant/40 rounded-[10px] text-label-md font-label-md text-on-surface hover:bg-surface-container-highest transition-colors font-medium">
                View Package
              </Link>
            </div>
          </div>
        </section>
        <section className="rounded-[24px] p-8 md:p-14 bg-gradient-to-r from-surface-container-low via-surface-container-lowest to-primary-container/20 border border-outline-variant/40 shadow-lg relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-container/30 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              Ready to close your books without the month-end scramble?
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Schedule a fixed-scope technical consultation with our finance systems engineers within 48 hours.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="primary-btn-gradient text-on-primary font-label-lg text-label-lg px-6 py-3 rounded-[10px] font-semibold transition-transform active:scale-[0.99]">
                Book an Architectural Scoping Consultation
              </button>
              {' '}
              <button className="bg-surface-container-lowest/90 border border-outline-variant/60 text-on-surface hover:bg-white font-label-lg text-label-lg px-6 py-3 rounded-[10px] font-semibold transition-colors shadow-sm">
                Download Platform Specification
              </button>
            </div>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
