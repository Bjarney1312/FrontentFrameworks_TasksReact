import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'lanes',
    initialState: {
        value: [
            {
                id: "lane1",
                icon: "list",
                status: 0,
                title: "To Do",
                description: "All tasks you need to do",
            },
            {
                id: "lane2",
                icon: "hourglass-start",
                status: 1,
                title: "In Progress",
                description: "All tasks currently in progress",
            },
            {
                id: "lane3",
                icon: "check-circle",
                status: 2,
                title: "Done",
                description: "All completed tasks",
            },
        ],
    }
});

export const selectLanes = state => state.lanes.value;

export default slice.reducer;