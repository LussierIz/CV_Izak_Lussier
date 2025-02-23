$(document).ready(() => {
    let timeoutId;
    let boolMode = false;
    
    $("#switch-mode").on('change', () => {
        if (boolMode) {
            // Switch to light mode
            $("body").removeClass("dark-mode");
            boolMode = false;
        } else {
            // Switch to dark mode
            $("body").addClass("dark-mode");
            boolMode = true;
        }
    });

    // Afficher le menu au survol du hamburger
    $(".hamburger-menu").mouseenter(() => {
        clearTimeout(timeoutId);
        $(".dropdown-menu").addClass("active");
        $(".hamburger-menu").addClass("active");
    });

    // Masquer le menu après un court délai si la souris quitte le menu hamburger
    $(".hamburger-menu").mouseleave(() => {
        timeoutId = setTimeout(() => {
            $(".dropdown-menu").removeClass("active");
            $(".hamburger-menu").removeClass("active");
        }, 150);
    });

    // Empêcher la fermeture immédiate du menu si la souris entre dedans
    $(".dropdown-menu").mouseenter(() => {
        clearTimeout(timeoutId);
    });

    // Fermer le menu si la souris quitte le dropdown
    $(".dropdown-menu").mouseleave(() => {
        timeoutId = setTimeout(() => {
            $(".dropdown-menu").removeClass("active");
            $(".hamburger-menu").removeClass("active");
        }, 150);
    });
});