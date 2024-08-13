import './App.css'
import Inputfield from './components/Inputfield'
import Todos from './components/Todos'

function App() {


  return (
    <>
    <div className='flex flex-col'>
    <Inputfield/>
    <Todos/>
    </div>
    </>
  )
}

export default App
