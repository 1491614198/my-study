/**
 * Created by NEWBAND on 2016/10/25.
 */
import React,{Component,PropTypes}from 'react';
import ReactDOM from 'react-dom';
import {createStore}from 'redux';
import {Provider,connect}from 'react-redux';

class Counter extends Component{
    render(){
        const {value,onIncreaseClick}=this.props;
        return(
            <div>
               <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}
Counter.propTypes={
    value:PropTypes.number.isRequired,
    onIncreaseClick:PropTypes.func.isRequired
}
const increaseAction = {type:'increase'}

function counter(state={count:0},action){
    const count=state.count;
    switch(action.type){
        case 'increase':
            return {count:count+1};
        default:
            return state;
    }
}
const store=createStore(counter);
function mapStateToProps(state){
    return{
        value:state.count
    }
}
function mapDispatchToProps(dispatch){
    return{
        onIncreaseClick:function(){
            dispatch(increaseAction)
        }
    }
}
const App=connect(
    A,
    B
)(Counter)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)