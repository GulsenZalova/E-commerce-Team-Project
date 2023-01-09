import { Carousel } from 'antd'
import React from 'react'
import blog1 from "../../assets/images/Blog-1.svg"
import blog2 from "../../assets/images/Blog-2.svg"
import "./style.css"

function News() {

    const carouselResponsiveSettings = [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
            },
        },
    ]

    return (
        <div className='news'>
            <Carousel responsive={carouselResponsiveSettings} dots={true} slidesToShow={2}>
                <div className='part'>
                    <div className='news-inside'>
                        <img className='news-img' src={blog1} />
                        <div className='news-info'>
                            <h4 className='news-date'>22,oct,2021</h4>
                            <h1 className='news-topic'>Who avoids a pain that produces?</h1>
                            <p className='news-text'>
                                Lorem ipsum dolor sit amet consectetur.
                                Nec sit enim tellus faucibus bibendum ullamcorper.
                                Phasellus tristique aenean at lorem sed scelerisque.
                            </p>
                            <span className='news-footer'>By spacing tech</span>
                        </div>
                    </div>
                </div>

                <div className='part'>
                    <div className='news-inside'>
                        <img className='news-img' src={blog2} />
                        <div className='news-info'>
                            <h4 className='news-date'>22,oct,2021</h4>
                            <h1 className='news-topic'>Who avoids a pain that produces?</h1>
                            <p className='news-text'>
                                Lorem ipsum dolor sit amet consectetur.
                                Nec sit enim tellus faucibus bibendum ullamcorper.
                                Phasellus tristique aenean at lorem sed scelerisque.
                            </p>
                            <span className='news-footer'>By spacing tech</span>
                        </div>
                    </div>
                </div>

                <div className='part'>
                    <div className='news-inside'>
                        <img className='news-img' src={blog1} />
                        <div className='news-info'>
                            <h4 className='news-date'>22,oct,2021</h4>
                            <h1 className='news-topic'>Who avoids a pain that produces?</h1>
                            <p className='news-text'>
                                Lorem ipsum dolor sit amet consectetur.
                                Nec sit enim tellus faucibus bibendum ullamcorper.
                                Phasellus tristique aenean at lorem sed scelerisque.
                            </p>
                            <span className='news-footer'>By spacing tech</span>
                        </div>
                    </div>
                </div>

                <div className='part'>
                    <div className='news-inside'>
                        <img className='news-img' src={blog2} />
                        <div className='news-info'>
                            <h4 className='news-date'>22,oct,2021</h4>
                            <h1 className='news-topic'>Who avoids a pain that produces?</h1>
                            <p className='news-text'>
                                Lorem ipsum dolor sit amet consectetur.
                                Nec sit enim tellus faucibus bibendum ullamcorper.
                                Phasellus tristique aenean at lorem sed scelerisque.
                            </p>
                            <span className='news-footer'>By spacing tech</span>
                        </div>
                    </div>
                </div>



            </Carousel>
        </div>
    )
}

export default News