// Generated from stitch/pd_customer-ticketing-software.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './SupportTicketing.css'

export default function SupportTicketing() {
  return (
    <div className="pg-support-ticketing bg-background text-on-surface antialiased relative selection:bg-primary-fixed selection:text-on-primary-fixed -mt-20">
      <title>{"Customer Support Ticketing | Horizon Platform"}</title>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-[950px] ambient-glow pointer-events-none -z-10" />
      <div className="absolute top-[1800px] right-0 w-[600px] h-[600px] bg-emerald-100/30 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-[3200px] left-0 w-[700px] h-[700px] bg-orange-100/25 blur-[140px] pointer-events-none -z-10 rounded-full" />
      {' '}
      {' '}
      <main className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 pb-24 space-y-28">
        <section className="relative pt-6">
          <nav className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant mb-6">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            {' '}
            <span className="text-outline-variant">
              /
            </span>
            {' '}
            <a className="hover:text-primary transition-colors" href="#">
              Customer Support
            </a>
            {' '}
            <span className="text-outline-variant">
              /
            </span>
            {' '}
            <span className="text-on-surface font-semibold">
              Customer Support Ticketing
            </span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 border border-cyan-200 text-tertiary font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                {' '}
                CUSTOMER SUPPORT
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg font-bold text-on-surface tracking-tight">
                Customer Support Ticketing
              </h1>
              <p className="font-body-lg text-body-lg font-medium text-primary leading-relaxed">
                Every customer question lands in one queue, gets an owner, and never slips through the cracks.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                High-velocity omnichannel routing, automated SLA enforcement, and unified agent workspaces built for enterprise reliability. Consolidate email, live chat, voice transcripts, and API tickets with complete context.
              </p>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 bg-surface-container-lowest/90 border border-outline-variant/30 rounded-[10px] shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl" data-icon="inbox">
                    inbox
                  </span>
                  {' '}
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Omnichannel Ticket Unification
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface-container-lowest/90 border border-outline-variant/30 rounded-[10px] shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl" data-icon="timer">
                    timer
                  </span>
                  {' '}
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    SLA Policies with Automatic Escalation
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface-container-lowest/90 border border-outline-variant/30 rounded-[10px] shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl" data-icon="account_tree">
                    account_tree
                  </span>
                  {' '}
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Process Blueprints for Multi-Step Tickets
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface-container-lowest/90 border border-outline-variant/30 rounded-[10px] shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl" data-icon="bolt">
                    bolt
                  </span>
                  {' '}
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Macros for Repetitive Resolution
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface-container-lowest/90 border border-outline-variant/30 rounded-[10px] shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl" data-icon="menu_book">
                    menu_book
                  </span>
                  {' '}
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Self-Service Knowledge Base with Deflection Tracking
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface-container-lowest/90 border border-outline-variant/30 rounded-[10px] shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl" data-icon="star_rate">
                    star_rate
                  </span>
                  {' '}
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Post-Resolution CSAT Tied to Agent Performance
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="neo-glass rounded-2xl p-8 border border-white/80 shadow-xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <div className="mb-6">
                  <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                    Book a live product demo
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    See how Horizon unifies ticket queues and eliminates SLA breaches.
                  </p>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5">
                      Full Name
                    </label>
                    {' '}
                    <input className="w-full h-12 px-4 rounded-[10px] bg-white/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface font-body-sm transition-all" type="text" defaultValue="Marcus Vance" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5">
                      Work Email
                    </label>
                    {' '}
                    <input className="w-full h-12 px-4 rounded-[10px] bg-white/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface font-body-sm transition-all" type="email" defaultValue="m.vance@telecomupfitters.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5">
                        Phone
                      </label>
                      {' '}
                      <input className="w-full h-12 px-4 rounded-[10px] bg-white/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface font-body-sm transition-all" type="text" defaultValue="9026139959" />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5">
                        Team / Volume
                      </label>
                      {' '}
                      <input className="w-full h-12 px-3 rounded-[10px] bg-white/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 text-on-surface font-body-sm transition-all" type="text" defaultValue="10 - 25 Agents / 500+ Tickets/Day" />
                    </div>
                  </div>
                  {' '}
                  <button className="w-full py-3.5 px-6 rounded-[10px] primary-gradient-btn text-white font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 mt-2 transition-all" type="submit">
                    <span>
                      Request Live Demo
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-lg" data-icon="arrow_forward">
                      arrow_forward
                    </span>
                  </button>
                </form>
                <div className="mt-5 pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-secondary text-base" data-icon="verified_user">
                    verified_user
                  </span>
                  {' '}
                  <span>
                    {"Guaranteed turnaround within 48 hours • Encrypted hosting & role-based access"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 border border-emerald-200 text-secondary font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
              FIELD EXPERIENCE
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
              See Customer Support Ticketing in action
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
              Engineered for high-volume queues, multi-tier SLAs, and zero dropped customer communications.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
            <div className="xl:col-span-12 neo-glass rounded-2xl p-6 border border-white/80 shadow-xl flex flex-col justify-between">
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-outline-variant/30 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  {' '}
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider ml-2">
                    Ticket #HZ-84920
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-red-100 text-primary border border-red-200 rounded-[6px] font-label-sm text-label-sm font-bold">
                    Urgent Priority
                  </span>
                  {' '}
                  <span className="px-2.5 py-1 bg-cyan-100 text-tertiary border border-cyan-200 rounded-[6px] font-label-sm text-label-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm" data-icon="mail">
                      mail
                    </span>
                    {' '}
                    Email Inbound
                  </span>
                  {' '}
                  <span className="px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-[6px] font-label-sm text-label-sm font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm" data-icon="schedule">
                      schedule
                    </span>
                    {' '}
                    SLA: 00:14:28 remaining
                  </span>
                </div>
              </div>
              <div className="py-5 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      API Webhook Failure on Tier-1 Merchant
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Customer:
                      {' '}
                      <span className="font-semibold text-on-surface">
                        Stripe Ingestion Gateway
                      </span>
                      {' '}
                      • Account:
                      {' '}
                      <span className="font-semibold text-on-surface">
                        Global FinCorp
                      </span>
                      {' '}
                      • Tier:
                      {' '}
                      <span className="font-semibold text-primary">
                        Enterprise Platinum
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-orange-100 border border-primary/30 flex items-center justify-center font-bold text-primary text-xs">
                      EA
                    </div>
                    <div className="text-right">
                      <p className="font-label-sm text-label-sm font-bold text-on-surface">
                        Elena Alvarez
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Tier-3 Lead Agent
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-surface-container-low rounded-[10px] border border-outline-variant/30 text-on-surface font-body-sm leading-relaxed">
                  <div className="flex items-center justify-between text-xs text-on-surface-variant mb-2">
                    <span className="font-bold text-on-surface">
                      Inbound from: devops@fin-corp.global
                    </span>
                    {' '}
                    <span>
                      4 mins ago
                    </span>
                  </div>
                  {' '}
                  "Our checkout callback hooks returned 502 Bad Gateway during high-volume batch processing at 14:02 UTC. We need immediate confirmation if the queue retry broker is persisting event payloads."
                </div>
                <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-[10px] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary" data-icon="auto_awesome">
                      auto_awesome
                    </span>
                    {' '}
                    <div>
                      <p className="font-label-md text-label-md font-bold text-secondary">
                        Suggested Macro: API Webhook Heartbeat Status
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Payload verification doc + live broker health link ready for 1-click dispatch
                      </p>
                    </div>
                  </div>
                  {' '}
                  <button className="px-4 py-2 bg-secondary text-white font-label-sm text-label-sm font-bold rounded-[10px] shadow-sm hover:opacity-90 transition">
                    Apply Macro
                  </button>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-3 text-xs text-on-surface-variant">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {' '}
                    Channel Synced
                  </span>
                  {' '}
                  <span>
                    CRM Record: Connected
                  </span>
                  {' '}
                  <span>
                    Audit Hash: #09f4-verified
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 bg-surface-container border border-outline-variant/40 rounded-[10px] font-label-sm text-label-sm font-semibold hover:bg-white transition">
                    Reassign
                  </button>
                  {' '}
                  <button className="px-4 py-1.5 primary-gradient-btn text-white rounded-[10px] font-label-sm text-label-sm font-bold">
                    {"Reply & Close Ticket"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="neo-glass rounded-2xl p-8 md:p-12 border border-white/80 shadow-lg">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-orange-50 border border-orange-200 text-primary font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
              THE OPERATIONAL BOTTLENECK
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
              Support fails when requests live in five different places.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              When email, chat, phone, and social messages arrive in siloed tools, critical requests inevitably get lost, context disappears, and customers wait days for simple resolutions. Horizon consolidates all communication into a single deterministic queue, enforces binding SLA timers so nothing stalls, and embeds automated knowledge bases so your team never answers the same question twice.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 bg-surface-container-lowest/80 border border-outline-variant/30 rounded-[10px] shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl" data-icon="hub">
                    hub
                  </span>
                </div>
                <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                  Every support channel unified into one ticket queue
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Zero fragmentation. Email threads, live chats, and SMS convert into structured tickets with persistent context.
                </p>
              </div>
              <div className="p-5 bg-surface-container-lowest/80 border border-outline-variant/30 rounded-[10px] shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-secondary/10 text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl" data-icon="alarm_on">
                    alarm_on
                  </span>
                </div>
                <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                  SLA timers with automatic escalation on overdue tickets
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Guaranteed reaction velocity. Escalation trees notify supervisors automatically before breaches occur.
                </p>
              </div>
              <div className="p-5 bg-surface-container-lowest/80 border border-outline-variant/30 rounded-[10px] shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-tertiary/10 text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl" data-icon="psychology">
                    psychology
                  </span>
                </div>
                <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                  Self-service knowledge base to deflect repeat questions
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Instant deflection. Smart inline search solves customer problems prior to ticket form submission.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-cyan-50 border border-cyan-200 text-tertiary font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
              ENGINEERED FOR PRECISION
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
              From first message to resolved ticket: Six core capabilities
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Deterministic workflows that keep enterprise support teams proactive instead of chaotic.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="p-6 bg-white border-2 border-primary/30 rounded-2xl shadow-md space-y-2 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-primary text-sm tracking-wider">
                    01 // INTAKE CORE
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 bg-orange-100 text-primary font-label-sm text-label-sm font-bold rounded-[6px]">
                    Active Capability
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Omnichannel Ticket Unification
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Ingests email, chat, social messengers, and voice transcripts into one synchronized queue, attaching comprehensive historical context. Eliminate duplicate records across disjointed tools.
                </p>
              </div>
              <div className="p-5 bg-surface-container-lowest/90 border border-outline-variant/30 rounded-xl hover:border-primary/40 transition-all space-y-1.5">
                <span className="font-mono font-bold text-on-surface-variant text-xs tracking-wider">
                  02 // ESCALATION RUNTIME
                </span>
                {' '}
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  SLA Policies with Automatic Escalation
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Tiered threshold monitoring that triggers manager escalations and automated routing before breach windows close.
                </p>
              </div>
              <div className="p-5 bg-surface-container-lowest/90 border border-outline-variant/30 rounded-xl hover:border-primary/40 transition-all space-y-1.5">
                <span className="font-mono font-bold text-on-surface-variant text-xs tracking-wider">
                  03 // ORCHESTRATION
                </span>
                {' '}
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Process Blueprints for Multi-Step Tickets
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Structured multi-stage resolution paths for engineering bugs, returns, and cross-department handoffs.
                </p>
              </div>
              <div className="p-5 bg-surface-container-lowest/90 border border-outline-variant/30 rounded-xl hover:border-primary/40 transition-all space-y-1.5">
                <span className="font-mono font-bold text-on-surface-variant text-xs tracking-wider">
                  04 // EFFICIENCY SUITE
                </span>
                {' '}
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Macros for Repetitive Resolution
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Standardized one-click action suites that reply, tag, update status, and notify third-party webhooks concurrently.
                </p>
              </div>
              <div className="p-5 bg-surface-container-lowest/90 border border-outline-variant/30 rounded-xl hover:border-primary/40 transition-all space-y-1.5">
                <span className="font-mono font-bold text-on-surface-variant text-xs tracking-wider">
                  05 // DEFLECTION ENGINE
                </span>
                {' '}
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Self-Service Knowledge Base with Deflection
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Real-time article recommendations that help customers resolve common queries before creating a ticket.
                </p>
              </div>
              <div className="p-5 bg-surface-container-lowest/90 border border-outline-variant/30 rounded-xl hover:border-primary/40 transition-all space-y-1.5">
                <span className="font-mono font-bold text-on-surface-variant text-xs tracking-wider">
                  06 // FEEDBACK LOOPS
                </span>
                {' '}
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Post-Resolution CSAT Tied to Agent Performance
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Automated instant feedback surveys that correlate customer satisfaction scores directly with individual triage telemetry.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 sticky top-28">
              <div className="neo-glass rounded-2xl p-6 border border-white/80 shadow-lg space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
                  <div>
                    <p className="font-label-sm text-label-sm font-bold text-primary uppercase">
                      Active Live Inspection
                    </p>
                    <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      Omnichannel Ingestion Stream
                    </h4>
                  </div>
                  {' '}
                  <span className="px-2.5 py-1 bg-emerald-100 text-secondary border border-emerald-200 rounded-[6px] text-xs font-mono font-bold">
                    LIVE BUS
                  </span>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-surface-container-lowest rounded-[10px] border border-outline-variant/30 flex items-center justify-between">
                    <span className="text-on-surface-variant">
                      [14:32:01] Email Inbound parsed
                    </span>
                    {' '}
                    <span className="text-emerald-600 font-bold">
                      200 OK
                    </span>
                  </div>
                  <div className="p-3 bg-surface-container-lowest rounded-[10px] border border-outline-variant/30 flex items-center justify-between">
                    <span className="text-on-surface-variant">
                      [14:32:04] Live Chat handoff dispatched
                    </span>
                    {' '}
                    <span className="text-emerald-600 font-bold">
                      200 OK
                    </span>
                  </div>
                  <div className="p-3 bg-surface-container-lowest rounded-[10px] border border-outline-variant/30 flex items-center justify-between">
                    <span className="text-on-surface-variant">
                      [14:32:08] Voice transcription ingested
                    </span>
                    {' '}
                    <span className="text-emerald-600 font-bold">
                      200 OK
                    </span>
                  </div>
                  <div className="p-3 bg-surface-container-lowest rounded-[10px] border border-outline-variant/30 flex items-center justify-between">
                    <span className="text-on-surface-variant">
                      [14:32:15] CRM Profile deduplicated
                    </span>
                    {' '}
                    <span className="text-primary font-bold">
                      SYNCED
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-[10px] text-on-surface-variant font-body-sm">
                  <strong className="text-on-surface font-semibold">
                    Audit Guarantee:
                  </strong>
                  {' '}
                  Every packet is cryptographic-stamped upon ingestion to preserve forensic dispute compliance.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 border border-emerald-200 text-secondary font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
              RESOLUTION METHODOLOGY
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
              How Horizon processes every request from intake to close
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Four deterministic stages guaranteeing full operational visibility across every touchpoint.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-[10px] bg-primary/10 text-primary font-mono font-bold flex items-center justify-center text-sm">
                  01
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline" data-icon="forward_to_inbox">
                  forward_to_inbox
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Customer submits a request
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Inbound inquiry triggers instantaneous webhook ingestion across any connected channel, unifying metadata into a single record.
              </p>
            </div>
            <div className="p-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-[10px] bg-primary/10 text-primary font-mono font-bold flex items-center justify-center text-sm">
                  02
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline" data-icon="route">
                  route
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Ticket is routed automatically
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Intelligent rules evaluate intent, language, VIP status, and agent capacity to assign an owner instantly with zero latency.
              </p>
            </div>
            <div className="p-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-[10px] bg-primary/10 text-primary font-mono font-bold flex items-center justify-center text-sm">
                  03
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline" data-icon="av_timer">
                  av_timer
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                SLA timer tracks progress
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Real-time clock begins tracking first-response and target resolution milestones with automated alert hooks to leadership.
              </p>
            </div>
            <div className="p-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-[10px] bg-primary/10 text-primary font-mono font-bold flex items-center justify-center text-sm">
                  04
                </span>
                {' '}
                <span className="material-symbols-outlined text-outline" data-icon="task_alt">
                  task_alt
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Resolve and learn
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Resolution is archived cryptographically, and resolution patterns automatically populate knowledge base drafts.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-orange-50 border border-orange-200 text-primary font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
              OPERATIONAL RETURNS
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
              Why enterprise support operations switch from shared inboxes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="neo-glass rounded-2xl p-6 border border-white/80 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-emerald-100 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined" data-icon="mark_email_read">
                  mark_email_read
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Fewer missed requests
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Zero unassigned tickets and complete audit trails prevent queries from being overlooked in high-volume queues.
              </p>
            </div>
            <div className="neo-glass rounded-2xl p-6 border border-white/80 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-cyan-100 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined" data-icon="speed">
                  speed
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Consistent response times
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Automated SLA clocks maintain uniform response velocity across all shifts and globally distributed time zones.
              </p>
            </div>
            <div className="neo-glass rounded-2xl p-6 border border-white/80 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-orange-100 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined" data-icon="trending_down">
                  trending_down
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Lower ticket volume
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Integrated self-service deflections resolve routine inquiries before they ever reach front-line queue handlers.
              </p>
            </div>
            <div className="neo-glass rounded-2xl p-6 border border-white/80 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-amber-100 text-amber-800 flex items-center justify-center">
                <span className="material-symbols-outlined" data-icon="badge">
                  badge
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Clear accountability
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Granular ownership tracking eliminates confusion over ticket responsibility, pending actions, and escalation status.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg font-bold">
                <span className="material-symbols-outlined" data-icon="security">
                  security
                </span>
                {' '}
                Enterprise-grade security
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Encrypted hosting, role-based access, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
              </p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg font-bold">
                <span className="material-symbols-outlined" data-icon="price_check">
                  price_check
                </span>
                {' '}
                Fixed scoped pricing
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Every engagement is scoped individually with a fixed price and timeline agreed upfront — book a free consultation for a tailored quote.
              </p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg font-bold">
                <span className="material-symbols-outlined" data-icon="groups">
                  groups
                </span>
                {' '}
                Built for your whole team
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Role-based views mean owners, managers, and frontline staff each see exactly what they need, nothing more, nothing missing.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-cyan-50 border border-cyan-200 text-tertiary font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
              OPERATIONAL CONTRAST
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
              The Fragmented Inbox vs. Horizon Support Ticketing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-surface-container rounded-2xl border border-outline-variant/40 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-[8px] bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm">
                  ✕
                </span>
                {' '}
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    Before
                  </h3>
                  <p className="text-xs text-on-surface-variant font-medium">
                    The Shared Inbox Dilemma
                  </p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-xl mt-0.5" data-icon="close">
                    close
                  </span>
                  {' '}
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Requests arrive across email, chat, and phone separately with no unified thread.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-xl mt-0.5" data-icon="close">
                    close
                  </span>
                  {' '}
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    No clear deadline or metric on how fast a ticket should close before customer churn.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-xl mt-0.5" data-icon="close">
                    close
                  </span>
                  {' '}
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    The same question gets answered from scratch each time by different team members.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-xl mt-0.5" data-icon="close">
                    close
                  </span>
                  {' '}
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Tickets sit unassigned until someone notices them or the customer escalates angrily.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-8 neo-glass rounded-2xl border-2 border-primary/30 shadow-lg space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-[8px] bg-emerald-100 text-secondary flex items-center justify-center font-bold text-sm">
                  ✓
                </span>
                {' '}
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    After
                  </h3>
                  <p className="text-xs text-primary font-semibold">
                    The Horizon Synchronized Standard
                  </p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-xl mt-0.5" data-icon="check">
                    check
                  </span>
                  {' '}
                  <span className="font-body-md text-body-md text-on-surface font-medium">
                    Every channel lands in one unified ticket queue with single customer history.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-xl mt-0.5" data-icon="check">
                    check
                  </span>
                  {' '}
                  <span className="font-body-md text-body-md text-on-surface font-medium">
                    SLA timers escalate anything that breaches its target automatically to leadership.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-xl mt-0.5" data-icon="check">
                    check
                  </span>
                  {' '}
                  <span className="font-body-md text-body-md text-on-surface font-medium">
                    A self-service knowledge base deflects repeat questions automatically 24/7.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-xl mt-0.5" data-icon="check">
                    check
                  </span>
                  {' '}
                  <span className="font-body-md text-body-md text-on-surface font-medium">
                    Tickets route automatically to the right specialized agent or department immediately.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-orange-50 border border-orange-200 text-primary font-label-sm text-label-sm uppercase tracking-wider rounded-[6px]">
              ENTERPRISE INQUIRIES
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            <div className="border border-outline-variant/40 bg-surface-container-lowest rounded-[10px] p-5 shadow-sm transition-all">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Can we set different SLA rules for different customer tiers?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-primary text-xl" data-icon="expand_less">
                  expand_less
                </span>
              </div>
              <div className="mt-3 pt-3 border-t border-outline-variant/20 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Yes. You can configure granular SLA matrices based on enterprise customer tiers, contracted response windows, and severity levels with automated escalation triggers. VIP thresholds can trigger immediate pager duty integrations or dedicated queue overrides.
              </div>
            </div>
            <div className="border border-outline-variant/30 bg-surface-container-lowest/80 rounded-[10px] p-5 shadow-sm">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                  Will agents see the customer's full history when a ticket comes in?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-outline text-xl" data-icon="expand_more">
                  expand_more
                </span>
              </div>
            </div>
            <div className="border border-outline-variant/30 bg-surface-container-lowest/80 rounded-[10px] p-5 shadow-sm">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                  Can customers track their own ticket status without emailing us?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-outline text-xl" data-icon="expand_more">
                  expand_more
                </span>
              </div>
            </div>
            <div className="border border-outline-variant/30 bg-surface-container-lowest/80 rounded-[10px] p-5 shadow-sm">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                  Can we measure customer satisfaction after a ticket closes?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-outline text-xl" data-icon="expand_more">
                  expand_more
                </span>
              </div>
            </div>
            <div className="border border-outline-variant/30 bg-surface-container-lowest/80 rounded-[10px] p-5 shadow-sm">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                  Can it handle both business and consumer support in one account?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-outline text-xl" data-icon="expand_more">
                  expand_more
                </span>
              </div>
            </div>
            <div className="border border-outline-variant/30 bg-surface-container-lowest/80 rounded-[10px] p-5 shadow-sm">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                  Can we set different working hours for support coverage?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-outline text-xl" data-icon="expand_more">
                  expand_more
                </span>
              </div>
            </div>
            <div className="border border-outline-variant/30 bg-surface-container-lowest/80 rounded-[10px] p-5 shadow-sm">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                  How long does implementation typically take?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-outline text-xl" data-icon="expand_more">
                  expand_more
                </span>
              </div>
            </div>
            <div className="border border-outline-variant/30 bg-surface-container-lowest/80 rounded-[10px] p-5 shadow-sm">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                  Is our data secure, and who owns it?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-outline text-xl" data-icon="expand_more">
                  expand_more
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                More from the Horizon ecosystem
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                Productized automation packages and modular ERP backbones built for immediate velocity.
              </p>
            </div>
            {' '}
            <Link to="/products" className="font-label-lg text-label-lg font-semibold text-primary hover:underline flex items-center gap-1">
              Explore all product packages →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-orange-100 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined" data-icon="pie_chart">
                  pie_chart
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Sales CRM
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                See every deal, every follow-up, and every stalled conversation in one pipeline, not scattered across inboxes.
              </p>
            </div>
            <div className="p-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-cyan-100 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined" data-icon="smart_toy">
                  smart_toy
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                AI QC Agent
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Centralized installation knowledge on your technician's phone with zero-hallucination guardrails.
              </p>
            </div>
            <div className="p-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-emerald-100 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined" data-icon="handyman">
                  handyman
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Field Service Management
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Get the right technician to the right job with the right parts, without a whiteboard or a group chat.
              </p>
            </div>
            <div className="p-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-[10px] bg-purple-100 text-purple-700 flex items-center justify-center">
                <span className="material-symbols-outlined" data-icon="schema">
                  schema
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Integrated ERP
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                One connected operational core combining sales, inventory, finance, and human resources with instantaneous data sync.
              </p>
            </div>
          </div>
        </section>
        <section className="rounded-2xl primary-gradient-btn p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-6 relative z-10">
            <h2 className="font-headline-lg text-headline-lg font-bold tracking-tight text-white">
              Unify your support operations with fixed-scope certainty.
            </h2>
            <p className="font-body-lg text-body-lg text-white/90 leading-relaxed max-w-2xl">
              Connect directly with our engineering team to scope your ticketing automation within 48 hours.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-6 py-3.5 bg-white text-on-surface font-label-lg text-label-lg font-bold rounded-[10px] shadow-lg hover:bg-neutral-50 transition active:scale-[0.98]">
                Book an Architectural Scoping Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
