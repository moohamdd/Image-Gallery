window.onload = function () {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slider-item");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  // Previous and Next Button Functionality
  document.querySelector('.prev-btn').addEventListener('click', () => {
    slideIndex -= 2;
    showSlides();
  });

  document.querySelector('.next-btn').addEventListener('click', () => {
    showSlides();
  });
};
