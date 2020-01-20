$(function(){
  $(".title").click(function(){
    var subMenu = $("sub");
    $(this).parent().siblings().children(".sub").hide();
    $(this).siblings(".sub").toggle();
  })

  // 範例2
  $(".tab").click(function(){
    
    $(this).siblings().children("span").show();
  })

})