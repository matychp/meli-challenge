import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../config/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchResults,
  searchTermSelector,
} from "../../store/features/searchSlice";
import { useRouter } from "next/router";
import { titleUpdated } from "../../store/features/browserSlice";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const searchTermSelected = useSelector(searchTermSelector);

  useEffect(() => {
    if (searchTermSelected !== "") {
      setSearchTerm(searchTermSelected);
    }
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    search();
  };

  const onSearchHandler = () => {
    search();
  };

  const search = () => {
    dispatch(titleUpdated({ value: searchTerm }));
    dispatch(fetchResults(searchTerm));
    if (searchTerm !== "") {
      router.push(`/items?search=${searchTerm}`);
    } else {
      router.push(`/`);
    }
  };

  return (
    <SearchForm onSubmit={onSubmitHandler}>
      <SearchInput
        id="search"
        placeholder="Nunca dejes de buscar"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        autoFocus
        tabIndex={0}
      />
      <SearchIcon onClick={onSearchHandler}>
        <img src={"/assets/ic_Search.png"} />
      </SearchIcon>
    </SearchForm>
  );
}

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  border: 0px;
  padding: 5px 10px 7px 10px;
  font-size: 18px;
  border-radius: 4px 0px 0px 4px;
  ::placeholder {
    color: ${colors.navbar.search.placeholder};
  }
`;

const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 40px;
  border-radius: 0px 4px 4px 0px;
  color: ${colors.navbar.search.foreground};
  background-color: ${colors.navbar.search.background};
`;

export default SearchBar;
