import React from 'react';
import Card from 'react-bootstrap/Card';

const CardMemberDetails = ({member}) => {
  return (
    <Card className="shadow-lg text-white">
        <Card.Img src={'../../public/team/'+member.image} style={{height: '300px', objectFit: 'cover'}} alt="Card image" />
        <a href={"/team/"+member.id} style={{color: 'white'}}>
        <Card.ImgOverlay style={{backgroundColor: 'rgba(52, 52, 52, 0.5)', height: '130px', marginTop: 'auto'}}>
            <Card.Title>{member.name}</Card.Title>
            <Card.Text>{member.role}</Card.Text>
            <Card.Text>{member.email}</Card.Text>
        </Card.ImgOverlay>
        </a>
    </Card>
  )
}

export default CardMemberDetails;