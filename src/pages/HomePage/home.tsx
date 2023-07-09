import React from "react";
import "./home.scss";
import { useTranslation } from 'react-i18next';


  const Home: React.FC= () => {
    const { t } = useTranslation();
    return (
      <div className="home-page">
      <h1>{t('homePage.welcome')}</h1>
    </div>
    );
  };
    
    export default Home;