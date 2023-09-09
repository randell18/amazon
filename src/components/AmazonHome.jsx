import React from 'react'
import '../amazonhome.css'
import Product from './Product'

const AmazonHome = () => {
  return (
    <div className='home'>
        <div className="home-container">
            <img className="home-img" src="amazon-wallpaper1.jpg"/>
            <div className="home-row">
              <Product id='1' title='Yauhody 8K HDMI 2.1 Cables 15ft 2 Pack, HDMI Cable 2.1 4k 120hz' price='34.99' image='HDMI cable.jpg'/>
              <Product id='2' title='TAMASHII NATIONS - Mobile Fighter G Gundam - GF13-017NJII' price='59.20' image='fighter gundam.jpg'/>
            </div>
            <div className="home-row">
              <Product id='3' title='Kids Headphones-noot products K22 Foldable Stereo ' price='30.9' image='headphones.jpg'/>
              <Product id='4' title='PowerA Joy-Con Comfort Grip for Nintendo Switch - Hyrule Marksman' price='19.99' image='nintendo.jpg'/>
              <Product id='5' title='Amazon Basics Tall Kitchen' price='28.12' image='drawstring bags.jpg'/>
            </div>
            <div className="home-row">
              <Product id='6' title='Brilliant Smart Home Control (1-Switch Panel) — Alexa Built-In & Compatible with Ring, Sonos, Hue, Google Nest, Wemo, SmartThings' price='43.23' image='swith panel.jpg'/>
            </div>
        </div>
    </div>
  )
}

export default AmazonHome