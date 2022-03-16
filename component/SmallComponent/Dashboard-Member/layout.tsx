import React from "react";
import Sidebar from "../../sidebar";
import CategoriesDashboardMember from "./categories";
import TableTransaction from "./table-transactions";

export default function Layout() {
  return (
    <section className="overview overflow-auto">
      <Sidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <CategoriesDashboardMember nominal={7000000} icon="ic-desktop">
            Game
            <br />
            Desktop
          </CategoriesDashboardMember>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <TableTransaction />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
