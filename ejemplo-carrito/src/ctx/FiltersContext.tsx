import * as React from 'react';
import { FilterContextType, IFilter } from '../types/Filter'
import { Product } from "../service/Products";

export const FiltersContext = React.createContext<FilterContextType>({} as FilterContextType);

const FiltersProvider = ({ children }) => {

    const [filter, setFilter] = React.useState<IFilter>({
        queryText: "",
        category: 'all',
        minPrice: 0
    });

    const setFilterData = (newFilter: IFilter) => {
        setFilter(newFilter)
    }

    const filterData = (data: Product[]) => {
        return data.filter((dat) => {
            return dat.price >= filter.minPrice &&
                (
                    filter.category === 'all' ||
                    dat.category === filter.category.toLowerCase()
                ) &&
                (filter.queryText === ""
                    || dat.title.toLowerCase().includes(filter.queryText.toLowerCase()))
        })
    };

    return <FiltersContext.Provider value={{ filter, setFilterData, filterData }}> {children} </ FiltersContext.Provider>;

}

export default FiltersProvider