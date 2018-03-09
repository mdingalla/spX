import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RouteComponentProps } from 'react-router';
import Home from '../components/Home';
import * as NavActions from './../actions/navigation';


export namespace HomePage {
  export interface IProps extends RouteComponentProps<HomePage.IProps> {
    actions:typeof NavActions;
  }

  export interface IState {

  }
}


export class HomePage extends React.Component<HomePage.IProps, HomePage.IState> {
  render() {
    return (
      <Home {...this.props} />
    );
  }
}

function mapStateToProps(state: HomePage.IState): Partial<HomePage.IProps> {
  return {
    // counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Dispatch<HomePage.IState>): Partial<HomePage.IProps> {
  return {
    actions:bindActionCreators(NavActions as any, dispatch)
  }
  // return bindActionCreators(NavActions as any, dispatch);
}

// export default (HomePage as any as React.StatelessComponent<RouteComponentProps<any>>);
export default connect(mapStateToProps,mapDispatchToProps)(HomePage as any);
