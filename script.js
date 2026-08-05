document.addEventListener("DOMContentLoaded", () => {

    // Smooth button click feedback
    const buttons = document.querySelectorAll("a");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(0.95)";

            setTimeout(() => {

                button.style.transform = "";

            }, 150);

        });

    });



    // Reveal animations
    const sections = document.querySelectorAll(
        ".section, .support-card, .payment-box, .community-box"
    );


    const observer = new IntersectionObserver((entries) => {


        entries.forEach(entry => {


            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }


        });


    }, {

        threshold:0.15

    });



    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });



});
