document.addEventListener('DOMContentLoaded', function () {
    const text = "DREAM JOB"; // Text you want to display
    let index = 0;
    const span = document.getElementById('typewriter-text');
  
    function type() {
      span.textContent += text[index];
      index++;
  
      if (index >= text.length) {
        index = 0;
        setTimeout(reset, 2000); // Wait for 2 seconds before resetting
      } else {
        setTimeout(type, 100); // Adjust typing speed (in milliseconds)
      }
    }
  
    function reset() {
      span.textContent = "";
      setTimeout(type, 500); // Wait for 0.5 seconds before typing again
    }
  
    type();
  });
  