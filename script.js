

const search = document.getElementById("search-icon")

search.addEventListener("click", ()=>{
    window.location.href = "https://www.forbes.com/search/"
})

function newPage(){
    window.open("https://account.forbes.com/membership?eventSource=header&redirect=https://www.forbes.com/profile/elon-musk/", "_blank")
}