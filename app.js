let comp = document.querySelector(".comp-ges");
let user = document.querySelector(".user-ges");
let winStatus = document.querySelector(".win-status");
let chances = document.querySelector(".life");
let score = document.querySelector(".score");
let refresh = document.querySelector(".refresh");

let ges = document.querySelectorAll(".gesture");
ges = Array.from(ges);

let rand;
const gestures = ["✊", "🤚", "✌️"];

let currentScore = 0;
score.textContent = currentScore;

let heart = document.querySelectorAll(".heart");
let lifeLine = 3;

let value;

const runAllFunc = () => {
	ges.forEach((element, index) => {
		element.addEventListener("click", () => {
			let ges = element.textContent;

			rand = Math.floor(Math.random() * 3);
			value = index;

			user.textContent = ges;
			comp.textContent = gestures[rand];
			checkQuery(value);
			score.textContent = currentScore;
		});
	});
};

const checkQuery = (value) => {
	if (value === 0) {
		if (value === rand) {
			winStatus.textContent = "Draw 😐";
			currentScore += 3;
		} else if (value < rand && rand > ++value) {
			winStatus.textContent = "Win 🥳";
			currentScore += 5;
		} else {
			winStatus.textContent = "Loose 😢";
			currentScore -= 2;
		}
	} else if (value === 1) {
		if (value === rand) {
			winStatus.textContent = "Draw 😐";
			currentScore += 3;
		} else if (value > rand && value < ++value) {
			winStatus.textContent = "Win 🥳";
			currentScore += 5;
		} else {
			winStatus.textContent = "Loose 😢";
			currentScore -= 2;
		}
	} else {
		if (value === rand) {
			winStatus.textContent = "Draw 😐";
			currentScore += 3;
		} else if (value > rand && rand > 0) {
			winStatus.textContent = "Win 🥳";
			currentScore += 5;
		} else {
			winStatus.textContent = "Loose 😢";
			currentScore -= 2;
		}
	}
};

runAllFunc();

refresh.addEventListener("click", () => {
	location.reload();
});

