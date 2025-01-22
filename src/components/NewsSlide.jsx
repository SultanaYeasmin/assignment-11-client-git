import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const NewsSlide = ({ imageURL, title, subTitle, url, topic, time }) => {
    return (
        <div className="card card-compact bg-base-100 border-2">
            <figure className="h-[350px]">
                <img className="h-full w-full object-cover"
                    src={imageURL}
                    alt={title} />
            </figure>
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
              
                <p>{subTitle}</p>
                <div className="card-actions justify-between items-center mb-1">
                <p className="text-xs text-gray-400" >{time} ago | {topic} </p>
                    <div>
                        <Link to={url}> <button className="btn btn-ghost hover:bg-blue-200">Read More <FaLongArrowAltRight /></button></Link>
                    </div>
                 
                </div>
            </div>
        </div>
    );
};

export default NewsSlide;