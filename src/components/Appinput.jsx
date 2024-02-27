export default function Appinput({ calcVal }) {
  return (
    <div>
      <input className="iptext" type="text" value={calcVal} readOnly />
    </div>
  );
}
