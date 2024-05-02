
 /* footer date */
let date = new Date();
let currentYear = document.getElementById("years").innerHTML = date.getFullYear();

/* scrool to top */
 let myButton = document.getElementById("myBtn");

        window.onscroll = function(){srcollTop()}

        function srcollTop(){
            if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
                myBtn.style.display = "block";
            }else {
                myButton.style.display = "none";
            }
        }

        function backTop(){
            document.body.srcoolTop = 0;
            document.documentElement.scrollTop = 0;
        }
/* script for small header when the screen size is below 700px*/ 

        const contentElem = document.getElementById("sm-h-elem");
           const modal = document.getElementById("openmodal");

           modal.addEventListener("click", showHide)

           function showHide(e){
              if(contentElem.style.display == "block"){
                contentElem.style.display = "none"
              }else{
                contentElem.style.display = "block"
              }
           }

           function myFunc(e){
            e.classList.toggle("change")
           }





     /*Script for pagination */