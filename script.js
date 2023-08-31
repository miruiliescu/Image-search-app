const accessKey = "WIYV0WEKkyiSC9YxJjFS4XgEG_x92Oi_1l0tVo8LRBA"

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")  //query selector with class name "." before 
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;

async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json()

    //convert json into a variable

    const results = data.results   //store results we are getting from data

    if (page === 1) {
        searchResults.innerHTML = " "  
    }

    //map to show images/text one by one

    results.map((map) =>{           //push data in template, generate new boxes
        const imageWrapper = document.createElement("div"); //container to hold images
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_descriptions;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageWrapper.appendChild(imageWrapper);
    });  
   page++
   if(page > 1) {
    showMore.style.display = "block";
   }

}