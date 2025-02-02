
import CardComponent from "./cards.jsx"
import "./styles/App.css"
import jsonData from "../public/Profile.json"

function App() {
  return (
    <div id="CardBox">
        {
          jsonData.map(Person =>{
              return(
              <CardComponent key={Person.id} name={Person.name} description={Person.Description}/>
              );
          }
        )}
      {/* <CardComponent name="Tarun" description="This is me"/>
      <CardComponent name="Varun" description="I am Learning C++"/>
      <CardComponent name="Tarun" description="This is me"/>
      <CardComponent name="Tarun" description="This is me"/> */}
    </div>
  )
}

export default App
