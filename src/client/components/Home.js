import React from 'react';

const Home = () => {
    return (
        <div>
            <div>I'm VERY VERY the home component</div>
            <button onClick={() => console.log('Hi There')}> Press Me </button>
        </div>
    );
};

export default Home;