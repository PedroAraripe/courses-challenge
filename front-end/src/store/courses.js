import { createSlice } from '@reduxjs/toolkit'
import { categoriesToShow } from '../pages/home/constants';
import { categories } from './categories';

export let courses = [
  {
      name: "Pericia médica",
      categoryId: 1,
      url: "https://www.youtube.com/embed/3LWzQrUiUEE",
      description: "Curso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legalCurso de pericia medica muito legal"
  },
  {
      name: "Perícia e Avaliação de Imóveis",
      categoryId: 1,
      url: "https://www.youtube.com/embed/3LWzQrUiUEE",
      description: "O curso mais completo do Brasil em Formação de Peritos Judiciais em Avaliação de Imóveis te capacita a atuar nos tribunais com a formação e/ou conhecimento que você já tem."
  },
  {
      name: "Direito do ser humano",
      categoryId: 4,
      url: "https://www.youtube.com/embed/3LWzQrUiUEE",
      description: "O curso mais completo do Brasil em Formação de Peritos Judiciais em Avaliação de Imóveis te capacita a atuar nos tribunais com a formação e/ou conhecimento que você já tem."
  },
  {
      name: "Pericia médica",
      categoryId: 2,
      url: "https://www.youtube.com/embed/3LWzQrUiUEE",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericia médica",
      categoryId: 3,
      url: "https://www.youtube.com/embed/3LWzQrUiUEE",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericia médica",
      categoryId: 1,
      url: "https://www.youtube.com/embed/3LWzQrUiUEE",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericia médica",
      categoryId: 4,
      url: "https://www.youtube.com/embed/3LWzQrUiUEE",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericia médica",
      categoryId: 1,
      url: "https://www.youtube.com/embed/3LWzQrUiUEE",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericia médica",
      categoryId: 5,
      url: "https://www.youtube.com/embed/3LWzQrUiUEE",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericia médica",
      categoryId: 3,
      url: "https://www.youtube.com/embed/3LWzQrUiUEE",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericia médica",
      categoryId: 1,
      url: "https://www.youtube.com/embed/3LWzQrUiUEE",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "dsadsa médica",
      categoryId: 1,
      url: "https://www.youtube.com/embed/3LWzQrUiUEE",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Pericicxccca médica",
      categoryId: 2,
      url: "https://www.youtube.com/embed/3LWzQrUiUEE",
      description: "Curso de pericia medica muito legal"
  },
  {
      name: "Periciazzzzzz médica",
      categoryId: 3,
      url: "https://www.youtube.com/embed/3LWzQrUiUEE",
      description: "Curso de pericia medica muito legal"
  },
].map((course, index) => {
  const categoryCourse = categories.find(category => category.id === course.categoryId);

  course.id = index + 1;
  course.name = `${course.id} ${course.name}`;
  course.categoryName = categoryCourse ? categoryCourse.name : "Categoria indefinida";

  return course;
});

export const getCoursesHelper = (action) => {
  const {start, end, category, search, coursesParams, isUserCourses} = action?.payload ?? {
    start: null,
    end: null,
    category: null,
    search: null,
  };

  const correspondingCoursesTotal = courses
    .filter(course => isUserCourses ? coursesParams && coursesParams.includes(course.id): course)
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
    courses: {
      items: [],
      total: 0,
      start: null,
      end: null,
    },
    course: {},
    categories: {}
  },
  reducers: {
    getCourses: (state, action) => {
      state.courses = getCoursesHelper(action);
    },
    getHomeCategories: (state, action) => {
      categoriesToShow.map(category => {
        state.categories[category.categoryId] = {
          ...getCoursesHelper({
            payload: {
              start: 0,
              end: 9,
              category: category.categoryId
            }
          }),
          title: category.title,
          seeAllRoute: category.seeAllRoute,
          subTitle: "Categoria"
        }
      })
    },
    removeCourse: (state, action) => {
      const { id } = action?.payload;
      
      courses = courses.filter(course => course.id != id);
      state.courses.items = state.courses.items.filter(course => course.id != id);
      state.total = state.courses.items.length;
    },
    getCourse: (state, action) => {
      const { id } = action?.payload;
      
      state.course = state.courses.items.find(course => course.id == id);
    },
    clearCourse: (state) => {
      state.course = {};
    },
    createCourse: (state, action) => {
      const {
        name,
        categoryId,
        url,
        description,
      } = action?.payload;

      courses.push({
        name,
        categoryId,
        url,
        description,
        id: courses.length
      })
    },
    updateCourse: (state, action) => {
      const {
        id,
        name,
        categoryId,
        url,
        description,
      } = action?.payload;

      const updatedItem = {
        name,
        categoryId,
        url,
        description,
      }

      courses = JSON.parse(JSON.stringify(courses)).map(course => {
        if(course.id == id) {
          console.log("achou", course, Object.entries(updatedItem))
          Object.keys(updatedItem).map(key => {
            course[key] = updatedItem[key];
          })
        }

        return course;
      });

      state.courses.items = JSON.parse(JSON.stringify(state.courses.items)).map(course => {
        if(course.id == id) {
          Object.keys(updatedItem).map(key => {
            course[key] = updatedItem[key];
          })
        }

        return course;
      });

      state.total = state.courses.items.length;
    },
  },
})

export const {
  getCourses,
  getHomeCategories,
  removeCourse,
  getCourse,
  clearCourse,
  createCourse,
  updateCourse,
} = coursesSlice.actions

export default coursesSlice.reducer