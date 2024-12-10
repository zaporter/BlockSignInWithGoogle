const observer = new MutationObserver(() => {
  const selectors = [
    'div#credential_picker_container > iframe[src^="https://accounts.google.com/"]',
    'iframe#credential_picker_iframe[src^="https://accounts.google.com/"]',
  ];

  selectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      // Remove the element if found
      element.remove();
    });
  });
});

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
