document.addEventListener("DOMContentLoaded", () => {
  const flowers = document.querySelectorAll(".flower");
  const header = document.querySelector(".header"); // Select the h1 container

  if (!header) {
    console.error("Header not found!"); // Debugging log
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        console.log(
          `Observed: ${entry.target.className}, Visible: ${entry.isIntersecting}`
        ); // Debugging log
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view"); // Add class when element enters viewport
          observer.unobserve(entry.target); // Stop observing after activation
        }
      });
    },
    { threshold: 0.5 }
  );

  flowers.forEach((flower) => observer.observe(flower));
  observer.observe(header); // Observe the h1 header
});

document.addEventListener("DOMContentLoaded", () => {
  const startDiv = document.querySelector(".start-div");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startDiv.classList.add("in-view"); // Trigger animation
          observer.unobserve(startDiv); // Stop observing after activation
        }
      });
    },
    { threshold: 0.5 } // Trigger animation when 50% visible
  );

  observer.observe(startDiv);
});

document.addEventListener("DOMContentLoaded", () => {
  const startDiv = document.querySelector(".message-1");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startDiv.classList.add("in-view"); // Trigger animation
          observer.unobserve(startDiv); // Stop observing after activation
        }
      });
    },
    { threshold: 0.5 } // Trigger animation when 50% visible
  );

  observer.observe(startDiv);
});

document.addEventListener("DOMContentLoaded", () => {
  const startDiv = document.querySelector(".message-3");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startDiv.classList.add("in-view"); // Trigger animation
          observer.unobserve(startDiv); // Stop observing after activation
        }
      });
    },
    { threshold: 0.5 } // Trigger animation when 50% visible
  );

  observer.observe(startDiv);
});

document.addEventListener("DOMContentLoaded", () => {
  const startDiv = document.querySelector(".message-2");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startDiv.classList.add("in-view"); // Trigger animation
          observer.unobserve(startDiv); // Stop observing after activation
        }
      });
    },
    { threshold: 0.5 } // Trigger animation when 50% visible
  );

  observer.observe(startDiv);
});

document.addEventListener("DOMContentLoaded", () => {
  const startDiv = document.querySelector(".message-4");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startDiv.classList.add("in-view"); // Trigger animation
          observer.unobserve(startDiv); // Stop observing after activation
        }
      });
    },
    { threshold: 0.5 } // Trigger animation when 50% visible
  );

  observer.observe(startDiv);
});

document.addEventListener("DOMContentLoaded", () => {
  const startDiv = document.querySelector(".message-5");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startDiv.classList.add("in-view"); // Trigger animation
          observer.unobserve(startDiv); // Stop observing after activation
        }
      });
    },
    { threshold: 0.5 } // Trigger animation when 50% visible
  );

  observer.observe(startDiv);
});

document.addEventListener("DOMContentLoaded", () => {
  const startDiv = document.querySelector(".message-6");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startDiv.classList.add("in-view"); // Trigger animation
          observer.unobserve(startDiv); // Stop observing after activation
        }
      });
    },
    { threshold: 0.5 } // Trigger animation when 50% visible
  );

  observer.observe(startDiv);
});

document.addEventListener("DOMContentLoaded", () => {
  const startDiv = document.querySelector(".message-7");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startDiv.classList.add("in-view"); // Trigger animation
          observer.unobserve(startDiv); // Stop observing after activation
        }
      });
    },
    { threshold: 0.5 } // Trigger animation when 50% visible
  );

  observer.observe(startDiv);
});

document.addEventListener("DOMContentLoaded", () => {
  const startDiv = document.querySelector(".message-8");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startDiv.classList.add("in-view"); // Trigger animation
          observer.unobserve(startDiv); // Stop observing after activation
        }
      });
    },
    { threshold: 0.5 } // Trigger animation when 50% visible
  );

  observer.observe(startDiv);
});

document.addEventListener("DOMContentLoaded", () => {
  const startDiv = document.querySelector(".center-text");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startDiv.classList.add("in-view"); // Trigger animation
          observer.unobserve(startDiv); // Stop observing after activation
        }
      });
    },
    { threshold: 0.5 } // Trigger animation when 50% visible
  );

  observer.observe(startDiv);
});

document.addEventListener("DOMContentLoaded", () => {
  const startDiv = document.querySelector(".container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startDiv.classList.add("in-view"); // Trigger animation
          observer.unobserve(startDiv); // Stop observing after activation
        }
      });
    },
    { threshold: 0.5 } // Trigger animation when 50% visible
  );

  observer.observe(startDiv);
});

document.addEventListener("DOMContentLoaded", function () {
  let audio = document.getElementById("bg-music");
  audio.play().catch((error) => {
    console.log("Autoplay blocked, require user interaction");
  });
});
