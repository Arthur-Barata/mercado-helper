import axios from "axios"
import translator from "./translator"

export default async function imageProvider(query:string){

    try{
      const wordTranslated = await translator(query)
      const response= await axios.get("https://api.pexels.com/v1/search",{
      params:{
        query:wordTranslated,
        per_page: 1
      },
      headers:{
        Authorization: 'FtXctyeXU987nTo0nVq3uR7nkG9lfd0M5stQzTGgcrlSRg1iN7u8G9Ue'
      }   
    })
   return response.data.photos[0].src.original
  }catch(err){
    console.log(err)
  }

}