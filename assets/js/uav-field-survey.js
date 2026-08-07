(function(){
const locations=[
 {name:'Dhaka',lat:23.8103,lng:90.4125,group:'urban',context:'Urban infrastructure and operational GIS context',platform:'DJI Phantom 4 Pro RTK / Mavic 2 Pro / DJI Mini 3 Pro / DJI Phantom 4 Pro V2',platformNote:'Representative multirotor set used across the remaining study areas',platformClass:'multirotor'},
 {name:'Hatiya',lat:22.3667,lng:91.1250,group:'coastal',context:'Island and coastal field context',platform:'DJI Phantom 4 Pro RTK / Mavic 2 Pro / DJI Mini 3 Pro / DJI Phantom 4 Pro V2',platformNote:'Representative multirotor set used across the remaining study areas',platformClass:'multirotor'},
 {name:'Sandwip',lat:22.4833,lng:91.4500,group:'coastal',context:'Island, shoreline and environmental field context',platform:'DJI Phantom 4 Pro RTK / Mavic 2 Pro / DJI Mini 3 Pro / DJI Phantom 4 Pro V2',platformNote:'Representative multirotor set used across the remaining study areas',platformClass:'multirotor'},
 {name:'Jashore',lat:23.1667,lng:89.2167,group:'urban',context:'Regional infrastructure and field-mapping context',platform:'Remo M2; HFT10',platformNote:'Selected platform deployments recorded for the Jashore region',platformClass:'jashore'},
 {name:'Bandarban',lat:22.1953,lng:92.2184,group:'hill',context:'Hill terrain and landslide-monitoring context',platform:'DJI Phantom 4 Pro RTK / Mavic 2 Pro / DJI Mini 3 Pro / DJI Phantom 4 Pro V2',platformNote:'Representative multirotor set used across the remaining study areas',platformClass:'multirotor'},
 {name:'Rangamati',lat:22.7324,lng:92.2985,group:'hill',context:'Hill, waterbody and terrain-observation context',platform:'DJI Phantom 4 Pro RTK / Mavic 2 Pro / DJI Mini 3 Pro / DJI Phantom 4 Pro V2',platformNote:'Representative multirotor set used across the remaining study areas',platformClass:'multirotor'},
 {name:'Bhola',lat:22.6859,lng:90.6482,group:'coastal',context:'Riverine island and coastal field context',platform:'DJI Phantom 4 Pro RTK / Mavic 2 Pro / DJI Mini 3 Pro / DJI Phantom 4 Pro V2',platformNote:'Representative multirotor set used across the remaining study areas',platformClass:'multirotor'},
 {name:'Dacope',lat:22.5728,lng:89.5119,group:'wetland',context:'Coastal wetland and environmental field context',platform:'DJI Phantom 4 Pro RTK / Mavic 2 Pro / DJI Mini 3 Pro / DJI Phantom 4 Pro V2',platformNote:'Representative multirotor set used across the remaining study areas',platformClass:'multirotor'},
 {name:'Mymensingh',lat:24.7471,lng:90.4203,group:'urban',context:'Regional field survey and infrastructure context',platform:'DJI Phantom 4 Pro RTK / Mavic 2 Pro / DJI Mini 3 Pro / DJI Phantom 4 Pro V2',platformNote:'Representative multirotor set used across the remaining study areas',platformClass:'multirotor'},
 {name:'Chattogram City',lat:22.3569,lng:91.7832,group:'urban',context:'Urban drainage, infrastructure and environmental context',platform:'DJI Phantom 4 Pro RTK / Mavic 2 Pro / DJI Mini 3 Pro / DJI Phantom 4 Pro V2',platformNote:'Representative multirotor set used across the remaining study areas',platformClass:'multirotor'},
 {name:'Kishoreganj Haor',lat:24.3196,lng:90.9167,group:'wetland',context:'Haor, wetland and seasonal landscape context',platform:'DJI Phantom 4 Pro RTK / Mavic 2 Pro / DJI Mini 3 Pro / DJI Phantom 4 Pro V2',platformNote:'Representative multirotor set used across the remaining study areas',platformClass:'multirotor'},
 {name:'Sundarbans',lat:22.0000,lng:89.2000,group:'wetland',context:'Mangrove and LiDAR-supported fieldwork context',platform:'DJI Matrice 300 RTK + Zenmuse L1 LiDAR',platformNote:'LiDAR-supported mangrove and forest fieldwork',platformClass:'lidar'}
];
const bdBounds=[[20.590609,88.008628],[26.634513,92.680307]];
// Accurate offline fallback from Natural Earth. When online, it is replaced by
// the more detailed Bangladesh Bureau of Statistics national boundary service.
const bangladeshOutline=[
 [22.041239,92.672721],[21.324048,92.652257],[21.475485,92.303234],[20.670883,92.368554],
 [21.192195,92.082886],[21.701570,92.025215],[22.182936,91.834891],[22.765019,91.417087],
 [22.805017,90.496006],[22.392794,90.586957],[21.836368,90.272971],[22.039146,89.847467],
 [21.857116,89.702050],[21.966179,89.418863],[22.055708,89.031961],[22.879146,88.876312],
 [23.631142,88.529770],[24.233715,88.699940],[24.501657,88.084422],[24.866079,88.306373],
 [25.238692,88.931554],[25.768066,88.209789],[26.446526,88.563049],[26.014407,89.355094],
 [25.965082,89.832481],[25.269750,89.920693],[25.132601,90.872211],[25.147432,91.799596],
 [24.976693,92.376202],[24.130414,91.915093],[24.072639,91.467730],[23.503527,91.158963],
 [22.985264,91.706475],[23.624346,91.869928],[23.627499,92.146035],[22.041239,92.672721]
];
const bangladeshBoundaryUrl='https://gis.dghs.gov.bd/server/rest/services/Hosted/bgd_admbnda_adm0_bbs_20201113/FeatureServer/0/query?f=geojson&outFields=adm0_en&outSR=4326&returnGeometry=true&where=1%3D1';
const fallback=document.getElementById('field-map-fallback');
const wrap=document.querySelector('.field-map-wrap');
let map=null,markers=[];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function buildMap(){
 if(!window.L||!document.getElementById('field-map'))return;
 map=L.map('field-map',{scrollWheelZoom:false,zoomControl:true,attributionControl:false,minZoom:6,maxZoom:15,maxBounds:[[20.35,87.7],[26.95,93.05]],maxBoundsViscosity:0.45});
 const tiles=L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{subdomains:'abcd',maxZoom:19});
 let tileErrors=0;
 tiles.on('tileload',()=>wrap?.classList.add('map-ready'));
 tiles.on('tileerror',()=>{tileErrors++;if(tileErrors>5){wrap?.classList.remove('map-ready');fallback?.removeAttribute('hidden')}});
 tiles.addTo(map);
 let countryBoundary=L.polygon(bangladeshOutline,{color:'#18364a',weight:2.2,opacity:1,fillColor:'#a9c1cf',fillOpacity:.12,interactive:false}).addTo(map);
 // Replace the local fallback with the detailed BBS boundary when available.
 fetch(bangladeshBoundaryUrl)
   .then(response=>{if(!response.ok)throw new Error('Boundary request failed');return response.json()})
   .then(geojson=>{
     if(countryBoundary)map.removeLayer(countryBoundary);
     countryBoundary=L.geoJSON(geojson,{style:{color:'#18364a',weight:2.2,opacity:1,fillColor:'#a9c1cf',fillOpacity:.12,interactive:false}}).addTo(map);
     countryBoundary.bringToBack();
   })
   .catch(()=>{countryBoundary.bringToBack()});
 markers=locations.map((p,i)=>{
   const icon=L.divIcon({className:`field-marker group-${p.group} platform-${p.platformClass||'multirotor'}`,html:'<span></span>',iconSize:[26,26],iconAnchor:[13,25]});
   const popupHtml=`<div class="field-popup"><strong>${esc(p.name)}</strong><span class="field-popup-platform">Platform</span><span>${esc(p.platform)}</span></div>`;
   const marker=L.marker([p.lat,p.lng],{icon,title:p.name}).addTo(map).bindPopup(popupHtml);
   marker.on('click',()=>activatePlace(i));
   marker._fieldGroup=p.group;
   return marker;
 });
 fit(markers,'country');
 setTimeout(()=>map.invalidateSize(),100);
}
function fit(ms,mode='markers'){if(!map)return;if(mode==='country'){map.fitBounds(bdBounds,{animate:true,padding:[10,10],maxZoom:8});return}if(!ms.length){map.fitBounds(bdBounds,{animate:true,padding:[10,10],maxZoom:8});return}const bounds=L.featureGroup(ms).getBounds();map.fitBounds(bounds.pad(.24),{animate:true,maxZoom:8})}
function activatePlace(i){
 markers.forEach((m,j)=>m.getElement()?.classList.toggle('is-active',j===i));
 const p=locations[i],m=markers[i];
 if(map&&p&&m){map.flyTo([p.lat,p.lng],Math.max(map.getZoom(),8.6),{duration:.6});m.openPopup()}
}
function focusPlatform(platformClass){
 document.querySelectorAll('[data-platform-focus]').forEach(card=>card.classList.toggle('active',card.dataset.platformFocus===platformClass));
 if(platformClass==='all'){
   markers.forEach(m=>{m.getElement()?.classList.remove('is-muted');m.getElement()?.classList.remove('is-active')});
   fit(markers,'country');
   return;
 }
 const visible=[];
 markers.forEach((m,i)=>{const match=(locations[i].platformClass===platformClass);m.getElement()?.classList.toggle('is-muted',!match);m.getElement()?.classList.toggle('is-active',match);if(match)visible.push(m)});
 fit(visible);
 if(visible[0])visible[0].openPopup();
}
function filter(group){
 document.querySelectorAll('[data-map-filter]').forEach(b=>b.classList.toggle('active',b.dataset.mapFilter===group));
 const visible=[];
 markers.forEach((m,i)=>{const show=group==='all'||locations[i].group===group;m.getElement()?.classList.toggle('is-muted',!show);m.getElement()?.classList.remove('is-active');if(show)visible.push(m)});
 fit(visible,group==='all'?'country':'markers');
}
document.querySelectorAll('[data-map-filter]').forEach(b=>b.addEventListener('click',()=>filter(b.dataset.mapFilter)));
document.getElementById('field-map-reset')?.addEventListener('click',()=>{filter('all');focusPlatform('all')});
buildMap();

const dialog=document.getElementById('field-lightbox');
const dialogImage=document.getElementById('field-lightbox-image');
function openFull(el){const src=el.dataset.full;if(!src||!dialog||!dialogImage)return;dialogImage.src=src;dialog.showModal()}
document.querySelectorAll('.media-lightbox-trigger').forEach(el=>{
 el.addEventListener('click',()=>openFull(el));
 el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openFull(el)}});
});
dialog?.querySelector('.field-lightbox-close')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&dialog?.open)dialog.close()});
})();
