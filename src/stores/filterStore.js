import { defineStore } from 'pinia'

export const useFilterStore = defineStore({
    id: 'filters',
    state: () => ({
        searchTerm: '',
        filters: [],
    }),
    actions: {
        setSearchTerm(searchTerm) {
            console.log(searchTerm);
            this.searchTerm = searchTerm;
        },
        setFilters(filters) {
            this.filters = filters;
        },
    }
});
