import { useLoaderData } from "react-router-dom";

const Blog = () => {

    const deals = useLoaderData();
    return (
        <div className="container mx-auto py-8 " >
            <h1 className="text-3xl font-bold mb-8">Property Listings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
                {deals.map(deal => (
                    <div key={deal.id} className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-down">
                        <img className="w-full h-64 object-cover object-center" src={deal.relevant_image} alt={deal.estate_title} />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">{deal.estate_title}</h2>
                            <p className="text-gray-600 mb-4">{deal.description}</p>
                            <div className="flex justify-between items-center">
                                <p className="text-gray-700 font-semibold">${deal.price} per night</p>
                                <p className="text-gray-500">{deal.location}</p>
                            </div>
                            <ul className="mt-2 flex flex-wrap">
                                {deal.facilities.map((facility, index) => (
                                    <li key={index} className="mr-5 mb-2 px-2 py-1 bg-blue-200 text-blue-800 rounded">{facility}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;