---
title: 一覧画面（ホーム画面）の表示部品を作成
sidebar_label: 表示部品の作成
hide_table_of_contents: true
---

デザインシステムを参照して、一覧画面の各表示部品をコンポーネントとして作成してください。

デザインシステムで示された各表示部品をReact Nativeで実現するために、必要であればOSSライブラリの使用を考えます。使用するコアコンポーネントまたはライブラリのドキュメントを参考に実装し、スタイルを設定して完成させます。

コンポーネントの配置場所や実装例はサンプルアプリ（[SantokuApp](https://github.com/{@inject:organization}/mobile-app-crib-notes/tree/master/example-app/SantokuApp)）を参考にしてください。

作成するコンポーネントとして、例えば以下のものがあります（一部）。

| コンポーネント | 補足 |
|--|--|
| 新規作成ボタン | タップ時は色を変える。 |
| アカウント情報 | アバター、アカウント名、今期ポイント数/累計ポイント数、解決済ラベル、縦の三点リーダーボタンを表示する。<br />アバター画像：デザイン資料（Figma）のSVG画像を使用する。画像の変更機能は実装対象外。<br />アカウント名：文字数が多い場合、表示部品が重ならないように表示文字数を制限すること。表示しきれない場合は末尾に「...」を表示。<br />今期ポイント数/累計ポイント数：APIから取得したポイント数を表示。ポイント数の範囲は0～999。<br />解決済ラベル：APIから取得したresolvedの値が真の場合に表示。 |
| いいねアイコン | いいねアイコンといいね数を表示する。いいね数はAPIから取得した値を表示。範囲は0～999。 |
| 閲覧アイコン | 閲覧アイコンと閲覧数を表示する。閲覧数はAPIから取得した値を表示。範囲は0～999。 |
| 回答アイコン | 回答アイコンと回答数を表示する。回答数はAPIから取得した値を表示。範囲は0～999。 |
| 投稿日時を表す表示 | 時計アイコンと投稿からの経過時間を表示する。<br />経過時間に応じて、○分前、○時間前、○日前、○年前と表示する。 |
| イベントカード | イベントのタイトル、投稿者のアカウント情報等を表示する。<br />タイトルは最大3行とし、表示しきれない場合は文末に「...」を表示する。 |
| 質問カード | 質問のタイトル、本文（冒頭のみ）、投稿者のアカウント情報等を表示する。<br />タイトルは最大3行とし、表示しきれない場合は文末に「...」を表示する。<br />本文は最大2行とし、表示しきれない場合は文末に「...」を表示する。<br />タイトル先頭の初心者マークはAPIから取得したbeginnerの値が真の場合に表示。 |
| タグ一覧モーダル | タグの一覧を表示するモーダル。 |