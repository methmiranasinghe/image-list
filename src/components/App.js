import React from "react";
import SearchInput from "./SearchInput";
import axios from 'axios';
class App extends React.Component{

constructor(props){
    super(props)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
}

onSearchSubmit(entry){
    console.log(entry)
    axios.get(`https://pixabay.com/api/?key=25220241-f47caf410736e32808efdaf70&q=${entry}&image_type=photo&pretty=true`)
}



render(){
    
    return(
        <div className="ui container" style={{marginTop:'30px'}}>
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            </div>
    )
}
}

export default App;