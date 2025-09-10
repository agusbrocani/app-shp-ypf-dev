import * as React from "react";
import { HashRouter } from "react-router-dom";
import { initializeIcons } from '@fluentui/react';
import App from "./app/App";

// Esto lo puse para que no moleste un warning de React Router.
const originalWarn = console.warn;
console.warn = (...args) => {
    if (
        args[0]?.includes("React Router Future Flag Warning")
    ) return;
    originalWarn(...args);
};


initializeIcons();

const Index: React.FC = () => {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}

export default Index;