import React from 'react';
import { Alert, Breadcrumb, BreadcrumbItem, Container, Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Create extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nama: '',
            nim: '',
            email: '',
            alamat: '',
        };
    }
    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    onSubmit = (e) => {
        e.preventDefault();
        const {nama, nim, email, alamat} = this.state;
        axios
            .post('/mahasiswa', {nama, nim, email, alamat})
            .then((result) => {
                this.props.history.push('/');
            })
    }
    render() {
        const {nama, email, alamat, nim} = this.state;
        return (
        <div>
          <Container>
              <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Tambah Data Mahasiswa</BreadcrumbItem>
            </Breadcrumb>
              <Alert>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup row>
                        <Label sm={2}>Nama</Label>
                        <Col sm={10}>
                            <Input type="text" ref="nama" value={nama} onChange={this.onChange} name="nama" placeholder="Nama Mahasiswa" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>NIM</Label>
                        <Col sm={10}>
                            <Input type="text" ref="nim" value={nim} onChange={this.onChange} name="nim" placeholder="NIM Mahasiswa" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email"  ref="email" value={email} onChange={this.onChange} name="email" placeholder="Email Mahasiswa" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Alamat</Label>
                        <Col sm={10}>
                            <Input type="textarea" value={alamat} onChange={this.onChange} ref="alamat" name="alamat" />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="success" size="lg">Submit Data</Button>
                        </Col>
                    </FormGroup>
                </Form>
              </Alert>
          </Container>
          </div>
        );
      }
}

