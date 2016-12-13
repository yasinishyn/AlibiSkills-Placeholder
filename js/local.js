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

  var successHandler = function() {
    form = this;
    form.find('h4').text('Alibi Skills никогда не забывает тех, кто не равнодушен к проекту, а Вы уже помогаете его развитию. Спасибо Вам за доверие.');
    form.find('.user_info, .submit_form button, .hide_mobile h2').remove();
    $('#i_student, #i_teacher').off('click');
  }

  var clearErrors = function() {
    this.find('label').css('visibility', 'hidden');
  }

  var isValidForm = function() {
    return !this.find('[valid=false]').length;
  }

  var validateField = function(field) {
    var input = field.find('input');
    var value = input.val();
    var type = input.attr('type');


    var error = field.find('label');
    var pattern = /^[a-zа-яїіґє\s-']*$/i;
    var message = 'это обязательное поле';
    var isValid = true;


    if (value.length == 0) {
      isValid = false;
    } else if (type == 'text' && value.length < 3) {
      isValid = false;
      message = 'укажите полное имя';
    } else if (type == 'text') {
      message = 'укажите корректное имя';
      isValid = pattern.test(value);
    } else if (type == 'mail') {
      var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
      message = 'укажите корректный адресс';
      isValid = pattern.test(value) && value.length <= 255;
    }

    if (!isValid) {
      error.text(message);
      error.css('visibility', 'visible');
      input.attr('valid', false);
    } else {
      error.css('visibility', 'hidden');
      input.attr('valid', true);
    }
    return isValid;
  }

  $('#user-name, #user-email').on('change blur keyup input', 'input', function(e) {
    validateField($(this).closest('div'));
  });

  $('.user-info').submit(function(e) {
    e.preventDefault();
    var form = $(this);
    var name = form.find('#user-name');
    var email = form.find('#user-email');

    clearErrors.call(form);

    validateField(name);
    validateField(email);

    if (isValidForm.call(form)) {
      var data = form.serialize();
      var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLScNdo-dx4tDXom1aw6gV85-sa5yXZTQN9rkQeZRLdHzC0EOJw/formResponse?';
      var submitRef = '&submit=7658006794998780417';
      var submitURL = (baseURL + data + submitRef);

      $.ajax({
        url: submitURL,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: successHandler.call(form),
          200: successHandler.call(form)
        }
      });
    }
  });
});
