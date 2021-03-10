import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './League.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Leagues = (props) => {
    const {strLeague, strSport, idLeague} = props.leagueInfo;
    const [banner, setBanner] = useState([]);
    
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id='+idLeague;
        fetch(url)
        .then(res => res.json())
        .then(data => setBanner(data.leagues[0]))
        .catch(error => console.log(error))
    }, [idLeague]);

    const {strBadge} = banner;
    return (
        <Card className="text-center shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={strBadge} className="w-50 mx-auto py-2"/>
            <Card.Body>
                <Card.Title>{strLeague}</Card.Title>
                <Card.Text>{strSport}</Card.Text>
                <Link to={"/league/"+idLeague}><Button variant="primary">EXPLORE <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
            </Card.Body>
        </Card>
    );
};

export default Leagues;