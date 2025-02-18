# react-components
開発用の、社内 React Component集

## 使用方法

### `react-components.json` を準備

react-componentsのルートディレクトリにあるreact-components.jsonをコピーしてプロジェクトのルートディレクトリに配置してください。

#### `react-components.json` のプロパティについて
- `componentsDir`: ダウンロードしたコンポーネントを保存するディレクトリ。プロジェクトに応じて変更してください。

### コンポーネントのダウンロード
ルートディレクトリで以下のコマンドを実行してコンポーネントをダウンロードします。
```bash
npx react-components add [コンポーネント名]
```

## 利用可能なコンポーネント一覧

| コマンド名     | 説明                           | テンプレートフォルダへのリンク        |
|--------------|------------------------------|--------------------------------|
| `data-table` | データ表示用のテーブルコンポーネント | [templates/data-table](./templates/data-table) |



## 開発について
bin,srcフォルダ内のtsファイルを編集してください。
以下のコマンドを実行することでdistフォルダ内にjs形式のファイルを生成できます。
```bash
npx tsc
```
新しくcomponentを作成したい場合は、templatesフォルダ内に追加してください。
