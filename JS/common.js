$(function(){

  //옵션 선택
  $('.layout_option').slick({
    slide: 'li',
    arrows: false,
    variableWidth: true,
    infinite: false,
    focusOnSelect: true,
    swipeToSlide: true,
  });

  //하루일기 이모지 
  $('.sticker_emoji').slick({
    slide: 'li',
    arrows: false,
    variableWidth: true,
    infinite: false,
    focusOnSelect: true,
    swipeToSlide: true,
  });

  $('.sticker_emoji').on('afterChange', function(){
    $('.slick-slide').removeClass('on');
    $(this).find('.slick-current').addClass('on');
  });

}); //End