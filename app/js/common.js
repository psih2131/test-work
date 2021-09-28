$(document).ready(function() {
//ajax json url	
function ajax1Name() {
    return $.ajax({
        url: "http://techi.envivent.com/names.json",
        dataType: "json",   
    });
}

function ajaxDescription() {
    return $.ajax({
        url: "http://techi.envivent.com/description.json",
        dataType: "json",       
    });
}

function ajaxImage() {
    return $.ajax({
        url: "http://techi.envivent.com/images.json",
        dataType: "json",
    });
}

//ajax information donload script
$.when(ajax1Name(), ajaxDescription(), ajaxImage()).done(function(ajName, ajDecription, ajImage){

    let result = [];
    let name = ajName[0].employees;
    let description = ajDecription[0].employees;
    let image = ajImage[0].employees;

    // add info in new array
    $.each(name, function (index, value) {
      result.push({
        id: index, 
        firstname: name[index].first_name, 
        lastname: name[index].last_name, 
        position: description[index].title, 
        description: description[index].description, 
        img: image[index].full 
      });
    });

    //random array select
    result.sort(function() {
        return 0.5 - Math.random();
    });
    
    // donload 3 element on page
    for (var i = 0; i < 3; i++) {
      let result_firstName = result[i].firstname;
      let result_lastName = result[i].lastname;
      let result_position = result[i].position;
      let result_description = result[i].description;
      let result_image = result[i].img;
      let imageFolderUrl = 'https://techi.envivent.com/employees/';
      let newTeamElement = $('<div class="team-section__human-box human-box"> '+
      	                     '<img src="'+imageFolderUrl+result_image+'" alt="server error" class="human-box__image">'+
      	                     '<div class="human-box__info-conteiner">'+
      	                     '<div class="human-box__header">'+
      	                     '<h2 class="human-box__name">'+result_firstName+' '+result_lastName+'</h2>'+
      	                     '<p class="human-box__position">'+result_position+'</p>'+
      	                     '</div> <p class="human-box__description">'+result_description+'</p'+
      	                     '</div>'+
      	                     '</div> ');
      let conteiner = $('.team-section__human-row');
      $(conteiner).append(newTeamElement);
    }

    //show / hide info in human box script
	$('.human-box').on('click',function(){
		let heightContent = $(this).find('.human-box__description').outerHeight();
		let heightHeader = $(this).find('.human-box__header').outerHeight();
		let allHeightContent = heightContent+heightHeader;
		if($(this).hasClass('human-box_activ')){
			$('.human-box').removeClass('human-box_activ');
			$('.human-box__info-conteiner').css({
				'height': '120px'
			});
			$(this).removeClass('human-box_activ');
			$(this).find('.human-box__info-conteiner').css({
				'height': '120px'
			});
		}
		else{
			$('.human-box').removeClass('human-box_activ');
			$('.human-box__info-conteiner').css({
				'height': '120px'
			});
			$(this).addClass('human-box_activ');
			$(this).find('.human-box__info-conteiner').css({
				'height': allHeightContent+'px'
			});
		}
	});
});

//burger meny open/close
$('.burger-meny').on('click',function(){
	$('.header__nav-mobile').slideToggle(300,function(){
		if($(this).is(':visible')){
			$('.burger-meny').addClass('burger-meny_activ');
		}
		else{
			$('.burger-meny').removeClass('burger-meny_activ');
		}
	});
});

});

