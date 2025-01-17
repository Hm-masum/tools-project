import { useEffect, useState } from "react";
import useAxiosCommon from "../hooks/useAxiosCommon";
import ProductCard from "../component/ProductCard";
import toast from "react-hot-toast";


const Music = () => {
    const [products, setProducts] = useState([])
    const axiosCommon = useAxiosCommon();
    let val=0;

    useEffect(() => {

        const getData = async () => {
            const { data } = await axiosCommon(`/category/1001`);
            setProducts(data.data)
            if(val==0){
                toast.error('Music is completely haram. plese ignore this')
                val++;
            }
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

export default Music;