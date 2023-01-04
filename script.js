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

$(function() {
    console.log("ready");
    darklightColorElements =
        ".projectsnote, .hi, .mydescription, .homebutton, .aboutmebutton, .projectsbutton, .contactbutton, .aboutmetext1, .contacttitle, .contactmessage, .email, .fa-envelope, .linkedin, .fa-linkedin-in";
    darklightBackgroundElements =
        ".navcontainer, .main, .aboutmeinmain, .projectitems, .contact, .rowflex, .columnflex, .projectsnote";
    darklightfilterElements =
        ".mobile-menu, .projectnavigationbuttonright, .projectnavigationbuttonleft";

    if (localStorage.isDarkMode) {
        if (localStorage.isDarkMode == "true") {
            $("#toggle").prop("checked", false);
            $(darklightColorElements).removeClass("lightColor");
            $(darklightBackgroundElements).removeClass("lightBackground");
            $(darklightfilterElements).removeClass("lightfilter");
            $(darklightColorElements).addClass("darkColor");
            $(darklightBackgroundElements).addClass("darkBackground");
            $(darklightfilterElements).addClass("darkfilter");
            $(".mobile-menu-exit").css("filter", "none");
        } else {
            $("#toggle").prop("checked", true);
            $(darklightColorElements).removeClass("darkColor");
            $(darklightBackgroundElements).removeClass("darkBackground");
            $(darklightfilterElements).removeClass("darkfilter");
            $(darklightColorElements).addClass("lightColor");
            $(darklightBackgroundElements).addClass("lightBackground");
            $(darklightfilterElements).addClass("lightfilter");
            $(".mobile-menu-exit").css("filter", "invert(1)");
        }
    } else {
        localStorage.isDarkMode = false;
        $("#toggle").prop("checked", true);
    }

    //All of these functions are for toggling dark mode.
    $("#toggle").change(function() {
        if ($(this).is(":checked") == true) {
            localStorage.setItem("isDarkMode", false);
            $(darklightColorElements).removeClass("darkColor");
            $(darklightBackgroundElements).removeClass("darkBackground");
            $(darklightfilterElements).removeClass("darkfilter");
            $(darklightColorElements).addClass("lightColor");
            $(darklightBackgroundElements).addClass("lightBackground");
            $(darklightfilterElements).addClass("lightfilter");
            $(".mobile-menu-exit").css("filter", "invert(1)");
        } else if ($(this).is(":checked") == false) {
            localStorage.setItem("isDarkMode", true);
            $(darklightColorElements).removeClass("lightColor");
            $(darklightBackgroundElements).removeClass("lightBackground");
            $(darklightfilterElements).removeClass("lightfilter");
            $(darklightColorElements).addClass("darkColor");
            $(darklightBackgroundElements).addClass("darkBackground");
            $(darklightfilterElements).addClass("darkfilter");
            $(".mobile-menu-exit").css("filter", "none");
        }
    });

    // $(".mobile-menu").on("click", function() {
    //     if (localStorage.isDarkMode == true) {

    //     }
    // });

    //This is for switching pages.
    $(".homebutton").on("click", function() {
        $(".main").addClass("active");
        $(".projects").removeClass("active");
        $(".contact").removeClass("active");
        $(".aboutmeinmain").removeClass("active");
        $(".togglecontainer").css("display", "grid");
    });

    $(".aboutmebutton").on("click", function() {
        $(".aboutmeinmain").addClass("active");
        $(".projects").removeClass("active");
        $(".contact").removeClass("active");
        $(".main").removeClass("active");
        $(".togglecontainer").css("display", "grid");
    });

    $(".projectsbutton").on("click", function() {
        $(".projects").addClass("active");
        $(".aboutmeinmain").removeClass("active");
        $(".contact").removeClass("active");
        $(".main").removeClass("active");
        $(".togglecontainer").css("display", "none");
    });

    $(".contactbutton").on("click", function() {
        $(".contact").addClass("active");
        $(".projects").removeClass("active");
        $(".aboutmeinmain").removeClass("active");
        $(".main").removeClass("active");
        $(".togglecontainer").css("display", "grid");
    });

    //This is for navigating between projects on mobile.
    $(".projectnavigationbuttonright").on("click", function() {
        $(".projectitem2").addClass("activeproject");
        $(".projectitem1").removeClass("activeproject");
        $(".projectnavigationbuttonright").css("display", "none");
        $(".projectnavigationbuttonleft").css("display", "block");
    });

    $(".projectnavigationbuttonleft").on("click", function() {
        $(".projectitem1").addClass("activeproject");
        $(".projectitem2").removeClass("activeproject");
        $(".projectnavigationbuttonleft").css("display", "none");
        $(".projectnavigationbuttonright").css("display", "block");
    });
});

$(window).resize(function() {
    if ($(window).width() > 899) {}

    if ($("#projects").hasClass("active")) {
        $(".togglecontainer").css("display", "none");
    } else {
        $(".togglecontainer").css("display", "grid");
    }
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
//This unfortunately doesn't show on GitHub sites.