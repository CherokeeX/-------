import Resimcek from "./Resimcek";

function index({arkaplan}) {
  return (
    <div className="arkaplan">
      <div className="overlay"></div>
      <Resimcek durum={arkaplan} />
    </div>
  );
}
export default index;
