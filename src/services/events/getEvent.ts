import { Event } from "../../models/Event";
import axios from "axios";
export const getEvent = async (id: number): Promise<Event> => {
  try {
    const res = await axios.get(`http://localhost:3000/events/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return {} as Event; // Return an empty object in case of an error
  }
};
