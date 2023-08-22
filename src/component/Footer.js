import React from "react";

const content = "Copyright ⓒ";
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>
        {content} {year}
      </p>
    </footer>
  );
}

export default Footer;
