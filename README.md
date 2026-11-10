# introduction-v4

もぺ (mopeneko) の自己紹介ページ。

## 構成

- `src/content/profile.ts` — 名前、肩書き、スキル、実績、連絡先。表示する文言はすべてここに置く。
- `src/components/` — セクション単位のコンポーネントと、その CSS。
- `src/hooks/useReveal.ts` — スクロール時の表示。`prefers-reduced-motion` では即時表示。
- `src/hooks/useActiveSection.ts` — ヘッダーの現在位置の表示。

文言を変えるときは `profile.ts` だけを編集する。コンポーネントに文面を書かない。

## 開発

```sh
bun install
bun run dev
bun run build
bun run lint
```
