import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import TransactionsTable from '../../partials/finance/TransactionsTable';
import PaginationClassic from '../../components/PaginationClassic';

function Transactions() {


  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">

        {/*  Site header */}
        <Header />

        <main>

          {/* Content */}
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-4 md:mb-2">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                {/* <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">$47,347.09</h1> */}
              </div>              
            </div>

            {/* Table */}
            <TransactionsTable />

            {/* Pagination */}
            <div className="mt-8">
              <PaginationClassic />
            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Transactions;