/**
 * Vercel Speed Insights Initialization
 * This script injects the Speed Insights tracking code for performance monitoring
 */
(function() {
  // Create and inject the Speed Insights script
  if (typeof window !== 'undefined') {
    // Initialize the queue for early events
    window.si = window.si || function() {
      (window.siq = window.siq || []).push(arguments);
    };
    
    // Create the script element
    var script = document.createElement('script');
    script.src = '/_vercel/speed-insights/script.js';
    script.defer = true;
    script.setAttribute('data-sdkn', '@vercel/speed-insights');
    script.setAttribute('data-sdkv', '1.3.1');
    
    // Error handler
    script.onerror = function() {
      console.log('[Vercel Speed Insights] Failed to load script. Please check if any content blockers are enabled.');
    };
    
    // Append to head
    if (document.head) {
      document.head.appendChild(script);
    } else {
      // If head is not ready, wait for it
      document.addEventListener('DOMContentLoaded', function() {
        document.head.appendChild(script);
      });
    }
  }
})();
