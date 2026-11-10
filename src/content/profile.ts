import avatarUrl from '../assets/mopeneko.jpg'

export type Link = {
  label: string
  value: string
  href: string
  icon: 'github' | 'x' | 'blog' | 'mail'
}

export type Skill =
  | {
      name: string
      level: 'practical'
      years: number
      detail: string
      tools: readonly string[]
    }
  | { name: string; level: 'personal' }

export type Work = {
  title: string
  summary: string
  stack: readonly string[]
  href: string
  link: string
  linkLabel: string
  featured?: true
}

export type Profile = {
  name: string
  handle: string
  role: string
  tagline: string
  location: string
  avatar: string
  about: readonly string[]
  skills: readonly Skill[]
  works: readonly Work[]
  links: readonly Link[]
}

export const profile = {
  name: 'もぺ',
  handle: 'mopeneko',
  role: 'バックエンド寄りのフルスタック',
  tagline: '高速かつセキュアなAPIを作ります。GoとTypeScriptとGoogle Cloudが中心です。',
  location: '東京都',
  avatar: avatarUrl,
  about: [
    '普段は Go で API を書き、TypeScript でその手前の UI を作っています。設計では速さ、壊れにくさ、あとから読めることを優先します。',
    'セキュリティは、認証と認可を一箇所に集め、外部からの入力を境界で検証することを基本にしています。',
    '好きなものは VTuber と音楽ゲームです。休日は Go の CLI ツールや Web フロントエンドを書いています。',
  ],
  skills: [
    {
      name: 'Go',
      years: 3,
      level: 'practical',
      detail: '業務ではバックエンド開発、趣味では CLI ツールを書いています。',
      tools: ['Echo', 'GORM'],
    },
    {
      name: 'TypeScript',
      years: 3,
      level: 'practical',
      detail: '業務ではフロントエンド開発と IoT デバイスのデータ処理を経験しました。',
      tools: ['Vue', 'Nuxt', 'React', 'Node.js'],
    },
    {
      name: 'Google Cloud',
      years: 3,
      level: 'practical',
      detail: '業務では API 基盤とデータ処理に使用しました。',
      tools: [
        'Cloud Run',
        'Cloud Functions',
        'Firestore',
        'Firebase Authentication',
        'BigQuery',
        'Cloud Storage',
        'Cloud Build',
      ],
    },
    { name: 'Vencode', level: 'personal' },
    { name: 'Flutter', level: 'personal' },
    { name: 'Cloudflare', level: 'personal' },
    { name: 'Python', level: 'personal' },
  ],
  works: [
    {
      title: 'Vencode',
      summary:
        '動画の解像度、FPS、コーデックを端末内で変換する Android アプリ。ハードウェアアクセラレーションを使い、動画を外部へ送らずに処理する。Google Play で公開中。',
      stack: ['Android'],
      href: 'https://play.google.com/store/apps/details?id=cc.lem0n.videoconverter',
      link: 'Google Play で見る',
      linkLabel: 'Vencode を Google Play で見る',
      featured: true,
    },
    {
      title: 'AndroidRichPresence',
      summary:
        'YouTube で見ている動画を Discord のアクティビティとして共有する Android アプリ。',
      stack: ['Kotlin'],
      href: 'https://github.com/mopeneko/AndroidRichPresence',
      link: 'リポジトリを見る',
      linkLabel: 'AndroidRichPresence のリポジトリを見る',
    },
    {
      title: 'x-pleroma-crossposter',
      summary:
        'X の投稿を Pleroma へ自動でクロスポストする Go アプリ。Webhook 受信と SQLite の再試行キューを持つ。',
      stack: ['Go', 'SQLite'],
      href: 'https://github.com/mopeneko/x-pleroma-crossposter',
      link: 'リポジトリを見る',
      linkLabel: 'x-pleroma-crossposter のリポジトリを見る',
    },
    {
      title: 'herdr-worktree-hook-plugin',
      summary:
        'worktree を作った直後に任意のシェルコマンドを走らせる herdr プラグイン。',
      stack: ['TypeScript'],
      href: 'https://github.com/mopeneko/herdr-worktree-hook-plugin',
      link: 'リポジトリを見る',
      linkLabel: 'herdr-worktree-hook-plugin のリポジトリを見る',
    },
    {
      title: 'x-automate-research',
      summary:
        'X のリストを時間帯別に要約して Telegram に送るバッチ。cron で常時稼働する。',
      stack: ['TypeScript'],
      href: 'https://github.com/mopeneko/x-automate-research',
      link: 'リポジトリを見る',
      linkLabel: 'x-automate-research のリポジトリを見る',
    },
  ],
  links: [
    {
      label: 'GitHub',
      value: 'github.com/mopeneko',
      href: 'https://github.com/mopeneko',
      icon: 'github',
    },
    { label: 'X', value: '@nkyna_', href: 'https://x.com/nkyna_', icon: 'x' },
    {
      label: 'ブログ',
      value: 'blog.lem0n.cc',
      href: 'https://blog.lem0n.cc',
      icon: 'blog',
    },
    {
      label: 'メール',
      value: 'mopeneko@lem0n.cc',
      href: 'mailto:mopeneko@lem0n.cc',
      icon: 'mail',
    },
  ],
} as const satisfies Profile

/** Visitor-visible chrome strings; components render these, never literals. */
export const ui = {
  skip: '本文へ移動',
  navLabel: '主要',
  brandLabel: 'もぺ ページ上部',
  avatarAlt: 'もぺのプロフィール画像',
  sections: [
    { id: 'about', num: '01', title: '概要' },
    { id: 'skills', num: '02', title: 'スキル' },
    { id: 'works', num: '03', title: '実績' },
    { id: 'contact', num: '04', title: '連絡先' },
  ],
  skills: {
    caption: 'スキルと経験',
    nameColumn: '技術',
    detailColumn: '経験と内容',
    practical: '実務',
    personal: '個人開発',
  },
  footer: { copyright: '© 2026 もぺ / mopeneko', toTop: 'ページ上部へ' },
} as const

export const sectionIds: readonly string[] = ui.sections.map((section) => section.id)

export function isExternal(href: string): boolean {
  return href.startsWith('http')
}

export function yearsLabel(years: number): string {
  return `実務${years}年`
}
