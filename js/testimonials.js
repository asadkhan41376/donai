// Simple Auto Slide for Testimonials
let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial() {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    if (i === currentIndex) {
      t.classList.add("active");
    }
  });
  currentIndex = (currentIndex + 1) % testimonials.length;
}

showTestimonial();
setInterval(showTestimonial, 5000); // Change every 4 seconds