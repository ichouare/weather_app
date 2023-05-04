import './App.css';

import Quiz from './Quiz'
import QuizProvider from './QuizProvider';

function App() {
  
  return(
    
      <QuizProvider>
    <div className="App">
      <main>
      <h1>Country quiz</h1>
      <Quiz />
      </main>
    </div>
      </QuizProvider>
  )
  
}

export default App;
