import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Link = styled(NavLink)`
  font-family: 'Kablammo', cursive;
  font-weight: 600;
  font-size: 24px;
  line-height: calc(16 / 24);
  text-decoration: none;
  background-color: black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:not(:last-child) {
    margin-right: 100px;
  }
  &:hover {
    background-color: #4158d0;

  }
`;