import React, { useState } from "react";
import 'bootswatch/dist/cosmo/bootstrap.css';
import { FaMoneyBillWave } from 'react-icons/fa'; 


function CadBeneficio() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Nome:", nome);
        console.log("Descrição:", descricao);
        console.log("Valor:", valor);
    };

    return (
        <div className="container mt-5">
            <h1><FaMoneyBillWave /> Cadastro de Benefício</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <input type="text" className="form-control" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="valor" className="form-label">Valor</label>
                    <input type="text" className="form-control" id="valor" value={valor} onChange={(e) => setValor(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadBeneficio;
