document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu Toggle
    var sidemenu = document.getElementById("sidemenu");
    var menuIcon = document.querySelector(".fa-bars");
    var closeIcon = document.querySelector(".fa-circle-xmark");

    // Debugging to confirm elements are found
    if (!sidemenu) {
        console.error("Sidemenu element not found!");
    }
    if (!menuIcon) {
        console.error("Menu icon not found!");
    }
    if (!closeIcon) {
        console.error("Close icon not found!");
    }

    window.openmenu = function() {
        if (sidemenu) {
            sidemenu.style.right = "0";
            console.log("Menu opened: right set to 0");
        }
    };

    window.closemenu = function() {
        if (sidemenu) {
            sidemenu.style.right = "-200px";
            console.log("Menu closed: right set to -200px");
        }
    };

    // Tab Switching in About Section
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    window.opentab = function(event, tabname) {
        for (var tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (var tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    };

    // Contact Form Submission to WhatsApp
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = this.elements["Name"].value;
        const email = this.elements["email"].value;
        const message = this.elements["Message"].value;
        const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        const whatsappURL = `https://wa.me/919573092837?text=${whatsappMessage}`;
        window.open(whatsappURL, "_blank");
        
        // Display success message and reset form
        const msg = document.getElementById("msg");
        msg.innerHTML = "Message Sent Successfully";
        setTimeout(function() {
            msg.innerHTML = "";
        }, 3000);
        this.reset();
    });
});