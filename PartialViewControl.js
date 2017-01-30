function getRegister(screenNum) {

  //console.log("try get register");
  $.get('partialViews/_register.html', function(data) {


    $(".contentRoot").append(data);
    //swiper.slideTo(screenNum, 1500);

    navHashHistory('_register');
  }); //end get

}


//Get content
function getScreenContent(screen) {


  var contentLoaded ;




  console.log("screen content injection for "+screen);

  $.get('partialViews/'+screen+'.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);
    contentLoaded = true;

  }); //end get


} //close function
