import { useGame } from "../features/game";

const Form = () => {
  const { currentGuess, setGuess, handleGuess } = useGame();

  return (
    <div className="w-full flex flex-col">
      <input
        type="number"
        className="border border-[#ECECEC] h-[80px] text-center text-[60px] tracking-widest"
        onChange={(e) => setGuess(e.target.value)}
        value={currentGuess}
      />
      <button
        onClick={handleGuess}
        className="rounded-[5px] bg-[#67AB7A] h-[60px] text-[24px] text-white mt-2"
      >
        Tamam
      </button>
    </div>
  );
};

export default Form;
