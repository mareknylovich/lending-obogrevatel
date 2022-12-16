const $dropdown = $('.dropdown');
const $dropdownToggle = $('.dropdown-toggle');
const $dropdownMenu = $('.dropdown-menu');
const showClass = 'show';

$(window).on('load resize', function() {
  if (this.matchMedia('(min-width: 768px)').matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr('aria-expanded', 'true');
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr('aria-expanded', 'false');
        $this.find($dropdownMenu).removeClass(showClass);
      },
    );
  } else {
    $dropdown.off('mouseenter mouseleave');
  }
});

$(document).ready(function() {
  /*Schieberegler fÃ¼r Slider*/
  var slider = document.getElementById('gewicht-slider');
  if (slider) {
    var output = document.getElementById('gewichtanzahl');
    output.innerHTML = slider.value;

    slider.oninput = function() {
      output.innerHTML = this.value;
    };

    $('#navbarDropdownMenuLink').hover(function(e) {
      e.preventDefault();
      var toShow = $(this).attr('href');
      $('.togg').fadeOut();
      $(toShow).fadeIn();
    });
  }

  $('.first-button').on('click', function() {
    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function() {
    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function() {
    $('.animated-icon3').toggleClass('open');
  });
  /*
   $("body").on('submit', 'form.angebot', function(event) {
		// Standard-Aktion abbrechen
		event.preventDefault();	

		// Formular per AJAX senden
       
       console.log('Formular senden 2', $(this).prop('action'));
		var form=$(this);
		$.ajax({
			type: 'POST',
			url: $(this).prop('action'),
			data : $(this).serialize(),
			dataType: 'html',
			encode: true
		}).done(function(data) {
			// Aktionen bei Erfolg
			console.log('done: '+data);

			if(data.length > 0){
			    // Fehler
                $('.error').html(data);
                $('.error').addClass("display");
            }else{
			    // Erfolgreich
                $('#formular1').modal('hide');
                $('#formular2').modal('hide');
                $('#formular3').modal('hide');
                $('.erfolg').html("Ihre Anfrage wurde erfolgreich abgeschickt. Sie erhalten in KÃ¼rze ein Angebot per E-Mail.");
                $('.erfolg').addClass("display");
            }

            
		}).fail(function(data) {
			// Aktionen bei einem Fehler
			console.log('fail: ',data);
            $('.error').html("Es ist ein Fehler aufgetreten.");
            $('.error').addClass("display");
		});
        
	});
     */

  // Smoth Scrolling
  $(function() {
    $('.smoothScroll').click(function() {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        var $target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body').animate({ scrollTop: targetOffset }, 1000);
          return false;
        }
      }
    });
  });

  // Cookie Meldung
  if (document.cookie.indexOf('hideCookieNotice=1') != -1) {
    $('#cookieNotice').hide();
  } else {
    $('#cookieNotice').show();
  }

  $('body').on('click', '#cookieNoticeCloser', function() {
    $('#cookieNotice').hide();
  });

  // Datepicker
  $.fn.datepicker.dates['de'] = {
    days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    daysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    daysMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    months: [
      'Januar',
      'Februar',
      'MÃ¤rz',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ],
    monthsShort: ['Jan', 'Feb', 'MÃ¤r', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    today: 'Heute',
    monthsTitle: 'Monate',
    clear: 'LÃ¶schen',
    weekStart: 1,
    format: 'dd.mm.yyyy',
  };

  $('input.datepicker')
    .datepicker({
      format: 'dd.mm.yyyy',
      language: 'de',
    })
    .on('show', function(e) {
      console.log('show datepicker');
    })
    .on('changeDate', function(e) {
      $(this).datepicker('hide');
    });

  $('body').on('change', '#select-modul', function() {
    $('.info-list-wrapper').hide();
    $('[data-product="' + $(this).val() + '"]').show();
  });

  $('body').on('change', '.input_art', function() {
    $('.input_miete').hide();
    $('#inputAbWann').removeAttr('required');
    $('#inputWieLange').removeAttr('required');

    var art = $('input[name=mietenkaufen]:checked', '#formMietKaufen').val();

    console.log('art', art);

    if (art === 'mieten') {
      $('.input_miete').show();
      $('#inputAbWann').attr('required', true);
      $('#inputWieLange').attr('required', true);
    }
  });
});
