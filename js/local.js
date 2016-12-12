$(document).ready(function() {
  $('#i_student').click(function() {
      $('#i_teacher').removeClass('selected');
      $(this).addClass('selected');
  });
  $('#i_teacher').click(function() {
      $('#i_student').removeClass('selected');
      $(this).addClass('selected');
  });
});
