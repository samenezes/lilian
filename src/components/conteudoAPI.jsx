import { useState } from "react"

export const API = () => {
    const [search, setSearch] = useState("");
    const [paises, setPaises] = useState([]);
    const [populacaoGlobaL, setPopulacaoGlobal] = useState(0);

  const url = "https://opentdb.com/api.php?amount=30&category=15";


  async function handlePaises() {
    fetch(url)
      .then((res) => res.json())
      .then((pais) => {
        setPaises(pais);

        let populacaoGlobal = 0;
        pais.forEach((p) => {
          if (p != "") {
            populacaoGlobal += parseInt(p.population);
          }
        });
        setPopulacaoGlobal(populacaoGlobal);
      });
  }

  const filteredPaises = paises.filter((pais) =>
    pais.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <input
        type="text"
        placeholder="pesquisar"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

    <p>Total: {paises.length}</p>
    </>
  )
}