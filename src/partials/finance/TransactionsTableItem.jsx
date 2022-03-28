import React from 'react';

function TransactionsTableItem(props) {

  const statusColor = (status) => {
    switch (status) {
      case 'finalized':
        return 'bg-emerald-100 text-emerald-600';
      default:
        return 'bg-rose-100 text-rose-500';
    }
  };

  const statusColorSig = (signature) => {
    return 'text-blue-500'
  };


  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="font-medium text-slate-800">{props.blockTime}</div>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className={`text-left ${statusColorSig(props.signature)}`}>{props.signature}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">
          <div className={`text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 ${statusColor(props.confirmationStatus)}`}>{props.confirmationStatus}</div>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className={`text-right font-medium`}>{props.slot}</div>
      </td>
    </tr>
  );
}

export default TransactionsTableItem;
