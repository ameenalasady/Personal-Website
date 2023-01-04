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
    darklightElements =
        ".togglecontainer, .navcontainer, .main, .aboutmeinmain, .projectitems, .contact, .rowflex, .columnflex, .projectsnote, .hi, .mydescription, .homebutton, .aboutmebutton, .projectsbutton, .contactbutton, .aboutmetext1, .contacttitle, .contactmessage, .email, .fa-envelope, .linkedin, .fa-linkedin-in";
    darklightfilterElements =
        ".mobile-menu, .projectnavigationbuttonright, .projectnavigationbuttonleft";

    if (localStorage.isDarkMode) {
        if (localStorage.isDarkMode == "true") {
            $("#toggle").prop("checked", false);
            $(darklightElements).removeClass("light");
            $(darklightfilterElements).removeClass("lightfilter");
            $(darklightElements).addClass("dark");
            $(darklightfilterElements).addClass("darkfilter");
        } else {
            $("#toggle").prop("checked", true);
            $(darklightElements).removeClass("dark");
            $(darklightfilterElements).removeClass("darkfilter");
            $(darklightElements).addClass("light");
            $(darklightfilterElements).addClass("lightfilter");
        }
    } else {
        localStorage.isDarkMode = false;
        $("#toggle").prop("checked", true);
    }

    //All of these functions are for toggling dark mode.
    $("#toggle").change(function() {
        if ($(this).is(":checked") == true) {
            localStorage.setItem("isDarkMode", false);
            $(darklightElements).removeClass("dark");
            $(darklightfilterElements).removeClass("darkfilter");
            $(darklightElements).addClass("light");
            $(darklightfilterElements).addClass("lightfilter");
        } else if ($(this).is(":checked") == false) {
            localStorage.setItem("isDarkMode", true);
            $(darklightElements).removeClass("light");
            $(darklightfilterElements).removeClass("lightfilter");
            $(darklightElements).addClass("dark");
            $(darklightfilterElements).addClass("darkfilter");
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