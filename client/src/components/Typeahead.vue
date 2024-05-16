<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Oruga from '@oruga-ui/oruga-next';

</script>

<template>
    <div>
        <o-field>
            <o-autocomplete
                v-model="value"
                rounded
                expanded
                placeholder="Search for a user"
                icon="search"
                clearable
                open-on-focus
                :data="dataArray"
                >
                <template #empty>No results found.</template>
                <template #custom="{ item }">
                    <div class ="custom-item">{{ item.name }}
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.description }}</p>
                    </div>
                </template>
            </o-autocomplete>
        </o-field>
    </div>
</template>

<style scoped>
.custom-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.custom-item h4{
    font-size: 0.8rem;
    color: #666;
}
.custom-item p{
    font-size: 0.7rem;
    color: #999;
}
</style>