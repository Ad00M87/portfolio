import React from 'react';
import {
  Form,
  Header,
  Button,
  Divider,
  Container,
} from 'semantic-ui-react';

const options = [
  { key: 'p', text: 'Phone', value: 'Phone Number' },
  { key: 'e', text: 'Email', value: 'Email' },
]

class Contact extends React.Component {

  state = {
    contact: "Please choose a contact method",
    name: '',
    comments: '',
    contactValue: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const { name, contact, comments, contactValue } = this.state;
  }

  handleChange = (e) => {
    let { value, name } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return(
      <Container>
        <Divider hidden />
        <Header as="h1">Get in contact with me</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={this.handleChange}
            />
            <Form.Select
              label="Preferred contact method"
              options={options}
              onChange={(e, d) => this.setState({ contact: d.value})}
            />
            <Form.Input
              value={this.state.contactValue}
              label={this.state.contact}
              name="contactValue"
              placeholder={this.state.contact}
              disabled={this.state.contact === "Please choose a contact method"}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea
            label="Questions, Comments, Message, Other..."
            name="comments"
            value={this.state.comments}
            placeholder="Questions, Comments, Message, Other..."
            onChange={this.handleChange}
          />
          <Button color="teal" type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default Contact;
