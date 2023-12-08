import { useState } from "react"

const Question4 = () => {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
      <h3 className="my-2 font-bold text-zinc-500 text-lg">Question 4</h3>

      <div>
        <button
          className={`${
            isLogin ? "text-orange-400" : "text-zinc-300"
          } p-2 bg-slate-500 border outline-1  rounded-md hover:opacity-50`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`${
            !isLogin ? "text-orange-400" : "text-zinc-300"
          } p-2 bg-slate-500 border outline-1 rounded-md hover:opacity-50`}
          onClick={() => setIsLogin(false)}
        >
          Logout
        </button>
      </div>
      <section className="mt-4 bg-orange-200">
        <div data-testid="text">
          {isLogin ? "Log in successfully!" : "Not Login yet.."}
        </div>
      </section>
      <p>在ＪＳＸ中使用條件式的特性根據狀態決定要render的元件</p>
      <code data-testid="code">
        {`isLogin ? <div>Log in successfully!</div> : <div>Not Login yet..</div>`}
      </code>
    </>
  )
}

export default Question4
