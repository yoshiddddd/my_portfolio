# 吉田和司のポートフォリオサイト

このリポジトリは吉田和司のポートフォリオサイトのソースコードを含んでいます。Next.jsとTailwind CSSを使用して構築されています。

## 機能

- レスポンシブデザイン
- ダークモード/ライトモードの自動切り替え
- モダンなUIコンポーネント
- アニメーション効果
- GitHub Pagesへの自動デプロイ

## 技術スタック

- [Next.js](https://nextjs.org/) - Reactフレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSSフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全なJavaScript
- [GitHub Actions](https://github.com/features/actions) - CI/CDパイプライン

## ローカル開発

このプロジェクトをローカルで実行するには：

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/my_portfolio.git
cd my_portfolio

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

## デプロイ

このプロジェクトはGitHub Actionsを使用して自動的にGitHub Pagesにデプロイされます。

デプロイするには：

1. GitHubリポジトリの「Settings」タブに移動
2. 左側のメニューから「Pages」を選択
3. 「Source」セクションで「GitHub Actions」を選択
4. mainブランチにプッシュすると、GitHub Actionsが自動的にビルドとデプロイを行います

## カスタマイズ

ポートフォリオをカスタマイズするには：

- `src/app/page.tsx` - メインコンテンツの編集
- `src/app/globals.css` - グローバルスタイルの編集
- `public/` - 画像やその他の静的ファイルの追加

## ライセンス

このプロジェクトは [MIT License](LICENSE) の下でライセンスされています。
