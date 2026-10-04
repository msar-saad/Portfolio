
(function(){
  var r=document.documentElement,lang="en";
  try{lang=localStorage.getItem("lang")||((navigator.language||"").slice(0,2)==="fr"?"fr":"en");var t=localStorage.getItem("theme");if(t)r.dataset.theme=t}catch(e){}
  var lb=document.getElementById("lang");
  function setLang(l){lang=l;r.dataset.lang=l;r.lang=l;lb.textContent=l==="en"?"FR":"EN";try{localStorage.setItem("lang",l)}catch(e){}}
  lb.onclick=function(){setLang(lang==="en"?"fr":"en")};
  setLang(lang);
  document.getElementById("theme").onclick=function(){
    var dark=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;
    r.dataset.theme=dark?"light":"dark";try{localStorage.setItem("theme",r.dataset.theme)}catch(e){}
  };
})();
