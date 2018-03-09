import * as React from 'react';
import { SharePointServer } from '../../models/models';


// import {BrowserWindow} from 'electron';

let styles = require('./Home.scss');

export namespace Explore {
  export interface Props {

  }

  export interface State {
    sharepoint:SharePointServer[];
  }
}

export default class Explore extends React.Component<Explore.Props,Explore.State> {
  constructor(props: Explore.Props){
    super(props);



  }


  render() {
    return (
      <div>
          <h4>Explore</h4>
        <div className={styles.container} data-tid="container">
        </div>
      </div>
    );
  }
}
