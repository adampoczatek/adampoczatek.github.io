export function setupNav () {
    // Navigation
    const NAV_OPENED_CLASS = "site-header__menu--expanded";
    const NAV_TRIGGER_OPENED_CLASS = "mobile-menu-trigger--opened";
    const CONTENT_OPENED_CLASS = "main-content--opened";

    var nav = document.getElementById("nav"),
        navTrigger = document.getElementById("nav-trigger"),
        contentWrapper = document.getElementById("content"),
        opened = false;

    navTrigger.addEventListener("click", toggleMenu, false);

    function toggleMenu () {
        _updateClasses(opened);

        opened = !opened;
    } 

    function _updateClasses (opened) {
        var method = opened ? "remove" : "add";

        nav.classList[method](NAV_OPENED_CLASS);
        navTrigger.classList[method](NAV_TRIGGER_OPENED_CLASS);
        contentWrapper.classList[method](CONTENT_OPENED_CLASS);
    }
}