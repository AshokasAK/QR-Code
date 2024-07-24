
import { useState } from 'react'
import './App.css'

function App() {

const [img,setImg] = useState("")
const [site,setSite] = useState("")
const [size,setSize] = useState("")
const [loading,setLoading] = useState(true)


async function handleGenBtn() {
  
    setLoading(true)
      const url =await (
        // `https://api.qrserver.com/v1/create-qr-code/?size=${size} x ${size}&data=${encodeURIComponent(site)}`
      )
      setImg(url)
      //  console.log("error")  
      setSite('')
      setSize('')

  }


const handleDwnBtn = ()=>{
fetch(img).then((res)=>res.blob()).then((blob)=>{
const link = document.createElement('a')
link.href = URL.createObjectURL(blob);
link.download = "qrcode"
document.body.appendChild(link);
link.click();
document.body.removeChild(link)
})
}

  return (
    <>
    <div className='container'>
        <h2>QR Code</h2>
        {loading && !img && <p>Please Wait...</p> }
        {/* { && <p>Please Wait...</p>} */}
       {img && <img src={img} alt="" />} 
        <div className="input">
        <input
         className='siteinput'
         value={site}
         onChange={(e)=>setSite(e.target.value)}
         />
        <input 
        type='number'
        className='sizeinput'
        value={size}
         onChange={(e)=>setSize(e.target.value)}
        />
        </div>
        <div className="buttons">
        <button
        disabled = {site.length ? !loading : loading}
         className='generatebtn'
         onClick={handleGenBtn}
         >Generate QR Code</button>
        <button 
        className='downloadbtn'
        onClick={handleDwnBtn}
        >Download QR Code</button>
        </div>
    </div>
    </>
  )
}

export default App
