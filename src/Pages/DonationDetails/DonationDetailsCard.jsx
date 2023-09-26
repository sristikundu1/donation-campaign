import swal from 'sweetalert';

const DonationDetailsCard = ({ donationDetails }) => {

    const { Picture, textColor, Title, Description, Price } = donationDetails || {}

    const handleAddDonation = () => {
        const addedDonationsItems = [];

        const donatedItems = JSON.parse(localStorage.getItem("donates"));

        if (!donatedItems) {
            addedDonationsItems.push(donationDetails);
            localStorage.setItem("donates", JSON.stringify(addedDonationsItems));
            swal("Good job!", "You successfully donated!", "success");
          
        }
        else {
            addedDonationsItems.push(...donatedItems, donationDetails);
            localStorage.setItem("donates", JSON.stringify(addedDonationsItems));
            swal("Good job!", "You successfully donated!", "success");
            
        }
    }


    return (
        <div>
            <div className="relative flex mx-32 flex-col rounded-xl bg-white bg-clip-border text-gray-700 ">
                <div className="relative mx-4 lg:mt-4 h-[700px] overflow-hidden lg:rounded-lg bg-white bg-clip-border text-gray-700">
                    <img
                        src={Picture}
                        className=" h-full w-full"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-[#0b0b0b80] opacity-50 h-1/4"></div>

                    <button onClick={handleAddDonation} className=" absolute bottom-7 left-7 text-white px-4 py-2 rounded-md font-semibold text-xl" style={{ backgroundColor: textColor }}>Donate${Price}</button>


                </div>

                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="text-4xl font-bold text-black mb-6">
                            {Title}
                        </p>

                    </div>
                    <p className="  text-lg font-normal  text-slate-500">
                        {Description}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default DonationDetailsCard;