import Container from "./styles"

export interface cardsProps{
    produto:string
    imgSrc:string
    valor:number
    quantidade: number


}

 function Cards (props:cardsProps){
    return(
        <Container> 
            <div>
                <img src={props.imgSrc}></img>
             </div>
                <h2>{props.produto}  </h2> 
                <li> <strong>Valor:</strong> R$ {props.valor}</li>
                <li><strong>Quantidade:</strong> {props.quantidade}</li> 
                <li><strong>Total: </strong>R$ {props.quantidade *props.valor}</li> 
        </Container>
        
    )
}

export default Cards;