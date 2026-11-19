// Zoho apps grouped by category, shown as circles whose apps fan out around the edge on hover.
// Used on the Zoho page and in the Products page's Zoho filter. Styles: ZohoApps.css (plain CSS).
import './ZohoApps.css'

// Zoho product icons: public/images/zoho/<file>.svg (official logos cropped to the icon; see IMAGE_SOURCES.md).
export const zohoIcon = (file) => `/images/zoho/${file}.svg`

// Grouped the way Zoho One groups its apps. `tint` is the category's accent colour.
export const appGroups = [
  { name: 'Sales', blurb: 'Win and manage customers', icon: 'trending_up', tint: '#e42527', apps: [['CRM', 'crm', 'Leads, deals and pipelines'], ['Bigin', 'bigin', 'Simple CRM for small teams'], ['Bookings', 'bookings', 'Appointment scheduling']] },
  { name: 'Marketing', blurb: 'Attract, capture and nurture leads', icon: 'campaign', tint: '#e42527', apps: [['Campaigns', 'campaigns', 'Email and SMS campaigns'], ['Marketing Automation', 'marketingautomation', 'Lead nurturing journeys'], ['Social', 'social', 'Social media publishing'], ['SalesIQ', 'salesiq', 'Live chat and visitor tracking'], ['PageSense', 'pagesense', 'A/B testing and heatmaps'], ['Sites', 'sites', 'Website builder'], ['Forms', 'forms', 'Online forms'], ['Survey', 'survey', 'Customer surveys'], ['Backstage', 'backstage', 'Event management'], ['Commerce', 'commerce', 'Online store']] },
  { name: 'Finance', blurb: 'Books, invoices and payments', icon: 'account_balance', tint: '#089949', apps: [['Books', 'books', 'Accounting and GST'], ['Invoice', 'invoice', 'Invoicing'], ['Expense', 'expense', 'Expense reports'], ['Checkout', 'checkout', 'Payment pages']] },
  { name: 'Operations', blurb: 'Stock, orders and recurring billing', icon: 'inventory_2', tint: '#089949', apps: [['Inventory', 'inventory', 'Stock and orders'], ['Subscriptions', 'subscriptions', 'Recurring billing']] },
  { name: 'Human Resources', blurb: 'Hire, manage and pay your team', icon: 'groups', tint: '#226db4', apps: [['People', 'people', 'HR, attendance and leave'], ['Recruit', 'recruit', 'Hiring and applicant tracking'], ['Payroll', 'payroll', 'Salary and compliance']] },
  { name: 'Support', blurb: 'Help customers fast', icon: 'support_agent', tint: '#226db4', apps: [['Desk', 'desk', 'Help desk and tickets'], ['Assist', 'assist', 'Remote support'], ['Lens', 'lens', 'AR-based remote assistance']] },
  { name: 'Business Process & Legal', blurb: 'Custom apps and contracts', icon: 'account_tree', tint: '#226db4', apps: [['Creator', 'creator', 'Low-code custom apps'], ['Flow', 'flow', 'Workflow integrations'], ['Contracts', 'contracts', 'Contract management']] },
  { name: 'BI & Analytics', blurb: 'Turn data into decisions', icon: 'insights', tint: '#e42527', apps: [['Analytics', 'analytics', 'Dashboards and reports'], ['DataPrep', 'dataprep', 'Data cleaning and prep']] },
  { name: 'Collaboration', blurb: 'Plan and deliver work together', icon: 'diversity_3', tint: '#e42527', apps: [['Projects', 'projects', 'Projects and timesheets'], ['Sprints', 'sprints', 'Agile planning'], ['TeamInbox', 'teaminbox', 'Shared inboxes'], ['Meeting', 'meeting', 'Video meetings and webinars'], ['WorkDrive', 'workdrive', 'Team file storage'], ['Connect', 'connect', 'Company intranet'], ['Learn', 'learn', 'Training and knowledge base']] },
  { name: 'Communication', blurb: 'Email and team chat', icon: 'forum', tint: '#f9b21d', apps: [['Mail', 'mail', 'Business email'], ['Cliq', 'cliq', 'Team chat']] },
  { name: 'Productivity', blurb: 'Everyday office tools', icon: 'edit_note', tint: '#f9b21d', apps: [['Writer', 'writer', 'Documents'], ['Sheet', 'sheet', 'Spreadsheets'], ['Show', 'show', 'Presentations'], ['Sign', 'sign', 'E-signatures'], ['Notebook', 'notebook', 'Notes'], ['Calendar', 'calendar', 'Shared calendars'], ['Vault', 'vault', 'Password manager']] },
]

// Each category is a circle; on hover, focus or tap its Zoho apps fan out as small circles
// spaced evenly around the edge.
export default function ZohoOrbits() {
  return (
    <div className="zoho-orbits">
      {appGroups.map((g) => (
        <div key={g.name} className="zoho-orbit" style={{ '--tint': g.tint, '--n': g.apps.length }} tabIndex={0}>
          <div className="zoho-orbit__circle">
            <span className="zoho-orbit__icon">
              <span className="material-symbols-outlined text-[22px]" aria-hidden="true">{g.icon}</span>
            </span>
            <h3 className="text-label-lg font-label-lg text-on-surface font-bold leading-tight">{g.name}</h3>
            <p className="zoho-orbit__blurb text-body-sm text-on-surface-variant leading-snug">{g.blurb}</p>
            <span className="zoho-orbit__count">{g.apps.length} apps</span>
          </div>
          <ul className="zoho-orbit__apps" aria-label={`${g.name} apps`}>
            {g.apps.map(([name, file, desc], i) => (
              <li key={name} className="zoho-orbit__app" style={{ '--i': i }}>
                <span className="zoho-orbit__bubble">
                  <img src={zohoIcon(file)} alt={`Zoho ${name}`} width="26" height="26" loading="lazy" />
                </span>
                <span className="zoho-orbit__label" role="tooltip">
                  <strong>Zoho {name}</strong>
                  <span>{desc}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
