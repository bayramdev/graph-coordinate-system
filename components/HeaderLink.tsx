import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavDropdown from "react-bootstrap/NavDropdown";

interface RouteAwareNavLinkProps {
  href: string;
  child: (active: boolean) => React.ReactNode;
}

const HeaderLink: React.FC<RouteAwareNavLinkProps> = (props) => {
  const { asPath } = useRouter();
  const hrefIndex = asPath.indexOf(props.href);
  const isActive =
    hrefIndex !== -1 &&
    (asPath === props.href || asPath[hrefIndex + 1] === "/");

  return (
    <Link href={props.href} passHref>
      {props.child(isActive)}
    </Link>
  );
};

export default HeaderLink;
