import { useState } from "react";
import { cardsProps } from "./componets/cards";
import CardsList from "./componets/cardsList";
import imageProvider from "./shared/image-provider";
import Container from "./styles";

function App() {
  const [imageLink, setImageLink] = useState("");

  const [itemValue, setItemValue] = useState("");
  const [quantity, setquantityValue] = useState(0);
  const [price, setPriceValue] = useState(0);
  const [fetching, setFetching] = useState(false);

  const [mainArray, setMainArray] = useState<cardsProps[]>([]);

  function setItem(event: any) {
    setItemValue(event.target.value);
  }
  function setquantity(event: any) {
    setquantityValue(event.target.value);
  }
  function setPrice(event: any) {
    setPriceValue(event.target.value);
  }
  async function imagePath() {
    setFetching(true);
    try {
      setFetching(true);
      const response = await imageProvider(itemValue);
      setImageLink(response);
      console.log(response, fetching);
    } catch (err) {
      console.log(err);
    } finally {
      setFetching(false);
      console.log(fetching);
    }
  }

  function add(event: any) {
    const newCard = {
      produto: itemValue,
      quantidade: quantity,
      valor: price,
      imgSrc: `${imageLink}`,
    };
    setMainArray([...mainArray, newCard]);
    console.log(mainArray);
  }

  return (
    <Container>
      <div className="App">
        <div className="inputs">
          <input
            id="item"
            type="text"
            placeholder="item"
            onChange={setItem}
            onBlur={imagePath}
          />
          <input type="number" placeholder="valor" onChange={setPrice} />
          <input
            type="number"
            placeholder="Quantidade"
            onChange={setquantity}
          />
          <button
            onClick={() => {
              setMainArray([]);
            }}
          >
            {" "}
            Deletar tudo
          </button>
          <button id="btn" onClick={add} disabled={fetching}>
            Adicionar
          </button>
        </div>
      </div>

      <CardsList card={mainArray}></CardsList>
    </Container>
  );
}

export default App;
