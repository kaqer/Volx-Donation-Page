document.addEventListener("DOMContentLoaded", () => {


    const buttons = document.querySelectorAll("a");


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(.95)";


            setTimeout(() => {

                button.style.transform = "";

            },150);

        });

    });



    const cards = document.querySelectorAll(
        ".price-card, .about-box, .payment-box, .discord-box"
    );


    const observer = new IntersectionObserver((entries)=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }


        });


    },{
        threshold:.15
    });



    cards.forEach(card=>{

        card.classList.add("hidden");

        observer.observe(card);

    });


});
