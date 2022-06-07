import { useState } from "react"

// 成功例（default exportを使用）
const Component = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>count up</button>
    </>
  )
}

export default Component

// 失敗例（named exportを使用）
// export const Component = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={() => setCount((prev) => prev + 1)}>count up</button>
//     </>
//   )
// }
