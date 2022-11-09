const btnTechs = document.getElementById("btn-techs")
const btnLinks = document.getElementById("btn-links")
const techs = document.getElementById("techs")
const links = document.getElementById("links")

btnTechs.addEventListener("click", () => {
    if (techs.classList.contains("show")) {
        techs.classList.remove("show")
    } else {
        techs.classList.add("show")
    }
})

btnLinks.addEventListener("click", () => {
    if (links.classList.contains("show")) {
        links.classList.remove("show")
    } else {
        links.classList.add("show")
    }
})