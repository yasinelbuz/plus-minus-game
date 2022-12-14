import React from "react";

export const GameOverScreen = ({ resetGame }) => {
  return (
    <button
      onClick={resetGame}
      className="w-full md:w-auto rounded-[5px] px-4 bg-[#67AB7A] h-[68px] text-[24px] text-white"
    >
      Tekrar Oyna
    </button>
  );
};
