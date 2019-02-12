import React from 'react'; 

function Main(props){
    return (
        <div>
            <header>
                <h1>Noteful</h1>
            </header>
            <main>
                {/*note component */}
                <button>Add note</button>
            </main>
            <div>
                {/*folder component*/}
                <button>Add Folder</button>
            </div>
        </div>
    )
}

export default Main; 