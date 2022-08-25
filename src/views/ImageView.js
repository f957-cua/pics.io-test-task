export default function ImageView({
  url, index
}) {
  return (
    <div
      className="card m-1"
      key={index}
      style={{
        height: "70px",
        width: "130px"
      }}
    >
      <img
        src={url}
        className="w-100 h-100 card-img-top"
        alt={url}
      />
    </div>
  );
}
