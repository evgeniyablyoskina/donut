document.querySelector(".to-top").addEventListener("click",(()=>{window.scrollTo(0,0)}));const e=document.querySelector(".to-top");window.onscroll=()=>{window.scrollY>700?e.classList.remove("to-top--hide"):window.scrollY<700&&e.classList.add("to-top--hide")};const o=document.querySelectorAll(".form__contact, .registration-form"),t=document.querySelector(".pop-up");o.forEach((e=>{e.addEventListener("submit",(o=>{if(o.preventDefault(),".form__contact"===e){}else{}t.innerHTML=text,t.classList.remove("pop-up--hide"),setTimeout((()=>{t.classList.add("pop-up--hide")}),2e3)}))}));
//# sourceMappingURL=index.a32dc952.js.map
