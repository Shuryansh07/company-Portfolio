// Generated from stitch/pd_sales-crm.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './SalesCrm.css'

export default function SalesCrm() {
  return (
    <div className="pg-sales-crm bg-background text-on-surface font-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col">
      <title>{"Sales CRM | Horizon Enterprise Systems"}</title>
      {' '}
      {' '}
      <main className="flex-grow">
        <section className="max-w-[1600px] mx-auto px-6 sm:px-8 pt-8 pb-16 lg:pb-24">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant mb-6">
            <span className="hover:text-primary transition-colors cursor-pointer">
              Products
            </span>
            {' '}
            <span className="text-outline-variant">
              /
            </span>
            {' '}
            <span className="hover:text-primary transition-colors cursor-pointer">
              {"Sales & Revenue"}
            </span>
            {' '}
            <span className="text-outline-variant">
              /
            </span>
            {' '}
            <span className="text-on-surface font-semibold">
              Sales CRM
            </span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 self-start rounded-[6px] px-3 py-1 bg-primary-fixed/60 border border-outline-variant/40 text-on-primary-fixed-variant text-label-sm font-label-sm font-semibold tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {' '}
                {"SALES PIPELINE & REVENUE ORCHESTRATION"}
              </div>
              <h1 className="text-display-lg font-display-lg text-on-surface tracking-tight mb-5">
                Sales CRM
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
                See every deal, every follow-up and every stalled conversation in one pipeline, not scattered across inboxes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-surface-container-lowest/70 border border-outline-variant/40 text-on-surface shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[19px]" data-icon="account_tree">
                    account_tree
                  </span>
                  {' '}
                  <span className="text-body-sm font-body-sm font-medium">
                    Multi-Stage Pipeline with Territory-Level Forecasting
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-surface-container-lowest/70 border border-outline-variant/40 text-on-surface shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[19px]" data-icon="bolt">
                    bolt
                  </span>
                  {' '}
                  <span className="text-body-sm font-body-sm font-medium">
                    Trigger-Based Workflow Automation
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-surface-container-lowest/70 border border-outline-variant/40 text-on-surface shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[19px]" data-icon="troubleshoot">
                    troubleshoot
                  </span>
                  {' '}
                  <span className="text-body-sm font-body-sm font-medium">
                    Behavioral Lead Scoring
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-surface-container-lowest/70 border border-outline-variant/40 text-on-surface shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[19px]" data-icon="groups">
                    groups
                  </span>
                  {' '}
                  <span className="text-body-sm font-body-sm font-medium">
                    Territory and Round-Robin Lead Assignment
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-surface-container-lowest/70 border border-outline-variant/40 text-on-surface shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[19px]" data-icon="mark_email_read">
                    mark_email_read
                  </span>
                  {' '}
                  <span className="text-body-sm font-body-sm font-medium">
                    Automatic Activity and Email Engagement Tracking
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-surface-container-lowest/70 border border-outline-variant/40 text-on-surface shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[19px]" data-icon="request_quote">
                    request_quote
                  </span>
                  {' '}
                  <span className="text-body-sm font-body-sm font-medium">
                    Quote Generation Tied to Live Deal Data
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5" id="demo-form">
              <div className="glass-card rounded-2xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-48 h-48 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary text-[24px]" data-icon="calendar_month">
                    calendar_month
                  </span>
                  {' '}
                  <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">
                    Book a live platform demo
                  </h2>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
                  Experience the deterministic pipeline configured directly for your enterprise volume within 30 minutes.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                      Full Name
                    </label>
                    {' '}
                    <input className="w-full glass-input rounded-[10px] px-3.5 py-2.5 text-body-md font-body-md text-on-surface placeholder:text-outline/70" placeholder="Sarah Jenkins" type="text" />
                  </div>
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                      Work Email
                    </label>
                    {' '}
                    <input className="w-full glass-input rounded-[10px] px-3.5 py-2.5 text-body-md font-body-md text-on-surface placeholder:text-outline/70" placeholder="sarah@enterprise-corp.com" type="email" />
                  </div>
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                      Phone Number
                    </label>
                    {' '}
                    <input className="w-full glass-input rounded-[10px] px-3.5 py-2.5 text-body-md font-body-md text-on-surface placeholder:text-outline/70" placeholder="Phone number" type="tel" />
                  </div>
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                      Sales Team Size
                    </label>
                    {' '}
                    <select className="w-full glass-input rounded-[10px] px-3.5 py-2.5 text-body-md font-body-md text-on-surface bg-surface-container-lowest">
                      <option value="1-10">
                        1 - 10 Representatives
                      </option>
                      <option value="11-50">
                        11 - 50 Representatives
                      </option>
                      <option value="51-200">
                        51 - 200 Representatives
                      </option>
                      <option value="200+">
                        200+ Enterprise Tier
                      </option>
                    </select>
                  </div>
                  <div className="pt-2">
                    <button className="w-full btn-primary-gradient rounded-[10px] py-3 text-on-primary font-label-lg text-label-lg font-semibold tracking-wide transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2" type="submit">
                      <span>
                        Request Tailored Walk-Through
                      </span>
                      {' '}
                      <span className="material-symbols-outlined text-[18px]" data-icon="send">
                        send
                      </span>
                    </button>
                  </div>
                  <p className="text-body-sm font-body-sm text-center text-on-surface-variant pt-2">
                    Encrypted hosting, role-based access control, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-surface-container-low/60 border-y border-outline-variant/30 py-20">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 rounded-[6px] px-3 py-1 bg-surface-container-highest/80 text-on-surface-variant text-label-sm font-label-sm font-semibold tracking-wider mb-3">
                SYSTEM TELEMETRY
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-3">
                {"Product Live Telemetry & Pipeline Demo"}
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                Observe live opportunity progression, automated deal triage, and real-time revenue forecasting in action.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-12 glass-card rounded-2xl p-6 sm:p-7 border border-outline-variant/40 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between pb-5 mb-5 border-b border-outline-variant/30 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-[6px] bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-label-sm">
                        OS
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-headline-sm font-headline-sm font-bold text-on-surface">
                            US West Enterprise Territory
                          </span>
                          {' '}
                          <span className="rounded-[6px] px-2 py-0.5 bg-secondary-container text-on-secondary-container text-label-sm font-label-sm font-semibold">
                            Active Forecast
                          </span>
                        </div>
                        <p className="text-body-sm font-body-sm text-on-surface-variant font-mono">
                          Horizon SalesOS v4.2 • Deterministic Sync Validated
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-label-sm font-label-sm text-on-surface-variant">
                        Quota Coverage:
                      </span>
                      {' '}
                      <span className="rounded-[6px] px-2 py-1 bg-surface-container font-mono text-label-md font-label-md font-bold text-on-surface">
                        128%
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-[10px] bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:border-primary/40 transition-colors">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                              Acme Global
                            </span>
                            {' '}
                            <span className="rounded-[6px] px-2 py-0.5 bg-surface-container text-on-surface-variant text-label-sm font-label-sm font-semibold">
                              Stage: Technical Review
                            </span>
                          </div>
                          <div className="text-label-md font-label-md text-primary font-bold mt-1">
                            $180,000 ARR
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="rounded-[6px] px-2.5 py-1 bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm font-semibold inline-block">
                            Win Probability: 75%
                          </div>
                          <div className="text-label-sm font-label-sm text-on-surface-variant mt-1 font-mono">
                            Assigned: Alex R. (AE)
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-body-sm font-body-sm">
                        <span className="flex items-center gap-1.5 text-tertiary font-medium">
                          <span className="material-symbols-outlined text-[16px]" data-icon="smart_toy">
                            smart_toy
                          </span>
                          {' '}
                          Next Action: Security Review Auto-Triggered
                        </span>
                        {' '}
                        <span className="text-outline text-label-sm font-label-sm">
                          Activity: 12m ago
                        </span>
                      </div>
                    </div>
                    <div className="p-4 rounded-[10px] bg-surface-container-lowest border border-primary/30 shadow-sm relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                              Starlight Tech
                            </span>
                            {' '}
                            <span className="rounded-[6px] px-2 py-0.5 bg-primary-fixed/40 text-on-primary-fixed-variant text-label-sm font-label-sm font-semibold">
                              Stage: Negotiation
                            </span>
                          </div>
                          <div className="text-label-md font-label-md text-primary font-bold mt-1">
                            $95,000 ARR
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="rounded-[6px] px-2.5 py-1 bg-error-container text-on-error-container text-label-sm font-label-sm font-semibold inline-block">
                            Stall Warning: 4 Days Quiet
                          </div>
                          <div className="text-label-sm font-label-sm text-on-surface-variant mt-1 font-mono">
                            Assigned: Elena V. (Lead AE)
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-body-sm font-body-sm">
                        <span className="flex items-center gap-1.5 text-error font-medium">
                          <span className="material-symbols-outlined text-[16px]" data-icon="warning">
                            warning
                          </span>
                          {' '}
                          Automated Executive Escalation Ready for Dispatch
                        </span>
                        {' '}
                        <button className="rounded-[6px] px-2.5 py-1 bg-primary-fixed/60 text-on-primary-fixed-variant text-label-sm font-label-sm font-semibold hover:bg-primary-fixed transition-colors">
                          Trigger Sequence
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    {' '}
                    <span>
                      Audit Stream: Inbound webhook parsed [Client name] tier-1 event
                    </span>
                  </div>
                  {' '}
                  <span>
                    Latency: 28ms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1600px] mx-auto px-6 sm:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 rounded-[6px] px-3 py-1 bg-error-container text-on-error-container text-label-sm font-label-sm font-semibold tracking-wider mb-4">
              THE OPERATIONAL BOTTLENECK
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-4">
              Deals Die in the Gaps Between Follow-Ups.
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
              Most lost enterprise deals are never conceded to competitors—they slip away in unreturned emails, forgotten calendar reminders, and fractured inbox chains. Horizon Sales CRM replaces spreadsheet guesswork with an automated, synchronized pipeline where every rep, account executive, and manager executes with clear visibility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 border border-outline-variant/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[24px]" data-icon="check_circle">
                    check_circle
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-3">
                  Complete Pipeline Visibility
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Unify every touchpoint from initial demo request to signed agreement in one auditable operational ledger.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-outline font-mono">
                FEATURE: LEDGER_SYNC_01
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-outline-variant/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[24px]" data-icon="check_circle">
                    check_circle
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-3">
                  Algorithmic Lead Prioritization
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Behavioral scoring and automated next-step prompts tell reps exactly who to engage next.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-outline font-mono">
                FEATURE: SCORING_ENGINE_02
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-outline-variant/40 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[24px]" data-icon="check_circle">
                    check_circle
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-3">
                  Deterministic Revenue Forecasting
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Weighted stage probabilities calculate live territory forecasts without manual spreadsheet rollups.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 text-label-sm font-label-sm text-outline font-mono">
                FEATURE: FORECAST_MATRIX_03
              </div>
            </div>
          </div>
        </section>
        <section className="bg-surface-container-low/50 border-y border-outline-variant/30 py-20 lg:py-28">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-2 rounded-[6px] px-3 py-1 bg-surface-container-highest text-on-surface-variant text-label-sm font-label-sm font-semibold tracking-wider mb-4">
                ENGINEERED REVENUE INFRASTRUCTURE
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-4">
                From First Contact to Closed Won: Six Deterministic Capabilities
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                Modular architectural blocks configured to match your organization’s deal velocity and governance requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-2xl bg-surface-container-lowest border-2 border-primary-container shadow-sm flex items-start gap-4">
                  <span className="text-headline-sm font-headline-sm font-bold text-primary font-mono">
                    01
                  </span>
                  {' '}
                  <div>
                    <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-1">
                      {"Multi-Stage Pipeline & Territory Forecasting"}
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Deals carry stage-based probability weightings rolling live into territory and rep-level projections, flagging pipeline bottlenecks weeks before quarter-end.
                    </p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container-lowest/80 border border-outline-variant/40 hover:border-outline-variant transition-colors flex items-start gap-4">
                  <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant font-mono">
                    02
                  </span>
                  {' '}
                  <div>
                    <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-1">
                      Trigger-Based Workflow Automation
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Automate handoffs, quote generation approvals, and follow-up sequences instantly upon deal milestones.
                    </p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container-lowest/80 border border-outline-variant/40 hover:border-outline-variant transition-colors flex items-start gap-4">
                  <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant font-mono">
                    03
                  </span>
                  {' '}
                  <div>
                    <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-1">
                      {"Behavioral Lead Scoring & Intent Tracking"}
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Score leads automatically using web signals, email responsiveness, and engagement frequency.
                    </p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container-lowest/80 border border-outline-variant/40 hover:border-outline-variant transition-colors flex items-start gap-4">
                  <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant font-mono">
                    04
                  </span>
                  {' '}
                  <div>
                    <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-1">
                      {"Territory & Round-Robin Lead Distribution"}
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Assign inbound leads deterministically based on territory rules, quota capacity, and account tiering.
                    </p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container-lowest/80 border border-outline-variant/40 hover:border-outline-variant transition-colors flex items-start gap-4">
                  <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant font-mono">
                    05
                  </span>
                  {' '}
                  <div>
                    <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-1">
                      {"Autonomous Activity & Calendar Synchronization"}
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Capture every customer email, call log, and meeting agenda directly into the deal timeline with zero manual logging.
                    </p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container-lowest/80 border border-outline-variant/40 hover:border-outline-variant transition-colors flex items-start gap-4">
                  <span className="text-headline-sm font-headline-sm font-bold text-on-surface-variant font-mono">
                    06
                  </span>
                  {' '}
                  <div>
                    <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-1">
                      {"Live Quote & Contract Generation"}
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Generate custom CPQ proposals pulled directly from active deal products and pricing tiers with 1-click legal approval.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 sticky top-28">
                <div className="glass-card rounded-2xl p-7 border border-outline-variant/50 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30 mb-6">
                    <div>
                      <span className="rounded-[6px] px-2 py-0.5 bg-primary-fixed text-on-primary-fixed-variant text-label-sm font-label-sm font-bold">
                        DEEP DIVE: FEATURE 01
                      </span>
                      {' '}
                      <h4 className="text-headline-sm font-headline-sm font-bold text-on-surface mt-1">
                        {"Territory Forecasting & Velocity Engine"}
                      </h4>
                    </div>
                    {' '}
                    <span className="material-symbols-outlined text-primary text-[28px]" data-icon="insights">
                      insights
                    </span>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-[10px] bg-surface-container-low border border-outline-variant/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-body-sm font-body-sm text-on-surface-variant">
                          Enterprise Cohort Coverage
                        </span>
                        {' '}
                        <span className="text-label-md font-label-md font-bold text-primary font-mono">
                          112%
                        </span>
                      </div>
                      <div className="w-full bg-surface-container-highest h-2 rounded-[4px] overflow-hidden">
                        <div className="bg-primary-container h-full w-[78%]" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-[10px] bg-surface-container-lowest border border-outline-variant/30">
                        <div className="text-label-sm font-label-sm text-on-surface-variant">
                          Avg Stage Velocity
                        </div>
                        <div className="text-headline-sm font-headline-sm font-bold text-on-surface mt-0.5 font-mono">
                          18 Days
                        </div>
                        <div className="text-label-sm font-label-sm text-secondary font-medium mt-1">
                          Faster than median
                        </div>
                      </div>
                      <div className="p-3.5 rounded-[10px] bg-surface-container-lowest border border-outline-variant/30">
                        <div className="text-label-sm font-label-sm text-on-surface-variant">
                          Forecast Confidence
                        </div>
                        <div className="text-headline-sm font-headline-sm font-bold text-on-surface mt-0.5 font-mono">
                          94.8%
                        </div>
                        <div className="text-label-sm font-label-sm text-tertiary font-medium mt-1">
                          Deterministic Model
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[10px] border border-outline-variant/30 overflow-hidden text-body-sm font-body-sm">
                      <div className="bg-surface-container px-3 py-2 font-label-md font-label-md font-semibold text-on-surface flex justify-between">
                        <span>
                          Stage
                        </span>
                        {' '}
                        <span>
                          Deals / Projected ARR
                        </span>
                      </div>
                      <div className="divide-y divide-outline-variant/20 bg-surface-container-lowest">
                        <div className="px-3 py-2 flex justify-between text-on-surface-variant">
                          <span>
                            01. Qualification
                          </span>
                          {' '}
                          <span className="font-mono text-on-surface">
                            24 deals ($480k)
                          </span>
                        </div>
                        <div className="px-3 py-2 flex justify-between text-on-surface-variant">
                          <span>
                            02. Proof of Concept
                          </span>
                          {' '}
                          <span className="font-mono text-on-surface">
                            16 deals ($310k)
                          </span>
                        </div>
                        <div className="px-3 py-2 flex justify-between text-on-surface-variant">
                          <span>
                            03. Executive Sign-off
                          </span>
                          {' '}
                          <span className="font-mono text-on-surface">
                            9 deals ($185k)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-label-sm font-label-sm font-mono text-outline">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]" data-icon="lock">
                        lock
                      </span>
                      {' '}
                      Audit Hash: 9f8e-4a1c-8b20-d63f
                    </span>
                    {' '}
                    <span>
                      Verified Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1600px] mx-auto px-6 sm:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 rounded-[6px] px-3 py-1 bg-surface-container-highest text-on-surface-variant text-label-sm font-label-sm font-semibold tracking-wider mb-4">
              EXECUTION WORKFLOW
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-4">
              From Lead to Closed Won: Four Predictable Stages
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Eliminate disjointed rep handoffs with a deterministic four-step progression lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="glass-card rounded-2xl p-6 border border-outline-variant/40 flex flex-col justify-between relative group hover:border-primary/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-headline-md font-headline-md font-bold text-primary font-mono">
                    01
                  </span>
                  {' '}
                  <div className="w-8 h-8 rounded-[6px] bg-primary-fixed/50 flex items-center justify-center text-on-primary-fixed-variant">
                    <span className="material-symbols-outlined text-[18px]" data-icon="downloading">
                      downloading
                    </span>
                  </div>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                  Score incoming leads
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Leads stream from web forms, outbound campaigns, and events, enriched and scored automatically.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-secondary font-medium">
                <span className="material-symbols-outlined text-[14px]" data-icon="sync">
                  sync
                </span>
                {' '}
                Zero Manual Intake
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-outline-variant/40 flex flex-col justify-between relative group hover:border-primary/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-headline-md font-headline-md font-bold text-primary font-mono">
                    02
                  </span>
                  {' '}
                  <div className="w-8 h-8 rounded-[6px] bg-primary-fixed/50 flex items-center justify-center text-on-primary-fixed-variant">
                    <span className="material-symbols-outlined text-[18px]" data-icon="speed">
                      speed
                    </span>
                  </div>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                  Work the pipeline
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Reps work qualified deals through structured stages with algorithmic next-step recommendations.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-secondary font-medium">
                <span className="material-symbols-outlined text-[14px]" data-icon="task_alt">
                  task_alt
                </span>
                {' '}
                Step-by-Step Playbooks
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-outline-variant/40 flex flex-col justify-between relative group hover:border-primary/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-headline-md font-headline-md font-bold text-primary font-mono">
                    03
                  </span>
                  {' '}
                  <div className="w-8 h-8 rounded-[6px] bg-primary-fixed/50 flex items-center justify-center text-on-primary-fixed-variant">
                    <span className="material-symbols-outlined text-[18px]" data-icon="schedule_send">
                      schedule_send
                    </span>
                  </div>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                  Keep prospects engaged
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Trigger-based cadences nurture prospects and prevent stalled conversations without manual reminders.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-secondary font-medium">
                <span className="material-symbols-outlined text-[14px]" data-icon="snooze">
                  snooze
                </span>
                {' '}
                Anti-Stall Protocols
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-outline-variant/40 flex flex-col justify-between relative group hover:border-primary/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-headline-md font-headline-md font-bold text-primary font-mono">
                    04
                  </span>
                  {' '}
                  <div className="w-8 h-8 rounded-[6px] bg-primary-fixed/50 flex items-center justify-center text-on-primary-fixed-variant">
                    <span className="material-symbols-outlined text-[18px]" data-icon="monitoring">
                      monitoring
                    </span>
                  </div>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                  Track forecasts
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Leadership reviews live territory health, pipeline conversion rates, and revenue projections without spreadsheet sync meetings.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-secondary font-medium">
                <span className="material-symbols-outlined text-[14px]" data-icon="verified">
                  verified
                </span>
                {' '}
                Auditable Board Accuracy
              </div>
            </div>
          </div>
        </section>
        <section className="bg-surface-container-low/60 border-y border-outline-variant/30 py-20 lg:py-28">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-2 rounded-[6px] px-3 py-1 bg-surface-container-highest text-on-surface-variant text-label-sm font-label-sm font-semibold tracking-wider mb-4">
                OPERATIONAL IMPACT
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-4">
                Why High-Velocity Sales Teams Retire Spreadsheets
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                Measurable operational improvements that transform day-to-day sales execution into deterministic growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="glass-card rounded-2xl p-6 border border-outline-variant/40">
                <div className="w-10 h-10 rounded-[10px] bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[22px]" data-icon="timer_off">
                    timer_off
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                  Zero Missed Follow-Ups
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Eliminate dead deal slippage with automatic stale-deal escalation and stakeholder re-engagement prompts.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 border border-outline-variant/40">
                <div className="w-10 h-10 rounded-[10px] bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[22px]" data-icon="schedule">
                    schedule
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                  Reclaimed Selling Hours
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Cut manual data entry and email logging for every rep, returning time to active customer conversations.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 border border-outline-variant/40">
                <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[22px]" data-icon="query_stats">
                    query_stats
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                  Proactive Forecast Calibration
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Identify pipeline gaps weeks in advance rather than post-mortem quarter reviews, protecting target attainment.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 border border-outline-variant/40">
                <div className="w-10 h-10 rounded-[10px] bg-surface-container-highest text-on-surface flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[22px]" data-icon="handshake">
                    handshake
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                  Unified Team Accountability
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Clear, transparent deal ownership across SDRs, AEs, and sales leadership with verifiable transition milestones.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm">
              <div className="flex items-start gap-3.5">
                <span className="material-symbols-outlined text-primary text-[24px] mt-0.5" data-icon="shield">
                  shield
                </span>
                {' '}
                <div>
                  <h4 className="text-label-lg font-label-lg font-bold text-on-surface mb-1">
                    Enterprise-Grade Security
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Encrypted hosting, role-based access control, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 border-t md:border-t-0 md:border-l border-outline-variant/30 pt-4 md:pt-0 md:pl-6">
                <span className="material-symbols-outlined text-primary text-[24px] mt-0.5" data-icon="payments">
                  payments
                </span>
                {' '}
                <div>
                  <h4 className="text-label-lg font-label-lg font-bold text-on-surface mb-1">
                    Transparent, Scoped Pricing
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Every engagement is scoped individually with a fixed price and timeline agreed upfront — book a free consultation for a tailored quote.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 border-t md:border-t-0 md:border-l border-outline-variant/30 pt-4 md:pt-0 md:pl-6">
                <span className="material-symbols-outlined text-primary text-[24px] mt-0.5" data-icon="badge">
                  badge
                </span>
                {' '}
                <div>
                  <h4 className="text-label-lg font-label-lg font-bold text-on-surface mb-1">
                    Built for Your Whole Team
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Role-based views mean owners, managers, and frontline sales staff each see exactly what they need, nothing more, nothing missing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1600px] mx-auto px-6 sm:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 rounded-[6px] px-3 py-1 bg-surface-container-highest text-on-surface-variant text-label-sm font-label-sm font-semibold tracking-wider mb-4">
              OPERATIONAL TRANSFORMATION
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-4">
              What Changes on Day One
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Contrast legacy friction with deterministic operational certainty.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-surface-container-low/80 border border-outline-variant/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-error mb-6">
                  <span className="material-symbols-outlined text-[24px]" data-icon="cancel">
                    cancel
                  </span>
                  {' '}
                  <span className="text-label-lg font-label-lg font-bold uppercase tracking-wider">
                    The Fragmented Legacy Pipeline
                  </span>
                </div>
                <ul className="space-y-5 text-body-md font-body-md text-on-surface-variant">
                  <li className="flex items-start gap-3">
                    <span className="text-error font-bold font-mono">
                      ✕
                    </span>
                    <span>
                      Deals tracked across inboxes and personal notes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-error font-bold font-mono">
                      ✕
                    </span>
                    <span>
                      Leads followed up in whatever order feels right.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-error font-bold font-mono">
                      ✕
                    </span>
                    <span>
                      Forecasts built from memory before a Monday meeting.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-error font-bold font-mono">
                      ✕
                    </span>
                    <span>
                      Stalled deals go unnoticed until it is too late.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-outline-variant/30 text-label-sm font-label-sm text-outline">
                RESULT: UNPREDICTABLE DEAL SLIPPAGE
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl border-2 border-secondary/60 shadow-lg flex flex-col justify-between bg-surface-container-lowest">
              <div>
                <div className="flex items-center gap-2 text-secondary mb-6">
                  <span className="material-symbols-outlined text-[24px]" data-icon="check_circle">
                    check_circle
                  </span>
                  {' '}
                  <span className="text-label-lg font-label-lg font-bold uppercase tracking-wider">
                    The Horizon Deterministic Pipeline
                  </span>
                </div>
                <ul className="space-y-5 text-body-md font-body-md text-on-surface">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold font-mono">
                      ✓
                    </span>
                    <span>
                      Every deal visible in one shared pipeline.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold font-mono">
                      ✓
                    </span>
                    <span>
                      Leads scored and prioritized automatically.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold font-mono">
                      ✓
                    </span>
                    <span>
                      Forecasts calculated live by rep and territory.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold font-mono">
                      ✓
                    </span>
                    <span>
                      Unusual pipeline activity flagged automatically.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-outline-variant/30 text-label-sm font-label-sm text-secondary font-semibold">
                RESULT: PREDICTABLE REVENUE VELOCITY
              </div>
            </div>
          </div>
        </section>
        <section className="bg-surface-container-low/50 border-y border-outline-variant/30 py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-[6px] px-3 py-1 bg-surface-container-highest text-on-surface-variant text-label-sm font-label-sm font-semibold tracking-wider mb-3">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-3">
                Clear answers regarding Horizon Sales CRM and enterprise rollout.
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Technical and architectural considerations for systems engineers and sales leaders.
              </p>
            </div>
            <div className="space-y-3.5">
              <div className="glass-card rounded-[10px] border border-outline-variant/50 overflow-hidden shadow-sm">
                <button className="w-full px-6 py-4.5 text-left flex items-center justify-between font-headline-sm text-headline-sm text-on-surface font-semibold focus:outline-none">
                  <span>
                    Can it integrate with the email and calendar we already use?
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-primary text-[20px]" data-icon="keyboard_arrow_up">
                    keyboard_arrow_up
                  </span>
                </button>
                {' '}
                <div className="px-6 pb-5 pt-1 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 leading-relaxed">
                  Yes, Horizon integrates natively with Google Workspace, Microsoft 365, Exchange, and IMAP servers, synchronizing emails, calendar events, and attendee responses bi-directionally without requiring third-party plugins.
                </div>
              </div>
              <div className="glass-card rounded-[10px] border border-outline-variant/40 overflow-hidden">
                <button className="w-full px-6 py-4.5 text-left flex items-center justify-between font-headline-sm text-headline-sm text-on-surface font-semibold focus:outline-none">
                  <span>
                    How does lead scoring actually work?
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-outline text-[20px]" data-icon="keyboard_arrow_down">
                    keyboard_arrow_down
                  </span>
                </button>
                {' '}
                <div className="hidden px-6 pb-5 pt-1 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 leading-relaxed">
                  Scoring relies on multi-dimensional telemetry: website behavior, email open and reply latency, document review dwell time, and organizational fit. Weights are entirely deterministic and configurable per pipeline.
                </div>
              </div>
              <div className="glass-card rounded-[10px] border border-outline-variant/40 overflow-hidden">
                <button className="w-full px-6 py-4.5 text-left flex items-center justify-between font-headline-sm text-headline-sm text-on-surface font-semibold focus:outline-none">
                  <span>
                    Can we customize the pipeline stages for different types of deals?
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-outline text-[20px]" data-icon="keyboard_arrow_down">
                    keyboard_arrow_down
                  </span>
                </button>
                {' '}
                <div className="hidden px-6 pb-5 pt-1 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 leading-relaxed">
                  Yes, each pipeline can possess its own schema, mandatory milestone validation gates, document requirements, and custom approval workflows.
                </div>
              </div>
              <div className="glass-card rounded-[10px] border border-outline-variant/40 overflow-hidden">
                <button className="w-full px-6 py-4.5 text-left flex items-center justify-between font-headline-sm text-headline-sm text-on-surface font-semibold focus:outline-none">
                  <span>
                    Can we set different pipelines for different products or regions?
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-outline text-[20px]" data-icon="keyboard_arrow_down">
                    keyboard_arrow_down
                  </span>
                </button>
                {' '}
                <div className="hidden px-6 pb-5 pt-1 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 leading-relaxed">
                  Horizon supports limitless discrete pipelines segmented by region, product group, partner channels, or contract size, rolling up into territory views.
                </div>
              </div>
              <div className="glass-card rounded-[10px] border border-outline-variant/40 overflow-hidden">
                <button className="w-full px-6 py-4.5 text-left flex items-center justify-between font-headline-sm text-headline-sm text-on-surface font-semibold focus:outline-none">
                  <span>
                    Does it work well for a small sales team just starting out?
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-outline text-[20px]" data-icon="keyboard_arrow_down">
                    keyboard_arrow_down
                  </span>
                </button>
                {' '}
                <div className="hidden px-6 pb-5 pt-1 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 leading-relaxed">
                  The platform deploys with clean out-of-the-box defaults that simplify operations for small teams while providing the underlying architectural rigor to scale without migration.
                </div>
              </div>
              <div className="glass-card rounded-[10px] border border-outline-variant/40 overflow-hidden">
                <button className="w-full px-6 py-4.5 text-left flex items-center justify-between font-headline-sm text-headline-sm text-on-surface font-semibold focus:outline-none">
                  <span>
                    Can we track competitor mentions or loss reasons on lost deals?
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-outline text-[20px]" data-icon="keyboard_arrow_down">
                    keyboard_arrow_down
                  </span>
                </button>
                {' '}
                <div className="hidden px-6 pb-5 pt-1 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 leading-relaxed">
                  Every closed-lost transition mandates structured categorizations and competitor tagging, continuously feeding the territorial loss analysis dashboard.
                </div>
              </div>
              <div className="glass-card rounded-[10px] border border-outline-variant/40 overflow-hidden">
                <button className="w-full px-6 py-4.5 text-left flex items-center justify-between font-headline-sm text-headline-sm text-on-surface font-semibold focus:outline-none">
                  <span>
                    How long does implementation typically take?
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-outline text-[20px]" data-icon="keyboard_arrow_down">
                    keyboard_arrow_down
                  </span>
                </button>
                {' '}
                <div className="hidden px-6 pb-5 pt-1 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 leading-relaxed">
                  Standard technical onboarding and data import are completed within weeks, including legacy CRM sanitization, field mapping, and rep training sprints.
                </div>
              </div>
              <div className="glass-card rounded-[10px] border border-outline-variant/40 overflow-hidden">
                <button className="w-full px-6 py-4.5 text-left flex items-center justify-between font-headline-sm text-headline-sm text-on-surface font-semibold focus:outline-none">
                  <span>
                    Is our data secure, and who owns it?
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-outline text-[20px]" data-icon="keyboard_arrow_down">
                    keyboard_arrow_down
                  </span>
                </button>
                {' '}
                <div className="hidden px-6 pb-5 pt-1 text-body-md font-body-md text-on-surface-variant border-t border-outline-variant/20 leading-relaxed">
                  Encrypted hosting, role-based access control, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1600px] mx-auto px-6 sm:px-8 py-20 lg:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-2">
                Looking for something else?
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                Browse our productized software and autonomous AI workflows engineered for operational velocity.
              </p>
            </div>
            {' '}
            <Link to="/products" className="text-primary font-label-lg text-label-lg font-semibold hover:underline inline-flex items-center gap-1 self-start md:self-auto">
              <span>
                Explore all product packages
              </span>
              {' '}
              <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-outline-variant/40 flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-primary-fixed/60 text-on-primary-fixed-variant flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[22px]" data-icon="support_agent">
                    support_agent
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                  Customer Support Ticketing
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-6">
                  Every customer question lands in one queue, gets an owner, and does not get forgotten.
                </p>
              </div>
              {' '}
              <a className="rounded-[10px] px-3.5 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold inline-flex items-center justify-between transition-colors" href="#">
                <span>
                  View Architecture
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]" data-icon="arrow_outward">
                  arrow_outward
                </span>
              </a>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-outline-variant/40 flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-secondary-fixed/60 text-on-secondary-fixed-variant flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[22px]" data-icon="account_balance">
                    account_balance
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                  Business Accounting Software
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-6">
                  Invoicing, expenses, and bank reconciliation in one place, so your books close without a week of catch-up.
                </p>
              </div>
              {' '}
              <a className="rounded-[10px] px-3.5 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold inline-flex items-center justify-between transition-colors" href="#">
                <span>
                  View Architecture
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]" data-icon="arrow_outward">
                  arrow_outward
                </span>
              </a>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-outline-variant/40 flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed/60 text-on-tertiary-fixed-variant flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[22px]" data-icon="developer_board">
                    developer_board
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                  Integrated Business Operations Platform
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-6">
                  Sales, inventory, finance, and HR reading from the same numbers, not five disconnected systems.
                </p>
              </div>
              {' '}
              <a className="rounded-[10px] px-3.5 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold inline-flex items-center justify-between transition-colors" href="#">
                <span>
                  View Architecture
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]" data-icon="arrow_outward">
                  arrow_outward
                </span>
              </a>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-outline-variant/40 flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-[10px] bg-surface-container-highest text-on-surface flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[22px]" data-icon="flight_takeoff">
                    flight_takeoff
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface mb-2">
                  AI Travel Agent
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-6">
                  Corporate travel policy compliance, automated itinerary booking, and live flight disruption rebooking.
                </p>
              </div>
              {' '}
              <a className="rounded-[10px] px-3.5 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold inline-flex items-center justify-between transition-colors" href="#">
                <span>
                  View Architecture
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px]" data-icon="arrow_outward">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="max-w-[1600px] mx-auto px-6 sm:px-8 pb-20">
          <div className="rounded-2xl p-10 sm:p-14 relative overflow-hidden text-center flex flex-col items-center justify-center text-on-primary shadow-2xl" style={{"background":"linear-gradient(135deg, #FF8A65 0%, #FF6B4A 60%, #a9371d 100%)"}}>
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-black/15 blur-3xl pointer-events-none" />
            <div className="max-w-3xl z-10">
              <h2 className="text-headline-lg font-headline-lg font-bold tracking-tight mb-4 text-white">
                Ready to bring deterministic certainty to your revenue pipeline?
              </h2>
              <p className="text-body-lg font-body-lg text-white/90 mb-8 max-w-xl mx-auto">
                Schedule a fixed-scope technical consultation with our enterprise systems engineers within 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="w-full sm:w-auto rounded-[10px] px-6 py-3.5 bg-white text-on-surface font-label-lg text-label-lg font-semibold hover:bg-white/95 transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2">
                  <span>
                    Book an Architectural Scoping Consultation
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[18px]" data-icon="calendar_today">
                    calendar_today
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
