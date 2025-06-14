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
                string = eval(string);
                input.value = string;
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
