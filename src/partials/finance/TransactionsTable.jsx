
import React, { useState, useEffect } from 'react';
import TransactionItem from './TransactionsTableItem';
import moment from 'moment'

function TransactionsTable() {
  

  
  const [list, setList] = useState([]);
  const pubkey = "EH6JKnmK2jMF2xzsqPdH8Jhv21QA9E1hfjvzqDSti9ac";
  



  // const handleClick = e => {
  //   console.log("handleClick")
  //   console.log(e)
  //   // const { id, checked } = e.target;
  //   // setSelectAll(false);
  //   // setIsCheck([...isCheck, id]);
  //   // if (!checked) {
  //   //   setIsCheck(isCheck.filter(item => item !== id));
  //   // }
  // };

  function getDate(x){
    var date = new Date(x * 1000);
    return moment(date).format("YYYY-DD-MM hh:mm:ss A") //format("YYYY-DD-MM HH:MM:SS") // .format("YYYY-DD-MM");//
  };

  function selectedRow(signature){
    let route = 'https://explorer.solana.com/tx/'+signature+'?cluster=testnet';
    window.open(route);
  };


  function fn_GetHistoricalTransactions(){
    const api_link = 'https://www.ivan-stake.com/dapp_api/ivan_token/GetHistoricalTransactions/?pubkey='+pubkey
    // const api_link = 'https://www.ivan-stake.com/dapp_api/ivan_token/GetHistoricalTransactions/?pubkey=EH6JKnmK2jMF2xzsqPdH8Jhv21QA9E1hfjvzqDSti9ac'// + this.pubkey
    // const api_link = 'http://127.0.0.1:5000/dapp_api/ivan_token/GetHistoricalTransactions/?pubkey=' + this.pubkey
    console.log(api_link)
    fetch(api_link)
          .then(async response => {
            const data = await response.json();
            // console.log(data)
          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }

          const transactions = data.result;
          // //convert to datetime
          for (var i=0; i< transactions.length; i++){
            transactions[i].blockTime = getDate(transactions[i].blockTime);
          }
          setList(transactions);

         
          })
          .catch(error => {
          this.errorMessage = error;
          console.error('There was an error!', error);
          });

  };

  // fn_GetHistoricalTransactions();
  useEffect(() => {
    // write your code here, it's like componentWillMount
    fn_GetHistoricalTransactions();
}, [])

  return (
    <div className="bg-white">
      <div>


        {/* <!-- Left: Title --> */}
        <div className='mb-4 sm:mb-0'>
          <h6 className="text-xl md:text-xl text-slate-800 font-bold">Address: {pubkey}</h6>
        </div>
        
        {/* <!-- Right: Actions  --> */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* <!-- Export button -->  */}
          <button onClick={() => fn_GetHistoricalTransactions()}  className="btn bg-indigo-500 hover:bg-indigo-600 text-white">REFRESH</button>
        </div>
        <br></br>


        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">BLOCK TIME</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">SIGNATURE</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">STATUS</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-right">SLOT</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200 border-b border-slate-200">
              {list.map((transaction) => {
                return (
                  <TransactionItem
                    key={transaction.id}
                    blockTime={transaction.blockTime}
                    signature={transaction.signature}
                    confirmationStatus={transaction.confirmationStatus}
                    slot={transaction.slot}
                    Cell={ e =><a href={e.signature}> {e.signature} </a>}
                    // onClick={selectedRow(transaction.signature)}
                    // handleClick={selectedRow(transaction.signature)}
                    // handleClick={handleClick}
                    // isChecked={isCheck.includes(transaction.id)}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionsTable;
