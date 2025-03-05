import Image from "next/image";
import Link from "next/link";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import {
  quantityDecrease,
  quantityIncrease,
  reset,
} from "../../redux/cartSlice";

const MenuItem = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const findCart = cart.products.find((item) => item._id === product._id);

  const addToCart = () => {
    dispatch(
      addProduct({
        ...product,
        extras: [],
        price: product.prices[0],
        quantity: 1,
        foodQuantity: 1,
      })
    );
  };
const quantityChange = (type, price) => {
    if (type === 0) {
      dispatch(quantityDecrease(price));
    }
    if (type === 1) {
      dispatch(quantityIncrease(price));
    }
  };
const Cart = ({ userList }) => {
  const { data: session } = useSession();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const productTitles = cart.products.map((product) => {
      return {
        title: product.title,
        foodQuantity: product.foodQuantity,
        extras: product.extras,
      };
    });
    setProductState(productTitles);
  }, [cart.products]);
  console.log(productState);  

const [productState, setProductState] = useState([]);

  return (
    <div className="bg-secondary rounded-3xl relative">
      <div className="w-full  bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl ">
        <Link href={`/product/${product._id}`}>
          <div className="relative w-36 h-36 hover:scale-110 transition-all">
            <Image
              src={product.img}
              alt=""
              layout="fill"
              className="rounded-full"
            />
          </div>
        </Link>
      </div>
      <div className="p-[25px] text-white ">
        <h4 className="text-xl font-semibold mb-3 ">{product.title}</h4>
        <p className="text-[15px]">{product.desc}</p>
        <div className="flex justify-between items-center mt-4">
          <span>${product.prices[0]}</span>

<div className="absolute left-5 bottom-4">
 <button >
                          <i
                            className="fa-solid fa-chevron-left mr-3 text-primary"
                            onClick={() => quantityChange(0, product)}
                          ></i>
                        </button>
                        {product.foodQuantity}
                        <button>
                          <i
                            className="fa-solid fa-chevron-right ml-3 text-primary"
                            onClick={() => quantityChange(1, product)}
                          ></i>
                        </button>
</div>
          <button
            className="btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center absolute bottom-4 right-5"
            disabled={findCart}
            onClick={addToCart}
          >
            <RiShoppingCart2Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
