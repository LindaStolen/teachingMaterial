$(function(){
  $(".title").click(function(){
    var subMenu = $("sub");
    $(this).parent().siblings().children(".sub").hide();
    $(this).siblings(".sub").toggle();
  })

  // 範例2
  function begin(){
    $("[class^=subNav-]").addClass("hide").hide();
  }


})