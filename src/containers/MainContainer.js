import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import API from '../utils/API'

class MainContainer extends Component {

  state = {
    allStocks: [],
    portfolioStocks: [],
    options: {
      filter: 'All',
      sort: 'Default'
    }
  }



  componentDidMount = () => {
    API.getStocks().then(stocks => this.setState({ allStocks: stocks }))
  }

  filterStocks = () => { }


  sortStocks = (stocks, sortType) => {
    sortType === "Default" ? stocks : stocks.sort((a, b) => {
      if (sortType === "Alphabetically") return a.name.localeCompare(b.name)

    })
  }

  changeFilterType = (filterType) => {
    this.setState({
      options: {
        ...this.state.options,
        filter: filterType
      }
    })
  }

  changeSortType = (sortType) => {
    this.setState({
      options: {
        ...this.state.options,
        sort: sortType
      }
    })
  }


  buyStock = (stock) => {
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock.id]
    })
  }

  removeStock = (stockIndex) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter((stockId, i) => i !== stockIndex)
    })
  }

  getPortfolioStocks = () => {
    return this.state.portfolioStocks.map(stkId =>
      this.state.allStocks.find(stock => stkId === stock.id))
  }


  render() {
    const portfolio = this.getPortfolioStocks()
    const sortedStocks = this.sortStocks(this.state.allStocks, this.state.options.sort
    )
    return (
      <div>
        <SearchBar
          sortTypes={["Default", "Alphabetically"]}
          currentSortType={this.state.options.sort}
          changeSortType={this.changeSortType}
        />
        <div className="row">
          <div className="col-8">
            <StockContainer
              allStocks={this.state.allStocks}
              buyStock={this.buyStock}
              sortedStocks={sortedStocks} />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={portfolio}
              removeStock={this.removeStock} />
          </div>
        </div>
      </div>
    );
  }
}
export default MainContainer;