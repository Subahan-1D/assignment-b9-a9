
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css'
const Deals = () => {
const [deals,setDeals] = useState([]);
useEffect(()=>{
    fetch ('/Deals.json')
    .then(res => res.json())
    .then(data => setDeals(data))
},[])
    return (
    <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center m-4">
        {deals.map((deal, index) => (
            <div key={index} className="no-underline text-black">
                <div className="card bg-base-100 shadow-xl border-gray-200 border-solid" data-aos="fade-down">
                    <figure className="bg-gray-200 rounded-3xl p-4 sm:p-6 md:p-8"><img className="max-h-64 w-full" src={deal.relevant_image} alt={deal.estate_title} /></figure>
                    <div className="card-body p-4 sm:p-6 md:p-8">
                        <h2 className="card-title text-lg sm:text-xl md:text-2xl">{deal.estate_title}</h2>
                        <div className="text-sm sm:text-base md:text-lg">
                            <p><span className="font-bold">Segment:</span> {deal.segment_name}</p>
                            <p><span className="font-bold">Description:</span> {deal.description}</p>
                            <p><span className="font-bold">Price:</span> ${deal.price}</p>
                            <p><span className="font-bold">Status:</span> {deal.status}</p>
                            <p><span className="font-bold">Area:</span> {deal.area} sq ft</p>
                            <p><span className="font-bold">Location:</span> {deal.location}</p>
                            <p><span className="font-bold">Facilities:</span> {deal.facilities.join(', ')}</p>
                        </div>
                        <hr className="border-t border-gray-300 border-dashed my-4 w-full" />
                        <div className="flex justify-center">
                            <Link to={`deals/${deal.id}`} className="btn btn-primary hover:bg-blue-400 bg-black-500  text-white">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

    );
};

export default Deals;