import React from 'react'
import '../styles/Banner.css'

function MainImage(props) {
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+'...':str;
    }
    return (
        <header
            style={{
                backgroundSize:"100%, cover",
                backgroundImage:`url("${props.image}")`,
                backgroundPosition:"center center"
            }}
            className="banner"
        >
            <div className="banner__contents">
                <h1 className="banner__title">{props.title}</h1>
                <h1 className="banner__description">{truncate(props.text,150)}</h1>
            </div>
        </header>
    )}

export default MainImage;

{/* <div style={{
            background:
                `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('${props.image}'), #1c1c1c`,
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center, center',
            width: '100%',
            position: 'relative'
        }}>
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }}>
                    <h2 style={{ color: 'white' }} level={2} > {props.title}</h2>
                    <p style={{ color: 'white', fontSize: '1rem' }}>{props.text}</p>
                </div>
            </div>

        </div> */}
