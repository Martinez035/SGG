const users=[{u:'admin',p:'1234'},{u:'alumno',p:'abcd'}];
theme.onclick=()=>{document.body.classList.toggle('dark');localStorage.theme=document.body.classList.contains('dark')}
if(localStorage.theme==='true')document.body.classList.add('dark');
function login(){let uv=u.value,pv=p.value;let ok=users.find(x=>x.u===uv&&x.p===pv);m.textContent=ok?'Acceso correcto':'Credenciales inválidas';}

