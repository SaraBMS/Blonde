// Shuffle work

document.querySelectorAll(".our-work ul li").forEach(li => {

    li.addEventListener("click", (element) =>
    {   
        element.target.parentElement.querySelectorAll(".active").forEach(event => {
            // Remove active class 
            event.classList.remove("active")
           });
           //Add classlist to target element li
           element.target.classList.add("active");

           // Set the opacity based on the selected class
           document.querySelectorAll(".box img").forEach(img => {
               if( element.target.dataset.class === "all" || img.classList.contains(element.target.dataset.class)) {
                   img.style.opacity = 1;
               } else {
                   img.style.opacity = 0.1;
               }
           });
       });
   });





