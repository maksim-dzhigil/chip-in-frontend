import store from "../../store";
import CategoryItem from "./CategoryItem";
import { FC } from "react";
import Container from "../Generic/Container";

const CategoryList:FC = () => {
  const categories = store.product.categories;

  return (
    <Container>
      {categories.map((category) => {
        return category.products.length ? (
          <CategoryItem category={category} key={category.id}/>
        ) : null;
      })}
    </Container>
  );
};


export default CategoryList;
