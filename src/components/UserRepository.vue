<script setup>
defineProps({
    repo: {
        full_name: String,
        description: String,
        html_url: String
    }
})
</script>

<template>
    <article class="flex flex-col items-center">
        <h3 class="text-white text-md">{{ repo.full_name }}</h3>
        <p class="text-white text-justify">{{ repo.description }}</p>
        <a :href="repo.html_url" class="text-red-500 text-base" target="_blank">Ver no Github</a>
    </article>
</template>