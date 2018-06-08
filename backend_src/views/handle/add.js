$(function() {

    $('#txtProName').select();
    $('#txtTinyDes').select();
    $('#txtFullDes').select();
    $('#txtCatID').select();
    $('#txtPrice').select();
    $('#txtQuantity').select();
});


$('#btnAdd').on('click', function() {
    var _ProName = $('#txtProName').val();
    var _TinyDes = $('#txtTinyDes').val();
    var _FullDes = $('#txtFullDes').val();
    var _CatID = $('#txtCatID').val();
    var _Price = $('#txtPrice').val();
    var _Quantity = $('#txtQuantity').val();
    if (_ProName.length === 0) {
        alert('Please input a valid product name');
        return;
    }
    if (_TinyDes.length === 0) {
        alert('Please input a valid tiny description value');
        return;
    }
    if (_FullDes.length === 0) {
        alert('Please input a valid full description value');
        return;
    }
    if (isNaN(_Price) === 0) {
        alert('Please input a valid price value');
        return;
    }
    if (isNaN(_CatID) === 0) {
        alert('Please input a valid CatID value');
        return;
    }
    if (isNaN(_Quantity) === 0) {
        alert('Please input a valid Quantity value');
        return;
    }

    var body = {
        ProName: _ProName,
        TinyDes: _TinyDes,
        FullDes: _FullDes,
        CatID: _CatID,
        Price: _Price,
        Quantity: _Quantity
    };

    $.ajax({
        url: 'http://localhost:3000/products',
        dataType: 'json',
        timeout: 10000,

        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(body)
    }).done(function(data) {
        // console.log(data);
        alert('Added');
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});