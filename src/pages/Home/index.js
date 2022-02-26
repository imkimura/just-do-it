import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';

import api from '../../services/api';

const Home = () => {
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();
    // async function searchTrains() {
    //     const res = await api.get('/turmas/consultarPrograma?codigocliente=1179534');

    //     console.log(res.data.return);
    // }

    function handleSearchClient(e) {
        e.preventDefault();

        console.log(cpf);
        const codigo = '1179534';

        return navigate('/trainings', {
            state: {codigo}
        });
    }

    return (
        <div className="search">
            <form onSubmit={handleSearchClient}>
                <p>BUSCAR</p>
                <Input
                    type="text"
                    name="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="Digite seu CPF..."
                />
                <button type='submit'>BUSCAR</button>
            </form>
        </div>
    );
};

export default Home;