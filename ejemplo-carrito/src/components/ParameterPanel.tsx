import * as React from 'react';
import { FiltersContext } from '../ctx/FiltersContext'
import './ParameterPanel.css'
import { IFilter } from '../types/Filter';
import { dataCategory } from '../service/Products';

const ParameterPanel = () => {

    const { setFilterData } = React.useContext(FiltersContext)
    const [minPriceQuery, setMinPriceQuery] = React.useState(0)

    const minPriceFilterId = React.useId()
    const categoryFilterId = React.useId()

    const categories: string[] = dataCategory()

    const onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            searchInput: { value: string };
            dataCategory: { value: string };
            minPriceQuery: { value: string };
        }

        const dataText = target.searchInput.value;
        const dataCategory = target.dataCategory.value;
        const dataPrice = target.minPriceQuery.value;

        const newFilter: IFilter = {
            queryText: dataText === null ? '' : dataText.toString(),
            category: dataCategory === null ? '' : dataCategory.toString(),
            minPrice: dataPrice === null ? 0 : Number(dataPrice)
        }

        setFilterData(newFilter)
    }

    const handleChangeMinPrice = (event) => {
        event.preventDefault();
        const price = Number(event.target.value);
        setMinPriceQuery(price);
    }

    const handleChangeCategory = (event) => {
        event.preventDefault();
    }

    const queryTextOnChange = (event: React.SyntheticEvent) => {
        event.preventDefault();
    }

    return (
        <section>
            <h1>VIRTUAL SHOP  🛒</h1>
            <div >
                <form onSubmit={onSubmit} style={{ width: '100%' }}>
                    <section className='search_panel_row'>
                        <input name='searchInput' placeholder='Buscar producto:'
                            className='searchInputStyle' onChange={queryTextOnChange} />
                        <button type='submit' >Buscar</button>
                    </section>
                    <section className='search_panel_row'>
                        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                        <input
                            type='range' id={minPriceFilterId} name="minPriceQuery"
                            min='0' max='1000' value={minPriceQuery}
                            onChange={handleChangeMinPrice}
                        />
                        <span>${minPriceQuery}</span>

                        <label htmlFor={categoryFilterId}>Categoría</label>
                        <select id={categoryFilterId} onChange={handleChangeCategory}
                            name="dataCategory">
                            <option value='all'>Todas</option>
                            {
                                categories.map((cat) => {
                                    return (
                                        <option key={cat.substring(0, 3)}
                                            value={cat}>
                                            {cat}
                                        </option>)
                                })
                            }
                        </select>
                    </section>
                </form>
            </div>
        </section>
    )


}

export default ParameterPanel