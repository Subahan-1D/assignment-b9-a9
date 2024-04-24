import { Link, useLoaderData, useParams } from "react-router-dom";


const DealsDetails = () => {
    const { id } = useParams();
    const deals = useLoaderData();

    // Find the deal with the matching id
    const deal = deals.find(deal => deal.id === parseInt(id));

    if (!deal) {
        return <div className="container mx-auto mt-8">Deal not found</div>;
    }

    return (
        <div className='container mx-auto mt-8'>
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <figure className='bg-gray-200 rounded-t-lg overflow-hidden'>
                    <img className='w-full h-auto' src={deal.relevant_image} alt={deal.estate_title} />
                </figure>
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4">{deal.estate_title}</h1>
                    <p className="text-gray-600 mb-4"><strong>Description:</strong> {deal.description}</p>
                    <p className="text-gray-600 mb-4"><strong>Price:</strong> ${deal.price}</p>
                    <p className="text-gray-600 mb-4"><strong>Status:</strong> {deal.status}</p>
                    <p className="text-gray-600 mb-4"><strong>Area:</strong> {deal.area} sq ft</p>
                    <p className="text-gray-600 mb-4"><strong>Location:</strong> {deal.location}</p>
                    <p className="text-gray-600 mb-4"><strong>Facilities:</strong> {deal.facilities.join(', ')}</p>
                </div>
            </div>
            <div className='flex justify-center my-4'>
                <Link to="/" className='btn btn-primary hover:bg-blue-400 bg-black-500 text-white'>Go Back Home</Link>
            </div>
        </div>
    );
};

export default DealsDetails;