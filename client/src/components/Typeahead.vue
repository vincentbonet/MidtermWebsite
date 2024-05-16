<template>
    <div class="typeahead-container">
      <o-field class="typeahead-field">
        <o-autocomplete
          rounded
          expanded
          v-model="value"
          :data="dataArray"
          placeholder=" Search for a user"
          icon="search"
          clearable
          @scroll="handleScroll"
        >
          <template #empty>No results found.</template>
          <template #custom="{ item }">
            <div class="custom-item">
              <div>{{ item.name }}</div>
              <div class="item-details">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </template>
        </o-autocomplete>
      </o-field>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  
  let value = ref('');
  let dataArray = ref<Array<any>>([]);
  let page = ref(1);
  let pageSize = ref(50);
  
  watch(value, async (newValue) => {
    if (newValue.length > 2) {
      await fetchData();
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
  
  <style scoped>
  .typeahead-container {
    position: relative;
  }
  
  .typeahead-field {
    width: 100%;
  }
  
  .custom-item:hover {
    background-color: #edf2f7; 
  }
  
  .custom-item {
    display: flex;
    align-items: center;
    padding: 10px;
    transition: background-color 0.2s ease;
  }
  
  .item-details {
    margin-left: 10px;
  }
  
  .custom-item h4 {
    font-size: 0.9rem; 
    color: #333; 
  }
  
  .custom-item p {
    font-size: 0.8rem; 
    color: #666; 
  }
  </style>
  