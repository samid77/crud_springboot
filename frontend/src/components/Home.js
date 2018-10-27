import React from 'react';
import { 
    Collapse,
    Container, 
    Row, 
    Col, 
    Jumbotron, 
    Button,
    ButtonDropdown,
    Alert,
    Table, 
    Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import TableMahasiswa from './TableMahasiswa';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Navigasibar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { 
            collapse: false,
            searchResult: [],
            datamahasiswa: [],
            controller: '',
        };
    }
    toggle() {
        this.setState({ 
            collapse: !this.state.collapse 
        });
    }
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    onSubmit = (e) => {
        e.preventDefault();
        const {nama} = this.state;
        axios.get(`http://localhost:8080/mahasiswa/search/?search=${this.state.nama}`).then((result) => {
            this.setState({
                searchResult: result.data,
                controller: 'oke'
            })
        })
    }
    render(){
        const {nama, email} = this.state;
        return(
            <div>
            <Container style={{marginTop: '20'}}>
                <Col md={12}>
                    <Alert color="primary" onClick={this.toggle} caret>Search Data</Alert>
                    <Collapse isOpen={this.state.collapse}>
                        <Row>
                            <Col>
                                <Alert color="primary">
                                    <Form onSubmit={this.onSubmit}>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Nama Mahasiswa</Label>
                                                    <Input type="text" onChange={this.onChange} name="nama" value={nama} placeholder="Cari berdasarkan nama mahasiswa" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Email Mahasiswa</Label>
                                                    <Input type="text" name="email" onChange={this.onChange} value={email} placeholder="Cari berdasarkan email mahasiswa" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button type="submit" color="primary" size="lg" block caret>Cari</Button>
                                    </Form>
                                </Alert>
                            </Col>
                        </Row>
                    </Collapse>
                    <Row>
                        <TableMahasiswa searchresult={this.state.searchResult} controller={this.state.controller} />
                    </Row>
                </Col>
            </Container>
            </div>
        );
    }
}