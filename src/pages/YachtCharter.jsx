// Generated from stitch/pd_harbor-ops.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './YachtCharter.css'

export default function YachtCharter() {
  return (
    <div className="pg-yacht-charter bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <title>{"Yacht Charter Management — Horizons Enterprise Platform"}</title>
      {' '}
      {' '}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-8 space-y-24 pt-6 pb-20">
        <section className="relative pt-6">
          <nav className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant mb-6">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            {' '}
            <span className="text-outline-variant">
              /
            </span>
            {' '}
            <a className="hover:text-primary transition-colors" href="#">
              {"Maritime & Luxury"}
            </a>
            {' '}
            <span className="text-outline-variant">
              /
            </span>
            {' '}
            <span className="text-on-surface font-medium">
              Yacht Charter Management
            </span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary/10 text-primary border border-primary/20 text-label-sm font-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {' '}
                  {"MARITIME & CHARTER OPERATIONS"}
                </div>
                <h1 className="text-display-lg font-display-lg text-on-surface tracking-tight">
                  Yacht Charter Management
                </h1>
                <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  Every charter, from the first enquiry to the last owner payout, unified in one operational ledger.
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <div className="text-label-sm font-label-sm text-outline uppercase tracking-wider">
                  Included Core Engine Modules:
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <div className="px-3.5 py-2 rounded-[10px] bg-white border border-outline-variant/40 text-label-md font-label-md text-on-surface flex items-center gap-2 shadow-xs">
                    <span className="material-symbols-outlined text-[16px] text-primary" data-icon="auto_awesome">
                      auto_awesome
                    </span>
                    {' '}
                    AI Enquiry Inbox
                  </div>
                  <div className="px-3.5 py-2 rounded-[10px] bg-white border border-outline-variant/40 text-label-md font-label-md text-on-surface flex items-center gap-2 shadow-xs">
                    <span className="material-symbols-outlined text-[16px] text-tertiary" data-icon="filter_alt">
                      filter_alt
                    </span>
                    {' '}
                    {"Leads & Deals Pipeline"}
                  </div>
                  <div className="px-3.5 py-2 rounded-[10px] bg-white border border-outline-variant/40 text-label-md font-label-md text-on-surface flex items-center gap-2 shadow-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary" data-icon="task_alt">
                      task_alt
                    </span>
                    {' '}
                    Closed-Won in One Step
                  </div>
                  <div className="px-3.5 py-2 rounded-[10px] bg-white border border-outline-variant/40 text-label-md font-label-md text-on-surface flex items-center gap-2 shadow-xs">
                    <span className="material-symbols-outlined text-[16px] text-primary" data-icon="account_balance_wallet">
                      account_balance_wallet
                    </span>
                    {' '}
                    {"Automated Payments & Owner Payouts"}
                  </div>
                  <div className="px-3.5 py-2 rounded-[10px] bg-white border border-outline-variant/40 text-label-md font-label-md text-on-surface flex items-center gap-2 shadow-xs">
                    <span className="material-symbols-outlined text-[16px] text-tertiary" data-icon="calendar_month">
                      calendar_month
                    </span>
                    {' '}
                    Unified Fleet Calendar
                  </div>
                  <div className="px-3.5 py-2 rounded-[10px] bg-white border border-outline-variant/40 text-label-md font-label-md text-on-surface flex items-center gap-2 shadow-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary" data-icon="shield_person">
                      shield_person
                    </span>
                    {' '}
                    {"Role-Based Access & Historical Import"}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="p-8 rounded-[16px] bg-white/90 backdrop-blur-xl border border-outline-variant/40 shadow-xl space-y-6">
                <div className="space-y-1">
                  <span className="px-2 py-0.5 rounded-[6px] bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm font-semibold">
                    Priority Maritime Access
                  </span>
                  {' '}
                  <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface pt-2">
                    Book a live product demo
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    See how Horizons synchronizes your yachts, APA deposits, and central broker contracts.
                  </p>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1.5">
                      Full Name
                    </label>
                    {' '}
                    <input className="w-full h-11 px-3.5 rounded-[10px] bg-surface-container-low/60 border border-outline-variant/50 text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="e.g. Captain Julian Vance" type="text" />
                  </div>
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1.5">
                      Work Email
                    </label>
                    {' '}
                    <input className="w-full h-11 px-3.5 rounded-[10px] bg-surface-container-low/60 border border-outline-variant/50 text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="julian@monacoyachts.com" type="email" />
                  </div>
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1.5">
                      Phone
                    </label>
                    {' '}
                    <input className="w-full h-11 px-3.5 rounded-[10px] bg-surface-container-low/60 border border-outline-variant/50 text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Phone number" type="tel" />
                  </div>
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1.5">
                      Fleet / Charter Volume
                    </label>
                    {' '}
                    <div className="relative">
                      <select className="w-full h-11 px-3.5 rounded-[10px] bg-surface-container-low/60 border border-outline-variant/50 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none">
                        <option value="1-5">
                          1 - 5 Vessels (Central Agent or Boutique)
                        </option>
                        <option value="6-20">
                          6 - 20 Vessels (Mid-sized Charter Brokerage)
                        </option>
                        <option value="20+">
                          20+ Superyachts / Megayachts (Global Fleet)
                        </option>
                        <option value="broker">
                          Retail Charter Brokerage (Non-managing)
                        </option>
                      </select>
                      {' '}
                      <span className="material-symbols-outlined text-[18px] text-outline absolute right-3 top-3 pointer-events-none" data-icon="unfold_more">
                        unfold_more
                      </span>
                    </div>
                  </div>
                  {' '}
                  <button className="w-full py-3.5 rounded-[10px] coral-gradient text-white text-label-lg font-label-lg font-semibold shadow-md hover:shadow-lg transition-all text-center" type="submit">
                    Request Live Demo
                  </button>
                </form>
                <div className="flex items-center gap-2 pt-2 text-label-sm font-label-sm text-outline">
                  <span className="material-symbols-outlined text-[16px] text-secondary" data-icon="verified_user">
                    verified_user
                  </span>
                  {' '}
                  <span>
                    Encrypted hosting, role-based access and regular backups.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-tertiary/10 text-tertiary border border-tertiary/20 text-label-sm font-label-sm">
              REAL-TIME TELEMETRY
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              {"Product Live Telemetry & Scheduling Demo"}
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">
              See automated inquiry extraction, multi-vessel calendar collision checks, and APA ledger reconciliation in real time.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-12 rounded-[16px] frosted-card p-6 flex flex-col justify-between shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-[8px] bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]" data-icon="anchor">
                      anchor
                    </span>
                  </div>
                  <div>
                    <div className="text-label-md font-label-md font-bold text-on-surface">
                      Horizons CharterOS v4.2
                    </div>
                    <div className="text-label-sm font-label-sm text-outline">
                      Central Agent Production Node
                    </div>
                  </div>
                </div>
                {' '}
                <span className="px-2.5 py-1 rounded-[6px] bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm font-semibold">
                  {"Confirmed & APA Allocated"}
                </span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-[12px] bg-white border border-outline-variant/30 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-headline-sm font-headline-sm text-on-surface font-bold">
                        M/Y Aurelia 52m - Superyacht
                      </div>
                      <div className="text-body-sm font-body-sm text-on-surface-variant">
                        Flag: Cayman Islands • Port of Registry: George Town
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-label-sm font-label-sm text-outline">
                        Charter Duration
                      </div>
                      <div className="text-label-md font-label-md font-semibold text-primary">
                        Jul 14 - Jul 21 (7 Nights)
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-outline-variant/20 text-body-sm font-body-sm">
                    <div>
                      <span className="text-outline">
                        Client:
                      </span>
                      {' '}
                      <span className="font-medium text-on-surface ml-1">
                        Family Charter / [Client name]
                      </span>
                    </div>
                    <div>
                      <span className="text-outline">
                        Broker Commission:
                      </span>
                      {' '}
                      <span className="font-medium text-secondary ml-1">
                        15% Cleared
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-[12px] bg-white border border-outline-variant/30">
                    <div className="text-label-sm font-label-sm text-outline">
                      APA Fund Balance
                    </div>
                    <div className="text-headline-md font-headline-md font-bold text-tertiary mt-1">
                      $48,500
                    </div>
                    <div className="text-label-sm font-label-sm text-tertiary flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[14px]" data-icon="check_circle">
                        check_circle
                      </span>
                      {' '}
                      {"Fuel & Provision Card Active"}
                    </div>
                  </div>
                  <div className="p-4 rounded-[12px] bg-white border border-outline-variant/30">
                    <div className="text-label-sm font-label-sm text-outline">
                      Owner Net Remittance
                    </div>
                    <div className="text-headline-md font-headline-md font-bold text-on-surface mt-1">
                      $312,000
                    </div>
                    <div className="text-label-sm font-label-sm text-primary flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[14px]" data-icon="schedule">
                        schedule
                      </span>
                      {' '}
                      Pending Cutover
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-[12px] bg-surface-container-low border border-outline-variant/30 space-y-2.5">
                  <div className="text-label-sm font-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                    Automated Charter Milestones:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-body-sm font-body-sm">
                    <div className="flex items-center gap-2 text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px]" data-icon="check_box">
                        check_box
                      </span>
                      {' '}
                      <span>
                        MYBA Form Generated
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px]" data-icon="check_box">
                        check_box
                      </span>
                      {' '}
                      <span>
                        {"Passport & Manifest Signed"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px]" data-icon="check_box">
                        check_box
                      </span>
                      {' '}
                      <span>
                        Captain APA Credit Disbursed
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface">
                      <span className="material-symbols-outlined text-outline text-[18px]" data-icon="check_box_outline_blank">
                        check_box_outline_blank
                      </span>
                      {' '}
                      <span className="text-outline">
                        Disembarkation Fuel Finalized
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-error-container text-on-error-container text-label-sm font-label-sm font-semibold">
              THE CHARTER BROKERAGE BOTTLENECK
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Built specifically for modern yacht charter brokerages and fleet operators.
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-4xl leading-relaxed">
              Luxury charter companies drown in disconnected emails, disparate spreadsheets, PDF contracts, and fragile memory. When high-net-worth clients request seven-figure itineraries on short notice, a slow response or an unrecorded owner hold destroys a deal. Horizons Yacht Charter Management centralizes inquiries, charterers, luxury vessels, reservations, and multi-currency funds into one live workspace.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[16px] frosted-card space-y-4 hover:border-primary/40 transition-all">
              <div className="w-10 h-10 rounded-[10px] bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]" data-icon="quickreply">
                  quickreply
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                {"Automated Inquiry Parsing & Availability Matching"}
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Incoming charter inquiries are parsed, matched against fleet availability and cabin specifications, and prepared for instant broker approval without re-keying vessel specs.
              </p>
            </div>
            <div className="p-6 rounded-[16px] frosted-card space-y-4 hover:border-primary/40 transition-all">
              <div className="w-10 h-10 rounded-[10px] bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[24px]" data-icon="description">
                  description
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                {"Tailored Contract Terms & APA Ledgers"}
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Flexible MYBA / standard maritime agreements, structured instalment plans, APA provisioning, and broker commission splits configured to your exact operating model.
              </p>
            </div>
            <div className="p-6 rounded-[16px] frosted-card space-y-4 hover:border-primary/40 transition-all">
              <div className="w-10 h-10 rounded-[10px] bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]" data-icon="date_range">
                  date_range
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Deterministic Multi-Vessel Calendars
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Single source of truth per vessel where owner-use weeks, technical refits, sea trials, and booked charter weeks can never be double-sold or miscommunicated.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm font-semibold">
              ENGINEERED MARITIME CAPABILITIES
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              From incoming charter inquiry to final owner statement: Six core capabilities.
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">
              Deterministic automation eliminating manual data retyping, booking conflicts, and remittance lag.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-[16px] bg-white border-2 border-primary shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-label-md font-label-md font-bold text-primary">
                    {"01. Smart Inbox & Autonomous Ingestion"}
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-primary-container text-white text-label-sm font-label-sm">
                    Active Deep Dive
                  </span>
                </div>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Gmail and Outlook sync reads incoming charter inquiries, dates, guest counts, and target itineraries, checks fleet availability, recommends matching yachts in the same class, and drafts responses for broker sign-off.
                </p>
              </div>
              <div className="p-5 rounded-[16px] bg-white/70 border border-outline-variant/30 space-y-2 hover:bg-white transition-colors">
                <span className="text-label-md font-label-md font-bold text-on-surface">
                  02. Multi-Stage Charter Deal Pipeline
                </span>
                {' '}
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Track leads from initial specification to contract signing with custom deal values, guest preference profiles, and broker attribution.
                </p>
              </div>
              <div className="p-5 rounded-[16px] bg-white/70 border border-outline-variant/30 space-y-2 hover:bg-white transition-colors">
                <span className="text-label-md font-label-md font-bold text-on-surface">
                  03. One-Step Closed-Won Generation
                </span>
                {' '}
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Instantly generate legally compliant charter agreements, client instalment schedules, APA provisions, and owner payout timelines in one click.
                </p>
              </div>
              <div className="p-5 rounded-[16px] bg-white/70 border border-outline-variant/30 space-y-2 hover:bg-white transition-colors">
                <span className="text-label-md font-label-md font-bold text-on-surface">
                  {"04. Multi-Currency Ledger & Owner Payouts"}
                </span>
                {' '}
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Track escrow deposits, VAT calculations, advance provisioning allowances (APA), fuel reconciliation, and owner remittances with zero manual spreadsheets.
                </p>
              </div>
              <div className="p-5 rounded-[16px] bg-white/70 border border-outline-variant/30 space-y-2 hover:bg-white transition-colors">
                <span className="text-label-md font-label-md font-bold text-on-surface">
                  05. Collision-Proof Fleet Scheduling
                </span>
                {' '}
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Unified visual timeline displaying confirmed bookings, tentative holds, shipyard maintenance windows, and owner-exclusive weeks.
                </p>
              </div>
              <div className="p-5 rounded-[16px] bg-white/70 border border-outline-variant/30 space-y-2 hover:bg-white transition-colors">
                <span className="text-label-md font-label-md font-bold text-on-surface">
                  {"06. Role-Based Permissions & Legacy Migration"}
                </span>
                {' '}
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Granular views for brokers, charter managers, captains, and finance controllers with frictionless CSV spreadsheet import.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 sticky top-28 p-6 rounded-[16px] frosted-card border border-primary/30 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]" data-icon="psychology">
                    psychology
                  </span>
                  {' '}
                  <span className="text-label-md font-label-md font-bold text-on-surface">
                    Feature 01 Deep-Dive: Active AI Dispatch
                  </span>
                </div>
                {' '}
                <span className="px-2 py-0.5 rounded-[6px] bg-tertiary-fixed text-on-tertiary-fixed font-bold text-label-sm font-label-sm">
                  Confidence: 96%
                </span>
              </div>
              <div className="space-y-2">
                <div className="text-label-sm font-label-sm text-outline uppercase tracking-wider">
                  Source Parsing Sample:
                </div>
                <div className="p-3.5 rounded-[10px] bg-surface-container-low font-mono text-body-sm font-body-sm text-on-surface-variant border border-outline-variant/20">
                  "Looking for 50m+ yacht in Cyclades for 10 guests, Aug 10-17. Need helipad and master suite on main deck. Budget approx €250k."
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-label-sm font-label-sm text-outline uppercase tracking-wider">
                  Extracted Telemetry:
                </div>
                <div className="grid grid-cols-2 gap-2 text-label-sm font-label-sm">
                  <div className="p-2.5 rounded-[8px] bg-white border border-outline-variant/30">
                    <div className="text-outline">
                      Cruising Region
                    </div>
                    <div className="font-bold text-on-surface mt-0.5">
                      Aegean / Cyclades
                    </div>
                  </div>
                  <div className="p-2.5 rounded-[8px] bg-white border border-outline-variant/30">
                    <div className="text-outline">
                      Guests / Cabins
                    </div>
                    <div className="font-bold text-on-surface mt-0.5">
                      10 Guests (5 Staterooms)
                    </div>
                  </div>
                  <div className="p-2.5 rounded-[8px] bg-white border border-outline-variant/30">
                    <div className="text-outline">
                      Requested Window
                    </div>
                    <div className="font-bold text-primary mt-0.5">
                      Aug 10 - Aug 17 (7 Days)
                    </div>
                  </div>
                  <div className="p-2.5 rounded-[8px] bg-white border border-outline-variant/30">
                    <div className="text-outline">
                      Target Budget
                    </div>
                    <div className="font-bold text-secondary mt-0.5">
                      €250,000 + APA
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-[12px] bg-white border border-secondary-container shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-label-sm font-label-sm font-bold text-secondary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]" data-icon="verified">
                      verified
                    </span>
                    {' '}
                    Verified Fleet Match
                  </span>
                  {' '}
                  <span className="text-label-sm font-label-sm text-outline">
                    100% Availability
                  </span>
                </div>
                <div className="text-label-md font-label-md text-on-surface font-semibold">
                  M/Y Helios Blue (55m Admiral)
                </div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  Located in Athens Marina. Pre-approved for fast draft quote.
                </div>
              </div>
              <div className="pt-2">
                <button className="w-full py-2.5 rounded-[10px] bg-surface-container text-on-surface border border-outline-variant/40 text-label-md font-label-md font-semibold hover:bg-white transition-colors">
                  {"Inspect AI Dispatch Rules & Prompt Pipeline →"}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-secondary/10 text-secondary text-label-sm font-label-sm font-semibold">
              OPERATIONAL WORKFLOW
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Four deterministic steps from charter inquiry to owner payout.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="p-6 rounded-[16px] frosted-card border border-outline-variant/30 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-[10px] bg-primary text-white flex items-center justify-center font-bold text-label-lg font-label-lg shadow-sm">
                  01
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  {"Set Up Fleet & Connect Inboxes"}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Upload vessel specs, crew profiles, weekly rates, connect corporate email, and import existing charterer records.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-primary flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" data-icon="sync">
                  sync
                </span>
                {' '}
                Takes under 2 hours
              </div>
            </div>
            <div className="p-6 rounded-[16px] frosted-card border border-outline-variant/30 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-[10px] bg-tertiary text-white flex items-center justify-center font-bold text-label-lg font-label-lg shadow-sm">
                  02
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Inquiries Automatically Transform
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Incoming requests are parsed for dates, destinations, and guest requirements with auto-matched fleet suggestions and pre-drafted replies.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-tertiary flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" data-icon="bolt">
                  bolt
                </span>
                {' '}
                Instant broker notification
              </div>
            </div>
            <div className="p-6 rounded-[16px] frosted-card border border-outline-variant/30 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-[10px] bg-secondary text-white flex items-center justify-center font-bold text-label-lg font-label-lg shadow-sm">
                  03
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  {"Execute & Lock the Contract"}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Mark deal as Closed-Won to automatically spin up client invoice schedules, APA escrow ledgers, and owner payout milestones.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-secondary flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" data-icon="lock">
                  lock
                </span>
                {' '}
                Guaranteed zero collisions
              </div>
            </div>
            <div className="p-6 rounded-[16px] frosted-card border border-outline-variant/30 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-[10px] bg-surface-tint text-white flex items-center justify-center font-bold text-label-lg font-label-lg shadow-sm">
                  04
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  {"Track Payments & Reconcile APA"}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Record client wire transfers in real time, monitor overdue notices, log voyage expense receipts, and disburse owner payouts.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-surface-tint flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" data-icon="receipt_long">
                  receipt_long
                </span>
                {' '}
                Clean owner ledger output
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm font-semibold">
              OPERATIONAL RETURNS
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Why leading charter brokerages and fleet managers choose Horizons.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-[16px] bg-white border border-outline-variant/30 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-[10px] bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]" data-icon="speed">
                  speed
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                {"Accelerated Inquiries & Higher Booking Velocity"}
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Availability checked and quote-ready responses drafted before competitors open the email. Convert high-value charter opportunities before options expire.
              </p>
            </div>
            <div className="p-7 rounded-[16px] bg-white border border-outline-variant/30 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-[10px] bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]" data-icon="event_busy">
                  event_busy
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Zero Double-Bookings or Scheduling Clashes
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Vessel calendars lock out maintenance and owner weeks with zero spreadsheet discrepancy. Central agents and retail brokers see verified real-time availability.
              </p>
            </div>
            <div className="p-7 rounded-[16px] bg-white border border-outline-variant/30 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-[10px] bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[24px]" data-icon="price_check">
                  price_check
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                {"Complete Financial Transparency & APA Control"}
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Instantly audit paid deposits, upcoming charter installments, and net owner remittances. Every provisioning dollar is accounted for with itemized receipt logs.
              </p>
            </div>
            <div className="p-7 rounded-[16px] bg-white border border-outline-variant/30 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-[10px] bg-surface-tint/10 flex items-center justify-center text-surface-tint">
                <span className="material-symbols-outlined text-[24px]" data-icon="hub">
                  hub
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Single Shared Brokerage Workspace
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Brokers, fleet managers, captains, and accountants operate with role-appropriate permissions from identical records—eliminating back-and-forth internal emails.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-[16px] bg-surface-container-low border border-outline-variant/30">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-label-md font-label-md font-bold text-on-surface">
                <span className="material-symbols-outlined text-[20px] text-primary" data-icon="verified_user">
                  verified_user
                </span>
                {' '}
                Enterprise-Grade Security
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Encrypted hosting, role-based access control, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-label-md font-label-md font-bold text-on-surface">
                <span className="material-symbols-outlined text-[20px] text-tertiary" data-icon="request_quote">
                  request_quote
                </span>
                {' '}
                Transparent, Scoped Pricing
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Every engagement is scoped individually with a fixed price and timeline agreed upfront — book a free consultation for a tailored quote.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-label-md font-label-md font-bold text-on-surface">
                <span className="material-symbols-outlined text-[20px] text-secondary" data-icon="groups">
                  groups
                </span>
                {' '}
                Built for Your Whole Team
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Role-based views mean owners, managers, and frontline staff each see exactly what they need, nothing more, nothing missing.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm font-semibold">
              OPERATIONAL TRANSFORMATION
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              The difference in the charter office.
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">
              Comparing disconnected spreadsheet friction against Horizons' unified maritime operational ledger.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[16px] bg-surface-container-low border border-error/20 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <div className="text-headline-sm font-headline-sm font-bold text-error flex items-center gap-2">
                  <span className="material-symbols-outlined text-[24px]" data-icon="cancel">
                    cancel
                  </span>
                  {' '}
                  Without Yacht Charter Management
                </div>
                {' '}
                <span className="px-2.5 py-0.5 rounded-[6px] bg-error-container text-on-error-container text-label-sm font-label-sm">
                  High Friction
                </span>
              </div>
              <div className="space-y-5 text-body-md font-body-md text-on-surface-variant">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5" data-icon="close">
                    close
                  </span>
                  {' '}
                  <p>
                    Inquiries sit in chaotic email inboxes while brokers manually consult offline calendars and captains.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5" data-icon="close">
                    close
                  </span>
                  {' '}
                  <p>
                    Yacht availability and vessel holds reside in personal spreadsheets, leading to painful double-booking risks.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5" data-icon="close">
                    close
                  </span>
                  {' '}
                  <p>
                    Multi-currency payment plans, APA allocations, and broker splits calculated manually with frequent errors.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5" data-icon="close">
                    close
                  </span>
                  {' '}
                  <p>
                    Finance teams cannot confirm which charterer payments are settled, overdue, or in bank transit.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-[16px] bg-white border border-secondary/30 shadow-lg space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <div className="text-headline-sm font-headline-sm font-bold text-secondary flex items-center gap-2">
                  <span className="material-symbols-outlined text-[24px]" data-icon="check_circle">
                    check_circle
                  </span>
                  {' '}
                  With Horizons Yacht Charter Management
                </div>
                {' '}
                <span className="px-2.5 py-0.5 rounded-[6px] bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm font-semibold">
                  Zero Double-Bookings
                </span>
              </div>
              <div className="space-y-5 text-body-md font-body-md text-on-surface">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5" data-icon="done_all">
                    done_all
                  </span>
                  {' '}
                  <p>
                    Inquiries are ingested, parsed, and verified against fleet availability within minutes.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5" data-icon="done_all">
                    done_all
                  </span>
                  {' '}
                  <p>
                    One central, synchronized fleet calendar where booked, optioned, and refit weeks cannot be sold twice.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5" data-icon="done_all">
                    done_all
                  </span>
                  {' '}
                  <p>
                    One-click Closed-Won automatically builds contract payment schedules, APA escrows, and owner payouts.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5" data-icon="done_all">
                    done_all
                  </span>
                  {' '}
                  <p>
                    Real-time financial dashboard displaying paid, pending, and overdue charter balances across all currencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-tertiary/10 text-tertiary text-label-sm font-label-sm font-semibold">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Clear answers regarding charter operations, fleet sync, and onboarding.
            </h2>
          </div>
          <div className="space-y-3">
            <div className="p-6 rounded-[10px] bg-white border border-primary/40 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-headline-sm font-headline-sm font-bold text-on-surface cursor-pointer">
                <span>
                  1. Who is Yacht Charter Management for?
                </span>
                {' '}
                <span className="material-symbols-outlined text-primary text-[24px]" data-icon="remove">
                  remove
                </span>
              </div>
              <div className="text-body-md font-body-md text-on-surface-variant leading-relaxed pt-2 border-t border-outline-variant/20">
                Designed for luxury yacht charter brokerages, central agents, fleet management companies, and bareboat/crewed charter operators managing single or multi-vessel fleets who need to replace disjointed spreadsheets and email chains with an auditable operations platform.
              </div>
            </div>
            <div className="p-5 rounded-[10px] bg-white/70 border border-outline-variant/30 flex items-center justify-between text-label-lg font-label-lg font-semibold text-on-surface hover:bg-white cursor-pointer">
              <span>
                2. Can I try it before buying?
              </span>
              {' '}
              <span className="material-symbols-outlined text-outline text-[20px]" data-icon="add">
                add
              </span>
            </div>
            <div className="p-5 rounded-[10px] bg-white/70 border border-outline-variant/30 flex items-center justify-between text-label-lg font-label-lg font-semibold text-on-surface hover:bg-white cursor-pointer">
              <span>
                3. How does the AI enquiry inbox work?
              </span>
              {' '}
              <span className="material-symbols-outlined text-outline text-[20px]" data-icon="add">
                add
              </span>
            </div>
            <div className="p-5 rounded-[10px] bg-white/70 border border-outline-variant/30 flex items-center justify-between text-label-lg font-label-lg font-semibold text-on-surface hover:bg-white cursor-pointer">
              <span>
                4. Can I bring in my existing data and spreadsheet records?
              </span>
              {' '}
              <span className="material-symbols-outlined text-outline text-[20px]" data-icon="add">
                add
              </span>
            </div>
            <div className="p-5 rounded-[10px] bg-white/70 border border-outline-variant/30 flex items-center justify-between text-label-lg font-label-lg font-semibold text-on-surface hover:bg-white cursor-pointer">
              <span>
                5. Does it handle standard MYBA contracts and Advance Provisioning Allowance (APA)?
              </span>
              {' '}
              <span className="material-symbols-outlined text-outline text-[20px]" data-icon="add">
                add
              </span>
            </div>
            <div className="p-5 rounded-[10px] bg-white/70 border border-outline-variant/30 flex items-center justify-between text-label-lg font-label-lg font-semibold text-on-surface hover:bg-white cursor-pointer">
              <span>
                6. Can each team member, broker, and captain have custom access permissions?
              </span>
              {' '}
              <span className="material-symbols-outlined text-outline text-[20px]" data-icon="add">
                add
              </span>
            </div>
            <div className="p-5 rounded-[10px] bg-white/70 border border-outline-variant/30 flex items-center justify-between text-label-lg font-label-lg font-semibold text-on-surface hover:bg-white cursor-pointer">
              <span>
                7. How long does onboarding and fleet data migration typically take?
              </span>
              {' '}
              <span className="material-symbols-outlined text-outline text-[20px]" data-icon="add">
                add
              </span>
            </div>
            <div className="p-5 rounded-[10px] bg-white/70 border border-outline-variant/30 flex items-center justify-between text-label-lg font-label-lg font-semibold text-on-surface hover:bg-white cursor-pointer">
              <span>
                8. Is our client and financial data secure, and who owns it?
              </span>
              {' '}
              <span className="material-symbols-outlined text-outline text-[20px]" data-icon="add">
                add
              </span>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm font-semibold">
                CONNECTED ENTERPRISE MODULES
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface">
                Looking for something else?
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Browse productized software and autonomous AI workflows engineered for operational velocity.
              </p>
            </div>
            {' '}
            <Link to="/products" className="text-label-lg font-label-lg font-semibold text-primary hover:underline inline-flex items-center gap-1.5 shrink-0">
              Explore all product packages
              {' '}
              <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-[16px] frosted-card border border-outline-variant/30 flex flex-col justify-between hover:border-primary/50 transition-all group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]" data-icon="inventory_2">
                    inventory_2
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface group-hover:text-primary transition-colors">
                  Smart Inventory Control
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Know exactly what's on your shelves, in your trucks, and on order — down to the unit, across every warehouse you run.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-outline-variant/20 flex items-center text-label-sm font-label-sm text-primary font-semibold">
                <span>
                  Learn more
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform" data-icon="chevron_right">
                  chevron_right
                </span>
              </div>
            </div>
            <div className="p-6 rounded-[16px] frosted-card border border-outline-variant/30 flex flex-col justify-between hover:border-primary/50 transition-all group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]" data-icon="flight_takeoff">
                    flight_takeoff
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface group-hover:text-primary transition-colors">
                  AI Travel Agent
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Corporate travel policy compliance, automated itinerary booking, and live flight disruption rebooking.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-outline-variant/20 flex items-center text-label-sm font-label-sm text-primary font-semibold">
                <span>
                  Learn more
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform" data-icon="chevron_right">
                  chevron_right
                </span>
              </div>
            </div>
            <div className="p-6 rounded-[16px] frosted-card border border-outline-variant/30 flex flex-col justify-between hover:border-primary/50 transition-all group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]" data-icon="sync_alt">
                    sync_alt
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface group-hover:text-primary transition-colors">
                  Ship-to-Ship Transfer Management
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Coordinate cargo transfers between vessels at sea with the same discipline a port operation demands on land.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-outline-variant/20 flex items-center text-label-sm font-label-sm text-primary font-semibold">
                <span>
                  Learn more
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform" data-icon="chevron_right">
                  chevron_right
                </span>
              </div>
            </div>
            <div className="p-6 rounded-[16px] frosted-card border border-outline-variant/30 flex flex-col justify-between hover:border-primary/50 transition-all group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-surface-variant text-on-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]" data-icon="account_balance">
                    account_balance
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface group-hover:text-primary transition-colors">
                  Business Accounting Software
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Invoicing, expenses and bank reconciliation unified into a single real-time ledger.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-outline-variant/20 flex items-center text-label-sm font-label-sm text-primary font-semibold">
                <span>
                  Learn more
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform" data-icon="chevron_right">
                  chevron_right
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="rounded-[20px] coral-gradient text-white p-10 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="max-w-3xl space-y-6 relative z-10">
            <h2 className="text-display-lg-mobile md:text-display-lg font-display-lg text-white font-bold leading-tight">
              Unify your charter operations with fixed-scope certainty.
            </h2>
            <p className="text-body-lg font-body-lg text-white/90 leading-relaxed">
              Connect directly with our solutions engineering team to scope your yacht fleet workflows, email integrations, and contract automation within 48 hours.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="px-6 py-3.5 rounded-[10px] bg-white text-on-primary-container font-semibold text-label-lg font-label-lg shadow-lg hover:bg-surface-container-low transition-all">
                Book an Architectural Scoping Consultation
              </button>
            </div>
            <div className="pt-6 border-t border-white/20 text-label-sm font-label-sm text-white/80 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]" data-icon="lock">
                lock
              </span>
              {' '}
              <span>
                Encrypted hosting, role-based access and regular backups. Your data always remains fully yours and exportable.
              </span>
            </div>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
