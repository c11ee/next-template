import { getProduct, getProductCate } from "@/apis/products";
import { Button, Card, CardContent, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import LangText from "../langText";
import Empty from "../empty";
import t from "@/i18n";

const Products = ({
  id,
  contentData,
}: {
  id?: number;
  contentData?: Content;
}) => {
  const [currentCats, setCurrentCats] = useState(id || 0);
  const types = ["hot", "new"];
  const [type, setType] = useState<Type>("hot");
  const { data: catsData } = getProductCate();
  const { data: productsData } = getProduct({ cid: currentCats, type });

  const [cats, setCats] = useState<ProductCate[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (catsData) {
      setCats(catsData?.data?.cats || []);
    }
    if (productsData) {
      setProducts(productsData?.data?.product || []);
    }
  }, [catsData, productsData]);

  function handleChangeTab(id: number) {
    setCurrentCats(id);
  }

  return (
    <section className="section px-global">
      <div className="title">
        <h1>
          {contentData && <LangText name={contentData?.name[0]}></LangText>}
        </h1>
        <p>
          {contentData && <LangText name={contentData?.abstract[0]}></LangText>}
        </p>
      </div>

      <ul className="flex flex-wrap justify-center gap-x-5 border-b border-solid border-gray-100 pb-5 mb-8">
        <Button
          variant="text"
          size="large"
          sx={{
            fontSize: 16,
            color: currentCats == 0 ? "" : "#5c5c5c",
          }}
          onClick={() => handleChangeTab(0)}
        >
          {t("allT")}
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

      {id ? (
        <ul className="flex mb-5">
          {types.map((i) => (
            <li key={i}>
              <Button
                variant="text"
                size="large"
                sx={{
                  fontSize: 15,
                  color: type == i ? "" : "#5c5c5c",
                }}
                onClick={() => setType(i as Type)}
              >
                {t(i)}
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}

      <ul
        className="grid grid-cols-2 gap-x-3 gap-y-5
      md:grid-cols-4 md:gap-x-5 md:gap-y-5"
      >
        {products.map((i) => (
          <li key={i.id}>
            <Card variant="outlined" className="h-full">
              <CardMedia
                className="h-[150px] sm:h-[360px] bg-gray-100"
                image={
                  i.images ? process.env.NEXT_PUBLIC_HOST + i.images[0].src : ""
                }
                title="Product image"
                sx={{
                  backgroundSize: "100%",
                }}
              />
              <CardContent className="!p-2 sm:!p-4">
                <LangText
                  className="text-sm md:text-base line-clamp-2"
                  name={i.abstract}
                ></LangText>
              </CardContent>
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
