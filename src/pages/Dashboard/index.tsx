import React from 'react';
import { Title, Form, Repositories } from './styles';

import githubLogo from '../../assets/githubLogo.svg'

const Dashboard: React.FC = () => {
  return (
  <>
    <img src={githubLogo} alt="Logo"/>
    <Title>Explore repositórios no Github</Title>

    <Form action="">
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="#teste">
        <img src="https://avatars.githubusercontent.com/u/26493851?s=460&u=174b576da4ee07b5efa42c5ac3ccbd8a8a861efb&v=4"
         alt="Austin Mahone"/>
        <div>
          <strong>Júnior</strong>
          <p>Hello World!</p>
        </div>
      </a>
    </Repositories>
    </>
  )
}

export default Dashboard;
