$(function() {
  // Back-end logic


  // Front-end logic
  $(".contact-name").click(function() {
    var name = $(this).text();
    var phone = $(this).siblings(".contact-phone").text();
    var address = $(this).siblings(".contact-address").text();
    var email = $(this).siblings(".contact-email").text();

  $("#contact-name").text(name);
  $("#contact-phone").text(phone);
  $("#contact-address").text(address);
  $("#contact-email").text(email);

  })
})
