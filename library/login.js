function login() {
  $.ajax({
    type: 'post',
    url: 'http://www.safein-safeout.com/application_guard/api.php?action=login&step=hash&hash='+localStorage.getItem('hash'),
    cache: false,
    success: function(result) {
      result = JSON.parse(result);

      /* PROCEED */
      if(result.status == '1') {
        localStorage.setItem('hash','');

        $('#wrapper').html('');

        window.location = 'index.html';
      }
    }
  });

  return false;
}
