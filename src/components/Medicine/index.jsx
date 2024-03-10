import MedicineItem from "components/MedicineItem'";
import React from "react";
import { MedicineContainer, MedicineListStyle } from "./Medicine.styled";
import EmptyMessage from "components/EmptyMessage";
import { useSelector } from "react-redux";
import { selectFilteredMedicine } from "store/Medicine/medicineSelector";
import FilterMedicine from "components/FilterMedicine";

function Medicine() {
  const medicineList = useSelector(selectFilteredMedicine);
  return (
    <MedicineContainer>
      <FilterMedicine />
      {medicineList.length ? (
        <MedicineListStyle>
          {medicineList.map((item) => (
            <MedicineItem key={item._id} data={item} />
          ))}
        </MedicineListStyle>
      ) : (
        <EmptyMessage something="Medicine not found " />
      )}
    </MedicineContainer>
  );
}

export default Medicine;
