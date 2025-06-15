const input = document.getElementById("input_screen");
let string = "";

const buttons = document.querySelectorAll(".buttons");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.innerText;

        if (buttonText === "AC") {
            string = "";
            input.value = string;
        } else if (buttonText === "DE") {
            string = string.slice(0, -1);
            input.value = string;
        } else if (buttonText === "=") {
            try {
                // Replace percentage
                const parsedString = string.replace(/(\d+)%/g, "($1/100)");
                const result = eval(parsedString);
                string = result;
                input.value = result;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});
