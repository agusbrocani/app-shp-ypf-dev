import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import Index from './components/Index';

export interface IIndexWebPartProps { }

export default class IndexWebPart extends BaseClientSideWebPart<IIndexWebPartProps> {
    public render(): void {
        const element: React.ReactElement = React.createElement(Index, { context: this.context });
        ReactDom.render(element, this.domElement);

    }

    protected onDispose(): void {
        ReactDom.unmountComponentAtNode(this.domElement);
    }
}