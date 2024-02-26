// header scroll funtion
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector("header").classList.add("fixed");
    } else {
        document.querySelector("header").classList.remove("fixed");
    }
}

//Search-overlay-code
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}


//overlay-menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("toggleButton").style.display = "none"
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("toggleButton").style.display = "block"
}



//js counter
function animateValue(element, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function () {
        current += increment;
        element.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}


function animateAllCounters() {
    var counters = document.querySelectorAll('.count');
    counters.forEach(function (counter) {
        var start = 0;
        var end = parseInt(counter.getAttribute('data-count'));
        var duration = 2000;
        animateValue(counter, start, end, duration);
    });
}



document.addEventListener('DOMContentLoaded', function () {
    animateAllCounters();
});

//


function dark() {
    var element = document.getElementById("ss");

    element.classList.toggle("dark-mode");
    var btntext = document.getElementById("darkbtn");
    if (element.classList.contains("dark-mode")) {
        btntext.innerHTML = "Light mode";
    } else {
        btntext.innerHTML = "Dark mode";
    }
}

//active class
document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    var currentPageUrl = window.location.href;

    // Get all the menu items
    var menuItems = document.querySelectorAll('.nav-bar-links li a');

    // Loop through each menu item
    menuItems.forEach(function (item) {
        // Check if the href of the menu item matches the current page URL
        if (item.href === currentPageUrl) {
            // Add the 'active' class to the <a> tag
            item.classList.add('active');
            // Add the 'active' class to the <i> tag
            var icon = item.nextElementSibling;
            if (icon && icon.tagName.toLowerCase() === 'i') {
                icon.classList.add('active');
            }
        }
    });
});
