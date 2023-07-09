import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './languageSwitcher.scss';
import isrFlag from "../../assests/images/isr.png";
import usaFlag from "../../assests/images/usa.png";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [isCollapsed, setIsCollapsed] = useState(true);

  const changeLanguage = (lng: string, dir: 'ltr' | 'rtl') => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    setIsCollapsed(true);
    document.documentElement.setAttribute('dir', dir);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="language-switcher">
      <button className="btn-lng-select" onClick={toggleCollapse}>
        {selectedLanguage === 'en' ? (
          <img className="flagImg" src={usaFlag} alt="usa flag" />
        ) : (
          <img className="flagImg" src={isrFlag} alt="israel flag" />
        )}
      </button>
      {!isCollapsed && (
        <div className="btn-holder">
          <button
            className="language-button"
            onClick={() => changeLanguage('en', 'ltr')}
          >
            <img className="flagImg" src={usaFlag} alt="usa flag" />
          </button>
          <button
            className="language-button"
            onClick={() => changeLanguage('he', 'rtl')}
          >
            <img className="flagImg" src={isrFlag} alt="israel flag" />
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
