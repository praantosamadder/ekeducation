let slideMenu = document.getElementById("slide-menu")

function princetonLogo_OnClick() {
    location.href = "https://www.princeton.edu"
}

function showSlideMenu() {
    slideMenu.classList.remove("slide-menu-out")
    slideMenu.classList.add("slide-menu-in")
    slideMenu.classList.remove("slide-menu-no-width")
    slideMenu.classList.add("slide-menu-full-width")

    // Make document unscrollable when slide-menu is in view
    document.documentElement.style.position = "fixed"
}

function hideSlideMenu() {
    slideMenu.classList.remove("slide-menu-in")
    slideMenu.classList.add("slide-menu-out"); article.classList.remove("article-cap-height")

    slideMenu.classList.add("slide-menu-no-width")
    slideMenu.classList.remove("slide-menu-full-width")

    
    // Remove fixed position when slide-menu is slid away from view
    document.documentElement.style.position = "inherit"

}

