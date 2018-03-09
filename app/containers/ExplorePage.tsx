import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RouteComponentProps } from 'react-router';
// import Home from '../components/Home';
import * as NavActions from '../actions/navigation';
import { Link } from 'react-router-dom';

let styles = require('./../components/Counter.scss');

export namespace ExplorePage {
  export interface Props extends RouteComponentProps<void> {
      actions: typeof NavActions;
    }
  
    export interface State {
      
    }
}

export class ExplorePage extends React.Component<ExplorePage.Props> {
  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: ExplorePage.State): Partial<ExplorePage.Props> {
  return {

  };
}

function mapDispatchToProps(dispatch: Dispatch<ExplorePage.State>) : Partial<ExplorePage.Props> {
  return {
    actions: bindActionCreators(NavActions as any, dispatch)
  };
}




// export default (ExplorePage as any as React.StatelessComponent<RouteComponentProps<any>>);
export default connect(mapStateToProps,mapDispatchToProps)(ExplorePage) as any as React.StatelessComponent<ExplorePage.Props>;
