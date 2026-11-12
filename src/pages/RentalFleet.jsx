// Generated from stitch/pd_rental-management-software.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './RentalFleet.css'

export default function RentalFleet() {
  return (
    <div className="pg-rental-fleet bg-surface text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <title>{"Rental Fleet Management | Horizon Enterprise Platform"}</title>
      {' '}
      {' '}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-8 pb-16">
        <nav className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant mb-6">
          <Link to="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          {' '}
          <span className="material-symbols-outlined text-sm text-outline-variant">
            chevron_right
          </span>
          {' '}
          <a className="hover:text-primary transition-colors" href="#">
            {"Operations & Supply Chain"}
          </a>
          {' '}
          <span className="material-symbols-outlined text-sm text-outline-variant">
            chevron_right
          </span>
          {' '}
          <span className="text-on-surface font-semibold">
            Rental Fleet Management
          </span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="rounded-[6px] bg-primary/10 border border-primary/20 text-primary px-3 py-1 text-label-sm font-label-sm uppercase tracking-wider mb-4">
              {"OPERATIONS & ASSET LOGISTICS"}
            </span>
            {' '}
            <h1 className="text-display-lg font-display-lg text-on-surface tracking-tight leading-[1.1] mb-5">
              Rental Fleet Management
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-8 max-w-2xl">
              Know what is rented, what is due back, and what is actually available before promising equipment to the next customer.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-10">
              <div className="rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/80 px-3.5 py-2.5 text-label-md font-label-md text-on-surface flex items-center gap-2.5 shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  calendar_month
                </span>
                {' '}
                <span>
                  Real-Time Availability Calendar Across the Fleet
                </span>
              </div>
              <div className="rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/80 px-3.5 py-2.5 text-label-md font-label-md text-on-surface flex items-center gap-2.5 shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  account_balance_wallet
                </span>
                {' '}
                <span>
                  Flexible Deposit Handling
                </span>
              </div>
              <div className="rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/80 px-3.5 py-2.5 text-label-md font-label-md text-on-surface flex items-center gap-2.5 shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  assignment_turned_in
                </span>
                {' '}
                <span>
                  Auto-Generated Rental Contracts and Damage Waivers
                </span>
              </div>
              <div className="rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/80 px-3.5 py-2.5 text-label-md font-label-md text-on-surface flex items-center gap-2.5 shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  speed
                </span>
                {' '}
                <span>
                  Utilization Rate Tracking per Asset
                </span>
              </div>
              <div className="rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/80 px-3.5 py-2.5 text-label-md font-label-md text-on-surface flex items-center gap-2.5 shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  build
                </span>
                {' '}
                <span>
                  Maintenance Scheduling Between Rental Cycles
                </span>
              </div>
              <div className="rounded-[10px] border border-outline-variant/40 bg-surface-container-lowest/80 px-3.5 py-2.5 text-label-md font-label-md text-on-surface flex items-center gap-2.5 shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  notification_important
                </span>
                {' '}
                <span>
                  Overdue Return Tracking with Automated Late Fees
                </span>
              </div>
            </div>
            <div className="w-full pt-6 border-t border-outline-variant/30 grid grid-cols-3 gap-6">
              <div>
                <div className="text-headline-lg font-headline-lg text-primary font-bold">
                  [00%]
                </div>
                <div className="text-label-md font-label-md text-on-surface-variant mt-1">
                  Double-Booking Rate
                </div>
              </div>
              <div>
                <div className="text-headline-lg font-headline-lg text-primary font-bold">
                  [00] min
                </div>
                <div className="text-label-md font-label-md text-on-surface-variant mt-1">
                  Turnaround Check-in
                </div>
              </div>
              <div>
                <div className="text-headline-lg font-headline-lg text-primary font-bold">
                  [00+]
                </div>
                <div className="text-label-md font-label-md text-on-surface-variant mt-1">
                  Fleet Utilization Units
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 w-full" id="demo">
            <div className="rounded-[20px] bg-surface-container-lowest p-8 border border-outline-variant/30 shadow-sm relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-[3px] bg-primary" />
                {' '}
                <span className="text-label-sm font-label-sm tracking-wider uppercase text-on-surface-variant font-bold">
                  LIVE CONSULTATION
                </span>
              </div>
              <h2 className="text-headline-md font-headline-md text-on-surface mb-2">
                Book a live product demo
              </h2>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
                See how Rental Fleet Management syncs reservations, returns, and maintenance cycles in under [00] minutes.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                    Full Name
                  </label>
                  {' '}
                  <input className="w-full rounded-[10px] border border-outline-variant/50 bg-surface-container-lowest p-3 text-body-sm font-body-sm text-on-surface placeholder:text-outline-variant/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" type="text" />
                </div>
                <div>
                  <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                    Work Email
                  </label>
                  {' '}
                  <input className="w-full rounded-[10px] border border-outline-variant/50 bg-surface-container-lowest p-3 text-body-sm font-body-sm text-on-surface placeholder:text-outline-variant/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="name@company.com" type="email" />
                </div>
                <div>
                  <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                    Phone Number
                  </label>
                  {' '}
                  <input className="w-full rounded-[10px] border border-outline-variant/50 bg-surface-container-lowest p-3 text-body-sm font-body-sm text-on-surface placeholder:text-outline-variant/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="[phone]" type="tel" />
                </div>
                <div>
                  <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                    Fleet / Asset Volume
                  </label>
                  {' '}
                  <select className="w-full rounded-[10px] border border-outline-variant/50 bg-surface-container-lowest p-3 text-body-sm font-body-sm text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                    <option>
                      [00 - 00] Fleet Units
                    </option>
                    <option>
                      [50 - 150] Heavy Units
                    </option>
                    <option>
                      [150 - 500] Mixed Inventory
                    </option>
                    <option>
                      [500+] Enterprise Fleet
                    </option>
                  </select>
                </div>
                {' '}
                <button className="w-full rounded-[10px] bg-primary hover:bg-primary-container text-white font-semibold py-3.5 px-6 text-label-lg font-label-lg shadow-sm transition-all duration-200 mt-2" type="submit">
                  Request Live Demo
                </button>
                {' '}
                <div className="flex items-center justify-center gap-1.5 pt-2 text-center text-label-sm font-label-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[15px] text-tertiary">
                    lock
                  </span>
                  {' '}
                  <span>
                    Encrypted hosting, role-based access and regular backups.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="mb-10 text-center md:text-left">
          <span className="rounded-[6px] bg-tertiary/10 border border-tertiary/20 text-tertiary px-3 py-1 text-label-sm font-label-sm uppercase tracking-wider inline-block mb-3">
            {"REAL-TIME ASSET TELEMETRY & DISPATCH"}
          </span>
          {' '}
          <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
            Watch Rental Fleet Management in Action: Reservation to Inspected Return
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 rounded-[20px] bg-surface-container-lowest border border-outline-variant/30 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="relative w-full aspect-video rounded-[14px] bg-inverse-surface flex items-center justify-center overflow-hidden group">
              <img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" data-alt="A cinematic widescreen photograph capturing a sleek, modern industrial warehouse filled with heavy construction machinery and digital logistics terminals bathed in warm sunset backlight, creating a high-contrast editorial look with soft peach flares." src="/images/32eb267a1d.jpg" />
              {' '}
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-transparent to-transparent" />
              {' '}
              <button className="relative z-10 w-16 h-16 rounded-[14px] bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px] ml-1">
                  play_arrow
                </span>
              </button>
              {' '}
              <div className="absolute bottom-3 left-3 z-10 rounded-[6px] bg-inverse-surface/80 backdrop-blur-md px-2.5 py-1 text-label-sm font-label-sm text-white">
                [00]:[00] Walkthrough
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold mb-2">
                {"Automated Fleet Allocation & Conflict Prevention Engine"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Observe how the deterministic dispatch controller evaluates physical yard staging, ongoing repair cycles, and reservation overlaps in micro-seconds.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary-container border border-secondary" />
                {' '}
                Resolution: 4K Telemetry
              </span>
              {' '}
              <span>
                Audio: Technical Narration
              </span>
            </div>
          </div>
          <div className="lg:col-span-7 rounded-[20px] bg-surface-container-lowest border border-outline-variant/30 p-6 lg:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-outline-variant/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-[3px] bg-primary" />
                  {' '}
                  <span className="text-label-lg font-label-lg font-bold text-on-surface">
                    Horizon Fleet Console v4.2
                  </span>
                  {' '}
                  <span className="rounded-[6px] bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-0.5 text-label-sm font-label-sm">
                    SYNCHRONIZED
                  </span>
                </div>
                <div className="text-label-sm font-label-sm text-on-surface-variant">
                  System Time:
                  {' '}
                  <span className="font-semibold text-on-surface">
                    [00:00:00 UTC]
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
                <div className="p-3 rounded-[10px] bg-surface-container-low border border-outline-variant/20">
                  <div className="text-label-sm font-label-sm text-on-surface-variant">
                    Active Fleet
                  </div>
                  <div className="text-headline-sm font-headline-sm font-bold text-on-surface">
                    [000] Units
                  </div>
                </div>
                <div className="p-3 rounded-[10px] bg-surface-container-low border border-outline-variant/20">
                  <div className="text-label-sm font-label-sm text-on-surface-variant">
                    Checked Out
                  </div>
                  <div className="text-headline-sm font-headline-sm font-bold text-primary">
                    [00] Units
                  </div>
                </div>
                <div className="p-3 rounded-[10px] bg-surface-container-low border border-outline-variant/20">
                  <div className="text-label-sm font-label-sm text-on-surface-variant">
                    In Transit / Return
                  </div>
                  <div className="text-headline-sm font-headline-sm font-bold text-tertiary">
                    [00] Units
                  </div>
                </div>
                <div className="p-3 rounded-[10px] bg-surface-container-low border border-outline-variant/20">
                  <div className="text-label-sm font-label-sm text-on-surface-variant">
                    Scheduled Maint.
                  </div>
                  <div className="text-headline-sm font-headline-sm font-bold text-on-surface-variant">
                    [00] Units
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-[12px] bg-surface border border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-label-lg font-label-lg text-on-surface">
                        CAT 320 Excavator [Unit #FL-402]
                      </span>
                      {' '}
                      <span className="rounded-[6px] bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-0.5 text-label-sm font-label-sm">
                        {"Confirmed & Asset Assigned"}
                      </span>
                    </div>
                    <div className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                      Contract #[00000] • Operator: [Client name] • Yard Bay: #B-14
                    </div>
                  </div>
                  <div className="text-right sm:text-right text-label-sm font-label-sm text-on-surface-variant">
                    <span className="text-on-surface font-semibold">
                      Active Dispatch
                    </span>
                    {' '}
                    <div className="text-outline">
                      Due: [00/00 - 00:00]
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-[12px] bg-surface border border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-label-lg font-label-lg text-on-surface">
                        Genie S-65 Boom Lift [Unit #BL-109]
                      </span>
                      {' '}
                      <span className="rounded-[6px] bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 text-label-sm font-label-sm">
                        Under Inspection
                      </span>
                    </div>
                    <div className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                      Return Check: Diagnostic scan complete • 4 Telemetry sensors OK
                    </div>
                  </div>
                  <div className="text-right sm:text-right text-label-sm font-label-sm text-on-surface-variant">
                    <span className="text-primary font-semibold">
                      Staging Bay #3
                    </span>
                    {' '}
                    <div className="text-outline">
                      ETA Avail: [00] min
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-[12px] bg-surface border border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-label-lg font-label-lg text-on-surface">
                        Bobcat T770 Compact Loader [Unit #CL-881]
                      </span>
                      {' '}
                      <span className="rounded-[6px] bg-primary/10 text-primary px-2 py-0.5 text-label-sm font-label-sm font-bold">
                        Buffer Maintenance Active
                      </span>
                    </div>
                    <div className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                      Hydraulic Fluid Replacement • Next booking locked for tomorrow 08:00
                    </div>
                  </div>
                  <div className="text-right sm:text-right text-label-sm font-label-sm text-on-surface-variant">
                    <span className="text-on-surface font-semibold">
                      Service Bay #A
                    </span>
                    {' '}
                    <div className="text-outline">
                      Lock: 100% Protected
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-4 text-label-md font-label-md">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-on-surface-variant">
                    Fleet Utilization:
                  </span>
                  {' '}
                  <span className="font-bold text-on-surface">
                    94.2%
                  </span>
                </div>
                <div>
                  <span className="text-on-surface-variant">
                    Next Cycle Turnaround:
                  </span>
                  {' '}
                  <span className="font-bold text-primary">
                    45 min
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  verified
                </span>
                {' '}
                <span>
                  Deterministic Conflict Prevention Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-3xl mb-12">
          <span className="rounded-[6px] bg-primary/10 border border-primary/20 text-primary px-3 py-1 text-label-sm font-label-sm uppercase tracking-wider inline-block mb-3">
            THE OPERATIONAL BOTTLENECK
          </span>
          {' '}
          <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-4">
            Double-Bookings Are a Visibility Problem, Not a Demand Problem
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            When fleet status is fragmented across dispatch desks, disconnected spreadsheets, and paper clipboards, booking promises outpace physical reality. A single unrecorded delay cascades into missed handoffs, customer disputes, and hurried dispatch of uninspected machinery. Horizon replaces guesswork with a deterministic asset state machine.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[16px] bg-surface-container-lowest p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-fixed-variant mb-5">
                <span className="material-symbols-outlined text-[22px]">
                  hub
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold mb-3">
                Physical Yard Inventory Sync
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Live availability calendar directly unified with physical yard inventory and GPS telemetry. Units only display as available once physically cleared by counter personnel.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-label-sm font-label-sm text-secondary font-semibold">
              <span className="material-symbols-outlined text-[18px]">
                check_circle
              </span>
              {' '}
              <span>
                Zero phantom inventory
              </span>
            </div>
          </div>
          <div className="rounded-[16px] bg-surface-container-lowest p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed/50 flex items-center justify-center text-on-tertiary-fixed-variant mb-5">
                <span className="material-symbols-outlined text-[22px]">
                  history_edu
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold mb-3">
                End-to-End Custody Tracking
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Complete chain of custody: initial reservation, dispatch checkout with photographic condition inspection, and automated timestamped return logs tied to the serial number.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-label-sm font-label-sm text-tertiary font-semibold">
              <span className="material-symbols-outlined text-[18px]">
                check_circle
              </span>
              {' '}
              <span>
                Irrefutable damage accountability
              </span>
            </div>
          </div>
          <div className="rounded-[16px] bg-surface-container-lowest p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-primary/10 flex items-center justify-center text-primary mb-5">
                <span className="material-symbols-outlined text-[22px]">
                  engineering
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold mb-3">
                Automated Turnaround Buffers
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Automated inter-cycle maintenance buffers preventing worn machinery from dispatch without inspection. Systems auto-block the calendar for routine lube, washing, and safety runs.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-label-sm font-label-sm text-primary font-semibold">
              <span className="material-symbols-outlined text-[18px]">
                check_circle
              </span>
              {' '}
              <span>
                Proactive machine preservation
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-3xl mb-12">
          <span className="rounded-[6px] bg-primary/10 border border-primary/20 text-primary px-3 py-1 text-label-sm font-label-sm uppercase tracking-wider inline-block mb-3">
            ENGINEERED FLEET CAPABILITIES
          </span>
          {' '}
          <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-3">
            From Booking to Return, Tracked Against the Specific Asset
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Six deterministic primitives engineered to eliminate scheduling friction and protect fleet residual value.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-3">
            <div className="rounded-[16px] bg-surface-container-lowest border-2 border-primary/40 p-5 shadow-sm transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <span className="text-label-md font-label-md font-bold text-primary px-2.5 py-1 rounded-[6px] bg-primary/10">
                  01
                </span>
                {' '}
                <div>
                  <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-1">
                    Real-Time Conflict-Free Availability
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Mathematical certainty against double-booking through deterministic ledger reservations across concurrent web, phone, and counter requests.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] bg-surface-container-lowest border border-outline-variant/30 p-5 hover:border-outline-variant/60 transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <span className="text-label-md font-label-md font-bold text-on-surface-variant px-2.5 py-1 rounded-[6px] bg-surface-container">
                  02
                </span>
                {' '}
                <div>
                  <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-1">
                    {"Flexible Deposit & Pre-Authorization Engine"}
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Secure multi-tiered credit card pre-auths, automated damage hold releases, and merchant chargeback defenses tied to inspection timestamps.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] bg-surface-container-lowest border border-outline-variant/30 p-5 hover:border-outline-variant/60 transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <span className="text-label-md font-label-md font-bold text-on-surface-variant px-2.5 py-1 rounded-[6px] bg-surface-container">
                  03
                </span>
                {' '}
                <div>
                  <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-1">
                    {"Auto-Generated Rental Agreements & Digital Waivers"}
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Instantly render binding, jurisdiction-compliant digital contracts with attached equipment specs, hazard guidelines, and e-signatures.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] bg-surface-container-lowest border border-outline-variant/30 p-5 hover:border-outline-variant/60 transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <span className="text-label-md font-label-md font-bold text-on-surface-variant px-2.5 py-1 rounded-[6px] bg-surface-container">
                  04
                </span>
                {' '}
                <div>
                  <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-1">
                    {"Granular Utilization & Revenue Tracking per Asset"}
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Understand exact ROI, engine hour telemetry, and lifecycle maintenance costs per vehicle to make data-backed fleet retirement decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] bg-surface-container-lowest border border-outline-variant/30 p-5 hover:border-outline-variant/60 transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <span className="text-label-md font-label-md font-bold text-on-surface-variant px-2.5 py-1 rounded-[6px] bg-surface-container">
                  05
                </span>
                {' '}
                <div>
                  <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-1">
                    {"Inter-Cycle Maintenance & Servicing Windows"}
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Enforce mandatory safety checks, fluid top-offs, and routine yard servicing between back-to-back rentals with zero manual scheduling.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] bg-surface-container-lowest border border-outline-variant/30 p-5 hover:border-outline-variant/60 transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <span className="text-label-md font-label-md font-bold text-on-surface-variant px-2.5 py-1 rounded-[6px] bg-surface-container">
                  06
                </span>
                {' '}
                <div>
                  <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-1">
                    {"Automated Overdue Notifications & Dynamic Late Fees"}
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Continuous grace-period triggers, multi-channel SMS warnings, and automated incremental card charges when machinery fails to check in.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 sticky top-24 rounded-[20px] bg-surface-container-lowest border border-outline-variant/40 p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-[3px] bg-primary" />
                {' '}
                <span className="text-label-lg font-label-lg font-bold text-on-surface">
                  Feature 01: Conflict-Free Fleet Engine
                </span>
              </div>
              {' '}
              <span className="rounded-[6px] bg-secondary-fixed text-on-secondary-fixed-variant px-2.5 py-1 text-label-sm font-label-sm font-semibold">
                LOCK PROTOCOL ACTIVE
              </span>
            </div>
            <div className="space-y-6">
              <div className="p-4 rounded-[12px] bg-surface border border-outline-variant/20">
                <div className="text-label-sm font-label-sm text-on-surface-variant mb-1">
                  Asset Verification ID
                </div>
                <div className="font-mono text-body-sm font-body-sm text-on-surface font-semibold">
                  FLT-CAT-320X-09827-US
                </div>
              </div>
              <div className="p-4 rounded-[12px] bg-surface border border-outline-variant/20">
                <div className="text-label-sm font-label-sm text-on-surface-variant mb-1">
                  Cryptographic Booking Ledger Hash
                </div>
                <div className="font-mono text-body-sm font-body-sm text-tertiary font-medium break-all">
                  0x8f2a99c43b17e1e63a8904df4a1789b9101c039d
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-[12px] bg-surface border border-outline-variant/20">
                  <div className="text-label-sm font-label-sm text-on-surface-variant mb-1">
                    Concurrent Queries
                  </div>
                  <div className="text-headline-sm font-headline-sm font-bold text-on-surface">
                    [00] ms Latency
                  </div>
                </div>
                <div className="p-4 rounded-[12px] bg-surface border border-outline-variant/20">
                  <div className="text-label-sm font-label-sm text-on-surface-variant mb-1">
                    Double Booking Status
                  </div>
                  <div className="text-headline-sm font-headline-sm font-bold text-secondary">
                    0.00% Zero Risk
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-[12px] bg-surface-container-low border border-outline-variant/30 flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                  verified_user
                </span>
                {' '}
                <div>
                  <div className="text-label-md font-label-md font-bold text-on-surface">
                    Deterministic Mutex Lock Guaranteed
                  </div>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                    When a checkout sequence initiates, the specific asset is hardware-locked across all channels for [00] minutes while signatures and deposits process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-3xl mb-12">
          <span className="rounded-[6px] bg-primary/10 border border-primary/20 text-primary px-3 py-1 text-label-sm font-label-sm uppercase tracking-wider inline-block mb-3">
            EXECUTION WORKFLOW
          </span>
          {' '}
          <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-3">
            Four Deterministic Steps from Inquiry to Verified Yard Return
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Standardized lifecycle execution designed for busy equipment rental yards, vehicle fleets, and specialty machinery depots.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="rounded-[16px] bg-surface-container-lowest p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between relative group hover:border-primary/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-label-lg font-label-lg font-bold text-primary px-3 py-1 rounded-[6px] bg-primary/10">
                  Step 01
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline-variant text-[24px]">
                  event_available
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-3">
                {"Verify Availability & Lock Reservation"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Customer selects dates on web or counter rep inputs order. The engine validates maintenance buffers and locks the exact asset serial instantly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-on-surface-variant font-medium">
              Telemetry: Lock Confirmed
            </div>
          </div>
          <div className="rounded-[16px] bg-surface-container-lowest p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between relative group hover:border-primary/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-label-lg font-label-lg font-bold text-primary px-3 py-1 rounded-[6px] bg-primary/10">
                  Step 02
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline-variant text-[24px]">
                  checklist_rtl
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-3">
                {"Digital Checkout & Pre-Dispatch Condition"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Yard team performs tablet-based walkaround, snaps timestamped photographs, logs hour meters, and captures driver waiver signatures.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-on-surface-variant font-medium">
              Telemetry: Handover Stamped
            </div>
          </div>
          <div className="rounded-[16px] bg-surface-container-lowest p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between relative group hover:border-primary/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-label-lg font-label-lg font-bold text-primary px-3 py-1 rounded-[6px] bg-primary/10">
                  Step 03
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline-variant text-[24px]">
                  assignment_returned
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-3">
                {"Log Return & Automated Telemetry Ingestion"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Machine arrives in yard. Staff audits return condition against checkout photos, automatically calculating fuel usage, engine hours, and late fees.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-on-surface-variant font-medium">
              {"Telemetry: Ingest & Audit Complete"}
            </div>
          </div>
          <div className="rounded-[16px] bg-surface-container-lowest p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between relative group hover:border-primary/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-label-lg font-label-lg font-bold text-primary px-3 py-1 rounded-[6px] bg-primary/10">
                  Step 04
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline-variant text-[24px]">
                  published_with_changes
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-3">
                {"Continuous Asset Ledger & Maintenance"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Financial deposit is settled. Machine transitions automatically into clean/lube buffer state until technician marks ready for the next customer.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-on-surface-variant font-medium">
              Telemetry: Ready for Dispatch
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-3xl mb-12">
          <span className="rounded-[6px] bg-primary/10 border border-primary/20 text-primary px-3 py-1 text-label-sm font-label-sm uppercase tracking-wider inline-block mb-3">
            OPERATIONAL ADVANTAGE
          </span>
          {' '}
          <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-3">
            Why Leading Rental Operators Retire the Whiteboard
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Eliminate booking friction, preserve fleet residual value, and deliver transparent customer handoffs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="rounded-[16px] bg-surface-container-lowest p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-fixed-variant mb-4">
                <span className="material-symbols-outlined text-[20px]">
                  do_not_disturb_on
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-2">
                Absolute Zero Double-Bookings
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Never apologize to an arriving customer for equipment promised to someone else. System-level concurrency locks guarantee single-renter custody.
              </p>
            </div>
          </div>
          <div className="rounded-[16px] bg-surface-container-lowest p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed/50 flex items-center justify-center text-on-tertiary-fixed-variant mb-4">
                <span className="material-symbols-outlined text-[20px]">
                  health_and_safety
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-2">
                Healthier, Inspected Machinery
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Built-in mandatory maintenance intervals keep units serviced on time, dramatically lowering catastrophic field breakdowns and insurance claims.
              </p>
            </div>
          </div>
          <div className="rounded-[16px] bg-surface-container-lowest p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-[20px]">
                  timelapse
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-2">
                {"Minimized Counter & Dispatch Overhead"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Cut customer counter check-in time down to minutes with pre-signed e-waivers, saved driver credentials, and pre-authorized security deposits.
              </p>
            </div>
          </div>
          <div className="rounded-[16px] bg-surface-container-lowest p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-surface-container-highest flex items-center justify-center text-on-surface mb-4">
                <span className="material-symbols-outlined text-[20px]">
                  trending_up
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-2">
                {"Maximized Fleet Utilization & Asset Yield"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Identify slow-moving stock, adjust dynamic weekend rates, and shorten turnaround yard cycles to extract maximum annual revenue per capital dollar.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[20px] bg-surface-container-low p-8 border border-outline-variant/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  security
                </span>
                {' '}
                <h4 className="text-label-lg font-label-lg font-bold text-on-surface">
                  Enterprise-Grade Security
                </h4>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Encrypted hosting, role-based access, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  receipt_long
                </span>
                {' '}
                <h4 className="text-label-lg font-label-lg font-bold text-on-surface">
                  Transparent, Scoped Pricing
                </h4>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Every engagement is scoped individually with a fixed price and timeline agreed upfront — book a free consultation for a tailored quote.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  groups
                </span>
                {' '}
                <h4 className="text-label-lg font-label-lg font-bold text-on-surface">
                  Built for Your Whole Team
                </h4>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Role-based views mean owners, managers, and frontline staff each see exactly what they need, nothing more, nothing missing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-3xl mb-12">
          <span className="rounded-[6px] bg-primary/10 border border-primary/20 text-primary px-3 py-1 text-label-sm font-label-sm uppercase tracking-wider inline-block mb-3">
            OPERATIONAL TRANSFORMATION
          </span>
          {' '}
          <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-3">
            What Changes on Day One
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Compare manual ad-hoc yard coordination with the deterministic Horizon fleet execution core.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-[18px] bg-error-container/20 border border-error/20 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-error/20 mb-6">
                <span className="text-label-lg font-label-lg font-bold text-error">
                  The Fragile Spreadsheet Dilemma
                </span>
                {' '}
                <span className="rounded-[6px] bg-error/10 text-error px-2.5 py-1 text-label-sm font-label-sm font-semibold">
                  LEGACY
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                    close
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface">
                    A paper calendar decides what is available
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                    close
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface">
                    Two customers get promised the same unit
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                    close
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface">
                    Maintenance history lives in a mechanic's memory
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                    close
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface">
                    Every booking means a phone call to the counter
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-error/20 text-label-sm font-label-sm text-error font-medium">
              Result: Lost customer trust, damaged equipment, counter delays.
            </div>
          </div>
          <div className="rounded-[18px] bg-secondary-fixed/20 border border-secondary/30 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-secondary/30 mb-6">
                <span className="text-label-lg font-label-lg font-bold text-on-secondary-fixed-variant">
                  The Horizon Synchronized Fleet Core
                </span>
                {' '}
                <span className="rounded-[6px] bg-secondary-fixed text-on-secondary-fixed-variant px-2.5 py-1 text-label-sm font-label-sm font-semibold">
                  HORIZON SYSTEM
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    check
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface">
                    A live calendar reflects real-time asset status
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    check
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface">
                    Conflict-free booking makes double-booking impossible
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    check
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface">
                    Maintenance logged against each specific asset
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    check
                  </span>
                  {' '}
                  <p className="text-body-md font-body-md text-on-surface">
                    Customers check availability and book online themselves
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-secondary/30 text-label-sm font-label-sm text-secondary font-semibold">
              Result: 100% reservation certainty, verified returns, higher yields.
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-3xl mb-12">
          <span className="rounded-[6px] bg-primary/10 border border-primary/20 text-primary px-3 py-1 text-label-sm font-label-sm uppercase tracking-wider inline-block mb-3">
            FLEET LOGISTICS GUIDANCE
          </span>
          {' '}
          <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Technical and operational details for fleet operators considering the Horizon architecture.
          </p>
        </div>
        <div className="max-w-4xl space-y-4">
          <div className="rounded-[14px] bg-surface-container-lowest border border-outline-variant/30 p-6 shadow-sm">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="text-headline-sm font-headline-sm font-semibold text-primary">
                1. Can customers see live availability before calling us?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-primary text-[24px]">
                expand_less
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-outline-variant/20 text-body-md font-body-md text-on-surface-variant leading-relaxed">
              Yes. Horizon provides an embeddable, real-time customer booking widget for your website. It syncs directly with physical yard inventory, preventing customer reservations when an asset is currently dispatched, locked in a return inspection, or undergoing scheduled servicing. Customers see deterministic live availability slots and can complete reservations with card pre-authorization without requiring counter intervention.
            </div>
          </div>
          <div className="rounded-[14px] bg-surface-container-lowest border border-outline-variant/30 p-6 shadow-sm hover:border-outline-variant/60 transition-colors">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">
                2. How does it handle equipment that needs maintenance between rentals?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                expand_more
              </span>
            </div>
          </div>
          <div className="rounded-[14px] bg-surface-container-lowest border border-outline-variant/30 p-6 shadow-sm hover:border-outline-variant/60 transition-colors">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">
                3. Can we track rentals across multiple pickup locations?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                expand_more
              </span>
            </div>
          </div>
          <div className="rounded-[14px] bg-surface-container-lowest border border-outline-variant/30 p-6 shadow-sm hover:border-outline-variant/60 transition-colors">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">
                4. Can pricing vary by rental duration?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                expand_more
              </span>
            </div>
          </div>
          <div className="rounded-[14px] bg-surface-container-lowest border border-outline-variant/30 p-6 shadow-sm hover:border-outline-variant/60 transition-colors">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">
                5. What happens if equipment is returned late?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                expand_more
              </span>
            </div>
          </div>
          <div className="rounded-[14px] bg-surface-container-lowest border border-outline-variant/30 p-6 shadow-sm hover:border-outline-variant/60 transition-colors">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">
                6. Can we charge a deposit at the time of booking?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                expand_more
              </span>
            </div>
          </div>
          <div className="rounded-[14px] bg-surface-container-lowest border border-outline-variant/30 p-6 shadow-sm hover:border-outline-variant/60 transition-colors">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">
                7. How long does implementation typically take?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                expand_more
              </span>
            </div>
          </div>
          <div className="rounded-[14px] bg-surface-container-lowest border border-outline-variant/30 p-6 shadow-sm hover:border-outline-variant/60 transition-colors">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">
                8. Is our data secure, and who owns it?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                expand_more
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-2">
              Looking for something else?
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Browse our full lineup of productized software and autonomous AI workflows.
            </p>
          </div>
          {' '}
          <Link to="/products" className="mt-4 md:mt-0 inline-flex items-center gap-1 text-primary font-semibold text-label-lg font-label-lg hover:underline">
            Explore all [00+] product packages →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-[16px] p-6 bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between group hover:border-primary/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-[20px]">
                  inventory_2
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-2">
                Smart Inventory Control
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Automated stock count cycles, serial-tracked movement, and multi-depot replenishment triggers.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm">
              <span className="text-on-surface-variant">
                Operations
              </span>
              {' '}
              <span className="text-primary font-bold group-hover:translate-x-1 transition-transform">
                View Package →
              </span>
            </div>
          </div>
          <div className="rounded-[16px] p-6 bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between group hover:border-primary/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-fixed-variant mb-4">
                <span className="material-symbols-outlined text-[20px]">
                  garage
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-2">
                Auto Workshop Manager
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Technician bay allocation, parts requisitioning, and automated labor billing reconciliation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm">
              <span className="text-on-surface-variant">
                Service
              </span>
              {' '}
              <span className="text-primary font-bold group-hover:translate-x-1 transition-transform">
                View Package →
              </span>
            </div>
          </div>
          <div className="rounded-[16px] p-6 bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between group hover:border-primary/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed/50 flex items-center justify-center text-on-tertiary-fixed-variant mb-4">
                <span className="material-symbols-outlined text-[20px]">
                  commute
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-2">
                Field Service Management
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Dispatch routing, digital work orders, parts consumption logs, and mobile customer sign-offs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm">
              <span className="text-on-surface-variant">
                Logistics
              </span>
              {' '}
              <span className="text-primary font-bold group-hover:translate-x-1 transition-transform">
                View Package →
              </span>
            </div>
          </div>
          <div className="rounded-[16px] p-6 bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between group hover:border-primary/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-surface-container-highest flex items-center justify-center text-on-surface mb-4">
                <span className="material-symbols-outlined text-[20px]">
                  sailing
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface mb-2">
                Yacht Charter Management
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Vessel booking calendars, crew scheduling, provisioning manifests, and port compliance records.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm">
              <span className="text-on-surface-variant">
                Hospitality
              </span>
              {' '}
              <span className="text-primary font-bold group-hover:translate-x-1 transition-transform">
                View Package →
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        <div className="rounded-[24px] bg-gradient-to-r from-[#ff7555] to-[#ff8f6b] text-white p-12 lg:p-16 text-center shadow-lg relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-black/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="rounded-[6px] bg-white/20 text-white px-3 py-1 text-label-sm font-label-sm uppercase tracking-wider mb-4 backdrop-blur-sm">
              FIXED-SCOPE FLEET DEPLOYMENT
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg font-bold text-white mb-4 tracking-tight">
              Ready to manage your rental fleet with deterministic certainty?
            </h2>
            <p className="text-body-lg font-body-lg text-white/90 mb-8 max-w-xl">
              Retire double-bookings and paper ledgers today. Schedule an engineering consultation within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-6">
              <Link to="/contact" className="w-full sm:w-auto rounded-[10px] bg-white text-primary font-semibold px-6 py-3.5 text-label-lg font-label-lg shadow-sm hover:bg-surface-container-low transition-colors">
                Book an Architectural Scoping Consultation
              </Link>
              {' '}
              <a className="w-full sm:w-auto rounded-[10px] bg-white/15 border border-white/30 text-white font-medium px-6 py-3.5 text-label-lg font-label-lg hover:bg-white/25 backdrop-blur-sm transition-colors" href="#">
                Download Platform Specification
              </a>
            </div>
            <div className="text-label-sm font-label-sm text-white/80 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">
                verified
              </span>
              {' '}
              <span>
                Encrypted hosting, role-based access and regular backups.
              </span>
            </div>
          </div>
        </div>
      </section>
      {' '}
    </div>
  )
}
