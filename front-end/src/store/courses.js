import { createSlice } from '@reduxjs/toolkit'
import { categories } from './categories';

const courses = [
  {
      name: "Pericia médica",
      categoryId: 1,
      url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
      description: "Curso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legal"
  },
  {
      name: "Perícia e Avaliação de Imóveis",
      categoryId: 1,
      url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
      description: "O curso mais completo do Brasil em Formação de Peritos Judiciais em Avaliação de Imóveis te capacita a atuar nos tribunais com a formação e/ou conhecimento que você já tem."
  },
  {
      name: "Direito do ser humano",
      categoryId: 4,
      url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
      description: "O curso mais completo do Brasil em Formação de Peritos Judiciais em Avaliação de Imóveis te capacita a atuar nos tribunais com a formação e/ou conhecimento que você já tem."
  },
  {
      name: "Pericia médica",
      categoryId: 2,
      url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericia médica",
      categoryId: 3,
      url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericia médica",
      categoryId: 1,
      url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericia médica",
      categoryId: 4,
      url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericia médica",
      categoryId: 1,
      url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericia médica",
      categoryId: 5,
      url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericia médica",
      categoryId: 3,
      url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericia médica",
      categoryId: 1,
      url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "dsadsa médica",
      categoryId: 1,
      url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericicxccca médica",
      categoryId: 2,
      url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Periciazzzzzz médica",
      categoryId: 3,
      url: "https://www.youtube.com/watch?v=EGpWsi-9tSo&ab_channel=sky",
      description: "Curso de pericia medica muito legal"
  },
].map((course, index) => {
  const categoryCourse = categories.find(categorie => categorie.id === course.categoryId);

  course.id = index + 1;
  course.name = `${course.id} ${course.name}`;
  course.categoryName = categoryCourse ? categoryCourse.name : "Categoria indefinida";

  return course;
});

const getCoursesHelper = (action) => {
  const {start, end, category, search} = action?.payload ?? {
    start: null,
    end: null,
    category: null,
    search: null,
  };

  const correspondingCoursesTotal = courses
    .filter(course => category ? course.categoryId == category : course)
    .filter(course => search ? course.name.toLowerCase().includes(search.toLowerCase()) || course.description.toLowerCase().includes(search.toLowerCase()) : course);

  let slicedItems = correspondingCoursesTotal;
  
  if(start != null && end != null) {
    slicedItems = correspondingCoursesTotal.slice(start , end);
  }

  return {
    items: slicedItems,
    total: correspondingCoursesTotal.length,
    start,
    end
  };
}

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    value: {
      items: [],
      total: 0,
      start: null,
      end: null
    },
  },
  reducers: {
    getCourses: (state, action) => {
      state.value = getCoursesHelper(action);
    },
  },
})

export const {
  getCourses,
  getCoursesByCategory,
} = coursesSlice.actions

export default coursesSlice.reducer