$(document).ready(function () {
    
  // Burger menus
  $(document).ready(function() {
    // Open menu
    $('.navbar-burger').on('click', function() {
      $('.navbar-menu').toggleClass('hidden');
    });
  
    // Close menu on navbar-close click or navbar-backdrop click
    $(document).on('click', '.navbar-close, .navbar-backdrop', function(e) {
      e.stopPropagation(); // Prevents the click event from bubbling up to the document
      $('.navbar-menu').removeClass('hidden'); // Ensures the menu closes properly
    });
  });
  

     
});
