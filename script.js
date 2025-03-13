function loader() {
  return new Promise((resolve) => {
      setTimeout(() => {
          const loader = document.getElementById("loader");
          loader.classList.add("explosion");

          const dots = document.querySelectorAll("#loader div"); // Fix selector
          if (dots.length >= 3) { // Ensure at least 3 dots exist
              dots[0].style.setProperty("--x", "-80px");
              dots[0].style.setProperty("--y", "-80px");
              dots[1].style.setProperty("--x", "0px");
              dots[1].style.setProperty("--y", "0px");
              dots[2].style.setProperty("--x", "80px");
              dots[2].style.setProperty("--y", "-80px");
          }

          setTimeout(() => {
              const expBtn = document.getElementById("exploreButton");
              if (expBtn) {
                  expBtn.classList.add("show-button");
                  expBtn.style.display = "inline-block";
              }
              if (loader) {
                  loader.style.display = "none";
              }
              resolve();
          }, 600);
      }, 4000);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector(".main");
  if (main) {
      main.style.display = "none";
  }

  loader().then(() => {
      const exploreButton = document.getElementById("exploreButton");
      if (exploreButton) {
          exploreButton.addEventListener("click", () => {
              exploreButton.style.display = "none";
              if (main) {
                  main.style.display = "block";
              }

              // Ensure initLocomotiveScroll() exists
              if (typeof initLocomotiveScroll === "function") {
                  initLocomotiveScroll();
              }

              const cursor = document.querySelector(".cursor");
              const cursorBlur = document.querySelector(".cursor-blur");

              if (cursor && cursorBlur) {
                  document.addEventListener("mousemove", (event) => {
                      cursor.style.left = `${event.pageX - cursor.offsetWidth / 2}px`;
                      cursor.style.top = `${event.pageY - cursor.offsetHeight / 2}px`;
                      cursorBlur.style.left = `${event.pageX - cursorBlur.offsetWidth / 2}px`;
                      cursorBlur.style.top = `${event.pageY - cursorBlur.offsetHeight / 2}px`;
                  });
              }
          });
      }

      // Initialize Typed.js
      new Typed(".text", {
          strings: ["Frontend Developer", "Web Developer"],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true,
      });

      // GSAP Animation
      var tl = gsap.timeline();
      tl.from(".nav h1", { opacity: 0, x: -100, duration: 0.5, delay: 2 });
      tl.from(".nav-part2 a", { opacity: 0, y: -150, duration: 0.5, stagger: 0.18 }, "anim1");
      tl.from(".home-content h2", { x: -100, opacity: 0, duration: 0.5 }, "anim1");
      tl.from(".home-content h3", { x: -100, opacity: 0, duration: 0.5 }, "anim1");
      tl.from(".home-content h1", { opacity: 0, x: 100, duration: 0.6 }, "anim2");
      tl.from(".home-content p", { opacity: 0, x: 100, duration: 0.6 }, "anim2");
      tl.from(".pic", { opacity: 0, x: 100, duration: 0.4 });
      tl.from(".socials a", { opacity: 0, y: 100, duration: 0.3, stagger: 0.15 }, "anim3");
      tl.from(".btn-box", { opacity: 0, y: -100, duration: 0.3 }, "anim3");

      document.querySelectorAll('.progress-bar').forEach((bar) => {
          const percentage = bar.getAttribute('data-percentage');
          bar.style.setProperty('--percentage', percentage);
      });

      let menuIcon = document.querySelector(".nav i");
      let closeIcon = document.querySelector(".side-navbar i");
      const sideNavbar = document.querySelector('.side-navbar');

      if (menuIcon) {
          menuIcon.addEventListener("click", () => {
              sideNavbar.classList.toggle('active');
          });
      }

      if (closeIcon) {
          closeIcon.addEventListener("click", () => {
              sideNavbar.classList.remove("active");
          });
      }
  });
});
