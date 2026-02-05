import { createSlice, nanoid } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: {
        items: [],
        filters: "all"
    },
    reducers: {
        addTask: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            payload: (text) => {
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        completed: false
                    }
                }
            }
        },
        toggleTask: (state, action) => {
            const task = state.items.find(t => t.id === action.payload);
            if (task) return task.completed = !task.completed
        },
        deleteTasks: (state, action) => {
            state.items = state.items.filter(t => t.id !== action.payload)
        },
        setFilters: (state, action) => {
            state.filters = action.payload
        }
    }
})

export const { addTask, payload, toggleTask, deleteTasks, setFilters } = taskSlice.actions;
export default taskSlice.reducer;