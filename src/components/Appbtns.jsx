export default function Appbtns({ arr, onButtonClick }) {
  const btns = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="calc-button">
      {btns.map((buttonName) => {
        return (
          <button onClick={() => onButtonClick(buttonName)}>
            {buttonName}
          </button>
        );
      })}
    </div>
  );
}
