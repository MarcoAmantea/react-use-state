import languages from "../data/languages";
import { useState } from "react";

function App() {
 const firstLanguage = languages[0]
 const [selectedLanguage, setSelectedLanguage] = useState(firstLanguage);
  return (
    <>
      <h1 className="mb-3 ms-3">Learn Web Development</h1>
      <div className="container">
        {languages.map((curLanguage) => (
          <button className="btn btn-primary me-3 mb-3" onClick={()=> setSelectedLanguage(curLanguage)}>{curLanguage.title}</button>
        ))}
        <div class="card w-75 mb-3">
          <div class="card-body">
            <h5 class="card-title">{selectedLanguage.title}</h5>
            <p class="card-text">{selectedLanguage.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
