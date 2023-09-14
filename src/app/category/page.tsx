import CategoryPage from "@/pages/category_page";
import { FunctionComponent } from "react";

interface CategoryProps {
  params: {
    name: any
  }
  searchParams: Param
}
interface Param {
  name: string
}
 
const Category: FunctionComponent<CategoryProps> = (props) => {
  const searchParam = props.searchParams

  return ( <CategoryPage category_name={searchParam.name} />);
}
 
export default Category;