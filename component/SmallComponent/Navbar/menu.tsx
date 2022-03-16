import React from "react";
import cx from "classnames";
import Link from "next/link";

interface menuProps {
  title: string;
  active?: boolean;
  href: string;
}
export default function Menu(props: Partial<menuProps>) {
  const { title, active, href = "/" } = props;
  const classTitle = cx({
    "nav-link": true,
    active,
  });
  return (
    <div>
      <li className="nav-item my-auto">
        <Link href={href}>
          <a className={classTitle} aria-current="page">
            {title}
          </a>
        </Link>
      </li>
    </div>
  );
}
