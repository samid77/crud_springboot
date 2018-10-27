import React, { Component } from 'react';
import {Container, Col, Button, Form, FormGroup, Alert, Label, Input } from 'reactstrap';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Container>
            <Alert color="success">
                <Form>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="text" name="username" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" name="password" placeholder="password placeholder" />
                    </FormGroup>
                    <Button color="primary" size="lg">Login</Button>
                </Form>
            </Alert>
        </Container>
      </div>
    )
  }
}
