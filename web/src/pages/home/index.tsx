/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import React from 'react';
import Room from '../../components/room';
import { useUser } from '../../contexts/user';
import { createReservation } from '../../services';

import { Container, Content, Detail, RoomView } from './styles';

const Home: React.FC = () => {
  const { user } = useUser();
  const { salas, reservas, indexReserva, dateInicial, setDateInicial, dateFinal, setDateFinal, isAvailable } =
    useUser();

  async function handleSubmitReserva(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const props = Object.fromEntries(formData) as unknown as any;

    createReservation({
      description: props.description,
      bookingdate: format(new Date(dateInicial as string), 'yyyy-MM-dd'),
      bookingstart: format(new Date(dateInicial as string), 'HH:mm'),
      bookingend: format(new Date(dateFinal as string), 'HH:mm'),
      id: reservas ? reservas[0].room.id : '',
      userid: user.email,
    });

    form.reset();
  }

  return (
    <Container>
      <Content>
        <RoomView>
          <h1 className="title">Salas de Reuniões</h1>
          <div className="carousel">
            {salas.map((item, index) => (
              <Room
                item={item}
                index={index}
                key={item.id}
                selected={indexReserva ? indexReserva.replace(item.name, '').trim() === String(index + 1) : false}
              />
            ))}
          </div>
        </RoomView>
        {indexReserva && (
          <Detail>
            <div className="reserva">
              <h1>Reservar - {indexReserva}</h1>
              <div className="inputView">
                <div className="rowDate">
                  <div className="date">
                    <label>Selecione a data e hora de inicio:</label>
                    <input
                      type="datetime-local"
                      name="dateinicial"
                      value={dateInicial}
                      onChange={(e) => setDateInicial(e.target.value)}
                    />
                  </div>
                  <div className="date">
                    <label>Selecione a data e hora final:</label>
                    <input
                      type="datetime-local"
                      name="dateinicial"
                      value={dateFinal}
                      onChange={(e) => setDateFinal(e.target.value)}
                    />
                  </div>
                </div>

                {dateInicial && dateFinal && (
                  <>
                    {reservas &&
                      reservas.map((item) => (
                        <div className="reserva" key={item.id}>
                          <h1>Reserva</h1>
                          <label>Reservado por: {item.userid}</label>
                          <label>Tema da reserva: {item.description}</label>
                          <div className="row">
                            <div className="content">
                              <label>Hora de inicio</label>
                              <p>
                                {format(new Date(item.bookingdate + 'T' + item.bookingstart), 'dd/MM/yyyy  HH:mm:ss')}
                              </p>
                            </div>
                            <div className="content">
                              <label>Hora de fim</label>
                              <p>
                                {' '}
                                {format(new Date(item.bookingdate + 'T' + item.bookingend), 'dd/MM/yyyy  HH:mm:ss')}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    <div className="footer">
                      {!isAvailable ? (
                        <form onSubmit={handleSubmitReserva}>
                          <p>A data selecionada está disponivel</p>
                          <label>
                            Se deseja reservar esta sala adicione uma descricao
                            <br />e clique em reservar?{' '}
                          </label>
                          <input type="text" name="description" />
                          <button type="submit">Reservar</button>
                        </form>
                      ) : (
                        <form onSubmit={handleSubmitReserva} style={{ backgroundColor: '#B23A4E' }}>
                          <p style={{ color: 'white' }}>A data selecionada não está disponivel para reserva</p>
                        </form>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </Detail>
        )}
      </Content>
    </Container>
  );
};

export default Home;
