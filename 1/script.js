$rowCount = $('table tr').length-1;
$rowCount2 = $('table tr').length-1;
$(document).ready(function(){
    //add row
    $(".btn-success").click(function(){     
     let $tbody = $('tbody');
     $tbody.prepend(
        $('<tr/>').append(
          //btn 
          $('<td/>').append(
            $('<button/>', {class: 'btn btn-danger' , text: 'Delete' ,  onclick: 'deleted(this)'}).append($('<i/>', {class: 'fas fa-trash px-1'})),
            $('<button/>', {class: 'btn btn-primary mx-1 clone' , text: 'Clone' , onclick: 'cloneRow(this)'}).append($('<i/>', {class: 'fas fa-copy px-1'}))
          ) 
        )
        .append($('<td/>').append($('<input>' , {type: 'number' , class: 'num'})))    //input number
        .append($('<td/>').append($('<input>' , {type: 'text'})))     //input text
        //input radios
        .append($('<td/>').append($('<input>' , {type: 'radio', value: 'new' , id: 'new', name: 'radios'})
        ).append($('<lable/>' , {for: 'new', text: 'New' ,class: 'ml-1'}))
        .append($('<input>' , {type: 'radio', value: 'progress' , id: 'progress', name: 'radios' ,class: 'ml-3'})
        ).append($('<lable/>' , {for: 'progress', text: 'Progress' , class: 'ml-1'}))        
        .append($('<input>' , {type: 'radio', value: 'confirmed' , onchange: 'func(this)', id: 'confirmed', name: 'radios' , class: 'ml-3 confirmed' })
        ).append($('<lable/>' , {for: 'confirmed', text: 'confirmed' , class: 'ml-1'})))
        
     );
     $rowCount++
     $(".countrow").text($rowCount);
     $rowCount2++
     $(".counter-cheked").text($rowCount2);


     
    
    });


    

  
});


//delete Row
function deleted(obj) {
    $(obj).parent().parent().remove();
    $rowCount--
    $(".countrow").text($rowCount)
}

//clone Row
function cloneRow(copyy){
  $parentBtn= $(copyy).parent().parent()
  $trNew = $parentBtn.clone();
  $parentBtn.after($trNew);
  $rowCount++
  $(".countrow").text($rowCount)
}

function func(thiss){
  // $inpu='input[type=text]';
  $parentRadio= $(thiss).parent().parent()
  $("  parentRadio > input[type=text]").css(
    "background-color", "green");
}




// function func(){
//   var isChecked = $('.confirmed').prop('checked');

//   // if($("input:radio[name=radios]").is(":checked")){
//   //   alert('kjhjkj')
//   //       }
//   $rowCount2--
//     $(".counter-cheked").text($rowCount2);

//   }

//  if($(cc).prop('checked', false)) {
//   $rowCount2++
//     $(".counter-cheked").text($rowCount2);
//  }

 
// function func(){
//   if($('.confirmed').is(':checked')) {
//      $rowCount2--
//      $(".counter-cheked").text($rowCount2);
 
//   }
// }

