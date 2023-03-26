import { format } from 'date-fns';
import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { mockReserva, mockRooms } from '../mock';
import { getReservations, getRooms } from '../services';

export interface UserContextProps {
  user: any | null;
  setUser: React.Dispatch<any>;
  salas: ISala[];
  reservas: IReserva[] | null;
  handleSelectRoom: (item: ISala, index: number) => void;
  indexReserva: string | null;
  dateInicial: string;
  dateFinal: string;
  setDateInicial: React.Dispatch<string>;
  setDateFinal: React.Dispatch<string>;
  isAvailable: boolean;
}

export type ISala = (typeof mockRooms)[0];
export type IReserva = (typeof mockReserva)[0];

export const UserContext = createContext<UserContextProps>({} as UserContextProps);
export type Props = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = React.useState<any>(null);
  const [salas, setSalas] = React.useState<ISala[]>([]);
  const [dateInicial, setDateInicial] = React.useState<string>('');
  const [dateFinal, setDateFinal] = React.useState<string>('');
  const [reservas, setReservas] = React.useState<IReserva[] | null>(null);
  const [indexReserva, setIndexReserva] = React.useState<string | null>(null);
  const [idRoom, setIdRoom] = React.useState<string>('');

  const [isAvailable, setIsAvailable] = React.useState<boolean>(false);

  useEffect(() => {
    if (user) {
      getRooms().then((list) => setSalas(list));
      setInterval(() => {
        getRooms().then((list) => setSalas(list));
      }, 2000);
    }
  }, [user]);
  useEffect(() => {
    let sub: any;
    if (dateInicial && dateFinal) {
      getReservations(format(new Date(dateInicial), 'yyyy-MM-dd'), idRoom).then((reservations) => {
        setReservas(
          reservations.sort(
            (a: IReserva, b: IReserva) =>
              new Date(a.bookingdate + 'T' + a.bookingstart).getTime() -
              new Date(b.bookingdate + 'T' + b.bookingstart).getTime()
          )
        );

        let exist = false;
        const selectStart = new Date(dateInicial).getTime();
        const selectEnd = new Date(dateFinal).getTime();
        reservations.map((item: IReserva) => {
          const itemStart = new Date(item.bookingdate + 'T' + item.bookingstart).getTime();
          const itemEnd = new Date(item.bookingdate + 'T' + item.bookingend).getTime();
          if (selectStart >= itemEnd || selectEnd <= itemStart) {
            exist = false;
          } else {
            exist = true;
          }
        });
        setIsAvailable(exist);
      });
      sub = setInterval(() => {
        getReservations(format(new Date(dateInicial), 'yyyy-MM-dd'), idRoom).then((reservations) => {
          setReservas(
            reservations.sort(
              (a: IReserva, b: IReserva) =>
                new Date(a.bookingdate + 'T' + a.bookingstart).getTime() -
                new Date(b.bookingdate + 'T' + b.bookingstart).getTime()
            )
          );

          let exist = false;
          const selectStart = new Date(dateInicial).getTime();
          const selectEnd = new Date(dateFinal).getTime();
          reservations.map((item: IReserva) => {
            const itemStart = new Date(item.bookingdate + 'T' + item.bookingstart).getTime();
            const itemEnd = new Date(item.bookingdate + 'T' + item.bookingend).getTime();
            if (selectStart >= itemEnd || selectEnd <= itemStart) {
              exist = false;
            } else {
              exist = true;
            }
          });
          setIsAvailable(exist);
        });
      }, 2000);
    }

    return () => {
      clearInterval(sub);
    };
  }, [dateInicial, dateFinal]);

  async function handleSelectRoom(item: ISala, index: number) {
    setIndexReserva(item.name + String(index + 1));
    setIdRoom(item.id);
  }

  const value = useMemo(
    () => ({
      user,
      setUser,
      salas,
      reservas,
      handleSelectRoom,
      indexReserva,
      dateFinal,
      dateInicial,
      setDateFinal,
      setDateInicial,
      isAvailable,
    }),
    [user, salas, reservas, indexReserva, dateFinal, dateInicial, isAvailable]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUser(): UserContextProps {
  const userContext = useContext(UserContext);
  return { ...userContext };
}
