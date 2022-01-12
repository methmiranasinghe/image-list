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
         
            <div>
                <form  onSubmit={this.onFormSubmit} className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input 
                        type="search" 
                        className="form-control" 
                        placeholder="Search..." 
                        aria-label="Search" 
                        // onChange={this.onInputChange}
                        // onChange={(event) =>console.log(event.target.value)}
                        onChange={(event) => this.setState({entry:event.target.value})}
                        value={this.state.entry}
                    />
                </form>
              
             </div>
        )
    }
}
export default SearchInput;