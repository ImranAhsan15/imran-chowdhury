(function(){
  'use strict';
  const original=window.PORTFOLIO_DATA||{};
  let draft=JSON.parse(JSON.stringify(original));
  const $=(s,r=document)=>r.querySelector(s);
  const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const status=$('#editor-status');
  const setStatus=msg=>{status.textContent=msg;};

  const profileSchema=[
    ['name','Full name','text'],['shortName','Short display name','text'],['role','Professional role line','text'],
    ['organization','Current organization','text'],['location','Location','text'],['email','Primary email','email'],
    ['workEmail','Work email','email'],['availability','PhD availability statement','text'],['portrait','Portrait image path','text'],
    ['bio','About Me biography','textarea']
  ];
  const linkSchema=[['github','GitHub URL'],['linkedin','LinkedIn URL'],['scholar','Google Scholar URL'],['orcid','ORCID URL'],['researchgate','ResearchGate URL']];

  function fieldHTML(key,label,type,value,full=false){
    const cls='editor-field'+(full?' full':'');
    const control=type==='textarea'
      ?`<textarea data-key="${esc(key)}">${esc(value)}</textarea>`
      :`<input type="${type}" data-key="${esc(key)}" value="${esc(value)}">`;
    return `<div class="${cls}"><label>${esc(label)}</label>${control}</div>`;
  }
  const profileBox=$('#profile-fields');
  profileBox.innerHTML=profileSchema.map(([k,l,t])=>fieldHTML(k,l,t,draft.profile?.[k]||'',t==='textarea')).join('');
  profileBox.addEventListener('input',e=>{if(e.target.dataset.key){draft.profile[e.target.dataset.key]=e.target.value;setStatus('Unsaved profile changes.');}});

  const linksBox=$('#link-fields');
  draft.profile.links=draft.profile.links||{};
  linksBox.innerHTML=linkSchema.map(([k,l])=>fieldHTML(k,l,'url',draft.profile.links[k]||'')).join('');
  linksBox.addEventListener('input',e=>{if(e.target.dataset.key){draft.profile.links[e.target.dataset.key]=e.target.value;setStatus('Unsaved link changes.');}});

  const schemas={
    trainingDelivery:{title:'Delivered training',defaults:{period:'',title:'',provider:'',details:[]},fields:[
      ['period','Organization or period','text'],['title','Training title','text'],['provider','Your role','text'],['details','Details — one bullet per line','lines']
    ]},
    training:{title:'Completed training',defaults:{period:'',title:'',provider:'',details:'',credential:'',url:''},fields:[
      ['period','Year or status','text'],['title','Course or development title','text'],['provider','Provider','text'],['details','What you learned','textarea'],['credential','Credential label','text'],['url','Credential URL','url']
    ]},
    writeups:{title:'Write-up',defaults:{category:'',title:'',summary:'',url:''},fields:[
      ['category','Category','text'],['title','Title','text'],['summary','Short summary','textarea'],['url','Page, PDF, or external link','text']
    ]},
    mediaGallery:{title:'Image or figure',defaults:{type:'',title:'',src:'assets/uploads/images/',alt:'',caption:''},fields:[
      ['type','Type, such as map or training photo','text'],['title','Title','text'],['src','Image file path','text'],['alt','Accessible image description','text'],['caption','Caption','textarea']
    ]},
    videos:{title:'Video',defaults:{provider:'YouTube',title:'',url:'',caption:''},fields:[
      ['provider','Provider','text'],['title','Video title','text'],['url','Public YouTube or Vimeo URL','url'],['caption','Short description','textarea']
    ]}
  };

  function itemControl(section,index,key,label,type,value){
    const id=`${section}-${index}-${key}`;
    let control='';
    if(type==='textarea'||type==='lines'){
      const val=type==='lines'&&Array.isArray(value)?value.join('\n'):(value||'');
      control=`<textarea id="${id}" data-section="${section}" data-index="${index}" data-key="${key}" data-type="${type}">${esc(val)}</textarea>`;
    }else{
      control=`<input id="${id}" type="${type}" value="${esc(value||'')}" data-section="${section}" data-index="${index}" data-key="${key}" data-type="${type}">`;
    }
    return `<div class="editor-field ${type==='textarea'||type==='lines'?'full':''}"><label for="${id}">${esc(label)}</label>${control}</div>`;
  }
  function renderSection(section){
    draft[section]=Array.isArray(draft[section])?draft[section]:[];
    const box=$(`#${section}-editor`),schema=schemas[section];
    box.innerHTML=draft[section].map((item,i)=>`<article class="editor-item"><div class="editor-item-head"><strong>${esc(schema.title)} ${i+1}</strong><button class="editor-remove" data-remove="${section}" data-index="${i}">Remove</button></div><div class="editor-grid">${schema.fields.map(([k,l,t])=>itemControl(section,i,k,l,t,item[k])).join('')}</div></article>`).join('')||'<div class="empty-state">No items yet.</div>';
  }
  Object.keys(schemas).forEach(renderSection);

  document.addEventListener('input',e=>{
    const {section,index,key,type}=e.target.dataset;
    if(section&&key){
      const val=type==='lines'?e.target.value.split('\n').map(x=>x.trim()).filter(Boolean):e.target.value;
      draft[section][Number(index)][key]=val;
      setStatus('Unsaved content changes.');
    }
  });
  document.addEventListener('click',e=>{
    const add=e.target.dataset.add,remove=e.target.dataset.remove;
    if(add){draft[add].push(JSON.parse(JSON.stringify(schemas[add].defaults)));renderSection(add);setStatus(`Added a new ${schemas[add].title.toLowerCase()} item.`);}
    if(remove){draft[remove].splice(Number(e.target.dataset.index),1);renderSection(remove);setStatus(`Removed an item from ${schemas[remove].title.toLowerCase()}.`);}
  });

  function download(name,text,type='text/javascript'){
    const blob=new Blob([text],{type});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();
    setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1000);
  }
  $('#download-js').addEventListener('click',()=>{
    const text='// MAIN WEBSITE CONTENT\n// Generated with content-editor.html\nwindow.PORTFOLIO_DATA = '+JSON.stringify(draft,null,2)+';\n';
    download('site-data.js',text);
    setStatus('Updated site-data.js downloaded. Replace the file inside assets/js/.');
  });
  $('#download-json').addEventListener('click',()=>{
    download('portfolio-content-backup.json',JSON.stringify(draft,null,2),'application/json');
    setStatus('Backup JSON downloaded.');
  });
})();
