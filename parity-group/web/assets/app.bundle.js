(()=>{var e={123:()=>{window.innerHeight,window.scrollY,document.body.offsetHeight;let e=function(e){e.classList.add("active")},t=function(e){e.classList.remove("active")},n=function(n,a){a.style.maxHeight?function(e,n){t(e),n.style.maxHeight=null}(n,a):function(t,n){e(t),n.style.maxHeight=n.scrollHeight+"px"}(n,a)};Array.from(document.getElementsByClassName("program-entry")).forEach((e=>{e.addEventListener("click",(function(){let e=this.getElementsByClassName("program-entry-detail")[0];s(e),n(this,e)}))}));let a=Array.from(document.getElementsByClassName("season-toggle"));a.forEach((n=>{n.addEventListener("click",(function(){a.forEach((e=>{let n=e.getElementsByTagName("h2")[0];t(n)}));let n=this.getElementsByTagName("h2")[0];e(n),document.getElementById("season").className=this.id}))})),Array.from(document.getElementsByClassName("season-entry")).forEach(((e,t)=>{e.addEventListener("click",(function(){let e=this.getElementsByClassName("season-entry-detail")[0];s(e),n(this,e)}))})),Array.from(document.getElementsByClassName("schedule-entry")).forEach(((e,t)=>{e.addEventListener("click",(function(e){let t=this.getElementsByClassName("schedule-entry-detail")[0];s(t),n(this,t)}))}));let s=function(e){Array.from(e.getElementsByTagName("a")).forEach((e=>{e.addEventListener("click",(function(e){e.stopPropagation()}))}))},o=document.getElementsByClassName("toggle-nav"),r=document.getElementsByTagName("body")[0];Array.from(o).forEach((e=>{e.addEventListener("click",(function(e){r.classList.toggle("show-mobile-nav")}))}));let l=document.getElementsByClassName("live-now");Array.from(l).forEach((e=>{e.addEventListener("click",(function(e){e.stopPropagation(),window.location.href="/talks"}))}))}},t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(123)})()})();