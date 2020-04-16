import React from "react";
import LanguageContext from "../../contexts/LanguageContext";
import ColorContext from "../../contexts/ColorContext";
import { Button } from "semantic-ui-react";

class SubmitButton extends React.Component {
  renderSubmit(value) {
    return value === "English" ? "Submit" : "Voorleggen";
  }

  renderColor(color) {
    return (
      <Button className={`${color}`}>
          <LanguageContext.Consumer>
            {value => this.renderSubmit(value)}
          </LanguageContext.Consumer>
        </Button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderColor(color)}
        
      </ColorContext.Consumer>
    );
  }
}

export default SubmitButton;
