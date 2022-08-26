import React from 'react';
import './project.css'
import imgArray from './assets/index'


const projects = [
    {
        title: 'Random Video Chat',
        image: imgArray[0],
        description: 'A random Video Chat application'
    },
    {
        title: 'Placeholder',
        image: 'https://place-puppy.com/300x300',
        description: 'A placeholder puppy'
    },
]

function Project() {
    return (
        <main className=' text-center row justify-content-center'>
            {projects.map((element) => {
                return (
                    <section className='col-sm-12 col-md-6 border border-3 rounded'>
                        <div className='proj-card-section'>
                            <div className='text-center col-12 '>
                                <h5>{element.title}</h5>
                            </div>
                            <div className=' row col-12'>
                                <div className='col-1'></div>
                                <img alt='placeholder img' src={element.image} className='text-center col-10' />
                                <div className='col-1'></div>
                            </div>


                            <div className='row col-12'>
                                <div className='col-1'></div>
                                <div className='col-10 text-start'>
                                    <p>
                                        Project description: {element.description}
                                    </p>
                                </div>
                                <div className='col-1'></div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </main>
    )
}

export default Project;