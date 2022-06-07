// 成功例
import Component from "../components/Component?ph"

// 失敗例（エイリアスを使用）
// import Component from "~/components/Component?ph"

// 失敗例（エイリアスの使用に関わらず、named importを使用）
// import { Component } from "../components/Component?ph"
// import { Component } from "~/components/Component?ph"

const PageHome = () => {
  return (
    <>
      <Component />
    </>
  )
}

export default PageHome
