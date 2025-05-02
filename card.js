const viewAllBtn = document.getElementById("viewAllBtn");
const cardContainer = document.getElementById("cardContainer");

viewAllBtn.addEventListener("click", () => {
  // Extra cards to add
  const extraCards = [
    { title: "Mobile App Fundamentals", img: "Assets/card1.png", desc: " Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites." },
    { title: "Graphics Design Fundamentals", img: "Assets/card2.png", desc: " Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites." },
    // { title: "Digital Marketing Fundamentals", img: "Assets/card1.png", desc: " Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites." }
  ];

  // Create and add new cards
  extraCards.forEach(card => {
    const cardHTML = `
      <div class="bg-[#f0f0f0] rounded-2xl p-8 shadow-sm w-full lg:w-1/2">
        <img
          src="${card.img}"
          alt="Course"
          class="rounded-lg w-full object-cover mb-4"
        />
        <div class="flex justify-between items-center my-6">
          <div class="flex gap-2">
            <span class="bg-white text-[#4C4C4D] text-[18px] font-medium px-4 py-2 rounded-xl">4 Weeks</span>
            <span class="bg-white text-[#4C4C4D] text-[18px] font-medium px-4 py-2 rounded-xl">Beginner</span>
          </div>
          <p class="text-xl font-medium text-[#262626]">By John Smith</p>
        </div>
        <h3 class="text-2xl font-semibold">${card.title}</h3>
        <p class="text-[18px] text-[#4C4C4D] my-4">
        ${card.desc}
        </p>
        <a href="#" class="inline-block w-full text-center bg-blue-900 text-white py-5 rounded-lg font-medium text-[18px]">Get it Now</a>
      </div>
    `;
    cardContainer.innerHTML += cardHTML;
  });

  // Hide button
  viewAllBtn.style.display = "none";
});