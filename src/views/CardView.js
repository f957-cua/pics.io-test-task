import shortid from "shortid";

export default function CardView({ url, checked, onChecked }) {
  const id = shortid.generate();

  return (
    <div className="card m-1 bg-info">
      <div className="d-flex flex-row p-1">
        <p className="col card-title w-75">
          {url}
        </p>
        <div className="col-lg-3 form-check form-switch">
          <label
            className="form-check-label"
            id={id}
          >
            favorite
            <input
              type="checkbox"
              className="form-check-input"
              id={id}
              checked={checked}
              onChange={onChecked}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
