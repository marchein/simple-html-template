function toggle() {
    var x = document.getElementById("navigation");
    x.classList.toggle("show");
}

function scrollTo(to, duration) {
    if (document.body.scrollTop == to) {
        return;
    }
    let diff = to - document.body.scrollTop;
    let scrollStep = Math.PI / (duration / 10);
    let count = 0, currPos;
    start = window.pageYOffset;
    scrollInterval = setInterval(function(){
        if (document.body.scrollTop != to) {
            count = count + 1;
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            document.body.scrollTop = currPos;
        } else { 
            clearInterval(scrollInterval); 
        }
    }, 10);
}

function smoothScroll(id) {
    let dest = document.getElementById(id);
    scrollTo(dest.offsetTop, 500);
}