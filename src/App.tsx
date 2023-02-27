import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
  var totalValue = 0;
  const [total, setTotal] = useState(0);

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
    } catch (err) {
      setImageLink("https://cdn-icons-png.flaticon.com/512/4/4295.png");
      console.log(imageLink);
    } finally {
      setFetching(false);
    }
  }

  function add(event: any) {
    const newCard = {
      id: uuidv4(),
      produto: itemValue,
      quantidade: quantity,
      valor: price,
      imgSrc: `${imageLink}`,
    };

    setMainArray([...mainArray, newCard]);
    mainArray.map((el) => {
      totalValue = Number(total) + Number(el.valor * el.quantidade);
    });
    setTotal(totalValue);
  }
  function deletar(id: string) {
    console.log(id);
    mainArray.map((el) => {
      totalValue = Number(total) + Number(el.valor * el.quantidade);
    });
    setTotal(totalValue);
    const updatedCards = mainArray.filter((el) => el.id !== id);
    setMainArray(updatedCards);
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
        <h1>R${total}</h1>
      </div>

      <CardsList card={mainArray} deletar={deletar}></CardsList>
    </Container>
  );
}

export default App;
