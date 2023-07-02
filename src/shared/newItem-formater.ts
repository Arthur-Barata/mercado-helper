import { cardsProps } from "../componets/cards"


export const newItemFormater = (itemName:string,response:string)=>{
    const newItem:cardsProps = {
        produto: itemName,
        imgSrc: response,
        valor: 0,
        quantidade: 0
      }
    return newItem
        
    
}