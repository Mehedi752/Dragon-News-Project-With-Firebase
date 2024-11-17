import moment from 'moment';
import logo from '../../assets/logo.png';
const Header = () => {
    return (
        <div className='mt-12 flex flex-col justify-center items-center'>
             <img src={logo} alt="" className="mb-5" />
             <p className="text-[#706f6f] text-lg font-normal mb-2">Journalism Without Fear or Favour</p>
             <p className="text-[#403f3f] text-xl font-medium">{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;