import React, {
  Component,
} from 'react';
import axios from 'axios';
import uniq from 'lodash/fp/uniq';
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import ItemFilter from './ItemFilter';
import ItemList from './ItemList';
import './App.css';

class App extends Component {

  static getCompanyNames = flow(
    map('company'),
    uniq
  )

  constructor() {
    super();
    this.state = {
      films: [],
      selectedCompany: 'all',
    };
  }

  componentDidMount() {
    axios.get('/films.json')
      .then((response) => {
        const {data:films} = response;
        this.setState(() => ({films}));
      });
  }

  setSelectedCompany = (event) => {
    event.persist();
    this.setState(() => ({
      selectedCompany: event.target.value,
    }));
  }

  render() {
    const {
      films,
      selectedCompany,
    } = this.state;
    const companies = App.getCompanyNames(films);

    return (
      <div className="App">
        <div className="App-item">
          <ItemFilter
            filters={companies}
            selected={selectedCompany}
            handleOnChange={this.setSelectedCompany}
          />
        </div>
        <div className="App-item">
          <ItemList
            selected={selectedCompany}
            items={films}
          />
        </div>
      </div>
    );
  }

}

export default App;
