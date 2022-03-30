import shortid from "shortid";

export default function ImageView({
  url
}) {
  return (
    <div
      className="card"
      id={shortid.generate()}
    >
      <img
        src={url}
        className="card-img-top"
        alt={url}
      />
    </div>
  );
}
