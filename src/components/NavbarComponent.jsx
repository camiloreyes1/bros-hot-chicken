import { Navbar } from "flowbite-react";

const NavbarComponent = () => {
  return (
    <div>
       <Navbar className="bg-zinc-950 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600" fluid>
        <Navbar.Brand href="/">
          <img src="https://res.cloudinary.com/delscyuhi/image/upload/v1697939680/xna0rag5wqhfhbkzwryh.png" className="mr-2 h-9 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Bro's Hot Chicken</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="lg:flex lg:items-center lg:w-auto"> 
          <Navbar.Link href="https://www.broshotchicken.com/order-now" className='text-white active-link'>
            Order Now
          </Navbar.Link>
          <Navbar.Link href="#" className='text-white active-link'>
            Menu
          </Navbar.Link>
          <Navbar.Link href="#" className='text-white active-link'>
            About Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
