$(function(){

    var windowH = window.innerHeight;
    // 手機選單
    function sideOpen(){
       
        $('body').addClass('active');
        $('.side').css({height:windowH}).addClass('active');
        $('.side .menu').addClass('side_active');
        $('.btn_side_open').hide();
        $('.btn_side_close').show();
    }

    function sideClose(){
        $('body').removeClass('active');
        $('.side').css({height:'auto'}).removeClass('active');
        $('.side .menu').removeClass('side_active');
        $('.btn_side_open').show();
        $('.btn_side_close').hide();
    }


    $('.menu_oprate .btn_side_open').on('click',function(){
        sideOpen();
    });
    $('.menu_oprate .btn_side_close').on('click',function(){
        sideClose();
    });

    // pc版首頁選單 FIXED

    // $('header').after($('.menu').clone());
    // $('.menu').eq(0).addClass('menu_ori')
    // $('.menu').eq(1).addClass('menu_clone');



    var iNav_1Point = parseInt( $(".menu_ori").offset().top+ $(".menu_ori").height())
    var iWinScrollT;
    var oScrollTimer = null;

   

    // $(window).on("scroll", function(){
    //     var iwinWidth = $(window).width();
    //     //計時器歸零
    //     if(oScrollTimer){clearTimeout(oScrollTimer);}

    //     oScrollTimer = setTimeout(function(){
    //         iWinScrollT = $(window).scrollTop();
    //         if(iWinScrollT > iNav_1Point){
               
    //             if(iwinWidth > 768){
    //                 $(".menu_ori").css({"visibility":"hidden"});
    //                 $(".menu_clone").addClass('fixed_active')
    //             }
    //         }else{
    //             if(iwinWidth > 768){
    //                 $(".menu_ori").css({"visibility":"visible"});
    //                 $(".menu_clone").removeClass('fixed_active')
    //             }
              
    //         }
    //     },0);

    // });

 

});


$(function(){
       $('body').append('<div class="gototop"></div>')
    // gototop
    var $goToTop = $(".gototop");
	var iScrollPointA = 0;  //滾回的位置
	var iScrollPointB = 20; //滾到的位置 出現gototop
	
	//滾動事件
	var oScrollTimer = null;
	$(window).on("scroll", function(){

		if(oScrollTimer){
			clearTimeout(oScrollTimer);
		}
		oScrollTimer = setTimeout(function(){
							if( $(window).scrollTop() > iScrollPointB) {
								$goToTop.css({"opacity":"0.6", "bottom":"70px"});	
							} else {
								$goToTop.css({"opacity":"0", "bottom":"30px"});	
							}
						},150);
	});
	
	// 讓捲軸用動畫的方式移動到到指定id位罝
	$goToTop.on("click", function(){
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: iScrollPointA}, 150);
		return false;
	});
});