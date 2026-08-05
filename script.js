const buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {

    button.addEventListener("click", function(){

        if(this.innerText === "Donate"){

            alert(
                "Thank you for supporting Project VOLX ❤️\n\nPayment setup coming soon."
            );

        }

    });

});
