import styled, { css } from 'styled-components';

interface hasError {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 45px;
  color: #3A3A3A;
  max-width: 450px;
  line-height: 56px;

  margin-top: 4%;
`;

export const Form = styled.form<hasError>` //passando a propriedade para dentro do componete estilizado
margin-top: 40px;
max-width: 700px;

display: flex;

input {
  flex: 1;
  height: 40px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  border: 1px solid #fff;
  border-right: 0;

  ${(props) => props.hasError && css ` //Se for true será mostrado um css adicional
    border-color: #cc0000;
  `};

  &::placeholder {
    color: #a8a8b3;
  }
}

button {
  width: 210px;
  height: 40px;
  background: #04d361;
  border-radius: 0px 5px 5px 0px;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background: #04d340;
  }
}

`;

export const Repositories = styled.div`
  margin-top: 4%;
  max-width: 700px;

    a {
      background: #fff;
      border-radius: 5px;
      width: 100%;
      padding: 2%;
      text-decoration: none;

      display: flex;
      align-items: center;
      transition: transform 0.3s;

      &:hover {
        transform: translateX(10px);
      }

      & + a {
        margin-top: 1%;
      }

      img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }

      div {
        margin: 0 16px;
        flex: 1; //Ajustar ao tamanho do espaço disponível

        strong {
          font-size: 1rem;
          color: #3d3d4d;
        }
        p {
          font-size: 1rem;
          color: #a8a8b3;
          margin-top: 4px;
        }
      }
      svg {
          margin-left: auto;
        }

    }

`;


export const Error = styled.span`
  display: block;
  color: #cc0000;
  margin-top: 1%;
`;
