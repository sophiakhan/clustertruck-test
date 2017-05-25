import React from 'react'

class Weather extends Component {
    constructor(props) {
        super(props)

    }

    getWeather() {
        fetch('')
        .then(res => res.json())
    }

    render() {
        return <div></div>
    }
}
