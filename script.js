document.addEventListener("DOMContentLoaded", () => {


    // Button click animation

    const buttons = document.querySelectorAll("a");


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(.94)";


            setTimeout(() => {

                button.style.transform = "";

            },150);

        });

    });



    // Scroll reveal animation

    const items = document.querySelectorAll(
        ".feature, .price-card, .payment-card, .discord-card"
    );


    const reveal = new IntersectionObserver((entries)=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }


        });


    },{

        threshold:.15

    });



    items.forEach(item=>{

        item.classList.add("hidden");

        reveal.observe(item);

    });



});
