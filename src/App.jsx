import { useState, useRef } from "react";
import Header from "./components/Header";
import Left from "./components/Left";
import Right from "./components/Right";
import MainContext from "./context";
import createRandomNumber from "./helper/randomNumber";
import Confetti from "react-confetti";

let random = createRandomNumber(5);
function App() {
	const userGuess = useRef();
	const [durum, setDurum] = useState([]);
	const [gameover, setGameOver] = useState(false);

	const isNumberValid = () => {
		if (userGuess.current.value.length !== 5) {
			alert("Lütfen 5 basamaklı bir sayı giriniz");
			return false;
		}

		const unique = Number(
			Array.from(new Set([...userGuess.current.value])).join("")
		);

		if (unique !== Number(userGuess.current.value)) {
			alert("Lütfen her basamağı benzersiz rakamlardan oluşturun");
			return false;
		}

		return true;
	};

	const isNumberCheck = () => {
		if (!isNumberValid()) return;

		let plus = 0;
		let minus = 0;

		for (let i = 0; i < userGuess.current.value.length; i++) {
			let location = random
				.toString()
				.indexOf(userGuess.current.value[i]);
			if (location === i) {
				plus += 1;
			} else if (location > -1) {
				minus += 1;
			}
		}

		setDurum([
			...durum,
			{ number: userGuess.current.value, plus: plus, minus: minus },
		]);

		if (random === +userGuess.current.value) {
			alert("Tebrikler Kazandınız");
			setGameOver(true);
		}

		userGuess.current.value = "";
	};

	const againPlay = () => {
		setDurum([]);
		setGameOver(false);
		random = createRandomNumber(5);
	};

	//
	const data = {
		userGuess,
		isNumberCheck,
		durum,
	};
	//
	return (
		<MainContext.Provider value={data}>
			{gameover === true ? (
				<Confetti
					width={window.innerWidth}
					height={window.innerHeight}
				/>
			) : (
				""
			)}
			<div className="container mx-auto flex flex-col items-center my-8">
				<div>
					<Header />
				</div>
				<div className="flex flex-col md:flex-row justify-center items-start mt-8 gap-4">
					{gameover ? (
						<button
							onClick={againPlay}
							className="w-full md:w-auto rounded-[5px] px-4 bg-[#67AB7A] h-[68px] text-[24px] text-white"
						>
							Tekrar Oyna
						</button>
					) : (
						<Left />
					)}
					<Right />
				</div>
			</div>
		</MainContext.Provider>
	);
}

export default App;
