import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const styles = {
        backgroundColor: 'pink',
        color: 'darkred',
        border: 'solid darkred 15px',
        borderRadius: '20px',
        fontSize: '90px',
        fontWeight: 'bold',
    };
    const bgColor = {
        backgroundColor: "black"
    };
    return (
        <div style={bgColor}>
            <div style={styles} className={'mt-5 text-center container'}>
                <p>The website is under construction!
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cutfilm.com%2Funderconstruction%2Funderconstructionyr.png&f=1&nofb=1"
                        height="100px" width="200px" alt="image" />
                </p>

            </div>
        </div>
    );
}

export default App;
