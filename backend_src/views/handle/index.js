var Cur_Page=1;
$(function() {
    HandlebarsIntl.registerWith(Handlebars);

});
// var loadProducts = function() {
//
//     $.ajax({
//         url: 'http://localhost:3000/',
//         dataType: 'json',
//         timeout: 10000
//     }).done(function(data) {
//         $.each(data, function(idx, item) {
//             // console.log(item.CatName);
//             var tr = '<div class="item">'+
//                 '<img class="img-1" src="public/images/item-img-1-5.jpg" alt="">'+
//                 '<div class="overlay">'+
//                 '<div class="position-center-center">'+
//                 '<div class="inn">'+
//                 '<a href="public/images/product-4.jpg" data-lighter>'+
//             '<i class="icon-magnifier"></i>'+
//                 '</a>'+
//                 '<a href="public/#.">'+
//                 '<i class="icon-basket"></i>'+
//                 '</a>'+
//                 '<a href="public/#.">'+
//                 '<i class="icon-heart"></i>'+
//                 '</a>'+
//                 '</div>'+
//                 '</div>'+
//                 '</div>'+
//                 '<div class="item-name">'+
//                 '<a href="public/#.">'+item._pro_name+'</a>'
//             +'<p>Lorem ipsum dolor sit amet</p>'+
//             '</div>'+
//             '</div>'
//             $('#list1').append(tr);
//         });
// })};
$('#btnLoadAll').on('click', function() {
    // alert('clicked');

    $.ajax({
        url: 'http://localhost:3000/products',
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        // console.log(data);
        // alert('done');

        $.each(data, function(idx, item) {
            // console.log(item.CatName);
            var tr = '<tr>' +
                '<td>' +
                item.ProID +
                '</td>' +
                '<td>' +
                item.ProName +
                '</td>' +
                '<td>' +
                item.Price +
                '</td>' +
                '<td>' +
                item.CatID +
                '</td>' +
                '<td>' +
                item.Quantity +
                '</td>' +
                '<td><button class="DelBtn" data-id="'+item.ProID+'" >Delete</button></td>'
                +
                    '<td><button class="UpdateBtn" ><a href="update.html">Update</a></button></td>' +
            '</tr>';
            $('#list').append(tr);
        });
    });
});
$('')