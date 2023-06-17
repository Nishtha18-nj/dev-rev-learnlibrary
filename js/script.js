window.addEventListener("load", () =>{
 document.querySelector(".main").classList.remove("hidden");
 document.querySelector(".home-section").classList.add("active");
//  page loader 
 document.querySelector(".page-loader").classList.add("fade-out");
 setTimeout(() =>{
  document.querySelector(".page-loader").style.display = "none";
 },600);
});
//toggle navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () =>{
   hideSection();
   toggleNavbar();
   document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

// active section


 document.addEventListener("click", (e) =>{
   if(e.target.classList.contains("link-item") && e.target.hash !== "")
   {
    //activate the overlay to prevent multiple clicks 
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
     if(e.target.classList.contains("nav-item")){
       toggleNavbar();
     }
     else{
       hideSection();
       document.body.classList.add("hide-scrolling");
     }
     setTimeout(() =>{
    document.querySelector("section.active").classList.remove("active", "fade-out");
    document.querySelector(e.target.hash).classList.add("active");
    window.scrollTo(0,0);
    document.body.classList.remove("hide-scrolling");
    navToggler.classList.remove("hide");
    document.querySelector(".overlay").classList.remove("active");
     },500);
   }
 });

/*------ about tabs --------*/

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");
tabsContainer.addEventListener("click", (e) =>{
    
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active") ){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        console.log(target);
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
        
    }

    }
);
// library item popup 
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")){
       toggleLibraryPopup();
       document.querySelector(".library-popup").scrollTo(0,0);
       libraryItemDetails(e.target.parentElement);

    }
})
function toggleLibraryPopup(){
    document.querySelector(".library-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", toggleLibraryPopup);

// hide popup when clicking outside of it 
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        toggleLibraryPopup();
    }
});

function libraryItemDetails(libraryItem){
  document.querySelector(" .pp-thumbnail img").src =
 libraryItem.querySelector(".library-item-thumbnail img").src;

  document.querySelector(".pp-header h3").innerHTML=
  libraryItem.querySelector(".library-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML=
  libraryItem.querySelector(".library-item-details").innerHTML;
}

// Feth Books


//dropdown 
// Add click event listener to toggle the dropdown menu

