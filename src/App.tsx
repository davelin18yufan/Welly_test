import "./index.css"
import { Outlet, Link } from "react-router-dom"
import { questions } from "./constants/quesiton"

interface Question {
  id: number,
  title: string,
  description: string,
  expect?: string
}

function QuestionCard({question}:{question: Question}){
  return (
    <div className="bg-slate-300 p-2 flex-col justify-center items-center rounded-lg flex-1 overflow-auto relative min-w-[300px]">
      <h3 className="text-lg text-center">{question.title}</h3>
      <p className="text-sm">{question.description}</p>
      {question.expect && <p className="text-sm text-orange-500"><span className="text-slate-800/60">Output :</span>{question.expect}</p>}
      <Link to={`/${question.id}`} className="rounded-md font-bold bg-zinc-400 px-3 absolute right-2 bottom-2">Go</Link>
    </div>
  )
}


function App() {
  return (
    <main className="bg-slate-200 h-screen p-2">
      <h1 className="text-3xl text-center">Welly Test</h1>
      <div className="flex flex-wrap gap-2 my-3">
        {questions.map(question => <QuestionCard key={question.id} question={question}/>)}
      </div>

      <Outlet/>
    </main>
  )
}

export default App
