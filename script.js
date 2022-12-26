//This is for the mobile menu element.

const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
    nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
});

//These jQuery functions can be optimized by using multiple selectors for similar elements.
//Will be implemented in a future update.
//All of these functions are for toggling dark mode.
$(function() {
    $("input[type='checkbox']").change(function() {
        if ($(this).is(":checked")) {
            $(".togglecontainer").css("background", "white");
            $(".navcontainer").css("background", "white");
            $(".main").css("background", "white");
            $(".aboutmeinmain").css("background", "white");
            $(".projectitems").css("background", "white");
            $(".contact").css("background", "white");
            $(".rowflex").css("background", "white");
            $(".columnflex").css("background", "white");
            $(".projectsnote").css("background", "white");
            $(".projectsnote").css("color", "black");
            $(".hi").css("color", "black");
            $(".mydescription").css("color", "black");
            $(".homebutton").css("color", "black");
            $(".aboutmebutton").css("color", "black");
            $(".projectsbutton").css("color", "black");
            $(".contactbutton").css("color", "black");
            $(".aboutmetext1").css("color", "black");
            $(".contacttitle").css("color", "black");
            $(".contactmessage").css("color", "black");
            $(".mobile-menu").css("filter", "none");
            $(".email, .fa-envelope, .linkedin, .fa-linkedin-in").css(
                "color",
                "black"
            );
        } else {
            $(".togglecontainer").css("background", "hsl(240, 100%, 10%)");
            $(".navcontainer").css("background", "hsl(240, 100%, 10%)");
            $(".main").css("background", "hsl(240, 100%, 10%)");
            $(".aboutmeinmain").css("background", "hsl(240, 100%, 10%)");
            $(".projectitems").css("background", "hsl(240, 100%, 10%)");
            $(".contact").css("background", "hsl(240, 100%, 10%)");
            $(".rowflex").css("background", "hsl(240, 100%, 10%)");
            $(".columnflex").css("background", "hsl(240, 100%, 10%)");
            $(".projectsnote").css("background", "hsl(240, 100%, 10%)");
            $(".projectsnote").css("color", "white");
            $(".hi").css("color", "white");
            $(".mydescription").css("color", "white");
            $(".homebutton").css("color", "white");
            $(".aboutmebutton").css("color", "white");
            $(".projectsbutton").css("color", "white");
            $(".contactbutton").css("color", "white");
            $(".aboutmetext1").css("color", "white");
            $(".contacttitle").css("color", "white");
            $(".contactmessage").css("color", "white");
            $(".mobile-menu").css(
                "filter",
                "invert(100%) sepia(100%) saturate(31%) hue-rotate(60deg) brightness(105%) contrast(109%)"
            );
            $(".email, .fa-envelope, .linkedin, .fa-linkedin-in").css(
                "color",
                "white"
            );
        }
    });

    //This is for switching pages.

    $(".homebutton").on("click", function() {
        $(".main").addClass("active");
        $(".projects").removeClass("active");
        $(".contact").removeClass("active");
        $(".aboutmeinmain").removeClass("active");
    });

    $(".aboutmebutton").on("click", function() {
        $(".aboutmeinmain").addClass("active");
        $(".projects").removeClass("active");
        $(".contact").removeClass("active");
        $(".main").removeClass("active");
    });

    $(".projectsbutton").on("click", function() {
        $(".projects").addClass("active");
        $(".aboutmeinmain").removeClass("active");
        $(".contact").removeClass("active");
        $(".main").removeClass("active");
    });

    $(".contactbutton").on("click", function() {
        $(".contact").addClass("active");
        $(".projects").removeClass("active");
        $(".aboutmeinmain").removeClass("active");
        $(".main").removeClass("active");
    });
});

var animation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById("planeanimation"), // required
    path: "/imgs/YswvQaDXE2.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Demo Animation", // optional
    rendererSettings: {
        scaleMode: "cover",
    },
});