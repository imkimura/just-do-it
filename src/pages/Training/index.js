import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import Checkbox from '../../components/Checkbox';

const Training = () => {
    const location = useLocation();
    const [isDisable, setIsDisable] = useState(true);
    const {codigo} = location.state || '';

    const [tasks, setTasks] = useState(
        new Array(5).fill(false)
    );

    const training = [
        {
            "nome": "E1 - ESTEIRA",
            "nomeatf": "ESTEIRA N° 33",
            "ordem": 0,
            "codigo": 25096719,
            "setid": null,
            "metodoexecucao": null,
            "observacao": null,
            "pula": false,
            "series": [
                [
                    {
                        "complemento": "",
                        "descanso": 0,
                        "distancia": 0,
                        "duracao": 900,
                        "repeticao": 0,
                        "carga": 0,
                        "velocidade": 0,
                        "series": 1
                    }
                ]
            ]
        },
        {
            "nome": "AGACHAMENTO LIVRE",
            "nomeatf": null,
            "ordem": 1,
            "codigo": 25096720,
            "setid": null,
            "metodoexecucao": null,
            "observacao": null,
            "pula": false,
            "series": [
                [
                    {
                        "complemento": "",
                        "descanso": 30,
                        "distancia": 0,
                        "duracao": 0,
                        "repeticao": 15,
                        "carga": 0,
                        "velocidade": 0,
                        "series": 3
                    }
                ]
            ]
        },
        {
            "nome": "SUPINO VERTICAL N° 02",
            "nomeatf": null,
            "ordem": 2,
            "codigo": 25096721,
            "setid": null,
            "metodoexecucao": null,
            "observacao": null,
            "pula": false,
            "series": [
                [
                    {
                        "complemento": "",
                        "descanso": 30,
                        "distancia": 0,
                        "duracao": 0,
                        "repeticao": 15,
                        "carga": 0,
                        "velocidade": 0,
                        "series": 3
                    }
                ]
            ]
        },
        {
            "nome": "CADEIRA EXTENSORA N° 07",
            "nomeatf": null,
            "ordem": 3,
            "codigo": 25096722,
            "setid": null,
            "metodoexecucao": null,
            "observacao": null,
            "pula": false,
            "series": [
                [
                    {
                        "complemento": "",
                        "descanso": 30,
                        "distancia": 0,
                        "duracao": 0,
                        "repeticao": 15,
                        "carga": 0,
                        "velocidade": 0,
                        "series": 3
                    }
                ]
            ]
        },
        {
            "nome": "TRÍCEPS TESTA SIMULT. H",
            "nomeatf": null,
            "ordem": 4,
            "codigo": 25096723,
            "setid": null,
            "metodoexecucao": null,
            "observacao": null,
            "pula": false,
            "series": [
                [
                    {
                        "complemento": "",
                        "descanso": 30,
                        "distancia": 0,
                        "duracao": 0,
                        "repeticao": 15,
                        "carga": 0,
                        "velocidade": 0,
                        "series": 3
                    }
                ]
            ]
        }
    ];

    const handleWithCheckTask = (checkedTask) => {
        const updatedTasks = tasks.map((value, task) =>
            task !== checkedTask ? value : !value
        );

        setTasks(updatedTasks);
    };

    const handleWithTasksDone = (e) => {
        e.preventDefault();

        console.log('oi');
    };

    useEffect(() => {
        const value = tasks.every(task => task);

        setIsDisable(!value);
    }, [tasks]);

    return (
        <div>
            <form onSubmit={handleWithTasksDone}>
                <p>{codigo.codigo}</p>
                {training.map((activie, index) => {
                    return (
                        <div key={activie.ordem}>
                            <Checkbox
                                label={activie.nome}
                                name="tasks"
                                value={tasks[index]}
                                onChange={() => handleWithCheckTask(index)}
                            />
                        </div>
                    )
                })}
                <button type='submit' disabled={isDisable}>
                    Concluir
                </button>
            </form>
        </div>
    );
}

export default Training;