import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Leagues from '../Leagues/Leagues';
import './Body.css';

const Body = () => {
    const [leagues, setLeagues] = useState([]);
    const [headerLogo, setHeaderLogo] = useState("");
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
        .catch(error => console.log(error))
    }, []);

    const handleClick = (logoUrl) => {
        console.log(logoUrl);
        setHeaderLogo(logoUrl);
    }


    const leagueSliced = leagues.slice(0, 15);
    return (
        <div>
            <Header showLogo={false} logo={headerLogo}></Header>
            <div className="container leagues-container d-flex flex-wrap">
            {
                leagueSliced.map(league => <Leagues handleClick={handleClick} key={league.idLeague} leagueInfo={league}></Leagues>)
            }
        </div>
        </div>
        
    );
};

export default Body;