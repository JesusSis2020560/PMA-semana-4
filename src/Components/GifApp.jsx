import { useState } from 'react'
 
export const useGif = () =>{
    const [gif, setGif] = useState('')
 
    const reqGif = async() =>{
        await fetch('https://api.giphy.com/v1/gifs/random?api_key=SvoScPnaKOx5GfA2wvvnkZ0vZiiXGMwl').then(async(resp)=>{
            await resp.json().then(({data})=>{
                setGif(data.image.original.url)
            })
        }).catch(console.error)
    }
 
    const handleGetGif = ()=>{
        reqGif()
    }
 
    return{
        handleGetGif,
        gif
    }
}