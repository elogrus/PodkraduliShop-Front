import { createRoot } from "react-dom/client";
import { AppWrapper } from "app/AppWrapper";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<AppWrapper />);
