$(function() {
  // Back-end logic
  var makeClickable = function() {
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
  }

  // Front-end
  $("#contact").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    $("#list").append("<li><p class='contact-name'>" + name + "</p></li>");

    makeClickable();
    // <li>
    //   <p class="contact-name">Bob</p>
    //   <p class="contact-phone">503-123-4567</p>
    //   <p class="contact-address">123 Oak st</p>
    //   <p class="contact-email">bob@bob.com</p>
    // </li>
  })

  makeClickable();
  // $(".contact-name").click(function() {
  //   var name = $(this).text();
  //   var phone = $(this).siblings(".contact-phone").text();
  //   var address = $(this).siblings(".contact-address").text();
  //   var email = $(this).siblings(".contact-email").text();
  //
  //   $("#contact-name").text(name);
  //   $("#contact-phone").text(phone);
  //   $("#contact-address").text(address);
  //   $("#contact-email").text(email);
  // })
})
