


function show_mobile_menu() {
    var x = document.getElementsByClassName('nav-link');
    for (i = 0; i < x.length; i++)
    {       
            x[i].style.display = "block";
    }
}

function hide_mobile_menu() {
    var x = document.getElementsByClassName('nav-link');
    for (i = 0; i < x.length; i++)
    {       
            x[i].style.display = "none";
    }
}

function toggle_mobile_menu() {
    var x = document.getElementsByClassName('nav-link');
     if (x[0].style.display == "none" || x[0].style.display == "") 
    {           
        show_mobile_menu();
    }
    else
    {
        hide_mobile_menu();
    }
}

function highlightActiveSection() {
    let x = document.getElementsByClassName("main-section");
    for (i = 0; i < x.length; i++)
    {
        let position = x[i].getBoundingClientRect();
        if (position.top <= 50 && position.bottom > 50)
        {
            let y = document.getElementsByClassName("nav-link");
            for (j = 0; j < x.length; j++)
            {
                y[j].classList.remove('activeLink')
            }
            y[i].classList.add('activeLink');

let position1 = x[9].getBoundingClientRect();
// console.log("position top", position1.top);
// console.log("position bottom", position1.bottom);

// console.log("height", x[9].clientHeight);

if (position1.bottom <= window.innerHeight)
{
    console.log("yes!")
}
            // if (i > 0) 
            // {
            //     y[i-1].classList.remove('activeLink')
            // }
            // if (i < x.length - 1)
            // {
            //     y[i+1].classList.remove('activeLink')
            // }
            // y[i].classList.add('activeLink');
            // y[i+1].classList.remove('activeLink');


        }
    }

}

window.addEventListener("scroll", highlightActiveSection);


