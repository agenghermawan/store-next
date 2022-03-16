import React from "react";
import Sidebar from "../../component/sidebar";
import CategoriesDashboardMember from "../../component/SmallComponent/Dashboard-Member/categories";
import TableTransaction from "../../component/SmallComponent/Dashboard-Member/table-transactions";

export default function Index() {
  return (
    <div>
      <section className="overview overflow-auto">
        <Sidebar />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
            <div className="top-up-categories mb-30">
              <p className="text-lg fw-medium color-palette-1 mb-14">
                Top Up Categories
              </p>
              <div className="main-content">
                <div className="row">
                  <CategoriesDashboardMember
                    nominal={7000000}
                    icon="ic-desktop"
                  >
                    Game
                    <br />
                    Desktop
                  </CategoriesDashboardMember>
                  <CategoriesDashboardMember nominal={7000000} icon="ic-mobile">
                    Game
                    <br />
                    Desktop
                  </CategoriesDashboardMember>
                  <CategoriesDashboardMember
                    nominal={7000000}
                    icon="ic-another"
                  >
                    Game
                    <br />
                    Desktop
                  </CategoriesDashboardMember>
                </div>
              </div>
            </div>
            <div className="latest-transaction">
              <p className="text-lg fw-medium color-palette-1 mb-14">
                Latest Transactions
              </p>
              <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                  <thead>
                    <tr className="color-palette-1">
                      <th className="text-start" scope="col">
                        Game
                      </th>
                      <th scope="col">Item</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableTransaction />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
