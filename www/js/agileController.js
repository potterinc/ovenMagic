
$(document).ready(function () {

    // Initialize the tab controller
    tabController(0);

    // Agile Content Loader
    $('#agileControlViewer').load('../www/pages/products.html');

    // Dashboard
    $('#wallet').click(function () {
        $('#agileControlViewer').load('../www/pages/wallet.html');
    })

    // Bakeries
    $('#bakery').click(function () {
        $('#agileControlViewer').load('../www/pages/products.html');
    })

    // Checkout
    $('#checkout').click(function () {
        $('#agileControlViewer').load('../www/pages/cart.html');
    })

    // Logout
    $('#logout').click(function () {
        $('#agileControlViewer').load('../www/pages/login.html');
    })

    //Tab List
    $('#tab-list-actions').click;
    $('#tab-list-purchase').click(function(){
        tabController(2)
    });
    

function tabController(tabIndex) {
    alert(tabIndex);
}
})

