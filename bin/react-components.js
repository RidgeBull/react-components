#!/usr/bin/env node

const args = process.argv.slice(2);

if (args[0] === "test") {
  console.log("react-components: test コマンドが実行されました");
  // ここにコンポーネントを追加する処理を実装
} else {
  console.error("不明なコマンドです");
  process.exit(1);
}
