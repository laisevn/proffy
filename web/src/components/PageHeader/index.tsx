import React, { Children } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import backIcon from '../../assets/icons/back.svg';

import './styles.css';

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({title,children}) => (
  <header className="page-header">
    <div className="top-bar-cointainer">
      <Link to="/">
        <img src={backIcon} alt="Voltar"/>
      </Link>
      <img src={logoImg} alt="Proffy" />
    </div>

    <div className="header-content">
      <strong>{title}</strong>
      {children}
    </div>
  </header>
);

interface PageHeaderProps {
  title: string;
}

export default PageHeader;