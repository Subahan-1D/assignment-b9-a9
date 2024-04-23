
import notPage from '../../public/404.jpg'
const ErrorElement = () => {
    return (
        <div>
            <img className='max-w-7xl mx-auto w-1/2 mt-10' src={notPage} alt="" />
        </div>
    );
};

export default ErrorElement;