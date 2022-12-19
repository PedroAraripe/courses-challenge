export const categoriesToShow = [
  {
      title: "Direito",
      categoryId: 1,
  },
  {
      title: "Perícia judicial",
      categoryId: 2
  },
  {
      title: "Desenvolvimento",
      categoryId: 4
  },
].map(course => {
    course.seeAllRoute = `/courses?category=${course.categoryId}`;

    return course;
});