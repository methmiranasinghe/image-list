import React from "react";

const ImageList = (props) =>{
    const image= props.images.map((image) =>{
        return <img key={image.id} src={image.webformatURL} alt=""/>
    })
    return(
        <div>
            {image}
        </div>
    )
}

export default ImageList;