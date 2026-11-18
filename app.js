const projects = [
 {file:'lobby.png',name:'Halloween courtyard',alt:'Halloween courtyard with autumn trees, a campfire and a green portal',description:'A complete low-poly environment, assembled and lit in Roblox Studio.'},
 {file:'portal.png',name:'Emerald portal',alt:'Carved stone portal filled with green energy on a Roblox baseplate',description:'Angular stonework and a glowing gateway. Modeled in Blender and shown in Roblox Studio.'},
 {file:'pumpkin.png',name:'Jack-o-lantern',alt:'An angular pumpkin with carved glowing eyes and a hooked stem',description:'A carved low-poly pumpkin with a hooked stem and glowing eyes. Original in-game capture.'},
 {file:'campfire.png',name:'Fire & lantern',alt:'A campfire, wooden fence and hanging lantern in a pool of warm light',description:'A small set of props brought together by firelight. Original in-game capture.'},
 {file:'tree.png',name:'Twisted tree',alt:'A bare twisted tree and warm glowing lantern',description:'Angular branches and a readable silhouette. Original in-game capture.'}
];
let featured=0,viewing=0,opener;
const dialog=document.querySelector('.project-dialog');
const heroImage=document.getElementById('hero-image');
function feature(index){featured=index;const p=projects[index];heroImage.src='assets/'+p.file;heroImage.alt=p.alt;document.getElementById('hero-project-title').textContent=p.name;document.querySelectorAll('[data-feature]').forEach(b=>{const selected=Number(b.dataset.feature)===index;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});}
document.querySelectorAll('[data-feature]').forEach(b=>b.addEventListener('click',()=>feature(Number(b.dataset.feature))));
function display(index){viewing=(index+projects.length)%projects.length;const p=projects[viewing];document.getElementById('project-image').src='assets/'+p.file;document.getElementById('project-image').alt=p.alt;document.getElementById('project-title').textContent=p.name;document.getElementById('project-description').textContent=p.description;document.getElementById('project-position').textContent=(viewing+1)+' / '+projects.length;}
function openProject(index,button){opener=button;display(index);dialog.showModal();document.body.classList.add('has-dialog');}
document.getElementById('hero-open').addEventListener('click',e=>openProject(featured,e.currentTarget));
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>openProject(Number(b.dataset.project),b)));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
document.getElementById('previous').addEventListener('click',()=>display(viewing-1));document.getElementById('next').addEventListener('click',()=>display(viewing+1));
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();display(viewing+1);}if(e.key==='ArrowLeft'){e.preventDefault();display(viewing-1);}});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('has-dialog');opener?.focus();});
