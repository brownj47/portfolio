import React from 'react';
import './project.css'
import imgArray from './assets/index'
import { v4 as uuidv4 } from 'uuid';


const projects = [
    {
        id: uuidv4(),
        title: 'Random Video Chat',
        image: imgArray[0],
        imgdesc: 'VideoChat in action',
        description: 'A random Video Chat application', 
        link: 'https://vivachat.herokuapp.com/'
    },
    {
        id: uuidv4(),
        title: `Mordenkainen's Waystone`,
        image: imgArray[1],
        imgdesc: 'Homepage of the application, shows the header, neavbar, a post, and a friend list.',
        description: 'An application that allows avid gamers to find friends with similar interests.', 
        link: 'https://jb-waystone-fornt.herokuapp.com/waystone-front/home'
    },
    {
        id: uuidv4(),
        title: 'DnD Machine',
        image: imgArray[2],
        imgdesc: 'The homepage of the application',
        description: 'A random Video Chat application', 
        link: 'https://vivachat.herokuapp.com/'
    },
    {
        id: uuidv4(),
        title: 'Placeholder',
        image: 'https://place-puppy.com/1029x846',
        imgdesc: 'a placeholder puppy',
        description: 'A placeholder puppy',
        link: "#"
    },
]

function Project() {
    return (
        <main className=' text-center row justify-content-center'>
            {projects.map((element) => {
                return (
                    <section key={element.id} className='col-sm-12 col-md-6'>
                        <a href={element.link} className='proj-card-section'>
                            <div className='text-center col-12 card-title'>
                                <h5>{element.title}</h5>
                            </div>
                            <div className=' row col-12'>
                                <div className='col-1'></div>
                                <img alt={element.imgdesc} src={element.image} className='text-center col-10' />
                                <div className='col-1'></div>
                            </div>
                            <br />
                            <div className=' row col-12'>
                                <div className='row col-1'></div>
                                <div className='row col-10'>
                                    <div className='col-1'></div>
                                    <div className='col-10 text-start'>
                                        <p>
                                            Project description: {element.description}
                                        </p>
                                    </div>
                                    <div className='col-1'></div>
                                </div>
                                <div className='row col-1'></div>

                            </div>
                        </a>
                    </section>
                )
            })}
        </main>
    )
}

export default Project;