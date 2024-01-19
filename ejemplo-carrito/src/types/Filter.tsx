import { Product } from "../service/Products";


export interface IFilter {
    queryText: string
    category: string
    minPrice: number
}

export type FilterContextType = {
    filter: IFilter;
    setFilterData: (filter: IFilter) => void;
    filterData: (data: Product[]) => Product[];
}