$(document).ready(function(){

  var posts = [{'id':1, 'img_link': 'https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-53-300x300.png', 'likeReact': 45,'hahaReact':23, 'heartReact':45,  'category':'programmer', 'subCat' : 'OthersProgrammersMeme'},
               {'id':2, 'img_link': 'https://www.freecodecamp.org/news/content/images/2019/07/panel-1-1.png', 'likeReact': 55,'hahaReact':64, 'heartReact':14, 'category':'programmer', 'subCat':'JavaScript'},
               {'id':3, 'img_link': 'https://i.redd.it/fryh34q1kmt31.jpg', 'likeReact': 35,'hahaReact':78, 'heartReact':16, 'category':'programmer', 'subCat':'JavaScript'},
               {'id':4, 'img_link': 'https://kinsta.com/wp-content/uploads/2018/11/is-php-dead-0-1.jpg', 'likeReact': 44,'hahaReact':67, 'heartReact':96, 'category':'programmer', 'subCat':'Php'},
               {'id':5, 'img_link': 'https://www.webdevelopersnotes.com/wp-content/uploads/hackerman-php-installation-on-windows-10.jpg', 'likeReact': 54,'hahaReact':67, 'heartReact':196, 'category':'programmer', 'subCat':'Php'},
               {'id':6, 'img_link': 'https://media.makeameme.org/created/programming-in-java.jpg', 'likeReact': 154,'hahaReact':167, 'heartReact':26, 'category':'programmer', 'subCat':'Java'},
               {'id':7, 'img_link': 'https://pbs.twimg.com/media/Enm7QC7XYAEO-4L.jpg', 'likeReact': 134,'hahaReact':297, 'heartReact':86, 'category':'programmer', 'subCat':'Java'},
               {'id':8, 'img_link': 'https://www.semicolonworld.com/uploads/memes/BCTJK83g8f.jpg', 'likeReact': 334,'hahaReact':697, 'heartReact':126, 'category':'programmer', 'subCat':'Python'},
               {'id':9, 'img_link': 'https://miro.medium.com/max/1400/0*DeuKpFeBfkygAXra.jpg', 'likeReact': 244,'hahaReact':147, 'heartReact':81, 'category':'programmer', 'subCat':'Python'},
               {'id':10, 'img_link': 'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33bf3a2121cc74f72a286_0AEnnZYBAYzmSXzyGaopjvEGKKO1yFqf_zMXqFTAT6vUDfXVPRifI3J8oBjZUl51PnRQqf2tqpjiRt33IKgg4sTiJi2YShGTN5iNUIoYbNj2HXobiQg4-k7yBiNT54EKOGYyZOR2.png', 'likeReact': 233,'hahaReact':523, 'heartReact':45,  'category':'programmer', 'subCat' : 'OthersProgrammersMeme'},
               


               {'id':11, 'img_link': 'https://i.pinimg.com/736x/c6/c9/89/c6c9897898ed2a21fd372e945aba164d.jpg', 'likeReact': 35,'hahaReact':26, 'heartReact':23, 'category':'anime', 'subCat':'Naruto'},
               {'id':12, 'img_link': 'https://i.redd.it/vkp1wcbm7xh41.jpg', 'likeReact': 65,'hahaReact':53, 'heartReact':78, 'category':'anime', 'subCat':'Naruto'},
               {'id':13, 'img_link': 'https://pbs.twimg.com/media/DvtBOShV4AApGOW.jpg', 'likeReact': 54,'hahaReact':54, 'heartReact':54, 'category':'anime', 'subCat':'Gintama'},
               {'id':14, 'img_link': 'http://pm1.narvii.com/6834/7cc434a8ea59e6fc5de3edf6cfc9634611bbbe51v2_00.jpg', 'likeReact': 54,'hahaReact':54, 'heartReact':54, 'category':'anime', 'subCat':'Gintama'},
               {'id':15, 'img_link': 'https://i.ytimg.com/vi/cxhMNpN5NVQ/maxresdefault.jpg', 'likeReact': 78,'hahaReact':14, 'heartReact':84, 'category':'anime', 'subCat':'OnePiece'},
               {'id':16, 'img_link': 'https://pm1.narvii.com/6505/45731516c7c2fbc51b3721fbb6ff5aa56b1288c0_hq.jpg', 'likeReact': 34,'hahaReact':94, 'heartReact':74, 'category':'anime', 'subCat':'OnePiece'},
               {'id':17, 'img_link': 'https://static.fandomspot.com/images/10/9529/001-my-hero-academia-netflix-adaptation-meme.jpg', 'likeReact': 11,'hahaReact':26, 'heartReact':99, 'category':'anime', 'subCat':'MyHeroAcademia'},
               {'id':18, 'img_link': 'https://static.wikia.nocookie.net/91e02589-0975-4860-8fc4-6959ad9396fb/scale-to-width/755', 'likeReact': 11,'hahaReact':96, 'heartReact':45, 'category':'anime', 'subCat':'MyHeroAcademia'},
               {'id':19, 'img_link': 'https://i.ytimg.com/vi/M-SaMd9OlY8/maxresdefault.jpg', 'likeReact': 59,'hahaReact':71, 'heartReact':52, 'category':'anime', 'subCat':'OthersAnimeMemes'},
               {'id':20, 'img_link': 'https://64.media.tumblr.com/f585fda5e255b2b6dc73bca4106c529c/c5386963e35380ba-76/s1280x1920/ab17014fd7ab4b52a9d1027f5fefd9b9a7145ca0.png', 'likeReact': 69,'hahaReact':25, 'heartReact':35, 'category':'anime', 'subCat':'OthersAnimeMemes'},
              ];
  var navMode;




   $.each(posts,function(key, value){
    var reactCount = value.likeReact + value.hahaReact + value.heartReact;
    var reactionCount = reactCount+"  Reaction";

    if(reactCount > 1){
      reactionCount = reactCount+"  Reactions";
    } 
    var wrapHtml = '<div class="row post '+value.category+' '+value.subCat+'  " style=" background: white ; width: 62%; margin: auto;margin-bottom: 30px;" >';
    wrapHtml += '<img class="postProfile" src="images/logo_profile.png" height="50px">';
    wrapHtml += '<a href="" class="memeAnchor" data-toggle="modal" data-target="#myModal"><img style="margin:auto;" id="'+value.id+'" class="memePost" src="'+value.img_link+'"></a>';
    wrapHtml += '<label class="col-xs-11 reactCount" reacted="0">'+reactionCount+'</label><div class="col-xs-4 react" cont="like"><i active="0" class="emoji fas fa-thumbs-up" style="font-size: 20px;"  emoji="Like"></i> </div>';
    wrapHtml += '<div class="col-xs-4 react" cont="haha"><i active="0" class="emoji fas fa-laugh-squint" style="font-size: 20px;" emoji="Haha"></i></div>';
    wrapHtml += '<div class="col-xs-4 react" cont="heart"><i active="0" class="emoji fas fa-heart" style="font-size: 20px;" emoji="Heart"></i></div></div>';

    $('.memesSection').append($(wrapHtml));
  });



    $('.nav-item').click(function(){
      navMode = $(this).attr('id');
       console.log(navMode);
      if(navMode == "AnimeNav"){
        $('.post').hide('300');
        $('.anime').show('300');
        $('.subCatProg').hide('300');
        $('.subCatAnime').show('300');
      }

      if(navMode == "ProgrammerNav"){
        $('.post').hide('300');
        $('.programmer').show('300');
        $('.subCatProg').show('300');
        $('.subCatAnime').hide('300');
      }

      if(navMode == "AllNav"){
        $('.post').show('300');
        $('.subCatProg').show('300');
        $('.subCatAnime').show('300');
      }

    });


    $('.sort').click(function(){
     var sortBar = $(this).html();
     var subCat =  sortBar.split("&nbsp;");
     var subCategory = subCat[1].replaceAll(" ","");
      console.log(subCategory);

      
      $(".post").hide(300);
      $("."+subCategory).show(300);

    });
    

    $('#Send').click(function(e){
   

      e.preventDefault();
      if(!$('#name').val()){
        alert("No name");
      }
      else if(!$('#age').val()){
        alert("No age");
      }
      else if(!$('#email').val()){
        alert("No email");
      }
      else if(!$('#favorite').val()){
        alert("No favorite");
      }
      else if(!$('input[name="gender"]:checked')){
        alert("No gender");
      }
       else if(!$('textarea').val()){
        alert("No comments");
      }
      else{
      alert("Thank You For Sending Feedback");
      $('form').get(0).reset();
    }


    });









$('.post .emoji').click(function(){
    var $emoji = $(this).attr('emoji');
    var $reacted = $(this).attr('active');
    var $hahaEmoji = $(this).parent().parent().children('.react[cont="haha"]').children();
    var $likeEmoji = $(this).parent().parent().children('.react[cont="like"]').children();
    var $heartEmoji = $(this).parent().parent().children('.react[cont="heart"]').children();

    var $reactCount = $(this).parent().parent().children('.reactCount');
    var isReacted = $reactCount.attr('reacted');

    $(this).animate({'font-size':'30px'},200, function(){$(this).css({'font-size':'20px'})});

   

        if ($emoji == 'Like' && $likeEmoji.attr('active') == '0'){
          $(this).css('color','blue');
          $hahaEmoji.css('color','');
          $heartEmoji.css('color','');

          $likeEmoji.attr('active','1');
          $hahaEmoji.attr('active','0');
          $heartEmoji.attr('active','0');
          $reactCount.attr('reacted', '1');
        }
        else if($emoji == 'Like' && $likeEmoji.attr('active') == '1'){
          $likeEmoji.attr('active','0');
          $(this).css('color','');
           $reactCount.attr('reacted', '0');
        }

        if ($emoji == 'Haha' && $hahaEmoji.attr('active') == '0'){
          $(this).css('color','#e8f000');
          $likeEmoji.css('color','');
          $heartEmoji.css('color','');

          $hahaEmoji.attr('active','1');
          $likeEmoji.attr('active','0');
          $heartEmoji.attr('active','0');
          $reactCount.attr('reacted', '1');
        }
        else if($emoji == 'Haha' && $hahaEmoji.attr('active') == '1'){
          $hahaEmoji.attr('active','0');
          $(this).css('color','');
          $reactCount.attr('reacted', '0');
        }

        if ($emoji == 'Heart' && $heartEmoji.attr('active') == '0'){
          $(this).css('color','red');
          $likeEmoji.css('color','');
          $hahaEmoji.css('color','');

          $heartEmoji.attr('active','1');
          $hahaEmoji.attr('active','0');
          $likeEmoji.attr('active','0');
          $reactCount.attr('reacted', '1');
        }
        else if($emoji == 'Heart' && $heartEmoji.attr('active') == '1'){
          $heartEmoji.attr('active','0');
          $(this).css('color','');
          $reactCount.attr('reacted', '0');
        }


  if (isReacted == 1 && $heartEmoji.attr('active') == '0' && $hahaEmoji.attr('active') == '0' && $likeEmoji.attr('active') == '0'){
      var numReaction = $reactCount.html().split(" ");
      console.log(numReaction[0]);
      var sumReact = parseInt(numReaction[0]) - 1;
      $reactCount.html(sumReact+" Reactions");
  } 

  if (isReacted == 0){
      var numReaction = $reactCount.html().split(" ");
      console.log(numReaction[0]);
      var subReact = parseInt(numReaction[0]) + 1;
      $reactCount.html(subReact+" Reactions");
  } 


});





  $('#UpContainer').hide();
   $(".brandbox").css( 'border-right', '2px solid #858585');
  $(window).resize(function(){
    if ($(window).width()< 980) {
      $(".brandbox").css('border',"");
    }
    else{
       $(".brandbox").css( 'border-right', '2px solid #858585');
    }
  });


  $(window).scroll(function(){
    var topVal = $('html').scrollTop()
      if(topVal > 800){
        $('#UpContainer').slideDown(200);
      }
      else if(topVal < 700){
        $('#UpContainer').slideUp(200);
      }
  });


  $(".nav-item, .sort").hover(function(){

     $(this).css({border: '0 solid white'}).animate({
        borderWidth: 4
       }, 200);

  },


  function(){
    $(this).css({border: '0 solid white'}).animate({
        borderWidth: 2
       }, 200);
  }


  );


$('#myModal').on('show.bs.modal',function(e){

  var $link = $(e.relatedTarget).children().attr("src");
  var $id = $(e.relatedTarget).children().attr("id");
  $('.memeModal').prop('src',$link);

   $.each(posts,function(key, value){
      if ($id == value.id) {
          $('#totalLike small').html("");
          $('#totalHaha small').html("");
          $('#totalHeart small').html("");

          $('#totalLike small').append(" "+value.likeReact);
          $('#totalHaha small').append(" "+value.hahaReact);
          $('#totalHeart small').append(" "+value.heartReact);
      }
   });

});


$(".nav-item").click(function(){
  $(".nav-item").css({'background': 'black'});
  $(".nav-item").children().css({'color': 'white','font-weight':'500'});
  $(this).css({'background':'white', 'color':'black'});
   $(this).children().css({'color':'black','font-weight':'550'});
});


$(".sort").click(function(){
  $(".sort").css({'background': 'black','color': 'white','font-weight':'500'});
   $(".sort").children().css({'color': 'white'});
   
  $(this).css({'background':'white', 'color':'black', 'font-weight':'550'});
   $(this).children().css({'color':'black'});
});








  // OLD 






  $('.brand').click(function(){
      $('.brand').prop('checked',false);
      $(this).prop('checked',true);
      var currentBrand = this.id;
    

      if(currentBrand == "ford"){
        $('.honda').hide('slow');
        $('.mazda').hide('slow');
        $('.mitsubishi').hide('slow');
        $('.toyota').hide('slow');
        $('.ford').show('slow');
      }

      if(currentBrand == "honda"){
        $('.ford').hide('slow');
        $('.mazda').hide('slow');
        $('.mitsubishi').hide('slow');
        $('.toyota').hide('slow');
        $('.honda').show('slow');
      }

      if(currentBrand == "mazda"){
        $('.ford').hide('slow');
        $('.honda').hide('slow');
        $('.mitsubishi').hide('slow');
        $('.toyota').hide('slow');
        $('.mazda').show('slow');
      }

      if(currentBrand == "mitsubishi"){
        $('.ford').hide('slow');
        $('.honda').hide('slow');
        $('.mazda').hide('slow');
        $('.toyota').hide('slow');
        $('.mitsubishi').show('slow');
      }

      if(currentBrand == "toyota"){
        $('.ford').hide('slow');
        $('.honda').hide('slow');
        $('.mazda').hide('slow');
        $('.mitsubishi').hide('slow');
        $('.toyota').show('slow');
      }

      if(currentBrand == "all"){
        $('.ford').show('slow');
        $('.honda').show('slow');
        $('.mazda').show('slow');
        $('.mitsubishi').show('slow');
        $('.toyota').show('slow');
      }


  });



  $('.socialMedias').click(function(e){
    e.preventDefault();
    alert('Not Implemented Yet');
  });


});


