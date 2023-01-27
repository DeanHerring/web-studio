// JS code...
const slides = document.querySelectorAll(".ol__slide");
const slidesWrapper = document.querySelector(".ol__wrapper");

const dotsWrapper = document.querySelector(".ol__dots");
const dot = document.querySelectorAll(".ol__dot");

const images = document.querySelectorAll(".review__image");

const slidesLength = slides.length;

// Добавление data-атрибутов
slides.forEach((slide, index) => slide.setAttribute("data-slide", index + 1));

images.forEach((image, index) => image.setAttribute("data-image", index + 1));

// Вычисление общей длинны слайдера
slidesWrapper.style.width = `${slidesLength * 100}%`;
// slides.forEach((slide) => (slide.style.width = `${100 / slidesLength}%`));

// Вычисления количества страниц слайдера
for (let i = 1; i <= slidesLength; i++) {
  const cloneDot = dot[0].cloneNode(true);

  cloneDot.classList.remove("hidden");
  cloneDot.setAttribute("data-id", i);
  cloneDot.innerText = "";

  if (cloneDot.getAttribute("data-id") == 1) {
    cloneDot.classList.add("active");
  }

  dotsWrapper.appendChild(cloneDot);
}

const dots = [...dotsWrapper.children];

dots.shift();

dots.forEach((i) => {
  i.addEventListener("click", (e) => {
    const dotId = i.getAttribute("data-id");

    const nextSlide = slides[dotId - 1];
    const nextSlideId = nextSlide.getAttribute("data-slide");

    const activeSlide = [...slides].filter((slide) =>
      slide.classList.contains("active")
    );
    const activeSlideId = activeSlide[0].getAttribute("data-slide");

    const nextImage = images[dotId - 1];

    dots.forEach((a) => a.classList.remove("active"));
    images.forEach((image) => image.classList.remove("show"));

    i.classList.add("active");
    nextImage.classList.add("show");

    slidesWrapper.style.marginLeft = `-${(nextSlideId - 1) * 100}%`;
  });
});
