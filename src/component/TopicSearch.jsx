import { useState } from "react";

import Card from "./Card.jsx";
import './topicsearch.css';
import { datas } from '../constants.js';

function Catalogue() {

    const categories = [...new Set(datas.map(item => item.category))];

    const [filteredDatas, setFilteredDatas] = useState(datas);
    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState("ALL");

    const handleFilter = function() {
        let newFilteredDatas = datas.filter(data =>
            (data.name.toLowerCase().includes(searchText.toLowerCase()) || searchText === "") && (category === 'ALL' || data.category === category)
        );
        setFilteredDatas(newFilteredDatas);
    }
    
    const handleClear = function() {
        setCategory("ALL");
        setSearchText("");
        setFilteredDatas(datas);
    }

    return(
        <>  
            <header>Catalogue Management</header>
            <div className="filter-container">
                <label htmlFor="search">Search: </label>
                <input type="text" id="search" placeholder="Enter topic" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <select name="" id="" value={category} onChange={(e) => setCategory(e.target.value)} >
                    <option value="ALL">All</option>
                    {
                        categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))
                    }
                </select>
                <br />
                <button className="clear-btn" onClick={handleClear}>Clear</button>
                <button className="filter-btn" onClick={handleFilter}>Filter</button>
            </div>
            <div className="card-container">
                {
                    filteredDatas.length === 0 ?
                        <p>No Topics Found</p> :
                        filteredDatas.map((data, index) => (
                            <Card key={index} name={data.name} category={data.category} />
                        ))
                }
            </div>
        </>
    );
}

export default Catalogue;