// ビルド失敗例
// import { CONST_A } from "~/lib/constants"

// ビルド成功例
import { CONST_A } from "../lib/constants"

const Component = () => {
  return <p>{CONST_A}</p>
}

export default Component
