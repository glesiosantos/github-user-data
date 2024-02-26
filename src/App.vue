<script setup></script>

<template>
  <template>
    <h1 class="text-white">TEste</h1>
  </template>
  <div class="container mx-auto py-10 flex flex-col items-center gap-5">
    <nav class="flex gap-3">
      <RouterLink to="/" 
        class="text-white uppercase text-md font-bold hover:text-red-500 hover:underline">Home</RouterLink>
      <RouterLink to="/search"
        class="text-white uppercase text-md font-bold hover:text-red-500 hover:underline">Search</RouterLink>
    </nav>
    <RouterView/>
  </div>
</template>

