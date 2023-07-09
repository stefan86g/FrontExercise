import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import  LanguageSwitcher  from '../LanguageSwitcher/languageSwitcher.tsx';
import './navbar.scss';

const NavBar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{t('menu.home')}</Link>
        </li>
        <li>
          <Link to="/blog">{t('menu.blog')}</Link>
        </li>
      </ul>
      <div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default NavBar;
