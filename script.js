// For Navigation Bar (Header of the webpage)

// "#menu-icon" selects all the elements with the same id
// ".navbar" selects the elements with the same class
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// This line is called "event selector" and control "click events" for selected class and id
menuIcon.onclick = () => {
  // This line is for the "menu icon" when website is open on mobile phone(screen-size)
  menuIcon.classList.toggle("bx-x");
  // This line is for highlighted name of the respected page in the header.
  navbar.classList.toggle("active");
};

// It controls the scroll events and show respective part of page when scrolled to that part
// Once again first selecting the targeted classes, "section, header nav and a" in this case
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Here is another "event selector" that controll "scroll events"
window.onscroll = () => {
  // "forEach means "each section element", there is section element for every page design"
  sections.forEach((sec) => {
    // Below 4 lines of code measures the position of webpage(scroll position)
    let top = window.scrollY;
    let offset = sec.offsetTop - 120;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    // Calculate the positions and display page accordingly
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
    // if want to use animation that repeats on scroll use this
    else {
      sec.classList.remove("show-animate");
    }
  });

  // sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  let footer = document.querySelector("footer");

  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};
