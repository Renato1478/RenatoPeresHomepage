import React, { ReactNode } from "react";

import Link, { LinkProps } from "next/link";

import classNames from "classnames";

export default function CustomLink(props: React.ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={classNames(
        "flex align-middle gap-x-1 text-purple-600 hover:text-purple-400 dark:text-purple-500 dark:hover:text-purple-300 transition-all",
        props.className
      )}
    >
      {props.children}
    </Link>
  );
}
