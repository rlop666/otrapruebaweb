function functionReady(){
	
    var altura = $('#cssmenu').offset().top;

    $(window).on('scroll', function(){
      if ( $(window).scrollTop() > altura ){
        $('#cssmenu').addClass('menu-fixed');
      } else {
        $('#cssmenu').removeClass('menu-fixed');
      }
    });
  $("#cssmenu").menumaker({
    title: "Menu",
    format: "multitoggle"
  });

  var update = new Date(document.lastModified);
  update = new Date(document.lastModified)
  theMonth = update.getMonth() + 1;
  theDate = update.getDate();
  theYear = update.getFullYear();
  theHour = update.getHours();
  theMinutes = (update.getMinutes()<10?'0':'') + update.getMinutes();
  document.getElementById("fechamodificacion").innerHTML = "Ultima modificación: " + theDate + "/" + theMonth + "/" + theYear + " " + theHour + ":" + theMinutes;
}