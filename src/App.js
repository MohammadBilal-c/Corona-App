import React from 'react';
import { Cards, Chart, CountryPicker } from './Component/Index'
import style from './App.module.css'
import { fetchData } from './Api/index'

import coronaImage from './Image/image.png'


class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    if (fetchedData !== undefined)
      this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData, country: country })

  }

  render() {
    const { data, country } = this.state
    return (
      <div className={style.container}>
        <img className={style.image} src={coronaImage} alt='Covid-19' />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;
