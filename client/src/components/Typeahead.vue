<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Oruga from '@oruga-ui/oruga-next';

let value = ref('');
let dataArray = ref<Array<any>>([]);
let page = ref(1);
let pageSize = ref(50);

watch(value, async (newValue) => {
    if (newValue.length > 2) {
        const response = await fetch(`api/v1/users?search=${newValue}&page=${page.value}&pageSize=${pageSize.value}`);
        const data = await response.json();
        dataArray.value = data;
    } else {
        dataArray.value = [];
    }
});

const handleScroll = async (event: UIEvent) => {
    const target = event.target as HTMLDivElement;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
        page.value++;
        await fetchData();
    }
};

const fetchData = async () => {
    if (value.value.length > 2) {
        const response = await fetch(`api/v1/users?search=${value.value}&page=${page.value}&pageSize=${pageSize.value}`);
        const data = await response.json();
        dataArray.value.push(...data);
    }
};

onMounted(fetchData);
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
                @scroll="handleScroll"
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