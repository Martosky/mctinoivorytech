let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}


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


        const photoArray = [
          {
            id: 1,
            photoLink: ""
          }
        ]


/* display photos elem */

const photoArr = [
  {
    id: 1,
    className: "phone--image",
    directory: "agent.png",
    desription: "gps tracking system"
  },
   {
    id: 2,
    className: ""
   }
]