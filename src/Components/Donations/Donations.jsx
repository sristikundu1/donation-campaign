import DonationsCard from "./DonationsCard";


const Donations = ({donations}) => {
    return (
        <div className=" py-20 px-32">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                donations.map(donation => <DonationsCard  key={donation.ID} donation ={donation}></DonationsCard> )
            }
           </div>
            
        </div>
    );
};

export default Donations;