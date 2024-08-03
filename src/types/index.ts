export type Category = {
  strCategory: string;
};

// export type CategoryResponse = {
//   meals: Category[];
// };

export type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export type SearchForm = {
  search: string;
};

export type MealDetails = {
  [key: string]: string;
};
