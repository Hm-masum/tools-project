import img from '../assets/Icon.png'
import Navbar from '../component/Navbar';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col items-center justify-center'>
                <img src={img} alt="" />
                <h1 className='text-4xl w-[20%] text-center font-semibold'>Oops!! Sorry, There is no content here</h1>
            </div>
        </div>
    );
};

export default ErrorPage;