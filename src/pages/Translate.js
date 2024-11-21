import React, { useEffect } from "react";

export default function Translate() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "es,en,hi",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      // Remove the top frame using JavaScript
      removeGoogleTranslateBanner();
    };

    // Cleanup the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function to remove the top frame
  const removeGoogleTranslateBanner = () => {
    const interval = setInterval(() => {
      const banner = document.querySelector(".goog-te-banner-frame");
      if (banner) {
        banner.style.display = "none";
        clearInterval(interval); // Stop checking once the banner is hidden
      }
    }, 100); // Check every 100ms until the banner is found
  };

  return <div id="google_translate_element" style={{ margin: "20px 0" }}></div>;
}
