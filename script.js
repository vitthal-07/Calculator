document.addEventListener("DOMContentLoaded", function () {
	const display = document.getElementById("display");
	const buttons = document.querySelectorAll(".buttons button");

	buttons.forEach((button) => {
		button.addEventListener("click", function () {
			const buttonText = button.textContent;

			if (buttonText === "=") {
				try {
					display.value = eval(display.value);
				} catch (error) {
					display.value = "Error";
				}
			} else if (buttonText === "C") {
				display.value = "";
			} else {
				display.value += buttonText;
			}
		});
	});
});
