import { useState } from "react"

const Question2 = () => {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  function filterArray(input: number[]) {
    return input.filter((item) => item > 5).toString()
  }

  function handleClick() {
    try {
      const inputNumArr: number[] = JSON.parse(input) || []

      // check
      if (!Array.isArray(inputNumArr)) throw new Error("請輸入正確字元")
      if (inputNumArr.some((num) => typeof num !== "number" || Number.isNaN(num))) {
        throw new Error("請依照指示輸入")
      }

      setResult(filterArray(inputNumArr))
    } catch (err) {
      alert("請輸入正確字元")
    }
  }

  return (
    <div>
      <h3 className="my-2 font-bold text-zinc-500 text-lg">Question 2</h3>
      <div className="mb-2">
        <label className="mr-3">Input:</label>
        <input
          className="px-2"
          type="text"
          placeholder="Ex: [1,2,3,4,5]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          onClick={handleClick}
          className="border border-1 px-1 bg-slate-100 outline-1"
        >
          Submit
        </button>
        <p className="text-sm text-slate-700/50">請依照格式輸入數字陣列</p>
      </div>

      <p >
        Filtered Output: <i data-testid="output">{result ? result : "null"}</i>
      </p>
    </div>
  )
}

export default Question2
