let links = document.querySelectorAll("nav a")
let panels = document.querySelectorAll(".panel")

function showSection(sectionid){
panels.forEach(function(panel){
    panel.classList.remove("active")
})
document.getElementById(sectionid).classList.add("active")
links.forEach(function(link){
    link.classList.remove("selected")
})
document.querySelector(
    'nav a [href="#' + sectionid + '"]'
).classList.add("selected")
}

links.forEach(function(link){
    link.addEventListener("click", function(event){
        event.preventDefault()
        let sectionid = link.getAttribute("href").substring(1)
        showSection(sectionid)
    })
})