import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { handleUpdateFilters } from "store/Medicine/medicineSlice";
import { selectFilters } from "store/Medicine/medicineSelector";
import { getFilterMedicineThunk } from "store/Medicine/medicineThunk";
import {
  FilterBtnBoxStyle,
  FilterFormLabelStyle,
  FilterFromToBoxStyle,
  FilterMedicineFormStyle,
  FilterSubmitBtnStyle,
} from "./FilterMedicine.styled";

function FilterMedicine() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const [search, setSearch] = useState(filters.search);
  const [priceFrom, setPriceFrom] = useState(filters.priceFrom);
  const [priceTo, setPriceTo] = useState(filters.priceTo);
  const [fieldChange, setFieldChange] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const filterChange = {
      search: search,
      priceFrom,
      priceTo,
    };
    dispatch(getFilterMedicineThunk(filterChange));
    dispatch(handleUpdateFilters(filterChange));
    setFieldChange(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "search") {
      setSearch(value);
      setFieldChange(true);
      if (!value) {
        setFieldChange(false);
      }
    }
    if (name === "from") {
      setPriceFrom(value);
      setFieldChange(true);
      if (!value) {
        setFieldChange(false);
      }
    }
    if (name === "to") {
      setPriceTo(value);
      setFieldChange(true);
      if (!value) {
        setFieldChange(false);
      }
    }
  };
  const handelResetFilter = () => {
    if (!search && !priceFrom && !priceTo) {
      return;
    }
    setSearch("");
    setPriceFrom("");
    setPriceTo("");
    if (!filters.search && !filters.priceFrom && !filters.priceTo) {
      return;
    }
    const filterReset = {
      search: "",
      priceFrom: "",
      priceTo: "",
    };
    dispatch(handleUpdateFilters(filterReset));
    dispatch(getFilterMedicineThunk(filterReset));
    setFieldChange(false);
  };

  return (
    <FilterMedicineFormStyle onSubmit={handleFormSubmit}>
      <FilterFormLabelStyle>
        <span>Search</span>
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
        />
      </FilterFormLabelStyle>
      <FilterFormLabelStyle>
        <span>Price</span>
        <FilterFromToBoxStyle>
          <span>From</span>
          <input
            type="text"
            name="from"
            value={priceFrom}
            onChange={handleChange}
            autoComplete="off"
          />
        </FilterFromToBoxStyle>
        <FilterFromToBoxStyle>
          <span>To</span>
          <input
            type="text"
            name="to"
            value={priceTo}
            onChange={handleChange}
            autoComplete="off"
          />
        </FilterFromToBoxStyle>
      </FilterFormLabelStyle>
      <FilterBtnBoxStyle>
        <FilterSubmitBtnStyle
          type="button"
          className="btn-submit"
          onClick={handelResetFilter}
          aria-label="Reset filter"
        >
          <GrPowerReset />
        </FilterSubmitBtnStyle>
        <FilterSubmitBtnStyle
          type="submit"
          className="btn-submit"
          disabled={!fieldChange}
          aria-label="Search"
        >
          <FaSearch />
        </FilterSubmitBtnStyle>
      </FilterBtnBoxStyle>
    </FilterMedicineFormStyle>
  );
}

export default FilterMedicine;
