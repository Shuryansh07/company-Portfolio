// Generated from stitch/pd_field-service-management.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './FieldService.css'

export default function FieldService() {
  return (
    <div className="pg-field-service bg-surface text-on-surface font-body-md antialiased subtle-mesh selection:bg-primary-fixed selection:text-on-primary-fixed">
      <title>{"Field Service Management — Horizons Enterprise Solutions"}</title>
      {' '}
      {' '}
      <main className="w-full max-w-[1600px] mx-auto px-4 md:px-8 space-y-24 md:space-y-32 pt-6 pb-20">
        <section className="space-y-8 pt-4">
          <nav className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            {' '}
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            {' '}
            <span className="hover:text-primary transition-colors">
              Field Operations
            </span>
            {' '}
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            {' '}
            <span className="text-on-surface font-medium">
              Field Service Management
            </span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary/10 border border-primary/20 text-primary text-label-sm font-label-sm tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {' '}
                FIELD OPERATIONS
              </div>
              <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface tracking-tight leading-tight">
                Field Service
                {' '}
                <br className="hidden sm:inline" />
                {' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#e05333] to-[#FF8A65]">
                  Management
                </span>
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                Coordinate dispatch, technician routing, and live work orders with zero operational friction — getting the right specialists and truck inventory on-site without manual guesswork.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 text-on-surface text-label-md font-label-md hover:border-primary/40 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    near_me
                  </span>
                  {' '}
                  <span>
                    {"Skill & Proximity Dispatch"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 text-on-surface text-label-md font-label-md hover:border-primary/40 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    event_repeat
                  </span>
                  {' '}
                  <span>
                    Recurring Maintenance Contracts
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 text-on-surface text-label-md font-label-md hover:border-primary/40 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    signal_wifi_off
                  </span>
                  {' '}
                  <span>
                    Offline-Capable Mobile App
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 text-on-surface text-label-md font-label-md hover:border-primary/40 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    fmd_good
                  </span>
                  {' '}
                  <span>
                    {"Live Fleet Telemetry & ETA"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 text-on-surface text-label-md font-label-md hover:border-primary/40 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    local_shipping
                  </span>
                  {' '}
                  <span>
                    Truck Inventory Sync
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-[10px] bg-surface-container-lowest/90 border border-outline-variant/30 text-on-surface text-label-md font-label-md hover:border-primary/40 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    receipt_long
                  </span>
                  {' '}
                  <span>
                    {"On-Site Invoicing & Payment"}
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5" id="demo">
              <div className="glass-card-elevated rounded-[20px] p-6 sm:p-8 space-y-6 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[6px] bg-secondary-container/40 text-secondary text-label-sm font-label-sm">
                    <span className="material-symbols-outlined text-[14px]">
                      bolt
                    </span>
                    {' '}
                    FAST-TRACK CONSULTATION
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                    Scope Your Deployment
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Meet with a systems architect to map your dispatch rules and fleet telematics. Fixed-fee quote delivered in 24 hours.
                  </p>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface mb-1">
                      Full Name
                    </label>
                    {' '}
                    <input className="w-full h-11 px-3.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-sm outline-none transition-all" placeholder="e.g. Jordan Mitchell" required type="text" />
                  </div>
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface mb-1">
                      Work Email
                    </label>
                    {' '}
                    <input className="w-full h-11 px-3.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-sm outline-none transition-all" placeholder="jordan@enterprise-corp.com" required type="email" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-label-sm font-label-sm text-on-surface mb-1">
                        Phone Number
                      </label>
                      {' '}
                      <input className="w-full h-11 px-3.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-sm outline-none transition-all" placeholder="Phone number" required type="text" />
                    </div>
                    <div>
                      <label className="block text-label-sm font-label-sm text-on-surface mb-1">
                        Fleet Size
                      </label>
                      {' '}
                      <select className="w-full h-11 px-3 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-sm outline-none transition-all">
                        <option>
                          10 - 25 Technicians / Vans
                        </option>
                        <option>
                          26 - 75 Technicians / Vans
                        </option>
                        <option>
                          76 - 200 Technicians / Vans
                        </option>
                        <option>
                          200+ Enterprise Fleet
                        </option>
                      </select>
                    </div>
                  </div>
                  {' '}
                  <button className="w-full h-12 primary-gradient-btn text-white text-label-md font-label-md rounded-[10px] flex items-center justify-center gap-2 mt-2 transition-transform active:scale-[0.99]" type="submit">
                    <span>
                      Request Tailored Walk-Through
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                  {' '}
                  <p className="text-center text-label-sm font-label-sm text-on-surface-variant/70 flex items-center justify-center gap-1.5 pt-1">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">
                      lock
                    </span>
                    {' '}
                    Encrypted hosting, role-based access and zero spam.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-tertiary-fixed/40 text-tertiary text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[16px]">
                sensors
              </span>
              {' '}
              REAL-TIME TELEMETRY MATRIX
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Operational Control in Real Time — See Field Service Management in Action
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Experience the high-velocity dispatch board orchestrating certified technicians, dynamic route alterations, and truck inventory reconciliations simultaneously.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-12 glass-card rounded-[20px] p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-[8px] bg-primary-container/20 text-primary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[20px]">
                      dashboard_customize
                    </span>
                  </div>
                  <div>
                    <h4 className="text-label-lg font-label-lg text-on-surface font-bold">
                      Active Dispatch Board
                    </h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Metro Service Zone A • 14 Technicians Online
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-[6px] bg-secondary-container/40 text-secondary text-label-sm font-label-sm flex items-center gap-1 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {' '}
                    SLA Safe: 99.2%
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-[10px] bg-surface-container-lowest border border-outline-variant/30 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-tertiary-container/40 text-tertiary flex items-center justify-center font-bold text-label-sm">
                        MV
                      </div>
                      <div>
                        <span className="text-label-md font-label-md text-on-surface font-bold">
                          Marcus Vance
                        </span>
                        {' '}
                        <span className="text-body-sm font-body-sm text-on-surface-variant ml-1.5">
                          — HVAC Master [Certified]
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-[6px] bg-tertiary-fixed/30 text-tertiary text-label-sm font-label-sm font-semibold">
                        98.4% Match
                      </span>
                      {' '}
                      <span className="text-label-sm font-label-sm text-on-surface-variant">
                        Proximity: 2.1 mi
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-1.5 pt-1 text-[11px] font-medium">
                    <div className="col-span-4 bg-tertiary/10 border border-tertiary/30 text-tertiary px-2 py-1.5 rounded-[6px] flex items-center justify-between">
                      <span className="truncate">
                        #HZ-9082 Chiller Repair
                      </span>
                      {' '}
                      <span className="text-[10px]">
                        09:00
                      </span>
                    </div>
                    <div className="col-span-5 bg-primary/10 border border-primary/30 text-primary px-2 py-1.5 rounded-[6px] flex items-center justify-between">
                      <span className="truncate">
                        #HZ-9104 Compressors
                      </span>
                      {' '}
                      <span className="text-[10px]">
                        11:30 [Active]
                      </span>
                    </div>
                    <div className="col-span-3 bg-surface-container border border-dashed border-outline-variant/50 text-on-surface-variant px-2 py-1.5 rounded-[6px] flex items-center justify-center">
                      <span>
                        Available 14:00
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1 text-label-sm font-label-sm border-t border-outline-variant/15 text-on-surface-variant">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        inventory_2
                      </span>
                      {' '}
                      <span>
                        Truck Stock: Refrigerant R-410A: In Stock [Van 04]
                      </span>
                    </div>
                    {' '}
                    <span className="text-primary font-semibold">
                      ETA: 14 mins
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-[10px] bg-surface-container-lowest border border-outline-variant/30 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center font-bold text-label-sm">
                        EA
                      </div>
                      <div>
                        <span className="text-label-md font-label-md text-on-surface font-bold">
                          Elena Alvarez
                        </span>
                        {' '}
                        <span className="text-body-sm font-body-sm text-on-surface-variant ml-1.5">
                          — Master Electrician [On Site - Job #HZ-9104]
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-[6px] bg-secondary-container/50 text-secondary text-label-sm font-label-sm font-semibold">
                        In Progress
                      </span>
                      {' '}
                      <span className="text-label-sm font-label-sm text-on-surface-variant">
                        SLA Timer: 00:42:10 left
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-1.5 pt-1 text-[11px] font-medium">
                    <div className="col-span-8 bg-secondary-container/30 border border-secondary/30 text-secondary px-2 py-1.5 rounded-[6px] flex items-center justify-between">
                      <span className="truncate">
                        #HZ-9104 High Voltage Substation Diagnostic
                      </span>
                      {' '}
                      <span className="text-[10px]">
                        On Site (35m elapsed)
                      </span>
                    </div>
                    <div className="col-span-4 bg-surface-container border border-outline-variant/40 text-on-surface-variant px-2 py-1.5 rounded-[6px] flex items-center justify-center">
                      <span>
                        Next: #HZ-9118 Scheduled
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1 text-label-sm font-label-sm border-t border-outline-variant/15 text-on-surface-variant">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        check_circle
                      </span>
                      {' '}
                      <span>
                        Safety SOP Protocol Verified • Digital Multimeter Calibrated
                      </span>
                    </div>
                    {' '}
                    <span className="text-secondary font-semibold">
                      Battery: 92% • GPS Locked
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-[10px] bg-surface-container-low flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    verified
                  </span>
                  {' '}
                  Algorithmic dispatch suggestions refresh continuously every 30 seconds.
                </span>
                {' '}
                <span className="text-label-sm font-label-sm text-primary font-semibold hover:underline cursor-pointer">
                  Re-run Optimizer
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[16px]">
                warning
              </span>
              {' '}
              THE OPERATIONAL BOTTLENECK
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Manual Dispatch and Disconnected Inboxes Stagger Field Velocity
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Field service breaks down when dispatchers juggle spreadsheets, phone calls, and group chats to guess technician availability. Horizons replaces guesswork with deterministic skill matching and live proximity tracking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-[16px] p-6 space-y-4 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-[10px] bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  view_timeline
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Drag-and-drop scheduling on a live Gantt view
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Reassign technicians with instant drag-and-drop actions. The dispatch canvas verifies shift boundaries, drive times, and certifications before locking the schedule.
              </p>
              <div className="flex items-center gap-2 text-label-sm font-label-sm text-secondary font-semibold pt-2">
                <span className="material-symbols-outlined text-[16px]">
                  check_circle
                </span>
                {' '}
                <span>
                  Eliminates scheduling overlaps
                </span>
              </div>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-4 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-[10px] bg-tertiary/10 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  traffic
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                {"Live map view showing fleet locations & traffic-aware ETAs in real time"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Telematics integration displays actual vehicle positions, routing around sudden highway bottlenecks and notifying property owners automatically.
              </p>
              <div className="flex items-center gap-2 text-label-sm font-label-sm text-secondary font-semibold pt-2">
                <span className="material-symbols-outlined text-[16px]">
                  check_circle
                </span>
                {' '}
                <span>
                  Cuts deadhead miles
                </span>
              </div>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-4 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-[10px] bg-secondary-container/40 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  payments
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                End-to-end work order tracking from initial request to instant automated billing
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Customer signatures in the field instantly reconcile work orders, deduct parts from van inventory, and generate ledger-ready invoices in ERP.
              </p>
              <div className="flex items-center gap-2 text-label-sm font-label-sm text-secondary font-semibold pt-2">
                <span className="material-symbols-outlined text-[16px]">
                  check_circle
                </span>
                {' '}
                <span>
                  Zero end-of-week paper backlogs
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-secondary-container/40 text-secondary text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[16px]">
                precision_manufacturing
              </span>
              {' '}
              ENGINEERED CAPABILITIES
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              From First Customer Call to Closed Work Order: Six Core Primitives
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">
              Purpose-built operational automation that transitions dispatch teams from reactive fire-fighting to predictable execution.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="p-5 rounded-[10px] bg-primary/10 border-2 border-primary text-on-surface flex items-start gap-4 transition-all cursor-pointer">
                <span className="text-headline-sm font-headline-sm font-bold text-primary">
                  01
                </span>
                {' '}
                <div className="space-y-1">
                  <h4 className="text-label-lg font-label-lg font-bold text-on-surface">
                    {"Skill- & Proximity-Based Dispatch"}
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Deterministic heuristic matches job technical codes against valid licenses and active GPS coordinates.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/30 text-on-surface flex items-start gap-4 hover:border-primary/40 transition-all cursor-pointer">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant/60">
                  02
                </span>
                {' '}
                <div className="space-y-1">
                  <h4 className="text-label-lg font-label-lg font-bold text-on-surface">
                    Recurring Work Orders for Maintenance Contracts
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Automated preventive schedules tied directly to customer service level agreements and seasonal checkups.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/30 text-on-surface flex items-start gap-4 hover:border-primary/40 transition-all cursor-pointer">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant/60">
                  03
                </span>
                {' '}
                <div className="space-y-1">
                  <h4 className="text-label-lg font-label-lg font-bold text-on-surface">
                    Offline-Capable Mobile Technician App
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Local SQLite database ensures technicians access wiring diagrams and log job tasks in basements without signal.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/30 text-on-surface flex items-start gap-4 hover:border-primary/40 transition-all cursor-pointer">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant/60">
                  04
                </span>
                {' '}
                <div className="space-y-1">
                  <h4 className="text-label-lg font-label-lg font-bold text-on-surface">
                    {"Live Location Tracking & Automated Customer ETA"}
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Branded SMS notification with live Uber-style technician transit map eliminates "where are you?" phone calls.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/30 text-on-surface flex items-start gap-4 hover:border-primary/40 transition-all cursor-pointer">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant/60">
                  05
                </span>
                {' '}
                <div className="space-y-1">
                  <h4 className="text-label-lg font-label-lg font-bold text-on-surface">
                    Truck Stock Tied Directly to Work Orders
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Barcode scan consumption deducts van inventory and automatically queues warehouse restock orders.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/30 text-on-surface flex items-start gap-4 hover:border-primary/40 transition-all cursor-pointer">
                <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant/60">
                  06
                </span>
                {' '}
                <div className="space-y-1">
                  <h4 className="text-label-lg font-label-lg font-bold text-on-surface">
                    {"On-Site Invoicing & Multi-Gateway Payment Capture"}
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Collect customer signature, card-present tap, or generate ACH payment link right in the technician's mobile workflow.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 glass-card-elevated rounded-[20px] p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                <div>
                  <span className="text-label-sm font-label-sm text-primary font-bold tracking-wider">
                    FEATURE 01 DEEP DIVE
                  </span>
                  {' '}
                  <h3 className="text-headline-md font-headline-md text-on-surface font-bold">
                    Automated Dispatch Routing Engine
                  </h3>
                </div>
                {' '}
                <span className="px-3 py-1 rounded-[6px] bg-tertiary-fixed/40 text-tertiary text-label-sm font-label-sm font-semibold">
                  Live Evaluation
                </span>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant">
                When a work order enters the queue, Horizons executes a real-time multi-variable scoring model that cross-references required mechanical licenses against technician location, truck inventory, and customer SLA tolerances.
              </p>
              <div className="p-5 rounded-[10px] bg-surface-container-low border border-outline-variant/30 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-label-md font-label-md font-bold text-on-surface">
                    Target Work Order #HZ-9104 (Compressor Overhaul)
                  </span>
                  {' '}
                  <span className="text-label-sm font-label-sm text-secondary font-semibold">
                    Priority: Emergency 30 min
                  </span>
                </div>
                <div className="space-y-2.5">
                  <div>
                    <div className="flex justify-between text-body-sm font-body-sm mb-1">
                      <span className="text-on-surface">
                        EPA Section 608 Universal Certification
                      </span>
                      {' '}
                      <span className="text-secondary font-semibold">
                        Verified Active (Exp. 2027)
                      </span>
                    </div>
                    <div className="w-full bg-outline-variant/30 h-2 rounded-[4px] overflow-hidden">
                      <div className="bg-secondary h-full w-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-body-sm font-body-sm mb-1">
                      <span className="text-on-surface">
                        {"Proximity & Live Traffic Transit"}
                      </span>
                      {' '}
                      <span className="text-primary font-semibold">
                        4.2 mi / 14 min ETA
                      </span>
                    </div>
                    <div className="w-full bg-outline-variant/30 h-2 rounded-[4px] overflow-hidden">
                      <div className="bg-primary h-full w-[92%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-body-sm font-body-sm mb-1">
                      <span className="text-on-surface">
                        Van Inventory Kit Match (Refrigerant + Flange Seals)
                      </span>
                      {' '}
                      <span className="text-tertiary font-semibold">
                        100% On-Board
                      </span>
                    </div>
                    <div className="w-full bg-outline-variant/30 h-2 rounded-[4px] overflow-hidden">
                      <div className="bg-tertiary h-full w-full" />
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-[8px] bg-surface-container-lowest flex items-center justify-between text-label-sm font-label-sm">
                  <span className="text-on-surface-variant">
                    Algorithmic Confidence Score:
                  </span>
                  {' '}
                  <span className="text-headline-sm font-headline-sm font-bold text-primary">
                    96% Optimal Match
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-label-sm font-label-sm text-on-surface font-semibold">
                  Live Audit Telemetry Log
                </span>
                {' '}
                <div className="p-3 rounded-[8px] bg-inverse-surface text-inverse-on-surface font-mono text-[12px] space-y-1">
                  <div className="text-white/60">
                    14:02:11 Engine evaluated 18 active field units in zone.
                  </div>
                  <div className="text-secondary-fixed">
                    14:02:12 Filtered 12 units lacking Universal HVAC certification.
                  </div>
                  <div className="text-tertiary-fixed">
                    14:02:12 Marcus Vance selected: Lowest deadhead miles + stock verified.
                  </div>
                  <div className="text-white/90">
                    14:02:13 Auto-dispatched. Mobile push token acknowledged by Van #04.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[16px]">
                account_tree
              </span>
              {' '}
              EXECUTION WORKFLOW
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Four Steps From Service Intake to Ledger Settlement
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              A seamless digital thread ensuring dispatchers, field engineers, and billing controllers operate off one immutable record.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="glass-card rounded-[16px] p-6 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-primary text-white flex items-center justify-center font-bold text-label-lg">
                  01
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Log Service Request
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Intake via API, email, or customer portal, parsed into structured work orders with required skill profiles and SLA timer.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  inbox
                </span>
                {' '}
                <span>
                  Omnichannel Parsing
                </span>
              </div>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-label-lg">
                  02
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  {"Dispatch by Skill & Location"}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Algorithmic recommendation instantly assigns nearest qualified technician with confirmed truck parts and minimal transit delay.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-tertiary text-[16px]">
                  route
                </span>
                {' '}
                <span>
                  Intelligent Clustering
                </span>
              </div>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-label-lg">
                  03
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Update Status from Field
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Mobile app with offline caching guides turn-by-turn navigation, digital diagnostic checklist, and customer sign-off.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  phonelink_ring
                </span>
                {' '}
                <span>
                  Zero-Signal Offline Cache
                </span>
              </div>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-label-lg">
                  04
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Bill Automatically
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Completed checklist triggers cryptographic audit trail, updates ERP inventory, and generates instant client invoice.
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  receipt_long
                </span>
                {' '}
                <span>
                  Instant AR Ledger Sync
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-tertiary-fixed/40 text-tertiary text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[16px]">
                trending_up
              </span>
              {' '}
              BUSINESS IMPACT
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Why High-Volume Field Teams Retire the Whiteboard
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">
              Engineered for operational durability. Eliminate customer wait-window grievances and bridge the gap between dispatch dispatchers and financial reconciliations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-[16px] p-6 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  task_alt
                </span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Higher First-Time Fix Rates
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Right skills, verified schematics, and correct van stock ensure jobs resolve on the first truck roll without expensive secondary visits.
              </p>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-secondary-container/40 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  directions_car
                </span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Less Windshield Time
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Dynamic proximity clustering minimizes deadhead miles and slashes wasted transit hours across morning peak traffic congestion.
              </p>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed/50 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  visibility
                </span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Real-Time Operational Visibility
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Every work order stage, delay, and customer verification tracked in a unified live control plane for complete management governance.
              </p>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  speed
                </span>
              </div>
              <h4 className="text-headline-sm font-headline-sm text-on-surface">
                Faster Billing Cycles
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Instant digital sign-off and parts logging feed straight to accounting without waiting for end-of-week paperwork.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-[14px] bg-surface-container-low border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-label-md font-label-md font-bold text-on-surface">
                <span className="material-symbols-outlined text-tertiary text-[20px]">
                  verified_user
                </span>
                {' '}
                <span>
                  Enterprise-Grade Security
                </span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Encrypted hosting, role-based access control, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
              </p>
            </div>
            <div className="p-6 rounded-[14px] bg-surface-container-low border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-label-md font-label-md font-bold text-on-surface">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  price_change
                </span>
                {' '}
                <span>
                  Transparent, Scoped Pricing
                </span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Every engagement is scoped individually with a fixed price and timeline agreed upfront — book a free consultation for a tailored quote.
              </p>
            </div>
            <div className="p-6 rounded-[14px] bg-surface-container-low border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-label-md font-label-md font-bold text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  groups
                </span>
                {' '}
                <span>
                  Built for Your Whole Team
                </span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Role-based views mean owners, dispatch managers, and field technicians each see exactly what they need, nothing more, nothing missing.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[16px]">
                sync_alt
              </span>
              {' '}
              OPERATIONAL TRANSFORMATION
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              What Changes on Day One
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Compare legacy manual dispatch bottlenecks with the continuous synchronization delivered by Horizons.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[20px] bg-surface-container-high/60 border border-outline-variant/40 p-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-[8px] bg-error-container text-error flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[18px]">
                      close
                    </span>
                  </span>
                  {' '}
                  <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                    The Fragmented Dispatch Model
                  </h3>
                </div>
                {' '}
                <span className="text-label-sm font-label-sm text-error font-semibold uppercase tracking-wider">
                  Before
                </span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5 shrink-0">
                    do_not_disturb_on
                  </span>
                  {' '}
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Dispatch matched jobs to techs on a whiteboard with zero live status, causing uncoordinated double-bookings.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5 shrink-0">
                    do_not_disturb_on
                  </span>
                  {' '}
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Techs sent to distant jobs without checking traffic or proximity, wasting fuel and inflating windshield idle hours.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5 shrink-0">
                    do_not_disturb_on
                  </span>
                  {' '}
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Office waits until end of day or week for handwritten paperwork, creating inventory discrepancies and lost billables.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5 shrink-0">
                    do_not_disturb_on
                  </span>
                  {' '}
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Billing stalls for days while invoices are manually compiled, severely dampening enterprise cash flow.
                  </p>
                </li>
              </ul>
            </div>
            <div className="glass-card-elevated rounded-[20px] border-2 border-primary/30 p-8 space-y-6 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-[8px] bg-secondary-container text-secondary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[18px]">
                      check
                    </span>
                  </span>
                  {' '}
                  <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                    The Horizons Synchronized Engine
                  </h3>
                </div>
                {' '}
                <span className="text-label-sm font-label-sm text-secondary font-semibold uppercase tracking-wider">
                  After
                </span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  {' '}
                  <p className="text-body-sm font-body-sm text-on-surface">
                    Drag-and-drop dispatch on a live Gantt view with real-time technician telemetry and SLA violation pre-warnings.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  {' '}
                  <p className="text-body-sm font-body-sm text-on-surface">
                    Jobs automatically matched by verified skill certifications and GPS distance to trim deadhead transit.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  {' '}
                  <p className="text-body-sm font-body-sm text-on-surface">
                    Technicians update checklist, photos, and customer sign-off live from the field even without cell reception.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  {' '}
                  <p className="text-body-sm font-body-sm text-on-surface">
                    Completed work orders flow immediately into accounts receivable and ledger sync without human re-entry.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[16px]">
                help
              </span>
              {' '}
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Everything You Need to Know About Deployment
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Clear, deterministic answers regarding offline caching, technical integrations, and data ownership policies.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="glass-card rounded-[14px] p-6 space-y-3 border-2 border-primary/20">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                  Can technicians work offline in areas with poor signal?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-primary text-[24px]">
                  expand_less
                </span>
              </div>
              <div className="pt-2 text-body-md font-body-md text-on-surface-variant leading-relaxed border-t border-outline-variant/20">
                <p>
                  Yes. The Horizons Mobile Client utilizes an embedded local SQLite data store with complete offline-first capability. When a field engineer enters a basement, elevator shaft, or remote industrial facility without cell reception, they retain full access to equipment blueprints, procedural SOP checklists, diagnostic forms, and parts catalogs.
                </p>
                <p className="mt-2">
                  All timestamps, photo uploads, and customer sign-offs are queued locally with cryptographic signatures. The instant cellular or Wi-Fi connectivity is re-established, Horizons triggers an asynchronous background sync with deterministic conflict resolution, preventing data loss or overwrites.
                </p>
              </div>
            </div>
            <div className="glass-card rounded-[14px] p-6 space-y-3">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                  How does it decide which technician to recommend for a job?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                  expand_more
                </span>
              </div>
              <div className="hidden pt-2 text-body-md font-body-md text-on-surface-variant leading-relaxed border-t border-outline-variant/20">
                The Horizons dispatch engine applies a multi-constraint heuristic scoring algorithm. It examines verified licensing codes (e.g. Master Electrician, HVAC Universal), current turn-by-turn driving distance via live telematics, scheduled shift constraints, and confirmed on-board van spare parts. The highest scoring candidate is surfaced to dispatchers with an audit explanation.
              </div>
            </div>
            <div className="glass-card rounded-[14px] p-6 space-y-3">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                  Can customers see when a technician is on the way?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                  expand_more
                </span>
              </div>
              <div className="hidden pt-2 text-body-md font-body-md text-on-surface-variant leading-relaxed border-t border-outline-variant/20">
                Yes. When a technician departs their previous site and clicks "In Transit," customers receive an automated SMS or email containing a secure tracking portal link. This link displays the assigned specialist’s photo, vehicle description, and a real-time ETA countdown without exposing private dispatcher channels.
              </div>
            </div>
            <div className="glass-card rounded-[14px] p-6 space-y-3">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                  Can customers book their own appointments?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                  expand_more
                </span>
              </div>
              <div className="hidden pt-2 text-body-md font-body-md text-on-surface-variant leading-relaxed border-t border-outline-variant/20">
                Yes. Horizons includes an embeddable customer booking widget that respects your capacity rules, regional routing boundaries, and lead-time constraints. It only offers time slots that match technician availability within the client’s geographic cluster.
              </div>
            </div>
            <div className="glass-card rounded-[14px] p-6 space-y-3">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                  How is parts inventory handled for service vans?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                  expand_more
                </span>
              </div>
              <div className="hidden pt-2 text-body-md font-body-md text-on-surface-variant leading-relaxed border-t border-outline-variant/20">
                Each van operates as a mobile warehouse location inside Horizons' inventory ledger. Technicians scan barcodes on installed replacement components directly via the phone camera. Consumed parts automatically debit van balance and trigger warehouse replenishment pick-lists when stock dips below safety thresholds.
              </div>
            </div>
            <div className="glass-card rounded-[14px] p-6 space-y-3">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                  Can we track technician certifications and expiry dates?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                  expand_more
                </span>
              </div>
              <div className="hidden pt-2 text-body-md font-body-md text-on-surface-variant leading-relaxed border-t border-outline-variant/20">
                Yes. The platform stores compliance profiles for every field personnel member. The engine alerts management 60 and 30 days prior to license expirations and automatically locks technicians from receiving regulated assignments if their required permits lapse.
              </div>
            </div>
            <div className="glass-card rounded-[14px] p-6 space-y-3">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                  How long does implementation typically take?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                  expand_more
                </span>
              </div>
              <div className="hidden pt-2 text-body-md font-body-md text-on-surface-variant leading-relaxed border-t border-outline-variant/20">
                Because Horizons uses fixed-scope engagement modules with pre-engineered ERP connectors, standard deployments for 15 to 100 technicians conclude within a few weeks, including fleet data imports and dispatcher training simulations.
              </div>
            </div>
            <div className="glass-card rounded-[14px] p-6 space-y-3">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                  Is our data secure, and who owns it?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                  expand_more
                </span>
              </div>
              <div className="hidden pt-2 text-body-md font-body-md text-on-surface-variant leading-relaxed border-t border-outline-variant/20">
                You retain 100% legal ownership of all operational, customer, and telemetry records. All databases are encrypted at rest (AES-256) and in transit (TLS 1.3) with encrypted hosting, role-based access control, and regular automated snapshots. Data exports are available anytime via standard JSON or SQL dumps without lock-in penalties.
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-secondary-container/40 text-secondary text-label-sm font-label-sm">
                <span className="material-symbols-outlined text-[16px]">
                  grid_view
                </span>
                {' '}
                UNIFIED PLATFORM
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface">
                More from the Horizons Ecosystem
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Connect Field Service Management to complementary enterprise modules for end-to-end synchronization.
              </p>
            </div>
            {' '}
            <Link to="/products" className="text-primary font-semibold text-label-lg hover:underline inline-flex items-center gap-1.5 shrink-0">
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
            <div className="glass-card rounded-[16px] p-6 space-y-4 flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">
                    inventory
                  </span>
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm">
                  SUPPLY CHAIN
                </div>
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Smart Inventory Control
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Know exactly what's on your shelves, in your trucks, and on order — down to the unit.
                </p>
              </div>
              {' '}
              <Link to="/products/inventory-control" className="text-primary font-semibold text-label-sm inline-flex items-center gap-1 pt-2 hover:underline">
                <span>
                  Explore Product
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-4 flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed/40 text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">
                    psychology
                  </span>
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-[6px] bg-tertiary-fixed/30 text-tertiary text-label-sm font-label-sm">
                  AI ASSISTANT
                </div>
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  AI QC Agent
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Centralized installation knowledge, schematic validation, and SOP lookup on your technician's phone.
                </p>
              </div>
              {' '}
              <Link to="/products/ai-qc-agent" className="text-primary font-semibold text-label-sm inline-flex items-center gap-1 pt-2 hover:underline">
                <span>
                  Explore Product
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-4 flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-secondary-container/40 text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">
                    build
                  </span>
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-[6px] bg-secondary-container/40 text-secondary text-label-sm font-label-sm">
                  OPERATIONS
                </div>
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Auto Workshop Manager
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Turn every walk-in, phone booking, and diagnostic request into a trackable job card.
                </p>
              </div>
              {' '}
              <Link to="/products/auto-workshop-manager" className="text-primary font-semibold text-label-sm inline-flex items-center gap-1 pt-2 hover:underline">
                <span>
                  Explore Product
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="glass-card rounded-[16px] p-6 space-y-4 flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">
                    support_agent
                  </span>
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm">
                  CUSTOMER CARE
                </div>
                <h4 className="text-headline-sm font-headline-sm text-on-surface">
                  Customer Support Ticketing
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Omnichannel support queue with automated SLA timers and field dispatch escalations.
                </p>
              </div>
              {' '}
              <Link to="/products/support-ticketing" className="text-primary font-semibold text-label-sm inline-flex items-center gap-1 pt-2 hover:underline">
                <span>
                  Explore Product
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="rounded-[20px] bg-gradient-to-br from-surface-container-low via-surface-container-lowest to-primary-fixed/20 border border-outline-variant/30 p-8 md:p-14 text-center relative overflow-hidden shadow-lg">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[16px]">
                verified
              </span>
              {' '}
              SCOPED ARCHITECTURAL SPRINT
            </div>
            <h2 className="text-display-lg-mobile md:text-headline-lg font-headline-lg text-on-surface font-bold">
              Ready to eliminate dispatch friction with fixed-scope certainty?
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Book an engineering consultation today. We review your current dispatch workflows and deliver a fixed-fee architecture plan within 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link to="/contact" className="primary-gradient-btn text-white text-label-lg font-label-lg px-8 py-3.5 rounded-[10px] transition-all transform active:scale-[0.99] inline-flex items-center gap-2">
                <span>
                  Book an Architectural Scoping Consultation
                </span>
                {' '}
                <span className="material-symbols-outlined text-[18px]">
                  calendar_today
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
