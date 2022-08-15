import {
    IExec,
    utils
} from "iexec";
import Web3 from 'web3';
import {unzip} from 'unzipit';

class IexecSDK {
    iexec;
    constructor() {

    }

    async init() {
        await this.changeNetwork()
        try {
            let ethProvider;

            window.ethereum.on('chainChanged', () => { document.location.reload() })

            if (window.ethereum) {
                console.log("using default provider");
                ethProvider = window.ethereum;
            }

            let networkmap = new Map([
                [134, "Bellecour Sidechain"]
            ]);

            await ethProvider.enable();

            const {
                result
            } = await new Promise((resolve, reject) =>
                ethProvider.sendAsync({
                    jsonrpc: "2.0",
                    method: "net_version",
                    params: []
                },
                    (err, res) => {
                        if (!err) resolve(res);
                        reject(Error(`Failed to get network version from provider: ${err}`));
                    }
                )
            );

            const networkVersion = result;

            if (networkmap.get(parseInt(networkVersion)) == undefined) {
                const error = `Unsupported network ${networkVersion}`;
                throw Error(error);
            }


            let iexec = new IExec({
                ethProvider,
                chainId: networkVersion
            });
            this.iexec = iexec
            //await this.refreshUser();
            //await this.checkStorage();
        } catch (error) {
            console.log("init", error);
        }
    }

    async changeNetwork() {
        const chainId = 134 // Bellecour TestNet

        if (window.ethereum.networkVersion !== chainId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex(chainId) }]
                });
            } catch (err) {
                // This error code indicates that the chain has not been added to MetaMask
                if (err.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainName: 'Bellecour Sidechain',
                                chainId: Web3.utils.toHex(chainId),
                                nativeCurrency: { name: 'xRLC', decimals: 18, symbol: 'xRLC' },
                                rpcUrls: ['https://bellecour.iex.ec']
                            }
                        ]
                    });
                }
            }
        }
    }

    async getUserAccount() {
        const userAddress = await this.iexec.wallet.getAddress();
        const [wallet, account] = await Promise.all([
            this.iexec.wallet.checkBalances(userAddress),
            this.iexec.account.checkBalance(userAddress)
        ]);
        let native = utils.formatEth(wallet.wei).substring(0, 6)
        let nrlc = utils.formatRLC(wallet.nRLC)
        let walletStake = account.stake
        return { userAddress : userAddress, native: native, nrlc: nrlc, walletStake: walletStake }
    };

    async checkStorage() {
        try {

            const isStorageInitialized = await this.iexec.storage.checkStorageTokenExists(
                await this.iexec.wallet.getAddress()
            );

            if (isStorageInitialized) { return true };
            if (!isStorageInitialized) { return false };
        } catch (error) {
            console.log(error)
        }
    };

    async initStorage() {
        try {

            const storageToken = await this.iexec.storage.defaultStorageLogin();
            await this.iexec.storage.pushStorageToken(storageToken, {
                forceUpdate: true
            });
            this.checkStorage(this.iexec);
        } catch (error) {
            console.log("initStorage", error)
        }
    };

    async showApp(appAddress) {
        try {


            const res = await this.iexec.app.showApp(appAddress);
            return res
        } catch (error) {
            console.log("showApp", error)
        }
    };

    async showWorkerpoolOrderbook(workerpoolAddress) {
        try {

            const workerpoolOrders = await this.iexec.orderbook.fetchWorkerpoolOrderbook({ workerpool: workerpoolAddress });

            if (workerpoolOrders.orders[0] !== undefined) {
                return workerpoolOrders.orders[0]
            } else {
                console.log("showWorkerpoolOrderbook", "no workerpool orderbook orders")
            }

        } catch (error) {
            console.log("showWorkerpoolOrderbook", error)
        }
    };

    async showOrderbook(appAddress) {
        try {

            const appOrders = await this.iexec.orderbook.fetchAppOrderbook(appAddress);

            if (appOrders.orders[0] !== undefined) {
                return appOrders.orders[0]
            } else {
                console.log("showOrderbook", "no apporderbook orders")
            }
        } catch (error) {
            console.log("showOrderbook", error)
        }
    };

    async buyComputation(appAddress, category, params, workerpool, trustLevel, onComputationProgress) {
        try {


            const appOrders = await this.iexec.orderbook.fetchAppOrderbook(appAddress);
            //console.log("appOrders",appOrders)
            const appOrder = appOrders.orders[0]
            //console.log("appOrder",appOrder)
            if (!appOrder) throw Error(`no apporder found for app ${appAddress}`);
            const workerpoolOrders = await this.iexec.orderbook.fetchWorkerpoolOrderbook(
                { category },
            );
            //console.log("workerpoolOrders",workerpoolOrders)
            const workerpoolOrder = workerpoolOrders.orders[0];
            console.log("workerpoolOrder", workerpoolOrder)
            if (!workerpoolOrder)
                throw Error(`no workerpoolorder found for category ${category}`);

            const userAddress = await this.iexec.wallet.getAddress();

            const requestOrderToSign = await this.iexec.order.createRequestorder({
                app: appAddress,
                appmaxprice: appOrder.order.appprice,
                workerpoolmaxprice: workerpoolOrder.order.workerpoolprice,
                requester: userAddress,
                //workerpool: workerpoolOrder.order.workerpool,
                volume: 1,
                params,
                category,
            });
            onComputationProgress(1)
            const requestOrder = await this.iexec.order.signRequestorder(requestOrderToSign);
            //console.log("requestOrder",requestOrder)
            const res = await this.iexec.order.matchOrders({
                apporder: appOrder.order,
                requestorder: requestOrder,
                workerpoolorder: workerpoolOrder.order,
            });
            onComputationProgress(2)
            console.log("res_dealid", res.dealid)
            return res.dealid
        } catch (error) {
            console.log("buyComputation", error)
        }
    };

    async showDeal(dealid) {
        try {

            const deal = await this.iexec.deal.show(dealid);
            console.log("showDeal[''0'']", deal.tasks["0"])
            console.log("showDeal[0]", deal)
            return deal.tasks["0"]
        } catch (error) {
            console.log("showDeal", error)
        } finally {
        }
    };

    async showTask(taskid) {
        try {

            const res = await this.iexec.task.show(taskid);
            return res

        } catch (error) {
            console.log("showTask", error)
            return false
        } finally {
        }
    };

    async dowloadResults(taskid) {
        try {


            const res = await this.iexec.task.fetchResults(taskid, {
                ipfsGatewayURL: "https://ipfs.iex.ec"
            });

            const file = await res.blob();
            const {entries} = await unzip(file);
            let json_text;
            for (const [name, entry] of Object.entries(entries)) {
                console.log(name, entry.size);
                if(name == "result.json"){
                    console.log("this is computed file")
                    console.log(entry)
                    let text = await entry.json()
                    json_text = text
                    console.log(text)
                }
              }
            return json_text

        } catch (error) {
            console.log("dowloadResults", error)
        } finally {
        }
    };

}

export { IexecSDK }