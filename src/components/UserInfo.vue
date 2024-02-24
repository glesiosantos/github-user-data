<script setup>
defineProps(['avatarUrl', 'login', 'name', 'bio', 'company'])
</script>

<template>
    <div class="flex flex-col items-center px-5">
        <img :src="avatarUrl" class="w-60 h-60 rounded-full" /> avatar
        <strong class="text-white ">@{{ login }}</strong>
        <h2 class="text-red-500 text-4xl font-bold my-2">{{ name }}</h2>
        <h3 class="text-white">{{ company }}</h3>
        <span class="text-white text-justify my-5">{{ bio ? bio : '...' }}</span>
    </div>
</template>