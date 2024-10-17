// console.log ('ok')



// scroll header
const header = document.querySelector(".header")
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    if (scrollY > 0) {
      header.classList.add("header-sticky")
      header.classList.remove("lg:bg-transparent")
      header.classList.add("shadow-3xl")
    } else {
      header.classList.remove("header-sticky")
      header.classList.add("lg:bg-transparent")
      header.classList.remove("shadow-3xl")
    }
  })