import{S as P,i as S,s as q,e as E,a as m,h as C,u as G,d as _,b as p,c as b,f as o,g as B,j as r,k as g,l as T,n as L,r as F,G as J,t as h,m as K}from"./vendor.5bf2138d.js";const U=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}};U();function I(a){let t,s,l={ctx:a,current:null,token:null,hasCatch:!0,pending:Q,then:D,catch:z,value:7,error:8};return C(s=a[2],l),{c(){t=E(),l.block.c()},m(e,n){m(e,t,n),l.block.m(e,l.anchor=n),l.mount=()=>t.parentNode,l.anchor=t},p(e,n){a=e,l.ctx=a,n&4&&s!==(s=a[2])&&C(s,l)||G(l,a,n)},d(e){e&&_(t),l.block.d(e),l.token=null,l=null}}}function z(a){let t,s=a[8]+"",l;return{c(){t=h("a! ilo li pakala! "),l=h(s)},m(e,n){m(e,t,n),m(e,l,n)},p(e,n){n&4&&s!==(s=e[8]+"")&&K(l,s)},d(e){e&&_(t),e&&_(l)}}}function D(a){let t,s,l;return{c(){t=h("ken sina li lon a! "),s=p("br"),l=h(`

          o toki e ni tawa jan Jan!`)},m(e,n){m(e,t,n),m(e,s,n),m(e,l,n)},p:L,d(e){e&&_(t),e&&_(s),e&&_(l)}}}function Q(a){let t;return{c(){t=h("mi toki kan ilo...")},m(s,l){m(s,t,l)},p:L,d(s){s&&_(t)}}}function R(a){let t,s,l,e,n,f,c,y,v,A,d,H,w,N,j,M,O,i=a[2]&&I(a);return{c(){t=p("main"),s=p("p"),s.innerHTML=`<span class="linja svelte-1rocwnj">toki</span> 
    <span class="translucent svelte-1rocwnj">toki</span>`,l=b(),e=p("div"),n=p("label"),n.innerHTML=`<span aria-hidden="true" class="linja svelte-1rocwnj">nasin tawa poki-lipu sina</span> 
      <span class="translucent svelte-1rocwnj">nasin tawa poki lipu sina</span>`,f=b(),c=p("input"),y=b(),v=p("label"),v.innerHTML=`<span aria-hidden="true" class="linja svelte-1rocwnj">nimi+len</span> 
      <span class="translucent svelte-1rocwnj">nimi len</span>`,A=b(),d=p("input"),H=b(),w=p("button"),w.innerHTML=`<span aria-hidden="true" class="linja svelte-1rocwnj">o lon</span> 
      <span class="translucent svelte-1rocwnj">o lon</span>`,N=b(),j=p("p"),i&&i.c(),o(s,"class","svelte-1rocwnj"),o(n,"for","email"),o(n,"class","svelte-1rocwnj"),o(c,"id","email"),o(c,"class","mb-2 svelte-1rocwnj"),o(c,"placeholder","nimi@tan.com"),o(v,"for","password"),o(v,"class","svelte-1rocwnj"),o(d,"id","password"),o(d,"class","mb-2 svelte-1rocwnj"),B(w,"justify-self","flex-end"),o(w,"class","svelte-1rocwnj"),o(j,"class","svelte-1rocwnj"),o(e,"class","col svelte-1rocwnj"),o(t,"class","svelte-1rocwnj")},m(u,k){m(u,t,k),r(t,s),r(t,l),r(t,e),r(e,n),r(e,f),r(e,c),g(c,a[0]),r(e,y),r(e,v),r(e,A),r(e,d),g(d,a[1]),r(e,H),r(e,w),r(e,N),r(e,j),i&&i.m(j,null),M||(O=[T(c,"input",a[4]),T(d,"input",a[5]),T(w,"click",a[3])],M=!0)},p(u,[k]){k&1&&c.value!==u[0]&&g(c,u[0]),k&2&&d.value!==u[1]&&g(d,u[1]),u[2]?i?i.p(u,k):(i=I(u),i.c(),i.m(j,null)):i&&(i.d(1),i=null)},i:L,o:L,d(u){u&&_(t),i&&i.d(),M=!1,F(O)}}}function V(a,t,s){const l=new J({APIUrl:"https://auth.lipukule.org/identity",audience:"",setCookie:!0});let e="",n="",f=null;function c(){s(2,f=l.signup(e,n))}function y(){e=this.value,s(0,e)}function v(){n=this.value,s(1,n)}return[e,n,f,c,y,v]}class W extends P{constructor(t){super();S(this,t,V,R,q,{})}}new W({target:document.getElementById("app")});
