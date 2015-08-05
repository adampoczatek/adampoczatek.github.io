import {setupNav} from "modules/navigation.js";
import {Modal} from "modules/modal.js";


// Setup navigation.
setupNav();

// Setup "Hire Me" modal.
new Modal(document.getElementById("hire-me"), 
    document.getElementById("hire-me-close"), 
    document.querySelectorAll(".hire-me-trigger"));