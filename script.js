document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        targetSection.classList.add("highlight-section");
  
        setTimeout(() => {
          targetSection.classList.remove("highlight-section");
        }, 1500);
      }
    });
  });
  