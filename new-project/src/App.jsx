import { useSelector } from 'react-redux'
import './App.css'
import Card from './components/Card'



function App() {
 const data= useSelector((state)=>state.products)
 console.log(data)

  return (
    <>
    <div className=" flex flex-wrap flex-grow-1 justify-around my-14">
      {data.map((item)=>{
        return <Card key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />

      })}
  
  </div>
  </>
  )
}

export default App
