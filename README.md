# Referrer-Policy for kintone

## 概要

* リファラー情報の外部への送信を極力抑制するリファラーポリシーを設定する、kintone用のプラグインです。

## 使い方

* ［kintoneシステム管理］の画面で本プラグイン（ https://github.com/emic/referrer-policy-for-kintone/releases/latest ）を読み込みます（Zip形式圧縮ファイルのまま読み込みます）。

* 適用するアプリの［アプリの設定］＞［詳細］＞［プラグイン］で［プラグインの追加］をクリックして、本プラグインを選択して、プラグインを追加します。

* アプリの設定に戻ってから［アプリの更新］をクリックすると、プラグインが有効化されます。

## 詳細

* 本プラグインを有効にすると、リファラーポリシーとして「same-origin」を指定した場合の挙動となるようにkintoneを調整します。Referrer-Policy for kintoneでは、レコード一覧画面、レコード詳細画面、レコード追加画面、レコード編集画面、レコード印刷画面、グラフ画面を対象として、各画面の表示後にmeta要素（&lt;meta name="referrer" content="same-origin"&gt;）を追加するようにしています。さらに、バージョン2.0では、外部サイトへのリンクのある各a要素のrel属性に「noreferrer」を設定するように調整して、Windows 10のInternet Explorer 11とMicrosoft Edgeにも対応しました。（target属性の値が「_blank」になっているa要素についてはrel属性に「noopener」も付加するようにしています）。詳細や経緯については下記の記事もご参照ください。

- Referrer-Policy for kintoneというプラグインを作成しました <https://note.com/matsuo_atsushi/n/ne66c53b03046>
- Referrer-Policy for kintoneのインストール方法 <https://note.com/matsuo_atsushi/n/n65f69d7ef0b8>
- Referrer-Policy for kintone 1.2でスマートフォンに対応しました <https://note.com/matsuo_atsushi/n/n6f0bb14874e6>
- Referrer-Policy for kintone 2.0でInternet Explorer 11とMicrosoft Edgeに対応しました <https://note.com/matsuo_atsushi/n/ndffe52ceb7ba>

## 注意点

* ポータルやスペースの画面、アプリの設定画面内にあるリンクについては本プラグインによる効果はありません。

## ライセンス

* ライセンスはMITライセンスです。

## 変更履歴

- バージョン2.0（2020/03/09）
  - Windows 10のInternet Explorer 11とMicrosoft Edgeに対応しました。外部サイトへのリンクのある各a要素のrel属性に「noreferrer」を設定するようにしました。
  - target属性値が「_blank」になっているa要素についてはrel属性に「noopener」も付加するようにしました。
  - レコードを編集するボタンを押した時やレコード編集画面でキャンセルボタンを押した時、レコード詳細画面でページ送りをした時などにmeta要素が重複して追加される不具合を修正しました。
- バージョン1.2（2020/02/09）
  - スマートフォンに対応しました。
- バージョン1.1（2020/01/30）
  - 印刷用画面でリファラーポリシーが正しく設定されていなかった不具合を修正しました。
- バージョン1.0（2020/01/30）
  - 最初のリリースバージョン。
