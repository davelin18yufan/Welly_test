import { useState } from "react"

const Question1 = () => {
  const [input, setInput] = useState("")
  const reverseString = (input: string) => input.split("").reverse().join("")
  return (
    <div>
      <h3 className="my-2 font-bold text-zinc-500 text-lg">Question 1</h3>
      <label className="mr-3">Input:</label>
      <input className="px-2" type="text" onChange={(e) => setInput(e.target.value)} placeholder="請輸入字串"/>

      <p>Reversed Output: <i data-testid="output">{reverseString(input)}</i></p>
    </div>
  )
}

export default Question1

