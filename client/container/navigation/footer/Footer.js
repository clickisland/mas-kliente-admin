import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

function Footer() {
  const footerStyles = css`
    border: solid 1px black;
    grid-column: 1 / -1;
    grid-row: 3;
  `;
  return <div css={footerStyles}>Footer</div>;
}
export default Footer;
Footer;
