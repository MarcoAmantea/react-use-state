import languages from "../data/languages";

function App() {

  return (
    <>
      <h1 className="mb-3 ms-3">Learn Web Development</h1>
      <div className="container">
        {languages.map((curLanguage) => (
          <button className="btn btn-primary me-3 mb-3">{curLanguage.title}</button>
        ))}
        <div class="card w-75 mb-3">
          <div class="card-body">
            
          <h5 class="card-title">HTML</h5>
          <p class="card-text">HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini.</p>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
