$(document).ready(function() {
  $(".example").click(function() {
    $("#example-1").slideToggle();
	});
	$("#example-2, #example-4").hide();
  $(".example2").click(function() {
		$("#example-2").fadeToggle(1500);
	});
	$(".example3").click(function() {
		$("#example-3").slideToggle(1500);
  });
	$(".example4").click(function() {
		$("#example-4").slideToggle(1500);
	});
	$(".example5").click(function() {
		$("#example-5").slideToggle(1500);
	});
	$(".example6").click(function() {
		$("#example-6").slideToggle(1500);
	});
});
