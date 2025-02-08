import { useState } from "react"
import WeatherComponent from "./Weather"
import "./styles/App.css"

function App() {
  const [text, setText] = useState()
  const inputText = (e) => setText(e.target.value)

  return (
    <>
      <div className="WelcomeBox">
          Welcome to Weather Updates
      </div>

      <div className="weatherBox">
        <div>
          <input type="text" id="inputText" onChange={inputText} placeholder="Enter the Country Name" />
        </div>
        <div className="ContentBox">
          <WeatherComponent country={text} />
        </div>
        {/* <div>bye</div>   */}
      </div>
    </>
  )
}

export default App
