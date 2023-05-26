// ! Menu

const nav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible")

  if (visiblity === "false") {
    nav.setAttribute("data-visible", true)
    navToggle.setAttribute("aria-expanded", true)
  } else {
    nav.setAttribute("data-visible", false)
    navToggle.setAttribute("aria-expanded", false)
  }
})

// ! slider/friedchicken

let imageArray = [
  "/assets/Images/fried-chicken.jpg",
  "/assets/Images/fried-chicken2.jpg",
  "/assets/Images/fried-chicken3.jpeg",
  "/assets/Images/fried-chicken4.jpg",
]

let currentIndex = 0

const nextBtn = document.querySelector("#nextBtn")
const prevBtn = document.querySelector("#prevBtn")
const currentImage = document.querySelector(".image_one")

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length
  updateImageDisplay()
})

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageArray.length
  updateImageDisplay()
})

function updateImageDisplay() {
  const currentImageURL = imageArray[currentIndex]
  currentImage.src = currentImageURL
}

// more js  in the index.html and about.html pages
