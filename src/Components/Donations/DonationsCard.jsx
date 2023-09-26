

const DonationsCard = ({ donation }) => {
    const { ID, Picture, Category, CategoryBackgroundColor, cardColor, textColor, Title } = donation || {}
    return (

        <div className="flex flex-wrap" >
            <div className="card w-96 shadow-xl md:w-80 lg:w-72  " style={{ backgroundColor: cardColor }}>
                <figure><img className="h-48" src={Picture} alt="Shoes" /></figure>
                <div className="card-body h-48">
                    <div className="">
                        <div className="card-actions">
                            <button className="h-7 w-auto px-4 rounded-md font-medium" style={{ color: textColor, backgroundColor: CategoryBackgroundColor }}>{Category}</button>
                        </div>

                        <h2 className="card-title text-2xl font-semibold mt-3" style={{ color: textColor }}>{Title}</h2>
                       
                    </div>

                </div>
            </div>
        </div>



    );
};

export default DonationsCard;