// Generated from stitch/home.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="pg-home bg-surface text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen relative">
      <title>{"Horizons — Connected AI Automation & Modular ERP"}</title>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-gradient-to-b from-[#ffdad2]/40 via-[#ff7555]/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-[35%] -left-32 w-[550px] h-[550px] bg-[#a5f3fc]/25 blur-3xl rounded-full" />
        <div className="absolute top-[60%] -right-32 w-[600px] h-[600px] bg-[#d9f99d]/20 blur-3xl rounded-full" />
      </div>
      {' '}
      {' '}
      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[6px] bg-white/80 border border-white/90 shadow-sm backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#ff7555] animate-pulse" />
              {' '}
              <span className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">
                The Modern Operating System for Scaled Business
              </span>
            </div>
            <h1 className="text-display-lg font-display-lg text-on-surface tracking-tight text-balance">
              Run your entire business on one connected,
              {' '}
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
                AI-assisted system.
              </span>
            </h1>
            <p className="mt-6 text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto text-balance">
              Productized AI automation and modular ERP packages delivered with guaranteed fixed scope, fixed price, and a go-live date you can bank on.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/products" className="w-full sm:w-auto px-8 py-4 rounded-[10px] bg-gradient-to-r from-[#ff7555] to-[#ff9e7a] text-white text-label-lg font-label-lg glow-peach hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-2">
                <span>
                  Explore products
                </span>
                {' '}
                <span className="material-symbols-outlined text-lg">
                  expand_circle_right
                </span>
              </Link>
              {' '}
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-[10px] neo-glass text-on-surface text-label-lg font-label-lg hover:bg-white hover:text-primary transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-sm">
                <span>
                  Get a scoping doc
                </span>
                {' '}
                <span className="material-symbols-outlined text-lg">
                  description
                </span>
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] neo-glass text-label-sm font-label-sm text-on-surface-variant">
                <span className="w-5 h-5 rounded-full bg-[#d9f99d] flex items-center justify-center text-[#2D4A08]">
                  <span className="material-symbols-outlined text-[13px]">
                    check
                  </span>
                </span>
                {' '}
                <span>
                  25+ ready-made packages
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] neo-glass text-label-sm font-label-sm text-on-surface-variant">
                <span className="w-5 h-5 rounded-full bg-[#a5f3fc] flex items-center justify-center text-[#0E4A56]">
                  <span className="material-symbols-outlined text-[13px]">
                    verified_user
                  </span>
                </span>
                {' '}
                <span>
                  100% Fixed price
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] neo-glass text-label-sm font-label-sm text-on-surface-variant">
                <span className="w-5 h-5 rounded-full bg-[#ffdad2] flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[13px]">
                    bolt
                  </span>
                </span>
                {' '}
                <span>
                  Live in weeks
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20" id="products">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-label-sm font-label-sm uppercase tracking-wider text-primary font-bold">
                Product Catalog
              </span>
              {' '}
              <h2 className="text-headline-lg font-headline-lg text-on-surface mt-2 tracking-tight">
                One catalogue, every part of the business
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant mt-2 max-w-xl">
                Every module is fully productized: pre-configured data models, hardened APIs, and rapid zero-surprise go-lives.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-white border border-white/90 text-label-sm font-label-sm text-on-surface shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#d9f99d]" />
                {' '}
                All packages include fixed-scope SLAs
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 neo-glass rounded-[32px] p-8 md:p-10 border border-white/80 shadow-md relative overflow-hidden group hover:border-[#a5f3fc] transition-colors duration-200">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] text-label-sm font-label-sm bg-[#a5f3fc] text-[#0E4A56] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#0E4A56] animate-ping" />
                  {' '}
                  Autonomous Intelligence
                </span>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant">
                  psychology
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mt-6">
                AI Agents
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant mt-2 max-w-lg">
                Autonomous software workers trained on company knowledge, handling high-touch workflows without human lag.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-white/70 border border-white/90">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    construction
                  </span>
                  {' '}
                  <div className="font-semibold text-body-sm text-on-surface mt-2">
                    AI QC Agent
                  </div>
                  <p className="text-label-sm text-on-surface-variant mt-1">
                    Autonomous field inspection checks
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/70 border border-white/90">
                  <span className="material-symbols-outlined text-[#0E4A56] text-[20px]">
                    flight_takeoff
                  </span>
                  {' '}
                  <div className="font-semibold text-body-sm text-on-surface mt-2">
                    AI Travel Agent
                  </div>
                  <p className="text-label-sm text-on-surface-variant mt-1">
                    {"Corporate policy & booking agent"}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/70 border border-white/90">
                  <span className="material-symbols-outlined text-[#2D4A08] text-[20px]">
                    contact_page
                  </span>
                  {' '}
                  <div className="font-semibold text-body-sm text-on-surface mt-2">
                    Exhibition Leads
                  </div>
                  <p className="text-label-sm text-on-surface-variant mt-1">
                    {"Live booth lead OCR & CRM triage"}
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 neo-glass rounded-[32px] p-8 md:p-10 border border-white/80 shadow-md group hover:border-[#d9f99d] transition-colors duration-200">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-[6px] text-label-sm font-label-sm bg-[#d9f99d] text-[#2D4A08] font-semibold">
                  {"Supply & Warehouse"}
                </span>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant">
                  inventory_2
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mt-6">
                {"Operations & Supply Chain"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Precision materials flow, real-time inventory management, and floor coordination.
              </p>
              <ul className="mt-6 space-y-2 text-body-sm font-body-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {' '}
                  {"Inventory Control & Multi-Location Stock"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {' '}
                  {"Warehouse Operations & Barcode Scanners"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {' '}
                  Production Floor Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {' '}
                  {"Production Planning & Scheduling"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {' '}
                  Rental Fleet Management
                </li>
              </ul>
            </div>
            <div className="md:col-span-4 neo-glass rounded-[32px] p-8 border border-white/80 shadow-md group hover:border-primary-container transition-colors duration-200">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-[6px] text-label-sm font-label-sm bg-primary-fixed text-on-primary-fixed-variant font-semibold">
                  {"Ledger & Fiscal"}
                </span>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant">
                  account_balance
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mt-5">
                Finance
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Zero-lag financial auditing and automated reconciliation engines.
              </p>
              <div className="mt-5 space-y-2 text-body-sm font-body-sm text-on-surface">
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90">
                  {"Business Accounting & Invoicing"}
                </div>
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90">
                  {"Payroll & Direct Remittance"}
                </div>
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90">
                  Employee Expense Management
                </div>
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90">
                  Ecommerce-to-Finance Automated Sync
                </div>
              </div>
            </div>
            <div className="md:col-span-4 neo-glass rounded-[32px] p-8 border border-white/80 shadow-md group hover:border-[#a5f3fc] transition-colors duration-200">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-[6px] text-label-sm font-label-sm bg-[#a5f3fc] text-[#0E4A56] font-semibold">
                  Human Capital
                </span>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant">
                  groups
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mt-5">
                People
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Team records, recruitment pipelines, and performance track logs.
              </p>
              <div className="mt-5 space-y-2 text-body-sm font-body-sm text-on-surface">
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90">
                  {"HR Management & Self-Service"}
                </div>
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90">
                  {"Recruitment Management & Pipelines"}
                </div>
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90">
                  Applicant Tracking with AI Resume Scoring
                </div>
              </div>
            </div>
            <div className="md:col-span-4 neo-glass rounded-[32px] p-8 border border-white/80 shadow-md group hover:border-[#d9f99d] transition-colors duration-200">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-[6px] text-label-sm font-label-sm bg-[#d9f99d] text-[#2D4A08] font-semibold">
                  Revenue Loop
                </span>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant">
                  support_agent
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mt-5">
                {"Sales & Service"}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Lead lifecycle tracking from first engagement to dispatch ticketing.
              </p>
              <div className="mt-5 space-y-2 text-body-sm font-body-sm text-on-surface">
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90">
                  {"Unified Sales CRM & Pipelines"}
                </div>
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90">
                  Customer Support Ticketing
                </div>
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90">
                  {"Field Service Management & Maps"}
                </div>
              </div>
            </div>
            <div className="md:col-span-5 neo-glass rounded-[32px] p-8 border border-white/80 shadow-md group">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-[6px] text-label-sm font-label-sm bg-surface-container-high text-on-surface font-semibold">
                  Vertical Systems
                </span>
                {' '}
                <span className="material-symbols-outlined text-on-surface-variant">
                  domain
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mt-5">
                Industry Systems
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Tailored turn-key industry operating software configured for niche workflows.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-body-sm font-body-sm text-on-surface">
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90 text-xs font-medium">
                  Retail POS
                </div>
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90 text-xs font-medium">
                  Restaurant Ops
                </div>
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90 text-xs font-medium">
                  Auto Workshop Mgr
                </div>
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90 text-xs font-medium">
                  Online Store
                </div>
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90 text-xs font-medium">
                  Yacht Charter
                </div>
                <div className="p-2.5 rounded-[3rem] bg-white/70 border border-white/90 text-xs font-medium">
                  Ship-to-Ship Transfer
                </div>
              </div>
            </div>
            <div className="md:col-span-7 rounded-[32px] p-8 md:p-10 bg-gradient-to-br from-[#ffdad2]/50 via-white/80 to-[#a5f3fc]/30 border border-white/90 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-[6px] text-label-sm font-label-sm bg-gradient-to-r from-[#ff7555] to-[#ff9e7a] text-white font-bold shadow-sm">
                    FLAGSHIP SUITE
                  </span>
                  {' '}
                  <span className="text-label-sm font-label-sm text-primary font-semibold">
                    Instant Real-Time Sync
                  </span>
                </div>
                <h3 className="text-headline-lg font-headline-lg text-on-surface mt-6 tracking-tight">
                  Integrated ERP
                </h3>
                <p className="text-body-lg font-body-lg text-on-surface-variant mt-2 max-w-xl">
                  One unified core platform combining sales, inventory, finance, and human resources with instantaneous data orchestration.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
                  <div className="p-3 rounded-2xl bg-white/80 border border-white text-center">
                    <span className="material-symbols-outlined text-primary text-xl">
                      sync_alt
                    </span>
                    {' '}
                    <div className="text-label-sm font-semibold mt-1">
                      Cross-Sync
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/80 border border-white text-center">
                    <span className="material-symbols-outlined text-[#2D4A08] text-xl">
                      database
                    </span>
                    {' '}
                    <div className="text-label-sm font-semibold mt-1">
                      Single Core
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/80 border border-white text-center">
                    <span className="material-symbols-outlined text-[#0E4A56] text-xl">
                      shield
                    </span>
                    {' '}
                    <div className="text-label-sm font-semibold mt-1">
                      Audit-Ready
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/80 border border-white text-center">
                    <span className="material-symbols-outlined text-primary text-xl">
                      schedule
                    </span>
                    {' '}
                    <div className="text-label-sm font-semibold mt-1">
                      4-Wk Deploy
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-surface-container-highest/60 flex items-center justify-between">
                <span className="text-body-sm font-body-sm font-medium text-on-surface">
                  Available in Modular or Full-Stack Edition
                </span>
                {' '}
                <Link to="/contact" className="inline-flex items-center gap-2 text-label-md font-label-md text-primary font-bold hover:underline">
                  Request Full Spec Sheet
                  {' '}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20" id="solutions">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-label-sm font-label-sm uppercase tracking-wider text-primary font-bold">
              Comprehensive Capabilities
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface mt-2 tracking-tight">
              Engineered for absolute business autonomy
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-3">
              Fixed scopes, battle-tested software modules, and bespoke capabilities built to replace disjointed workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neo-glass rounded-[32px] p-8 md:p-10 shadow-lg shadow-on-background/5 border border-white/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ffdad2] to-[#ff7555]/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    smart_toy
                  </span>
                </div>
                {' '}
                <span className="text-label-sm font-label-sm bg-[#a5f3fc] text-[#0E4A56] px-3 py-1 rounded-[6px] uppercase tracking-wider">
                  Autonomous Agents
                </span>
                {' '}
                <h3 className="text-headline-md font-headline-md text-on-surface mt-4">
                  AI Automation
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant mt-3">
                  Intelligent autonomous agents deployed directly into your operational workflow, slashing manual triage and error rates.
                </p>
                <div className="mt-8 space-y-3 pt-6 border-t border-surface-container-highest">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                      check_circle
                    </span>
                    {' '}
                    <span className="text-body-sm font-body-sm text-on-surface font-medium">
                      AI QC Agent for field technicians
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                      check_circle
                    </span>
                    {' '}
                    <span className="text-body-sm font-body-sm text-on-surface font-medium">
                      AI Travel Agent for business travel
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                      check_circle
                    </span>
                    {' '}
                    <span className="text-body-sm font-body-sm text-on-surface font-medium">
                      {"Exhibition Lead Intelligence & CRM sync"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a className="inline-flex items-center gap-2 text-label-md font-label-md text-primary font-semibold hover:gap-3 transition-all duration-200" href="#products">
                  <span>
                    View automation suites
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <div className="neo-glass rounded-[32px] p-8 md:p-10 shadow-lg shadow-on-background/5 border border-white/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d9f99d]/30 blur-2xl pointer-events-none rounded-full" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d9f99d] to-[#b3d17a]/30 flex items-center justify-center text-[#2D4A08] mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    account_tree
                  </span>
                </div>
                {' '}
                <span className="text-label-sm font-label-sm bg-[#d9f99d] text-[#2D4A08] px-3 py-1 rounded-[6px] uppercase tracking-wider">
                  Modular Core
                </span>
                {' '}
                <h3 className="text-headline-md font-headline-md text-on-surface mt-4">
                  {"ERP & Operations"}
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant mt-3">
                  Modular business backbones engineered for enterprise velocity without legacy overhead or multi-year rollouts.
                </p>
                <div className="mt-8 space-y-3 pt-6 border-t border-surface-container-highest">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#2D4A08] text-[20px] mt-0.5">
                      check_circle
                    </span>
                    {' '}
                    <span className="text-body-sm font-body-sm text-on-surface font-medium">
                      {"Real-time inventory & batch control"}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#2D4A08] text-[20px] mt-0.5">
                      check_circle
                    </span>
                    {' '}
                    <span className="text-body-sm font-body-sm text-on-surface font-medium">
                      {"Intelligent warehouse & production floor"}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#2D4A08] text-[20px] mt-0.5">
                      check_circle
                    </span>
                    {' '}
                    <span className="text-body-sm font-body-sm text-on-surface font-medium">
                      {"Unified accounting & reconciled ledgers"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/products" className="inline-flex items-center gap-2 text-label-md font-label-md text-primary font-semibold hover:gap-3 transition-all duration-200">
                  <span>
                    Explore modular ERP modules
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
            <div className="neo-glass rounded-[32px] p-8 md:p-10 shadow-lg shadow-on-background/5 border border-white/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#a5f3fc] to-[#5dabb4]/30 flex items-center justify-center text-[#0E4A56] mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    hub
                  </span>
                </div>
                {' '}
                <span className="text-label-sm font-label-sm bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-[6px] uppercase tracking-wider">
                  Tailored Architecture
                </span>
                {' '}
                <h3 className="text-headline-md font-headline-md text-on-surface mt-4">
                  Custom Engagements
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant mt-3">
                  Bespoke software architecture engineered for complex or proprietary operational workflows that standard SaaS cannot serve.
                </p>
                <div className="mt-8 space-y-3 pt-6 border-t border-surface-container-highest">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                      check_circle
                    </span>
                    {' '}
                    <span className="text-body-sm font-body-sm text-on-surface font-medium">
                      Dedicated elite staff augmentation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                      check_circle
                    </span>
                    {' '}
                    <span className="text-body-sm font-body-sm text-on-surface font-medium">
                      {"Complex Zoho & ERP rollouts"}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                      check_circle
                    </span>
                    {' '}
                    <span className="text-body-sm font-body-sm text-on-surface font-medium">
                      Proprietary custom SaaS software builds
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center gap-2 text-label-md font-label-md text-primary font-semibold hover:gap-3 transition-all duration-200">
                  <span>
                    Initiate a custom scope
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20" id="process">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-label-sm font-label-sm uppercase tracking-wider text-primary font-bold">
              Execution Methodology
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface mt-2 tracking-tight">
              How We Deliver
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-2">
              Zero ambiguity, zero endless consultant billing. Four strict milestones to full launch.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#ff7555]/40 via-[#d9f99d] to-[#a5f3fc]/60 -translate-y-10 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              <div className="neo-glass rounded-[32px] p-8 border border-white/80 shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-headline-md font-headline-md font-bold text-primary">
                      01.
                    </span>
                    {' '}
                    <span className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
                      <span className="material-symbols-outlined text-[20px]">
                        assignment
                      </span>
                    </span>
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">
                    Scope
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mt-3">
                    Fixed requirements, fixed timeline, zero ambiguity pricing agreed upfront in a crystal-clear SOW.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-surface-container-highest text-label-sm text-on-surface-variant">
                  Milestone: Guaranteed SOW sign-off
                </div>
              </div>
              <div className="neo-glass rounded-[32px] p-8 border border-white/80 shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-headline-md font-headline-md font-bold text-[#0E4A56]">
                      02.
                    </span>
                    {' '}
                    <span className="w-10 h-10 rounded-full bg-[#a5f3fc] flex items-center justify-center text-[#0E4A56]">
                      <span className="material-symbols-outlined text-[20px]">
                        terminal
                      </span>
                    </span>
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">
                    Configure
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mt-3">
                    Rapid deployment of battle-tested packages tailored directly to your data schema and operations.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-surface-container-highest text-label-sm text-on-surface-variant">
                  Milestone: Staging environment verified
                </div>
              </div>
              <div className="neo-glass rounded-[32px] p-8 border border-white/80 shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-headline-md font-headline-md font-bold text-[#2D4A08]">
                      03.
                    </span>
                    {' '}
                    <span className="w-10 h-10 rounded-full bg-[#d9f99d] flex items-center justify-center text-[#2D4A08]">
                      <span className="material-symbols-outlined text-[20px]">
                        rocket_launch
                      </span>
                    </span>
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">
                    Go Live
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mt-3">
                    Seamless data migration, staff onboarding, and rigorous production switchover guarantee.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-surface-container-highest text-label-sm text-on-surface-variant">
                  Milestone: 100% Data parity confirmed
                </div>
              </div>
              <div className="neo-glass rounded-[32px] p-8 border border-white/80 shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-headline-md font-headline-md font-bold text-primary">
                      04.
                    </span>
                    {' '}
                    <span className="w-10 h-10 rounded-full bg-[#ffdad2] flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        health_and_safety
                      </span>
                    </span>
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">
                    Support
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mt-3">
                    Dedicated operational warranty, continuous SLA monitoring, and active autonomous agent maintenance.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-surface-container-highest text-label-sm text-on-surface-variant">
                  Milestone: Continuous SLA monitoring
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20" id="comparison">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-label-sm font-label-sm uppercase tracking-wider text-primary font-bold">
              The Transformation
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface mt-2 tracking-tight">
              From operational friction to pure velocity
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-2">
              See how switching to a synchronized core eliminates modern software fatigue.
            </p>
          </div>
          <div className="neo-glass rounded-[32px] p-6 md:p-10 border border-white/80 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-surface-container-highest">
              <div className="space-y-6 md:pr-8">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-error-container text-error flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">
                      close
                    </span>
                  </span>
                  {' '}
                  <h3 className="text-headline-md font-headline-md text-on-surface">
                    The Old Fragmentation
                  </h3>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Disparate point solutions glued together with manual workarounds and brittle scripts.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30">
                    <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                      error_outline
                    </span>
                    {' '}
                    <div>
                      <div className="font-semibold text-body-sm text-on-surface">
                        Scattered Messy Spreadsheets
                      </div>
                      <p className="text-label-sm text-on-surface-variant mt-0.5">
                        Version conflicts, desynced formulas, and lost inventory updates across departments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30">
                    <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                      cancel
                    </span>
                    {' '}
                    <div>
                      <div className="font-semibold text-body-sm text-on-surface">
                        Disjointed SaaS Subscriptions
                      </div>
                      <p className="text-label-sm text-on-surface-variant mt-0.5">
                        Paying per-seat for 12 tools that don't speak to each other without third-party webhooks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30">
                    <span className="material-symbols-outlined text-error text-[20px] mt-0.5">
                      sync_problem
                    </span>
                    {' '}
                    <div>
                      <div className="font-semibold text-body-sm text-on-surface">
                        {"Fragile CSV Exports & Blind Spots"}
                      </div>
                      <p className="text-label-sm text-on-surface-variant mt-0.5">
                        Manual end-of-month reconciliations and no true real-time visibility into executive margins.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 pt-6 md:pt-0 md:pl-8">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#d9f99d] text-[#2D4A08] flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">
                      check
                    </span>
                  </span>
                  {' '}
                  <h3 className="text-headline-md font-headline-md text-on-surface">
                    The Horizons Core
                  </h3>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  A synchronized, autonomous operational engine where data flows friction-free.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#d9f99d]/60 shadow-sm">
                    <span className="material-symbols-outlined text-[#2D4A08] text-[20px] mt-0.5">
                      check_circle
                    </span>
                    {' '}
                    <div>
                      <div className="font-semibold text-body-sm text-on-surface">
                        One Synchronized Real-Time Engine
                      </div>
                      <p className="text-label-sm text-on-surface-variant mt-0.5">
                        Inventory deductions instantly trigger purchase POs, billing statements, and ERP audits.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#a5f3fc]/70 shadow-sm">
                    <span className="material-symbols-outlined text-[#0E4A56] text-[20px] mt-0.5">
                      smart_toy
                    </span>
                    {' '}
                    <div>
                      <div className="font-semibold text-body-sm text-on-surface">
                        Autonomous AI Verification
                      </div>
                      <p className="text-label-sm text-on-surface-variant mt-0.5">
                        Copilots scan field reports, dispatch tickets, and receipts before humans ever need to inspect.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#ffdad2] shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                      verified
                    </span>
                    {' '}
                    <div>
                      <div className="font-semibold text-body-sm text-on-surface">
                        {"Automated Reconciliations & Single Truth"}
                      </div>
                      <p className="text-label-sm text-on-surface-variant mt-0.5">
                        Real-time ledger updates, sub-second reporting, and zero end-of-month data scramble.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20" id="why-horizon">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-label-sm font-label-sm uppercase tracking-wider text-primary font-bold">
              Built for Long-Term Trust
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface mt-2 tracking-tight">
              Why Horizons
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-2">
              Enterprise-grade rigor without the legacy consultancies' incentives to bill infinite hours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="neo-glass rounded-[32px] p-8 border border-white/80 shadow-md group hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">
                  price_check
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Fixed Scoped Pricing
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-3">
                No hourly runaways or surprise invoices. You approve the scope and price once, and we guarantee the outcome.
              </p>
            </div>
            <div className="neo-glass rounded-[32px] p-8 border border-white/80 shadow-md group hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-[#d9f99d] flex items-center justify-center text-[#2D4A08] mb-6">
                <span className="material-symbols-outlined text-2xl">
                  lock_open
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Total Data Ownership
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-3">
                You own your data, code, and infrastructure. Zero proprietary platform lock-in or hostage licenses.
              </p>
            </div>
            <div className="neo-glass rounded-[32px] p-8 border border-white/80 shadow-md group hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-[#a5f3fc] flex items-center justify-center text-[#0E4A56] mb-6">
                <span className="material-symbols-outlined text-2xl">
                  badge
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Role-Based Views
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-3">
                Tailored, uncluttered interfaces designed specifically for technicians, floor managers, accountants, and executives.
              </p>
            </div>
            <div className="neo-glass rounded-[32px] p-8 border border-white/80 shadow-md group hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-on-surface mb-6">
                <span className="material-symbols-outlined text-2xl">
                  security
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Enterprise Security
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-3">
                Encrypted hosting, role-based access and regular backups.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16" id="custom">
          <div className="rounded-[32px] p-10 md:p-16 bg-gradient-to-r from-[#ff7555] via-[#ff8a65] to-[#ff9e7a] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#a5f3fc]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[6px] text-label-sm font-label-sm bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium mb-4">
                Bespoke Architecture
              </span>
              {' '}
              <h2 className="text-display-lg-mobile md:text-headline-lg font-display-lg-mobile md:font-headline-lg tracking-tight font-bold text-white">
                Don't see a package that fits?
              </h2>
              <p className="mt-4 text-body-lg font-body-lg text-white/90 max-w-2xl">
                Send us your operational scope and get a tailored statement of work and fixed-cost proposal in 48 hours.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link to="/contact" className="px-8 py-4 rounded-[10px] bg-white text-primary text-label-lg font-label-lg hover:bg-surface hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2 font-bold shadow-md">
                  <span>
                    Get a scoping doc
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
                {' '}
                <span className="text-label-sm font-label-sm text-white/80 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    timer
                  </span>
                  {' '}
                  Guaranteed turnaround in 48 business hours
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto px-6 md:px-12 py-12" id="contact">
          <div className="neo-glass rounded-[32px] p-8 md:p-12 border border-white/80 shadow-md">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="text-headline-md font-headline-md text-on-surface">
                Book an initial scoping consultation
              </h2>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Tell us about your current stack and timeline. No salesperson pressure, just systems architects.
              </p>
            </div>
            <form className="space-y-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">
                    Your Name
                  </label>
                  {' '}
                  <input className="w-full px-5 h-12 rounded-[10px] neo-glass border border-outline-variant/50 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none text-body-sm text-on-surface placeholder:text-outline" placeholder="Elena Rostova" required type="text" />
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">
                    Work Email
                  </label>
                  {' '}
                  <input className="w-full px-5 h-12 rounded-[10px] neo-glass border border-outline-variant/50 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none text-body-sm text-on-surface placeholder:text-outline" placeholder="elena@enterprise.com" required type="email" />
                </div>
              </div>
              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">
                  {"Operational Scope & Modules Needed"}
                </label>
                {' '}
                <input className="w-full px-5 h-12 rounded-[10px] neo-glass border border-outline-variant/50 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none text-body-sm text-on-surface placeholder:text-outline" placeholder="e.g. Warehouse Inventory + AI Field QC for 80 service staff" type="text" />
              </div>
              <div className="pt-2">
                <button className="w-full h-12 rounded-[10px] bg-gradient-to-r from-[#ff7555] to-[#ff9e7a] text-white text-label-md font-label-md font-semibold glow-peach hover:opacity-95 transition-all duration-200" type="submit">
                  Request 48-Hour Scope Proposal
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
