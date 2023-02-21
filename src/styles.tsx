import styled from "styled-components"

export default  styled.div`
width: 90%;
display: flex;
margin: auto;
justify-content: center;
flex-direction: column;
gap: 2rem;
padding-top:2rem;
    img{
        width: 300px;
    }
    .cardsHandle{
        display: flex;
        justify-content: center;
        gap:1.5rem;
        flex-wrap:wrap
    }
    input{
        height: 48px;
        border-radius: 12px;
        border-color:#40916c;
        border-width:2px;
       text-indent:0.5rem;
        padding: 0;
    }
    .inputs{
        display: flex;
        flex-direction: column;
        gap:1rem;
    }
    button{
        height: 48px;
        background-color: #52b788;
        border-radius: 12px;
        border-style:none;
        font-family: "Montserrat";
        font-size:16px;
        font-weight:500;
    }

`