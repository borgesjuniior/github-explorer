import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { Header, RepositoryInfo, Issues } from './styles';
import githubLogo from '../../assets/githubLogo.svg';
import logo from '../../assets/logo.jpg';


interface RepositoryParams {
  repo: string;

}

const Repository: React.FC = () => {
  //const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>

    <Header>
      <img src={githubLogo} alt="Github explorer"/>
      <Link to="/">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>
    <RepositoryInfo>
      <header>
        <img src={logo} alt="logo"/>
        <div>
          <strong>borgesjuniior/github-explorer</strong>
          <p>Descrição</p>
        </div>
      </header>
        <ul>
          <li>
            <strong>1234</strong>
            <span>Starts</span>
          </li>

          <li>
            <strong>34</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>44</strong>
            <span>Issues abertas</span>
          </li>
      </ul>
    </RepositoryInfo>

    <Issues>
    <Link to="adfa">
      <div>
        <strong>repository.full_name</strong>
        <p>repository.description</p>
      </div>
      <FiChevronRight size={20} />
    </Link>

    </Issues>

    </>
  )
}

export default Repository;
