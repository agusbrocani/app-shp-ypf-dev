import * as React from "react";
import { HashRouter } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";
import App from "./app/App";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IIndexProps {
    context: WebPartContext;
}

// Esto lo puse para que no moleste un warning de React Router.
const originalWarn = console.warn;
console.warn = (...args) => {
    if (
        args[0]?.includes("React Router Future Flag Warning")
    ) return;
    originalWarn(...args);
};
const Index: React.FC<IIndexProps> = ({ context }) => {
    initializeIcons();

    return (
        <HashRouter>
            <App context={context} />
        </HashRouter>
    );
};

export default Index;
