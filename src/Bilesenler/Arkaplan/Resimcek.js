import yagmurlu from "../../RESIMLER/yagmurlu.jpg";
import sisli from "../../RESIMLER/sisli.jpg";
import gifkarli from "../../RESIMLER/gifkarli.gif";
import thunderstorm from "../../RESIMLER/thunderstorm.gif";
import sunny from "../../RESIMLER/sunny.gif";
import defaultt from "../../RESIMLER/defaultt.gif";
import cloudy from "../../RESIMLER/cloudy.gif";

function Resimcek({ durum }) {
  switch (durum) {
    case "Rain":
      return <img className="arkaplan-resim" src={yagmurlu} alt="yagmurlu" />;
    case "Clouds":
      return <img className="arkaplan-resim" src={cloudy} alt="Bulutlu" />;
    case "Clear":
      return <img className="arkaplan-resim" src={sunny} alt="gunesli" />;
    case "Snow":
      return <img className="arkaplan-resim" src={gifkarli} alt="karli" />;
    case "Mist":
      return <img className="arkaplan-resim" src={sisli} alt="sisli" />;
    case "Thunderstorm":
      return (
        <img className="arkaplan-resim" src={thunderstorm} alt="firtinali" />
      );

    default:
      return <img className="arkaplan-resim" src={defaultt} alt="defaultt" />;
  }
}
export default Resimcek;
