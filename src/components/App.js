import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import UserCreate from "./userCreate/UserCreate";
import { Flag, Container } from "semantic-ui-react";

class App extends React.Component {
  state = {
    language: "English",
    color: 'secondary'
  };

  changeLanguage = (language, color) => {
    this.setState({ language, color });
  };
  render() {
    return (
      <>
        <Container>
          <div>
            Select Language :
            <Flag name="us" onClick={() => this.changeLanguage("English", 'secondary')} />
            <Flag name="nl" onClick={() => this.changeLanguage("Dutch", 'primary')} />
          </div>

          <ColorContext.Provider value={this.state.color}>
            <LanguageContext.Provider value={this.state.language}>
              <UserCreate />
            </LanguageContext.Provider>
          </ColorContext.Provider>
        </Container>
      </>
    );
  }
}

export default App;
