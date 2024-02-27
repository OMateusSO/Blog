import{d as g,r as _,o as f,t as c,v as x,x as t,L as v,M as h,y as a,N as u,B as y,u as b,O as w,z as k}from"./entry.4Y6qWfeP.js";import{a as C,b as P}from"./config.hjXOQQEx.js";const $={class:"bg-white py-24 sm:py-1"},B={class:"mx-auto max-w-7xl px-6 lg:px-8"},N=t("div",{class:"mx-auto max-w-2xl lg:mx-0"},[t("h2",{class:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"},"BlogView"),t("p",{class:"mt-2 text-lg leading-8 text-gray-600"},"Esse é um blog que está em desenvolvimento."),t("div",{class:"flex flex-row-reverse mx-auto max-w-2xl lg:max-w-4xl mt-8"})],-1),A={class:"mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"},L=["onClick"],V={class:"flex items-center gap-x-4 text-xs"},M=["createAt"],T=["href"],j={class:"group relative"},z={class:"mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"},D=["href"],E=t("span",{class:"absolute inset-0 hover:cursor-pointer"},null,-1),O={class:"mt-5 line-clamp-3 text-sm leading-6 text-gray-600 hover:cursor-pointer"},R=t("div",{class:"flex flex-row-reverse mx-auto max-w-2xl lg:max-w-4xl mt-8"},null,-1),q=g({__name:"listPost",emits:["onClickPost"],setup(p,{emit:l}){const n=_([]);f(()=>{r()});function r(){C.get(`${P}/posts`).then(s=>{n.value=s.data}).catch(()=>{console.log("error")})}const o=s=>s.split("-").reverse().join("-"),d=l;function m(s){d("onClickPost",s)}return(s,i)=>(c(),x("div",$,[t("div",B,[N,t("div",A,[(c(!0),x(v,null,h(n.value,e=>(c(),x("article",{key:e.id,class:"flex max-w-xl flex-col items-start justify-between"},[t("div",{onClick:G=>m(e)},[t("div",V,[t("time",{createAt:o(e.createAt.split("T")[0]),class:"text-gray-500"},a(o(e.createAt.split("T")[0])),9,M),t("a",{href:e.category,class:"relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 hover:cursor-pointer",onClick:i[0]||(i[0]=u(()=>{},["prevent"]))},a(e.category),9,T)]),t("div",j,[t("h3",z,[t("a",{href:e.href,onClick:i[1]||(i[1]=u(()=>{},["prevent"]))},[E,y(" "+a(e.title),1)],8,D)]),t("p",O,a(e.description),1)])],8,L)]))),128)),R])])]))}}),F={class:"flex flex-row-reverse mx-auto max-w-2xl lg:max-w-4xl mt-8"},H=g({__name:"index",setup(p){const l=b();function n(r){l.push(`/posts/${r.id}`)}return(r,o)=>{const d=q;return c(),x("div",null,[t("div",F,[t("button",{type:"button",class:"rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:o[0]||(o[0]=m=>w(l).push("/posts/new"))}," Novo Post ")]),k(d,{onOnClickPost:n})])}}});export{H as default};
