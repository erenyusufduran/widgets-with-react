import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front-End javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS Livrary among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React with components.",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];
export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Translate />
    </div>
  );
};
