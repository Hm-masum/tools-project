import { useEffect, useState } from "react";
import useAxiosCommon from "../hooks/useAxiosCommon";
import ProductCard from "../component/ProductCard";


const Home = () => {
    const [products, setProducts] = useState([])
    const axiosCommon = useAxiosCommon();

    useEffect(() => {
        const getData = async () => {
            const { data } = await axiosCommon(`/category/1000`);
            setProducts(data.data)
        }
        getData()
    }, [axiosCommon])




    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default Home;