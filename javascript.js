
 
  // const close = document.querySelector(".nav i");


  // icon.addEventListener("click", () => list.classList.add("active"));
  // close.addEventListener("click", () => list.classList.remove("active"));






















  const icon = document.querySelector(".menu-bar i");
   const list = document.querySelector(".nav");
   const close = document.querySelector(".nav li a");

   icon.onclick = () => {
        icon.classList.toggle('fa-xmark');
        list.classList.toggle('active');
       
    }
    
 
  
  
  
  
  
  
  
   