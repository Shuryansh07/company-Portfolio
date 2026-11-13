// Generated from stitch/pd_ai-travel-agent.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './AiTravelAgent.css'

export default function AiTravelAgent() {
  return (
    <div className="pg-ai-travel-agent bg-background text-on-surface font-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden min-h-screen flex flex-col justify-between">
      <title>{"AI Travel Agent — Horizons Enterprise AI"}</title>
      {' '}
      {' '}
      <main className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-6 space-y-24">
        <section className="pt-4 pb-8">
          <nav className="flex items-center gap-2.5 text-label-md font-label-md text-on-surface-variant mb-6">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            {' '}
            <span className="material-symbols-outlined text-[14px] text-outline">
              chevron_right
            </span>
            {' '}
            <a className="hover:text-primary transition-colors" href="#">
              Autonomous AI Agents
            </a>
            {' '}
            <span className="material-symbols-outlined text-[14px] text-outline">
              chevron_right
            </span>
            {' '}
            <span className="text-on-surface font-semibold">
              AI Travel Agent
            </span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-[6px] text-primary text-label-sm font-label-sm tracking-wide">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {' '}
                <span>
                  AUTONOMOUS TRAVEL WORKER
                </span>
              </div>
              <h1 className="text-display-lg font-display-lg text-on-surface leading-[1.08] tracking-tight">
                AI Travel Agent —
                {' '}
                <span className="text-primary italic font-normal">
                  Intelligent business travel
                </span>
                {' '}
                automation: hotels, flights, and cars booked to your policy.
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                AI Travel Agent reads CRM trip triggers, automatically evaluates flight and hotel itineraries against corporate travel policy, and books end-to-end without manual back-and-forth.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="px-3.5 py-1.5 rounded-[10px] bg-surface-container-low border border-outline-variant/40 text-on-surface-variant text-label-md font-label-md flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    hotel
                  </span>
                  {' '}
                  AI-powered hotel discovery
                </span>
                {' '}
                <span className="px-3.5 py-1.5 rounded-[10px] bg-surface-container-low border border-outline-variant/40 text-on-surface-variant text-label-md font-label-md flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    verified_user
                  </span>
                  {' '}
                  Policy-aware booking
                </span>
                {' '}
                <span className="px-3.5 py-1.5 rounded-[10px] bg-surface-container-low border border-outline-variant/40 text-on-surface-variant text-label-md font-label-md flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    meeting_room
                  </span>
                  {' '}
                  Intelligent room selection
                </span>
                {' '}
                <span className="px-3.5 py-1.5 rounded-[10px] bg-surface-container-low border border-outline-variant/40 text-on-surface-variant text-label-md font-label-md flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    flight_takeoff
                  </span>
                  {' '}
                  Flight booking built in
                </span>
                {' '}
                <span className="px-3.5 py-1.5 rounded-[10px] bg-surface-container-low border border-outline-variant/40 text-on-surface-variant text-label-md font-label-md flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    directions_car
                  </span>
                  {' '}
                  Car rental to match the trip
                </span>
                {' '}
                <span className="px-3.5 py-1.5 rounded-[10px] bg-surface-container-low border border-outline-variant/40 text-on-surface-variant text-label-md font-label-md flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    sync_alt
                  </span>
                  {' '}
                  CRM-connected from end to end
                </span>
              </div>
            </div>
            <div className="lg:col-span-5" id="demo-form">
              <div className="glass-panel-elevated p-8 rounded-[20px] relative overflow-hidden border border-outline-variant/40">
                <div className="absolute top-0 right-0 w-44 h-44 bg-primary/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />
                <div className="relative z-10 space-y-2 mb-6">
                  <div className="inline-block px-2.5 py-1 bg-secondary-container/50 border border-secondary/20 rounded-[6px] text-secondary text-label-sm font-label-sm">
                    FAST-TRACK PILOT PROGRAM
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-surface">
                    Book a free demo
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    See how AI Travel Agent automates enterprise business itineraries.
                  </p>
                </div>
                <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1.5">
                      Full Name
                    </label>
                    {' '}
                    <input className="w-full px-4 py-2.5 bg-surface-container-lowest/90 border border-outline-variant/50 rounded-[10px] text-body-md text-on-surface placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Sarah Jenkins" type="text" />
                  </div>
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1.5">
                      Work Email
                    </label>
                    {' '}
                    <input className="w-full px-4 py-2.5 bg-surface-container-lowest/90 border border-outline-variant/50 rounded-[10px] text-body-md text-on-surface placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="sarah.jenkins@enterprise.com" type="email" />
                  </div>
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1.5">
                      Direct Phone
                    </label>
                    {' '}
                    <input className="w-full px-4 py-2.5 bg-surface-container-lowest/90 border border-outline-variant/50 rounded-[10px] text-body-md text-on-surface placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Phone number" type="tel" />
                  </div>
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1.5">
                      Fleet / Team Size
                    </label>
                    {' '}
                    <select className="w-full px-4 py-2.5 bg-surface-container-lowest/90 border border-outline-variant/50 rounded-[10px] text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                      <option>
                        10 - 25 Frequent Flyers
                      </option>
                      <option>
                        26 - 100 Frequent Flyers
                      </option>
                      <option>
                        100+ Enterprise Mobility
                      </option>
                    </select>
                  </div>
                  <div className="pt-2">
                    <button className="w-full coral-gradient-btn text-on-primary py-3.5 rounded-[10px] font-label-lg text-label-lg flex items-center justify-center gap-2" type="submit">
                      <span>
                        Request 15-Min Live Demo
                      </span>
                      {' '}
                      <span className="material-symbols-outlined text-[18px]">
                        calendar_today
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-center text-label-sm font-label-sm text-on-surface-variant/80 pt-1">
                    <span className="material-symbols-outlined text-[14px] text-secondary">
                      verified
                    </span>
                    {' '}
                    <span>
                      Guaranteed turnaround within 48 business hours • No spam
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-tertiary/10 border border-tertiary/20 rounded-[6px] text-tertiary text-label-sm font-label-sm mb-3">
              <span className="material-symbols-outlined text-[14px]">
                radar
              </span>
              {' '}
              <span>
                {"FIELD TELEMETRY & FLIGHT RADAR"}
              </span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              See the Travel Agent on the job
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Simulated walkthrough of a multi-city enterprise trip booked end-to-end from deal close to car rental handover.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-12 glass-panel rounded-[20px] p-6 border border-outline-variant/40 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-outline-variant/30">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-label-lg font-label-lg font-bold text-on-surface">
                      Trip #TR-8821 :: SFO → LHR Executive Briefing
                    </span>
                    {' '}
                    <span className="px-2 py-0.5 rounded-[6px] bg-secondary-container text-on-secondary-container text-label-sm font-label-sm">
                      Auto-Locked
                    </span>
                  </div>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Traveller:
                    {' '}
                    <strong className="text-on-surface font-semibold">
                      Marcus Vance
                    </strong>
                    {' '}
                    (VP Engineering) • Trigger:
                    {' '}
                    <span className="italic">
                      Closed Won: Tier 1 Expansion
                    </span>
                  </p>
                </div>
                {' '}
                <span className="text-label-sm font-mono text-outline">
                  [Ref: #TR-8821-X9]
                </span>
              </div>
              <div className="p-4 rounded-[10px] bg-surface-container-low border border-outline-variant/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-label-sm font-label-sm font-bold text-on-surface uppercase tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      gavel
                    </span>
                    {' '}
                    Policy Rules Applied (Tier-A Executive)
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-secondary-container text-secondary text-label-sm font-label-sm font-bold">
                    100% Policy Match
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-label-sm font-label-sm text-on-surface-variant">
                  <div>
                    Cap:
                    {' '}
                    <strong className="text-on-surface">
                      $350/nt
                    </strong>
                    {' '}
                    (Booked: $310)
                  </div>
                  <div>
                    Alliance:
                    {' '}
                    <strong className="text-on-surface">
                      OneWorld
                    </strong>
                  </div>
                  <div>
                    Cabin:
                    {' '}
                    <strong className="text-on-surface">
                      Business
                    </strong>
                    {' '}
                    {"(>6h flight)"}
                  </div>
                </div>
              </div>
              <div className="p-3.5 rounded-[10px] bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[8px] bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      airlines
                    </span>
                  </div>
                  <div>
                    <div className="text-label-md font-label-md font-semibold text-on-surface">
                      British Airways BA #284
                    </div>
                    <div className="text-body-sm font-body-sm text-on-surface-variant">
                      SFO Depart 16:30 → LHR Arrive 10:45 (+1) • Seat 4A
                    </div>
                  </div>
                </div>
                {' '}
                <span className="text-label-sm font-label-sm px-2.5 py-1 rounded-[6px] bg-secondary-container text-secondary font-medium">
                  Synced to ERP
                </span>
              </div>
              <div className="p-3.5 rounded-[10px] bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[8px] bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      apartment
                    </span>
                  </div>
                  <div>
                    <div className="text-label-md font-label-md font-semibold text-on-surface">
                      The Bloomsbury London ★ 4.8
                    </div>
                    <div className="text-body-sm font-body-sm text-on-surface-variant">
                      0.4 mi from client HQ • $310/night • Quiet High Floor
                    </div>
                  </div>
                </div>
                {' '}
                <span className="text-label-sm font-label-sm px-2.5 py-1 rounded-[6px] bg-secondary-container text-secondary font-medium">
                  Direct Corporate Tier
                </span>
              </div>
              <div className="p-3.5 rounded-[10px] bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[8px] bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      electric_car
                    </span>
                  </div>
                  <div>
                    <div className="text-label-md font-label-md font-semibold text-on-surface">
                      Hertz EV Sedan (Polestar 2)
                    </div>
                    <div className="text-body-sm font-body-sm text-on-surface-variant">
                      Pickup LHR T5 @ 11:30 • Wheels-down ready
                    </div>
                  </div>
                </div>
                {' '}
                <span className="text-label-sm font-label-sm px-2.5 py-1 rounded-[6px] bg-secondary-container text-secondary font-medium">
                  Digital Key Ready
                </span>
              </div>
              <div className="p-2.5 rounded-[6px] bg-surface-container-low border border-outline-variant/30 flex items-center justify-between text-label-sm font-mono text-on-surface-variant">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">
                    lock
                  </span>
                  {' '}
                  <span>
                    Cryptographically verified booking hash: SHA256:7f8e...33b9
                  </span>
                </div>
                {' '}
                <span className="text-secondary font-semibold">
                  Zero-Human Touch
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-error-container/40 border border-error/20 rounded-[6px] text-primary text-label-sm font-label-sm mb-3">
              <span className="material-symbols-outlined text-[14px]">
                warning
              </span>
              {' '}
              <span>
                THE OPERATIONAL BOTTLENECK
              </span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Built for teams who book travel every week
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant mt-3">
              Business travel booking means checking policy limits, comparing dozens of hotels and flights, and filling in the same forms by hand. AI Travel Agent reads your CRM trip details, searches hotels, flights and car rental against your company's booking policy, and books the best eligible option automatically.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-[20px] border border-outline-variant/40 space-y-4 hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 rounded-[10px] bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  hub
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                CRM Connected
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Connects to your CRM so trip dates, destinations and traveller details are already filled in without human intervention.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-[20px] border border-outline-variant/40 space-y-4 hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 rounded-[10px] bg-secondary-container text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  verified
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Rule Enforcement
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Applies your company's budget, rating and location rules to every search, stopping rogue expense variances before checkout.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-[20px] border border-outline-variant/40 space-y-4 hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  auto_awesome
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Autonomous Booking
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Books hotels, flights and car rental end-to-end, without a human in the loop, routing all invoices straight to central finance.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-[6px] text-primary text-label-sm font-label-sm mb-3">
              <span className="material-symbols-outlined text-[14px]">
                tune
              </span>
              {' '}
              <span>
                PRECISION ITINERARY SUITE
              </span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Everything your desk does, automated
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              From trip trigger to booked itinerary, without the back-and-forth.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-3">
              <div className="p-5 rounded-[14px] bg-surface-container-lowest border-2 border-primary shadow-sm space-y-2 relative transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-label-md font-mono text-primary font-bold">
                      01.
                    </span>
                    {' '}
                    <h4 className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                      AI-Powered Hotel Discovery
                    </h4>
                  </div>
                  {' '}
                  <span className="px-2 py-0.5 rounded-[6px] bg-primary/10 text-primary text-label-sm font-label-sm font-medium">
                    Inspecting Matrix
                  </span>
                </div>
                <p className="text-body-md font-body-md text-on-surface-variant pl-7">
                  Searches hotels against your budget, rating and location rules, and ranks every eligible option automatically based on client distance and comfort indexes.
                </p>
              </div>
              <div className="p-4 rounded-[14px] bg-surface-container-low/60 hover:bg-surface-container-lowest border border-outline-variant/30 space-y-1 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-label-md font-mono text-outline font-bold">
                    02.
                  </span>
                  {' '}
                  <h4 className="text-label-lg font-label-lg text-on-surface font-semibold">
                    Policy-Aware Booking Engine
                  </h4>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant pl-7">
                  Instant ground-truth compliance checking stopping rogue expense reports before checkout.
                </p>
              </div>
              <div className="p-4 rounded-[14px] bg-surface-container-low/60 hover:bg-surface-container-lowest border border-outline-variant/30 space-y-1 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-label-md font-mono text-outline font-bold">
                    03.
                  </span>
                  {' '}
                  <h4 className="text-label-lg font-label-lg text-on-surface font-semibold">
                    Intelligent Room Selection
                  </h4>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant pl-7">
                  Curates optimal rooms near meeting coordinates with automated quiet-floor preferences and high-speed Wi-Fi ratings.
                </p>
              </div>
              <div className="p-4 rounded-[14px] bg-surface-container-low/60 hover:bg-surface-container-lowest border border-outline-variant/30 space-y-1 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-label-md font-mono text-outline font-bold">
                    04.
                  </span>
                  {' '}
                  <h4 className="text-label-lg font-label-lg text-on-surface font-semibold">
                    Flight Booking Built-In
                  </h4>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant pl-7">
                  Synchronizes direct multi-carrier routes with calendar agendas and preferred cabin rules without manual search.
                </p>
              </div>
              <div className="p-4 rounded-[14px] bg-surface-container-low/60 hover:bg-surface-container-lowest border border-outline-variant/30 space-y-1 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-label-md font-mono text-outline font-bold">
                    05.
                  </span>
                  {' '}
                  <h4 className="text-label-lg font-label-lg text-on-surface font-semibold">
                    Destination Car Rental Sync
                  </h4>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant pl-7">
                  Coordinates terminal pickup and seamless drop-off aligned with flight wheels-down times and location coordinates.
                </p>
              </div>
              <div className="p-4 rounded-[14px] bg-surface-container-low/60 hover:bg-surface-container-lowest border border-outline-variant/30 space-y-1 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-label-md font-mono text-outline font-bold">
                    06.
                  </span>
                  {' '}
                  <h4 className="text-label-lg font-label-lg text-on-surface font-semibold">
                    CRM-Connected Telemetry
                  </h4>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant pl-7">
                  Listens to deal milestones or on-site schedules to trigger itineraries with zero manual data entry.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 glass-panel rounded-[20px] p-6 border border-outline-variant/40 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                <div>
                  <span className="text-label-sm font-label-sm font-bold text-primary uppercase tracking-wide">
                    Feature 01 Deep-Dive
                  </span>
                  {' '}
                  <h4 className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                    Live Hotel Scoring Matrix
                  </h4>
                </div>
                {' '}
                <span className="px-2.5 py-1 bg-surface-container rounded-[6px] text-label-sm font-mono font-medium">
                  32 Options Filtered
                </span>
              </div>
              <div className="space-y-3">
                <div className="p-3.5 bg-surface-container-lowest rounded-[10px] border border-primary/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-[4px] bg-primary text-on-primary text-label-sm font-bold flex items-center justify-center">
                        1
                      </span>
                      {' '}
                      <span className="text-label-md font-label-md font-bold text-on-surface">
                        The Bloomsbury
                      </span>
                    </div>
                    {' '}
                    <span className="text-label-sm font-bold text-secondary">
                      Match: 99.4%
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-label-sm font-label-sm text-on-surface-variant pt-1 border-t border-outline-variant/20">
                    <span>
                      Dist: 0.4 mi
                    </span>
                    {' '}
                    <span>
                      $310 / nt
                    </span>
                    {' '}
                    <span className="text-right">
                      Policy: Approved
                    </span>
                  </div>
                </div>
                <div className="p-3.5 bg-surface-container-lowest/70 rounded-[10px] border border-outline-variant/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-[4px] bg-surface-container text-on-surface text-label-sm font-bold flex items-center justify-center">
                        2
                      </span>
                      {' '}
                      <span className="text-label-md font-label-md font-semibold text-on-surface">
                        Kimpton Fitzroy
                      </span>
                    </div>
                    {' '}
                    <span className="text-label-sm font-medium text-on-surface-variant">
                      Match: 94.1%
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-label-sm font-label-sm text-on-surface-variant pt-1 border-t border-outline-variant/20">
                    <span>
                      Dist: 0.8 mi
                    </span>
                    {' '}
                    <span>
                      $340 / nt
                    </span>
                    {' '}
                    <span className="text-right">
                      Policy: Approved
                    </span>
                  </div>
                </div>
                <div className="p-3.5 bg-surface-container-lowest/50 rounded-[10px] border border-outline-variant/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-[4px] bg-surface-container text-on-surface text-label-sm font-bold flex items-center justify-center">
                        3
                      </span>
                      {' '}
                      <span className="text-label-md font-label-md font-semibold text-on-surface">
                        The Marylebone
                      </span>
                    </div>
                    {' '}
                    <span className="text-label-sm font-medium text-on-surface-variant">
                      Match: 88.0%
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-label-sm font-label-sm text-on-surface-variant pt-1 border-t border-outline-variant/20">
                    <span>
                      Dist: 1.4 mi
                    </span>
                    {' '}
                    <span>
                      $345 / nt
                    </span>
                    {' '}
                    <span className="text-right">
                      Policy: Approved
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-[10px] bg-surface-container-low border border-outline-variant/30 space-y-2">
                <div className="flex items-center justify-between text-label-sm font-label-sm">
                  <span className="font-bold text-on-surface">
                    Automated Ledger Voucher Generated
                  </span>
                  {' '}
                  <span className="text-secondary font-mono">
                    #INV-2025-8821
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Direct billing token dispatched to central finance via ERP webhook with automatic cost center attribution [GL-6020].
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container/50 border border-secondary/20 rounded-[6px] text-secondary text-label-sm font-label-sm mb-3">
              <span className="material-symbols-outlined text-[14px]">
                account_tree
              </span>
              {' '}
              <span>
                WORKFLOW ARCHITECTURE
              </span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              From trip trigger to booked itinerary
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Four steps, almost all of them automatic.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="glass-panel p-6 rounded-[20px] border border-outline-variant/40 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-headline-md font-mono font-bold text-primary">
                    01
                  </span>
                  {' '}
                  <span className="w-8 h-8 rounded-[8px] bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">
                      bolt
                    </span>
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Trip is triggered
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  A new trip request in your CRM kicks off the AI Travel Agent, with dates, destination and traveller details already attached.
                </p>
              </div>
              <div className="pt-2 text-label-sm font-label-sm text-primary font-semibold flex items-center gap-1">
                <span>
                  Payload synced
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-[20px] border border-outline-variant/40 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-headline-md font-mono font-bold text-on-surface">
                    02
                  </span>
                  {' '}
                  <span className="w-8 h-8 rounded-[8px] bg-secondary-container text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">
                      travel_explore
                    </span>
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Hotels are found and ranked
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  The agent searches hotels against your booking policy and ranks every eligible option by rating, distance and price.
                </p>
              </div>
              <div className="pt-2 text-label-sm font-label-sm text-secondary font-semibold flex items-center gap-1">
                <span>
                  Policy checked
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-[20px] border border-outline-variant/40 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-headline-md font-mono font-bold text-on-surface">
                    03
                  </span>
                  {' '}
                  <span className="w-8 h-8 rounded-[8px] bg-tertiary-fixed text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">
                      airplane_ticket
                    </span>
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Flight and room booked
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  The agent selects the best available room and books a matching flight, strictly within your travel policy rules.
                </p>
              </div>
              <div className="pt-2 text-label-sm font-label-sm text-tertiary font-semibold flex items-center gap-1">
                <span>
                  Direct booking locked
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-[20px] border border-outline-variant/40 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-headline-md font-mono font-bold text-on-surface">
                    04
                  </span>
                  {' '}
                  <span className="w-8 h-8 rounded-[8px] bg-surface-container text-on-surface flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">
                      car_rental
                    </span>
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Car rental is added
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  A rental car is booked at the destination airport for the trip dates, completing the itinerary automatically.
                </p>
              </div>
              <div className="pt-2 text-label-sm font-label-sm text-on-surface font-semibold flex items-center gap-1">
                <span>
                  Itinerary delivered
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  check
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-[6px] text-primary text-label-sm font-label-sm mb-3">
              <span className="material-symbols-outlined text-[14px]">
                trending_up
              </span>
              {' '}
              <span>
                OPERATIONAL IMPACT
              </span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Why use AI Travel Agent
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Less manual booking, fewer policy exceptions, and a clear view of every trip.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-8 rounded-[20px] border border-outline-variant/40 space-y-3">
              <div className="w-12 h-12 rounded-[10px] bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  hourglass_top
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface">
                Hours back every week
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                No more manually comparing hotels and flights across tabs for every trip. Travel coordinators and executives recapture hundreds of operational hours every quarter.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-[20px] border border-outline-variant/40 space-y-3">
              <div className="w-12 h-12 rounded-[10px] bg-secondary-container text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  format_image_left
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface">
                Policy followed every time
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Budget, rating and location rules are applied automatically, so exceptions and rogue out-of-policy expenses stop happening by accident.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-[20px] border border-outline-variant/40 space-y-3">
              <div className="w-12 h-12 rounded-[10px] bg-tertiary-fixed text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  dataset
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface">
                One workflow, every trip
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Hotels, flights and car rental are booked together, from the same trip trigger, eliminating fragmented reservation sheets and lost itineraries.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-[20px] border border-outline-variant/40 space-y-3">
              <div className="w-12 h-12 rounded-[10px] bg-surface-container text-on-surface flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  sync_saved_locally
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface">
                Nothing typed twice
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Trip and traveller details come straight from your CRM into every booking, ending typo headaches, misspelled names, and mismatched loyalty numbers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-outline-variant/30">
            <div className="p-4 rounded-[10px] bg-surface-container-low border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-label-md font-label-md font-bold text-on-surface">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  lock
                </span>
                {' '}
                <span>
                  Enterprise-grade security
                </span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Encrypted hosting, role-based access control, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
              </p>
            </div>
            <div className="p-4 rounded-[10px] bg-surface-container-low border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-label-md font-label-md font-bold text-on-surface">
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  payments
                </span>
                {' '}
                <span>
                  Transparent, scoped pricing
                </span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Every engagement is scoped individually with a fixed price and timeline agreed upfront — book a free consultation for a tailored quote.
              </p>
            </div>
            <div className="p-4 rounded-[10px] bg-surface-container-low border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-label-md font-label-md font-bold text-on-surface">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  groups
                </span>
                {' '}
                <span>
                  Built for the whole team
                </span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Role-based views mean owners, managers, and frontline staff each see exactly what they need, nothing more, nothing missing.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-high border border-outline-variant/40 rounded-[6px] text-on-surface-variant text-label-sm font-label-sm mb-3">
              <span className="material-symbols-outlined text-[14px]">
                compare_arrows
              </span>
              {' '}
              <span>
                OPERATIONAL CONTRAST
              </span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              The difference in the travel desk
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="p-8 rounded-[20px] bg-surface-container-low/70 border border-outline-variant/50 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                <h3 className="text-headline-sm font-headline-sm text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-error">
                    cancel
                  </span>
                  {' '}
                  <span>
                    Without AI Travel Agent
                  </span>
                </h3>
                {' '}
                <span className="text-label-sm font-label-sm text-outline">
                  Traditional Overhead
                </span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Someone manually searches hotels and flights across multiple consumer sites and OTAs.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Booking policy is applied by memory, and exceptions slip through to expense reports.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Trip and traveller details are retyped into every booking form by hand.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                    close
                  </span>
                  {' '}
                  <span>
                    Hotels, flights and cars are booked separately, on different days with disjointed billing.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-[20px] glass-panel-elevated border-2 border-secondary/40 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                <h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    With AI Travel Agent
                  </span>
                </h3>
                {' '}
                <span className="px-2.5 py-0.5 rounded-[6px] bg-secondary-container text-secondary text-label-sm font-label-sm font-bold">
                  Standard of Care
                </span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Hotels and flights are searched and ranked automatically against your corporate policy.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Budget, rating and location rules are applied to every booking automatically before commit.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Trip details come straight from the CRM into every booking with zero data entry.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    check
                  </span>
                  {' '}
                  <span>
                    Hotels, flights and car rental are booked together, in one unified workflow.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-[6px] text-primary text-label-sm font-label-sm mb-3">
              <span className="material-symbols-outlined text-[14px]">
                help
              </span>
              {' '}
              <span>
                ENTERPRISE INQUIRIES
              </span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Frequently Asked Questions
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Clear answers regarding travel policy enforcement, CRM integrations, and data autonomy.
            </p>
          </div>
          <div className="space-y-3" id="faq-container">
            <div className="faq-item glass-panel rounded-[14px] border border-outline-variant/40 overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-headline-sm font-headline-sm text-on-surface focus:outline-none">
                <span>
                  Which CRMs does it connect to?
                </span>
                {' '}
                <span className="material-symbols-outlined faq-icon text-primary transition-transform duration-200 rotate-180">
                  expand_more
                </span>
              </button>
              {' '}
              <div className="faq-answer px-5 pb-5 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 pt-3">
                AI Travel Agent integrates out-of-the-box with Salesforce, HubSpot, Zoho, and Microsoft Dynamics, as well as proprietary enterprise ERPs via authenticated webhooks. When an opportunity reaches a designated deal stage (e.g., 'On-Site Technical Review') or a trip object is created, traveller coordinates, loyalty profile IDs, and project cost-centers sync immediately with sub-second latency.
              </div>
            </div>
            <div className="faq-item glass-panel rounded-[14px] border border-outline-variant/40 overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-headline-sm font-headline-sm text-on-surface focus:outline-none">
                <span>
                  Can it book flights and hotels together?
                </span>
                {' '}
                <span className="material-symbols-outlined faq-icon text-outline transition-transform duration-200">
                  expand_more
                </span>
              </button>
              {' '}
              <div className="faq-answer hidden px-5 pb-5 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 pt-3">
                Yes. Flights, hotels, and airport ground transport are synchronized in a single booking session. The agent ensures the flight arrival time matches hotel check-in availability and reserves the car rental precisely when wheels touch down at the destination terminal.
              </div>
            </div>
            <div className="faq-item glass-panel rounded-[14px] border border-outline-variant/40 overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-headline-sm font-headline-sm text-on-surface focus:outline-none">
                <span>
                  How does it enforce our travel policy?
                </span>
                {' '}
                <span className="material-symbols-outlined faq-icon text-outline transition-transform duration-200">
                  expand_more
                </span>
              </button>
              {' '}
              <div className="faq-answer hidden px-5 pb-5 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 pt-3">
                Your policy parameters (nightly rate caps by city tier, minimum hotel star ratings, cabin class by flight duration, and preferred alliances) are codified during deployment. The agent will never present or book an option that violates these rules without generating an automated manager escalation.
              </div>
            </div>
            <div className="faq-item glass-panel rounded-[14px] border border-outline-variant/40 overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-headline-sm font-headline-sm text-on-surface focus:outline-none">
                <span>
                  What happens if no hotel matches our policy?
                </span>
                {' '}
                <span className="material-symbols-outlined faq-icon text-outline transition-transform duration-200">
                  expand_more
                </span>
              </button>
              {' '}
              <div className="faq-answer hidden px-5 pb-5 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 pt-3">
                If high-demand events cause rates to exceed standard caps, the agent isolates the top 3 closest options and sends an instant 1-click Slack or email approval request to the traveller's designated manager showing market surge telemetry.
              </div>
            </div>
            <div className="faq-item glass-panel rounded-[14px] border border-outline-variant/40 overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-headline-sm font-headline-sm text-on-surface focus:outline-none">
                <span>
                  Does it book for international trips?
                </span>
                {' '}
                <span className="material-symbols-outlined faq-icon text-outline transition-transform duration-200">
                  expand_more
                </span>
              </button>
              {' '}
              <div className="faq-answer hidden px-5 pb-5 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 pt-3">
                Yes, the platform operates globally across multi-currency ledgers, handling passport expiration validation, corporate tax registration requirements, and local destination regulations seamlessly.
              </div>
            </div>
            <div className="faq-item glass-panel rounded-[14px] border border-outline-variant/40 overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-headline-sm font-headline-sm text-on-surface focus:outline-none">
                <span>
                  Can we review bookings before they're confirmed?
                </span>
                {' '}
                <span className="material-symbols-outlined faq-icon text-outline transition-transform duration-200">
                  expand_more
                </span>
              </button>
              {' '}
              <div className="faq-answer hidden px-5 pb-5 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 pt-3">
                Yes. You can toggle between Full Autonomous Mode (where bookings execute instantly upon CRM trigger) and Review Gate Mode (where itineraries are staged and require a 1-tap confirmation from the traveller).
              </div>
            </div>
            <div className="faq-item glass-panel rounded-[14px] border border-outline-variant/40 overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-headline-sm font-headline-sm text-on-surface focus:outline-none">
                <span>
                  How long does implementation typically take?
                </span>
                {' '}
                <span className="material-symbols-outlined faq-icon text-outline transition-transform duration-200">
                  expand_more
                </span>
              </button>
              {' '}
              <div className="faq-answer hidden px-5 pb-5 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 pt-3">
                Standard deployments with existing Salesforce or HubSpot instances require minimal engineering time. We configure your travel policy rules, connect your billing vouchers, and test live dummy runs within a few business days.
              </div>
            </div>
            <div className="faq-item glass-panel rounded-[14px] border border-outline-variant/40 overflow-hidden">
              <button className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-headline-sm font-headline-sm text-on-surface focus:outline-none">
                <span>
                  Is our data secure, and who owns it?
                </span>
                {' '}
                <span className="material-symbols-outlined faq-icon text-outline transition-transform duration-200">
                  expand_more
                </span>
              </button>
              {' '}
              <div className="faq-answer hidden px-5 pb-5 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 pt-3">
                Your enterprise data is protected by encrypted hosting, role-based access control, and regular cryptographic backups. Your traveller profiles and enterprise booking data remain 100% yours, exportable at any time, with zero vendor lock-in.
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-[6px] text-primary text-label-sm font-label-sm mb-3">
                <span className="material-symbols-outlined text-[14px]">
                  grid_view
                </span>
                {' '}
                <span>
                  ENTERPRISE ARCHITECTURE SUITE
                </span>
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface">
                More from the Horizons ecosystem
              </h2>
            </div>
            {' '}
            <Link to="/products" className="text-primary font-semibold text-label-lg font-label-lg hover:underline flex items-center gap-1">
              Explore all product packages →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-[20px] border border-outline-variant/40 flex flex-col justify-between space-y-4 hover:border-primary/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">
                    sailing
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Yacht Charter Management
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Every charter, from the first enquiry to the last owner payout, in one place.
                </p>
              </div>
              {' '}
              <Link to="/products" className="inline-flex items-center gap-1 text-label-md font-label-md text-primary font-semibold hover:underline pt-2">
                View Package
                {' '}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="glass-panel p-6 rounded-[20px] border border-outline-variant/40 flex flex-col justify-between space-y-4 hover:border-primary/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-surface-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">
                    inventory_2
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Smart Inventory Control
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Know exactly what's on your shelves, in your trucks, and on order — down to the unit, across every warehouse you run.
                </p>
              </div>
              {' '}
              <Link to="/products" className="inline-flex items-center gap-1 text-label-md font-label-md text-secondary font-semibold hover:underline pt-2">
                View Package
                {' '}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="glass-panel p-6 rounded-[20px] border border-outline-variant/40 flex flex-col justify-between space-y-4 hover:border-primary/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-surface-container flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">
                    verified
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  AI QC Agent
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Centralised installation knowledge, on your technician's phone.
                </p>
              </div>
              {' '}
              <Link to="/products" className="inline-flex items-center gap-1 text-label-md font-label-md text-tertiary font-semibold hover:underline pt-2">
                View Package
                {' '}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="glass-panel p-6 rounded-[20px] border border-outline-variant/40 flex flex-col justify-between space-y-4 hover:border-primary/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">
                    warehouse
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Warehouse Operations Platform
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Turn a warehouse floor into a system your pickers, packers and managers can actually see and trust.
                </p>
              </div>
              {' '}
              <Link to="/products" className="inline-flex items-center gap-1 text-label-md font-label-md text-primary font-semibold hover:underline pt-2">
                View Package
                {' '}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="space-y-8 pb-12">
          <div className="rounded-[24px] bg-gradient-to-r from-primary-container via-[#FF8A65] to-primary p-10 md:p-14 text-white relative overflow-hidden shadow-lg shadow-primary/20">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-[6px] text-label-sm font-label-sm uppercase tracking-wider font-semibold">
                Enterprise Deployment Program
              </div>
              <h2 className="text-display-lg-mobile md:text-headline-lg font-headline-lg font-bold leading-tight">
                Ready to automate corporate travel with fixed-scope certainty?
              </h2>
              <p className="text-body-lg font-body-lg text-white/90">
                Join enterprise operations teams eliminating manual travel overhead. Book an architectural scoping consultation with our deployment engineers.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/contact" className="px-6 py-3.5 bg-surface-container-lowest text-primary font-semibold rounded-[10px] hover:bg-white transition-all shadow-sm text-label-lg font-label-lg">
                  Book an Architectural Scoping Consultation
                </Link>
              </div>
            </div>
          </div>
          <div className="glass-panel p-8 md:p-10 rounded-[20px] border border-outline-variant/40 max-w-4xl mx-auto space-y-6" id="quick-consult">
            <div className="text-center space-y-2">
              <h3 className="text-headline-md font-headline-md text-on-surface">
                Book an initial scoping consultation
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                We'll review your travel frequency, CRM setup, and policy rules to structure a fixed-fee pilot.
              </p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">
                  Your Name
                </label>
                {' '}
                <input className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-[10px] text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Alex Morgan" type="text" />
              </div>
              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">
                  Corporate Email
                </label>
                {' '}
                <input className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-[10px] text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="alex@company.com" type="email" />
              </div>
              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">
                  Traveler Scope
                </label>
                {' '}
                <select className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-[10px] text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                  <option>
                    10 - 50 travelers
                  </option>
                  <option>
                    50 - 200 travelers
                  </option>
                  <option>
                    200+ enterprise
                  </option>
                </select>
              </div>
              <div className="md:col-span-3 pt-2">
                <button className="w-full coral-gradient-btn text-on-primary py-3.5 rounded-[10px] font-label-lg text-label-lg flex items-center justify-center gap-2" type="submit">
                  <span>
                    Submit Scoping Request
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">
                    send
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      {' '}
      {' '}
    </div>
  )
}
