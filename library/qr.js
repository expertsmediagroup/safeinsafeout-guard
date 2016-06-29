$(document).on('device-load',function() {
  $('form').find('[name="qr"]').click(function() {   
    var option;

    option = {'formats':'QR_CODE'};
 
    cordova.plugins.barcodeScanner.scan(qr_success,qr_fail,option);
  });
});

function qr_success(result) {
  $('form').find('[name="qr"]').val(result.text);
}

function qr_fail(messge) {
}
