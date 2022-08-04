import {
    IExec,
    utils
} from "iexec";
import Web3 from 'web3';

class IexecSDK{
    iexec;
    constructor(){

    }

    async init(onConnected){
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
            //not on the correct network
        }

            //networkOutput.innerText = networkmap.get(parseInt(networkVersion));

        let iexec = new IExec({
            ethProvider,
            chainId: networkVersion
        });
        onConnected()
        this.iexec = iexec
        await this.refreshUser();
        await this.checkStorage();
    } catch (e) {
        console.error(e.message);
        }
    }

    async changeNetwork(){
        const chainId = 134 // Polygon Mainnet

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

    async refreshUser() {
        const userAddress = await this.iexec.wallet.getAddress();
        const [wallet, account] = await Promise.all([
            this.iexec.wallet.checkBalances(userAddress),
            this.iexec.account.checkBalance(userAddress)
        ]);
        //const nativeWalletText = `Native : ${utils.formatEth(wallet.wei).substring(0, 6)} RLC`;
        console.log(`Native : ${utils.formatEth(wallet.wei).substring(0, 6)} RLC`)
        //const rlcWalletText = `${utils.formatRLC(wallet.nRLC)} RLC`;
        console.log(`${utils.formatRLC(wallet.nRLC)} RLC`)
        //accountOutput.innerText = `Wallet : ${account.stake} nRLC`;
        console.log(`Wallet : ${account.stake} nRLC`)
    };

    async checkStorage () {
        try {
            
            const isStorageInitialized = await this.iexec.storage.checkStorageTokenExists(
                await this.iexec.wallet.getAddress()
            );
            
            if (isStorageInitialized) {console.log("storage initialized")};
            if (!isStorageInitialized) {console.log("storage not initialized")};
        } catch (error) {
            console.log(error)
        }
    };

    async initStorage () {
        try {
            
            const storageToken = await this.iexec.storage.defaultStorageLogin();
            await this.iexec.storage.pushStorageToken(storageToken, {
                forceUpdate: true
            });
            this.checkStorage(this.iexec);
        } catch (error) {
            console.log(error)
        } finally {
            //storageInitButton.disabled = false;
        }
    };

    async showApp (iexec,appAddress) {
        try {
    
            
            const appAddress =""
            const res = await iexec.app.showApp(appAddress);
            //appsShowOutput.innerText = JSON.stringify(res, null, 2);
        } catch (error) {
            //appsShowError.innerText = error;
            //docbody.classList.remove("waiting");
        } finally {
            //docbody.classList.remove("waiting");
            //appsShowButton.disabled = false;
        }
    };

    async showWorkerpoolOrderbook (iexec){
        try {
            
            const workerpoolAddress ="";
            const {
                orders
            } = await iexec.orderbook.fetchWorkerpoolOrderbook({workerpool:workerpoolAddress});
        
            if (orders[0] === undefined){
               // workerpoolOrderbookShowOutput.innerText = "No order found for the given address."
            }else {
           // workerpoolOrderbookShowOutput.innerText = JSON.stringify(orders[0], null, 2);
        }
    
        } catch (error) {
          //  workerpoolOrderbookShowError.innerText = error;
           // docbody.classList.remove("waiting");
        } finally {
          //  workerpoolOrderbookShowButton.disabled = false;
          //  docbody.classList.remove("waiting");
        }
    };

    async showOrderbook (iexec,appAddress) {
        try {
            
            const {
                orders
            } = await iexec.orderbook.fetchAppOrderbook(appAddress);
            if (orders[0] === undefined){
             //   appOrderbookShowOutput.innerText = "No order found for the given address."
            }else {
            //appOrderbookShowOutput.innerText = JSON.stringify(orders[0], null, 2);
            }
        } catch (error) {
           // appOrderbookShowError.innerText = error;
         //   docbody.classList.remove("waiting");
        } finally {
          //  appOrderbookShowButton.disabled = false;
           // docbody.classList.remove("waiting");
        }
    };

    async buyComputation(iexec, appAddress, category, params, workerpool, trustLevel)  {
        try {
            
            //const appAddress = "buyAppAddressInput.value";
            //const category = "buyCategoryInput.value";
            //const params = "buyParamsInput.value";
            //const workerpool = "buyWorkerpoolInput.value";
            //const trustLevel = "buyTrustInput.value";
            const {
                orders
            } = await iexec.orderbook.fetchAppOrderbook(appAddress);
            const appOrder = orders && orders[0] && orders[0].order;
            if (!appOrder) throw Error(`no apporder found for app ${appAddress}`);
    
            const workerPoolRes = await iexec.orderbook.fetchWorkerpoolOrderbook(
                {workerpool: workerpool,
                category: category,
                minTrust : trustLevel}
            );
            const workerPoolOrders = workerPoolRes.orders;
            const workerpoolOrder =
            workerPoolOrders && workerPoolOrders[0] && workerPoolOrders[0].order;
            if (!workerpoolOrder)
                throw Error(`no workerpoolorder found for the selected options: category ${category}, trust level ${trustLevel}`);
    
            const userAddress = await iexec.wallet.getAddress();
    
            const requestOrderToSign = await iexec.order.createRequestorder({
                app: appAddress,
                appmaxprice: appOrder.appprice,
                workerpoolmaxprice: workerpoolOrder.workerpoolprice,
                requester: userAddress,
                workerpool: workerpool,
                volume: 1,
                params: params,
                trust: trustLevel,
                category: category
            });
    
            const requestOrder = await iexec.order.signRequestorder(requestOrderToSign);
    
            const res = await iexec.order.matchOrders({
                apporder: appOrder,
                requestorder: requestOrder,
                workerpoolorder: workerpoolOrder
            });
            //buyBuyOutput.innerText = JSON.stringify(res, null, 2);
            //resultsDealidInput.value = res.dealid;
            this.refreshUser(this.iexec);
            return res.dealid;
            

        } catch (error) {
           // buyBuyError.innerText = error;
            //docbody.classList.remove("waiting");
        } finally {
           // buyBuyButton.disabled = false;
          //  docbody.classList.remove("waiting");
        }
    };

    async showDeal (iexec, dealid)  {
        try {
            
            //const dealid = resultsDealidInput.value;
            const deal = await iexec.deal.show(dealid);
            //resultsShowDealOutput.innerText = JSON.stringify(deal, null, 2);
                //resultsTaskidInput.value = deal.tasks["0"];
                //resultsDownloadInput.value = deal.tasks["0"];
        } catch (error) {
            //resultsShowDealError.innerText = error;
            //docbody.classList.remove("waiting");
        } finally {
            //resultsShowDealButton.disabled = false;
            //docbody.classList.remove("waiting");
        }
    };

    async showTask (iexec, taskid) {
        try {
            
            //const taskid = resultsTaskidInput.value;
            const res = await iexec.task.show(taskid);
                //resultsShowTaskOutput.innerText = JSON.stringify(res, null, 2);
        } catch (error) {
            //resultsShowTaskError.innerText = error;
            //docbody.classList.remove("waiting");
        } finally {
            //resultsShowTaskButton.disabled = false;
            //docbody.classList.remove("waiting");
        }
    };

    async dowloadResults (iexec,taskid)  {
        try {
            
            //const taskid = resultsDownloadInput.value;
            const res = await iexec.task.fetchResults(taskid, {
                ipfsGatewayURL: "https://ipfs.iex.ec"
            });
            const file = await res.blob();
            //const fileName = `${taskid}.zip`;
           
        } catch (error) {
            //resultsDownloadError.innerText = error;
            //docbody.classList.remove("waiting");
        } finally {
            //resultsDownloadButton.disabled = false;
            //docbody.classList.remove("waiting");
        }
    };

}

export { IexecSDK }