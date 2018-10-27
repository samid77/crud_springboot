import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Navigasibar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: '#2898c1', marginBottom: '20px'}} light expand="md">
          <NavbarBrand style={{color:'#fff'}} >
            CRUD Mahasiswa
          </NavbarBrand>
          <NavLink style={{color:'#fff'}}>
            <Link style={{color: '#fff', marginLeft: '20', textDecoration: 'none'}} to="/create">Tambah Data</Link>
          </NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{color:'#fff'}}>
                  <Link style={{color: '#fff', marginLeft: '20', textDecoration: 'none'}} to="/logout">Logout</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}