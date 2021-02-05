import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './styles';
import api from '../../services/api';

import githubLogo from '../../assets/githubLogo.svg'

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {
  const [ newRepo, setNewRepo] = useState('');
  const [ repositories, setRepositories ] = useState<Repository[]>([]);
  const [ inputError, setInputError ] = useState('');

  async function handleAddRepository(): Promise<void> {
    if(!inputError) {
      setInputError('Digite o autor/nome do repositório!');
      setNewRepo('');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('')

    } catch (error) {
      setNewRepo('');
      setInputError('Repositório não encontrado!')
    }
  }

  return (
  <>
    <img src={githubLogo} alt="Logo"/>
    <Title>Explore repositórios no Github</Title>

    <Form  hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
      <input
        placeholder="Digite o nome do repositório"
        value={newRepo}
        onChange={value => setNewRepo(value.target.value)}
       />
      <button type="submit">Pesquisar</button>
    </Form>

    {inputError && <Error>{inputError}</Error>}

    <Repositories>
      {repositories.map(repository => (
        <a key={repository.full_name} href="#teste">
          <img src={repository.owner.avatar_url}
             alt={repository.owner.login} />
          <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      ))}
    </Repositories>
    </>
  )
}

export default Dashboard;
