$(function(){
  $(".title").click(function(){
    var subMenu = $("sub");
    $(this).parent().siblings().children(".sub").hide();
    $(this).siblings(".sub").toggle();
  })

  // 範例2
  $("span").click(function(){
    $(".tab").removeClass("active")
    $(this).parent().siblings().addClass("active");
  })
  $(".tab").click(function(){
    $(".tab").removeClass("active")
    $(this).addClass("active");
  })

  // 範例3


})