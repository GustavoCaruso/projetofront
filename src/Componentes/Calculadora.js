import { useState } from "react";

function Calculadora() {

    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const Somar = () => {
       setResultado(numero1 + numero2);
    }

    const Subtrair = () => {
       setResultado(numero1 - numero2);
    }

    const Multiplicar = () => {
       setResultado(numero1 * numero2);   
    }

    const Dividir = () => {
       setResultado(numero1 / numero2);
    }

    return(
        <div>
            <h1>Calculadora</h1>
            <label>Número 1</label>
            <input type="number" 
                onChange={e => {setNumero1(parseInt(e.target.value))}}
                value={numero1}
            />
            <br/>
            <label>Número 2</label>
            <input type="number" 
                onChange={e => {setNumero2(parseInt(e.target.value))}}
                value={numero2}
            />
            <br/>
            <button onClick={Somar}>Somar</button>
            <button onClick={Subtrair}>Subtrair</button>
            <button onClick={Multiplicar}>Multiplicar</button>
            <button onClick={Dividir}>Dividir</button>
            <h2>Resultado: {resultado}</h2>
        </div>
    )
}

export default Calculadora;