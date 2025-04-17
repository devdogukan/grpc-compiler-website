// Function to copy code
function copyCode(button) {
  const code = button.getAttribute("data-code");
  
  navigator.clipboard.writeText(code)
    .then(() => {
      // Change button text temporarily
      const originalHTML = button.innerHTML;
      button.innerHTML = '<i class="fas fa-check"></i> Copied!';
      
      // Add success animation with proper spacing
      button.style.backgroundColor = "rgba(72, 187, 120, 0.2)";
      
      // Revert back after 2 seconds
      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.style.backgroundColor = "";
      }, 2000);
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
      
      // Fallback method
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      
      try {
        navigator.clipboard.writeText(code);
        
        // Change button text temporarily
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        
        // Revert back after 2 seconds
        setTimeout(() => {
          button.innerHTML = originalHTML;
        }, 2000);
      } catch (err) {
        console.error("Fallback copy failed: ", err);
      }
      
      document.body.removeChild(textArea);
    });
}

// Tab switching functionality
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  
  // Add smooth animation to sections on scroll
  const sections = document.querySelectorAll('section');
  const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, options);
  
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs and content
      document
        .querySelectorAll(".tab")
        .forEach((t) => t.classList.remove("active"));
        
      document
        .querySelectorAll(".tab-content")
        .forEach((c) => c.classList.remove("active"));

      // Add active class to clicked tab
      this.classList.add("active");

      // Show related content
      const tabId = this.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });
  
  // Subtle animation for the header elements
  const headerText = document.querySelector('.header-text');
  headerText.style.opacity = 0;
  headerText.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    headerText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    headerText.style.opacity = 1;
    headerText.style.transform = 'translateY(0)';
  }, 200);
});

// Copyright year update in footer
const currentYear = new Date().getFullYear();
document.querySelector('#copyright').innerHTML = `gRPC Compiler - VS Code Extension &copy; ${currentYear}.`;

