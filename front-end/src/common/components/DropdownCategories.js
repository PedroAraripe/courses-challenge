import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getCategories } from "../../store/categories";
import { WrapperDropdownCategorie } from "../styles";

export default function DropdownCategories() {
  const categories = useSelector((state) => state.categories.value);
  const [dropdownText, setDropdownText] = useState('Todas');
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || 1;
  const searchParam = searchParams.get('s');
  const category = searchParams.get('category');

  useEffect(() => {
    dispatch(getCategories())
}, [])

  useEffect(() => {
    const currentCategory = categories.find(cat => cat.id == category);

    if(category && currentCategory) {
      setDropdownText(currentCategory.name);

    } else if(category) {
      setDropdownText("Categoria indefinida");
      
    } else {
      setDropdownText("Todas");

    }
    
}, [categories, category, currentPage, searchParam])
  
  function handleChangeCategorie(category) {
    
    const newSearchParams = {};
    
    if(searchParam) {
      newSearchParams.s = searchParam;
    }
    
    newSearchParams.page = currentPage;
    newSearchParams.category = category?.id || "";

    setSearchParams(newSearchParams);
  };


  return (
    <WrapperDropdownCategorie
      className="dropdown"
    >
        Categoria: 
        <button
          className="dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
            {dropdownText}
        </button>
        <ul className="dropdown-menu py-0" aria-labelledby="dropdownMenuButton1">
          <button
            onClick={() => handleChangeCategorie()}
            className="px-3 py-2"
            style={{
                textDecoration: "none",
                color: 'inherit',
            }}
          >
            Todas
          </button> 
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleChangeCategorie(category)}
              className="px-3 py-2"
              style={{
                  textDecoration: "none",
                  color: 'inherit',
              }}
            >
              {category.name}
            </button> 
          ))}
        </ul>
    </WrapperDropdownCategorie>

  )
}