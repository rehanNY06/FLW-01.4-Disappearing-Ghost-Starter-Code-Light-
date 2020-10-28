$(".update-img-button").click(function() {
  $("img").attr("src", "https://static.thenounproject.com/png/1351712-200.png");
});

$(".hide-button").click(function() {
  $(".ghost-image").fadeOut();
});

$(".show-button").click(function() {
  $(".ghost-image").fadeIn();
});

$(".message-button").click(function() {
  let message = $("input").val();
  $(".message").html(`<p>${message}</p>`);
  $("input").val("");
});

$(".name-button").click(function() {
  let name = $("input").val();
  $("h1").text(`My name is ${name}`);
  $("input").val("");
});

$(".background-button").click(function() {
  $("body").css("background-color", "black");
  $("h1").css("color", "white");
  $("img").attr(
    "src",
    "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/60127/flying-ghost-clipart-md.png"
  );
});
