import React from 'react';
import { useParams } from 'react-router-dom';
import teamMembers from '../models/TeamMember.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const TeamDetails = () => {
    const {id} = useParams();
    const members = teamMembers;
    const member = teamMembers.filter(m => m.id==id)[0];
    // console.log(member);
    
  return (
    <div>
        <Row>
            <Col xs={12} md={6} lg={6}>
                <div style={{backgroundColor: '#58a75f', height: '90vh', width: '100%', overflowX: 'none'}} className='d-flex justify-content-center align-items-center'>
                    <Image className='shadow-lg' src={'../../public/team/'+member.image} style={{height: '200px'}} rounded/>
                </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
                <div style={{height: '90vh', width: '100%'}} className='d-flex flex-column justify-content-center align-items-center'>
                    <div>
                        <h1>Hi! My Name is</h1>
                        <h2>{member.name}.</h2>
                        <p>{member.role}</p>
                        <p>Contact me through my email {member.email}</p>
                        <div className="d-flex justify-content-between">
                            <hr />
                            <p>or</p>
                            <hr />
                        </div>
                        <div className="d-flex justify-content-evenly">
                            <FaFacebook />
                            <FaInstagramSquare />
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default TeamDetails;