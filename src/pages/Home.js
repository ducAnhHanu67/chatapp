
import { useSelector } from 'react-redux';
import Chat from '../components/Chat';
import '../style.css'
import { Sidebar } from '../components/Sidebar';
function Home() {

    console.log('render Home')
    return (
        <div className='homeContainer'>
            {/* <div>
                {data123 ? `Home page xin chao ${data123.name}` : `Homepage Xin chào`}
            </div> */}
            <div className='homeWrapper'   >
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
}

export default Home;
