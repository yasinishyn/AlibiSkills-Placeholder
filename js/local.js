$(document).ready(function() {
  $('#i_student').click(function() {
      $('#i_teacher').removeClass('selected');
      $(this).addClass('selected');
      $("[name='entry.340286705']").val('student');
  });
  $('#i_teacher').click(function() {
      $('#i_student').removeClass('selected');
      $(this).addClass('selected');
      $("[name='entry.340286705']").val('teacher');
  });

  $('.user-info').submit(function(e) {
    e.preventDefault();
    var form = $(this);

    var data = form.serialize();
    var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLScNdo-dx4tDXom1aw6gV85-sa5yXZTQN9rkQeZRLdHzC0EOJw/formResponse?';
    var submitRef = '&submit=7658006794998780417';
    var submitURL = (baseURL + data + submitRef);
    $('.user-info h4').text('Alibi Skills никогда не забывает тех, кто не равнодушен к проекту, а Вы уже помогаете его развитию. Спасибо Вам за доверие.');
    $.ajax({
      url: submitURL,
      type: "POST",
      dataType: "xml"
    });
  });

});
