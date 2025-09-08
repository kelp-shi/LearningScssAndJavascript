<pre>

|
├── .vscode/
│   └── launch.json : debug用
|
├── api/
|   ├── add_rest_api_endpoint.php : REST APIエンドポイントの実装
|   ├── pre_get_posts.php : メインクエリに対して、ページ種別ごとに投稿取得条件を変更
│   └── rest_api_field.php : REST API取得処理のカスタマイズ
|
├── atcf7/ : 未使用
|
├── cmn_assets/ : 前テーマで使用していたassets
|   ├── banner/ : バナー画像
│   └── common/ : 汎用画像
|
├── content/ : 表示するテンプレート
|   ├── archive/ : アーカイブページのテンプレート群
|   ├── logos/ : get_file_content()でロゴスホームが取得するページテンプレート群
|   ├── loop/ : アーカイブページで連続して表示するテンプレート群（記事用）
|   ├── page/ : 各ページのテンプレート群
|   ├── single/ : 記事詳細テンプレート群
|   ├── taxonomy/ : タクソノミー一覧用テンプレート群
|   ├── 404.php : 404ページのテンプレート
|   ├── none.php : 記事404のテンプレート（未使用）
|   ├── page.php : ページのデフォルトテンプレート
|   └── single.php : 記事詳細のデフォルトテンプレート
|
