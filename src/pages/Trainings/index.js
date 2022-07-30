import moment from 'moment';
import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';

import './style.css';

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
            <h1>Seus treinos</h1>
            {trainings.map((training, i) => {
                return (
                <div className='card-training' key={training.codigo+i}>
                    <p style={{fontWeight: 'bold'}} >
                    <i class="fas fa-dumbbell"></i> {training.nome}
                    </p>
                    <p>Codigo: {training.codigo}</p>
                    <p>Última Execução: {moment(training.ultimaexecucao).format('DD/MM/YYYY HH:mm')}</p>
                    <Link
                        to={{
                            pathname: '/workout',
                        }}
                        state= {{
                            codigo: training
                        }}
                    >IR PARA TREINO <i class="fas fa-long-arrow-alt-right"></i></Link>
                </div>
                )
            })}
        </div>
    );
}

export default Trainings;