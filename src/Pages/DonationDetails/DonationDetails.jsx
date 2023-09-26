import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";


const DonationDetails = () => {
    const [donationDetails, setDonationDetails] = useState({});  

    const { ID } = useParams();

    const donates = useLoaderData();

useEffect(() => {
    const findDonate = donates.find(donate => donate.ID === ID)
    setDonationDetails(findDonate)

}, [ID, donates])


    return (
        <div>
            <DonationDetailsCard donationDetails ={donationDetails}></DonationDetailsCard>
        </div>
    );
};

export default DonationDetails;