import * as React from 'react';
import {BrowserWindow} from 'electron';

let win = new BrowserWindow({width: 800, height: 600})
  win.on('closed', () => {
    
})

export namespace SharePointConect{
    export interface Props {

    }

    export interface State {

    }
}

export default class SharePointConect extends React.Component<SharePointConect.Props,SharePointConect.State> {
    constructor(props: SharePointConect.Props){
        super(props);
    }

    render(){
        return <div></div>
    }
}