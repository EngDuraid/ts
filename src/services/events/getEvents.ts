// import { Ref } from "vue";
import { Event } from "../../models/Event";
import axios from "axios";

//this function is void type and the events equals to out events in c#
// export const getEvents = async (events: Ref<Event[]>) => {
//   try {
//     // const res = await fetch(`http://localhost:3000/events`);
//     const res = await axios.get(`http://localhost:3000/events`);
//     // if (!res.ok) throw new Error(`Something went wrong`);
//     events.value = await res.data;
//   } catch (err) {
//     console.log(err);
//   }
// };

//this function is return type and the events equals to out events in c#
export const getEvents = async (): Promise<Event[]> => {
  try {
    const res = await axios.get("http://localhost:3000/events");
    return res.data;
  } catch (err) {
    console.log(err);
    return []; // Return an empty array in case of an error
  }
};
