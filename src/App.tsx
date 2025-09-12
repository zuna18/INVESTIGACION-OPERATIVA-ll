import './App.css'
import { useEffect } from 'react'
import { main } from './graphs/main'
function App() {
  
  useEffect(() => {
    main();
  },[]);

  return (
    <>
      <div>
        Graphs;
      </div>
    </>
  )
}

export default App
