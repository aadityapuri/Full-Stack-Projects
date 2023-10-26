document.querySelector("h1").classList.add("huge");

$(document).keypress(function(event){
  $("h1").text(event.key);
})