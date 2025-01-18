

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
            <div className="container mx-auto border-2 mb-5 p-5">
                <div className="flex justify-start items-center gap-5">
                    <figure>
                        <img className="w-14 h-14 rounded-full bg-gray-100"
                            src={recommenderPhoto}
                            alt={recommenderName} />
                    </figure>
                    <p>{recommendationDate}</p>
                </div>

                <div className="card flex-col bg-base-100">
                  
                    <div className="card-body p-4">
                    <p className="text-xl bg-lime-100">Recommendation:</p>
                        <h2 className="card-title text-base">{recommendationTitle}</h2>
                        <div className="card-actions justify-around">
                            <p><span className="text-green-900 font-bold">You can use: </span>{recommendationName}</p>
                                                      
                        </div>
                       <p className="text-xs text-gray-600 w-[90%]"><span className="text-green-900 font-bold text-justify">Specialities:</span> {recommendationReason}</p>
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