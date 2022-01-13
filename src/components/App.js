import React from "react";
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";
import axios from 'axios';
class App extends React.Component{

constructor(props){
    super(props)

    this.state ={images :[]}
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
}

async onSearchSubmit(entry){
    // console.log(entry)
   const response= await axios.get(`https://pixabay.com/api/?key=25220241-f47caf410736e32808efdaf70&q=${entry}&image_type=photo&pretty=true`)
   console.log(response.data.hits)

   this.setState({images:response.data.hits})
}



render(){
    
    return(
        <div  style={{background:'#FDDBE9'}}>
        <div className="ui container" style={{marginTop:'0px',background:'#FFB6C1'}}>
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            <br></br><br></br>
            <ImageList images={this.state.images}/>
            </div>
        </div>
    )
}
}

export default App;