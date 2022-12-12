import React, { useContext } from "react";
import MainContext from "./../context.js";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

const customStyles = {
	content: {
		position: "absolute",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		transform: "translate(-50%, -50%)",
		border: "1px solid #ccc",
		borderRadius: "5px",
		width: "80%",
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
};

export default function Left() {
	const { userGuess, isNumberCheck } = useContext(MainContext);

	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<div className="w-[250px] flex flex-col">
				<input
					type="number"
					className="border border-[#ECECEC] h-[80px] text-center text-[60px] tracking-widest"
					ref={userGuess}
				/>
				<button
					onClick={isNumberCheck}
					className="rounded-[5px] bg-[#67AB7A] h-[60px] text-[24px] text-white mt-2"
				>
					Tamam
				</button>
				<a
					className="mt-3 mb-1 text-gray-600 cursor-pointer hover:text-blue-500"
					onClick={openModal}
				>
					Oyun Nasıl Oynanıyor?
				</a>
				<a
					className="text-gray-600"
					href="https://github.com/yasinelbuz/arti-eksi-oyunu"
					target="_blank"
				>
					Oyunun kaynak kodları
				</a>
			</div>
			<div>
				<Modal
					isOpen={modalIsOpen}
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					className="w-[80%] md:w-[50%] bg-white border-blue-600 border rounded-md h-auto absolute left-1/2 -translate-x-2/4 translate-y-2/4"
				>
					<div>
						<h1 className="px-4 font-bold bg-gray-100 p-4 rounded-md">
							Artı ve Eksi Oyunu Nasıl Oynanır?
						</h1>
						<p className="mt-4 px-4">
							Bilgisayar rakamları farklı n basamaklı gizli bir
							sayı uydurur, oyuncu + ve – bilgilerinden yola
							çıkarak gizli sayıyı bulmaya çalışır.
						</p>
						<p className="mt-4 px-4">
							+ : tahmin edilen sayının içindeki rakam gizli
							sayıda da varsa ve aynı yerde bulunuyorsa.
						</p>
						<p className="mt-4 px-4">
							– : tahmin edilen sayının içindeki rakam gizli
							sayıda da varsa ancak aynı yerde bulunmuyorsa.
						</p>
						<p className="mt-4 px-4">
							<h2>Kurallar</h2>
							<li>5 basamaklı bir sayı girmelisiniz</li>
							<li>
								Girilen tüm rakamlar <b>benzersiz</b> olmalıdır
							</li>
						</p>
						<button
							onClick={closeModal}
							className="bg-gray-300 p-2 rounded-sm flex items-center m-4 gap-2"
						>
							<span>Kapat</span> <GrClose />
						</button>
					</div>
				</Modal>
			</div>
		</>
	);
}
