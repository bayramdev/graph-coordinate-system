import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";

interface RouteAwareNavLinkProps {
  href: string;
}

const HeaderLink: React.FC<RouteAwareNavLinkProps> = (props) => {
  const { asPath } = useRouter();
  const hrefIndex = asPath.indexOf(props.href);
  const isActive =
    hrefIndex !== -1 &&
    (asPath === props.href || asPath[hrefIndex + 1] === "/");

  return (
    <Link href={props.href} passHref>
      <Nav.Link active={isActive}>{props.children}</Nav.Link>
    </Link>
  );
};

export default HeaderLink;
