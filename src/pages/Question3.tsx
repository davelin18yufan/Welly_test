import { useState } from "react"

const Question3 = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  function formatName(firstName: string, lastName: string) {
    return `${firstName.toString() || ""}${firstName && " "}${
      lastName.toString() || ""
    }`
  }

  return (
    <div className="overflow-auto h-full">
      <h3 className="my-2 font-bold text-zinc-500 text-lg">Question 3</h3>
      <div>
        <label>First Name: </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="px-2"
        />

        <label className="ml-2">Last Name: </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="px-2"
        />

        <br />

        {formatName(firstName, lastName)}
        <div className="bg-black h-0.5 mt-1" />
      </div>
      <pre>
        <code className="w-[300px] bg-slate-100 border">
          {`function formatName(firstName: string, lastName: string) { 
              return \`\${firstName.toString() || ""}\${firstName && " "}\${lastName.toString() || ""}\`;
            }`}
        </code>
      </pre>
      <p>
        藉由ternary operator和literal
        template使函式更簡潔並且加入型別轉換以免使用者輸入非字串格式
      </p>
    </div>
  )
}

export default Question3
