// Sends a form's fields to Web3Forms, which emails them to the address tied to the access key.
// The key comes from WEBFROM_API_KEY in .env (exposed to the browser via envPrefix in vite.config.js).
const ACCESS_KEY = import.meta.env.WEBFROM_API_KEY

export async function sendContactForm(form) {
  if (!ACCESS_KEY) throw new Error('Contact form is not configured (WEBFROM_API_KEY is missing).')

  const data = Object.fromEntries(new FormData(form))
  const name = `${data.first_name ?? ''} ${data.last_name ?? ''}`.trim()

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `New contact request from ${name || 'website visitor'}${data.company ? ` (${data.company})` : ''}`,
      from_name: 'Horizon website',
      name,
      ...data,
    }),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok || !json.success) throw new Error(json.message || 'Could not send your message. Please try again.')
}
