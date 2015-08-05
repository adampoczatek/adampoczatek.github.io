const SECTION_1 = 1;
const SECTION_2 = 2;
const SECTION_3 = 3;

var isScrolling = false,
	currentSectionId = null,
	section1 = document.getElementById("section-1"),
	section2 = document.getElementById("section-2"),
	section3 = document.getElementById("section-3"),
	header = document.getElementById("site-header"),
	nav = document.getElementById("nav"),
	section1Position = section1.offsetTop,
	section2Position = section2.offsetTop,
	section3Position = section3.offsetTop,
	headerHeight = header.offsetHeight;


// Listen for scroll event.
window.addEventListener("scroll", setScroll, false);

// Update cached variables.
window.addEventListener("resize", updateCachedValues, false);

window.setInterval(function () {
	if (isScrolling) {
		isScrolling = false;

		let headerBottomPosition = getScrollTop() + headerHeight;

		// Touches section 2
		if (headerBottomPosition >= section2Position && 
			headerBottomPosition < section3Position) {

			updateHeader(SECTION_2);
		}
		// Touches section 3
		else if (headerBottomPosition >= section3Position) {
			updateHeader(SECTION_3);
		}
		// Else, it's section 1
		else {
			updateHeader(SECTION_1);
		}
	}
}, 100);

// Cross-browser scrollTop
// http://stackoverflow.com/questions/871399/cross-browser-method-for-detecting-the-scrolltop-of-the-browser-window
function getScrollTop(){
    if (typeof pageYOffset !== "undefined") {

        //most browsers except IE before #9
        return pageYOffset;
    }
    else {
        var B = document.body, //IE 'quirks'
        	D = document.documentElement; //IE with doctype
        
        D = D.clientHeight ? D: B;
        
        return D.scrollTop;
    }
}

function setScroll () {
	isScrolling = true;
}

function updateCachedValues () {
	section1Position = section1.offsetTop,
	section2Position = section2.offsetTop,
	section3Position = section3.offsetTop,
	headerHeight = header.offsetHeight;
}

function updateHeader (sectionId) {
	if (currentSectionId === sectionId) {
		return;
	}

	currentSectionId = sectionId;

	if (sectionId === SECTION_2) {
		nav.classList.add("nav--alt");
		header.classList.add("site-header--alt");
		header.classList.remove("site-header--alt2");
	}
	else if (sectionId === SECTION_3) {
		nav.classList.add("nav--alt");
		header.classList.add("site-header--alt2");
		header.classList.remove("site-header--alt");
	}
	else {
		nav.classList.remove("nav--alt");
		header.classList.remove("site-header--alt");
		header.classList.remove("site-header--alt2");
	}
}