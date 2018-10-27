import React, {Component} from 'react';
import { Table, Button, Col } from 'reactstrap';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

export default class TableMahasiswa extends React.Component {
    state = {
        datamahasiswa: [],
    }
    componentDidMount(){
        axios.get('http://localhost:8080/mahasiswa/').then((getData) => {
                var datamhs = getData.data;
                this.setState({
                    datamahasiswa: datamhs
                })
        })
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.controller === 'oke'){
            this.setState({
                datamahasiswa: nextProps.searchresult
            })
        }
    }
    deleteData = (id) => {
        axios.delete(`http://localhost:8080/mahasiswa/${id}`).then((result) => {
            axios.get('http://localhost:8080/mahasiswa/').then((getData) => {
                var datamhs = getData.data;
                this.setState({
                    datamahasiswa: datamhs
                })
        })
        })
    }
    render() {
        const dataMahasiswa = this.state.datamahasiswa.map((isi, index) => {
            var indeX = index + 1;
            var id = isi.id;
            var nama = isi.nama;
            var email = isi.email;
            var nim = isi.nim;

            return <tr>
                <th scope="row">{indeX}</th>
                <td>{nim}</td>
                <td>{nama}</td>
                <td>{email}</td>
                <td>
                    <Button color="warning">
                        <Link to={`/edit/${id}`} style={{color: '#fff', textDecoration: 'none'}}>Edit</Link>
                    </Button>{' '}
                    <Button color="danger" onClick={this.deleteData.bind(this, id)}>Delete</Button>{' '}
                    <Button color="primary">
                        <Link to={`/show/${id}`} style={{color: '#fff', textDecoration: 'none'}}>Detail</Link>
                    </Button>{' '}
                </td>
            </tr>
        })

        return (
        <div>
          <Col sm="12">
            <Table striped>
                <thead style={{backgroundColor: '#6ebbe5'}}>
                <tr>
                    <th>No.</th>
                    <th>NIM</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {dataMahasiswa}
                </tbody>
            </Table>
        </Col>
        </div>
        );
      }
}
