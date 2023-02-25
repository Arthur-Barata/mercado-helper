import Cards, { cardsProps } from "../cards";
import Container from "./styles";

interface listProp {
  card: cardsProps[];
}

function CardsList(props: listProp) {
  return (
    <Container>
      {props.card.map((card, index) => (
        <Cards
          key={index}
          produto={card.produto}
          quantidade={card.quantidade}
          valor={card.valor}
          imgSrc={card.imgSrc}
        ></Cards>
      ))}
    </Container>
  );
}

export default CardsList;
