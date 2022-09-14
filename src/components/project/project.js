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
        imgdesc: 'Homepage of the application, shows the header, navbar, a post, and a friend list.',
        description: 'A social media application that allows avid gamers to find friends with similar interests.', 
        link: 'https://jb-waystone-fornt.herokuapp.com/waystone-front/home'
    },
    {
        id: uuidv4(),
        title: 'DnD Machine',
        image: imgArray[2],
        imgdesc: 'The homepage of the application',
        description: 'DnD Machine allows users to play a simple, turn-based combat gamed based on Dungeons & Dragons. On page load, users must create a new character from a selection of Dungeons and Dragons classes and races and give their character a name, at which point the player stats populate the page. The player then can begin their campaign by pressing the start button, giving them the option to battle monsters for xp to level up their character which in turn gives them access to more difficult monsters. If the player HP reaches zero, the player is dead and deleted from local storage. Music can be played at anytime by pressing the button in the header.', 
        link: 'https://knight19jonathan.github.io/Adventure-Game-Project-/'
    },
    {
        id: uuidv4(),
        title: 'Placeholder',
        image: 'https://placedog.net/1029/846/r',
        imgdesc: 'A placeholder puppy',
        description: 'A placeholder puppy ',
        link: "https://placedog.net/1029/846/r"
    },
]

function Project() {
    return (
        <main className=' text-center row justify-content-center'>
            {projects.map((element) => {
                return (
                    <section key={element.id} className='col-sm-12 col-md-6 proj-card'>
                        <a target="_blank" rel="noopener noreferrer" href={element.link} className='proj-card-section'>
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
                                            <strong>Project description:</strong>  {element.description}
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