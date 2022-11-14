    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */


     function App() {
        const [count, setCount] = React.useState(0)  //Returns ARRAY
        
        function add() {
            setCount(function() {
                return count + 1
            })
        }
        
        function subtract() {
            // BEST PRACTICE...
            setCount( prevCount => prevCount - 1 )
        }
        
        const styles = {
            color: count >= 0 ? (count === 0 ? "black" : "blue") : "red"
        }
        return  (
            <div className="counter">
                <button className="counter--minus" onClick={subtract}>–</button>
                <div className="counter--count">
                    <h1 style={styles}>{count}</h1>
                </div>
                <button className="counter--plus" onClick={add}>+</button>
            </div>
        )
    }
    
    ReactDOM.render(<App/>, document.getElementById("root"))


