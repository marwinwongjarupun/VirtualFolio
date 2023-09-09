// Function to load iframe when it enters the viewport
function loadIframe(entry) {
    if (entry.isIntersecting) {
      const iframe = entry.target;
      const iframeSrc = iframe.getAttribute("data-src");

      if (iframeSrc) {
        // Create the iframe element
        const newIframe = document.createElement("iframe");
        newIframe.setAttribute("src", iframeSrc);
        newIframe.setAttribute("allowfullscreen", "");
        newIframe.setAttribute("frameborder", "0");
        newIframe.style.border = "none"; // Optional: Remove iframe border

        // Replace the placeholder with the actual iframe
        iframe.parentNode.replaceChild(newIframe, iframe);
      }

      // Stop observing the iframe once it's loaded
      observer.unobserve(iframe);
    }
  }

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(loadIframe),
    {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // Optional: Adjust the root margin as needed
      threshold: 0.1, // Optional: Adjust the threshold as needed
    }
  );

  // Select all iframe placeholders with the "lazy-iframe" class
  const lazyIframes = document.querySelectorAll(".lazy-iframe");

  // Observe each lazy iframe
  lazyIframes.forEach((iframe) => {
    observer.observe(iframe);
  });