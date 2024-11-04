import { createStore } from 'vuex';

const store = createStore({
  state: {
    carListData: [
      {
        id: 1,
        imgSrc: "https://cdn1.riastatic.com/photosnew/auto/photo/bmw_x5__574668241fx.webp",
        brand: "BMW",
        model: "X5",
        mileage: 150000,
        year: 2015,
        price: 1240128
      },
      {
        id: 2,
        imgSrc: "https://cdn0.riastatic.com/photosnew/auto/photo/porsche_taycan__562341380fx.webp",
        brand: "Porsche",
        model: "Panamera",
        mileage: 70000,
        year: 2019,
        price: 2283291
      },
      {
        id: 3,
        imgSrc: "https://cdn4.riastatic.com/photosnew/auto/photo/mercedes-benz_g-class__574203259fx.webp",
        brand: "Mercedes-Benz",
        model: "G-Class",
        mileage: 68000,
        year: 2012,
        price: 2349270
      }
    ],
    consultations: [],
    sortKey: 'price',
    sortOrder: 'asc',
    selectedCars: [null, null],
  },
  getters: {
    sortedItems: (state) => state.carListData,
    selectedCars: (state) => state.selectedCars,
    consultations: (state) => state.consultations
  },
  mutations: {
    SET_SORT_ORDER(state, order) {
      state.sortOrder = order;
    },
    SORT_ITEMS(state, criterion) {
      state.carListData.sort((a, b) => {
        if (state.sortOrder === 'asc') {
          return a[criterion] > b[criterion] ? 1 : -1;
        } else {
          return a[criterion] < b[criterion] ? 1 : -1;
        }
      });
    },
    SELECT_CAR(state, { index, car }) {
      state.selectedCars[index] = car;
    },
    ADD_CONSULTATION(state, consultation) {
        state.consultations.push(consultation);
    }
  },
  actions: {
    setSortOrder({ commit }, order) {
      commit('SET_SORT_ORDER', order);
    },
    sortItems({ commit }, criterion) {
      commit('SORT_ITEMS', criterion);
    },
    selectCar({ commit }, payload) {
      commit('SELECT_CAR', payload);
    },
    addConsultation({ commit }, consultation) {
        commit('ADD_CONSULTATION', consultation);
    }
  },
  modules: {},
});

export default store;
