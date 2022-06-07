// https://minista.qranoko.jp/docs/config
import path from "path"
import { defineConfig } from "minista"

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve("src"),
    },
  },
})
