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

    

   

}