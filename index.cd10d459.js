function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`,{headers:{"x-api-key":"live_1SLi0nwDKLs9tE67PgHRv7wAvhwYEp2lyKt4wusq54NRJSTrg81S8J9zXoQW5oKl"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch cat");return e.json()})).then((e=>e[0]))}const t=document.getElementById("selectElement"),n=document.querySelector(".loader"),r=document.querySelector(".error"),o=document.querySelector(".cat-info");function a(){n.style.display="none"}function c(){r.style.display="block"}fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_1SLi0nwDKLs9tE67PgHRv7wAvhwYEp2lyKt4wusq54NRJSTrg81S8J9zXoQW5oKl"}}).then((e=>{if(!e.ok)throw new Error("Failed to fetch breeds");return e.json()})).then((e=>e.map((e=>({id:e.id,name:e.name}))))).then((i=>{i.forEach((e=>{const n=document.createElement("option");n.value=e.id,n.textContent=e.name,t.appendChild(n)})),t.addEventListener("change",(()=>{const a=t.value;n.style.display="block",r.style.display="none",e(a).then((e=>function(e){n.innerHTML="",o.innerHTML=`\n    <img src="${e.url}" alt="Cat Image">\n    <h3>${e.breeds[0].name}</h3>\n    <p>${e.breeds[0].description}</p>\n    <p>Temperament: ${e.breeds[0].temperament}</p>\n  `,o.style.display="block"}(e))).catch((e=>c()))})),a()})).catch((e=>{c(),a()}));
//# sourceMappingURL=index.cd10d459.js.map