import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import leagueThumb from '../../images/Photo/league-detail-thumb.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LeagueDetail.css';
import fbIcon from '../../images/Icon/Facebook.png'
import ytIcon from '../../images/Icon/YouTube.png'
import twtIcon from '../../images/Icon/Twitter.png'
import { faFlag, faFutbol, faMarker, faMars } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';

const LeagueDetail = () => {
    const { leagueId } = useParams();
    const [ leagueDetail, setLeagueDetail] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id='+leagueId;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagueDetail(data.leagues[0]))
        .catch(error => console.log(error))
    }, [leagueId]);

    if( leagueDetail.length === 0){
        <h1>Data is loading....</h1>
    }
    
    const {strLeague, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strLogo} = leagueDetail;
    return (
        <div>
            <Header showLogo={true} logo={strLogo}></Header>
            <div className="container overflow-hidden w-50">
            <div className="row league-detail-gutter d-flex align-items-center shadow">
                <div className="col">
                    <div className="p-3">
                        <h4>{strLeague}</h4>
                        <p><FontAwesomeIcon icon={faMarker} /> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3">
                        <img src={ leagueThumb } className="rounded thumb-img w-100 shadow" alt="..." /> 
                    </div>
                </div>
            </div>
            <div className="row py-4">
                {strDescriptionEN}
            </div>
            <div className="row mx-auto py-4 w-50">
                <div className="col"><img className="w-75" src={fbIcon} alt=""/></div>
                <div className="col"><img className="w-75" src={ytIcon} alt=""/></div>
                <div className="col"><img className="w-75" src={twtIcon} alt=""/></div>
            </div>
        </div>
        </div>
        
    );
};

export default LeagueDetail;