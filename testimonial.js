document.addEventListener("DOMContentLoaded", function () {
    const testimonials = [
      {
        text: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
        name: "Michael Kaizer",
        title: "CEO of Basecamp Corp",
      },
      {
        text: "The team was incredible in delivering results. Their strategic approach made a noticeable impact in our metrics.",
        name: "Jane Smith",
        title: "CMO of TechNova",
      },
      {
        text: "Exceptional service and dedication. Their insights changed how we operate for the better.",
        name: "John Doe",
        title: "Founder of BrightApps",
      },
      {
        text: "We’ve worked with many marketing teams, but this one stands out. Their efficiency and creativity are unmatched.",
        name: "Emily Chang",
        title: "Marketing Lead at VisionX",
      },
      {
        text: "A game-changing experience for our brand. They delivered beyond expectations and always kept us informed.",
        name: "Robert Lin",
        title: "Director at SoftSphere Inc",
      }
    ];

    let currentIndex = 0;

    const textElement = document.getElementById("testimonial-text");
    const nameElement = document.getElementById("author-name");
    const titleElement = document.getElementById("author-title");
    const counterElement = document.getElementById("counter");

    function updateTestimonial() {
      const current = testimonials[currentIndex];
      textElement.textContent = `" ${current.text} ”`;
      nameElement.textContent = current.name;
      titleElement.textContent = current.title;
      counterElement.textContent = `${String(currentIndex + 1).padStart(2, "0")}/${String(testimonials.length).padStart(2, "0")}`;
    }

    document.getElementById("prev-btn").addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial();
    });

    document.getElementById("next-btn").addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateTestimonial();
    });

    updateTestimonial();
  });