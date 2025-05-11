#AWS #github-actions 

`aws s3 sync dist s3://github-action-s3-test --delete`

--delete オプションは、aws s3 sync コマンドで使われるフラグです。

このオプションを付けることで、S3バケット側にあってローカルには存在しないファイルを、S3バケットから削除します。

つまり、「**ローカルの build ディレクトリの内容とS3バケットの内容を完全に一致させる**」ために使います。

