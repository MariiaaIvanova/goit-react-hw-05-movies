import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: calc(16 / 24);
  margin-bottom: 25px;
`;

export const ListInfo = styled.ul`
  margin-bottom: 25px;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
  color: black;
  margin: 20px;
  &:hover {
    color: #4158d0;
  }
`;

export const Button = styled.button`
  padding: 5px 5px;
  font: inherit;
  cursor: pointer;
  border-radius: 7px;
  border: 3px solid #191d1e;
  color: #191d1e;
  font-weight: 600;
  font-size: 15px;
  &:hover {
    color: #4158d0;
    border: 3px solid #4158d0;
  }
   margin-bottom: 25px;
`;