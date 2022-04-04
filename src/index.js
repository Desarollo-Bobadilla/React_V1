import * as ReactDOMClient from "react-dom/client";
import Museums from "./components/museums/museums";
import "bootstrap/dist/css/bootstrap.css";

const containter = document.getElementById("root");
const root = ReactDOMClient.createRoot(containter);

root.render(<Museums />);
