import React, { useState, useEffect, FormEvent } from 'react';
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
  const [ repositories, setRepositories ] = useState<Repository[]>(() => {
   const storagedRepo = localStorage.getItem('github:repository');

    if(storagedRepo) {
      return JSON.parse(storagedRepo);
    }else {
      return [];
    }
  });
  const [ inputError, setInputError ] = useState('');

  useEffect(() => {
    /**
     * Salva o um repositório no localstorage toda
     * vez que a variável 'repositories'
     * é modificada
     */
    localStorage.setItem('github:repository', JSON.stringify(repositories))
  }, [repositories])

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {

    event.preventDefault(); //Desabilita o comportamento padrão do Form

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
