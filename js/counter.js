let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration= Math.floor(interval/ endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue ;
        if (startValue == endValue )
        {
            clearInterval(counter);
        }
    }, duration);
});

document.addEventListener("click", function (event) {
    const dropdownButton = document.getElementById("filtersDropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");
  
    if (event.target === dropdownButton) {
      dropdownMenu.classList.toggle("show");
    } else {
      dropdownMenu.classList.remove("show");
    }
  });


// showing all the books details


function findBook (bookname) {
    fetch(`https://openlibrary.org/search.json?q=${bookname}`)
    .then(response => response.json())
    .then(data => {
        let allbooks = data.docs
        let innerHtml = ""
        for(var i = 0 ; i < 9 ; i++ )
        {
            let image ; 
            allbooks[i]["isbn"] ? 
            image = "http://covers.openlibrary.org/b/isbn/"+allbooks[i]["isbn"][0]+"-M.jpg" : 
            image = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
            let book =  `<div class="library-item">
            
            <div class="library-item-thumbnail">
                <img src=${image} alt="library item thumb">
            </div>
            <h3 class="library-item-title">${allbooks[i].title}</h3>
            <p>Author: ${allbooks[i]["author_name"]}</p>
            <p>Publishing Year:   ${allbooks[i]["publish_year"][0]} </p>
            


            <button class="btn view-project-btn" type="button">Ratings: ${allbooks[i]["ratings_count"]}</button>
           

        </div>`
           innerHtml+=book
     
        }
        document.getElementById("booksdiv").innerHTML = innerHtml
    })
}

findBook("harry potter")


document.getElementById("submit-button").addEventListener(
    "click",
    function ()
    {
        let bookname = document.getElementById("book-name").value
        findBook(bookname)
    }
)

document.getElementById("move-to-sign")
.addEventListener("click",function ()
{
    document.getElementById("signupDiv").style.display = "none"
    document.getElementById("loginDinv").style.display = "block"
})


document.getElementById("move-to-signup")
.addEventListener("click",function ()
{
    document.getElementById("signupDiv").style.display = "block"
    document.getElementById("loginDinv").style.display = "none"
})