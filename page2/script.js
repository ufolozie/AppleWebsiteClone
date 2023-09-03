$(function() {
  AOS.init();
});


$(function() {
	$('#btn-stop').click(function() {
    var video = $('#photo-styles-video');
    video.get(0).pause();

    $("#btn-stop").hide();
    $("#btn-play").show();
  });
});

$(function() {
	$('#btn-play').click(function() {
    var video = $('#photo-styles-video');
    video.get(0).play();

    $("#btn-play").hide();
    $("#btn-stop").show();
  });
});


$(function() {
  $('#nerd-out').click(function() {
    $('#nerd-out').hide();
    $('#accordion-item').show();
  });
});