# 冷蔵庫管理アプリ「FoodSaver」基本設計書

## 🎯 アプリ概要
「FoodSaver」は、家庭の食品ロスを減らすための冷蔵庫管理アプリです。賞味期限の通知や消費記録などを通じて、食品の無駄遣いを防ぎます。

## 👤 ターゲット
- 一人暮らしの若者
- 共働き家庭
- 節約志向の家庭

## 🛠️ 使用技術スタック
- フロントエンド：React (TypeScript)
- バックエンド：Node.js + Express
- 認証：Firebase Authentication
- データベース：MongoDB Atlas
- デプロイ：Vercel / Render

## 📱 画面構成（ワイヤーフレーム）
- ログイン画面
- 食材一覧画面（登録順・期限順）
- 食材登録画面
- 食材詳細画面（消費・廃棄ボタンあり）
- 通知/履歴画面

## 🧩 機能一覧
| 機能名 | 概要 |
|--------|------|
| ユーザー登録・ログイン | Firebase Authを用いたシンプルな認証 |
| 食材の登録 | 名前・カテゴリ・賞味期限などを入力 |
| 一覧表示 | 期限昇順でのソート、カテゴリ別フィルタリング |
| 賞味期限通知 | 期限1日前にフロントに通知表示 |
| 消費/廃棄記録 | 食材のステータスを変更し履歴を保存 |

## 🗃️ データ設計（MongoDB Schema）
```ts
// FoodItem Schema (TypeScript)
{
  _id: ObjectId,
  name: string,
  category: string,
  expiryDate: Date,
  registeredAt: Date,
  status: 'active' | 'consumed' | 'discarded',
  userId: string
}
