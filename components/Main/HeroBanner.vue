<template>
  <section class="flex flex-col items-center">
    <BaseExpandableImage :img-src="'cards.jpg'" alt="Fidgrove Features" />
    <div class="mt-6 lg:mt-16">
      <p
        class="pb-4 text-left"
        v-text="
          'Fidgrove is data management and data analysis at its best, leveraging on the latest relevant technology wrapped in a cloud-based user friendly solution.'
        "
      />
      <p
        class="text-left"
        v-text="
          'Fidgrove aims to help you improve driving performance, get to optimized setups quickly, and support you through racing events. We continuously adding features to get closer to accomplish this mission. For the casual sim racer and professional esports teams alike.'
        "
      />
    </div>
  </section>
</template>
