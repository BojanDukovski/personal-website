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
    return (
        <div>
            <div style={styles} className={'mt-5 text-center container'}>
                <p>The website is under construction!</p>
            </div>
        </div>
    );
}

export default App;
