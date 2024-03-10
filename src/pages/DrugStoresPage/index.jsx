import { useEffect, useState } from "react";
import Medicine from "components/Medicine";
import ShopsBar from "components/ShopeBar";
import { useDispatch } from "react-redux";
import { getAllMedicineThunk } from "store/Medicine/medicineThunk";
import { DrugStoresPageWrappStyle } from "./DrugStoresPage.styled";

function DrugStoresPage() {
  const [params, setParams] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMedicineThunk(params));
  }, [dispatch, params]);

  return (
    <DrugStoresPageWrappStyle className="container">
      <ShopsBar changeShop={setParams} params={params} />
      <Medicine />
    </DrugStoresPageWrappStyle>
  );
}

export default DrugStoresPage;
