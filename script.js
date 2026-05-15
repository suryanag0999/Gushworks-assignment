const galleryImages = [
'./assets/hero_first_image.png',
'./assets/hero_first_image.png',
'./assets/hero_first_image.png',
'./assets/hero_first_image.png',
'./assets/hero_first_image.png',
];

const specs = [
  ['Pipe Diameter Range', '20mm to 1600mm (3/4" to 63")'],
  ['Pressure Ratings', 'PN 2.5, PN 4, PN 6, PN 8, PN 10, PN 12.5, PN 16'],
  ['Standard Dimension Ratio', 'SDR 33, SDR 26, SDR 21, SDR 17, SDR 13.6, SDR 11'],
  ['Operating Temperature', '-40°C to +80°C (-40°F to +176°F)'],
  ['Service Life', '50+ Years (at 20°C, PN 10)'],
  ['Material Density', '0.95 – 0.96 g/cm³'],
  ['Certification Standards', 'IS 5984, ISO 4427, ASTM D3035'],
  ['Joint Type', 'Butt Fusion, Electrofusion, Mechanical'],
  ['Coil Lengths', 'Up to 500m (for smaller diameters)'],
  ['Country of Origin', '🇮🇳 India'],
];

const features = [
  { icon: './assets/GearFine.svg', title: 'Superior Chemical Resistance', desc: 'It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes.' },
  { icon: './assets/GearFine.svg', title: 'Exceptional Flexibility & Durability', desc: 'Engineered for demanding applications, HDPE pipes flex without fracturing, absorbing ground movement and seismic activity. Their high impact resistance ensures reliable performance across decades.' },
  { icon:'./assets/GearFine.svg', title: 'Leak-Proof Fusion Welding', desc: 'Butt fusion and electrofusion joints create a monolithic, seamless pipeline with joint strength exceeding the pipe body itself — eliminating leak points for absolute system integrity.' },
  { icon: './assets/GearFine.svg', title: 'Cost-Effective Long-Term Solution', desc: 'Lower installation costs, minimal maintenance requirements, and a 50+ year service life make HDPE the most economical choice over the full lifecycle of any piping system.' },
  { icon: './assets/GearFine.svg', title: 'Environmentally Sustainable', desc: 'Fully recyclable at end of life, HDPE pipes reduce environmental impact. Their smooth bore also minimises pumping energy requirements — reducing operational carbon footprint.' },
  { icon: './assets/GearFine.svg', title: 'Certified Quality Assurance', desc: 'Every pipe is manufactured under ISO 9001 quality management with third-party BIS, CE, and ISO 4427 certifications — backed by full traceability from raw material to delivery.' },
];

const faqs = [
  { q: 'What is the purpose of a laser cutter for sheet metal?', a: 'HDPE pipes are designed to transport water, gas, and industrial fluids with exceptional durability. Their corrosion resistance, flexibility, and leak-proof fusion joints make them the preferred choice for modern infrastructure projects requiring long service life.' },
  { q: 'What are the benefits of using aluminum tubing in manufacturing?', a: 'Our Aluminum tubing is lightweight, corrosion-resistant, durable, and easy to fabricate, making it ideal for many industrial applications.' },
  { q: 'Can HDPE pipes be used in underground and submerged applications?', a: 'Yes. HDPE\'s resistance to soil chemicals, moisture, and biological attack makes it ideal for underground water mains, sewer systems, and submerged marine applications. Butt fusion joints ensure the pipeline remains fully watertight.' },
  { q: 'What are the common applications of aluminum tubing?', a: 'Aluminum tubing is commonly used in construction, automotive, aerospace, furniture, and HVAC industries due to its strength and versatility.' },
  { q: 'Can aluminum tubing be customized?', a: 'Yes, aluminum tubing can be customized in terms of size, shape, thickness, finish, and alloy to meet specific manufacturing needs.' },
];

const versatileItems = [
  { title: 'Fishnet Manufacturing', desc: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications..', bg: './assets/worker-mobile.svg' },
  { title: 'Fishnet Manufacturing', desc: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications..', bg: './assets/worker-mobile.svg' },
  { title: 'Fishnet Manufacturing', desc: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications..', bg: './assets/worker-mobile.svg' },
  { title: 'Fishnet Manufacturing', desc: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications..', bg: './assets/worker-mobile.svg' },
//   { title: 'Fishnet Manufacturing', desc: 'Lightweight, flexible HDPE coils simplify large-scale irrigation installation while withstanding harsh outdoor conditions.', bg: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
//   { title: 'Fishnet Manufacturing', desc: 'Chemical-resistant HDPE systems safely convey aggressive industrial fluids in processing plants and refineries.', bg: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
//   { title: 'Fishnet Manufacturing', desc: 'PE100 grade HDPE pipes meet the strictest gas network standards for safety, integrity, and longevity.', bg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
];

const processSteps = [
  { title: 'Raw Material', heading: 'High-Grade Raw Material Selection', content: 'We source exclusively PE100 grade HDPE resin with optimal molecular weight distribution, ensuring maximum strength, chemical resistance, and long-term performance in every pipe produced.', features: ['PE100 grade material', 'Optimal molecular weight distribution'], icon: './assets/price-range-tab.svg' },
  { title: 'Extrusion', heading: 'Advanced Extrusion Process', content: 'State-of-the-art twin-screw extruders with precision temperature control ensure consistent melt flow, uniform wall thickness, and optimal material properties throughout the pipe length.', features: ['Precision temperature control', 'Uniform material flow'], icon: './assets/price-range-tab.svg' },
  { title: 'Cooling', heading: 'Controlled Cooling System', content: 'Multi-stage water bath cooling with precise temperature management maintains structural integrity, eliminates residual stress, and ensures dimensional accuracy as the pipe solidifies.', features: ['Water bath cooling', 'Temperature monitoring'], icon: './assets/price-range-tab.svg' },
  { title: 'Sizing', heading: 'Precision Sizing Process', content: 'Vacuum sizing tanks create exact outer diameter while internal air pressure maintains perfect roundness and wall thickness uniformity — critical for pressure performance.', features: ['Automated sizing control', 'Quality verification'], icon: './assets/price-range-tab.svg' },
  { title: 'Quality Control', heading: 'Comprehensive Quality Testing', content: 'Multiple QC checkpoints including hydrostatic pressure testing, dimensional inspection, and visual examination ensure every pipe meets IS 5984, ISO 4427, and ASTM D3035 standards.', features: ['Hydrostatic pressure testing', 'Dimensional inspection'], icon: './assets/price-range-tab.svg' },
  { title: 'Marking', heading: 'Product Identification & Traceability', content: 'Full traceability markings are applied including manufacturer, batch code, pressure rating, and standard compliance — enabling complete supply chain transparency.', features: ['Standard compliance markings', 'Batch tracking codes'], icon: './assets/price-range-tab.svg' },

];

const testimonials = [
  { name: 'Johann Mueller', role: 'Production Director, AquaFlow GmbH', heading: 'Revolutionized our pipeline infrastructure!', content: 'Meera Industries\' HDPE pipes have transformed our water distribution network. The precision engineering delivers consistent pressure performance critical for our municipal applications. Quality is outstanding.' },
  { name: 'Priya Sharma', role: 'Chief Engineer, AgriWater India', heading: 'Exceptional quality for irrigation projects', content: 'We\'ve installed Meera HDPE coils across 2,000 hectares of farmland. Leak-free performance after 3 years, and the lightweight coils cut our installation time in half compared to metal pipes.' },
  { name: 'Carlos Fernandez', role: 'Operations Manager, Petro-Tech SA', heading: 'Outstanding chemical resistance performance', content: 'For industrial fluid transport, Meera\'s HDPE pipes have proven completely reliable. Zero failures in 18 months handling aggressive process chemicals. Technical support is also top-notch.' },
  { name: 'Aiko Tanaka', role: 'Infrastructure Lead, City of Osaka', heading: 'Provides the exact specifications required', content: 'Municipal standards are stringent, and Meera consistently delivers pipes meeting every certification requirement. Their documentation and traceability support our compliance needs perfectly.' },
];

const solutions = [
  { title: 'HDPE Fittings & Accessories', desc: 'Complete range of electrofusion and butt fusion fittings, including elbows, tees, reducers, and couplers for seamless pipe connections.', icon: './assets/engineer.svg' },
  { title: 'Professional Installation Services', desc: 'Expert installation and fusion welding services ensuring optimal system performance, compliance with standards, and long-term reliability.', icon: './assets/engineer.svg' },
  { title: 'PE-RT Heating Pipes', desc: 'Polyethylene of Raised Temperature resistance pipes ideal for underfloor heating, radiator connections, and hot water applications.', icon: './assets/engineer.svg' },
];

const resources = [
  { title: 'HDPE Pipe Installation Manual', format: 'PDF' },
  { title: 'Maintenance & Inspection Handbook', format: 'PDF' },
  { title: 'Engineering Specifications Sheet', format: 'PDF' },
];

/*imggg*/
let currentImg = 0;

function renderGallery() {
  const mainImg = document.getElementById('mainImage');
  const counter = document.getElementById('galleryCounter');
  const thumbs = document.getElementById('thumbnails');
  mainImg.src = galleryImages[currentImg];
  counter.textContent = `${currentImg + 1} / ${galleryImages.length}`;
  thumbs.innerHTML = galleryImages.map((src, i) => `
    <button class="${i === currentImg ? 'active' : ''}" onclick="setImage(${i})">
      <img src="${src}" alt="Thumbnail ${i+1}" loading="lazy" />
    </button>
  `).join('');
}

function setImage(i) { currentImg = i; renderGallery(); }
function prevImage() { currentImg = (currentImg - 1 + galleryImages.length) % galleryImages.length; renderGallery(); }
function nextImage() { currentImg = (currentImg + 1) % galleryImages.length; renderGallery(); }

//zooming
const galleryMain = document.getElementById('galleryMain');
const zoomEl = document.getElementById('zoomPreview');
galleryMain.addEventListener('mousemove', (e) => {
  const rect = galleryMain.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  zoomEl.style.display = 'block';
  zoomEl.style.backgroundImage = `url(${galleryImages[currentImg]})`;
  zoomEl.style.backgroundPosition = `${x}% ${y}%`;
  zoomEl.style.left = (e.clientX + 20) + 'px';
  zoomEl.style.top = (e.clientY - 130) + 'px';
});
galleryMain.addEventListener('mouseleave', () => { zoomEl.style.display = 'none'; });


//tech
document.getElementById('specsBody').innerHTML = specs.map(([p, s]) => `
  <tr><td>${p}</td><td>${s}</td></tr>
`).join('');

//features
document.getElementById('featuresGrid').innerHTML = features.map(f => `
  <div class="feature-card" data-reveal>
    <div class="feature-icon">   <img src="${f.icon}" alt="${f.title}"></div>
    <h3>${f.title}</h3>
    <p>${f.desc}</p>
  </div>
`).join('');

//fqa
document.getElementById('faqList').innerHTML = faqs.map((f, i) => `
  <div class="faq-item" id="faq-${i}" data-reveal>
    <div class="faq-q" onclick="toggleFAQ(${i})">
      <span>${f.q}</span>
      <div class="faq-toggle">+</div>
    </div>
    <div class="faq-a">${f.a}</div>
  </div>
`).join('');

function toggleFAQ(i) {
  const item = document.getElementById(`faq-${i}`);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

//versatile
document.getElementById('versatileCarousel').innerHTML = versatileItems.map(v => `
  <div class="versatile-card">
  <img class="versatile-card-bg" src="${v.bg}" alt="${v.title}" loading="lazy" />
    <div class="versatile-card-content">
      <h3>${v.title}</h3>
      <p>${v.desc}</p>
    </div>
  </div>
`).join('');

function slideVersatile(dir) {
  const c = document.getElementById('versatileCarousel');
  c.scrollBy({ left: dir * 400, behavior: 'smooth' });
}

// pro-Steps
let currentStep = 0;

function renderProcess() {
  const s = processSteps[currentStep];
  document.getElementById('stepTabs').innerHTML = processSteps.map((step, i) => {
    const isLast = i === processSteps.length - 1;
    return `
      <button class="step-tab ${i === currentStep ? 'active' : ''}" onclick="setStep(${i})">${step.title}</button>
      ${!isLast ? '<div class="step-connector"></div>' : ''}
    `;
  }).join('');
  document.getElementById('processInfo').innerHTML = `
    <h3>${s.heading}</h3>
    <p>${s.content}</p>
    <ul class="process-features">
      ${s.features.map(f => `<li class="process-feature"><div class="check-icon">✓</div>${f}</li>`).join('')}
    </ul>
  `;
  document.getElementById('processImg').innerHTML = `
    <img src="${s.icon}" alt="${s.title}" class="process-icon" />
  `;
}

function setStep(i) { currentStep = 1; renderProcess(); }

// testi
document.getElementById('testimonialsTrack').innerHTML = testimonials.map(t => `
  <div class="testimonial-card">
    <div class="quote-icon">"</div>
    <h3>${t.heading}</h3>
    <p>${t.content}</p>
    <div class="profile">
      <div class="avatar">👤</div>
      <div>
        <div class="profile-name">${t.name}</div>
        <div class="profile-role">${t.role}</div>
      </div>
    </div>
  </div>
`).join('');

// solu
document.getElementById('solutionsGrid').innerHTML = solutions.map(s => `
  <div class="solution-card" data-reveal>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
    <div class="card-img">  <img src="${s.icon}" alt="${s.title}"></div>
    <button class="btn-learn" onclick="showToast('Opening ${s.title}…')">Learn More</button>
  </div>
`).join('');

// reso
document.getElementById('resourcesBox').innerHTML = resources.map(r => `
  <div class="resource-row">
    <div class="resource-title">${r.title} (${r.format})</div>
    <button class="btn-download" onclick="showToast('Downloading ${r.title}…')">
      Download PDF <span class="dl-icon">⬇</span>
    </button>
  </div>
`).join('');

/*header*/
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const cur = window.scrollY;
  const header = document.getElementById('header');
  if (cur > window.innerHeight * 0.25) {
    if (cur > lastScroll) header.classList.add('visible');
    else header.classList.remove('visible');
  } else {
    header.classList.remove('visible');
  }
  lastScroll = cur;
});


/*scroll*/
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('revealed'), i * 60);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

function attachReveal() {
  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
}



/*form handle*/
function handleCatalogue() {
  const email = document.getElementById('catEmail').value.trim();
  if (!email || !email.includes('@')) { showToast('Please enter a valid email address.'); return; }
  showToast('Catalogue request sent! Check your inbox shortly.');
  document.getElementById('catEmail').value = '';
}

function handleContactSubmit() {
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  if (!name) { showToast('Please enter your full name.'); return; }
  if (!email || !email.includes('@')) { showToast('Please enter a valid email.'); return; }
  showToast('Quote request submitted! Our team will contact you within 24 hours.');
  ['cf-name','cf-company','cf-email','cf-phone'].forEach(id => document.getElementById(id).value = '');
}

function scrollTo(sel) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
}

/*immediately run*/
renderGallery();
renderProcess();
attachReveal();