import { GoVerified } from "react-icons/go";


const ProductCard = ({ product }) => {
    const { thumbnail, title, authors, others } = product;
    const { profile_picture, profile_name, verified } = authors[0];
    const { views } = others;

    return (
        <div>
            <img className="w-full h-[250px] rounded-lg" src={thumbnail} alt="" />
            <div className="py-3 flex gap-6">
                <div>
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={profile_picture} />
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <div className="flex items-center gap-3">
                        <p className="text-xl">{profile_name}</p>
                        <p>{verified===false ? <p></p> :<GoVerified className="text-blue-500 font-semibold text-3xl"></GoVerified> }</p>
                    </div>
                    <p >{views} views</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;