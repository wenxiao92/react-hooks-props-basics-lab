import React from "react";

function Links(linksProp) {
  console.log(linksProp)

  return (
    <h3>Links
      <a href={linksProp.github}>{linksProp.github}</a>
      <a href={linksProp.linkedin}>{linksProp.linkedin}</a>
    </h3>
  );
}

export default Links;