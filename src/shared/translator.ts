import axios from "axios"

export default async function translator(word:string) {
    try{
      const response = await axios.get(`https://api.mymemory.translated.net/get?q=${word}&langpair=pt-BR|en-GB`)
      return response.data.responseData.translatedText
    }catch(err){
    console.log(err)
    }
}