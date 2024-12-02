import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Outlet } from 'react-router-dom';
import teamMembers from '../models/TeamMember';
import CardMemberDetails from '../components/CardMemberDetails';

const Team = () => {
    const members = teamMembers;
  return (
    <>
        <Container>
            <h1 className='text-center'>Meet the Team</h1>
            <Container>
                <Row>
                    {members.map(m => 
                        (<Col xs={10} md={4} lg={4} key={m.id} style={{margin: '6px 0 6px auto'}}>
                            <CardMemberDetails member={m}/>
                        </Col>)
                    )}
                </Row>
            </Container>
        </Container>
        <Outlet />
    </>
  )
}

export default Team;