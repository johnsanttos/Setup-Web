//import './styles/global.css'
import { Habit } from './components/Habit'
import './index.css';

function App() {
 return(

  <div className='bg-neutral-800 w-screen h-screen flex justify-center items-center '>
  <div className='w-full max-w-5xl px-6 flex flex-col gap-16 '>
 
  <h1 className="text-red-600">
      Hello worlggd!
    </h1>
    <Habit
    completed={5}
    />
  
  <Habit
    completed={5}
    />
       <Habit
    completed={5}
    />
       <Habit
    completed={5}
    />
  </div>
</div>

 )
 }
export default App
