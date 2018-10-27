import React from 'react';
import {Container, Breadcrumb, BreadcrumbItem, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Show extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mahasiswa: {}
        }
    }
    componentDidMount(){
        axios.get(`/mahasiswa/${this.props.match.params.id}`).then((response) => {
            this.setState({mahasiswa: response.data});
            console.log(this.state.mahasiswa);
        })
    }
    render(){
        return(
            <div>
                <Container>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Detail Data Mahasiswa</BreadcrumbItem>
                    </Breadcrumb>
                    <Row>
                        <Col sm="10">
                            <Card body>
                            <CardTitle>{this.state.mahasiswa.nama}</CardTitle>
                                <dl>
                                    <dt>Email:</dt>
                                    <dd>{this.state.mahasiswa.email}</dd>
                                    <dt>NIM:</dt>
                                    <dd>{this.state.mahasiswa.nim}</dd>
                                    <dt>Alamat:</dt>
                                    <dd>{this.state.mahasiswa.alamat}</dd>
                                </dl>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}