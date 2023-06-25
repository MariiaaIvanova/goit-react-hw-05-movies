import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 25px;
  gap: 24px;
`;

export const List = styled.ul`
  display: inline-flex;
  gap: 12px;
  list-style: none;
  
  margin: 0;
 
  padding: 0;
  list-style-type: none;
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
   
  margin: 0;
  padding: 0;
  list-style-type: none;
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
`;