let openAnswer = () => {
	let openBtns = document.querySelectorAll(`.open`);
	let btnParent;
	let answer;

	openBtns.forEach((btn) => {
		btn.addEventListener(`click`, () => {
			btnParent = btn.parentElement;
			answer = btnParent.nextElementSibling;

			// если a уже видно
			if (!answer.classList.contains(`hidden`)) {
				// то спрятать
				answer.classList.add(`hidden`);
				btn.innerHTML = `+`;
			} else {
				// а если еще не видно то показать
				answer.classList.remove(`hidden`);
				btn.innerHTML = `-`;
			}
		});
	});
};

openAnswer()