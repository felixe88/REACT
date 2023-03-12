import React from "react";

const Sum = ({numbers = [2,3]}) => {
    return (
        <h1>{numbers.reduce((acc, curr) => acc + curr, 0)}</h1>
    )
}

//Se i numeri non sono settati come in questo esempio quello che verrà restituito sarà un errore
//tranne se non vengono inseriti dei valori di default come in questo caso 2, 3 
export default Sum;