$(document).ready(function() {
    // Add 'hover' class on hover
    $('.product-section .card').hover(
        function() {
            $(this).addClass('hover');
        }, function() {
            $(this).removeClass('hover');
        }
    );

    // Star rating click event
    $('.star').on('click', function() {
        var rating = $(this).data('value');
        $(this).siblings('.star').removeClass('selected');
        $(this).addClass('selected');
        $(this).prevAll('.star').addClass('selected');
        // Do something with the rating value, e.g., save it to a database or display it
        console.log('Rated:', rating);
    });

    // Search form submit event
    $('#search-form').on('submit', function(event) {
        event.preventDefault();
        var searchQuery = $('#search').val();
        // Do something with the search query, e.g., filter products or redirect to a search results page
        console.log('Search Query:', searchQuery);
    });
});
