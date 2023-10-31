//  animation onload
window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 6000);
};

// toggle icon navbar//
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let menuIconBtn = document.querySelector(".menu-icon-btn");

menuIcon.onclick = () => {
  menuIconBtn.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

let btnViewMore = document.querySelector(".projects .btn-box.btns");
let btnReadMore = document.querySelector(".about .btn-box.btns");
let btnViewLess = document.querySelector(".projects .btn-box.btns.hidden");
let btnReadLess = document.querySelector(".about .btn-box.btns.hidden");
let readMore = document.querySelector(".about-content p .read-more.hidden");
let viewMore = document.querySelectorAll(
  ".projects .projects-row .project.view-more.hidden"
);

// display more projects
btnViewMore.addEventListener("click", () => {
  for (let i = 0; i < viewMore.length; i++) {
    viewMore[i].classList.remove("hidden");
  }
  btnViewMore.classList.add("hidden");
  btnViewLess.classList.remove("hidden");
});

// display less projects
btnViewLess.addEventListener("click", () => {
  for (let i = 0; i < viewMore.length; i++) {
    viewMore[i].classList.add("hidden");
  }
  btnViewMore.classList.remove("hidden");
  btnViewLess.classList.add("hidden");
});

// read more about me
btnReadMore.addEventListener("click", () => {
  readMore.classList.remove("hidden");
  btnReadMore.classList.add("hidden");
  btnReadLess.classList.remove("hidden");
});

// read less about me
btnReadLess.addEventListener("click", () => {
  readMore.classList.add("hidden");
  btnReadMore.classList.remove("hidden");
  btnReadLess.classList.add("hidden");
});

// scroll sections//
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      // active sections for animation on scroll
      sec.classList.add("show-animate");
    }
    //animation repeats scroll
    else {
      sec.classList.remove("show-animate");
    }
  });
  // sticky header//
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)

  menuIconBtn.classList.remove("fa-x");
  navbar.classList.remove("active");
  //animate footer on scroll
  let footer = document.querySelector("footer");

  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

// set footer date
let date = (document.querySelector(".date").textContent =
  new Date().getFullYear());

// promises for contact message
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwkU-qWfktmQeLQpR8gz4fdOtYu4cJlyOSW_JrIrKdBUqwS-qLkB0E_mX0gUsBK1OjQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.querySelector(".msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      document.querySelector(".contact .submit-msg.hidden").style.display =
        "block";
      setTimeout(() => {
        alert(
          "Thank you for visiting my website and taking the time to get to know me. I look forward to the possibility of collaborating with you and making the web🌐 a more engaging and functional place🤝."
        );
        document.querySelector(".contact .submit-msg.hidden").style.display =
          "";
      }, 4000);
      form.reset();
    })
    .catch((error) => {
      setTimeout(() => {
        alert(
          "Thank you for visiting my website and taking the time to get to know me. I look forward to the possibility of collaborating with you and making the web🌐 a more engaging and functional place🤝."
        );
      }, 4000);
      form.reset();
    });
});
