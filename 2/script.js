$lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit Nulla obcaecati ducimus rerum recusandae molestias animi asperiores consequuntur"

$(document).ready(function(){
  let $accordion = $('.accordion');
  $accordion.append(
    $('<div/>',{class: 'accordion__header is-active'}).append(
      $('<h2/>', {text: 'titr 1'}),
      $('<span/>', {class: 'accordion__toggle'})
    )
  )
  .append($('<div/>' , {class: 'accordion__body  is-active'}).append($('<p/>' , {text: $lorem})))
  .append(
    $('<div/>',{class: 'accordion__header'}).append(
      $('<h2/>', {text: 'titr 2'}),
      $('<span/>', {class: 'accordion__toggle'})
    )
  )
  .append($('<div/>' , {class: 'accordion__body'}).append($('<p/>' , {text: $lorem})))
  



$('.accordion__header').click(function(e) {
  e.preventDefault();
  let currentIsActive = $(this).hasClass('is-active');
  $(this).parent('.accordion').find('> *').removeClass('is-active');
  if(currentIsActive != 1) {
    $(this).addClass('is-active');
    $(this).next('.accordion__body').addClass('is-active');
  }
});
})