import React from 'react';
import { useState } from 'react';
import Cards, { cardsProps } from './componets/cards';
import imageProvider from './shared/image-provider';
import  Container  from './styles';
import { createContext } from 'react';
import { CardsRender } from './componets/cardsRender';
import { newItemFormater } from './shared/newItem-formater';

const itemsInitialState:cardsProps = {
  produto: '',
  imgSrc: '',
  valor: 0,
  quantidade: 0
}
export const ItemsContext = createContext([itemsInitialState])

function App() {  
  
const [allItems, setAllItems] =useState<cardsProps[]>([itemsInitialState])
const [itemName, setItemName]= useState<string> ('')

const imageSet =async ()=>{
  try{
  const response = await imageProvider(itemName)
  const newItem = newItemFormater(itemName,response)
  setAllItems([...allItems,newItem])
  }catch(err){
    console.error(err)
  }
  
}
 
  return (
    <Container>
    <ItemsContext.Provider value={allItems}>
    <div className="App">
      <div className='inputs'>
      <input type="text" placeholder='item' onChange={(e)=>{
        setItemName(e.target.value)
      }} />
      <input type="number" placeholder='valor' />
      <input type="number" placeholder='Quantidade' />
      <button onClick={imageSet}> Adicionar</button>
      </div>
     
    </div>
    <div className='cardsHandle'>
    <CardsRender/> 
    </div>
    
    </ItemsContext.Provider>

    </Container>
  );
}

export default App;
