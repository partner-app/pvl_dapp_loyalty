import React, { useState, useEffect } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import FeedLeftContent from '../../partials/community/FeedLeftContent';
import FeedPosts from '../../partials/community/FeedPosts';
import FeedRightContent from '../../partials/community/FeedRightContent';

import Avatar from '../../images/user-40-02.jpg';
// import WalletButton from '../../partials/WalletConnection';



function Feed() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [supplyAmount, setSupplyAmount] = useState();
  const [burnAmount, setBurnAmount] = useState();
  const [transferAmount, setTransferAmount] = useState();
  const [transferAddress, setTransferAddress] = useState();
  const [tokenName, setTokenName] = useState();
  const [tokenDecimals, setTokenDecimals] = useState();
  const [tokensList, setTokensList] = useState([]);
  const [selectedToken, setSelectedToken] = useState();




  function CreateToken() {
    // const api_link = 'https://www.ivan-stake.com/dapp_api/ivan_token/CreateToken/?token_name=' + tokenName + '&decimals=' + tokenDecimals
    const api_link = 'http://127.0.0.1:5000/dapp_api/ivan_token/CreateToken/?token_name=' + tokenName + '&decimals=' + tokenDecimals
        console.log(api_link)
        fetch(api_link)
              .then(async response => {
              const data = await response.json();
              // check for error response
              if (!response.ok) {
                  // get error message from body or default to response status
                  const error = (data && data.message) || response.status;
                  return Promise.reject(error);
              }
              console.log(data);           
              })
              .catch(error => {
              this.errorMessage = error;
              console.error('There was an error!', error);
              });
  } 

  function FetchTokens() {
    // const api_link = 'https://www.ivan-stake.com/dapp_api/ivan_token/GetTokens/'
    const api_link = 'http://127.0.0.1:5000/dapp_api/ivan_token/GetTokens/'
        console.log(api_link)
        fetch(api_link)
              .then(async response => {
              const data = await response.json();
              // check for error response
              if (!response.ok) {
                  // get error message from body or default to response status
                  const error = (data && data.message) || response.status;
                  return Promise.reject(error);
              }
              console.log(data.result)
              setTokensList(data.result);      
              })
              .catch(error => {
              this.errorMessage = error;
              console.error('There was an error!', error);
              });
  } 

  function SupplyToken() {
        // const api_link = 'https://www.ivan-stake.com/dapp_api/ivan_token/SupplyToken/?amount=' + supplyAmount + '&token_name=' + selectedToken
        const api_link = 'http://127.0.0.1:5000/dapp_api/ivan_token/SupplyToken/?amount=' + supplyAmount  + '&token_name=' + selectedToken
        console.log(api_link)
        fetch(api_link)//, {mode: 'no-cors'})
              .then(async response => {
              const data = await response.json();
              // check for error response
              if (!response.ok) {
                  // get error message from body or default to response status
                  const error = (data && data.message) || response.status;
                  return Promise.reject(error);
              }
              console.log(data);
              // context.commit("setAvalancheData", data);            
              })
              .catch(error => {
              this.errorMessage = error;
              console.error('There was an error!', error);
              });
    // return () => document.removeEventListener('click', clickHandler);
  }

  function BurnToken() {
      // const api_link = 'https://www.ivan-stake.com/dapp_api/ivan_token/BurnToken/?amount=' + burnAmount  + '&token_name=' + selectedToken
      const api_link = 'http://127.0.0.1:5000/dapp_api/ivan_token/BurnToken/?amount=' + burnAmount  + '&token_name=' + selectedToken
      console.log(api_link)
      fetch(api_link)//, { mode: 'no-cors'})
            .then(async response => {
            const data = await response.json();
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            console.log(data);
            // context.commit("setAvalancheData", data);            
            })
            .catch(error => {
            this.errorMessage = error;
            console.error('There was an error!', error);
            });
    
  }

  function TransferToken() {
      // const api_link = 'https://www.ivan-stake.com/dapp_api/ivan_token/TransferToken/?amount=' + transferAmount +'&dest_pubkey=' + transferAddress  + '&token_name=' + selectedToken
      const api_link = 'http://127.0.0.1:5000/dapp_api/ivan_token/TransferToken/?amount=' + transferAmount +'&dest_pubkey=' + transferAddress  + '&token_name=' + selectedToken
      console.log(api_link)
      fetch(api_link)//, { mode: 'no-cors'})
            .then(async response => {
            const data = await response.json();
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            console.log(data);
            // context.commit("setAvalancheData", data);            
            })
            .catch(error => {
            this.errorMessage = error;
            console.error('There was an error!', error);
            });
  }
  
  function EarnToken() {
    console.log("Earn Token is clicked!")
    // return () => document.removeEventListener('click', clickHandler);
  }
  
  function RedeemToken() {
    console.log("Redeem Token is clicked!")
    // return () => document.removeEventListener('click', clickHandler);
  }  

  // const test = ['ivan', 'test']


  useEffect(() => {
    // setTokensList([test]);
    FetchTokens();
    // fn_GetHistoricalTransactions();
}, [])

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-0 w-full max-w-9xl mx-auto">

            <div className="xl:flex">
              
              {/* Left + Middle content */}
              <div className="md:flex flex-1">

                {/* Left content */}
                <FeedLeftContent />
                
                
                {/* Middle content */}
                <div className="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">

                {/* <div className="flex-1 md:ml-8 xl:mx-4 2xl:mx-8"> <WalletButton /> </div> */}
                  <div className="md:py-8">
                    


                    {/* Create Token */}
                    <div className="space-y-4">

                      {/* Post Block */}
                      <div className="bg-white shadow-md rounded border border-slate-200 p-5">
                      <div>
                        <span style={{color:"black"}}>
                        Create Token
                        </span>
                      </div>
                      <hr></hr>
                      <br/>
                        <div className="flex items-center space-x-3 mb-5">
                          {/* <img className="rounded-full shrink-0" src={Avatar} width="40" height="40" alt="User 02" /> */}
                          <div className="grow">
                            <label htmlFor="status-input" className="sr-only">
                              CreateToken
                            </label>
                            <input
                              id="tokenName-input"
                              onChange={event => setTokenName(event.target.value)}
                              className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                              type="text"
                              placeholder="Enter Token Name!"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 mb-5">
                          <div className="grow">
                            <label htmlFor="status-input" className="sr-only">
                              decimals
                            </label>
                            <input
                              id="decimalsID"
                              onChange={event => setTokenDecimals(event.target.value)}
                              className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                              type="text"
                              placeholder="Enter Decimals!"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 mb-5">
                          <div className="grow">
                            <label htmlFor="status-input" className="sr-only">
                              UploadImage
                            </label>
                            <input
                              id="ImageID"
                              // onChange={event => setTransferAddress(event.target.value)}
                              className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                              type="file"
                              placeholder="Upload Token Image!"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="grow flex space-x-5">
                          </div>
                          <div>
                            <button
                            onClick={CreateToken} 
                            type="submit" 
                            className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">
                              Create -&gt;
                            </button>
                          </div>
                        </div>
                      </div>

                      

                    </div>                    

                    <br></br>

                    {/* Select Token */}
                    <div className="space-y-4">

                      {/* Post Block */}
                      <div className="bg-white shadow-md rounded border border-slate-200 p-5">
                      <div>
                        <span style={{color:"black"}}>
                        Select Token
                        </span>
                      </div>
                      <hr></hr>
                      <br/>
                    <div>
                        <div className="text-sm text-slate-800 font-semibold mb-3"></div>
                          <label className="sr-only">Tokens</label>
                          <select 
                          className="form-select w-full" 
                          value={selectedToken} 
                          onChange={(e) => setSelectedToken(e.target.value)}>
                            {tokensList.map((option) => (<option key={option} value={option}>{option}</option>))}
                          </select>
                        </div>
                        <br />
                        <div className="flex justify-between items-center">
                          <div className="grow flex space-x-5">
                          </div>
                          <div>
                            <button 
                              onClick={FetchTokens}
                              type="submit"  
                              className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap"
                              >
                              Update List -&gt;
                            </button>
                          </div>
                        </div>
                      </div>

                      

                    </div>  


                    <br></br>

                    {/* Add Token */}
                    <div className="space-y-4">

                      {/* Post Block */}
                      <div className="bg-white shadow-md rounded border border-slate-200 p-5">
                      <div>
                        <span style={{color:"black"}}>
                        Add Token
                        </span>
                      </div>
                      <hr></hr>
                      <br/>
                        <div className="flex items-center space-x-3 mb-5">
                          {/* <img className="rounded-full shrink-0" src={Avatar} width="40" height="40" alt="User 02" /> */}
                          <div className="grow">
                            {/* <label htmlFor="status-input" className="sr-only">
                              title
                            </label> */}
                            <input
                              id="supplyAmountID"
                              className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                              type="number"
                              onChange={event => setSupplyAmount(event.target.value)}
                              placeholder="Enter Amount to Add!"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="grow flex space-x-5">
                          </div>
                          <div>
                            <button 
                              onClick={SupplyToken}
                              type="submit"  
                              className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap"
                              >
                              Supply -&gt;
                            </button>
                          </div>
                        </div>
                      </div>

                      

                    </div>  

                    <br></br>

                    {/* Burn Token */}
                    <div className="space-y-4">

                      {/* Post Block */}
                      <div className="bg-white shadow-md rounded border border-slate-200 p-5">
                      <div>
                        <span style={{color:"black"}}>
                        Burn Token
                        </span>
                      </div>
                      <hr></hr>
                      <br/>
                        <div className="flex items-center space-x-3 mb-5">
                          {/* <img className="rounded-full shrink-0" src={Avatar} width="40" height="40" alt="User 02" /> */}
                          <div className="grow">
                            {/* <label htmlFor="status-input" className="sr-only">
                              BurnAmount
                            </label> */}
                            <input
                              id="BurnAmountID"
                              onChange={event => setBurnAmount(event.target.value)}
                              className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                              type="number"
                              placeholder="Enter Amount to Burn!"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="grow flex space-x-5">
                          </div>
                          <div>
                            <button onClick={BurnToken} type="submit" className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">
                              Burn -&gt;
                            </button>
                          </div>
                        </div>
                      </div>

                      

                    </div>  

                    <br></br>

                    {/* Transfer Token */}
                    <div className="space-y-4">

                      {/* Post Block */}
                      <div className="bg-white shadow-md rounded border border-slate-200 p-5">
                      <div>
                        <span style={{color:"black"}}>
                        Transfer Token
                        </span>
                      </div>
                      <hr></hr>
                      <br/>
                        <div className="flex items-center space-x-3 mb-5">
                          {/* <img className="rounded-full shrink-0" src={Avatar} width="40" height="40" alt="User 02" /> */}
                          <div className="grow">
                            <label htmlFor="status-input" className="sr-only">
                              TransferAmount
                            </label>
                            <input
                              id="TransferAmountID"
                              onChange={event => setTransferAmount(event.target.value)}
                              className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                              type="number"
                              placeholder="Enter Amount to Transfer!"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 mb-5">
                          <div className="grow">
                            <label htmlFor="status-input" className="sr-only">
                              TransferAddress
                            </label>
                            <input
                              id="transferDestinationID"
                              onChange={event => setTransferAddress(event.target.value)}
                              className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                              type="text"
                              placeholder="Enter Destination Address!"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="grow flex space-x-5">
                          </div>
                          <div>
                            <button onClick={TransferToken} type="submit" className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">
                              Transfer -&gt;
                            </button>
                          </div>
                        </div>
                      </div>

                      

                    </div>  

                    <br></br>

                    {/* Earn Token */}
                    <div className="space-y-4">

                      {/* Post Block */}
                      <div className="bg-white shadow-md rounded border border-slate-200 p-5">
                      <div>
                        <span style={{color:"black"}}>
                        Earn Token
                        </span>
                      </div>
                      <hr></hr>
                      <br/>
                        <div className="flex items-center space-x-3 mb-5">
                          {/* <img className="rounded-full shrink-0" src={Avatar} width="40" height="40" alt="User 02" /> */}
                          <div className="grow">
                            <label htmlFor="status-input" className="sr-only">
                              EarnAmount
                            </label>
                            <input
                              id="status-input"
                              className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                              type="text"
                              placeholder="Earned Amount!"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="grow flex space-x-5">
                          </div>
                          <div>
                            <button onClick={EarnToken} type="submit" className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">
                              Earn -&gt;
                            </button>
                          </div>
                        </div>
                      </div>

                      

                    </div>  

                    <br></br>

                    {/* Redeem Token */}
                    <div className="space-y-4">

                      {/* Post Block */}
                      <div className="bg-white shadow-md rounded border border-slate-200 p-5">
                      <div>
                        <span style={{color:"black"}}>
                        Redeem Token
                        </span>
                      </div>
                      <hr></hr>
                      <br/>
                        <div className="flex items-center space-x-3 mb-5">
                          {/* <img className="rounded-full shrink-0" src={Avatar} width="40" height="40" alt="User 02" /> */}
                          <div className="grow">
                            <label htmlFor="status-input" className="sr-only">
                              RedeamAmount
                            </label>
                            <input
                              id="status-input"
                              className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                              type="text"
                              placeholder="Enter Amount to Redeem!"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="grow flex space-x-5">
                          </div>
                          <div>
                            <button onClick={RedeemToken} type="submit" className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">
                              Redeem -&gt;
                            </button>
                          </div>
                        </div>
                      </div>

                      

                    </div> 
                    <br></br>



                  </div>
                </div>                

              </div>

                           

            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default Feed;