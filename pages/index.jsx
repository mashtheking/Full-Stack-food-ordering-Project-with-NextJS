import Head from "next/head";
import Input from "../components/form/Input";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Home from "./home";
import axios from "axios";

export default function Index({ categoryList, productList }) {
  return (
    <div className="">
      <Head>
        <title>Feane</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Home categoryList={categoryList} productList={productList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(`https://full-stack-food-ordering-project-with-next-js-six.vercel.app/api/categories/categories`);
  const product = await axios.get(
    `https://full-stack-food-ordering-project-with-next-js-six.vercel.app/api/categories/products`
  );
  return {
    props: {
      categoryList: res.data ? res.data : [],
      productList: product.data ? product.data : [],
    },
  };
};
