(this["webpackJsonplouis-earl-portfolio"]=this["webpackJsonplouis-earl-portfolio"]||[]).push([[0],{21:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(15),n=a.n(c),i=(a(21),a(2)),s=a(0);var o=function(){return Object(s.jsxs)("div",{className:"section",children:[Object(s.jsx)("h3",{children:"About Me"}),Object(s.jsxs)("div",{className:"about__grid",children:[Object(s.jsxs)("div",{className:"about__content",children:[Object(s.jsx)("p",{className:"paragraph-break",children:"Hello! I\u2019m Louis (pronounced Louie, he/him). I\u2019m currently living in Wellington and have called this place home for the last four years."}),Object(s.jsx)("p",{className:"paragraph-break",children:"I am a software developer with a passion for building all things fun and interactive. I was drawn to tech after the realisation that creativity can be utilised to a depth that I\u2019m yet to find the end of."}),Object(s.jsx)("p",{className:"paragraph-break",children:"In development, I enjoy being creative as a way to build and design a visual experience. But also, I find myself endorsing the very same creative part of my brain when programming. I\u2019m always excited to dig into the complex problem solving with the curiosity to learn how and why things work."}),Object(s.jsx)("p",{className:"paragraph-break",children:"For the past 4 years, I have been using code creatively for video game projects. In my final year at the College of Creative Arts, I worked on a year-long major project, One Way Wellington, a video game about building a spaceship and transporting creative talent from across the galaxy to the coolest little capital."}),Object(s.jsx)("p",{children:"This year I have extended my tool-belt into web development. I have recently completed study at Enspiral Dev Academy, where I worked in a team to build a web-based multiplayer Mafia game."})]}),Object(s.jsx)("img",{className:"about__image",src:"./images/portrait-louis.jpg",alt:"A portrait of Louis Earl"})]})]})};var l=function(e){var t=e.condition,a=e.wrapper,r=e.children;return t?a(r):r};var j=function(e){var t=e.image,a=e.label,r=e.link;return Object(s.jsx)(l,{condition:r,wrapper:function(e){return Object(s.jsx)("a",{href:r,children:e})},children:Object(s.jsxs)("div",{className:"contact__method",children:[Object(s.jsx)("img",{className:"contact__method--icon",src:"./images/"+t+".png",alt:"Icon for "+t}),Object(s.jsx)("p",{children:a})]})})};var d=function(){return Object(s.jsxs)("div",{className:"contact section",children:[Object(s.jsx)("h3",{children:"Don't Be a Stranger"}),Object(s.jsxs)("div",{className:"contact__grid",children:[Object(s.jsx)(j,{image:"email",label:"louis.earl.14@gmail.com",link:"mailto: louis.earl.14@gmail.com"}),Object(s.jsx)(j,{image:"linkedin",label:"Linkedin",link:"https://www.linkedin.com/in/louis-earl/"}),Object(s.jsx)(j,{image:"github",label:"GitHub",link:"https://github.com/louis-earl"}),Object(s.jsx)(j,{image:"phone",label:"Available on Request"})]})]})};var h,b,m,u,p=function(){return Object(s.jsx)("div",{className:"foot-note",children:Object(s.jsx)("p",{className:"foot-note__text",children:"(this site made with love by Louis Earl)"})})},x=a(14),g=!0,O=1e3,v=0,f=0,y=0,w=0,_=0,N=0,k=1,I=8,E=new Array(O);function M(){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight;return Array(e,t)}function R(e,t,a){return Math.min(Math.max(e,t),a)}function W(){!function(){var e=M(),t=Object(x.a)(e,2),a=t[0],r=t[1];a==v&&r==f||C(a,r)}();var e=R(window.scrollY/3,0,90);I=R(e/30,1,3),k=R(e/12,1,8),u.clearRect(0,0,v,f);for(var t=0;t<O;t++)g=!0,h=E[t][3],b=E[t][4],E[t][1]+=-e>>4,E[t][1]<-w<<1&&(E[t][1]+=f<<1,g=!1),E[t][2]-=k,E[t][2]>_&&(E[t][2]-=_,g=!1,console.log("ERROR HANDLE Z - moved forward??")),E[t][2]<0&&(E[t][2]+=_,g=!1),E[t][3]=y+E[t][0]/E[t][2]*256,E[t][4]=w+E[t][1]/E[t][2]*256,(E[t][3]>v+100||E[t][3]<-100||E[t][4]>f+100||E[t][4]<-100)&&(g=!1),0!=h&&0!=b||(g=!1),h-=I*(E[t][3]-h),b-=I*(E[t][4]-b),g&&(u.lineWidth=3*(1-N*E[t][2]),u.lineCap="round",u.beginPath(),u.moveTo(h,b),u.lineTo(E[t][3],E[t][4]),u.stroke(),u.closePath());setTimeout((function(){return W()}),20)}function C(e,t){v=e,f=t,y=Math.round(v/2),w=Math.round(f/2),N=1/(_=(v+f)/2),function(){console.log("x:",y,"y:",w),console.log("w:",v,"h:",f),console.log(2*v-2*y);for(var e=0;e<O;e++)E[e]=new Array(5),E[e][0]=Math.random()*v*2-2*y,E[e][1]=Math.random()*f*2-2*w,E[e][2]=Math.round(Math.random()*_),E[e][3]=0,E[e][4]=0;m.width=v,m.height=f,(u=m.getContext("2d")).fillStyle="rgb(0,0,0)",u.strokeStyle="rgb(255,255,255)"}()}var S=function(){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){!function(e){m=e;var t=M(),a=Object(x.a)(t,2);C(a[0],a[1]),W()}(e.current)}),[]),Object(s.jsx)("div",{className:"starfield__wrapper",children:Object(s.jsx)("canvas",{id:"starfield",ref:e})})};var A=function(){return Object(s.jsxs)("div",{className:"hero",children:[Object(s.jsx)(S,{}),Object(s.jsx)("h1",{children:"Louis Earl"}),Object(s.jsx)("h2",{children:"Software Developer for Web & Video Games"})]})},F=a(9),L=["JavaScript","React","Redux","Web Sockets","Canvas","C#","Unity Engine","Unreal Engine"];var P=function(e){var t=e.label,a=function(e){var t=L.indexOf(e);return-1==t?(console.warn("Tech ("+e+") not specified in techList. "+L),"#FFFFFF"):"hsl("+(360/L.length*t+330)+", 95%, 55%)"}(t);return Object(s.jsx)("div",{className:"tech-label",style:{borderColor:a},children:Object(s.jsx)("p",{children:t})})};var T=function(e){var t=e.image,a=e.title,r=e.year,c=e.tech,n=e.route;return Object(s.jsx)(F.b,{to:n,children:Object(s.jsxs)("div",{className:"project-card",children:[Object(s.jsx)("img",{className:"project-card__poster",src:"./images/"+t+".jpg",alt:"Poster for "+a}),Object(s.jsxs)("div",{className:"project-card__info",children:[Object(s.jsx)("h4",{children:a}),Object(s.jsx)("p",{children:r}),Object(s.jsx)("div",{className:"tech-list",children:c&&c.map((function(e,t){return Object(s.jsx)(P,{label:e},t)}))})]})]})})};var D=function(){return Object(s.jsx)("div",{className:"projects__grid scrollbar-hidden",children:Object(s.jsx)(T,{image:"project-portfolio",title:"Portfolio Website",year:"2021",tech:["JavaScript","React","Canvas"],route:"portfolio"})})};var H=function(){return Object(s.jsxs)("div",{className:"projects__grid projects__grid--major scrollbar-hidden",children:[Object(s.jsx)(T,{image:"poster-mafia",title:"Midnight Mysteries",year:"2021",tech:["JavaScript","React","Redux","Web Sockets"],route:"midnight-mysteries"}),Object(s.jsx)(T,{image:"poster-oww",title:"One Way Wellington",year:"2019",tech:["C#","Unity Engine"],route:"one-way-wellington"}),Object(s.jsx)(T,{image:"poster-racer",title:"Super Racer Go!",year:"2018",tech:["Unreal Engine"],route:"super-racer-go"})]})};var J=function(){return Object(s.jsxs)("div",{className:"section",children:[Object(s.jsxs)("div",{className:"projects",children:[Object(s.jsx)("h3",{children:"Major Projects"}),Object(s.jsx)(H,{cardType:"major"})]}),Object(s.jsxs)("div",{className:"projects",children:[Object(s.jsx)("h3",{children:"Interest Projects"}),Object(s.jsx)(D,{cardType:"interest"})]})]})};var U=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(A,{}),Object(s.jsx)("div",{className:"section__wrapper section__wrapper--dark",children:Object(s.jsx)(J,{})}),Object(s.jsx)("div",{className:"about__fixed-bg",children:Object(s.jsx)("div",{className:"section__wrapper section__wrapper--blur",children:Object(s.jsx)(o,{})})}),Object(s.jsx)("div",{className:"section__wrapper section__wrapper--dark",children:Object(s.jsx)(d,{})}),Object(s.jsx)(p,{})]})};var B=function(e){var t=e.title,a=e.message;return Object(s.jsx)("div",{className:"modal__wrapper",children:Object(s.jsxs)("div",{className:"modal",children:[Object(s.jsx)("h2",{children:t}),Object(s.jsx)("p",{children:a}),Object(s.jsx)("div",{className:"modal__button",children:Object(s.jsx)(j,{image:"icon-home",label:"Home Page",link:"/"})})]})})};var G=function(){return Object(s.jsx)(B,{title:"404 - Page not found",message:"Dang, that's a shame."})};var q=function(){return Object(s.jsx)(B,{title:"Under Construction",message:"Exciting things to show off soon!"})};var V=function(){return Object(s.jsxs)(i.c,{children:[Object(s.jsx)(i.a,{exact:!0,path:"/",component:U}),Object(s.jsx)(i.a,{exact:!0,path:"/midnight-mysteries",component:q}),Object(s.jsx)(i.a,{exact:!0,path:"/one-way-wellington",component:q}),Object(s.jsx)(i.a,{exact:!0,path:"/super-racer-go",component:q}),Object(s.jsx)(i.a,{exact:!0,path:"/portfolio",component:q}),Object(s.jsx)(i.a,{exact:!0,path:"/research",component:q}),Object(s.jsx)(i.a,{component:G})]})};n.a.render(Object(s.jsx)(F.a,{children:Object(s.jsx)(V,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4a40636a.chunk.js.map