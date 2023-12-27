window.addEventListener("scroll", function () {
  var floatingMenu = document.querySelector("#floating-menu");
  var floatingNav = document.querySelector("#floating-nav");

  if (window.scrollY > 300) {
    floatingMenu.classList.add("sticky");
    floatingMenu.classList.remove("non-sticky");

    floatingNav.classList.add("top-0");
  } else {
    floatingMenu.classList.add("non-sticky");
    floatingMenu.classList.remove("sticky");

    floatingNav.classList.remove("top-0");
  }
});

menuToggle = document.querySelector(".menuToggle");
header = document.querySelector("header");

menuToggle.addEventListener("click", function () {
  header.classList.toggle("active");
});



document.addEventListener("DOMContentLoaded", function () {
  // Get the hero_img element
  const heroImg = document.getElementById("heroImg");


  setTimeout(() => {
    heroImg.classList.add("slide-in");
  }, 500); // 500 milliseconds delay



});


const textElement = document.getElementById("typed-text");
const text = textElement.textContent;
textElement.textContent = "";

let i = 0;
function typeText() {
  if (i < text.length) {
    textElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeText, 50);
  }
}

typeText(); // Start the typing animation




document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let leftChild = document.querySelector(".left-child");
    let rightChild = document.querySelector(".right-child");

    // Adjust the values (e.g., 200) based on when you want the animation to start
    if (scrollPosition > 200 && scrollPosition < 2000) {
      leftChild.style.opacity = "1";
      leftChild.style.transform = "translateX(0)";
      rightChild.style.opacity = "1";
      rightChild.style.transform = "translateX(0)";
    }
    else{
      leftChild.style.opacity = "0";
      leftChild.style.transform = "translateX(-200px)";
      rightChild.style.opacity = "0";
      rightChild.style.transform = "translateX(200px)";
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let leftChild = document.querySelector(".left-child1");
    let rightChild = document.querySelector(".right-child2");

    // Adjust the values (e.g., 200) based on when you want the animation to start
    if (scrollPosition > 1500 && scrollPosition < 3000) {
      leftChild.style.opacity = "1";
      leftChild.style.transform = "translateX(0)";
      rightChild.style.opacity = "1";
      rightChild.style.transform = "translateX(0)";
    }
    else{
      leftChild.style.opacity = "0";
      leftChild.style.transform = "translateY(-200px)";
      rightChild.style.opacity = "0";
      rightChild.style.transform = "translateY(200px)";
    }
  });
});