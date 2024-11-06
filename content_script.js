// Create a mutation observer to watch for changes in the DOM
const observer = new MutationObserver((mutations) => {
  // Only process mutations that add nodes
  const relevantMutations = mutations.filter(
    (mutation) => mutation.addedNodes.length > 0,
  );

  if (relevantMutations.length === 0) return;

  const selectors = [
    'div#credential_picker_container > iframe[src^="https://accounts.google.com/"]',
    'iframe#credential_picker_iframe[src^="https://accounts.google.com/"]',
  ];

  // Check each selector
  selectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      // Remove the element if found
      element.remove();
    });
  });
});

// Start observing the document with the configured parameters
observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
});

// Also check for existing elements when the script first runs
document.addEventListener("DOMContentLoaded", () => {
  const selectors = [
    'div#credential_picker_container > iframe[src^="https://accounts.google.com/"]',
    'iframe#credential_picker_iframe[src^="https://accounts.google.com/"]',
  ];

  selectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.remove();
    });
  });
});
