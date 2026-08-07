(function(){
const D=window.PORTFOLIO_DATA||{};
const page=document.body.dataset.storyPage;
if(!page)return;
const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const detail=(type,id)=>`detail.html?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`;
const projectHref=p=>/^project-.*\.html$/i.test(p.page||'')?p.page:detail('project',p.slug);
const imageFor=(kind,index=0)=>({about:'assets/images/hero-map.svg',research:'assets/images/footprint-qc.svg',publication:['assets/images/environment-change.svg','assets/images/gis-hero-background.svg','assets/images/hero-map.svg','assets/images/cartography.svg'][index%4],professional:index===0?'assets/images/webgis.svg':index===1?'assets/images/cartography.svg':'assets/images/hero-map.svg',education:'assets/images/hero-map.svg',teaching:index===0?'assets/images/cartography.svg':'assets/images/hero-map.svg',skills:['assets/images/cartography.svg','assets/images/traffic-ai.svg','assets/images/webgis.svg','assets/images/poster-design.svg'][index%4],contact:'assets/images/hero-map.svg'}[kind]||'assets/images/hero-map.svg');
const location=(name,lat,lng,zoom=8)=>({name,lat,lng,zoom});
function chapter(o){return {tags:[],...o}}
function buildStory(type){
 if(type==='home')return [
  chapter({title:'Dhaka — current professional base',eyebrow:'Current location',summary:'GIS Analyst at Esri Bangladesh, connecting GeoAI research with operational geospatial systems.',location:location('Dhaka, Bangladesh',23.8103,90.4125,7),href:'professional-work.html',image:'assets/images/webgis.svg',tags:['ArcGIS','GeoAI','Professional Services']}),
  chapter({title:'Rajshahi — planning and GIS foundation',eyebrow:'Academic foundation',summary:'Urban and Regional Planning at RUET established my foundation in spatial thinking, GIS, remote sensing, and environmental research.',location:location('Rajshahi, Bangladesh',24.3745,88.6042,7),href:'education.html',image:'assets/images/environment-change.svg',tags:['Planning','GIS','Remote Sensing']}),
  chapter({title:'Savar — graduate computer science and AI',eyebrow:'Graduate study',summary:'Graduate training in computer science strengthened my work in machine learning, deep learning, computer vision, and spatial databases.',location:location('Jahangirnagar University, Savar',23.8796,90.2690,8),href:'education.html',image:'assets/images/traffic-ai.svg',tags:['AI','ML','Computer Vision']}),
  chapter({title:'Regional work — Bangladesh and Malaysia',eyebrow:'Applied geography',summary:'Professional projects connect local GIS practice with regional cartographic, imagery, automation, and WebGIS workflows.',location:location('Bangladesh and Malaysia',10.0,94.0,4),href:'professional-work.html',image:'assets/images/cartography.svg',tags:['Bangladesh','Malaysia','Automation']})
 ];
 if(type==='about')return [
  chapter({title:'Current identity: GIS Analyst and GeoAI researcher',eyebrow:'Dhaka · Present',summary:D.profile.bio,location:location('Dhaka, Bangladesh',23.8103,90.4125,8),href:detail('about','biography'),image:D.profile.portrait,tags:['GIScience','GeoAI','Remote Sensing']}),
  chapter({title:'Planning and spatial-thinking foundation',eyebrow:'Rajshahi · 2016–2021',summary:'My undergraduate planning education established a strong base in GIS, remote sensing, surveying, cartography, environmental planning, and spatial analysis.',location:location('RUET, Rajshahi',24.3636,88.6283,9),href:detail('education',1),image:'assets/images/environment-change.svg',tags:['Urban Planning','GIS','LULC']}),
  chapter({title:'Graduate computing and AI preparation',eyebrow:'Savar · 2025–2026',summary:'Computer-science training expanded my technical depth in artificial intelligence, machine learning, deep learning, computer vision, digital image processing, and databases.',location:location('Jahangirnagar University, Savar',23.8796,90.2690,10),href:detail('education',0),image:'assets/images/traffic-ai.svg',tags:['Computer Science','AI','ML']}),
  chapter({title:'Doctoral direction: reliable and transferable GeoAI',eyebrow:'International PhD outlook',summary:'I seek funded PhD research focused on multimodal GeoAI, geospatial foundation models, graph learning for vector GIS, spatial transferability, and uncertainty-aware mapping.',location:location('Global research outlook',20,25,2),href:detail('about','doctoral-objective'),image:'assets/images/hero-map.svg',tags:['PhD 2027','GeoFM','Graph Learning']})
 ];
 if(type==='research'){
  const ps=(D.projects||[]).filter(x=>x.category==='research' && x.slug!=='traffic');
  const locs={
   'building-footprint':location('Dhaka Division UAV study sites',23.8,90.4,8),
   'geofm-building':location('Multi-resolution GeoAI research context',23.8,90.4,7),
   'representative-sampling':location('Large-area satellite-imagery research context',23.7,90.3,6),
   'geospatial-llm-safety':location('Location-aware public-safety and disaster-response research',20,25,2),
   'road-extraction':location('Bangladesh UAV road study context',23.7,90.3,7),
   'wetland':location('Chalan Beel, Bangladesh',24.43,89.23,8)
  };
  const rank=x=>/^ongoing/i.test(x.type||'')?1:0;
  const summaries={
   'building-footprint':'Screens UAV-derived building footprints using object-level GeoAI quality control.',
   'wetland':'Assesses wetland land-cover change, future scenarios, and ecosystem-service value.',
   'geofm-building':'Combines UAV imagery with geospatial foundation-model context for reliable building mapping.',
   'representative-sampling':'Selects distributed reference areas that represent large satellite-imagery scenes.',
   'geospatial-llm-safety':'Connects language models with verified geospatial evidence for safety and disaster response.',
   'road-extraction':'Improves UAV-derived road extraction, connectivity, and geospatial database quality.'
  };
  return [...ps].sort((a,b)=>rank(a)-rank(b)).map(p=>chapter({
   title:p.title,
   eyebrow:p.type,
   summary:summaries[p.slug]||p.summary,
   location:locs[p.slug]||location('Bangladesh research context',23.7,90.3,7),
   href:projectHref(p),
   image:p.image,
   tags:p.tags||[],
   statusGroup:/^ongoing/i.test(p.type||'')?'ongoing':'completed'
  }));
 }
 if(type==='publications'){
  const locs=[location('Chattogram Division',22.3569,91.7832,7),location("Cox's Bazar",21.4272,92.0058,8),location('Northern Bay of Bengal',21.8,91.2,6),location('Rajshahi City',24.3745,88.6042,9)];
  return (D.publications||[]).map((p,i)=>chapter({
   title:p.title,
   eyebrow:`${p.year} · ${p.topic}`,
   summary:`Study focus: ${p.topic}.`,
   authors:p.authors,
   journal:p.journal,
   publisher:p.publisher,
   published:p.published,
   issueDate:p.issueDate,
   record:p.record,
   doi:p.doi,
   topic:p.topic,
   year:p.year,
   location:locs[i],
   href:p.url||detail('publication',i),
   image:p.image||imageFor('publication',i),
   tags:[p.year,p.topic]
  }));
 }
 if(type==='professional'){
  const roleLocs=[location('Esri Bangladesh, Dhaka',23.8103,90.4125,9),location('CEGIS, Dhaka',23.7806,90.4070,9),location('Bangladesh',23.685,90.3563,6)];
  const roles=(D.experience||[]).map((x,i)=>chapter({title:x.role,eyebrow:x.period,summary:(x.details||[]).slice(0,2).join(' '),location:roleLocs[i],href:detail('experience',i),image:x.image||imageFor('professional',i),tags:[x.organization,x.location]}));
  const projects=(D.projects||[]).filter(x=>x.category==='professional');
  const proLoc=[location('Kuala Lumpur, Malaysia',3.1390,101.6869,7),location('Sabah and Sarawak, Malaysia',3.5,114.0,5)];
  return [...roles,...projects.map((p,i)=>chapter({title:p.title,eyebrow:p.type,summary:p.summary,location:proLoc[i]||location('Regional project context',5,105,5),href:projectHref(p),image:p.image,tags:p.tags||[]}))];
 }
 if(type==='education'){
  const ed=D.education||[];
  return [
   chapter({title:ed[1]?.degree||'Bachelor of Urban & Regional Planning',eyebrow:ed[1]?.period||'2016–2021',summary:'Urban and Regional Planning at RUET with foundations in GIS, remote sensing, surveying, cartography, and environmental planning.',location:location('RUET, Rajshahi',24.3636,88.6283,10),href:detail('education',1),image:'assets/images/environment-change.svg',tags:['Planning','GIS','Remote Sensing']}),
   chapter({title:'Research bridge: spatial planning to GeoAI',eyebrow:'Interdisciplinary transition',summary:'Professional GIS practice connected planning with Python automation, imagery analytics, WebGIS, and spatial machine learning.',location:location('Dhaka, Bangladesh',23.8103,90.4125,8),href:'professional-work.html',image:'assets/images/webgis.svg',tags:['ArcPy','Imagery','Operational GIS']}),
   chapter({title:ed[0]?.degree||'Master of Science in Computer Science',eyebrow:ed[0]?.period||'2025–2026',summary:'Computer Science at Jahangirnagar University with AI, machine learning, computer vision, and spatial databases.',location:location('Jahangirnagar University, Savar',23.8796,90.2690,10),href:detail('education',0),image:'assets/images/traffic-ai.svg',tags:['AI','ML','Computer Vision']}),
   chapter({title:'Doctoral preparation',eyebrow:'Target · Fall 2027',summary:'Preparation for research in multimodal GeoAI, geospatial foundation models, graph learning, and spatial transferability.',location:location('International doctoral outlook',25,5,2),href:detail('about','doctoral-objective'),image:'assets/images/hero-map.svg',tags:['PhD','GeoAI','Spatial Transferability']})
  ];
 }
 if(type==='teaching'){
  const delivered=D.trainingDelivery||[];
  const locs=[location('DTE training context, Bangladesh',23.685,90.3563,7),location('BARC, Dhaka',23.7806,90.4070,10),location('Esri Bangladesh, Dhaka',23.8103,90.4125,10)];
  const summaries=[
   'Hands-on GIS and remote-sensing instruction through demonstrations and guided exercises.',
   'Professional training on UAV, LiDAR, field survey, and spatial-data acquisition.',
   'Instructor-led ArcGIS Pro training with practical tasks and participant evaluation.'
  ];
  return delivered.slice(0,3).map((x,i)=>chapter({title:x.title,eyebrow:`${x.period} · ${x.provider}`,summary:summaries[i]||(x.details||[])[0]||'',location:locs[i],href:detail('training-delivery',i),image:x.image||imageFor('teaching',i),tags:i===0?['GIS','Remote Sensing','Practical Training']:i===1?['UAV','LiDAR','Field Survey']:['ArcGIS Pro','Evaluation','Professional Training']}));
 }
 if(type==='skills'){
  const summaries={
   'GIS Automation and Spatial Programming':'Python and ArcPy workflows for GIS production, geometry, QA/QC, and repeatable map automation.',
   'UAV, GNSS and Field Survey':'UAV, GNSS/RTK, photogrammetry, LiDAR-supported survey, and field verification.',
   'Urban Planning and Spatial Analysis':'Planning-oriented analysis for land use, environment, infrastructure, and AI-assisted urban mobility.',
   'Scientific Visualization and Communication':'Research figures, cartography, posters, and visual communication for academic audiences.'
  };
  return (D.skills||[]).slice(0,4).map((x,i)=>chapter({title:x.group,eyebrow:'Core expertise',summary:summaries[x.group]||x.summary||'',href:x.group==='GIS Automation and Spatial Programming'?'gis-automation.html':x.group==='UAV, GNSS and Field Survey'?'uav-field-survey.html':x.group==='Urban Planning and Spatial Analysis'?'urban-planning.html':detail('skill',i),image:x.image||imageFor('skills',i),tags:(x.items||[]).slice(0,5),node:i}));
 }
 if(type==='training'){
  return (D.training||[]).map((x,i)=>chapter({title:x.title,eyebrow:`${x.period} · ${x.provider}`,summary:x.details,href:detail('professional-development',i),image:i===0?'assets/images/cartography.svg':i===1?'assets/images/traffic-ai.svg':'assets/images/webgis.svg',tags:[x.credential||'Professional development',x.provider],node:i}));
 }
 if(type==='links'){
  const configured=Object.entries(D.profile.links||{}).filter(([,u])=>u).map(([name,url])=>({title:name.replace(/(^|_)([a-z])/g,(_,a,b)=>`${a?' ':''}${b.toUpperCase()}`),category:'External academic profile',description:'Verified external academic or professional profile.',url,tags:['External profile','Verified link']}));
  return [...(D.usefulLinks||[]),...configured].map((x,i)=>chapter({title:x.title,eyebrow:x.category,summary:x.description,href:x.url,image:imageFor(i===0?'contact':i===1?'research':i===2?'publication':'professional',i),tags:x.tags||[],node:i}));
 }
 if(type==='news'){
  return (D.news||[]).map((x,i)=>chapter({title:x.title,eyebrow:x.date,summary:x.summary,href:x.url||'#',image:i===0?'assets/images/footprint-qc.svg':i===1?'assets/images/environment-change.svg':i===2?'assets/images/road-network.svg':'assets/images/webgis.svg',tags:x.tags||[],node:i}));
 }
 if(type==='contact')return [
  chapter({title:'Profile at a glance',eyebrow:D.profile.location,summary:D.profile.bio,location:location('Dhaka, Bangladesh',23.8103,90.4125,8),href:'index.html',image:D.profile.portrait,tags:['GIS Analyst','GeoAI Researcher','Esri Bangladesh']}),
  chapter({title:'Research alignment',eyebrow:'Prospective PhD researcher',summary:'My strongest alignment is with multimodal GeoAI, reliable remote-sensing inference, geospatial foundation models, vector-GIS learning, and spatial transferability.',location:location('International research outlook',25,5,2),href:'research.html',image:'assets/images/footprint-qc.svg',tags:['GeoAI','Remote Sensing','GIScience']}),
  chapter({title:'Complete academic CV',eyebrow:'Printable and PDF-ready',summary:'Open the focused CV for education, publications, experience, technical skills, teaching, and professional development.',location:location('Academic portfolio',23.8103,90.4125,7),href:'assets/documents/Imran_Chowdhury_Academic_CV.pdf',image:'assets/images/cartography.svg',tags:['CV','Publications','Experience']}),
  chapter({title:'Start a research conversation',eyebrow:D.profile.availability,summary:`Email ${D.profile.email} with a specific research topic, paper, or potential project alignment.`,location:location('Dhaka, Bangladesh',23.8103,90.4125,9),href:`mailto:${D.profile.email}?subject=${encodeURIComponent('Prospective PhD research discussion — GeoAI / Remote Sensing')}`,image:'assets/images/webgis.svg',tags:['PhD 2027','Collaboration','Email']})
 ];
 return [];
}
function chapterMarkup(c,i){
 const href=c.href||'#';
 const target=page==='publications'||/\.pdf(?:$|[?#])/i.test(href)?' target="_blank" rel="noopener noreferrer"':'';
 if(page==='publications'){
  const authors=esc(c.authors||'').replace(/Chowdhury, S\.I\.A\./g,'<strong class="publication-portfolio-author">Chowdhury, S.I.A.</strong>');
  const issueFact=c.issueDate?`<div><dt>Issue date</dt><dd>${esc(c.issueDate)}</dd></div>`:'';
  return `<article class="story-chapter publication-record-card" id="story-chapter-${i}" data-index="${i}">
    <div class="story-step"><span>${String(i+1).padStart(2,'0')}</span></div>
    <div class="story-chapter-media publication-record-media">
      <img src="${esc(c.image)}" alt="Visual summary for ${esc(c.title)}" loading="lazy">
    </div>
    <div class="story-chapter-body publication-record-body">
      <div class="story-chapter-main publication-record-main">
        <div class="publication-record-topline">
          <span>Peer-reviewed journal article</span>
        </div>
        <h3>${esc(c.title)}</h3>
        <p class="story-publication-authors"><span>Authors</span>${authors}</p>
        <dl class="publication-facts">
          <div class="publication-fact-wide"><dt>Journal</dt><dd>${esc(c.journal||'')}</dd></div>
          <div><dt>Bibliographic record</dt><dd>${esc(c.record||'')}</dd></div>
          <div><dt>DOI</dt><dd>${esc(c.doi||'Not assigned')}</dd></div>
          <div class="publication-fact-wide publication-research-area"><dt>Research area</dt><dd>${esc(c.topic||'')}</dd></div>
        </dl>
      </div>
      <aside class="story-chapter-meta publication-action-panel">
        <span class="publication-action-year">${esc(c.year||'')}</span>
        <div class="publication-side-facts">
          <div><span>Publisher</span><strong>${esc(c.publisher||'Journal publisher')}</strong></div>
          <div><span>Published</span><strong>${esc(c.published||c.year||'')}</strong></div>
          ${c.issueDate?`<div><span>Issue</span><strong>${esc(c.issueDate)}</strong></div>`:''}
        </div>
        <a class="story-more" href="${esc(href)}"${target}>See more <span>→</span></a>
        <small>Official journal page</small>
      </aside>
    </div>
  </article>`;
 }
 const pubMeta=`<p class="story-summary">${esc(c.summary)}</p>`;
 const pubSide=`<a class="story-more" href="${esc(href)}"${target}>See more <span>→</span></a>`;
 const kicker=['research','teaching','skills'].includes(page)?'':`<span class="story-chapter-kicker">${esc(c.eyebrow)}</span>`;
 return `<article class="story-chapter" id="story-chapter-${i}" data-index="${i}">
   <div class="story-step"><span>${String(i+1).padStart(2,'0')}</span></div>
   <div class="story-chapter-media"><img src="${esc(c.image)}" alt="${esc(c.title)}" loading="lazy"></div>
   <div class="story-chapter-body">
     <div class="story-chapter-main">
       ${kicker}
       <h3>${esc(c.title)}</h3>
       ${pubMeta}
     </div>
     <div class="story-chapter-meta">
       ${pubSide}
     </div>
   </div>
 </article>`;
}
function chapterListMarkup(items){
 if(page==='research'){
  const grouped=[
   {key:'completed',label:'Completed research',note:'Finished studies and manuscripts with documented methods and outcomes.'},
   {key:'ongoing',label:'Ongoing research',note:'Current studies under methodological development and evaluation.'}
  ];
  return grouped.map(g=>{
   const rows=items.map((c,i)=>({c,i})).filter(x=>(x.c.statusGroup||'ongoing')===g.key);
   if(!rows.length)return '';
   return `<section class="research-story-group"><div class="research-story-group-head"><span class="eyebrow">${esc(g.label)}</span><p>${esc(g.note)}</p></div><div class="research-story-group-cards">${rows.map(({c,i})=>chapterMarkup(c,i)).join('')}</div></section>`;
  }).join('');
 }
 if(page!=='publications')return items.map(chapterMarkup).join('');
 let previousYear='';
 return items.map((c,i)=>{
  const divider=c.year!==previousYear?`<div class="publication-year-divider"><span>${esc(c.year)}</span><small>Publication timeline</small></div>`:'';
  previousYear=c.year;
  return divider+chapterMarkup(c,i);
 }).join('');
}
const chapters=buildStory(page);
const chapterHost=document.getElementById('story-chapters');
if(chapterHost)chapterHost.innerHTML=chapterListMarkup(chapters);

const featuredTitle=document.querySelector('[data-featured-title]');if(featuredTitle)featuredTitle.textContent=D.featuredResearch?.title||'Featured research';
const homeFeature=document.getElementById('home-feature-story');if(homeFeature&&D.featuredResearch){const r=D.featuredResearch;homeFeature.innerHTML=`<div class="home-feature-media"><img src="${esc(r.image)}" alt="${esc(r.title)}"></div><div class="home-feature-copy"><span class="eyebrow">${esc(r.status)}</span><h3>${esc(r.title)}</h3><p>${esc(r.overview)}</p><div class="outcomes">${(r.outcomes||[]).slice(0,3).map(o=>`<div><strong>${esc(o.value)}</strong><span>${esc(o.label)}</span></div>`).join('')}</div><a class="button" href="project-building-footprint.html">Explore research story</a></div>`}

function thematicMap(items){
 const host=document.getElementById('story-map-fallback'); if(!host)return null;
 const core=({teaching:['Teaching & capacity building','DTE · BARC · Esri'],skills:['Applied expertise','Four connected domains'],training:['Development & certification','Coursework · Practice'],links:['Academic access','Fast reviewer routes'],news:['Recent progress','Research · Practice']})[page]||['Spatial intelligence','GIS · RS · GeoAI'];
 host.classList.add('is-visible','thematic-capability-map');
 host.innerHTML=`<div class="thematic-orbit"><div class="thematic-core"><strong>${esc(core[0])}</strong><span>${esc(core[1])}</span></div>${items.map((c,i)=>`<button type="button" class="thematic-node thematic-node-${i%8}" data-index="${i}"><b>${String(i+1).padStart(2,'0')}</b><span>${esc(c.title)}</span></button>`).join('')}</div>`;
 host.querySelectorAll('.thematic-node').forEach(b=>b.addEventListener('click',()=>document.getElementById(`story-chapter-${b.dataset.index}`)?.scrollIntoView({behavior:'smooth',block:'center'})));
 return {activate(i){host.querySelectorAll('.thematic-node').forEach((n,j)=>n.classList.toggle('active',j===i));}};
}
function coordinateFallback(items){
 const host=document.getElementById('story-map-fallback'); if(!host)return null;
 const valid=items.filter(x=>x.location&&Number.isFinite(x.location.lat)&&Number.isFinite(x.location.lng));
 if(!valid.length)return thematicMap(items);
 const lats=valid.map(x=>x.location.lat), lngs=valid.map(x=>x.location.lng);
 let minLat=Math.min(...lats),maxLat=Math.max(...lats),minLng=Math.min(...lngs),maxLng=Math.max(...lngs);
 const padLat=Math.max(2,(maxLat-minLat)*.22),padLng=Math.max(2,(maxLng-minLng)*.18);minLat-=padLat;maxLat+=padLat;minLng-=padLng;maxLng+=padLng;
 host.classList.add('is-visible');
 host.innerHTML=`<div class="coordinate-grid"><span class="coord-label coord-n">${maxLat.toFixed(1)}° N</span><span class="coord-label coord-s">${minLat.toFixed(1)}° N</span><span class="coord-label coord-w">${minLng.toFixed(1)}° E</span><span class="coord-label coord-e">${maxLng.toFixed(1)}° E</span>${items.map((c,i)=>{const x=((c.location.lng-minLng)/(maxLng-minLng))*100,y=(1-(c.location.lat-minLat)/(maxLat-minLat))*100;return `<button type="button" class="coordinate-marker" style="left:${x}%;top:${y}%" data-index="${i}" aria-label="${esc(c.location.name)}"><b>${i+1}</b><span>${esc(c.location.name)}</span></button>`}).join('')}</div>`;
 host.querySelectorAll('.coordinate-marker').forEach(b=>b.addEventListener('click',()=>document.getElementById(`story-chapter-${b.dataset.index}`)?.scrollIntoView({behavior:'smooth',block:'center'})));
 return {activate(i){host.querySelectorAll('.coordinate-marker').forEach((n,j)=>n.classList.toggle('active',j===i));}};
}
function geographicMap(items){
 const mapHost=document.getElementById('story-map');
 if(!mapHost||!window.L)return null;
 const valid=items.filter(x=>x.location&&Number.isFinite(x.location.lat)&&Number.isFinite(x.location.lng));
 if(!valid.length)return null;
 mapHost.classList.add('is-ready');
 const map=L.map(mapHost,{scrollWheelZoom:false,zoomControl:true,attributionControl:true});
 let tileErrors=0;
 const tiles=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'});
 tiles.on('tileerror',()=>{tileErrors+=1;if(tileErrors>5){mapHost.classList.remove('is-ready');const fb=document.getElementById('story-map-fallback');if(fb)fb.classList.add('is-visible');}});
 tiles.addTo(map);
 const markers=[];
 items.forEach((c,i)=>{const icon=L.divIcon({className:'story-leaflet-icon',html:`<span>${i+1}</span>`,iconSize:[34,34],iconAnchor:[17,17]});const m=L.marker([c.location.lat,c.location.lng],{icon}).addTo(map).bindTooltip(c.location.name,{direction:'top',offset:[0,-10]});m.on('click',()=>document.getElementById(`story-chapter-${i}`)?.scrollIntoView({behavior:'smooth',block:'center'}));markers.push(m)});
 const group=L.featureGroup(markers);map.fitBounds(group.getBounds().pad(.25));
 const fallback=document.getElementById('story-map-fallback');if(fallback)fallback.classList.remove('is-visible');
 setTimeout(()=>map.invalidateSize(),80);
 return {map,activate(i){markers.forEach((m,j)=>m.getElement()?.classList.toggle('active',j===i));const c=items[i];if(c)map.flyTo([c.location.lat,c.location.lng],c.location.zoom||7,{duration:.75});},reset(){map.fitBounds(group.getBounds().pad(.25),{animate:true})}};
}
let mapApi;
if(['teaching','skills','training','links','news'].includes(page))mapApi=thematicMap(chapters);else{mapApi=coordinateFallback(chapters);setTimeout(()=>{const live=geographicMap(chapters);if(live){mapApi=live;activate(activeIndex)}},50)}
let activeIndex=0;
function activate(i){activeIndex=i;document.querySelectorAll('.story-chapter').forEach((el,j)=>el.classList.toggle('is-active',j===i));mapApi?.activate?.(i);const c=chapters[i];const cap=document.getElementById('story-map-caption');if(cap&&c)cap.innerHTML=`<span>${String(i+1).padStart(2,'0')} / ${String(chapters.length).padStart(2,'0')}</span><strong>${esc(c.location?.name||c.title)}</strong><p>${esc(c.eyebrow)}</p>`;}
activate(0);
const obs=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)activate(Number(visible.target.dataset.index))},{rootMargin:'-22% 0px -48% 0px',threshold:[.15,.35,.6]});
document.querySelectorAll('.story-chapter').forEach(x=>obs.observe(x));
document.getElementById('story-reset')?.addEventListener('click',()=>mapApi?.reset?.());
})();
