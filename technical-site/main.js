


function show_mobile_menu() {
    var x = document.getElementsByClassName('menu_item');
    for (i = 0; i < x.length; i++)
    {       
            x[i].style.display = "block";
    }
}

function hide_mobile_menu() {
    var x = document.getElementsByClassName('menu_item');
    for (i = 0; i < x.length; i++)
    {       
            x[i].style.display = "none";
    }
}

function toggle_mobile_menu() {
    var x = document.getElementsByClassName('menu_item');
    if (x[0].style.display == "none") 
    {
        show_mobile_menu();
    }
    else
    {
        hide_mobile_menu();
    }
}