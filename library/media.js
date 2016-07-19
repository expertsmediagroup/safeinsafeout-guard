var form=[];
$(document).on('device-load',function() {
  var source,option;
  $('button[data-media]').on('click',function() {
    if($(this).data('media') == 'gallery') source = Camera.PictureSourceType.SAVEDPHOTOALBUM;
    else                                   source = Camera.PictureSourceType.CAMERA;

    option = {quality: 100,
              destinationType: Camera.DestinationType.FILE_URI,
              targetHeight: 1024,
              targetWidth: 1024,
              sourceType: source};
    
    navigator.camera.getPicture(media_success,media_fail,option);
  });
});

function media_success(data) {
  var option,filetransfer;

  $(document).trigger('upload');  

alert('1');

  option = new FileUploadOptions();
  option.fileKey = 'file';
  option.fileName = data.substr(data.lastIndexOf('/')+1);
  option.mimeType = 'image/jpeg';
  option.params = {};

alert('2');

  filetransfer = new FileTransfer();
alert(form[0]);
  filetransfer.upload(data,encodeURI(form[0]),media_success_upload,media_fail_upload,option);
}

function media_success_upload(data) {
alert(form[1]);
  load(form[1],true);
}

function media_fail(message) {
}

function media_fail_upload(message) {
}
