import React, { useState } from "react";
import { useEffect } from "react";
import { mensagemErro } from "../../Configuration/mensagem";
import { mensagemSucesso } from "../../Configuration/mensagem";
import CargoService from "../../Service/cargoService";
import 'bootswatch/dist/cosmo/bootstrap.css';
import { FaBriefcase } from 'react-icons/fa'; 



function validar(cargo){
    let ret = true;
    if(!cargo.nome){
        ret = false;
        mensagemErro("Preencha o campo nome!");
    }
    return ret;
}



function CadCargo(){
    const cargoService = new CargoService();

    const [cargo, setCargo] = useState({
        id: 0,
        nome: ''
    })

    const salvar= ()=>{
        const ret = validar(cargo)
        if(ret){

        }

    }
    return (
        <div className="container mt-5">
            <h1><FaBriefcase /> Cadastro de Cargo</h1>
            <hr/>
            <div className="mb-3">
                <label htmlFor="id" className="form-label">Código</label>
                <input  readOnly value={cargo.id} 
                onChange={e=>{setCargo(
                                    {...cargo, id:e.target.value}
                                    )}} type="text"
                     className="form-control" id="id" />
            </div>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input value={cargo.nome} onChange={e=>{setCargo({...cargo, nome:e.target.value})}} type="text" className="form-control" id="nome" />
                </div>
                <button type="button" onClick={salvar} className="btn btn-primary">Cadastrar</button>
                
           
        </div>
    );
}

export default CadCargo;





