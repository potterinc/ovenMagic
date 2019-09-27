
$(document).ready(function () {

    // Agile Content Loader
    $('#agileControlViewer').load('../www/pages/products.html');

    // Dashboard
    $('#dashboard').click(function(){
        $('#agileControlViewer').load('../www/pages/dashboard.html');
    })

    // Bakeries
    $('#bakery').click(function(){
        $('#agileControlViewer').load('../www/pages/products.html');
    })
    // Checkout
    $('#checkout').click(function(){
        $('#agileControlViewer').load('../www/pages/cart.html');
    })
})
