import * as React from 'react';
import * as HomePage from './../containers/HomePage';
// import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import * as NavActions from './../actions/navigation';

let styles = require('./Home.scss');

export namespace Home {
  export interface IProps extends RouteComponentProps<HomePage.HomePage.IProps>{
     actions:typeof NavActions;
  }

  export interface IState {

  }

}

export default class Home extends React.Component<Home.IProps,Home.IState> {
  render() {
      const  {actions} = this.props;

    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
         <button type="button" onClick={()=> actions.goToExplorePage(this.props.history)}>
         Go To Explore Page</button>
          {/* <Link to="/counter">to Counter</Link>
          <Link to="/explore">to Explore</Link> */}
        </div>
      </div>
    );
  }
}
