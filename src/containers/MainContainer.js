import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allTheStock: [],
    portfolio: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(data => this.setState({ allTheStock: data }))
  }

  addToPortfolio = (selectedStock) => {
    this.state.portfolio.includes(selectedStock) ? alert("you bought that one already, don't be greedy") :
      this.setState({
        portfolio: [...this.state.portfolio, selectedStock]
      })
  }

  removeFromPortfolio = (selectedStock) => {
    this.state.portfolio.includes(selectedStock) ? this.setState({
      allTheStock: [...this.state.allTheStock, selectedStock],
      portfolio: this.state.portfolio.filter(stock => stock.id !== selectedStock.id)
    }) : null
  }


  // if (this.state.portfolio.includes(stock)) {
  //   this.setState({
  //     stocks: [...this.state.stocks, stock]
  //     portfolio: this.state.portfolio.filter(s => s !== stock),
  //   })}

  render() {
    return (
      <div>
        <SearchBar />

        <div className="row">
          <div className="col-8">

            <StockContainer stocks={this.state.allTheStock} handleClick={this.addToPortfolio} />

          </div>
          <div className="col-4">

            <PortfolioContainer portfolio={this.state.portfolio} handleClick={this.removeFromPortfolio} />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
