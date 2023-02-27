import { CardStyle } from "./styles";

export interface cardsProps {
  id?: string;
  produto: string;
  imgSrc: string;
  valor: number;
  quantidade: number;
  delete?: any;
}

function Cards(props: cardsProps) {
  return (
    <CardStyle>
      <div>
        <img src={props.imgSrc}></img>
      </div>

      <h2>{props.produto} </h2>
      <li>
        {" "}
        <strong>Valor:</strong> R$ {props.valor}
      </li>
      <li>
        <strong>Quantidade:</strong> {props.quantidade}
      </li>
      <li>
        <strong>Total: </strong>R$ {props.quantidade * props.valor}
      </li>
      <button onClick={props.delete}>deletar</button>
    </CardStyle>
  );
}

export default Cards;
