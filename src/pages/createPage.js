import {React, useState} from 'react'
import './createPage.css';
import {SearchBar} from "../components/searchBar"
import {SearchResultsList} from "../components/searchResultsList"
import TaskModalPortal from "../components/taskModalPortal"

// const Button = styled.button `
//     color: #e5eaf5;
//     font-family: "Poppins";
//     font-size: 20pt;
//     width: 300px;
//     height: 70px;
//     background-color: #8458B3;
//     border-radius: 2cm;
//     border-style: hidden;
//     align-self: center;
//     margin-top: 20px;
//     transition: ease background-color 250ms;
//     &:hover {
//         background-color: #5c3881;
//       }
// `;

/*function CreatePage() {
    
    return(
        <div className='TitleContainer'>
            <div>
                <header className='Title'>
                    Create a Project
                </header>
            </div>

            <div>
                <textarea 
                    className='TitleText'
                    name="projectTitle"
                    defaultValue={"Add a Project Title"}
                    rows={1}
                />
            </div>

            <Card />

            <Button>
                Create Project
            </Button>


        </div>

    )
}*/


function CreatePage () {

    const [tasks] = useState([
        {
            title: 'Task1',
        },
        {
            title: 'Task2',
        },
        {
            title: 'Task3',
        },
        {
            title: 'Task4',
        },
        {
            title: 'Task5',
        },
        {
            title: 'Task6',
        },

    ])

    const [results, setResults] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    // const [isOpen, setIsOpen] = useState(false);

    // const openModal = () => {
    //     setIsOpen(true);
    //   };
    
    //   const closeModal = () => {
    //     setIsOpen(false);
    //   };

    return (
        <div>
            <div className="TitleContainer">
                <header className='Title'>
                    Create a Project
                </header>
            
            </div>
            <div>
                    <TaskModalPortal
                        visible={showModal}
                        title="Portal Modal"
                        description="I was rendered usign portals"
                        onClose={closeModal}
                    />
                                    {/* <button onClick={openModal}>Show Modal</button> */}
                    </div>
            <div className="BigBox">
                <div className="Container">
                    <div className="Tasks">
                        {
                            tasks.map((task, i) => (
                                <div key={i} className="Task">
                                    <header className="TaskTitle">
                                        {task.title}
                                    </header>
                                    <p>
                                    
                                    </p>
                                    <button 
                                        className='TaskButton'
                                        onClick={openModal}>
                                        +
                                    </button>

                                    {/*{isOpen && (
                                        <Modal onClose={closeModal} />
                                    )} */}
                                    
                                </div>
                                
                            ))
                        }

                    </div>

                </div>
                <div className="MemberContainer">
                    <header className="AddTitle">
                        Add members
                    </header>
                    <div>
                        <SearchBar setResults={setResults}/>
                        {results && results.length > 0 
                        && <SearchResultsList results={results} />}
                    </div>

                </div>
            
        </div>


    </div>

    )
}

export default CreatePage