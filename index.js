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
    document.getElementById("toggleButton").style.display= "none"
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("toggleButton").style.display= "block"
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



