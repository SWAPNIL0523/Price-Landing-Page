document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
  
    toggleButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Add logic here to handle plan selection or any other dynamic behavior
        alert('Plan selected!');
      });
    });
  });
  