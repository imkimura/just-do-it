import moment from 'moment';
import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';

const Trainings = () => {
    const location = useLocation();
    const {codigo} = location.state || '';
    const [trainings, setTrainings] = useState(
        [
            {
                "codigo": 2923695,
                "ativo": true,
                "mensagemaluno": "Qualquer dúvida acione o botão chama professor de qualquer aparelho. Bom Treino!!!",
                "nome": "GRF ADAPTAÇÃO FEMININO EMAGRECIMENTO C",
                "ultimaexecucao": "2022-02-24T01:59:26.000Z",
                "usarcomopredefinida": false,
                "versao": null,
                "categoria_codigo": 213,
                "codigo_old": null,
                "categoria_codigo_old": null,
                "empresa_origem": null,
                "empresa_codigo": null,
                "usarcomopredefinida_old": null,
                "empresazw": null,
                "dataultimaexecucao": "2022-02-24T01:59:26.000Z",
                "tipoexecucao": "Alternado"
            },
            {
                "codigo": 2923694,
                "ativo": true,
                "mensagemaluno": "Qualquer dúvida acione o botão chama professor de qualquer aparelho. Bom Treino!!!",
                "nome": "GRF ADAPTAÇÃO FEMININO EMAGRECIMENTO B",
                "ultimaexecucao": "2022-02-24T02:05:02.000Z",
                "usarcomopredefinida": false,
                "versao": null,
                "categoria_codigo": 213,
                "codigo_old": null,
                "categoria_codigo_old": null,
                "empresa_origem": null,
                "empresa_codigo": null,
                "usarcomopredefinida_old": null,
                "empresazw": null,
                "dataultimaexecucao": "2022-02-24T02:05:02.000Z",
                "tipoexecucao": "Alternado"
            },
            {
                "codigo": 2923693,
                "ativo": true,
                "mensagemaluno": "Qualquer dúvida acione o botão chama professor de qualquer aparelho. Bom Treino!!!",
                "nome": "GRF ADAPTAÇÃO FEMININO EMAGRECIMENTO A",
                "ultimaexecucao": "2022-02-24T02:11:06.000Z",
                "usarcomopredefinida": false,
                "versao": null,
                "categoria_codigo": 216,
                "codigo_old": null,
                "categoria_codigo_old": null,
                "empresa_origem": null,
                "empresa_codigo": null,
                "usarcomopredefinida_old": null,
                "empresazw": null,
                "dataultimaexecucao": "2022-02-24T02:11:06.000Z",
                "tipoexecucao": "Alternado"
            },
            {
                "codigo": 2923696,
                "ativo": true,
                "mensagemaluno": "Qualquer dúvida acione o botão chama professor de qualquer aparelho. Bom Treino!!!",
                "nome": "GRF ADAPTAÇÃO CARDIO FEMININO",
                "ultimaexecucao": "2022-02-25T21:27:02.000Z",
                "usarcomopredefinida": false,
                "versao": null,
                "categoria_codigo": 213,
                "codigo_old": null,
                "categoria_codigo_old": null,
                "empresa_origem": null,
                "empresa_codigo": null,
                "usarcomopredefinida_old": null,
                "empresazw": null,
                "dataultimaexecucao": "2022-02-25T21:27:02.000Z",
                "tipoexecucao": "Alternado"
            }
        ]
    );

    return (
        <div>
            {trainings.map((training) => {
                return (
                <div>
                    <p>{training.nome}</p>
                    <p>Codigo: {training.codigo}</p>
                    <p>Última Execução: {moment(training.ultimaexecucao).format('DD/MM/YYYY HH:mm')}</p>
                    <a>IR PARA TREINO -> </a>
                </div>
                )
            })}
        </div>
    );
}

export default Trainings;