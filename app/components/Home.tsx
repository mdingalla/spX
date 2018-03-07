import * as React from 'react';
import { SharePointServer } from '../models/models';


// import {BrowserWindow} from 'electron';

let styles = require('./Home.scss');

export namespace Home {
  export interface Props {

  }

  export interface State {
    sharepoint:SharePointServer[];
  }
}

export default class Home extends React.Component<Home.Props,Home.State> {
  constructor(props: Home.Props){
    super(props);



  }


  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
        </div>
      </div>
    );
  }
}
