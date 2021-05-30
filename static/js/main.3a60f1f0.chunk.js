(this["webpackJsonplouis-earl-portfolio"]=this["webpackJsonplouis-earl-portfolio"]||[]).push([[0],{21:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(15),c=a.n(r),i=(a(21),a(2)),s=a(0);var o=function(){return Object(s.jsxs)("div",{className:"section",children:[Object(s.jsx)("h3",{children:"About Me"}),Object(s.jsxs)("div",{className:"about__grid",children:[Object(s.jsxs)("div",{className:"about__content",children:[Object(s.jsx)("p",{className:"paragraph-break",children:"Hello! I\u2019m Louis (pronounced Louie, he/him). I\u2019m currently living in Wellington and have called this place home for the last four years."}),Object(s.jsx)("p",{className:"paragraph-break",children:"I am a software developer with a passion for building all things fun and interactive. I was drawn to tech after the realisation that creativity can be utilised to a depth that I\u2019m yet to find the end of."}),Object(s.jsx)("p",{className:"paragraph-break",children:"In development, I enjoy being creative as a way to build and design a visual experience. But also, I find myself endorsing the very same creative part of my brain when programming. I\u2019m always excited to dig into the complex problem solving with the curiosity to learn how and why things work."}),Object(s.jsx)("p",{className:"paragraph-break",children:"For the past 4 years, I have been using code creatively for video game projects. In my final year at the College of Creative Arts, I worked on a year-long major project, One Way Wellington, a video game about building a spaceship and transporting creative talent from across the galaxy to the coolest little capital."}),Object(s.jsx)("p",{children:"This year I have extended my tool-belt into web development. I have recently completed study at Enspiral Dev Academy, where I worked in a team to build a web-based multiplayer Mafia game."})]}),Object(s.jsx)("img",{className:"about__image",src:"./images/portrait-louis.jpg",alt:"A portrait of Louis Earl"})]})]})};var l=function(e){var t=e.condition,a=e.wrapper,n=e.children;return t?a(n):n};var d=function(e){var t=e.image,a=e.label,n=e.link;return Object(s.jsx)(l,{condition:n,wrapper:function(e){return Object(s.jsx)("a",{href:n,children:e})},children:Object(s.jsxs)("div",{className:"contact__method",children:[Object(s.jsx)("img",{className:"contact__method--icon",src:"./images/"+t+".png",alt:"Icon for "+t}),Object(s.jsx)("p",{children:a})]})})};var j=function(){return Object(s.jsxs)("div",{className:"contact section",children:[Object(s.jsx)("h3",{children:"Don't Be a Stranger"}),Object(s.jsxs)("div",{className:"contact__grid",children:[Object(s.jsx)(d,{image:"email",label:"louis.earl.14@gmail.com",link:"mailto: louis.earl.14@gmail.com"}),Object(s.jsx)(d,{image:"linkedin",label:"Linkedin",link:"https://www.linkedin.com/in/louis-earl/"}),Object(s.jsx)(d,{image:"github",label:"GitHub",link:"https://github.com/louis-earl"}),Object(s.jsx)(d,{image:"phone",label:"Available on Request"})]})]})};var h=function(){return Object(s.jsx)("div",{className:"foot-note",children:Object(s.jsx)("p",{className:"foot-note__text",children:"(This site made with | by Louis Earl)"})})},m=a(8);var u,b,p,g,x,v=function(e){var t=e.content,a=e.zIndex,r=e.initialZ,c=e.offsetY;r||(r="0"),c||(c="0");var i=Object(n.useState)(0),o=Object(m.a)(i,2),l=o[0],d=o[1],j=Object(n.useState)(0),h=Object(m.a)(j,2),u=h[0],b=h[1],p=l&&u;function g(){document.documentElement.style.setProperty("--cameraZ",window.pageYOffset)}function x(){var e=t.length-1,a=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspective")),n=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed"));b(n);var r=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--itemZ"));d(r);var c=window.innerHeight+a*u+r*n*e;document.documentElement.style.setProperty("--viewportHeight",c),console.log(window.screen.height);var i=window.screen.width/window.screen.height,s=-1.9748*Math.pow(i,2)+.4244*i+46.0504;document.documentElement.style.setProperty("--scenePerspectiveOriginY",s)}return Object(n.useEffect)((function(){return x(),window.onscroll=function(){return g()},window.onresize=function(){g(),x()},function(){window.onscroll=null,window.onresize=null}}),[]),Object(s.jsx)("div",{className:"viewport",style:{zIndex:a},children:p&&Object(s.jsx)("div",{className:"scene3D__container",children:Object(s.jsx)("div",{className:"scene3D",children:t&&t.map((function(e,t){return Object(s.jsx)("div",{style:{transform:"translate3D(0, "+c+", "+(l*u*t+(0==t?r:0))+"px)"},children:e},t)}))})})})},O=!0,w=1e3,f=0,y=0,_=0,N=0,k=0,I=0,W=1,E=8,P=new Array(w);function S(){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight;return Array(e,t)}function C(e,t,a){return Math.min(Math.max(e,t),a)}function M(){!function(){var e=S(),t=Object(m.a)(e,2),a=t[0],n=t[1];a==f&&n==y||F(a,n)}();var e=C(window.scrollY/3,0,90);E=C(e/30,1,3),W=C(e/12,1,8),g.clearRect(0,0,f,y);for(var t=0;t<w;t++)O=!0,u=P[t][3],b=P[t][4],P[t][1]+=-e>>4,P[t][1]<-N<<1&&(P[t][1]+=y<<1,O=!1),P[t][2]-=W,P[t][2]>k&&(P[t][2]-=k,O=!1),P[t][2]<0&&(P[t][2]+=k,O=!1),P[t][3]=_+P[t][0]/P[t][2]*256,P[t][4]=N+P[t][1]/P[t][2]*256,(P[t][3]>f+100||P[t][3]<-100||P[t][4]>y+100||P[t][4]<-100)&&(O=!1),0!=u&&0!=b||(O=!1),u-=E*(P[t][3]-u),b-=E*(P[t][4]-b),O&&(g.lineWidth=3*(1-I*P[t][2]),g.lineCap="round",g.beginPath(),g.moveTo(u,b),g.lineTo(P[t][3],P[t][4]),g.stroke(),g.closePath());x=setTimeout((function(){return M()}),20)}function F(e,t){f=e,y=t,_=Math.round(f/2),N=Math.round(y/2),I=1/(k=(f+y)/2),function(){for(var e=0;e<w;e++)P[e]=new Array(5),P[e][0]=Math.random()*f*2-2*_,P[e][1]=Math.random()*y*2-2*N,P[e][2]=Math.round(Math.random()*k),P[e][3]=0,P[e][4]=0;p.width=f,p.height=y,(g=p.getContext("2d")).fillStyle="rgb(0,0,0)",g.strokeStyle="rgb(255,255,255)"}()}var A=function(){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){return function(e){p=e;var t=S(),a=Object(m.a)(t,2);F(a[0],a[1]),M()}(e.current),function(){clearTimeout(x)}}),[]),Object(s.jsx)("div",{className:"starfield__wrapper",children:Object(s.jsx)("canvas",{id:"starfield",ref:e})})};var T=function(){var e=[Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{id:"hero-title",children:"Louis Earl"}),Object(s.jsx)("h2",{id:"hero-subtitle",children:"Software\xa0Developer\xa0for Web\xa0&\xa0Video\xa0Games"})]})];return Object(s.jsxs)("div",{id:"hero",className:"hero",children:[Object(s.jsx)(A,{}),Object(s.jsx)(v,{content:e,zIndex:-1,offsetY:"-100%"})]})},D=a(10),R=["JavaScript","React","Redux","Web Sockets","Canvas","C#","Unity Engine","Unreal Engine"];var L=function(e){var t=e.label,a=function(e){var t=R.indexOf(e);return-1==t?(console.warn("Tech ("+e+") not specified in techList. "+R),"#FFFFFF"):"hsl("+(360/R.length*t+330)+", 95%, 55%)"}(t);return Object(s.jsx)("div",{className:"tech-label",style:{borderColor:a},children:Object(s.jsx)("p",{children:t})})};var H=function(e){var t=e.image,a=e.title,n=e.year,r=e.tech,c=e.route;return Object(s.jsx)(D.b,{to:c,children:Object(s.jsxs)("div",{className:"project-card",children:[Object(s.jsx)("img",{className:"project-card__poster",src:"./images/"+t+".jpg",alt:"Poster for "+a}),Object(s.jsxs)("div",{className:"project-card__info",children:[Object(s.jsx)("h4",{children:a}),Object(s.jsx)("p",{children:n}),Object(s.jsx)("div",{className:"tech-list",children:r&&r.map((function(e,t){return Object(s.jsx)(L,{label:e},t)}))})]})]})})};var z=function(){return Object(s.jsx)("div",{className:"projects__grid scrollbar-hidden",children:Object(s.jsx)(H,{image:"project-portfolio",title:"Portfolio Website",year:"2021",tech:["JavaScript","React","Canvas"],route:"portfolio"})})};var J=function(){return Object(s.jsxs)("div",{className:"projects__grid projects__grid--major scrollbar-hidden",children:[Object(s.jsx)(H,{image:"poster-mafia",title:"Midnight Mysteries",year:"2021",tech:["JavaScript","React","Redux","Web Sockets"],route:"midnight-mysteries"}),Object(s.jsx)(H,{image:"poster-oww",title:"One Way Wellington",year:"2019",tech:["C#","Unity Engine"],route:"one-way-wellington"}),Object(s.jsx)(H,{image:"poster-racer",title:"Super Racer Go!",year:"2018",tech:["Unreal Engine"],route:"super-racer-go"})]})};var U=function(){return Object(s.jsxs)("div",{className:"section",children:[Object(s.jsxs)("div",{className:"projects",children:[Object(s.jsx)("h3",{children:"Major Projects"}),Object(s.jsx)(J,{cardType:"major"})]}),Object(s.jsxs)("div",{className:"projects",children:[Object(s.jsx)("h3",{children:"Interest Projects"}),Object(s.jsx)(z,{cardType:"interest"})]})]})};var Y=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(T,{}),Object(s.jsx)("div",{className:"section__wrapper section__wrapper--dark",children:Object(s.jsx)(U,{})}),Object(s.jsx)("div",{className:"about__fixed-bg",children:Object(s.jsx)("div",{className:"section__wrapper section__wrapper--blur",children:Object(s.jsx)(o,{})})}),Object(s.jsx)("div",{className:"section__wrapper section__wrapper--dark",children:Object(s.jsx)(j,{})}),Object(s.jsx)(h,{})]})};var Z=function(e){var t=e.title,a=e.message;return Object(s.jsx)("div",{className:"modal__wrapper",children:Object(s.jsxs)("div",{className:"modal",children:[Object(s.jsx)("h2",{children:t}),Object(s.jsx)("p",{children:a}),Object(s.jsx)("div",{className:"modal__button",children:Object(s.jsx)(d,{image:"icon-home",label:"Home Page",link:"/"})})]})})};var G=function(){return Object(s.jsx)(Z,{title:"404 - Page not found",message:"Dang, that's a shame."})};var V=function(){return Object(s.jsx)(Z,{title:"Under Construction",message:"Exciting things to show off soon!"})};a(31);var B=function(){var e=[Object(s.jsx)("img",{className:"oww-logo",src:"./images/oww-logo.svg",alt:"The logo for One Way Wellington."}),Object(s.jsx)("div",{className:"oww-card__outer",children:Object(s.jsxs)("div",{className:"oww-card oww-card--text",children:[Object(s.jsx)("h3",{className:"oww-card__title",children:"In A Galaxy, Not So Far Away..."}),Object(s.jsx)("p",{children:"Planet Wellington calls out to the galaxy in desperate need for artists - the world can only move forward with help from these creative thinkers! One Way Wellington is a 2D spaceship building/management game about transporting creative talent across the Milky Way to the \u2018Coolest Little Capital\u2019."})]})}),Object(s.jsx)("div",{className:"oww-card__outer oww-card__outer--ship",children:Object(s.jsx)("div",{className:"oww-card",children:Object(s.jsx)("img",{className:"oww-ship",src:"./images/oww-ship.jpg",alt:"A spaceship flying through space, filled with passengers."})})}),Object(s.jsx)("div",{className:"oww-card__outer",children:Object(s.jsxs)("div",{className:"oww-card oww-card--text",children:[Object(s.jsx)("h3",{className:"oww-card__title",children:"My Involvement"}),Object(s.jsx)("p",{children:"As the Creator and Developer of One Way Wellington, I've been responsible for everything from ideation to production and release. This solo project has been an exciting venture because I\u2019ve pursued what I love, designing and programming video games, while taking the project through the entire production pipeline alongside Wellington-based client, WellingtonNZ."})]})})];return Object(s.jsxs)("div",{className:"oww",children:[Object(s.jsx)("div",{className:"starfield__wrapper"}),Object(s.jsx)("div",{className:"corridor__wrapper"}),Object(s.jsx)(v,{content:e,initialZ:-200})]})};var q=function(){return Object(s.jsxs)(i.c,{children:[Object(s.jsx)(i.a,{exact:!0,path:"/",component:Y}),Object(s.jsx)(i.a,{exact:!0,path:"/midnight-mysteries",component:V}),Object(s.jsx)(i.a,{exact:!0,path:"/one-way-wellington",component:B}),Object(s.jsx)(i.a,{exact:!0,path:"/super-racer-go",component:V}),Object(s.jsx)(i.a,{exact:!0,path:"/portfolio",component:V}),Object(s.jsx)(i.a,{exact:!0,path:"/research",component:V}),Object(s.jsx)(i.a,{component:G})]})};c.a.render(Object(s.jsx)(D.a,{children:Object(s.jsx)(q,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3a60f1f0.chunk.js.map