import React from "react";

const Banner = () =>{
    return(
        <div>
        <div className={'phone-wallpaper-copy'}>
            <div className={'links-container'}>
                <p>Music</p>
                <p>Videos</p>
                <p>Buy</p>
                <p>Discography</p>
            </div>
        </div>
        <div style={{width:'100%',display:'flex',justifyContent:'center',position:"absolute",bottom:'20px'}}>
            <img height="60px" src={require('../assets/PERRICK.png').default}/>
        </div>
        </div>
    )
}
export default Banner