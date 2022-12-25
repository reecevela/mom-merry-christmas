$('.message').hide();

$('#open-button').click( (evt) => {
  console.log('clicked');
  $('.card').slideUp();
  $('.message').slideDown();
  evt.preventDefault();
});