import shortid from "shortid";

export default function CardView({ name, checked, onChecked }) {
  const id = shortid.generate();

  return (
    <div
      className="card my-1"
      style={{
        backgroundColor: "#111",
      }}
    >
      <div className="d-flex flex-row p-0.5">
        <p className="col w-50">
          {name}
        </p>
        <div className="col-lg-3 form-check form-switch">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChecked}
          />
        </div>
      </div>
    </div>
  );
}
