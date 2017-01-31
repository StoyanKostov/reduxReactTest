var React = React;
var render = ReactDOM;
var store = Redux.createStore(counter);
var Provider = ReactRedux.Provider;

function counter(state, action) {
    if (typeof state === 'undefined') {
        return 0
    }
    switch (action.type) {
        case 'INCREMENT':
        return state + 1
        case 'DECREMENT':
        return state - 1
        default:
        return state
    }
}

  var CommentBox = React.createClass({
        render: function(){
            return (
              React.DOM.div({className: "commentBox"}, 
                "Hello, world! I am a CommentBox."
              )
            );
        }
    });
    
    ReactDOM.render(
        <CommentBox/>,
        document.getElementById('content')
    );
  

var valueEl = document.getElementById('value');

 valueEl.innerHTML = store.getState().toString()

// function render() {
//     valueEl.innerHTML = store.getState().toString()
// }

// render()

// store.subscribe(render)

document.getElementById('increment').addEventListener('click', function () {
    store.dispatch({ type: 'INCREMENT' });
});

document.getElementById('decrement').addEventListener('click', function () {
    store.dispatch({ type: 'DECREMENT' });
});

document.getElementById('incrementIfOdd').addEventListener('click', function () {
    if (store.getState() % 2 !== 0) {
        store.dispatch({ type: 'INCREMENT' })
    }
});

document.getElementById('incrementAsync').addEventListener('click', function () {
    setTimeout(function () {
        store.dispatch({ type: 'INCREMENT' })
    }, 1000)
})