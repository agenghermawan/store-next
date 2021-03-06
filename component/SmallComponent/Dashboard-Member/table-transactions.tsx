import React from "react";
import Image from "next/image";

export default function TableTransaction(props) {
  const { image, price, status, item } = props;
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/assets/img/${image}.png`}
          width={80}
          height={60}
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            Mobile Legends: The New Battle 2021
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            Desktop
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">200 Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">Rp 290.000</p>
      </td>
      <td>
        <div>
          <span className="float-start icon-status pending" />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            Pending
          </p>
        </div>
      </td>
    </tr>
  );
}
