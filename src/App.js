import React from "react";
import {
  Button,
  Grid,
  Header,
  List,
  Segment
} from "semantic-ui-react";


const leftItems = [
  {
    as: "a",
    content: "Documentation",
    href: "https://react.semantic-ui.com/",
    icon: "book",
    key: "docs",
    target: "_blank"
  }
];
const rightItems = [
  {
    as: "a",
    content: "Github",
    href: "https://github.com/Semantic-Org/Semantic-UI-React",
    icon: "github",
    key: "github",
    target: "_blank"
  },
  {
    as: "a",
    content: "Stack Overflow",
    icon: "stack overflow",
    href: "https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=votes",
    key: "so",
    target: "_blank"
  }
];

const App = () => (
  <div>Text</div>
);

export default App;
