const f=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};f();const s=document.querySelector("#file"),a=document.querySelector("#canvas"),m=document.querySelector(".down_list");let u="",l="";s.onchange=null;s.onchange=()=>{h()};const g=()=>new Promise(i=>{const n=s.files[0];l=s.files[0].name.split(".")[0];const r=new FileReader;r.onload=function(c){const e=c.target.result;i(e)},r.readAsDataURL(n)}),p=i=>{const n=a.getContext("2d"),r=a.width,c=a.height,e=new Image;e.src=i,e.onload=()=>{n.drawImage(e,0,0,r,c),a.toBlob(t=>{const o=document.createElement("a"),d=document.createElement("li");o.textContent=l,d.appendChild(o),m.appendChild(d),o.download=l+".ico",o.href=window.URL.createObjectURL(t)},"image/vnd.microsoft.icon")}},h=async()=>{u=await g(),p(u)};