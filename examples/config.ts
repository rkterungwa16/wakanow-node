import dotenv from "dotenv";

dotenv.config();
export const config = {
  accessToken: process.env.ACCESS_TOKEN,
  selectData: process.env.SELECT_DATA,
  bookingData: process.env.BOOKING_DATA,
};
