import{d as b,r as h,P as v,u as y,o as w,t as _,v as k,x as e,R as i,S as n,O as s,L as C}from"./entry.4Y6qWfeP.js";import{a as r,b as d}from"./config.hjXOQQEx.js";const D={class:"mx-auto max-w-2xl lg:max-w-4xl mt-8"},U=e("label",{for:"email",class:"block text-sm font-medium leading-6 text-gray-900"},"Titulo",-1),$={class:"mt-2"},V=e("label",{for:"email",class:"block text-sm font-medium leading-6 text-gray-900"},"Categoria",-1),B={class:"mt-2"},R=e("label",{class:"block text-sm font-medium leading-6 text-gray-900"},"Descrição",-1),P={class:"mt-2"},S=e("label",{class:"block text-sm font-medium leading-6 text-gray-900"},"Conteudo",-1),L={class:"mt-2"},F=b({__name:"edit-[id]",setup(M){const o=h({category:{title:""}}),a=v(),c=y();w(()=>{g(a.params.id)});function g(u){r.get(`${d}/posts/${u}`).then(t=>{o.value=t.data}).catch(t=>{console.log(t)})}function m(){f()}function f(){r.put(`${d}/posts/${a.params.id}`,o.value).then(()=>{console.log("success"),c.push("/")}).catch(()=>{console.log("error")})}function x(){p()}function p(){r.delete(`${d}/posts/${a.params.id}`).then(()=>{console.log("success"),c.push("/")}).catch(()=>{console.log("error")})}return(u,t)=>(_(),k(C,null,[e("div",D,[e("div",null,[U,e("div",$,[i(e("input",{class:"block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2",placeholder:"titulo","onUpdate:modelValue":t[0]||(t[0]=l=>s(o).title=l)},null,512),[[n,s(o).title]])])]),e("div",null,[V,e("div",B,[i(e("input",{class:"block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2",placeholder:"Categoria","onUpdate:modelValue":t[1]||(t[1]=l=>s(o).category=l)},null,512),[[n,s(o).category]])])]),e("div",null,[R,e("div",P,[i(e("textarea",{class:"block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2",placeholder:"Descrição","onUpdate:modelValue":t[2]||(t[2]=l=>s(o).description=l)},`\r
        `,512),[[n,s(o).description]])])]),e("div",null,[S,e("div",L,[i(e("textarea",{class:"block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2",placeholder:"Conteudo","onUpdate:modelValue":t[3]||(t[3]=l=>s(o).content=l),rows:"15"},`\r
        `,512),[[n,s(o).content]])])])]),e("div",{class:"flex flex-row-reverse mx-auto max-w-2xl lg:max-w-4xl mt-8 mb-8"},[e("button",{type:"button",class:"rounded-md bg-indigo-600 px-2.5 mx-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:m}," Salvar "),e("button",{type:"button",class:"rounded-md ml-4 bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",onClick:x}," Deletar ")])],64))}});export{F as default};