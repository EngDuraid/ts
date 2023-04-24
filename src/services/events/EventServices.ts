import { apiCLient } from "../apiClient";
// import { Event } from "../../models/Event";

// //using apiClient to get all events
// export const getAllEvents: Promise<Event[]> = apiCLient.get("/events");

// //using apiClient to get one event
// export const getEventById: Promise<Event>;
// (id: number) => {
//   return apiCLient.get(`/events/${id}`);
// };

export default {
  getAllEvents(): Promise<Event[]> {
    return apiCLient.get("/events");
  },
  getEventById(id: number): Promise<Event> {
    return apiCLient.get(`/events/${id}`);
  },
};
