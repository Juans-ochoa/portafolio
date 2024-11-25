"use strict";

const doc = window.document;

(() => {
  const $slider = doc.querySelector("section.slider-track");
  const $imagesSlider = doc.querySelectorAll(".slider-image");

  const $iconLeftArrow = doc.querySelector("i.left-icon");
  const $iconRightArrow = doc.querySelector("i.right-icon");

  const scrollWidth = $slider.scrollWidth - $slider.clientWidth;
  const firstImageWidth = $imagesSlider[0].clientWidth + 14;

  let isDragStart = false,
    prevPageX,
    prevScrollLeft,
    positionDif;

  const showIconsSlider = () => {
    $iconLeftArrow.style.display = $slider.scrollLeft == 0 ? "none" : "block";
    $iconRightArrow.style.display =
      $slider.scrollLeft === scrollWidth ? "none" : "block";
  };

  const autoSlider = () => {
    const firstImageWidth = $imagesSlider[0].clientWidth + 14;

    positionDif = Math.abs(positionDif);
    let valueDifference = firstImageWidth - positionDif;

    if ($slider.scrollLeft > prevScrollLeft) {
      return ($slider.scrollLeft +=
        positionDif > firstImageWidth / 3 ? valueDifference : -positionDif);
    }

    $slider.scrollLeft -=
      positionDif > firstImageWidth / 3 ? valueDifference : -positionDif;
  };

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = $slider.scrollLeft;
  };

  const dragStop = (e) => {
    isDragStart = false;
    $slider.classList.remove("dragging");
  };

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    $slider.classList.add("dragging");
    let positionDif = (e.pageX || e.touches[0].pageX) - prevPageX;
    $slider.scrollLeft = prevScrollLeft - positionDif;
  };

  $slider.addEventListener("mousedown", dragStart);
  $slider.addEventListener("touchstart", dragStart);

  $slider.addEventListener("mousemove", dragging);
  $slider.addEventListener("touchmove", dragging);

  $slider.addEventListener("mouseup", dragStop);
  $slider.addEventListener("mouseleave", dragStop);
  $slider.addEventListener("touchend", dragStop);

  doc.addEventListener("click", (e) => {
    if (e.target.matches("i.right-icon") || e.target.matches("i.left-icon")) {
      $slider.scrollLeft +=
        e.target.classList.value === "left-icon"
          ? -firstImageWidth
          : firstImageWidth;

      setTimeout(() => {
        showIconsSlider();
      }, 60);
    }
  });

  // $slider.appendChild(firstClone);
  // $slider.insertBefore(lastClone);
})();
