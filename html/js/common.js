$(function () {
    // 0917 刪除
    // var windowH = window.innerHeight;
    // var sideH = windowH - 60;
    // 手機選單
    function sideOpen() {
        $("body").addClass("active");
        $(".side").addClass("active");
        $(".side .menu").addClass("side_active");
        $(".btn_side_open").hide();
        $(".btn_side_close").show();
        // 0917 刪除
        // $(".dropdown_menu").addClass("d-none");
    }

    function sideClose() {
        $("body").removeClass("active");
        $(".side").removeClass("active");
        $(".side .menu").removeClass("side_active");
        $(".btn_side_open").show();
        $(".btn_side_close").hide();
        // 0917 刪除
        // $(".dropdown_menu").removeClass("d-none");
    }

    $(".menu_oprate .btn_side_open").on("click", function () {
        sideOpen();
    });
    $(".menu_oprate .btn_side_close").on("click", function () {
        sideClose();
    });
});

$(function () {
    $("body").append('<div class="gototop"></div>');
    // gototop
    var $goToTop = $(".gototop");
    var iScrollPointA = 0; //滾回的位置
    var iScrollPointB = 20; //滾到的位置 出現gototop

    //滾動事件
    var oScrollTimer = null;
    $(window).on("scroll", function () {
        if (oScrollTimer) {
            clearTimeout(oScrollTimer);
        }
        oScrollTimer = setTimeout(function () {
            if ($(window).scrollTop() > iScrollPointB) {
                $goToTop.css({ opacity: "0.6", bottom: "70px" });
            } else {
                $goToTop.css({ opacity: "0", bottom: "30px" });
            }
        }, 150);
    });

    // 讓捲軸用動畫的方式移動到到指定id位罝
    $goToTop.on("click", function () {
        var $body = window.opera ? (document.compatMode === "CSS1Compat" ? $("html") : $("body")) : $("html,body"); //修正 Opera 問題
        $body.animate({ scrollTop: iScrollPointA }, 150);
        return false;
    });

    // 下拉選單啟動
    $(".product_table_trigger").hover(
        function () {
            $(".header_dropdown").css({
                transform: "translate(0,0px)",
                opacity: "1",
            });
        },
        function () {
            $(".header_dropdown").css({
                transform: "translate(0,-105%)",
                opacity: "0",
            });
        }
    );
    $(".header_dropdown").hover(
        function () {
            $(".header_dropdown").css({
                transform: "translate(0,0px)",
                opacity: "1",
            });
        },
        function () {
            $(".header_dropdown").css({
                transform: "translate(0,-100%)",
                opacity: "0",
            });
        }
    );

    // 側欄 li 展開
    $(".side").on("click", function (e) {
        let etc = e.target.className;
        if (etc === "icon_2 lv1" || etc === "lv2") {
            $(e.target).parent().toggleClass("active");
        }
    });

    // 語系選單 0916
    $(".lang").on("click", function () {
        $(this).toggleClass("show");
    });
});

//點擊空白處關閉 side 語言列 0917
$(function () {
    function closeSideAndLang(e){
        let lang = $(".lang")
        // 判斷e.target非目標元素且非目標子元素，關閉目標
        if (!lang.is(e.target) && lang.has(e.target).length === 0 ) {
            lang.removeClass("show")
        }

        let sideActive = $(".side.active")
        let menuActive = $(".menu.side_active")
        if (!menuActive.is(e.target) && menuActive.has(e.target).length === 0 ) {
            sideActive.removeClass("active")
            menuActive.removeClass("side_active")
            $("body").removeClass("active");
            $(".btn_side_open").show();
            $(".btn_side_close").hide();
        }
    }

    $(document).mouseup((e) => {
        closeSideAndLang(e)
    })
});