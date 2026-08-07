(function () {
  const records = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.training) || [];
  const host = document.getElementById('credential-groups');
  if (!host) return;

  const esc = (value) => String(value ?? '').replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[char]));

  const groupOrder = [
    'UAV and imagery',
    'Spatial analytics and data science',
    'Python and GIS automation',
    'ArcGIS systems and architecture'
  ];

  const groupDescriptions = {
    'UAV and imagery': 'Operational flight preparation and drone-imagery processing.',
    'Spatial analytics and data science': 'Spatial-data science and spatiotemporal analytical foundations.',
    'Python and GIS automation': 'Programming foundations for repeatable GIS workflows.',
    'ArcGIS systems and architecture': 'System-level understanding of ArcGIS architecture and deployment context.'
  };

  const grouped = records.reduce((acc, item) => {
    const key = item.category || 'Other professional development';
    (acc[key] ||= []).push(item);
    return acc;
  }, {});

  const orderedGroups = [
    ...groupOrder.filter((name) => grouped[name]),
    ...Object.keys(grouped).filter((name) => !groupOrder.includes(name))
  ];

  document.getElementById('credential-count')?.replaceChildren(String(records.length));
  document.getElementById('credential-area-count')?.replaceChildren(String(orderedGroups.length));

  const card = (item) => {
    const credentialClass = item.credential === 'Professional certification' ? ' is-certification' : '';
    return `
      <article class="credential-card${credentialClass}">
        <a class="credential-preview" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(item.title)} certificate PDF">
          <img src="${esc(item.image)}" alt="Certificate preview: ${esc(item.title)}" loading="lazy">
          <span>Original PDF</span>
        </a>
        <div class="credential-copy">
          <div class="credential-topline">
            <span class="credential-type">${esc(item.credential || 'Course completion')}</span>
            <span class="credential-year">${esc(item.period)}</span>
          </div>
          <h3>${esc(item.title)}</h3>
          <p class="credential-issuer">${esc(item.provider)}</p>
          <dl class="credential-meta">
            <div><dt>Completed</dt><dd>${esc(item.completed || item.period)}</dd></div>
            <div><dt>Duration</dt><dd>${esc(item.duration || 'Not specified')}</dd></div>
          </dl>
          <p class="credential-summary">${esc(item.details)}</p>
          <a class="credential-action" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">View certificate <span aria-hidden="true">→</span></a>
        </div>
      </article>`;
  };

  host.innerHTML = orderedGroups.map((name, index) => `
    <section class="credential-group" aria-labelledby="credential-group-${index}">
      <header class="credential-group-head">
        <span>${String(index + 1).padStart(2, '0')}</span>
        <div>
          <h3 id="credential-group-${index}">${esc(name)}</h3>
          <p>${esc(groupDescriptions[name] || 'Selected professional development records.')}</p>
        </div>
      </header>
      <div class="credential-grid">${grouped[name].map(card).join('')}</div>
    </section>`).join('');
})();
