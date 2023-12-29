"use client";

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1Img from '../../../public/img/17.jpg';
import banner2Img from '../../../public/img/18.jpg';
import Image from 'next/image';



function Slider() {


    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <Image
                    src={banner1Img}
                    alt="First slide"
                    fluid
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image

                    src={banner2Img}
                    alt="Second slide"
                    fluid
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;