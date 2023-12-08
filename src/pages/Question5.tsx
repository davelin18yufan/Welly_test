import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <section >
      <h3 className="my-2 font-bold text-zinc-500 text-lg">Question 5</h3>

      <div >
        <button
          className="px-4 bg-slate-500 border outline-1 text-zinc-300 rounded-md hover:opacity-50"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
        <button
          className="px-4 bg-slate-500 border outline-1 text-zinc-300 rounded-md hover:opacity-50"
          onClick={() =>
            setCount((count) => {
              return count - 1 < 0 ? 0 : count - 1
            })
          }
        >
          -
        </button>
        <p data-testid="counter">Counter: {count}</p>
      </div>
    </section>
  )
}

export default App
