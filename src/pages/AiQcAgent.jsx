// Generated from stitch/pd_ai-qc-agent.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './AiQcAgent.css'

export default function AiQcAgent() {
  return (
    <div className="pg-ai-qc-agent bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen relative overflow-x-hidden">
      <title>{"Horizon AI QC Agent | Field Service Intelligence"}</title>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10 opacity-70 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[550px] h-[550px] bg-gradient-to-br from-primary-fixed/40 to-primary-container/20 rounded-full blur-3xl transform -rotate-12" />
        <div className="absolute top-24 right-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-secondary-fixed/40 to-tertiary-fixed/30 rounded-full blur-3xl" />
      </div>
      {' '}
      {' '}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-4">
        <div className="flex items-center space-x-2 text-label-sm font-label-sm text-outline">
          <a className="hover:text-on-surface transition-colors flex items-center gap-1" href="#">
            <span className="material-symbols-outlined text-sm" data-icon="home">
              home
            </span>
            {' '}
            Home
          </a>
          {' '}
          <span>
            /
          </span>
          {' '}
          <Link to="/products" className="hover:text-on-surface transition-colors">
            Products
          </Link>
          {' '}
          <span>
            /
          </span>
          {' '}
          <a className="hover:text-on-surface transition-colors" href="#">
            AI Agents
          </a>
          {' '}
          <span>
            /
          </span>
          {' '}
          <span className="text-primary font-semibold">
            AI QC Agent
          </span>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[6px] bg-secondary-fixed/50 border border-secondary-fixed text-on-secondary-fixed-variant text-label-sm font-label-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              FIELD SERVICE AI
            </div>
            <h1 className="text-display-lg font-display-lg text-on-surface tracking-tight">
              AI QC Agent
            </h1>
            <p className="text-headline-md font-headline-md text-primary font-semibold leading-snug">
              Your whole installation knowledge base, in every technician's pocket.
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Provide instant, schematic-validated answers straight from upfitter manuals, custom harness drawings, and proprietary engineering SOPs. Zero hallucination tolerance with full page citations, live audio voice notes, and instant field escalations.
            </p>
            <div className="pt-4 flex flex-wrap gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface text-label-sm font-label-sm shadow-sm">
                <span className="material-symbols-outlined text-primary text-base" data-icon="schema">
                  schema
                </span>
                Instant Wire Schematics
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface text-label-sm font-label-sm shadow-sm">
                <span className="material-symbols-outlined text-tertiary text-base" data-icon="mic">
                  mic
                </span>
                Voice-to-Query
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface text-label-sm font-label-sm shadow-sm">
                <span className="material-symbols-outlined text-secondary text-base" data-icon="verified">
                  verified
                </span>
                100% Citation Backed
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface text-label-sm font-label-sm shadow-sm">
                <span className="material-symbols-outlined text-outline text-base" data-icon="cloud_sync">
                  cloud_sync
                </span>
                Offline-Ready Sync
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface text-label-sm font-label-sm shadow-sm">
                <span className="material-symbols-outlined text-primary-container text-base" data-icon="support_agent">
                  support_agent
                </span>
                Supervisor Escalation
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface text-label-sm font-label-sm shadow-sm">
                <span className="material-symbols-outlined text-tertiary text-base" data-icon="shield">
                  shield
                </span>
                Role-Based Access
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="glass-card p-8 md:p-10 shadow-xl shadow-on-surface/5 relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-primary-container/20 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-2 mb-6">
                <span className="px-2.5 py-1 rounded-[6px] bg-tertiary-fixed text-on-tertiary-fixed text-label-sm font-label-sm font-semibold uppercase tracking-wider">
                  Fast Pilot
                </span>
                <h2 className="text-headline-md font-headline-md text-on-surface">
                  Book a free demo
                </h2>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  See how the AI QC Agent eliminates install callbacks.
                </p>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                    Full Name
                  </label>
                  <input className="w-full h-12 px-4 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/50 focus:border-primary-container focus:ring-4 focus:ring-primary-container/15 text-body-md font-body-md text-on-surface placeholder:text-outline/60 transition outline-none" placeholder="Marcus Vance" type="text" />
                </div>
                <div>
                  <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                    Work Email
                  </label>
                  <input className="w-full h-12 px-4 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/50 focus:border-primary-container focus:ring-4 focus:ring-primary-container/15 text-body-md font-body-md text-on-surface placeholder:text-outline/60 transition outline-none" placeholder="m.vance@telecomupfitters.com" type="email" />
                </div>
                <div>
                  <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                    Phone Number
                  </label>
                  <input className="w-full h-12 px-4 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/50 focus:border-primary-container focus:ring-4 focus:ring-primary-container/15 text-body-md font-body-md text-on-surface placeholder:text-outline/60 transition outline-none" placeholder="Phone number" type="tel" />
                </div>
                <div>
                  <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                    Fleet Size / Team Size
                  </label>
                  <select className="w-full h-12 px-4 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/50 focus:border-primary-container focus:ring-4 focus:ring-primary-container/15 text-body-md font-body-md text-on-surface transition outline-none">
                    <option value="10-25">
                      10 – 25 Technicians / Vans
                    </option>
                    <option value="26-75">
                      26 – 75 Technicians / Vans
                    </option>
                    <option value="76-250">
                      76 – 250 Technicians / Fleet
                    </option>
                    <option value="250+">
                      250+ Enterprise Fleet
                    </option>
                  </select>
                </div>
                <button className="w-full h-14 mt-4 rounded-[10px] text-label-lg font-label-lg font-semibold text-white glow-primary-pill transition duration-200 active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
                  <span>
                    Request 15-Min Live Demo
                  </span>
                  <span className="material-symbols-outlined text-lg" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </button>
                <div className="flex items-center justify-center gap-2 pt-2 text-label-sm font-label-sm text-outline">
                  <span className="material-symbols-outlined text-sm text-secondary" data-icon="lock">
                    lock
                  </span>
                  <span>
                    Fast turnaround · No spam
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-tertiary-fixed/60 text-on-tertiary-fixed text-label-sm font-label-sm font-semibold mb-3">
            FIELD EXPERIENCE
          </div>
          <h2 className="text-headline-lg font-headline-lg text-on-surface">
            See the QC Agent on the job
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2">
            Tested in active service bays, bucket trucks, and remote worksites with spotty cellular connection.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-12 flex justify-center">
            <div className="w-full max-w-sm rounded-[40px] p-3 bg-surface-container-highest border border-outline-variant/60 shadow-2xl">
              <div className="rounded-[32px] bg-surface-container-lowest p-5 space-y-4 overflow-hidden border border-outline-variant/30">
                <div className="flex items-center justify-between pb-3 border-b border-surface-container-high">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm">
                      QC
                    </div>
                    <div>
                      <div className="text-label-md font-label-md text-on-surface font-semibold">
                        Horizon QC Agent
                      </div>
                      <div className="text-[10px] text-secondary flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {' '}
                        Active • Offline Database Ready
                      </div>
                    </div>
                  </div>
                  {' '}
                  <span className="material-symbols-outlined text-outline text-lg" data-icon="more_vert">
                    more_vert
                  </span>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <div className="bg-surface-container-high rounded-2xl rounded-tr-sm p-3 max-w-[90%] space-y-2 border border-outline-variant/20">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl" data-icon="graphic_eq">
                        graphic_eq
                      </span>
                      {' '}
                      <div className="h-2 w-28 bg-primary/20 rounded-full overflow-hidden flex items-center">
                        <div className="h-full w-3/4 bg-primary rounded-full" />
                      </div>
                      {' '}
                      <span className="text-label-sm font-label-sm text-outline">
                        0:06
                      </span>
                    </div>
                    <p className="text-body-sm font-body-sm text-on-surface">
                      "Where does the secondary relay harness tap into on a 2024 Ford Transit van auxiliary battery?"
                    </p>
                  </div>
                  {' '}
                  <span className="text-[10px] text-outline px-1">
                    Dave T. • 10:42 AM
                  </span>
                </div>
                <div className="flex flex-col items-start space-y-1">
                  <div className="bg-surface-container-low rounded-2xl rounded-tl-sm p-3.5 space-y-3 border border-outline-variant/40 shadow-sm max-w-[96%]">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2 py-0.5 rounded-[6px] bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs" data-icon="check_circle">
                          check_circle
                        </span>
                        100% verified match
                      </span>
                      {' '}
                      <span className="text-[10px] text-outline">
                        1.2s lookup
                      </span>
                    </div>
                    <p className="text-body-sm font-body-sm text-on-surface font-medium">
                      Connect the 40A fused lead to
                      {' '}
                      <span className="font-bold text-primary">
                        Pin 4 of Connector C33-E
                      </span>
                      {' '}
                      located under the driver-side seat pedestal.
                    </p>
                    <div className="p-2.5 rounded-[3rem] bg-surface-container-lowest border border-outline-variant/50 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-on-surface">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs text-primary" data-icon="description">
                            description
                          </span>
                          {' '}
                          Ford Transit Upfitter Manual v3.2
                        </span>
                        {' '}
                        <span className="text-primary font-bold">
                          p. 142
                        </span>
                      </div>
                      <div className="h-14 rounded-[2rem] bg-surface-container flex items-center justify-center text-outline text-[11px] border border-dashed border-outline-variant">
                        [Schematic: Harness C33-E Pinout 1-8]
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm text-secondary" data-icon="verified_user">
                        verified_user
                      </span>
                      {' '}
                      Audited by Fleet Engineering Group • Rev 2024.4
                    </div>
                  </div>
                  {' '}
                  <span className="text-[10px] text-outline px-1">
                    AI QC Agent • 10:42 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="glass-card p-8 md:p-12 border border-white">
          <div className="max-w-3xl mb-12">
            <span className="text-label-sm font-label-sm text-primary font-bold uppercase tracking-wider">
              The Operational Bottleneck
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface mt-2">
              Technicians lose hours every day thumbing through lengthy service PDFs or waiting on hold for senior supervisors.
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-4">
              When technicians hit ambiguous instructions, they make one of two choices: halt work to call dispatch, or guess. Both choices decimate operating margins and destroy customer trust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-surface-container-lowest/80 border border-outline-variant/30 hover:border-primary-fixed transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-secondary-fixed/50 flex items-center justify-center text-secondary mb-5">
                <span className="material-symbols-outlined text-2xl" data-icon="cloud_upload">
                  cloud_upload
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                Upload manuals once
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Ingests proprietary SOPs, OEM schematics, torque specs, and harness pinouts in minutes with automatic architectural hierarchy tagging.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-surface-container-lowest/80 border border-outline-variant/30 hover:border-primary-fixed transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary mb-5">
                <span className="material-symbols-outlined text-2xl" data-icon="fact_check">
                  fact_check
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                Every value checked before shown
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Strict ground-truth gating. Zero guessing. Every wire color and relay location links directly to an audited page and schematic vector.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-surface-container-lowest/80 border border-outline-variant/30 hover:border-primary-fixed transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary mb-5">
                <span className="material-symbols-outlined text-2xl" data-icon="radar">
                  radar
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                Managers see every unanswered query
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Automatic knowledge-gap radar flags missing documentation in real time so operations can proactively patch SOPs before the next field failure.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="mb-12">
          <span className="text-label-sm font-label-sm text-primary font-bold uppercase tracking-wider">
            Engineered for Precision
          </span>
          {' '}
          <h2 className="text-headline-lg font-headline-lg text-on-surface mt-1">
            Capabilities built for zero-defect field teams
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-2xl bg-surface-container-lowest/60 border border-transparent hover:border-outline-variant/50 transition cursor-pointer flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <span className="text-label-md font-label-md text-outline font-bold">
                  01
                </span>
                {' '}
                <span className="text-body-md font-body-md font-medium text-on-surface group-hover:text-primary transition-colors">
                  Instant vehicle lookup
                </span>
              </div>
              {' '}
              <span className="material-symbols-outlined text-outline group-hover:text-primary text-sm" data-icon="arrow_forward_ios">
                arrow_forward_ios
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-surface-container-lowest border-2 border-primary-container shadow-md transition cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-label-md font-label-md text-primary font-bold">
                  02
                </span>
                {' '}
                <span className="text-body-md font-body-md font-bold text-on-surface">
                  Verified answers only
                </span>
              </div>
              {' '}
              <span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">
                check_circle
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-surface-container-lowest/60 border border-transparent hover:border-outline-variant/50 transition cursor-pointer flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <span className="text-label-md font-label-md text-outline font-bold">
                  03
                </span>
                {' '}
                <span className="text-body-md font-body-md font-medium text-on-surface group-hover:text-primary transition-colors">
                  Voice and text on the job
                </span>
              </div>
              {' '}
              <span className="material-symbols-outlined text-outline group-hover:text-primary text-sm" data-icon="arrow_forward_ios">
                arrow_forward_ios
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-surface-container-lowest/60 border border-transparent hover:border-outline-variant/50 transition cursor-pointer flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <span className="text-label-md font-label-md text-outline font-bold">
                  04
                </span>
                {' '}
                <span className="text-body-md font-body-md font-medium text-on-surface group-hover:text-primary transition-colors">
                  Knowledge gap tracking
                </span>
              </div>
              {' '}
              <span className="material-symbols-outlined text-outline group-hover:text-primary text-sm" data-icon="arrow_forward_ios">
                arrow_forward_ios
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-surface-container-lowest/60 border border-transparent hover:border-outline-variant/50 transition cursor-pointer flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <span className="text-label-md font-label-md text-outline font-bold">
                  05
                </span>
                {' '}
                <span className="text-body-md font-body-md font-medium text-on-surface group-hover:text-primary transition-colors">
                  Built from your own documents
                </span>
              </div>
              {' '}
              <span className="material-symbols-outlined text-outline group-hover:text-primary text-sm" data-icon="arrow_forward_ios">
                arrow_forward_ios
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-surface-container-lowest/60 border border-transparent hover:border-outline-variant/50 transition cursor-pointer flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <span className="text-label-md font-label-md text-outline font-bold">
                  06
                </span>
                {' '}
                <span className="text-body-md font-body-md font-medium text-on-surface group-hover:text-primary transition-colors">
                  Response time on record
                </span>
              </div>
              {' '}
              <span className="material-symbols-outlined text-outline group-hover:text-primary text-sm" data-icon="arrow_forward_ios">
                arrow_forward_ios
              </span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 h-full flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
                  <span className="px-3 py-1 rounded-[6px] bg-primary-fixed text-on-primary-fixed text-label-sm font-label-sm font-semibold">
                    FEATURE 02 AUDIT
                  </span>
                  <span className="text-label-sm font-label-sm text-outline flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {' '}
                    Ground-Truth Engine Live
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-md font-headline-md text-on-surface">
                    Verified answers only
                  </h3>
                  <p className="text-body-lg font-body-lg text-on-surface-variant mt-2 leading-relaxed">
                    Strict ground-truth enforcement that refuses to hallucinate. If the ingested engineering repository does not contain audited verification, the model flags the supervisor rather than guessing. Exact source PDF citations and schematic crops are displayed alongside every single response.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container-low/80 border border-outline-variant/30 space-y-4">
                  <div className="text-label-sm font-label-sm text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-base" data-icon="shield_check">
                      format_image_left
                    </span>
                    {' '}
                    <span>
                      Deterministic dual-pass schematic raster validator enabled.
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-outline">
                  {"Automatic updates synced across iOS, Android & WhatsApp"}
                </span>
                {' '}
                <a className="text-label-md font-label-md text-primary font-semibold hover:underline flex items-center gap-1" href="#">
                  Read Ground Truth Whitepaper
                  {' '}
                  <span className="material-symbols-outlined text-sm" data-icon="north_east">
                    north_east
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-label-sm font-label-sm text-primary font-bold uppercase tracking-wider">
            Workflow Architecture
          </span>
          {' '}
          <h2 className="text-headline-lg font-headline-lg text-on-surface mt-2">
            How Horizon QC operates on-site
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2">
            Four connected stages connecting field mechanics with head engineering.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="glass-card p-6 flex flex-col justify-between relative group hover:border-primary-container transition duration-300">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-label-md font-label-md mb-4">
                01
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                Tech asks on site
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Technician asks via natural voice or snaps a photo of an unlabelled wire cluster directly from the vehicle cab.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-outline">
              <span className="material-symbols-outlined text-sm text-primary" data-icon="mic">
                mic
              </span>
              {' '}
              Hands-free voice recognition
            </div>
          </div>
          <div className="glass-card p-6 flex flex-col justify-between relative group hover:border-primary-container transition duration-300">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-label-md font-label-md mb-4">
                02
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                Answer is checked first
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Vector search cross-references certified engineering schematics and page numbers before returning the exact wiring pinout.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-outline">
              <span className="material-symbols-outlined text-sm text-tertiary" data-icon="verified">
                verified
              </span>
              {' '}
              Ground-truth verification
            </div>
          </div>
          <div className="glass-card p-6 flex flex-col justify-between relative group hover:border-primary-container transition duration-300">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-label-md font-label-md mb-4">
                03
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                Manager sees the gaps
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Unanswered or ambiguous queries instantly flag supervisory dashboards, alerting engineering to ambiguous field steps.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-outline">
              <span className="material-symbols-outlined text-sm text-secondary" data-icon="visibility">
                visibility
              </span>
              {' '}
              Live knowledge radar
            </div>
          </div>
          <div className="glass-card p-6 flex flex-col justify-between relative group hover:border-primary-container transition duration-300">
            <div>
              <div className="w-10 h-10 rounded-[10px] bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-label-md font-label-md mb-4">
                04
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                Team documents updates
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Engineering updates the single source of truth; corrections are pushed live to all technician mobile devices instantly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-outline">
              <span className="material-symbols-outlined text-sm text-primary" data-icon="sync">
                sync
              </span>
              {' '}
              Instant OTA sync
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="mb-12">
          <span className="text-label-sm font-label-sm text-primary font-bold uppercase tracking-wider">
            Business Impact
          </span>
          {' '}
          <h2 className="text-headline-lg font-headline-lg text-on-surface mt-2">
            Measurable operational returns
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="glass-card p-8 flex gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-3xl" data-icon="speed">
                speed
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Faster installs
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Reduce average field install time per vehicle. Technicians finish shifts ahead of schedule without sacrificing harness precision or safety standards.
              </p>
              <div className="text-label-md font-label-md text-primary font-semibold pt-1">
                Fast ROI payback →
              </div>
            </div>
          </div>
          <div className="glass-card p-8 flex gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
              <span className="material-symbols-outlined text-3xl" data-icon="done_all">
                done_all
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Fewer mistakes
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Cut warranty callbacks and faulty wiring rework. Eliminate blown auxiliary fuses and pinout mismatches before the fleet rolls out.
              </p>
              <div className="text-label-md font-label-md text-secondary font-semibold pt-1">
                Less harness damage →
              </div>
            </div>
          </div>
          <div className="glass-card p-8 flex gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0">
              <span className="material-symbols-outlined text-3xl" data-icon="psychology">
                psychology
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Knowledge that stays
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Protect decades of master technician wisdom when staff turn over. Captured tribal knowledge stays searchable across every current and future squad.
              </p>
              <div className="text-label-md font-label-md text-tertiary font-semibold pt-1">
                Zero tribal knowledge attrition →
              </div>
            </div>
          </div>
          <div className="glass-card p-8 flex gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-on-surface shrink-0">
              <span className="material-symbols-outlined text-3xl" data-icon="auto_graph">
                auto_graph
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Documentation that improves itself
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Live analytics reveal your most confusing service procedures. Discover ambiguities in your manufacturer drawings before they manifest as field errors.
              </p>
              <div className="text-label-md font-label-md text-on-surface font-semibold pt-1">
                Automated clarity scoring →
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card-subtle p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-2xl" data-icon="lock_open">
              lock_open
            </span>
            {' '}
            <div>
              <div className="text-label-md font-label-md font-semibold text-on-surface">
                Enterprise-grade security
              </div>
              <div className="text-body-sm font-body-sm text-outline">
                Encrypted hosting, role-based access and regular backups
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 md:border-x md:border-outline-variant/30 md:px-6">
            <span className="material-symbols-outlined text-primary text-2xl" data-icon="price_check">
              price_check
            </span>
            {' '}
            <div>
              <div className="text-label-md font-label-md font-semibold text-on-surface">
                Fixed scoped pricing
              </div>
              <div className="text-body-sm font-body-sm text-outline">
                Guaranteed deployment cost, no runaway token bills
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-tertiary text-2xl" data-icon="devices">
              devices
            </span>
            {' '}
            <div>
              <div className="text-label-md font-label-md font-semibold text-on-surface">
                Built for the whole team
              </div>
              <div className="text-body-sm font-body-sm text-outline">
                {"Works on iOS, Android, rugged scanners & SMS"}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-label-sm font-label-sm text-primary font-bold uppercase tracking-wider">
            Operational Contrast
          </span>
          {' '}
          <h2 className="text-headline-lg font-headline-lg text-on-surface mt-2">
            The Old Field Operation vs. Horizon
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/40 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                The Old Field Operation
              </h3>
              <span className="px-3 py-1 rounded-[6px] bg-error-container text-on-error-container text-label-sm font-label-sm font-semibold">
                Fragile
              </span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface-variant">
                <span className="material-symbols-outlined text-error text-xl shrink-0" data-icon="cancel">
                  cancel
                </span>
                <span>
                  Long supervisor phone queues while technicians sit idle in customer driveways.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface-variant">
                <span className="material-symbols-outlined text-error text-xl shrink-0" data-icon="cancel">
                  cancel
                </span>
                <span>
                  Stained, torn paper manuals left forgotten beneath seats in service van floors.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface-variant">
                <span className="material-symbols-outlined text-error text-xl shrink-0" data-icon="cancel">
                  cancel
                </span>
                <span>
                  Rogue guessing on wire colors causing burned harness looms and warranty claims.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface-variant">
                <span className="material-symbols-outlined text-error text-xl shrink-0" data-icon="cancel">
                  cancel
                </span>
                <span>
                  Zero executive visibility into technician doubts or recurring installation blockers.
                </span>
              </li>
            </ul>
          </div>
          <div className="glass-card p-8 border-2 border-primary-container space-y-6 relative overflow-hidden shadow-lg">
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary-fixed/30 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between pb-4 border-b border-primary-fixed/50">
              <h3 className="text-headline-sm font-headline-sm text-primary font-bold">
                With Horizon AI QC Agent
              </h3>
              <span className="px-3 py-1 rounded-[6px] bg-secondary-fixed text-on-secondary-fixed-variant text-label-sm font-label-sm font-semibold">
                Standard of Care
              </span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface font-medium">
                <span className="material-symbols-outlined text-secondary text-xl shrink-0" data-icon="check_circle">
                  check_circle
                </span>
                <span>
                  Instant verified citations directly with specific OEM page citations.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface font-medium">
                <span className="material-symbols-outlined text-secondary text-xl shrink-0" data-icon="check_circle">
                  check_circle
                </span>
                <span>
                  Spoken voice queries work reliably while hands are greasy and gloves are on.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface font-medium">
                <span className="material-symbols-outlined text-secondary text-xl shrink-0" data-icon="check_circle">
                  check_circle
                </span>
                <span>
                  Real-time supervisory telemetry tracking procedural bottlenecks as they occur.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body-md font-body-md text-on-surface font-medium">
                <span className="material-symbols-outlined text-secondary text-xl shrink-0" data-icon="check_circle">
                  check_circle
                </span>
                <span>
                  Complete, cryptographically signed audit log for every single vehicle installation.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-12">
          <span className="text-label-sm font-label-sm text-primary font-bold uppercase tracking-wider">
            Enterprise Inquiries
          </span>
          {' '}
          <h2 className="text-headline-lg font-headline-lg text-on-surface mt-2">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          <details className="glass-card p-6 group rounded-2xl cursor-pointer" open>
            <summary className="flex justify-between items-center text-headline-sm font-headline-sm text-on-surface list-none">
              <span>
                1. What happens if a wiring diagram doesn't exist in our uploaded manuals?
              </span>
              {' '}
              <span className="material-symbols-outlined text-outline transition-transform duration-300 group-open:rotate-180" data-icon="expand_more">
                expand_more
              </span>
            </summary>
            <p className="text-body-md font-body-md text-on-surface-variant mt-4 leading-relaxed border-t border-outline-variant/20 pt-4">
              Horizon explicitly rejects hallucination. If a pinout or wire gauge specification does not exist in your ingested documentation, the QC Agent informs the technician immediately and triggers a high-priority supervisor escalation ticket. It will never guess or infer unverified electrical connections.
            </p>
          </details>
          <details className="glass-card p-6 group rounded-2xl cursor-pointer">
            <summary className="flex justify-between items-center text-headline-sm font-headline-sm text-on-surface list-none">
              <span>
                2. Can technicians use this with grease-covered hands or gloves on?
              </span>
              {' '}
              <span className="material-symbols-outlined text-outline transition-transform duration-300 group-open:rotate-180" data-icon="expand_more">
                expand_more
              </span>
            </summary>
            <p className="text-body-md font-body-md text-on-surface-variant mt-4 leading-relaxed border-t border-outline-variant/20 pt-4">
              Yes. Horizon includes hands-free voice audio note ingestion. Technicians tap once or use the background wake prompt, speak their query normally even in high-noise engine bays, and receive synthesized audio feedback with the diagram automatically queued on screen.
            </p>
          </details>
          <details className="glass-card p-6 group rounded-2xl cursor-pointer">
            <summary className="flex justify-between items-center text-headline-sm font-headline-sm text-on-surface list-none">
              <span>
                3. Does Horizon train public AI models on our proprietary installation schematics?
              </span>
              {' '}
              <span className="material-symbols-outlined text-outline transition-transform duration-300 group-open:rotate-180" data-icon="expand_more">
                expand_more
              </span>
            </summary>
            <p className="text-body-md font-body-md text-on-surface-variant mt-4 leading-relaxed border-t border-outline-variant/20 pt-4">
              Never. All uploaded enterprise documentation, wiring schematics, and field query records are segregated within an isolated, customer-dedicated tenant encrypted via AES-256 and TLS 1.3. We offer contractual zero-data-retention guarantees for model fine-tuning.
            </p>
          </details>
          <details className="glass-card p-6 group rounded-2xl cursor-pointer">
            <summary className="flex justify-between items-center text-headline-sm font-headline-sm text-on-surface list-none">
              <span>
                4. How long does it take to ingest our library of service manuals and vehicle upfitter guides?
              </span>
              {' '}
              <span className="material-symbols-outlined text-outline transition-transform duration-300 group-open:rotate-180" data-icon="expand_more">
                expand_more
              </span>
            </summary>
            <p className="text-body-md font-body-md text-on-surface-variant mt-4 leading-relaxed border-t border-outline-variant/20 pt-4">
              A standard corpus of service manuals across your vehicle platforms is processed, indexed, and validated against our ground-truth vector benchmark within a few business days. Our deployment engineers supervise the semantic chunking of all complex fold-out schematics.
            </p>
          </details>
          <details className="glass-card p-6 group rounded-2xl cursor-pointer">
            <summary className="flex justify-between items-center text-headline-sm font-headline-sm text-on-surface list-none">
              <span>
                5. What field mobile devices and operating systems are supported?
              </span>
              {' '}
              <span className="material-symbols-outlined text-outline transition-transform duration-300 group-open:rotate-180" data-icon="expand_more">
                expand_more
              </span>
            </summary>
            <p className="text-body-md font-body-md text-on-surface-variant mt-4 leading-relaxed border-t border-outline-variant/20 pt-4">
              Horizon runs natively on iOS, iPadOS, Android, and rugged industrial barcode scanners (Zebra, Honeywell). For zero-install deployments, technicians can also interact seamlessly through secure enterprise WhatsApp or direct SMS bridges.
            </p>
          </details>
          <details className="glass-card p-6 group rounded-2xl cursor-pointer">
            <summary className="flex justify-between items-center text-headline-sm font-headline-sm text-on-surface list-none">
              <span>
                6. How does the fixed-scope pricing work for field technician seats?
              </span>
              {' '}
              <span className="material-symbols-outlined text-outline transition-transform duration-300 group-open:rotate-180" data-icon="expand_more">
                expand_more
              </span>
            </summary>
            <p className="text-body-md font-body-md text-on-surface-variant mt-4 leading-relaxed border-t border-outline-variant/20 pt-4">
              Horizon provides all enterprise solutions as guaranteed, fixed-scope deployments. You pay a single upfront rollout and validation cost followed by predictable flat monthly tiers per active field vehicle, completely immune to token volatility or surge spikes.
            </p>
          </details>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-outline-variant/30">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-label-sm font-label-sm text-primary font-bold uppercase tracking-wider">
              Enterprise Architecture Suite
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface mt-2">
              More from the Horizon ecosystem
            </h2>
          </div>
          {' '}
          <Link to="/products" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-label-lg font-label-lg font-semibold text-primary hover:underline">
            Explore all 25+ product packages
            {' '}
            <span className="material-symbols-outlined text-lg" data-icon="arrow_forward">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div>
              <div className="w-10 h-10 rounded-[3rem] bg-tertiary-fixed flex items-center justify-center text-tertiary mb-4">
                <span className="material-symbols-outlined" data-icon="flight_takeoff">
                  flight_takeoff
                </span>
              </div>
              {' '}
              <span className="text-label-sm font-label-sm text-outline font-semibold uppercase">
                Autonomous Operations
              </span>
              {' '}
              <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">
                AI Travel Agent
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Corporate travel policy compliance, automated itinerary booking, and live flight disruption rebooking.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-md font-label-md font-semibold text-primary">
              <span>
                View product
              </span>
              {' '}
              <span className="material-symbols-outlined text-base" data-icon="chevron_right">
                chevron_right
              </span>
            </div>
          </div>
          <div className="glass-card p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div>
              <div className="w-10 h-10 rounded-[3rem] bg-primary-fixed flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined" data-icon="badge">
                  badge
                </span>
              </div>
              {' '}
              <span className="text-label-sm font-label-sm text-outline font-semibold uppercase">
                Revenue AI
              </span>
              {' '}
              <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">
                Exhibition Lead Intelligence
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Live trade show badge OCR, conversational audio summary, and instantaneous HubSpot/Salesforce CRM triage.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-md font-label-md font-semibold text-primary">
              <span>
                View product
              </span>
              {' '}
              <span className="material-symbols-outlined text-base" data-icon="chevron_right">
                chevron_right
              </span>
            </div>
          </div>
          <div className="glass-card p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div>
              <div className="w-10 h-10 rounded-[3rem] bg-secondary-fixed flex items-center justify-center text-secondary mb-4">
                <span className="material-symbols-outlined" data-icon="local_shipping">
                  local_shipping
                </span>
              </div>
              {' '}
              <span className="text-label-sm font-label-sm text-outline font-semibold uppercase">
                Field Operations
              </span>
              {' '}
              <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">
                Field Service Management
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Unified dispatch scheduling, fleet telematics mapping, client job confirmation, and invoicing sync.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-md font-label-md font-semibold text-primary">
              <span>
                View product
              </span>
              {' '}
              <span className="material-symbols-outlined text-base" data-icon="chevron_right">
                chevron_right
              </span>
            </div>
          </div>
          <div className="glass-card p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div>
              <div className="w-10 h-10 rounded-[3rem] bg-surface-container-high flex items-center justify-center text-on-surface mb-4">
                <span className="material-symbols-outlined" data-icon="hub">
                  hub
                </span>
              </div>
              {' '}
              <span className="text-label-sm font-label-sm text-outline font-semibold uppercase">
                Enterprise Core
              </span>
              {' '}
              <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">
                Integrated ERP
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Unified platform uniting parts inventory, work order billing, warranty reconciliation, and real-time ledger sync.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-md font-label-md font-semibold text-primary">
              <span>
                View product
              </span>
              {' '}
              <span className="material-symbols-outlined text-base" data-icon="chevron_right">
                chevron_right
              </span>
            </div>
          </div>
        </div>
      </section>
      {' '}
    </div>
  )
}
