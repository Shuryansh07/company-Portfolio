// Restores the small interactions the Stitch pages shipped as inline scripts:
// filter tabs, catalogue search and FAQ toggles. It works from the markup the page has,
// so regenerated pages keep working. Returns a cleanup function.
export function enhance(root) {
  const filters = [...root.querySelectorAll('button[data-filter]')]
  const activeClass = filters[0]?.className
  const idleClass = filters[1]?.className

  const applyFilter = (key) => {
    // Products catalogue filters whole category sections. Careers filters individual role rows.
    const wanted = key === 'ai-agents' ? 'ai-agents-section' : `category-${key}`
    root.querySelectorAll('.catalogue-category, #ai-agents-section').forEach((s) => {
      s.style.display = key === 'all' || s.id === wanted ? '' : 'none'
    })
    root.querySelectorAll('[data-dept]').forEach((c) => {
      c.style.display = key === 'all' || c.dataset.dept === key ? '' : 'none'
    })
  }

  const onClick = (e) => {
    const filter = e.target.closest('button[data-filter]')
    if (filter) {
      filters.forEach((b) => { b.className = b === filter ? activeClass : idleClass })
      applyFilter(filter.dataset.filter)
      return
    }
    const toggle = e.target.closest('button')
    const answer = toggle?.closest('.faq-item')?.querySelector('.faq-answer') ?? toggle?.nextElementSibling
    if (answer && (answer.classList.contains('hidden') || answer.dataset.collapsible)) {
      answer.dataset.collapsible = 'true'
      const nowHidden = answer.classList.toggle('hidden')
      toggle.querySelector('.material-symbols-outlined')?.classList.toggle('rotate-180', !nowHidden)
    }
  }

  const onInput = (e) => {
    if (e.target.id !== 'productSearchInput') return
    const q = e.target.value.toLowerCase().trim()
    root.querySelectorAll('.catalogue-card').forEach((c) => {
      c.style.display = c.textContent.toLowerCase().includes(q) ? '' : 'none'
    })
  }

  root.addEventListener('click', onClick)
  root.addEventListener('input', onInput)
  return () => {
    root.removeEventListener('click', onClick)
    root.removeEventListener('input', onInput)
  }
}
