/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LeagueDetail.css';
import fbIcon from '../../images/Icon/Facebook.png'
import ytIcon from '../../images/Icon/YouTube.png'
import twtIcon from '../../images/Icon/Twitter.png'
import { faFlag, faFutbol, faMarker, faMars } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import femaleBannerImg from '../../images/Photo/female.png';

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
    
    const {strLeague, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strLogo, strFacebook, strYoutube, strTwitter, strFanart2} = leagueDetail;
    const femaleBanner = <img src={femaleBannerImg} className="rounded thumb-img w-100 shadow" alt=""/>;
    const maleBanner = <img src={ strFanart2} className="rounded thumb-img w-100 shadow" alt="..." />;



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
                        {
                            strGender !== "Male" ? femaleBanner : maleBanner
                        }
                    </div>
                </div>
            </div>
            <div className="row py-4">
                {strDescriptionEN}
            </div>
            <div className="row mx-auto py-4 w-50">
                <div className="col">
                    <a href={strFacebook}>
                        <img className="w-75" src={fbIcon} alt=""/>
                    </a>
                    
                </div>
                <div className="col">
                    <a href={strYoutube}>
                        <img className="w-75" src={ytIcon} alt=""/>
                    </a>
                </div>
                <div className="col">
                    <a href={strTwitter}>
                        <img className="w-75" src={twtIcon} alt=""/>
                    </a>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default LeagueDetail;