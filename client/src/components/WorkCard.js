import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import textEditor from '../components/assets/images/textEditorPreview.gif';
import animalAmigos from '../components/assets/images/animalAmigosPreview.jpg';
import bookSearch from '../components/assets/images/bookSearchPreview.gif';

export default function WorkCard1() {

    return (
        <div className='workCardDiv'>
            <card className='workCard'>
                <div className="cardTitle">
                    <h4>Text Editor</h4>
                </div>
                <div className="cardBody">
                    <img src={textEditor} alt="text editor preview" height='300px' />
                    <p>This is a text editor that I built using React. It allows you to write and save notes. It also allows you to delete notes that you no longer need. The notes are saved to a database and can be accessed from anywhere.</p>
                    <a href="https://github.com/bpmcdonell/text-editor">GitHub Repo</a>
                </div>
            </card>
            <card className='workCard'>
                <div className="cardTitle">
                    <h4>Book Search</h4>
                </div>
                <div className="cardBody">
                    <img src={bookSearch} alt="book search preview" height='300px' />
                    <p>This is a book search app that I built using React. It allows you to search for books and save them to a list. You can also delete books from the list if you no longer want them saved.</p>
                    <a href="https://github.com/bpmcdonell/book-search">GitHub Repo</a>
                </div>
            </card>
            <card className='workCard'>
                <div className="cardTitle">
                    <h4>Animal Amigos</h4>
                    <img src={animalAmigos} alt="animal amigos preview" height='300px' />
                    <p>This was a group project that we built using Express and SQL. It allows you to find and provide help with caring for animals.</p>
                    <a href="https://github.com/bpmcdonell/Animal-Amigos">GitHub Repo</a>
                </div>
            </card>
        </div>
    )
}

