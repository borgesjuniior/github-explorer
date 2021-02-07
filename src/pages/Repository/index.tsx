import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import api from '../../services/api';

import { Header, RepositoryInfo, Issues } from './styles';
import githubLogo from '../../assets/githubLogo.svg';

interface RepositoryParams {
  repo: string;

};
interface RepositoryType {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string
  }
}

interface Issue {
  id: string;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

  const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<RepositoryType>();
  const [ issues, setIssues ] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repo}`).then( response => {
      setRepository(response.data);
    });
  }, [params.repo]);

  useEffect(() => {
    api.get(`repos/${params.repo}/issues`).then( response => {
      setIssues(response.data);
    });
  }, [params.repo]);

  return (
    <>

    <Header>
      <img src={githubLogo} alt="Github explorer"/>
      <Link to="/">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>
    { repository && (
          <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt="logo"/>
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
            <ul>
              <li>
                <strong>{repository.stargazers_count}</strong>
                <span>Starts</span>
              </li>

              <li>
                <strong>{repository.forks_count}</strong>
                <span>Forks</span>
              </li>

              <li>
                <strong>{repository.open_issues_count}</strong>
                <span>Issues abertas</span>
              </li>
          </ul>
        </RepositoryInfo>
    )}

    <Issues>
      {issues.map(issue => (
            <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
      ))}
    </Issues>

    </>
  )
}

export default Repository;
