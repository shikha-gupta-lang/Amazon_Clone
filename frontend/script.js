const backToTopBtn = document.querySelector(".foot-panel1");

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

const footerLogo = document.querySelector(".foot-panel3 .logo");

if (footerLogo) {
  footerLogo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
const boxes = document.querySelectorAll(".box");

boxes.forEach((box, index) => {
  box.addEventListener("mouseenter", () => {
    box.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    box.style.transform = "scale(1.03)";
    box.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "scale(1)";
    box.style.boxShadow = "none";
  });
});
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
const searchPopup = document.querySelector(".search-popup");
const recentList = document.getElementById("recent-searches");

searchIcon.addEventListener("click", (e) => {
  e.stopPropagation(); 
  const query = searchInput.value.trim();
  if (query) saveSearch(query);
  updatePopup();
  searchPopup.classList.toggle("hidden");
});
document.addEventListener("click", () => {
  searchPopup.classList.add("hidden");
});

searchPopup.addEventListener("click", (e) => e.stopPropagation());

function saveSearch(query) {
  let searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
  searches = searches.filter(item => item !== query); 
  searches.unshift(query);
  if (searches.length > 5) searches.pop(); 
  localStorage.setItem("recentSearches", JSON.stringify(searches));
}

function updatePopup() {
  const searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
  recentList.innerHTML = searches.map(item => `<li>${item}</li>`).join("");

  document.querySelectorAll("#recent-searches li").forEach(li => {
    li.addEventListener("click", () => {
      searchInput.value = li.textContent;
      searchPopup.classList.add("hidden");
    });
  });
}
const allBtn = document.getElementById("allBtn");
    const sidebarMenu = document.getElementById("sidebarMenu");
    const closeSidebar = document.getElementById("closeSidebar");

    allBtn.addEventListener("mouseover", () => {
        sidebarMenu.classList.add("active");
    });

    closeSidebar.addEventListener("click", () => {
        sidebarMenu.classList.remove("active");
    });

    // Optional: close sidebar if mouse leaves sidebar
    sidebarMenu.addEventListener("mouseleave", () => {
        sidebarMenu.classList.remove
});


