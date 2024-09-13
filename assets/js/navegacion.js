$(document).ready(function() {
    // Filtro de categorías
    $('.filter-button').click(function() {
      var filter = $(this).attr('data-filter');
      $('.filter-button').removeClass('active');
      $(this).addClass('active');
  
      if (filter == 'all') {
        $('.filter').show('300');  // Muestra todas las imágenes
      } else {
        $('.filter').not('.' + filter).hide('300'); // Oculta imágenes que no coinciden
        $('.filter').filter('.' + filter).show('300'); // Muestra imágenes que coinciden
      }
    });
  });
  