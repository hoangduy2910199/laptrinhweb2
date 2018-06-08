$('#list').on('click','.DelBtn', function() {
    var tr = $(this).closest('tr');
    var _id = $(this).data('id');
    var msg = 'Do you want to remove this category (id: ' + _id + ')';
    var rs = confirm(msg);
    if (rs === true) {
        $.ajax({
            url: 'http://localhost:3000/products/' + _id,
            dataType: 'json',
            timeout: 10000,
            type: 'DELETE',
            // contentType: 'application/json',
        }).done(function(data) {
            // console.log(data);
            // alert('deleted');
            // $(this).closest('tr').remove();
            tr.remove();
        }).fail(function(xhr, textStatus, error) {
            console.log(error);
            console.log(xhr);
        });
    }
});

$('#btnTestDeleteRow').on('click', function() {
    var tr = $('#list tr').last();
    tr.remove();
});