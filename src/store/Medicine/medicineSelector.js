import { createSelector } from "@reduxjs/toolkit";

export const selectMedicine = (state) => state.medicine.medicine;
export const selectFilters = (state) => state.medicine.filters;
const selectFavoriteList = (state) => state.favorite.favoriteMedicine;

export const selectFilteredMedicine = createSelector(
  [selectMedicine, selectFavoriteList],
  (medicine, favoriteList) => {
    const contactList = sortMedicineList(medicine, favoriteList);
    return contactList;
  }
);

function sortMedicineList(medicine, favoriteList) {
  if (!medicine) {
    return [];
  }
  const sortByAlphabet = [...medicine].sort((a, b) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  );

  const favorites = sortByAlphabet.filter((med) =>
    favoriteList.some((fav) => fav._id === med._id)
  );
  const nonFavorites = sortByAlphabet.filter(
    (med) => !favoriteList.some((fav) => fav._id === med._id)
  );

  const sortedContacts = favorites.concat(nonFavorites);

  return sortedContacts;
}
