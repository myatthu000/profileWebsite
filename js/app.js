

    let screenWindowHeight = $(window).height();
    // console.log("screenWindowHeight",screenWindowHeight);

    $(window).scroll(function () {
        let currentPosition = $(this).scrollTop();
        // console.log(currentPosition);
        if(currentPosition>=screenWindowHeight-100){
            $(".site-nav").addClass("site-nav-scroll");
        }else{
            $(".site-nav").removeClass("site-nav-scroll");
            setActive('home');
        }
    });

    $(".navbar-toggler").click(function () {
        let result = $(".navbar-collapse").hasClass("show");
        console.log(result);

        if(result){

            $(".menu-icon").removeClass(`fa-times`).addClass(`fa-bars`);

        }else {

            $(".menu-icon").removeClass(`fa-bars`).addClass(`fa-times`);

        }

    });

    function setActive(current) {

        $(".nav-link").removeClass('current-section')

        $(`.nav-link[href='#${current}']`).addClass('current-section');
    }




    $(window).on('load',function () {
        $('.loader-container').fadeOut(900,function () {
            $(this).remove();
        });
    })
