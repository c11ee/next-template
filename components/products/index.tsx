import { getProduct, getProductCate } from "@/apis/products";
import { Button, Card, CardContent, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import LangText from "../langText";
import Empty from "../empty";
import t from "@/i18n";

const Products = () => {
  const [currentCats, setCurrentCats] = useState(0);
  const { data: catsData } = getProductCate();
  const { data: productsData } = getProduct({ cid: currentCats });

  const [cats, setCats] = useState<ProductCate[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (catsData) {
      setCats(catsData?.data.cats);
    }
    if (productsData) {
      setProducts(productsData?.data.product);
    }
  }, [catsData, productsData]);

  function handleChangeTab(id: number) {
    setCurrentCats(id);
  }

  return (
    <section className="section px-global">
      <div className="title">
        <h1>{t("product")}</h1>
        <desc>{t("p-d")}</desc>
      </div>

      <ul className="flex justify-center gap-x-5 border-b border-solid border-gray-100 pb-5 mb-8">
        <Button
          variant="text"
          size="large"
          sx={{
            fontSize: 16,
            color: currentCats == 0 ? "" : "#5c5c5c",
          }}
          onClick={() => handleChangeTab(0)}
        >
          <LangText
            name={{
              cn: "全部",
              en: "All",
              ja: "全て",
            }}
          ></LangText>
        </Button>
        {cats.map((i) => (
          <li key={i.id}>
            <Button
              variant="text"
              size="large"
              sx={{
                fontSize: 16,
                color: currentCats == i.id ? "" : "#5c5c5c",
              }}
              onClick={() => handleChangeTab(i.id)}
            >
              <LangText name={i.name}></LangText>
            </Button>
          </li>
        ))}
      </ul>

      <ul
        className="grid sm:grid-cols-2 gap-x-3 gap-y-5
      md:grid-cols-4 md:gap-x-5 md:gap-y-5"
      >
        {products.map((i) => (
          <li key={i.id}>
            <Card variant="outlined">
              <CardMedia
                className="h-[250px] bg-gray-100"
                image={
                  i.images ? process.env.NEXT_PUBLIC_HOST + i.images[0].src : ""
                }
                title="Product image"
                sx={{
                  backgroundSize: "100%",
                }}
              />
              <CardContent
                dangerouslySetInnerHTML={{ __html: i.abstract["cn"] }}
              ></CardContent>
            </Card>
          </li>
        ))}
      </ul>

      {products.length == 0 && (
        <div>
          <Empty></Empty>
        </div>
      )}
    </section>
  );
};

export default Products;
