let hamburgerButton = document.getElementById("hamburger-button")
let slideMenu = document.getElementById("slide-menu")
let article = document.getElementById("article")

let isNavBarHidden = true

hamburgerButton.onclick = () => {
    slideMenu.classList.remove("slide-menu-out")
    slideMenu.classList.add("slide-menu-in")
    setTimeout(function() {
        article.classList.add("article-cap-height")
    }, 200)

    // Make document unscrollable when slide-menu is in view
    document.documentElement.style.position = "fixed"
}

slideMenu.onclick = () => {
    slideMenu.classList.remove("slide-menu-in")
    slideMenu.classList.add("slide-menu-out"); article.classList.remove("article-cap-height")

    
    // Remove fixed position when slide-menu is slid away from view
    document.documentElement.style.position = "inherit"
}

