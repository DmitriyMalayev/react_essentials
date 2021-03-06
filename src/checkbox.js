import React, { useReducer } from "react";

export function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <>
      <label htmlFor="checkbox">{checked ? "checked" : "unchecked"}</label>
      <input type="checkbox" value={checked} onChange={toggle} />

    </>
  );
}
