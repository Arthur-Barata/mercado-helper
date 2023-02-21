import React from 'react';
import { useState } from 'react';
import Cards from './componets/cards';
import imageProvider from './shared/image-provider';
import  Container  from './styles';

function App() {  

 const [imageLink,setImageLink]= useState('')
 const query = 'carro'


const imageSet =async ()=>{
  try{
const response = await imageProvider(query)
setImageLink(response)
  }catch(err){
    console.error(err)

  }
  
}
 
  return (
    <Container>
    <div className="App">
      <div className='inputs'>
      <input type="text" placeholder='item' />
      <input type="number" placeholder='valor' />
      <input type="number" placeholder='Quantidade' />
      <button onClick={imageSet}> Adicionar</button>
      </div>
     
    </div>
    <div className='cardsHandle'>
    <Cards
    produto='banana'
    quantidade={5}
    valor={10}
    imgSrc={imageLink}
    ></Cards>
     <Cards
    produto='banana'
    quantidade={5}
    valor={10}
    imgSrc={imageLink}
    ></Cards>
    <Cards
    produto='banana'
    quantidade={5}
    valor={10}
    imgSrc={imageLink}
    ></Cards>
    <Cards
    produto='banana'
    quantidade={5}
    valor={10}
    imgSrc={imageLink}
    ></Cards>
    <Cards
    produto='banana'
    quantidade={5}
    valor={10}
    imgSrc={imageLink}
    ></Cards>
    </div>
    </Container>
  );
}

export default App;
