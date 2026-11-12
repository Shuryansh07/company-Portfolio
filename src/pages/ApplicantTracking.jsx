// Generated from stitch/pd_application-tracking-system.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { Link } from 'react-router-dom'
import './ApplicantTracking.css'

export default function ApplicantTracking() {
  return (
    <div className="pg-applicant-tracking bg-background text-on-background antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <title>{"Applicant Tracking System — Horizon Enterprise"}</title>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-60">
        <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-gradient-to-b from-[#ffdad2]/35 via-[#f5f3f0]/20 to-transparent blur-3xl" />
        <div className="absolute top-[35%] -left-[10%] w-[600px] h-[600px] bg-[#ceee93]/15 rounded-full blur-3xl" />
        <div className="absolute top-[60%] -right-[10%] w-[700px] h-[700px] bg-[#a1eff8]/15 rounded-full blur-3xl" />
      </div>
      {' '}
      {' '}
      <main className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 space-y-24 py-6">
        <section className="space-y-8 pt-4">
          <nav className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            {' '}
            <span className="text-outline-variant">
              /
            </span>
            {' '}
            <a className="hover:text-primary transition-colors" href="#">
              People
            </a>
            {' '}
            <span className="text-outline-variant">
              /
            </span>
            {' '}
            <span className="text-on-surface font-semibold">
              Applicant Tracking System
            </span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#ffdad2]/50 border border-primary-container/30 text-on-primary-fixed-variant text-label-sm font-label-sm font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                {' '}
                {"CANDIDATE TRACKING & PIPELINE ORCHESTRATION"}
              </div>
              <h1 className="text-display-lg font-display-lg tracking-tight text-on-surface text-balance">
                Applicant Tracking System
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Give every application a clear status, an accountable owner, and a definitive next step — leaving zero candidates stranded in hiring limbo.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="glass-card px-4 py-2.5 rounded-[10px] flex items-center gap-2.5 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl">
                    timer
                  </span>
                  {' '}
                  <span className="text-label-md font-label-md text-on-surface">
                    <strong className="font-bold text-primary">
                      [00] Days
                    </strong>
                    {' '}
                    Avg. Time-to-Hire
                  </span>
                </div>
                <div className="glass-card px-4 py-2.5 rounded-[10px] flex items-center gap-2.5 shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-xl">
                    verified
                  </span>
                  {' '}
                  <span className="text-label-md font-label-md text-on-surface">
                    <strong className="font-bold text-secondary">
                      [00%]
                    </strong>
                    {' '}
                    Stage SLA Adherence
                  </span>
                </div>
                <div className="glass-card px-4 py-2.5 rounded-[10px] flex items-center gap-2.5 shadow-sm">
                  <span className="material-symbols-outlined text-tertiary text-xl">
                    policy
                  </span>
                  {' '}
                  <span className="text-label-md font-label-md text-on-surface">
                    <strong className="font-bold text-tertiary">
                      100%
                    </strong>
                    {' '}
                    Audit-Ready Decisions
                  </span>
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <span className="text-label-sm font-label-sm text-outline uppercase tracking-wider block font-semibold">
                  Core Architectural Primitives
                </span>
                {' '}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="px-3.5 py-2.5 rounded-[10px] bg-surface-container-low border border-outline-variant/30 text-body-sm font-body-sm text-on-surface flex items-center gap-2.5 hover:bg-surface-container transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                    {' '}
                    <span>
                      Configurable Requisition Approval Workflow
                    </span>
                  </div>
                  <div className="px-3.5 py-2.5 rounded-[10px] bg-surface-container-low border border-outline-variant/30 text-body-sm font-body-sm text-on-surface flex items-center gap-2.5 hover:bg-surface-container transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                    {' '}
                    <span>
                      Kanban-Style Pipeline Stages
                    </span>
                  </div>
                  <div className="px-3.5 py-2.5 rounded-[10px] bg-surface-container-low border border-outline-variant/30 text-body-sm font-body-sm text-on-surface flex items-center gap-2.5 hover:bg-surface-container transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                    {' '}
                    <span>
                      Structured Interview Scorecards
                    </span>
                  </div>
                  <div className="px-3.5 py-2.5 rounded-[10px] bg-surface-container-low border border-outline-variant/30 text-body-sm font-body-sm text-on-surface flex items-center gap-2.5 hover:bg-surface-container transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                    {' '}
                    <span>
                      Threaded Collaborative Feedback
                    </span>
                  </div>
                  <div className="px-3.5 py-2.5 rounded-[10px] bg-surface-container-low border border-outline-variant/30 text-body-sm font-body-sm text-on-surface flex items-center gap-2.5 hover:bg-surface-container transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                    {' '}
                    <span>
                      Offer Letter Generation with Approval Chain
                    </span>
                  </div>
                  <div className="px-3.5 py-2.5 rounded-[10px] bg-surface-container-low border border-outline-variant/30 text-body-sm font-body-sm text-on-surface flex items-center gap-2.5 hover:bg-surface-container transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                    {' '}
                    <span>
                      Branded Careers Page with Auto-Populated Applications
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="glass-card rounded-2xl p-7 lg:p-8 space-y-6 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-bl-full pointer-events-none" />
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 text-label-sm font-label-sm text-primary font-bold">
                    <span className="material-symbols-outlined text-sm">
                      precision_manufacturing
                    </span>
                    {' '}
                    DIRECT ARCHITECT CONSULTATION
                  </div>
                  <h2 className="text-headline-md font-headline-md text-on-surface">
                    Book a live system walk-through
                  </h2>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Review customized stage topologies and compliance auditing tailored to your headcount plan.
                  </p>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                      Full Name
                    </label>
                    {' '}
                    <input className="w-full h-12 px-3.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md text-on-surface placeholder:text-outline/60 outline-none transition-all" placeholder="e.g. Dr. Jordan Vance" type="text" />
                  </div>
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                      Work Email
                    </label>
                    {' '}
                    <input className="w-full h-12 px-3.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md text-on-surface placeholder:text-outline/60 outline-none transition-all" placeholder="jordan.vance@enterprise.com" type="email" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                        Phone Number
                      </label>
                      {' '}
                      <input className="w-full h-12 px-3.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md text-on-surface placeholder:text-outline/60 outline-none transition-all" placeholder="[phone]" type="text" />
                    </div>
                    <div>
                      <label className="block text-label-md font-label-md text-on-surface mb-1.5">
                        Hiring Volume
                      </label>
                      {' '}
                      <select className="w-full h-12 px-3.5 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md text-on-surface outline-none transition-all">
                        <option>
                          50 – 200 Requisitions/yr
                        </option>
                        <option>
                          200 – 1,000 Requisitions/yr
                        </option>
                        <option>
                          1,000+ Enterprise Roles
                        </option>
                      </select>
                    </div>
                  </div>
                  {' '}
                  <button className="w-full h-12 primary-gradient-btn text-white text-label-lg font-label-lg font-semibold rounded-[10px] shadow-md hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2" type="submit">
                    <span>
                      Request Tailored Walk-Through
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-base">
                      calendar_today
                    </span>
                  </button>
                  {' '}
                  <div className="flex items-center gap-2 text-label-sm font-label-sm text-outline pt-1 justify-center">
                    <span className="material-symbols-outlined text-sm text-secondary">
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
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-label-sm font-label-sm font-bold text-primary tracking-wider uppercase block">
                Interactive Control Plane
              </span>
              {' '}
              <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
                Enterprise Talent Pipeline Architecture
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-surface-container-low border border-outline-variant/40 text-label-md font-label-md text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim" />
                {' '}
                Requisition:
                {' '}
                <strong>
                  ENG-2025-084
                </strong>
              </div>
              {' '}
              <button className="px-4 py-2 rounded-[10px] glass-card text-label-md font-label-md font-semibold text-on-surface hover:bg-white transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-primary">
                  play_circle
                </span>
                {' '}
                Watch Candidate Journey Walkthrough [00] min
              </button>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 rounded-[6px] bg-primary-fixed/40 text-on-primary-fixed-variant text-label-md font-label-md font-bold">
                  {"Staff & Senior Engineering Pipeline"}
                </div>
                {' '}
                <span className="text-body-sm font-body-sm text-on-surface-variant">
                  Active Candidates:
                  {' '}
                  <strong>
                    48
                  </strong>
                  {' '}
                  across 5 validated gates
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-surface-container-low px-3 py-1 rounded-[10px] border border-outline-variant/30 text-label-sm font-label-sm">
                  <span className="material-symbols-outlined text-sm text-outline mr-1.5">
                    filter_list
                  </span>
                  {' '}
                  <span>
                    Filter: SLA Risk
                  </span>
                </div>
                <div className="flex items-center bg-surface-container-low px-3 py-1 rounded-[10px] border border-outline-variant/30 text-label-sm font-label-sm">
                  <span className="material-symbols-outlined text-sm text-outline mr-1.5">
                    group
                  </span>
                  {' '}
                  <span>
                    Hiring Lead: All Panels
                  </span>
                </div>
                {' '}
                <span className="h-4 w-px bg-outline-variant/40 mx-1" />
                {' '}
                <div className="flex -space-x-1.5">
                  <div className="w-7 h-7 rounded-full bg-[#ffdad2] border-2 border-white flex items-center justify-center text-[10px] font-bold text-on-primary-fixed">
                    AK
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#ceee93] border-2 border-white flex items-center justify-center text-[10px] font-bold text-on-secondary-fixed">
                    MR
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#a1eff8] border-2 border-white flex items-center justify-center text-[10px] font-bold text-on-tertiary-fixed">
                    SL
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto min-w-[1000px] lg:min-w-0">
              <div className="bg-surface-container-low/60 rounded-xl p-3.5 space-y-3 border border-outline-variant/20 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-outline-variant/20">
                    <span className="text-label-md font-label-md text-on-surface font-semibold">
                      Applied / Sourced
                    </span>
                    {' '}
                    <span className="px-2 py-0.5 rounded-[6px] bg-surface-variant text-on-surface-variant text-[11px] font-bold">
                      14
                    </span>
                  </div>
                  <div className="bg-white rounded-xl p-3.5 shadow-sm border border-outline-variant/30 space-y-2.5">
                    <div className="flex items-start justify-between">
                      <span className="text-label-sm font-label-sm font-semibold text-on-surface">
                        Alexei Chen
                      </span>
                      {' '}
                      <span className="px-1.5 py-0.5 rounded-[6px] bg-secondary-container text-on-secondary-container text-[10px] font-bold">
                        Score 4.8
                      </span>
                    </div>
                    <p className="text-[12px] text-on-surface-variant">
                      Senior Distributed Systems Engineer
                    </p>
                    <div className="flex items-center justify-between pt-1 text-[11px] text-outline">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">
                          schedule
                        </span>
                        {' '}
                        [02]d in stage
                      </span>
                      {' '}
                      <span className="text-primary font-semibold">
                        Parsed Resume
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-3.5 shadow-sm border border-outline-variant/30 space-y-2.5">
                    <div className="flex items-start justify-between">
                      <span className="text-label-sm font-label-sm font-semibold text-on-surface">
                        Devon Marcus
                      </span>
                      {' '}
                      <span className="px-1.5 py-0.5 rounded-[6px] bg-surface-container-high text-on-surface-variant text-[10px] font-bold">
                        Pending Rubric
                      </span>
                    </div>
                    <p className="text-[12px] text-on-surface-variant">
                      Cloud Infrastructure Lead
                    </p>
                    <div className="flex items-center justify-between pt-1 text-[11px] text-outline">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">
                          schedule
                        </span>
                        {' '}
                        [01]d in stage
                      </span>
                      {' '}
                      <span className="text-secondary font-semibold">
                        In Referral
                      </span>
                    </div>
                  </div>
                </div>
                {' '}
                <button className="w-full py-1.5 text-center text-label-sm font-label-sm text-outline hover:text-on-surface flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    add
                  </span>
                  {' '}
                  Add Candidate
                </button>
              </div>
              <div className="bg-surface-container-low/60 rounded-xl p-3.5 space-y-3 border border-outline-variant/20 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-outline-variant/20">
                    <span className="text-label-md font-label-md text-on-surface font-semibold">
                      {"Screening & Scorecard"}
                    </span>
                    {' '}
                    <span className="px-2 py-0.5 rounded-[6px] bg-surface-variant text-on-surface-variant text-[11px] font-bold">
                      9
                    </span>
                  </div>
                  <div className="bg-white rounded-xl p-3.5 shadow-sm border-l-4 border-l-primary-container border-t border-r border-b border-outline-variant/30 space-y-2.5">
                    <div className="flex items-start justify-between">
                      <span className="text-label-sm font-label-sm font-semibold text-on-surface">
                        Priya Sundaram
                      </span>
                      {' '}
                      <span className="px-1.5 py-0.5 rounded-[6px] bg-[#ffdad2] text-on-primary-fixed-variant text-[10px] font-bold">
                        SLA: 24h
                      </span>
                    </div>
                    <p className="text-[12px] text-on-surface-variant">
                      Staff Product Designer
                    </p>
                    <div className="w-full bg-surface-container rounded-sm h-1.5 overflow-hidden">
                      <div className="bg-primary-container h-full w-3/4" />
                    </div>
                    <div className="flex items-center justify-between pt-1 text-[11px]">
                      <span className="text-outline">
                        Scorecard: 3/4 Signed
                      </span>
                      {' '}
                      <div className="w-5 h-5 rounded-full bg-[#ff7555] text-white flex items-center justify-center text-[9px] font-bold">
                        JV
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <button className="w-full py-1.5 text-center text-label-sm font-label-sm text-outline hover:text-on-surface flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    expand_more
                  </span>
                  {' '}
                  8 more screened
                </button>
              </div>
              <div className="bg-surface-container-low/60 rounded-xl p-3.5 space-y-3 border border-outline-variant/20 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-outline-variant/20">
                    <span className="text-label-md font-label-md text-on-surface font-semibold">
                      Technical Review
                    </span>
                    {' '}
                    <span className="px-2 py-0.5 rounded-[6px] bg-surface-variant text-on-surface-variant text-[11px] font-bold">
                      6
                    </span>
                  </div>
                  <div className="bg-white rounded-xl p-3.5 shadow-sm border border-outline-variant/30 space-y-2.5">
                    <div className="flex items-start justify-between">
                      <span className="text-label-sm font-label-sm font-semibold text-on-surface">
                        Marcus Vance
                      </span>
                      {' '}
                      <span className="px-1.5 py-0.5 rounded-[6px] bg-secondary-container text-on-secondary-container text-[10px] font-bold">
                        Rubric 5.0
                      </span>
                    </div>
                    <p className="text-[12px] text-on-surface-variant">
                      Principal Platform Engineer
                    </p>
                    <div className="flex flex-wrap gap-1 text-[10px]">
                      <span className="px-1.5 py-0.5 rounded-[4px] bg-surface-container text-on-surface-variant">
                        System Arch
                      </span>
                      {' '}
                      <span className="px-1.5 py-0.5 rounded-[4px] bg-surface-container text-on-surface-variant">
                        Concurrency
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-1 text-[11px] text-outline">
                      <span className="text-secondary font-semibold">
                        Panel Approved
                      </span>
                      {' '}
                      <div className="flex -space-x-1">
                        <div className="w-4 h-4 rounded-full bg-surface-variant" />
                        <div className="w-4 h-4 rounded-full bg-outline-variant" />
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <button className="w-full py-1.5 text-center text-label-sm font-label-sm text-outline hover:text-on-surface flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  {' '}
                  SLA: [00] Days Avg
                </button>
              </div>
              <div className="bg-surface-container-low/60 rounded-xl p-3.5 space-y-3 border border-outline-variant/20 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-outline-variant/20">
                    <span className="text-label-md font-label-md text-on-surface font-semibold">
                      Partner Interview
                    </span>
                    {' '}
                    <span className="px-2 py-0.5 rounded-[6px] bg-surface-variant text-on-surface-variant text-[11px] font-bold">
                      3
                    </span>
                  </div>
                  <div className="bg-white rounded-xl p-3.5 shadow-sm border border-outline-variant/30 space-y-2.5">
                    <div className="flex items-start justify-between">
                      <span className="text-label-sm font-label-sm font-semibold text-on-surface">
                        Eleni Rostova
                      </span>
                      {' '}
                      <span className="px-1.5 py-0.5 rounded-[6px] bg-[#a1eff8] text-on-tertiary-fixed text-[10px] font-bold">
                        Exec Review
                      </span>
                    </div>
                    <p className="text-[12px] text-on-surface-variant">
                      Head of Cloud Governance
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-primary">
                      <span className="material-symbols-outlined text-sm">
                        verified_user
                      </span>
                      {' '}
                      <span>
                        Comp Approval In-Flight
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-1 text-[11px] text-outline">
                      <span>
                        Scheduled: Today 2pm
                      </span>
                      {' '}
                      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                    </div>
                  </div>
                </div>
                <div className="p-2 rounded-[6px] bg-surface-container text-[11px] text-center text-outline">
                  Synchronized Feedback Active
                </div>
              </div>
              <div className="bg-surface-container-low/60 rounded-xl p-3.5 space-y-3 border border-outline-variant/20 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-outline-variant/20">
                    <span className="text-label-md font-label-md text-on-surface font-semibold">
                      {"Offer & Audit"}
                    </span>
                    {' '}
                    <span className="px-2 py-0.5 rounded-[6px] bg-secondary-container text-on-secondary-container text-[11px] font-bold">
                      2 Locked
                    </span>
                  </div>
                  <div className="bg-white rounded-xl p-3.5 shadow-sm border border-secondary/40 space-y-2.5">
                    <div className="flex items-start justify-between">
                      <span className="text-label-sm font-label-sm font-semibold text-on-surface">
                        Dr. Simon K.
                      </span>
                      {' '}
                      <span className="px-1.5 py-0.5 rounded-[6px] bg-secondary-container text-on-secondary-container text-[10px] font-bold">
                        Accepted
                      </span>
                    </div>
                    <p className="text-[12px] text-on-surface-variant">
                      Principal Cryptographer
                    </p>
                    <div className="p-1.5 rounded-[6px] bg-surface-container-lowest border border-outline-variant/30 text-[10px] text-outline flex items-center justify-between">
                      <span>
                        Ledger Hash: #48a9-f0
                      </span>
                      {' '}
                      <span className="material-symbols-outlined text-xs text-secondary">
                        check_circle
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-1 text-[11px] text-secondary font-semibold">
                      <span>
                        Requisition Closed
                      </span>
                      {' '}
                      <span>
                        100% Audit
                      </span>
                    </div>
                  </div>
                </div>
                {' '}
                <button className="w-full py-2 bg-surface-container text-on-surface rounded-[6px] text-label-sm font-label-sm font-medium hover:bg-surface-variant transition-colors flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-xs">
                    history_edu
                  </span>
                  {' '}
                  View Audit Log
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-label-sm font-label-sm font-bold text-primary tracking-wider uppercase block">
              FOUNDATIONAL RECRUITMENT INTEGRITY
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              Track Every Application Like It Matters.
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
              An Applicant Tracking System cannot simply function as an archival resume bin. In an accountable enterprise, every single submission represents an operational commitment — requiring an explicit ledger of touchpoints, calibrated interview rubrics, and definitive next steps across your hiring collective.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-7 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-[10px] bg-primary-fixed/60 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">
                  fact_check
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Every application logged with a clear current status
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Eliminate candidate limbo. No unassigned resumes, ambiguous review stages, or lost candidates. Every profile carries an explicit owner and a guaranteed SLA time-to-decision.
              </p>
              <div className="pt-2 flex items-center gap-2 text-label-md font-label-md font-semibold text-primary">
                <span className="material-symbols-outlined text-base">
                  check_circle
                </span>
                {' '}
                <span>
                  Zero stranded candidate states
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-7 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-[10px] bg-secondary-container/60 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">
                  dataset
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Full activity history per candidate
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                A comprehensive, timestamped record of every interviewer evaluation, rubric score, email dispatch, and internal conversation unified in a single immutable talent profile.
              </p>
              <div className="pt-2 flex items-center gap-2 text-label-md font-label-md font-semibold text-secondary">
                <span className="material-symbols-outlined text-base">
                  check_circle
                </span>
                {' '}
                <span>
                  Auditable communication ledger
                </span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-7 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-[10px] bg-tertiary-fixed/60 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">
                  account_tree
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Configurable stages matching real operations
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Avoid rigid software constraints. Shape bespoke candidate journeys for engineering architectures, executive appointments, or high-volume seasonal hiring effortlessly.
              </p>
              <div className="pt-2 flex items-center gap-2 text-label-md font-label-md font-semibold text-tertiary">
                <span className="material-symbols-outlined text-base">
                  check_circle
                </span>
                {' '}
                <span>
                  Division-specific stage gating
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-label-sm font-label-sm font-bold text-primary tracking-wider uppercase block">
              ENGINEERED RECRUITING CAPABILITIES
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              Structure for a Process That Is Usually Chaos
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Six architectural features engineered to bring deterministic order, transparency, and speed to high-volume hiring.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-3">
              <div className="p-4 rounded-[10px] bg-surface-container-lowest border-2 border-primary/40 shadow-sm cursor-pointer transition-all">
                <div className="flex items-start gap-3.5">
                  <span className="text-label-lg font-label-lg font-extrabold text-primary">
                    01
                  </span>
                  {' '}
                  <div className="space-y-1">
                    <h4 className="text-headline-sm font-headline-sm text-on-surface">
                      Configurable Requisition Approval Workflow
                    </h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Routed through department leads, HR business partners, and financial controllers before budgetary commitment and market publication.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-[10px] bg-surface-container-low/70 border border-outline-variant/30 hover:bg-surface-container-lowest hover:border-outline-variant transition-all cursor-pointer">
                <div className="flex items-start gap-3.5">
                  <span className="text-label-lg font-label-lg font-bold text-outline">
                    02
                  </span>
                  {' '}
                  <div className="space-y-1">
                    <h4 className="text-headline-sm font-headline-sm text-on-surface">
                      Kanban-Style Pipeline Stages
                    </h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Drag-and-drop talent movement paired with automated stage SLA alerts, mandatory validation gating, and applicant notifications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-[10px] bg-surface-container-low/70 border border-outline-variant/30 hover:bg-surface-container-lowest hover:border-outline-variant transition-all cursor-pointer">
                <div className="flex items-start gap-3.5">
                  <span className="text-label-lg font-label-lg font-bold text-outline">
                    03
                  </span>
                  {' '}
                  <div className="space-y-1">
                    <h4 className="text-headline-sm font-headline-sm text-on-surface">
                      Structured Interview Scorecards
                    </h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Objective, rubric-based evaluations eliminating arbitrary hiring bias, halo effects, and unstructured feedback threads.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-[10px] bg-surface-container-low/70 border border-outline-variant/30 hover:bg-surface-container-lowest hover:border-outline-variant transition-all cursor-pointer">
                <div className="flex items-start gap-3.5">
                  <span className="text-label-lg font-label-lg font-bold text-outline">
                    04
                  </span>
                  {' '}
                  <div className="space-y-1">
                    <h4 className="text-headline-sm font-headline-sm text-on-surface">
                      Threaded Collaborative Feedback
                    </h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Real-time interviewer debate panels, protected compensation annotations, and synchronized hiring council voting ledgers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-[10px] bg-surface-container-low/70 border border-outline-variant/30 hover:bg-surface-container-lowest hover:border-outline-variant transition-all cursor-pointer">
                <div className="flex items-start gap-3.5">
                  <span className="text-label-lg font-label-lg font-bold text-outline">
                    05
                  </span>
                  {' '}
                  <div className="space-y-1">
                    <h4 className="text-headline-sm font-headline-sm text-on-surface">
                      Offer Letter Generation with Approval Chain
                    </h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Dynamic document templating bound directly to enterprise salary bands, bonus provisions, and multi-tier executive approval signs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-[10px] bg-surface-container-low/70 border border-outline-variant/30 hover:bg-surface-container-lowest hover:border-outline-variant transition-all cursor-pointer">
                <div className="flex items-start gap-3.5">
                  <span className="text-label-lg font-label-lg font-bold text-outline">
                    06
                  </span>
                  {' '}
                  <div className="space-y-1">
                    <h4 className="text-headline-sm font-headline-sm text-on-surface">
                      Branded Careers Page with Auto-Populated Applications
                    </h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Frictionless job publishing with native candidate profile parsing directly into active pipelines without third-party delay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="glass-card rounded-2xl p-7 lg:p-8 space-y-6 border border-white shadow-lg">
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-[6px] bg-primary text-white text-label-sm font-label-sm font-bold">
                      DEEP DIVE: 01
                    </span>
                    {' '}
                    <span className="text-label-lg font-label-lg font-semibold text-on-surface">
                      Requisition Multi-Node Gating
                    </span>
                  </div>
                  {' '}
                  <span className="text-label-sm font-label-sm text-secondary font-semibold">
                    Active Requisition #884
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">
                    Deterministic Approval Route Topology
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Before a single role is pushed to candidate discovery, Horizon routes budget authorization across four required organizational stakeholders.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between p-3.5 rounded-[10px] bg-surface-container-lowest border border-outline-variant/30">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                          <span className="material-symbols-outlined text-sm font-bold">
                            check
                          </span>
                        </div>
                        <div>
                          <div className="text-label-md font-label-md text-on-surface">
                            1. Hiring Manager
                          </div>
                          <div className="text-[11px] text-outline">
                            {"Role specs & technical rubric defined"}
                          </div>
                        </div>
                      </div>
                      {' '}
                      <span className="text-[11px] font-semibold text-secondary">
                        Approved [00] min
                      </span>
                    </div>
                    <div className="h-3 w-0.5 bg-outline-variant/40 ml-7" />
                    <div className="flex items-center justify-between p-3.5 rounded-[10px] bg-surface-container-lowest border border-outline-variant/30">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                          <span className="material-symbols-outlined text-sm font-bold">
                            check
                          </span>
                        </div>
                        <div>
                          <div className="text-label-md font-label-md text-on-surface">
                            2. Department Head (VP Eng)
                          </div>
                          <div className="text-[11px] text-outline">
                            Org headcount alignment verified
                          </div>
                        </div>
                      </div>
                      {' '}
                      <span className="text-[11px] font-semibold text-secondary">
                        Approved [00]h
                      </span>
                    </div>
                    <div className="h-3 w-0.5 bg-outline-variant/40 ml-7" />
                    <div className="flex items-center justify-between p-3.5 rounded-[10px] bg-surface-container-lowest border-2 border-primary-container">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center animate-pulse">
                          <span className="material-symbols-outlined text-sm">
                            hourglass_top
                          </span>
                        </div>
                        <div>
                          <div className="text-label-md font-label-md text-on-surface font-bold">
                            3. Finance Controller
                          </div>
                          <div className="text-[11px] text-outline">
                            {"Compensation band & equity pool allocation"}
                          </div>
                        </div>
                      </div>
                      {' '}
                      <span className="px-2 py-0.5 rounded-[6px] bg-primary-fixed text-on-primary-fixed-variant text-[11px] font-bold">
                        In Review (SLA 4h)
                      </span>
                    </div>
                    <div className="h-3 w-0.5 bg-outline-variant/40 ml-7" />
                    <div className="flex items-center justify-between p-3.5 rounded-[10px] bg-surface-container-low/80 border border-outline-variant/20 opacity-70">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-variant text-outline flex items-center justify-center">
                          <span className="material-symbols-outlined text-sm">
                            lock
                          </span>
                        </div>
                        <div>
                          <div className="text-label-md font-label-md text-outline">
                            4. Talent Lead (Launch)
                          </div>
                          <div className="text-[11px] text-outline">
                            {"Auto-publish to Careers Portal & Sourcing"}
                          </div>
                        </div>
                      </div>
                      {' '}
                      <span className="text-[11px] text-outline">
                        Queued
                      </span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-[10px] bg-surface-container-low border border-outline-variant/30 flex items-center justify-between text-body-sm font-body-sm">
                    <span className="text-on-surface-variant">
                      Requisition Cycle SLA Adherence:
                    </span>
                    {' '}
                    <span className="font-bold text-primary">
                      [00%] On Schedule
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-label-sm font-label-sm font-bold text-primary tracking-wider uppercase block">
              DEPLOYMENT METHODOLOGY
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              From Application to Final Decision
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A four-stage deterministic cycle that guarantees transparency and leaves zero candidates stranded.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="glass-card rounded-2xl p-6 space-y-4 border border-white relative z-10 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-[10px] bg-[#ffdad2] text-on-primary-fixed-variant flex items-center justify-center text-label-lg font-label-lg font-extrabold">
                    01
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-outline">
                    input
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Log the Application
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Candidate applications arrive and are instantly parsed and logged against the approved requisition with verified talent attributes.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/20 text-label-sm font-label-sm text-primary font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">
                  schedule
                </span>
                {' '}
                Instant ingestion
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 space-y-4 border border-white relative z-10 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-[10px] bg-[#ceee93] text-on-secondary-fixed-variant flex items-center justify-center text-label-lg font-label-lg font-extrabold">
                    02
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-outline">
                    tune
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Move Through Configured Stages
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Candidates advance through stage-gated milestones with structured rubric scorecards and synchronized interviewer feedback.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/20 text-label-sm font-label-sm text-secondary font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">
                  rule
                </span>
                {' '}
                Enforced scorecards
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 space-y-4 border border-white relative z-10 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-[10px] bg-[#a1eff8] text-on-tertiary-fixed-variant flex items-center justify-center text-label-lg font-label-lg font-extrabold">
                    03
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-outline">
                    notifications_active
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Notify Automatically
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Trigger-based, zero-lag notifications update interviewers, hiring leads, and candidates at every critical milestone.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/20 text-label-sm font-label-sm text-tertiary font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">
                  bolt
                </span>
                {' '}
                Zero-friction messaging
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 space-y-4 border border-white relative z-10 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-[10px] bg-[#ffdad2] text-on-primary-fixed-variant flex items-center justify-center text-label-lg font-label-lg font-extrabold">
                    04
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-outline">
                    verified
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Close with a Full History
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Comprehensive hiring decisions close the requisition with an immutable, cryptographically verifiable candidate audit history.
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/20 text-label-sm font-label-sm text-primary font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">
                  lock_reset
                </span>
                {' '}
                Audit ledger locked
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-label-sm font-label-sm font-bold text-primary tracking-wider uppercase block">
              OPERATIONAL IMPACT
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              Why High-Volume Talent Teams Choose Horizon
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Built for precision, accountability, and zero candidate attrition across every requisition tier.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 space-y-3 border border-white">
              <div className="w-10 h-10 rounded-[10px] bg-primary-fixed/50 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">
                  hourglass_disabled
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                No Candidate in Limbo
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Automated SLA guards and proactive stage alerts ensure candidates never languish without clear, prompt feedback.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 space-y-3 border border-white">
              <div className="w-10 h-10 rounded-[10px] bg-secondary-container/50 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">
                  badge
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Clear Ownership
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Absolute transparency on hiring managers, interview panel leads, and final hiring authority for every seat.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 space-y-3 border border-white">
              <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed/50 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">
                  speed
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Faster Processing
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Streamlined batch evaluation and structured scorecards reduce overall requisition cycle times by
                {' '}
                <strong className="text-on-surface">
                  [00%]
                </strong>
                .
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 space-y-3 border border-white">
              <div className="w-10 h-10 rounded-[10px] bg-primary-fixed/50 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">
                  verified_user
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Defensible Record
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Tamper-proof documentation protecting hiring decisions against external compliance audits or internal dispute.
              </p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-8 border border-white grid grid-cols-1 md:grid-cols-3 gap-8 shadow-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-on-surface font-semibold text-label-lg font-label-lg">
                <span className="material-symbols-outlined text-primary text-xl">
                  encrypted
                </span>
                {' '}
                Enterprise-Grade Security
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Encrypted hosting, role-based access control, and regular backups. Your data always remains fully yours and exportable, with no lock-in.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-on-surface font-semibold text-label-lg font-label-lg">
                <span className="material-symbols-outlined text-secondary text-xl">
                  price_check
                </span>
                {' '}
                Transparent, Scoped Pricing
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Every engagement is scoped individually with a fixed price and timeline agreed upfront — book a free consultation for a tailored quote.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-on-surface font-semibold text-label-lg font-label-lg">
                <span className="material-symbols-outlined text-tertiary text-xl">
                  groups
                </span>
                {' '}
                Built for Your Whole Team
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Role-based views mean owners, managers, and frontline recruiters each see exactly what they need, nothing more, nothing missing.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-label-sm font-label-sm font-bold text-primary tracking-wider uppercase block">
              OPERATIONAL TRANSFORMATION
            </span>
            {' '}
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              What Changes on Day One
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A definitive comparison between conventional inbox-driven hiring and Horizon's deterministic tracking architecture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-7 bg-[#ffdad6]/25 border border-error-container space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[10px] bg-error-container text-on-error-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg">
                    close
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">
                    The Old Hiring Chaos
                  </h3>
                  <p className="text-label-sm font-label-sm text-outline">
                    Unstructured, high-attrition recruitment
                  </p>
                </div>
              </div>
              <ul className="space-y-4 text-body-md font-body-md text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-lg mt-0.5 shrink-0">
                    cancel
                  </span>
                  {' '}
                  <span>
                    Applications sit neglected in inboxes with no clear status or owner
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-lg mt-0.5 shrink-0">
                    cancel
                  </span>
                  {' '}
                  <span>
                    Interviewer evaluations scattered across unlinked emails, Slack, and memory
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-lg mt-0.5 shrink-0">
                    cancel
                  </span>
                  {' '}
                  <span>
                    A rigid, generic process forced onto disparate engineering and executive roles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-lg mt-0.5 shrink-0">
                    cancel
                  </span>
                  {' '}
                  <span>
                    Zero audit trail or defensible records if a hiring decision is ever questioned
                  </span>
                </li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-7 border-2 border-secondary/40 space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[10px] bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg">
                    check
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface">
                    Horizon ATS Backbone
                  </h3>
                  <p className="text-label-sm font-label-sm text-secondary font-semibold">
                    Structured, accountable precision
                  </p>
                </div>
              </div>
              <ul className="space-y-4 text-body-md font-body-md text-on-surface">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5 shrink-0">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Full activity history recorded on one centralized, real-time candidate profile
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5 shrink-0">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Objective, rubric-based scorecards integrated into synchronized hiring councils
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5 shrink-0">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Configurable stages matching exactly how each specialized division operates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5 shrink-0">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Timestamped, immutable audit trail on every stage transition and sign-off
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Clear answers regarding pipeline configuration, security, compliance, and candidate data portability.
            </p>
          </div>
          <div className="space-y-3">
            <div className="glass-card rounded-[10px] p-5 border border-white shadow-sm space-y-3">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Can we customize the stages for different departments?
                </h3>
                {' '}
                <span className="material-symbols-outlined text-primary text-xl transform rotate-180">
                  expand_more
                </span>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed pt-2 border-t border-outline-variant/20">
                Yes, completely. Horizon supports stage hierarchies that can be defined globally or segmented by department, seniority level, or geographic location. For instance, technical engineering roles can mandate code evaluation and systems architecture panels with custom rubrics, while executive requisitions can run through confidentiality-gated partner review loops.
              </p>
            </div>
            <div className="glass-card rounded-[10px] p-5 border border-white shadow-sm flex items-center justify-between cursor-pointer hover:bg-white/90 transition-colors">
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Does it integrate with our existing careers page?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-outline text-xl">
                expand_more
              </span>
            </div>
            <div className="glass-card rounded-[10px] p-5 border border-white shadow-sm flex items-center justify-between cursor-pointer hover:bg-white/90 transition-colors">
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Can we run reports on time spent in each stage?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-outline text-xl">
                expand_more
              </span>
            </div>
            <div className="glass-card rounded-[10px] p-5 border border-white shadow-sm flex items-center justify-between cursor-pointer hover:bg-white/90 transition-colors">
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Can candidates apply from a mobile device easily?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-outline text-xl">
                expand_more
              </span>
            </div>
            <div className="glass-card rounded-[10px] p-5 border border-white shadow-sm flex items-center justify-between cursor-pointer hover:bg-white/90 transition-colors">
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Is candidate data handled in line with privacy regulations?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-outline text-xl">
                expand_more
              </span>
            </div>
            <div className="glass-card rounded-[10px] p-5 border border-white shadow-sm flex items-center justify-between cursor-pointer hover:bg-white/90 transition-colors">
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Can we export candidate data for external reporting?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-outline text-xl">
                expand_more
              </span>
            </div>
            <div className="glass-card rounded-[10px] p-5 border border-white shadow-sm flex items-center justify-between cursor-pointer hover:bg-white/90 transition-colors">
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                How long does implementation typically take?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-outline text-xl">
                expand_more
              </span>
            </div>
            <div className="glass-card rounded-[10px] p-5 border border-white shadow-sm flex items-center justify-between cursor-pointer hover:bg-white/90 transition-colors">
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                Is our data secure, and who owns it?
              </h3>
              {' '}
              <span className="material-symbols-outlined text-outline text-xl">
                expand_more
              </span>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-label-sm font-label-sm font-bold text-primary tracking-wider uppercase block">
                {"CONNECTED HR & OPERATIONS MODULES"}
              </span>
              {' '}
              <h2 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
                More from the Horizon Ecosystem
              </h2>
            </div>
            {' '}
            <Link to="/products" className="text-label-lg font-label-lg font-semibold text-primary hover:text-primary-container transition-colors flex items-center gap-1.5">
              <span>
                Browse all [00+] product packages
              </span>
              {' '}
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 space-y-3 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-primary-fixed/40 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">
                    hub
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Recruitment Management Platform
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Move a candidate from resume to offer letter without losing track in an inbox.
                </p>
              </div>
              {' '}
              <span className="text-label-md font-label-md font-semibold text-primary inline-flex items-center gap-1 pt-3">
                Explore Module
                {' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </span>
            </div>
            <div className="glass-card rounded-2xl p-6 space-y-3 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-secondary-container/40 text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">
                    badge
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  HR Management System
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  One record per employee from onboarding to offboarding, attendance, and compliance included.
                </p>
              </div>
              {' '}
              <span className="text-label-md font-label-md font-semibold text-secondary inline-flex items-center gap-1 pt-3">
                Explore Module
                {' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </span>
            </div>
            <div className="glass-card rounded-2xl p-6 space-y-3 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-tertiary-fixed/40 text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">
                    payments
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Payroll Management System
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Run payroll, calculate tax withholdings, and disburse without manual spreadsheet friction.
                </p>
              </div>
              {' '}
              <span className="text-label-md font-label-md font-semibold text-tertiary inline-flex items-center gap-1 pt-3">
                Explore Module
                {' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </span>
            </div>
            <div className="glass-card rounded-2xl p-6 space-y-3 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[10px] bg-primary-fixed/40 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">
                    receipt_long
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Employee Expense Management
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Snap receipts with automated policy verification and multi-level ledger approvals.
                </p>
              </div>
              {' '}
              <span className="text-label-md font-label-md font-semibold text-primary inline-flex items-center gap-1 pt-3">
                Explore Module
                {' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </span>
            </div>
          </div>
        </section>
        <section className="rounded-3xl p-10 lg:p-16 relative overflow-hidden bg-gradient-to-br from-[#ff7555] via-[#ff6546] to-[#a9371d] text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-white/20 backdrop-blur-md text-white text-label-sm font-label-sm font-bold">
              <span className="material-symbols-outlined text-sm">
                verified
              </span>
              {' '}
              DETERMINISTIC HIRING ASSURANCE
            </div>
            <h2 className="text-display-lg-mobile md:text-headline-lg font-headline-lg font-bold tracking-tight text-white">
              Bring deterministic certainty to your hiring pipeline
            </h2>
            <p className="text-body-lg font-body-lg text-white/90 max-w-2xl leading-relaxed">
              Transition off loose inbox resumes today. Configure custom candidate workflows, rubric scorecards, and tamper-proof decision trails with a dedicated Horizon solutions engineer.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-6 py-3.5 rounded-[10px] bg-white text-primary text-label-lg font-label-lg font-bold hover:bg-surface-container-low shadow-lg active:scale-[0.99] transition-all flex items-center gap-2">
                <span>
                  Book an Architectural Consultation
                </span>
                {' '}
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </button>
              {' '}
              <button className="px-6 py-3.5 rounded-[10px] bg-white/10 backdrop-blur-md border border-white/30 text-white text-label-lg font-label-lg font-semibold hover:bg-white/20 active:scale-[0.99] transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  download
                </span>
                {' '}
                <span>
                  Download ATS Architecture Brief
                </span>
              </button>
            </div>
            <p className="text-label-sm font-label-sm text-white/70 pt-2">
              Encrypted hosting, role-based access and regular backups. Your data always remains fully yours and exportable, with no lock-in.
            </p>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
