import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import './Body.css';

const Body = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
        .catch(error => console.log(error))
    }, []);


    const leagueSliced = leagues.slice(0, 9);
    return (
        <div className="container leagues-container d-flex flex-wrap">
            {
                leagueSliced.map(league => <Leagues key={league.idLeague} leagueInfo={league}></Leagues>)
            }
        </div>
    );
};

export default Body;