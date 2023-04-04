import React, { useState } from "react";

function Aramacubugu({ belirthavadurumu }) {
  const api = {
    key: "aba39c0540ef2aa81df729b5d20e0a1e",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const [araparamatre, belirtaraparametre] = useState("");

  const ara = (e) => {
    if (e.key === "Enter") {
      fetch(
        `${api.base}?q=${araparamatre}&units=metric&lang=ru&appid=${api.key}`
      )
        .then((veri) => veri.json())
        .then((sonuc) => {
          belirtaraparametre("");
          belirthavadurumu(sonuc);
          console.log(sonuc);
          
        });
    }
  };

  /* const ara = (e)=> {
if ( e.key === "Enter"){

    fetch (`${api.base}?q=${araparamatre},{state code},{country code}&limit={limit}&appid=${api.key}`)
   .then  (veri) => veri.json()
}
*/

  return (
    <div className="arama">
      <input
        id="arama-input"
        type="text"
        placeholder="город"
        onChange={(e) => belirtaraparametre(e.target.value)}
        value={araparamatre}
        onKeyDown={ara}
      ></input>
    </div>
  );
}
export default Aramacubugu