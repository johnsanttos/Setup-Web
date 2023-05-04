//import './styles/global.css'
import { Header } from './components/Hearder';
import SummaryTable from './components/SummaryTable';
import './api/dayjs'
import './index.css';

function App() {
 return(

<div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>
    
    <Header/>

    <SummaryTable/>
 
  </div>
</div>

 )
 }
export default App
