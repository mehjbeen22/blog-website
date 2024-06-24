import { Link } from 'react-router-dom';
import PrintIcon from '@mui/icons-material/Print';

const Navbar = () => {
  return (
    <nav className="border  shadow-2xl ">
      <div className="flex gap-5 items-center py-3">
        <Link to="/">
          {' '}
          <PrintIcon sx={{ color: '#3730a3', fontSize: '3rem' }} />
        </Link>

        <ul className="flex gap-8">
          <Link to="/" className="hover:border border-[#3730a3] p-2 rounded">
            Home
          </Link>
          <Link
            to="/printeroffline"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Printer Offline
          </Link>
          <Link
            to="/printersetupissue"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Printer Setup
          </Link>
          <Link
            to="/printerscannersetup"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Scanner Setup
          </Link>
          <Link
            to="/privacypolicy"
            className="hover:border border-[#3730a3] p-2 rounded"
          >
            Privacy PoLicy
          </Link>
        </ul>
      </div>
      {/* <div className="flex gap-10 bg-[#3730a3] text-white py-2 px-2">
        <p>DRIVERS</p>
        <p>DIAGNOSTICS</p>
        <p>PROUCTS</p>
        <p>MY ACCOUNT</p>
      </div> */}
    </nav>
  );
};

export default Navbar;
