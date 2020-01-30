# Referrer-Policy for kintone

## 概要

* リファラー情報の外部への送信を極力抑制するリファラーポリシーを設定する、kintone用のプラグインです。

## 使い方

* ［kintoneシステム管理］の画面で本プラグイン（ https://github.com/emic/referrer-policy-for-kintone/releases/latest ）を読み込みます（Zip形式圧縮ファイルのまま読み込みます）。

* 適用するアプリの［アプリの設定］＞［詳細］＞［プラグイン］で［プラグインの追加］をクリックして、本プラグインを選択して、プラグインを追加します。

* アプリの設定に戻ってから［アプリの更新］をクリックすると、プラグインが有効化されます。

## 注意点

* “Referrer-Policy: same-origin”に対応していないWebブラウザーでは、本プラグインによる効果はありません。Internet ExplorerやMicrosoft Edge（Chromeベースではないもの）、iOSのSafariを利用している場合には、リファラー情報の外部への送信は抑制されません（2020年1月現在）。

## ライセンス

* ライセンスはMITライセンスです。