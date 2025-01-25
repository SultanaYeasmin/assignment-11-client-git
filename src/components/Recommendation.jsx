

const Recommendation = ({ recommendation }) => {
    // console.log(recommendation)
    const {

        recommendationTitle,
        recommendationName,
        recommendationImageURL,
        recommendationReason,
        queryId,
        queryTitle,
        productName,
        userEmailQuery,
        userNameQuery,
        recommenderEmail,
        recommenderName,
        recommendationDate,
        recommenderPhoto

    } = recommendation || {}

    return (
        <>
            <div className="container mx-auto border-2 border-blue-100 mb-5 p-5 bg-blue-50">
                <div className="flex justify-start items-center gap-5">
                    <figure>
                        <img className="w-14 h-14 rounded-full bg-gray-100"
                            src={recommenderPhoto}
                            alt={recommenderName} />
                    </figure>
                    <p>{recommendationDate}</p>
                </div>

                <div className="card flex-col bg-base-100 mt-5">
                  
                    <div className="card-body p-4">
                    <p className="text-xl font-extrabold">Recommendation:</p>
                      
                        <div className="card-actions justify-around">
                            <p><span className="text-green-900 font-bold">You can use: </span><span className="badge badge-secondary">{recommendationName}</span></p>                           
                        </div>
                        <h2 className="card-title text-base text-gray-500">{recommendationTitle}</h2>
                       <p className="text-xs text-gray-700 w-[96%]"><span className="text-green-900 font-bold text-justify">Specialities:</span> <span className="text-justify">{recommendationReason}</span></p>
                        <div className="w-[15%]">
                            <figure className="">
                                <img className=""
                                    src={recommendationImageURL}
                                    alt={recommendationName} />
                            </figure>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default Recommendation;