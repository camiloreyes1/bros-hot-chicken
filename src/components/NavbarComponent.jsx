import { Navbar } from 'flowbite-react';
import { Button } from 'flowbite-react';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar className="bg-zinc-950 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600" fluid>
        <Navbar.Brand href="/">
          <img src="https://res.cloudinary.com/delscyuhi/image/upload/v1697939680/xna0rag5wqhfhbkzwryh.png" className="mr-2 h-9 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Bro's Hot Chicken</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>   
          <Button href="#" className="btn-md text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm text-center mr-2 mb-2">
            Order Now
          </Button>
          <Button href="#" className="btn-md text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover.bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm text-center mr-2 mb-2">
            Menu
          </Button>
          <Button href="#" className="btn-md text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm text-center mr-2 mb-2">
            About Us
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
