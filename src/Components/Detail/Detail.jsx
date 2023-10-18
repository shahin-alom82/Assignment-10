

const Detail = ({ card }) => {
    const { img, title, price, description } = card;
    return (
        <div>
            <div className=" ">
                <div className="card bg-gray-300 mb-10">
                    <img className="lg:w-[1400px] lg:h-[470px] rounded-lg md:w-[300px] md:h-[150px] object-cover" src={img} alt="" />
                    <div className='p-6'>
                        <h1 className="text-3xl font-bold mt-2">{title}</h1>
                        <button className=" rounded font-bold mt-3">{price}</button>
                        <h1 className="mt-3">{description}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Detail;