document.addEventListener("DOMContentLoaded",function(){
  var focusables=document.querySelectorAll("a,button,input,select,textarea");
  focusables.forEach(function(el){el.addEventListener("keydown",function(e){if(e.key==="Enter"&&el.tagName==="A"){e.preventDefault()}})})
})