import { apiCLient } from "../apiClient";
import { ApiResponse, Event } from "../../models/Event";
export default {
  getAllEvents(): Promise<ApiResponse<Event[]>> {
    return apiCLient.get("/companies");
  },
  getEventById(id: number): Promise<ApiResponse<Event>> {
    return apiCLient.get(`/companies/${id}`);
  },
};
