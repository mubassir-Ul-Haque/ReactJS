import React from "react";

const Sum = React.memo(({   number})=> {
    // function Sum() {

    function calculateSum() {
        let sum = 0;
        console.log("SUM")
        for (let i = 1; i <= number; i++) {
            sum += i;
        }

        return sum;
    }
    
    const total = calculateSum();
    
    return (
        <>
        <h1>This is our Math library</h1>
        <h2>sum:{total}</h2>
        </>
    )
// }
})
import React from "react";

const Sum = React.memo(({   number})=> {
    // function Sum() {

    function calculateSum() {
        let sum = 0;
        console.log("SUM")
        for (let i = 1; i <= number; i++) {
            sum += i;
        }

        return sum;
    }
    
    const total = calculateSum();
    
    return (
        <>
        <h1>This is our Math library</h1>
        <h2>sum:{total}</h2>
        </>
    )
// }
})
import React from "react";

const Sum = React.memo(({   number})=> {
    // function Sum() {

    function calculateSum() {
        let sum = 0;
        console.log("SUM")
        for (let i = 1; i <= number; i++) {
            sum += i;
        }

        return sum;
    }
    
    const total = calculateSum();
    
    return (
        <>
        <h1>This is our Math library</h1>
        <h2>sum:{total}</h2>
        </>
    )
// }
})
import React from "react";

const Sum = React.memo(({   number})=> {
    // function Sum() {

    function calculateSum() {
        let sum = 0;
        console.log("SUM")
        for (let i = 1; i <= number; i++) {
            sum += i;
        }

        return sum;
    }
    
    const total = calculateSum();
    
    return (
        <>
        <h1>This is our Math library</h1>
        <h2>sum:{total}</h2>
        </>
    )
// }
})

export default Sum;