import React , {useState } from "react";
import Arkaplan from "./Bilesenler/Arkaplan";
import "./index.css";
import Arama from "./Bilesenler/arama/Aramacubugu";
import Sonuc from "./Bilesenler/Sonuc";

function App() {
  
const [havadurumu, belirthavadurumu] = useState ({});
  
  
  return (
    <section className="uygulama">
      <Arkaplan arkaplan={havadurumu.weather && havadurumu.weather[0].main}/>

      <div id="baslik">HAVA DURUMU UYGULMASI</div>

      <Arama belirthavadurumu={belirthavadurumu} />
      <Sonuc hava= {havadurumu}/> 

    </section>
  );
}

export default App;
