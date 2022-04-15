var photos = {}

photos['iceland'] = [
  'http://i.imgur.com/vYFyEfB.jpg',
  'http://i.imgur.com/zNetDQA.jpg',
  'http://i.imgur.com/PTxJoh4.jpg',
  'http://i.imgur.com/3q3hcVp.jpg',
  'http://i.imgur.com/rKfqQvG.jpg',
  'http://i.imgur.com/zx08vsx.jpg',
  'http://i.imgur.com/u8veGtF.jpg',
  'http://i.imgur.com/sV9xIwO.jpg',
  'http://i.imgur.com/JrFPwVV.jpg',
  'http://i.imgur.com/6QV5zEJ.jpg',
  'http://i.imgur.com/fMB4EJv.jpg',
  'http://i.imgur.com/4lNedKC.jpg',
  'http://i.imgur.com/N6Oq3VS.jpg',
  'http://i.imgur.com/3Tk3gGE.jpg',
  'http://i.imgur.com/kXL99iw.jpg',
  'http://i.imgur.com/xWLNaiD.jpg',
  'http://i.imgur.com/srR2osT.jpg',
  'http://i.imgur.com/2WBWisE.jpg',
  'http://i.imgur.com/ePNYl65.jpg',
  'http://i.imgur.com/dm1IChp.jpg',
  'http://i.imgur.com/DWyYZjw.jpg'
  ];

photos['indonesia'] = [
  'http://i.imgur.com/jj4fzPn.jpg',
  'http://i.imgur.com/4D77CcT.jpg',
  'http://i.imgur.com/41VvcOe.jpg',
  'http://i.imgur.com/K3TM4Cc.jpg',
  'http://i.imgur.com/SLPsspj.jpg',
  'http://i.imgur.com/Z6hT1ci.jpg',
  'http://i.imgur.com/9eCsaXC.jpg',
  'http://i.imgur.com/3Aqm8Jo.jpg',
  'http://i.imgur.com/zHkBIzT.jpg',
  'http://i.imgur.com/6lky7gj.jpg',
  'http://i.imgur.com/gmtJzyf.jpg',
  'http://i.imgur.com/0AfjKyW.jpg',
  'http://i.imgur.com/TAHJudf.jpg',
  'http://i.imgur.com/DqLf20S.jpg',
  'http://i.imgur.com/qQOK4bd.jpg',
  'http://i.imgur.com/Dkn0KaW.jpg',
  'http://i.imgur.com/RodPFYI.jpg',
  'http://i.imgur.com/JEVu73V.jpg',
  'http://i.imgur.com/RQXF3pX.jpg',
  'http://i.imgur.com/o9nyp8o.jpg',
  'http://i.imgur.com/2MDUg9t.jpg',
];

photos['austria'] = [
  'http://i.imgur.com/6l8XnEI.jpg',
  'http://i.imgur.com/HPUO8ST.jpg',
  'http://i.imgur.com/Ye84GIQ.jpg',
  'http://i.imgur.com/O8BG2NI.jpg',
  'http://i.imgur.com/H42s9Sr.jpg',
  'http://i.imgur.com/4GLX3DU.jpg',
  'http://i.imgur.com/42gu75H.jpg',
  'http://i.imgur.com/SQq3Fxr.jpg',
  'http://i.imgur.com/Y9GZKAq.jpg',
  'http://i.imgur.com/gJ459h3.jpg',
  'http://i.imgur.com/gYxfDHy.jpg',
  'http://i.imgur.com/ru0e1lg.jpg',
  'http://i.imgur.com/UUxSYYF.jpg',
  'http://i.imgur.com/hg9e12k.jpg',
  'http://i.imgur.com/ZIvjNMF.jpg',
];

photos['nzaus'] = [
  'http://i.imgur.com/RQyPVN1.jpg',
  'http://i.imgur.com/2aYpLju.jpg',
  'http://i.imgur.com/2WiyXCY.jpg',
  'http://i.imgur.com/CNMspQK.jpg',
  'http://i.imgur.com/vLZUG26.jpg',
  'http://i.imgur.com/4Oxzgn3.jpg',
  'http://i.imgur.com/w3QZVZY.jpg',
  'http://i.imgur.com/dcPtSq4.jpg',
  'http://i.imgur.com/TKdRnq4.jpg',
  'http://i.imgur.com/JcuOdbe.jpg',
  'http://i.imgur.com/COoHCrS.jpg',
  'http://i.imgur.com/zd1vzS0.jpg',
  'http://i.imgur.com/r3MhH7x.jpg',
  'http://i.imgur.com/HjwwcUk.jpg',
  'http://i.imgur.com/2IwHloh.jpg',
  'http://i.imgur.com/Cf2a993.jpg',
  'http://i.imgur.com/qV4nZz3.jpg',
  'http://i.imgur.com/l22yQRZ.jpg',
];

/*Initialising variables for more reliable performance*/
var homepage = true
var galleryLocation = ''

$(document).ready(function(){




$('#home').click(function(){
  $('.parallax_image').show();
  $('#content').hide();
  homepage = true;
});


$('.menu_button a').click(function(){
  $('#grid').empty();
  $('.parallax_image').show();
  /*A cada 'menu_button a' se le asigna un atributo de datos html de acuerdo con su nombre de matriz, que la variable galería_ubicación recopila una vez que se hace clic*/
  galleryLocation = $(this).parent().data('location');
  $('.parallax_image').not($('#parallax_image_' + galleryLocation)).hide();
  $('.country_info').hide();
  $('body').css('overflow-y', 'auto');
  $('#grid_photo_big_wrapper').empty();
  $('#content').show();
  $('#content').insertAfter($('#parallax_image_' + galleryLocation));
  $('#country_info_' + galleryLocation).show();
  /*recorre la matriz de fotos relevante y agrega las imágenes a la cuadrícula*/
  for(var i = 0; i < photos[galleryLocation].length; i++) {
    $('#grid').append(`<div class='grid_list'><div class='image_holder'><img class='grid_photo' id='grid_photo${i+1}' src='${photos[galleryLocation][i]}'/></div></div>`);
    $('#grid_photo_big_wrapper').append(`<img class= 'grid_photo_big' id='grid_photo_big${i+1}' src='${photos[galleryLocation][i]}'/>`);
  seeGridPhotoBig(i+1);
  };
  $('#grid_photo_big_wrapper').append(`<span id='close'>&times;</span>`);
  $('#grid').show();
  homepage = false;
});



/*Función para fijar country_info en posición a medida que la página se desplaza más. Aquí es donde entra en uso la variable de la página de inicio: para solucionar un problema que causaba que la información del país permaneciera fija (hasta que se desplazaba) al navegar desde la página de inicio a la página de un país.*/
$(window).scroll(function(){
  if ($(window).scrollTop() >= ($('#content').offset().top - 70) && homepage === false) {
      $('.country_info').css({'position': 'fixed', 'top': '80px', 'left': '0'});
  } else {
    $('.country_info').css({'position': 'absolute', 'top': '10px'});
  };
});


function seeGridPhotoBig(bigPhotoNum) {
  $('#grid_photo' + bigPhotoNum).click(function(){
    $('#grid_photo_big_wrapper').show();
    $('#grid_photo_big' + bigPhotoNum).show();
/*centrando la foto principal*/
    $('.grid_photo_big').css('margin-left', '-' + $('#grid_photo_big' + bigPhotoNum).width()/2 + 'px');
    $('.grid_photo_big').css('margin-top', '-' + $('#grid_photo_big' + bigPhotoNum).height()/2 + 'px');
    $('body').css('overflow-y', 'hidden');
  });
/*Usando 'delegación de eventos', ya que el lapso ('#close') se agrega dinámicamente*/
  $(document).on('click', '#close', function(){
    $('.grid_photo_big').hide();
    $('#grid_photo_big_wrapper').hide();
    $('body').css('overflow-y', 'auto');
  })
};
});
