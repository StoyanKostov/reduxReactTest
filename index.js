let React = React;
let render = ReactDOM;
let store = Redux.createStore(reducer);
let Provider = ReactRedux.Provider;
let connect  = ReactRedux.connect;

function reducer(state, action) {
    console.log( action );
    if (typeof state === 'undefined') {
        return { clicksCount: 0};
    }
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicksCount: 2 };
    }

    clickHandler(param) {
        let { clicksCount } = this.state;
        clicksCount += param;
        this.setState({ clicksCount: clicksCount});
        //this.props.dispatch( { type: 'INCREMENT', data: param } );
    }

    render() {
        let { clicksCount } = this.state;
        return (
              <div>
                  <h1>Hello, {this.props.appName}</h1>
                  <p>Value {clicksCount}</p>
                <p>
                    <button onClick={() => { this.clickHandler(1); }}>+</button>
                    <button onClick={() => { this.clickHandler(-1); }}>-</button>
                </p>
                </div>
        );
    }
    };


const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps );
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
     console.log(ownProps );
  return {}
}

const CommentBoxWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBox);

ReactDOM.render(
        <Provider store={store}>
            <CommentBoxWrapper appName="My first ReactRedux"/>
        </Provider>,
        document.getElementById('content')
    );
