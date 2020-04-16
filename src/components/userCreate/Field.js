import React from "react";
import LanguageContext from '../../contexts/LanguageContext'
import { Form } from 'semantic-ui-react'

class Field extends React.Component {
  static contextType = LanguageContext
  render() {
    const text = this.context === 'English' ? 'Name' : 'Naam'
    return (
      <Form.Field>
        <label>{text}</label>
        <input placeholder={text} />
      </Form.Field>
    );
  }
}

export default Field;
