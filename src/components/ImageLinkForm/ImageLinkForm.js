import React from 'react';

 

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img style={{paddingTop: '10px', height: 120, width: 120 }} alt='logo'  src={ideaLogo}></img>
                </div>
            </Tilt> 
        </div>


    );
}

export default Logo;