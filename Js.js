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

window.addEventListener ('DOMContentLoaded', function() {
    let savatBtn = document.querySelector('.savat'),
        exitBtn = this.document.querySelector('.exit'),
        buttons = document.querySelectorAll('.btn-savat'),
        product = document.querySelectorAll('.product'),
        mahsulotlar = document.querySelector('.mahsulotlar');
        dspNone = this.document.querySelector('.display-none')
    

    savatBtn.addEventListener ('click', () => {
        dspNone.style.display = 'block'
    })

    exitBtn.addEventListener ('click', () => {
        dspNone.style.display = 'none'
    })

    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            let productBtn = product[i].cloneNode(true),
                btn = productBtn.querySelector('.btn-savat');

            // tugmani olib tashlash
            btn.remove()

            console.log(productBtn);
            
            // Mahsulotni korzinkaga qushish
            mahsulotlar.appendChild(productBtn)
            
        })
        
    })
   
})

