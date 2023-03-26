import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getRooms = async () => {
  const { data } = await api.get('/room');
  //console.log(data);
  return data;
};

export const getReservations = async (bookingdate: string, id: string) => {
  const { data } = await api.post('/reservation/date', { bookingdate, id });
  return data;
};

export const createReservation = async ({
  description,
  bookingdate,
  bookingstart,
  bookingend,
  userid,
  id,
}: {
  description: string;
  bookingdate: string;
  bookingstart: string;
  bookingend: string;
  userid: string;
  id: string;
}) => {
  const { data } = await api.post('/reservation', {
    bookingdate,
    id,
    description,
    bookingstart,
    bookingend,
    userid,
  });
  return data;
};
