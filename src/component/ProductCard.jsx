

const ProductCard = ({product}) => {
    const {category_id,thumbnail,title,authors,others}=product;

    return (
        <div>
        <img src={thumbnail} alt="" />
        <div>
            <div key={index}><img src={authors.profile_picture} alt="" /></div>
            <div>
                <h2></h2>
                <p></p>
                <p></p>
            </div>
        </div>
    </div>
    );
};

export default ProductCard;