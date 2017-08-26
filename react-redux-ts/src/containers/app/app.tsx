import './app.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {IGlobalState} from '../../models/state/globalState';
import {AppActions} from '../../actions/appActions';

interface IAppProps{
  isInitializing: boolean;
  min: number;
  max: number;
  count: number;

  init: () => void;
  setMin: (num: number) => void;
  setMax: (num: number) => void;
    increment: () => void;
    decrement: () => void;
}

interface IAppState{

}

class App extends React.Component<IAppProps, IAppState> {
  constructor() {
    super();
  }

  componentWillMount(){
    this.props.init();
  }

  render() {
    
    if(this.props.isInitializing) { return null;}


    return (
      <div className="App">
        <input type="number" name="counter" id="counter" value={this.props.count}/>
        <button onClick={(e)=>{this.onIncClick(e)}}>+</button>
        <button onClick={(e)=>{this.onDecClick(e)}}>-</button>
          {!false && (<div>Not Logins</div>) }
      </div>
    );
  }

  onIncClick(e: any){
    this.props.increment();
  }
    onDecClick(e: any){
        this.props.decrement();
    }
}

const mapStateToProps = (state: IGlobalState, ownProps: any) => {
  return {
    isInitializing: state.app.isInitializing
      , min : state.app.min
      , max : state.app.max
      , count : state.app.count
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    init: () => { dispatch(AppActions.init())  },
    setMax: (num: number) => { dispatch(AppActions.max(num))  },
    setMin: (num: number) => { dispatch(AppActions.min(num))  },
    increment: () => { dispatch(AppActions.increment())  },
    decrement: () => { dispatch(AppActions.decrement())  }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
