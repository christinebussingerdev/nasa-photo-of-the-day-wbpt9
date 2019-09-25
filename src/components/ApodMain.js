import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApodCard from './ApodCard.js';


export default function ApodMain() {

    const [apodData, setApodData] = useState({}) 

    useEffect(() => {

        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=9GwED0cQrEONy8QcgAwf2FXsQR9abnoJ60ysQAIa')
            .then(response => {
                setApodData(response.data)
            })
    }, []);

    return (

        <div>{console.log(apodData)}
            <ApodCard 
                title={apodData.title} 
                explanation={apodData.explanation} 
                imgsrc={apodData.url}
            />
        </div>
        
    )
}




        // axios
        // .get('https://api.nasa.gov/planetary/apod?api_key=9GwED0cQrEONy8QcgAwf2FXsQR9abnoJ60ysQAIa')
        // .then(response => {
        //     console.log(response)

        //     function wireConstructor() {

        //         const entryPoint = document.querySelector('.apod')

        //         const newTitle = document.createElement('h2')
        //         const newExplanation = document.createElement('p')
        //         const newApodPhoto = document.createElement('img')



        //         newTitle.textContent = response.data.title
        //         newExplanation.textContent = response.data.explanation
        //         newApodPhoto.src = response.data.url

        //         entryPoint.appendChild(newTitle)
        //         entryPoint.appendChild(newExplanation)
        //         entryPoint.appendChild(newApodPhoto)
        //     }

        //     wireConstructor();

        // })
        // .catch(err => {
        //     console.log(err)
        // })












        // .then(response => {
        //     console.log(response)

            

            // function wireConstructor() {

            //     const entryPoint = document.querySelector('.apod')

            //     const newTitle = document.createElement('h2')
            //     const newExplanation = document.createElement('p')
            //     const newApodPhoto = document.createElement('img')



            //     newTitle.textContent = response.data.title
            //     newExplanation.textContent = response.data.explanation
            //     newApodPhoto.src = response.data.url

            //     entryPoint.appendChild(newTitle)
            //     entryPoint.appendChild(newExplanation)
            //     entryPoint.appendChild(newApodPhoto)
            // }

            // wireConstructor();

    //})