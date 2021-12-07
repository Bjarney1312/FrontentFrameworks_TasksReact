import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'tasks',
    initialState: {
        tasks:
        {
            1: {
                id: 1,
                title: "Learn JavaScript",
                description: "read a book on Javascript",
                status: 0,
                fälligkeit: "02.11.21",
            },
            2: {
                id: 2,
                title: "Learn Vue",
                description: "read a book on Vue",
                status: 1,
                fälligkeit: "03.11.21",
            },
            3: {
                id: 3,
                title: "Build something awesome",
                description: "Get an idea",
                status: 0,
                fälligkeit: "04.11.21",
            },
        },
    },
    reducers: {
        nextState: (state, action) => {
            state.tasks[action.payload.id].status = action.payload.status + 1;
        },
        saveTask: (state, action) => {
            state.tasks[action.payload.id] = action.payload;
        },
        setState: (state, action) => {
            state.tasks = action.state.tasks;
        }
    },
});

export const selectTasks = state => state.tasks.tasks;
export default slice.reducer;
export const { nextState, saveTask } = slice.actions;

// erstes tasks bezieht sich auf name, zweite auf tasksobjekt