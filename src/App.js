import React from 'react';
import './App.css';
import styles from './App.module.css';
import {fetchData} from './api';

import {Cards, Chart, CountryPicker} from './components';

class App extends React.Component {

  state={
    data:{},
  }
  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({data : fetchedData});

  }
  render(){

    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;
