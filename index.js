let React = React;
let render = ReactDOM;
let store = Redux.createStore(reducer);
let Provider = ReactRedux.Provider;
let connect  = ReactRedux.connect;

function reducer(state, action) {
    if (typeof state === 'undefined') {
        return { clicksCount: 0};
    }
    console.log( action );
    let clicksCount =  state.clicksCount;
    switch (action.type) {
        case 'INCREMENT':
            clicksCount += 1;
            return {
                clicksCount: clicksCount 
            };
        case 'DECREMENT':
            clicksCount -= 1;
            return {
                clicksCount: clicksCount 
            };
        default: 
            return state;
    }
}

let App = ()=>{
        return (
            <div>
                <ViewingContainer/>
                <VotingContainer/>
            </div>
        )
};

class Voting extends React.Component {
    render() {
        return (
              <div>
                    <button onClick={() => { this.props.onIncrement(1); }}>+</button>
                    <button onClick={() => { this.props.onDecrement(-1); }}>-</button>
              </div>
        );
    }
};

class Viewing extends React.Component {
    render() {
        return (
              <div>
                  <p>Value {this.props.clicksCount}</p>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
  return {
      clicksCount: state.clicksCount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
        onIncrement: (param) => {
            dispatch({ type: 'INCREMENT', param: param });
        },
        onDecrement: (param) => {
            dispatch({ type: 'DECREMENT', param: param });
        }
    }
}

const ViewingContainer = connect(
  mapStateToProps
)(Viewing);

const VotingContainer = connect(
    null,
  mapDispatchToProps
)(Voting);

ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('content')
    );
