<template>
    <div class="car-item">
      <img :src="carData.imgSrc" class="car-image">
      <p>Бренд: {{ carData.brand }}</p>
      <p>Модель: {{ carData.model }}</p>
      <p>Пробіг: {{ carData.mileage }}</p>
      <p>Рік випуску: {{ carData.year }}</p>
      <p>Ціна: {{ carData.price }} гривень</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      carData:{
        type: Object,
        default: () => ({}),
      }
    }
  }
</script>

<style>
.car-item {
  border: 1px solid #ddd; 
  border-radius: 8px; 
  padding: 16px; 
  display: flex; 
  gap: 16px; 
  background-color: #fff; 
  transition: box-shadow 0.3s; 
}

.car-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
}

.car-image {
  max-width: 150px; 
  max-height: 100px; 
  height: auto; 
  border-radius: 4px; 
  object-fit: cover; 
}

.car-details {
  flex-grow: 1;
}

.car-brand, .car-model, .car-mileage, .car-year, .car-price {
  margin: 0; 
  font-size: 14px; 
  line-height: 1.5; 
}

.car-price {
  font-weight: bold; 
  color: #2c3e50; 
}
</style>