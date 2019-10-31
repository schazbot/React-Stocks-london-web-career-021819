const API_ENDPOINT = "http://localhost:3000"
const STOCKS_URL = `${API_ENDPOINT}/stocks`

const getStocks = () => fetch(STOCKS_URL).then(resp => resp.json())

const API = {
    getStocks
}

export default API