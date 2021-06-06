(this["webpackJsonplouis-earl-portfolio"]=this["webpackJsonplouis-earl-portfolio"]||[]).push([[0],{21:function(e,t,a){},23:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(15),r=a.n(c),n=(a(21),a(2)),i=a(0);var o=function(){return Object(i.jsxs)("div",{className:"section",children:[Object(i.jsxs)("div",{className:"grid__2-3 grid__2-3--add-margin",children:[Object(i.jsxs)("div",{className:"about__content",children:[Object(i.jsx)("h3",{className:"about__title",children:"Creator of All Things Fun and Interactive"}),Object(i.jsx)("p",{className:"add-break",children:"Hello! I\u2019m Louis (pronounced Louie, he/him). I am a software developer with a passion for creative tech."}),Object(i.jsx)("p",{children:"I was drawn to tech because I love designing and building visual experiences with code. When programming, I find it exciting to dig into a complex problem because I have the curiosity to learn why and how things work. Problem-solving with code endorses the creative part of my brain, so the development process is as enjoyable as reaching the end result."})]}),Object(i.jsx)("img",{className:"about__image",src:"./images/portrait-louis.jpg",alt:"A portrait of Louis Earl"})]}),Object(i.jsxs)("div",{className:"horizontal-grid horizontal-grid--about",children:[Object(i.jsxs)("div",{className:"about__bullet",children:[Object(i.jsx)("img",{className:"about__icon",src:"./images/icon-welly.png",alt:"Wellington beehive icon."}),Object(i.jsx)("h4",{children:"Wellington Based"})]}),Object(i.jsxs)("div",{className:"about__bullet",children:[Object(i.jsx)("img",{className:"about__icon",src:"./images/icon-massey.png",alt:"Massey University icon."}),Object(i.jsx)("h4",{children:"Graduate"}),Object(i.jsx)("h4",{children:"Creative Media Production"})]}),Object(i.jsxs)("div",{className:"about__bullet",children:[Object(i.jsx)("img",{className:"about__icon",src:"./images/icon-eda.png",alt:"Enspiral Dev Academy icon."}),Object(i.jsx)("h4",{children:"Graduate"}),Object(i.jsx)("h4",{children:"EDA Bootcamp"})]})]})]})};var l=function(e){var t=e.condition,a=e.wrapper,s=e.children;return t?a(s):s};var d=function(e){var t=e.image,a=e.label,s=e.link;return Object(i.jsx)(l,{condition:s,wrapper:function(e){return Object(i.jsx)("a",{href:s,children:e})},children:Object(i.jsxs)("div",{className:"contact__method",children:[Object(i.jsx)("img",{className:"contact__method--icon",src:"./images/"+t+".png",alt:"Icon for "+t}),Object(i.jsx)("p",{children:a})]})})};var j=function(e){var t=e.extraStyle;return Object(i.jsx)("div",{className:"section__wrapper section__wrapper--dark",children:Object(i.jsxs)("div",{className:"contact section "+t,children:[Object(i.jsx)("h3",{children:"Don't Be a Stranger"}),Object(i.jsxs)("div",{className:"horizontal-grid",children:[Object(i.jsx)(d,{image:"email",label:"louis.earl.14@gmail.com",link:"mailto: louis.earl.14@gmail.com"}),Object(i.jsx)(d,{image:"linkedin",label:"Linkedin",link:"https://www.linkedin.com/in/louis-earl/"}),Object(i.jsx)(d,{image:"github",label:"GitHub",link:"https://github.com/louis-earl"}),Object(i.jsx)(d,{image:"phone",label:"Available on Request"})]})]})})};var h=function(){return Object(i.jsx)("div",{className:"foot-note",children:Object(i.jsx)("p",{className:"foot-note__text",children:"(This site made with | by Louis Earl)"})})},m=a(8);var b,p,u,g,x,O=function(e){var t=e.content,a=e.zIndex,c=e.initialZ,r=e.offsetY;c||(c="0"),r||(r="0");var n=Object(s.useState)(0),o=Object(m.a)(n,2),l=o[0],d=o[1],j=Object(s.useState)(0),h=Object(m.a)(j,2),b=h[0],p=h[1],u=l&&b;function g(){document.documentElement.style.setProperty("--cameraZ",window.pageYOffset)}function x(){var e=t.length-1,a=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspective")),s=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed"));p(s);var c=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--itemZ"));d(c);var r=window.innerHeight+a*b+c*s*e;document.documentElement.style.setProperty("--viewportHeight",r);var n=window.screen.width/window.screen.height,i=-1.9748*Math.pow(n,2)+.4244*n+46.0504;document.documentElement.style.setProperty("--scenePerspectiveOriginY",i)}return Object(s.useEffect)((function(){return window.scroll(0,0),x(),window.onscroll=function(){return g()},window.onresize=function(){g(),x()},function(){window.onscroll=null,window.onresize=null}}),[]),Object(i.jsx)("div",{className:"viewport",style:{zIndex:a},children:u&&Object(i.jsx)("div",{className:"scene3D__container",style:{zIndex:a},children:Object(i.jsx)("div",{className:"scene3D",children:t&&t.map((function(e,t){return Object(i.jsx)("div",{style:{transform:"translate3D(0, "+r+", "+(l*b*t+(0==t?c:0))+"px)"},children:e},t)}))})})})},v=!0,w=1e3,f=0,_=0,y=0,N=0,k=0,I=0,M=1,W=8,E=new Array(w);function S(){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight;return Array(e,t)}function P(e,t,a){return Math.min(Math.max(e,t),a)}function T(){!function(){var e=S(),t=Object(m.a)(e,2),a=t[0],s=t[1];a==f&&s==_||C(a,s)}();var e=P(window.scrollY/3,0,90);W=P(e/30,1,3),M=P(e/12,1,8),g.clearRect(0,0,f,_);for(var t=0;t<w;t++)v=!0,b=E[t][3],p=E[t][4],E[t][1]+=-e>>4,E[t][1]<-N<<1&&(E[t][1]+=_<<1,v=!1),E[t][2]-=M,E[t][2]>k&&(E[t][2]-=k,v=!1),E[t][2]<0&&(E[t][2]+=k,v=!1),E[t][3]=y+E[t][0]/E[t][2]*256,E[t][4]=N+E[t][1]/E[t][2]*256,(E[t][3]>f+100||E[t][3]<-100||E[t][4]>_+100||E[t][4]<-100)&&(v=!1),0!=b&&0!=p||(v=!1),b-=W*(E[t][3]-b),p-=W*(E[t][4]-p),v&&(g.lineWidth=3*(1-I*E[t][2]),g.lineCap="round",g.beginPath(),g.moveTo(b,p),g.lineTo(E[t][3],E[t][4]),g.stroke(),g.closePath());x=setTimeout((function(){return T()}),20)}function C(e,t){f=e,_=t,y=Math.round(f/2),N=Math.round(_/2),I=1/(k=(f+_)/2),function(){for(var e=0;e<w;e++)E[e]=new Array(5),E[e][0]=Math.random()*f*2-2*y,E[e][1]=Math.random()*_*2-2*N,E[e][2]=Math.round(Math.random()*k),E[e][3]=0,E[e][4]=0;u.width=f,u.height=_,(g=u.getContext("2d")).fillStyle="rgb(0,0,0)",g.strokeStyle="rgb(255,255,255)"}()}var A=function(){var e=Object(s.useRef)(null);return Object(s.useEffect)((function(){return function(e){u=e;var t=S(),a=Object(m.a)(t,2);C(a[0],a[1]),T()}(e.current),function(){clearTimeout(x)}}),[]),Object(i.jsx)("div",{className:"starfield__wrapper",children:Object(i.jsx)("canvas",{id:"starfield",ref:e})})};a(23);var D=function(){var e=[Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"hero__title",children:"Louis Earl"}),Object(i.jsx)("h2",{className:"hero__subtitle",children:"Software\xa0Developer\xa0for Web\xa0&\xa0Video\xa0Games"})]})];return Object(i.jsxs)("div",{id:"hero",className:"hero",children:[Object(i.jsx)(A,{}),Object(i.jsx)(O,{content:e,zIndex:-1,offsetY:"-100%"})]})},F=a(10),L=["JavaScript","React","Redux","Web Sockets","Canvas","CSS","C#","Unity Engine","Unreal Engine"];var z=function(e){var t=e.label,a=function(e){var t=L.indexOf(e);return-1==t?(console.warn("Tech ("+e+") not specified in techList. "+L),"#FFFFFF"):"hsl("+(360/L.length*t+330)+", 95%, 55%)"}(t);return Object(i.jsx)("div",{className:"tech-label",style:{borderColor:a},children:Object(i.jsx)("p",{children:t})})};var B=function(e){var t=e.image,a=e.title,s=e.year,c=e.tech,r=e.route;return Object(i.jsx)(F.b,{to:r,children:Object(i.jsxs)("div",{className:"project-poster",children:[Object(i.jsx)("img",{className:"project-poster__image",src:"./images/"+t+".jpg",alt:"Poster for "+a}),Object(i.jsxs)("div",{className:"project-poster__info",children:[Object(i.jsx)("h4",{children:a}),Object(i.jsx)("p",{children:s}),Object(i.jsx)("div",{className:"tech-list",children:c&&c.map((function(e,t){return Object(i.jsx)(z,{label:e},t)}))})]})]})})};var G=function(){return Object(i.jsx)("div",{className:"projects__grid scrollbar-hidden",children:Object(i.jsx)(B,{image:"project-portfolio",title:"Portfolio Website",year:"2021",tech:["JavaScript","React","Canvas","CSS"],route:"portfolio"})})};var Y=function(){return Object(i.jsxs)("div",{className:"projects__grid projects__grid--major scrollbar-hidden",children:[Object(i.jsx)(B,{image:"poster-mafia",title:"Midnight Mysteries",year:"2021",tech:["JavaScript","React","Redux","Web Sockets"],route:"midnight-mysteries"}),Object(i.jsx)(B,{image:"poster-oww",title:"One Way Wellington",year:"2019",tech:["C#","Unity Engine"],route:"one-way-wellington"}),Object(i.jsx)(B,{image:"poster-racer",title:"Super Racer Go!",year:"2018",tech:["Unreal Engine"],route:"super-racer-go"})]})};var R=function(){return Object(i.jsxs)("div",{className:"section",children:[Object(i.jsxs)("div",{className:"projects",children:[Object(i.jsx)("h3",{children:"Major Projects"}),Object(i.jsx)(Y,{cardType:"major"})]}),Object(i.jsxs)("div",{className:"projects",children:[Object(i.jsx)("h3",{children:"Interest Projects"}),Object(i.jsx)(G,{cardType:"interest"})]})]})};var U=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(D,{}),Object(i.jsx)("div",{className:"section__wrapper section__wrapper--dark",children:Object(i.jsx)(R,{})}),Object(i.jsx)("div",{className:"about__fixed-bg",children:Object(i.jsx)("div",{className:"section__wrapper section__wrapper--blur",children:Object(i.jsx)(o,{})})}),Object(i.jsx)(j,{}),Object(i.jsx)(h,{})]})};a(32);var H=function(){var e=[Object(i.jsx)("div",{className:"mm-title__wrapper",children:Object(i.jsx)("h1",{className:"mm-title",children:"Midnight Mysteries"})})];return Object(i.jsxs)("div",{className:"mm",children:[Object(i.jsx)("div",{className:"project__background project__background--mm"}),Object(i.jsx)(O,{content:e,initialZ:-200,zIndex:-1}),Object(i.jsxs)("div",{className:"project__content",children:[Object(i.jsx)("div",{className:"project-card__outer project-card__outer--mm",children:Object(i.jsxs)("div",{className:"project-card",children:[Object(i.jsx)("h3",{className:"mm-card__title",children:"Who Done It?"}),Object(i.jsx)("p",{className:"add-break",children:"Midnight Mysteries is a battle of deception for four or more players. Avoid elimination each round while taking out the opposition to win this game!"}),Object(i.jsxs)("p",{children:["The game is played by two teams: the ",Object(i.jsx)("span",{className:"mafia",children:"Mafia"})," and the ",Object(i.jsx)("span",{className:"innocent",children:"Innocent"}),". The objective of the game is for the Mafia to \u201ckill off\u201d the Innocent until they are the majority, or for the Innocent to collectively vote off the entire Mafia."]})]})}),Object(i.jsx)("div",{className:"project-card__outer project-card__outer--mm",children:Object(i.jsxs)("div",{className:"project-card",children:[Object(i.jsx)("h3",{className:"mm-card__title",children:"My Involvement"}),Object(i.jsx)("p",{className:"add-break",children:"Midnight Mysteries was developed by an eight-person team within the span of one week. This was our final project while studying at Enspiral Dev Academy, and the completed product was presented at our graduation."}),Object(i.jsx)("img",{className:"project-image add-break",src:"./images/mm-present-1.jpg",alt:"Louis Earl presenting Midnight Mysteries at his graduation."}),Object(i.jsxs)("div",{className:"grid__2-3",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"add-break",children:"As the Product Owner of Midnight Mysteries, I was responsible for the overall vision and direction of the project - to ensure the whole team was working on the same page."}),Object(i.jsx)("p",{className:"add-break",children:"My role evolved into a Team Lead position during development, where I regularly checked-in across the team to establish and assist with any blocks or needs."}),Object(i.jsx)("p",{className:"add-break",children:"I maintained the team Kanban Board between daily sprints. This involved breaking up big tasks into a series of smaller 'cards'. Team members could then self-allocate tasks using the cards, which prevented overlapping work and minimised Git merge conflicts."}),Object(i.jsx)("p",{children:"Because the team was well organised to follow an agile workflow, I could also spend time doing what I love, programming for games. With my previous programming experience, I was happy to offer technical assistance when requested by the team."})]}),Object(i.jsx)("img",{className:"project-image",src:"./images/mm-present-2.jpg",alt:"Louis Earl laughing with his team."})]})]})}),Object(i.jsx)("div",{className:"project-card__outer project-card__outer--mm",children:Object(i.jsxs)("div",{className:"project-card",children:[Object(i.jsx)("h3",{className:"mm-card__title",children:"The Game"}),Object(i.jsx)("p",{children:"Midnight Mysteries is currently live:"}),Object(i.jsx)("a",{href:"https://midnight-mysteries.herokuapp.com/",children:Object(i.jsx)("button",{className:"mm-button",children:"Check It Out!"})})]})})]}),Object(i.jsx)(j,{extraStyle:"contact--mm"})]})};var Z=function(e){var t=e.title,a=e.message;return Object(i.jsx)("div",{className:"modal__wrapper",children:Object(i.jsxs)("div",{className:"modal",children:[Object(i.jsx)("h2",{children:t}),Object(i.jsx)("p",{children:a}),Object(i.jsx)("div",{className:"modal__button",children:Object(i.jsx)(d,{image:"icon-home",label:"Home Page",link:"/"})})]})})};var J=function(){return Object(i.jsx)(Z,{title:"404 - Page not found",message:"Dang, that's a shame."})};var V=function(){return Object(i.jsx)(Z,{title:"Under Construction",message:"Exciting things to show off soon!"})};a(33),a(34);var q=function(){var e=[Object(i.jsx)("img",{className:"oww-logo",src:"./images/oww-logo.svg",alt:"The logo for One Way Wellington."})];return Object(i.jsxs)("div",{className:"oww",children:[Object(i.jsx)("div",{className:"starfield__wrapper"}),Object(i.jsx)("div",{className:"project__background project__background--oww"}),Object(i.jsx)(O,{content:e,initialZ:-200,zIndex:-1}),Object(i.jsxs)("div",{className:"project__content",children:[Object(i.jsx)("div",{className:"project-card__outer project-card__outer--oww",children:Object(i.jsxs)("div",{className:"project-card project-card--oww",children:[Object(i.jsx)("h3",{className:"oww-card__title",children:"In A Galaxy, Not So Far Away..."}),Object(i.jsx)("p",{className:"add-break",children:"Planet Wellington calls out to the galaxy in desperate need for artists - the world can only move forward with help from these creative thinkers! One Way Wellington is a 2D spaceship building/management game about transporting creative talent across the Milky Way to the \u2018Coolest Little Capital\u2019."}),Object(i.jsx)("img",{className:"project-image oww-image--end",src:"./images/oww-ship.jpg",alt:"A spaceship flying through space, filled with passengers."})]})}),Object(i.jsx)("div",{className:"project-card__outer project-card__outer--oww",children:Object(i.jsxs)("div",{className:"project-card project-card--oww",children:[Object(i.jsx)("h3",{className:"oww-card__title",children:"My Involvement"}),Object(i.jsxs)("div",{className:"grid__2-3",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"add-break",children:"As the Creator and Developer of One Way Wellington, I've been responsible for everything from ideation to production and release."}),Object(i.jsx)("p",{className:"add-break",children:"During the production phase, I lead a team of seven 2nd-year students. In groups, they successfully developed the User Interface, Character Design and 2D Assets."}),Object(i.jsx)("p",{className:"add-break",children:"This solo project has been an exciting venture because I\u2019ve pursued what I love, designing and programming video games, while taking the project through the entire production pipeline alongside Wellington-based client, WellingtonNZ."}),Object(i.jsx)("p",{children:"One Way Wellington was presented at the Massey Exposure Exhibition, November 2019."})]}),Object(i.jsx)("img",{className:"exposure-image",src:"./images/exposure.jpg",alt:"Louis Earl standing in front of a One Way Wellington poster."})]})]})}),Object(i.jsx)("div",{className:"project-card__outer project-card__outer--oww",children:Object(i.jsx)("div",{className:"project-card project-card--oww",children:Object(i.jsx)("iframe",{className:"responsive-iframe",src:"https://www.youtube-nocookie.com/embed/yEqYl7gQWyg?rel=0&fs=0&loop=1&modestbranding=1",title:"YouTube video player",frameBorder:"0"})})}),Object(i.jsx)("div",{className:"project-card__outer project-card__outer--oww",children:Object(i.jsxs)("div",{className:"project-card project-card--oww",children:[Object(i.jsx)("h3",{className:"oww-card__title",children:"The Game"}),Object(i.jsx)("h4",{children:"Build Your Ship"}),Object(i.jsx)("p",{className:"add-break",children:"In One Way Wellington, your first task is to construct a spaceship. Lay down the ship plans, then hire advanced builder robots to build them."}),Object(i.jsx)("h4",{children:"Travel The Galaxy"}),Object(i.jsx)("p",{className:"add-break",children:"Once your ship ticks all the boxes, it's time to set sail. Using the map, draw a path between planets en-route to Planet Wellington. You can travel as far across the galaxy as you have fuel."}),Object(i.jsx)("h4",{children:"Collect Passengers"}),Object(i.jsx)("p",{className:"add-break",children:"As you arrive at each planet station, select passengers to board onto your ship. Be careful not to accommodate more passengers than you have the oxygen supplies for."}),Object(i.jsx)("p",{className:"add-break",children:"You need to care for your passengers to keep them happy. Provide beds, bathrooms and cafes to tend to their basic needs."}),Object(i.jsx)("img",{className:"project-image oww-image--break",src:"./images/oww-game.jpg",alt:"Build your ship, travel the galaxy and collect passengers in One Way Wellington."})]})})]}),Object(i.jsx)(j,{extraStyle:"contact--oww"})]})};var K=function(){return Object(i.jsxs)(n.c,{children:[Object(i.jsx)(n.a,{exact:!0,path:"/",component:U}),Object(i.jsx)(n.a,{exact:!0,path:"/midnight-mysteries",component:H}),Object(i.jsx)(n.a,{exact:!0,path:"/one-way-wellington",component:q}),Object(i.jsx)(n.a,{exact:!0,path:"/super-racer-go",component:V}),Object(i.jsx)(n.a,{exact:!0,path:"/portfolio",component:V}),Object(i.jsx)(n.a,{exact:!0,path:"/research",component:V}),Object(i.jsx)(n.a,{component:J})]})};r.a.render(Object(i.jsx)(F.a,{children:Object(i.jsx)(K,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.0b402f6e.chunk.js.map