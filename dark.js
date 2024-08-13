document.addEventListener("DOMContentLoaded", () => {
      //DOM content was created//
                         
      //getting the necessary elements from DOM
      const $html_element = document.querySelector("html");
      const $button =    document.querySelector("button");                  


        $button.addEventListener( "click", () => {
        //toggles class between light theme and the dark theme
         $button.innerText = $html_element.classList.toggle("dark-theme") ? "change to light" : "change to dark";
          }


        
        }                     
                         
                         
                                         
                         
                         )
