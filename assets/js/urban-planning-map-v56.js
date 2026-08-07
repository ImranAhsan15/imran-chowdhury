(function(){
  const mapEl=document.getElementById('urban-planning-map-v53');
  if(!mapEl || typeof L==='undefined') return;

  const places={
    kawla:{number:'01',name:'Kawla, Dhaka',detail:'Traffic observation near Hazrat Shahjalal International Airport',coords:[23.8513,90.4147],zoom:14},
    rmch:{number:'02',name:'RMC & RMCH, Rajshahi',detail:'Landscape and stormwater-responsive campus proposal',coords:[24.3720877,88.5863592],zoom:16}
  };

  const map=L.map(mapEl,{
    zoomControl:true,
    scrollWheelZoom:false,
    zoomAnimation:true,
    fadeAnimation:false,
    markerZoomAnimation:false
  });
  map.setView(places.kawla.coords,places.kawla.zoom,{animate:false});

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom:19,
    attribution:'&copy; OpenStreetMap contributors',
    updateWhenIdle:true,
    keepBuffer:2
  }).addTo(map);

  const markers={};
  Object.keys(places).forEach((key,index)=>{
    const p=places[key];
    const icon=L.divIcon({className:'story-leaflet-icon',html:`<span>${index+1}</span>`,iconSize:[34,34],iconAnchor:[17,17]});
    markers[key]=L.marker(p.coords,{icon}).addTo(map).bindTooltip(p.name,{direction:'top',offset:[0,-10]});
  });

  const cards=[...document.querySelectorAll('.up-v53-story-card')];
  const status=document.getElementById('up-v53-map-status');
  let activeKey='kawla';
  let observerReady=false;

  function updateStatus(place){
    if(!status) return;
    status.innerHTML=`<span>${place.number}</span><div><strong>${place.name}</strong><small>${place.detail}</small></div>`;
  }

  function selectPlace(key){
    const p=places[key];
    if(!p || key===activeKey) return;
    activeKey=key;
    updateStatus(p);
    map.stop();
    map.flyTo(p.coords,p.zoom,{duration:1.8,easeLinearity:.2});
  }

  updateStatus(places.kawla);

  function startObserver(){
    if(observerReady || !('IntersectionObserver' in window)) return;
    observerReady=true;
    const observer=new IntersectionObserver((entries)=>{
      const visible=entries
        .filter(entry=>entry.isIntersecting)
        .map(entry=>({entry,distance:Math.abs((entry.boundingClientRect.top+entry.boundingClientRect.bottom)/2-window.innerHeight/2)}))
        .sort((a,b)=>a.distance-b.distance)[0];
      if(!visible) return;
      const key=visible.entry.target.getAttribute('data-map-place');
      if(key) selectPlace(key);
    },{root:null,rootMargin:'-24% 0px -34% 0px',threshold:[.2,.45]});
    cards.forEach(card=>observer.observe(card));
  }

  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      map.invalidateSize({pan:false,animate:false});
      window.setTimeout(startObserver,650);
    });
  });

  window.addEventListener('load',()=>{
    map.invalidateSize({pan:false,animate:false});
  },{once:true});
})();
