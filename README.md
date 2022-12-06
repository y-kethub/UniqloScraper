# UniqloScraper
UNIQLOの商品情報をスクレイピングするツール

# デモ
![実行した結果のスクリーンショット](https://user-images.githubusercontent.com/76738596/205971712-bc042364-0d79-4873-8b70-bb8f1943e966.png "スクレイピング結果")
> **Note**
> デモで表示されている価格や在庫状況はスクリーンショット撮影時のものです。

# 取得可能な情報
- 商品名
- 商品の概要
- 価格
- カテゴリ
- カラー展開
- サイズ展開
- 在庫状況

# 事前準備
[Playwright](https://playwright.dev/)を用いてスクレイピングを行っているため以下のインストールが必要です。
- [Node.js](https://nodejs.org/)
- npm (Node.jsのインストール時に自動的にインストールされる)
- [Playwright](https://playwright.dev/docs/intro)

# 使用方法
PowerShell(ターミナル)を開き、プログラムを保存したディレクトリへ移動し、node .\ProductInfo.js の後に、好きなUNIQLOの商品詳細ページURLのパラメータを除いた値を指定して実行します。

例
```
node .\ProductInfo.js https://www.uniqlo.com/jp/ja/products/E450527-000/00
```

# 注意事項
- 高頻度で実行するとサーバへ負荷がかかるため避けてください。
- 参照先のサイトのレイアウトが変更されることで将来的に動作しなくなる可能性があります。
