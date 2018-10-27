import React from 'react';
import { Alert, Breadcrumb, BreadcrumbItem, Container, Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Edit extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            mahasiswa: {}
        };
    }
    componentDidMount = () => {
        axios.get(`http://localhost:8080/mahasiswa/${this.props.match.params.id}`).then((response) => {
            this.setState({
                mahasiswa: response.data
            })
            console.log(this.state.mahasiswa);
        })
    }
    onChange = (e) => {
        const state = this.state.mahasiswa;
        state[e.target.name] = e.target.value;
        this.setState({
            mahasiswa: state
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const {nama, email, nim, alamat} = this.state.mahasiswa;

        axios.put(`http://localhost:8080/mahasiswa/${this.props.match.params.id}`, {nama, email, nim, alamat}).then((res) => {
            this.props.history.push(`/show/${this.props.match.params.id}`);
        })
    }
    render() {
        const {nama, email, alamat, nim} = this.state;
        return (
        <div>
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Edit Data Mahasiswa</BreadcrumbItem>
                </Breadcrumb>
                <Alert>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup row>
                            <Label sm={2}>Nama</Label>
                            <Col sm={10}>
                                <Input type="text" ref="nama" value={this.state.mahasiswa.nama} onChange={this.onChange} name="nama" placeholder="Nama Mahasiswa" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>NIM</Label>
                            <Col sm={10}>
                                <Input type="text" ref="nim" value={this.state.mahasiswa.nim} onChange={this.onChange} name="nim" placeholder="NIM Mahasiswa" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email"  ref="email" value={this.state.mahasiswa.email} onChange={this.onChange} name="email" placeholder="Email Mahasiswa" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Alamat</Label>
                            <Col sm={10}>
                                <Input type="textarea" value={this.state.mahasiswa.alamat} onChange={this.onChange} ref="alamat" name="alamat" />
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

