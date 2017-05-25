import React from 'react'

class KitchenAPI extends React.Component {
    constructor(props) {
        super(props)
        this.getAPI = this.getAPI.bind(this)

        this.state = {
            kitchens: [],
            location: {}
        }

    }

    componentDidMount() {
        this.getAPI()
    }

    getAPI() {
        fetch('https://api.staging.clustertruck.com/api/kitchens')
            .then(res => res.json())
            .then(res => console.log(res))
           // .then(res => this.setState({location: res.location}))
    }


    render() {
        return <div>
            <p>{this.state.lat}</p>
        </div>
    }
}

export default KitchenAPI;