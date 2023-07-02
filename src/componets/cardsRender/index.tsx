import React, { Fragment, useContext } from "react"
import Cards, { cardsProps } from "../cards"
import { ItemsContext } from "../../App"




export const CardsRender = ()=>{
const items = useContext(ItemsContext)

 return (
 <Fragment>
    {items.map((item)=>{
      return(
        <Cards produto={item.produto} imgSrc={item.imgSrc} valor={0} quantidade={0}></Cards>
      )
    })}
  </Fragment>)
}