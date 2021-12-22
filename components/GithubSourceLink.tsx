import React from "react";
import Image from "next/image";
import githubIcon from "@/public/github-light-icon.png";
import Anchor from "react-bootstrap/Anchor";

const GithubSourceLink = () => {
  return (
    <Anchor
      href="https://github.com/bayramdev/graph-coordinate-system"
      aria-label="Website source code link"
    >
      <Image src={githubIcon} />
    </Anchor>
  );
};

export default GithubSourceLink;
