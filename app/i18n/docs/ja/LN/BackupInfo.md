# LNウォレットバックアップ情報

第2層ネットワークとしての性質上、LN関連のウォレットデータはブロックチェーン自体に**保存されません**。つまり、標準のウォレットシードが再シードされた場合にウォレットのLN残高を復元するのに**十分ではありません**。

LN ユーザーは、復元されたライトニングウォレットを以前使用していたウォレットが開いたチャンネルを閉じることができるように、**定期的に** _SCB ファイル_を保存する必要があります。

バックアップは、ローカルLNノードでチャネルがオープンまたはクローズされるたびに更新する必要があります（_remote_ノードがローカルノードに戻ってチャネルをオープンする場合を含む）。

LN バックアップの詳細については、https://docs.decred.org/lightning-network/backups/ のドキュメントを参照してください。
