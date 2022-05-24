import API from "@/api/api";

export default {
    getAllActivites() {
        return API.get('/activity');
    },

    deleteActivity(id?: number) {
        return API.delete(`/activity/${id}`);
    },

    addActivity(data: { user_id?: number, description: string }) {
        return API.post('/activity', data);
    }
};
