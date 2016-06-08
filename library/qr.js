$(document).on('initialize',function() {
  $('form').find('[name="qr"]').click(function() {   
    qr();
  });
});

function qr() {
  var qr_option;

  qr_option = {'formats':'QR_CODE'};
 
  cordova.plugins.barcodeScanner.scan(qr_success,qr_fail,qr_option);
};

function qr_success(result) {
  $('form').find('[name="qr"]').val(result.text);
}

function qr_fail(messge) {
}
