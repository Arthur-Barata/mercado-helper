import { cardsProps } from "../cards";
import { CardStyle } from "../cards/styles";
import Container from "./styles";

interface listProp {
  card: cardsProps[];
  deletar?: any;
}

function CardsList(props: listProp) {
  return (
    <Container>
      {props.card.map((card, index) => (
        <CardStyle>
          <div>
            <img src={card.imgSrc}></img>
          </div>

          <h2>{card.produto} </h2>
          <li>
            <strong>Valor:</strong> R$ {card.valor}
          </li>
          <li>
            <strong>Quantidade:</strong> {card.quantidade}
          </li>
          <li>
            <strong>Total: </strong>R$ {card.quantidade * card.valor}
          </li>
          <button
            onClick={() => {
              props.deletar(card.id);
            }}
          >
            deletar
          </button>
        </CardStyle>
      ))}
    </Container>
  );
}

export default CardsList;
