// Generated from stitch/c_contact.html by scripts/stitch-to-jsx.mjs (npm run convert).
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sendContactForm } from '../lib/web3forms.js'
import './Contact.css'

export default function Contact() {
  // status: idle | sending | sent | error
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    setError('')
    try {
      await sendContactForm(form)
      form.reset()
      setStatus('sent')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  return (
    <div className="pg-contact bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col font-body-md text-body-md relative overflow-x-hidden">
      <title>{"Contact Us | Horizons - Enterprise AI & ERP Orchestration"}</title>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-b from-primary-container/10 via-primary-fixed/20 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-[35%] -left-[10%] w-[500px] h-[500px] rounded-full bg-secondary-container/20 blur-3xl opacity-60" />
        <div className="absolute top-[60%] -right-[10%] w-[600px] h-[600px] rounded-full bg-tertiary-fixed/30 blur-3xl opacity-50" />
      </div>
      {' '}
      {' '}
      <main className="relative z-10 flex-grow max-w-7xl w-full mx-auto px-4 md:px-8 py-8 space-y-16">
        <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-primary-fixed/40 border border-outline-variant/40 text-on-primary-container font-label-md text-label-md">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {' '}
            <span>
              Direct Channel
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">
            Let's work together
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Connect directly with our solutions engineering team to scope your AI automation workflows, ERP migrations, or custom enterprise architecture.
          </p>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-surface rounded-2xl p-8 space-y-6">
              <div className="border-b border-surface-variant pb-4">
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  Direct Connectivity
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Direct communication lines to senior systems architects.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[10px] bg-primary-fixed/40 border border-outline-variant/30 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      mail
                    </span>
                  </div>
                  <div className="flex-grow">
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      {"Inquiries & RFCs"}
                    </div>
                    <div className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      shuryansh.dev.work@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[10px] bg-primary-fixed/40 border border-outline-variant/30 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      call
                    </span>
                  </div>
                  <div className="flex-grow">
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Direct Line
                    </div>
                    <div className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      9026139959
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[10px] bg-secondary-container/40 border border-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      schedule
                    </span>
                  </div>
                  <div className="flex-grow">
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Active Operations Window
                    </div>
                    <div className="font-body-md text-body-md font-medium text-on-surface">
                      09:00 am - 06:30 pm IST
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">
                  public
                </span>
                {' '}
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Remote-first engineering team actively serving clients across US, UK, and APAC time zones with guaranteed response windows.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-high/60 border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-on-surface font-semibold font-headline-sm text-[16px]">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  verified_user
                </span>
                {' '}
                <span>
                  {"Security & Confidentiality Protocol"}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                All discussions covered by mutual NDA. Zero proprietary data training, encrypted communications, and role-based access controls.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="glass-surface rounded-2xl p-8 md:p-10 border border-outline-variant/40 space-y-8">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-[6px] bg-tertiary-fixed/30 text-on-tertiary-fixed-variant font-label-sm text-label-sm mb-2">
                  Fast-Track Technical Review
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                  Initiate a project discussion
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Provide your parameters to receive a technical scoping response within one business day.
                </p>
              </div>
              <form className="space-y-6" onSubmit={onSubmit}>
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="first-name">
                      First name *
                    </label>
                    {' '}
                    <input className="w-full h-12 px-4 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md transition-all" id="first-name" name="first_name" placeholder="Alex" required type="text" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="last-name">
                      Last name *
                    </label>
                    {' '}
                    <input className="w-full h-12 px-4 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md transition-all" id="last-name" name="last_name" placeholder="Vance" required type="text" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="work-email">
                      Work email *
                    </label>
                    {' '}
                    <input className="w-full h-12 px-4 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md transition-all" id="work-email" name="email" placeholder="alex@enterprise.com" required type="email" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="phone">
                      Phone number
                    </label>
                    {' '}
                    <input className="w-full h-12 px-4 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md transition-all" id="phone" name="phone" placeholder="Phone number" type="tel" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="company">
                      Company name *
                    </label>
                    {' '}
                    <input className="w-full h-12 px-4 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md transition-all" id="company" name="company" placeholder="Horizons Dynamics Ltd." required type="text" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="team-size">
                      Team / Fleet size
                    </label>
                    {' '}
                    <select className="w-full h-12 px-4 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md transition-all" id="team-size" name="team_size">
                      <option value="1-50">
                        1 - 50 members
                      </option>
                      <option value="51-250">
                        51 - 250 members
                      </option>
                      <option value="251-1000">
                        251 - 1,000 members
                      </option>
                      <option value="1000+">
                        1,000+ enterprise scale
                      </option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="service">
                      Service required
                    </label>
                    {' '}
                    <select className="w-full h-12 px-4 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md transition-all" id="service" name="service">
                      <option value="AI Automation">
                        AI Automation
                      </option>
                      <option value={"ERP & CRM Solutions"}>
                        {"ERP & CRM Solutions"}
                      </option>
                      <option value="Custom Software Development">
                        Custom Software Development
                      </option>
                      <option value="Web Development">
                        Web Development
                      </option>
                      <option value="App Development">
                        App Development
                      </option>
                      <option value={"IT Strategy & Consulting"}>
                        {"IT Strategy & Consulting"}
                      </option>
                      <option value="Application Maintenance">
                        Application Maintenance
                      </option>
                      <option value="Quality Assurance">
                        Quality Assurance
                      </option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="product">
                      Product of interest
                    </label>
                    {' '}
                    <select className="w-full h-12 px-4 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md transition-all" id="product" name="product">
                      <option value="AI QC Agent">
                        AI QC Agent
                      </option>
                      <option value="Exhibition Lead Intelligence">
                        Exhibition Lead Intelligence
                      </option>
                      <option value="AI Travel Agent">
                        AI Travel Agent
                      </option>
                      <option value="Integrated Enterprise ERP">
                        Integrated Enterprise ERP
                      </option>
                      <option value={"Warehouse & Logistics Platform"}>
                        {"Warehouse & Logistics Platform"}
                      </option>
                      <option value="Custom Enterprise Engagement">
                        Custom Enterprise Engagement
                      </option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="project-scope">
                    Message / Project Scope
                  </label>
                  {' '}
                  <textarea className="w-full p-4 rounded-[10px] bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md transition-all" id="project-scope" name="message" placeholder="Describe your operational bottlenecks, existing tech stack, and expected target delivery date..." rows="4" />
                </div>
                <div className="flex items-start gap-2.5 text-on-surface-variant font-body-sm text-body-sm bg-surface-container/50 p-3 rounded-[10px] border border-outline-variant/20">
                  <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">
                    lock
                  </span>
                  {' '}
                  <span>
                    Confidentiality guaranteed. We sign bilateral non-disclosure agreements prior to reviewing proprietary schematics or databases.
                  </span>
                </div>
                {' '}
                <button className="w-full py-4 px-6 rounded-[10px] bg-primary text-on-primary font-headline-sm text-headline-sm font-semibold hover:bg-primary-container shadow-md transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed" type="submit" disabled={status === 'sending'}>
                  <span>
                    {status === 'sending' ? 'Sending…' : 'Submit details'}
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-[20px]">
                    send
                  </span>
                </button>
                <div aria-live="polite">
                  {status === 'sent' && (
                    <p className="font-body-sm text-body-sm text-on-surface bg-secondary-container/40 border border-secondary/20 p-3 rounded-[10px]">
                      Thanks — your details were sent. We'll reply within one business day.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="font-body-sm text-body-sm text-error bg-error-container/40 border border-error/20 p-3 rounded-[10px]">
                      {error}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="space-y-8 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-block px-3 py-1 rounded-[6px] bg-secondary-container/40 text-on-secondary-container font-label-md text-label-md font-semibold">
              Execution Protocol
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
              Clear milestone progression from first touch to deployment.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-surface rounded-2xl p-8 relative flex flex-col justify-between border border-outline-variant/30 group hover:border-primary/40 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-[6px] bg-primary text-on-primary font-headline-sm text-headline-sm font-bold">
                    01
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                    speed
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Direct Response within 1 Business Day
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  A dedicated enterprise systems architect reviews your requirements and confirms feasibility.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-surface-variant/60 font-label-sm text-label-sm text-primary flex items-center gap-1 font-semibold">
                <span>
                  Guaranteed triage SLA
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </div>
            </div>
            <div className="glass-surface rounded-2xl p-8 relative flex flex-col justify-between border border-outline-variant/30 group hover:border-primary/40 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-[6px] bg-surface-variant text-on-surface font-headline-sm text-headline-sm font-bold">
                    02
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                    forum
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Technical Scoping Call
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  A 30-minute deep dive examining technical architecture, data connections, and operational workflows.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-surface-variant/60 font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 font-semibold">
                <span>
                  Bilateral NDA included
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  lock
                </span>
              </div>
            </div>
            <div className="glass-surface rounded-2xl p-8 relative flex flex-col justify-between border border-outline-variant/30 group hover:border-primary/40 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-[6px] bg-surface-variant text-on-surface font-headline-sm text-headline-sm font-bold">
                    03
                  </span>
                  {' '}
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                    assignment_turned_in
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  Tailored SOW in 48 Hours
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  A binding statement of work with guaranteed fixed-scope delivery timelines, fixed pricing, and milestone deliverables.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-surface-variant/60 font-label-sm text-label-sm text-secondary flex items-center gap-1 font-semibold">
                <span>
                  {"Fixed price & deliverables"}
                </span>
                {' '}
                <span className="material-symbols-outlined text-[14px]">
                  check_circle
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-surface rounded-2xl p-8 border border-outline-variant/30 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-[10px] bg-surface-container-high flex items-center justify-center text-on-surface">
                <span className="material-symbols-outlined">
                  description
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Looking for platform technical specifications?
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Download our architectural whitepaper and agent capability index detailing security schemas and database integrations.
              </p>
            </div>
            <div>
              <Link to="/contact" className="px-5 py-3 rounded-[10px] border border-outline-variant text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container transition-all active:scale-[0.99] flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  download
                </span>
                {' '}
                <span>
                  Download brochure
                </span>
              </Link>
            </div>
          </div>
          <div className="glass-surface rounded-2xl p-8 border border-primary/20 bg-gradient-to-br from-primary-fixed/20 to-surface flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-[10px] bg-primary text-on-primary flex items-center justify-center">
                <span className="material-symbols-outlined">
                  smart_toy
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Prefer a live guided walkthrough of our agents?
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Experience real-time AI QC inspection, exhibition lead synthesis, and automated ERP reconciliation on live test fixtures.
              </p>
            </div>
            <div>
              <Link to="/contact" className="px-6 py-3 rounded-[10px] bg-primary text-on-primary font-label-lg text-label-lg font-semibold hover:bg-primary-container shadow-sm transition-all active:scale-[0.99] flex items-center gap-2">
                <span>
                  Book a free demo
                </span>
                {' '}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto space-y-8 pt-4">
          <div className="text-center space-y-2">
            <div className="inline-block px-3 py-1 rounded-[6px] bg-surface-variant text-on-surface-variant font-label-md text-label-md font-semibold">
              Pre-Engagement Guidance
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
              Frequently Asked Questions
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Clear answers regarding deployment timelines, data sovereignty, and technical architecture.
            </p>
          </div>
          <div className="space-y-4" id="faq-accordion">
            <div className="glass-surface rounded-xl border border-outline-variant/30 p-6 transition-all duration-200">
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-headline-sm text-[18px] font-semibold text-on-surface list-none">
                  <span>
                    How quickly can our team begin an engagement after contract signing?
                  </span>
                  {' '}
                  <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180 text-primary">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Standard technical discovery kicks off within 48 to 72 hours following bilateral SOW signature. Our solutions engineers deploy isolated sandboxes and begin pipeline testing immediately, ensuring zero idle lead time.
                </p>
              </details>
            </div>
            <div className="glass-surface rounded-xl border border-outline-variant/30 p-6 transition-all duration-200">
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-headline-sm text-[18px] font-semibold text-on-surface list-none">
                  <span>
                    Do Horizons AI systems train on our proprietary business data or schematics?
                  </span>
                  {' '}
                  <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180 text-primary">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Strictly no. Horizons adheres to sovereign single-tenant data isolation standards. All embeddings, contextual RAG databases, and transaction records remain fully within your tenant boundary. No enterprise inputs are ever repurposed to train public foundation models.
                </p>
              </details>
            </div>
            <div className="glass-surface rounded-xl border border-outline-variant/30 p-6 transition-all duration-200">
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-headline-sm text-[18px] font-semibold text-on-surface list-none">
                  <span>
                    What support and SLA coverage are included with fixed-scope rollouts?
                  </span>
                  {' '}
                  <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180 text-primary">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Every fixed-scope package includes 90 days of embedded post-deployment warranty support, guaranteed 99.9% uptime uptime SLAs for automated nodes, and continuous oversight from our Tier-3 systems engineering squad.
                </p>
              </details>
            </div>
            <div className="glass-surface rounded-xl border border-outline-variant/30 p-6 transition-all duration-200">
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-headline-sm text-[18px] font-semibold text-on-surface list-none">
                  <span>
                    Can Horizons integrate directly with our legacy ERP and database infrastructure?
                  </span>
                  {' '}
                  <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180 text-primary">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Yes. We maintain native micro-service connectors for SAP, Oracle NetSuite, Microsoft Dynamics 365, as well as on-premise PostgreSQL, MS SQL, and AS400 mainframe message queues with transactional rollback guarantees.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      {' '}
    </div>
  )
}
