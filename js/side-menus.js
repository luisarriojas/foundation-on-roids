/*
 Side Menus
 Copyright (c) 2014 Luis Enrique Arriojas
 http://opensource.org/licenses/MIT
 */

var mode = "slide"; //Select a mode: "slide" or "over".
var menu = {};

$(".option").click(function() {
    menu.id = "menu-" + $(this).attr("menu");
    menu.class = $("#" + menu.id).attr("class");
    menu.width = $("#" + menu.id).outerWidth();
    sideMenu();
});

$(".option-close").click(function() {
    sideReset();
})

$("#close-button").click(function() {
    sideReset();
});

function sideMenu() { //Shows the menu
    $("#" + menu.id).css("display", "block");
    $("#close-button").css("display", "block");

    if (menu.class == "left-menu") { //Actions for left menus.
        if (mode == "slide") {
            $("#main").css("left", menu.width + "px");
            $("#main").css("right", "-" + menu.width + "px");
        }
    } else { //Actions for right menus.
        if (mode == "slide") {
            $("#main").css("left", "-" + menu.width + "px");
            $("#main").css("right", menu.width + "px");
        }
    }
};

function sideReset() { //Hides the menu
    $("#" + menu.id).css("display", "none");
    $("#close-button").css("display", "none");
    $("#main").css("left", "0px");
    $("#main").css("right", "0px");
};