import { useState } from 'react'
import './App.css'
import Portfolio from './Generator'

function App() {

  const [htmlContent, setHtml] = useState("Generated html");

  return (
    <div className='flex gap-5 max-h-screen w-full'>
      <Portfolio setHtml={setHtml}/>
      <iframe
        title="HTML Viewer"
        width="600"
        height="900"
        srcDoc={htmlContent}
      ></iframe>
    </div>
  )
}

export default App
