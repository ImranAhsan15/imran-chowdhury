(function(){
 const el=document.getElementById('home-atlas-map'); if(!el||typeof L==='undefined') return;
 const map=L.map(el,{zoomControl:false,scrollWheelZoom:false,doubleClickZoom:false,boxZoom:false,keyboard:false,tap:false,attributionControl:false});
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18}).addTo(map);
 const stops=[
  {n:'01',name:'Dhaka',tag:'Urban GeoAI',coords:[23.8103,90.4125],question:'How can spatial evidence support better urban decisions?',method:'GeoAI · automation · enterprise GIS',contribution:'Decision-ready spatial intelligence'},
  {n:'02',name:'Rajshahi',tag:'Urban planning',coords:[24.3721,88.5864],question:'How can planning concepts become visible and testable?',method:'Planning analysis · landscape design · visualization',contribution:'Spatially grounded design communication'},
  {n:'03',name:'Chalan Beel',tag:'Wetland research',coords:[24.43,89.55],question:'How are wetland systems changing through time?',method:'Remote sensing · LULC · ecosystem analysis',contribution:'Evidence for environmental planning'},
  {n:'04',name:'Sundarbans',tag:'Delta fieldwork',coords:[22.0,89.2],question:'How do land, water, and vegetation interact?',method:'LiDAR · hydrology · environmental GIS',contribution:'Integrated delta intelligence'},
  {n:'05',name:'Hatiya',tag:'Coastal fieldwork',coords:[22.3667,91.125],question:'What can coastal field evidence reveal?',method:'UAV · GNSS · field survey',contribution:'Grounded coastal assessment'},
  {n:'06',name:'Bandarban',tag:'Hill monitoring',coords:[22.1953,92.2184],question:'How can terrain change and landslide risk be observed?',method:'UAV imagery · terrain analysis · field observation',contribution:'Risk-focused spatial evidence'}
 ];
 const panel=document.getElementById('journey-panel');const steps=document.getElementById('journey-steps');const play=document.getElementById('journey-play');
 const markers=[];const bounds=stops.map(s=>s.coords);
 const route=L.polyline(stops.map(s=>s.coords),{color:'#b47717',weight:3,opacity:.62,dashArray:'1 10'}).addTo(map);
 stops.forEach((s,i)=>{const btn=document.createElement('button');btn.innerHTML=`<i>${s.n}</i><span><strong>${s.name}</strong><small>${s.tag}</small></span>`;btn.addEventListener('click',()=>{stop();select(i,true)});steps.appendChild(btn);const icon=L.divIcon({className:'ha-o6-marker',html:`<span>${s.n}</span>`,iconSize:[30,30],iconAnchor:[15,15]});const m=L.marker(s.coords,{icon}).addTo(map);m.on('click',()=>{stop();select(i,true)});m.bindTooltip(`<strong>${s.name}</strong><br>${s.tag}`,{direction:'top'});markers.push(m)});
 let index=0,timer=null;
 function select(i,fly){index=i;const s=stops[i];markers.forEach((m,j)=>m.getElement()?.classList.toggle('active',i===j));[...steps.children].forEach((b,j)=>b.classList.toggle('active',i===j));panel.innerHTML=`<div class="ha-o6-place"><span>${s.n} · ${s.name}</span><strong>${s.tag}</strong></div><div><span>Question</span><strong>${s.question}</strong></div><div><span>Method</span><strong>${s.method}</strong></div><div><span>Contribution</span><strong>${s.contribution}</strong></div>`;if(fly)map.flyTo(s.coords,8,{duration:1.1})}
 function stop(){clearInterval(timer);timer=null;play.classList.remove('playing');play.innerHTML='<span>▶</span> Resume journey'}
 function start(autoAdvance=false){clearInterval(timer);timer=null;play.classList.add('playing');play.innerHTML='<span>Ⅱ</span> Pause journey';if(autoAdvance){setTimeout(()=>{if(!play.classList.contains('playing')) return; index=(index+1)%stops.length;select(index,true); timer=setInterval(()=>{index=(index+1)%stops.length;select(index,true)},3200)},1600)}}
 play.addEventListener('click',()=>{if(timer){stop();return}start(true);select(index,true)});
 requestAnimationFrame(()=>requestAnimationFrame(()=>{map.invalidateSize();map.fitBounds(bounds,{padding:[55,55],maxZoom:7});select(0,false);setTimeout(()=>{start(true);},300)}));
})();