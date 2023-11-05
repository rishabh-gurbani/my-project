import { useState } from 'react'
import './App.css'
import Portfolio from './Generator'

function App() {

  const [html, setHtml] = useState("Generated html");

  return (
    <div className='flex gap-5 max-h-screen w-full'>
      <Portfolio setHtml={setHtml}/>
      <div className="flex-grow">
        {html}
      </div>
    </div>
  )
}

export default App

//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