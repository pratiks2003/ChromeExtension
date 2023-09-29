let links = []
let buttonel = document.getElementById("save-btn")
let inputel = document.getElementById("input-el")
let listel = document.getElementById("ulel")
let deleteel = document.getElementById("delete-btn")
let tabbtn = document.getElementById("tab-btn")

let linksFromLS = JSON.parse(localStorage.getItem("links"))
// let urlsFromLS = JSON.parse(localStorage.getItem("links"))
// console.log(linksFromLS)

if (linksFromLS) {
    links = linksFromLS
    // console.log(links)

    renderLeads(links)

}



tabbtn.addEventListener("click",function(){
    chrome.tabs.query({ active: true ,currentWindow: true}, function(tabs){
        // console.log(tabs[0].url);/
        links.push(tabs[0].url)
        localStorage.setItem("links", JSON.stringify(links))
        renderLeads(links)
        // console.log(tabs[0].url)
      
    });
   

})

deleteel.addEventListener("dblclick", function () {

    console.log(" deleted")
    localStorage.clear()
    links = []
    renderLeads(links)

})

buttonel.addEventListener("click", function () {
    links.push(inputel.value)
    inputel.value = ""

    localStorage.setItem("links", JSON.stringify(links))
    // localStorage.clear()
    renderLeads(links)
    // console.log(localStorage.getItem("links"))
}
)


function renderLeads(mylinks) {
    let alllinks = ""
    for (let i = 0; i < mylinks.length; i++) {
        alllinks += `
        <li>
            <a target='_blank' href='${mylinks[i]}'>
                ${mylinks[i]}
             </a>
        </li>
                            `

    }
    console.log("all links" + links)
    listel.innerHTML = alllinks
}
