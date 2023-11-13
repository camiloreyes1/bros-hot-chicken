import { Carousel } from "react-bootstrap";

const HomePage = () => {

    const textStyle = {
        fontFamily: "Permanent Marker, cursive",

    };

    const biggerParagraphStyle = {
        fontSize: "125%", // Increase the font size by 25%
    };
    return (

        <div>
            <div className="home-page" style={textStyle} >
                <h1 className="text-center mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Welcome to Bro's Hot Chicken!
                </h1>
                <p className="text-center dark:text-white" style={biggerParagraphStyle}>
                    Can You Handle the Heat?
                </p>
            </div>

            <div className="hours-section">
                <br>
                </br>
                <br>
                </br>
                <h1 className="text-center mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">
                    Hours
                </h1>

                <div className="flex justify-center">

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ width: '100%' }}>
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Monday
                                    </th>
                                    <td class="px-6 py-4">
                                        1:00 PM - 9:00 PM
                                    </td>

                                </tr>
                                <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Tuesday
                                    </th>
                                    <td class="px-6 py-4">
                                        1:00 PM - 9:00 PM
                                    </td>

                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Wednesday
                                    </th>
                                    <td class="px-6 py-4">
                                        1:00 PM - 9:00 PM
                                    </td>

                                </tr>
                                <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Thursday
                                    </th>
                                    <td class="px-6 py-4">
                                        1:00 PM - 11:00 PM
                                    </td>

                                </tr>

                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Friday
                                    </th>
                                    <td class="px-6 py-4">
                                        1:00 PM - 11:00 PM
                                    </td>

                                </tr>
                                <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Saturday
                                    </th>
                                    <td class="px-6 py-4">
                                        1:00 PM - 11:00 PM
                                    </td>

                                </tr>

                                <tr>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Sunday
                                    </th>
                                    <td class="px-6 py-4">
                                        1:00 PM - 7:00 PM

                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <br></br>
            <div className="mb-4">

                <Carousel className="h-50">
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src="https://res.cloudinary.com/delscyuhi/image/upload/v1698893966/wopfnuhhypektpvs6zic.jpg" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100"
                            src="https://res.cloudinary.com/delscyuhi/image/upload/v1698893966/khw6glx7xfegkimth7bi.jpg" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100"
                            src="https://res.cloudinary.com/delscyuhi/image/upload/v1698893966/b2yffqolxpzj7uennjac.jpg" />
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    );
};

export default HomePage;
