import{_ as h}from"./Typing.4b31ca65.js";import{o,c as p,a as n,t as l,f as r,e as f,r as _,w as x,b as u,d,F as k,g as v,h as w,_ as y}from"./index.a86318a2.js";function c(e=32){const s="abcdefghijklmnopqrstuvwxyz ";let t="";for(let a=0;a<e;a++)t+=s[Math.floor(Math.random()*s.length)];return t}const b={class:"text-2xl"},j=n("br",null,null,-1),N=n("br",null,null,-1),T=n("br",null,null,-1),I={__name:"Project",props:{name:{type:String,default:"Project"},description:{type:String,default:""},image:{type:String,default:""},link:{type:String,default:""},tags:{type:Array,default:()=>[]}},setup(e){return(s,t)=>(o(),p("div",null,[n("h1",b,"Name: "+l(e.name),1),r(" Description: "+l(e.description),1),j,r(" Image: "+l(e.image),1),N,r(" Link: "+l(e.link),1),T,f(h,{text:e.tags.join(" / ")},null,8,["text"])]))}},P={class:"h-full w-full px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24"},S={class:"py-2"},A={__name:"Projects",setup(e){const s=[{name:"\u88FD\u4F5C\u500B\u4EBA\u7DB2\u7AD9\uFF1F",description:"This is a project description. "+c(64),image:"https://i.picsum.photos/id/417/640/320.jhttps://photos.google.com/photo/AF1QipN3irRBFzGmjrYpNfjREffmhv6TcpYVxsWI0imcpg?hmac=V4kuEXwWkk9QjP_hMjquAsqupaSIWr0sg_KtPGvg7T0",link:"https://github.com",tags:["tag1","tag2","tag3"]},{name:"\u5BEB\u51FA AI\uFF1F",description:"This is a project description. "+c(64),image:"https://picsum.photos/640/320",link:"https://github.com",tags:["tag1","tag2","tag3"]},{name:"\u5B78\u6703 Linux\uFF1F",description:"This is a project description. "+c(64),image:"https://picsum.photos/640/320",link:"https://github.com",tags:["tag1","tag2","tag3"]},{name:"\u505A\u51FA\u684C\u5E03\uFF1F",description:"This is a project description. "+c(64),image:"https://picsum.photos/640/320",link:"https://github.com",tags:["tag1","tag2","tag3"]}],t=_(0);let a=-1;return x(t,()=>{t.value>0&&a===-1&&(a=window.setInterval(()=>{t.value++,t.value>=s.length&&window.clearInterval(a)},200))}),(V,g)=>(o(),p("div",P,[t.value>=0?(o(),u(h,{key:0,onDone:g[0]||(g[0]=i=>t.value++),text:"My Projects",class:"block text-2xl sm:text-3xl lg:text-4xl"})):d("",!0),n("div",S,[(o(),p(k,null,v(s,(i,m)=>n("div",null,[f(y,null,{default:w(()=>[t.value>=m+1?(o(),u(I,{key:m,class:"my-2 w-full rounded-md bg-white bg-opacity-50 p-4 shadow-md shadow-indigo-200",name:i.name,description:i.description,image:i.image,link:i.link,tags:i.tags},null,8,["name","description","image","link","tags"])):d("",!0)]),_:2},1024)])),64))])]))}};export{A as default};
