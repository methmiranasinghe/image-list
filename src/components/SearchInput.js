import React from "react";

class SearchInput extends React.Component{

    // onInputChange (event){
    //     console.log(event.target.value)

    // }
    constructor(props){
        super(props)
        this.state={entry : ''}
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        // console.log(this.state.entry)
        this.props.onSearchSubmit(this.state.entry)
    }
    render(){
        return(
         
            <div >
                <h1 style={{color:'red'}}><center>Images Stock</center></h1>
                <h4><center>Get Your all views in one time</center></h4><br></br>
                <center>
                <form  onSubmit={this.onFormSubmit} className="col-6 col-lg-6 mb-3 mb-lg-0 me-lg-3">
             
                   
                 
                    <input 
                        type="search" 
                        className="form-control" 
                        placeholder="Search for any image..." 
                        aria-label="Search" 
                        // onChange={this.onInputChange}
                        // onChange={(event) =>console.log(event.target.value)}
                        onChange={(event) => this.setState({entry:event.target.value})}
                        value={this.state.entry}
                    />
                </form>
                </center>
             </div>
        )
    }
}
export default SearchInput;