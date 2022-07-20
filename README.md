
## Requirements
- Node.js >=16.0
- npm >= 5.2.0

## 必要なmodulesをinstallしてtestが通ることを確認してください。　　

```npm install```  

testを通すために.envファイルが必要なので.env.exampleをcopyして.envファイルを作成してください。中身はそのままで大丈夫です。  
```npx run test```


## .env.exampleを参考に.envファイルを作成します。  
Smart Contractをdeployするにはprivate keyが必要なので設定してください。  
間違えてそのままgithubに上げてしまったり事故が起こりやすいので、万が一流出しても大丈夫なアカウントを用意しておいてください。  
　　
```
PRIVATE_KEY=[ここにprivate keyを入れてください]
MUMBAI_RPC_ENDPOINT=https://matic-mumbai.chainstacklabs.com
ETHERSCAN_API_KEY=ABC123ABC123ABC123ABC123ABC123ABC1
```

## Polygon Testnet Mumbaiにdeployします。
こちらでGas代を支払うためのMaticを入手します。  
https://mumbaifaucet.com/


Testnet Mumbaiにdeployします。  
```npx hardhat run scripts/deploy.ts --network mumbai```

Etherscan(Polygon Scan)のAPI keyがある場合は以下のコマンドでソースコードをverifyできます。  
```npx hardhat verify --network mumbai [Contract Address]```


## MetamaskへのPolygon Testnet Mumbaiの追加
こちらを参考にしてください。
https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/
