import React, { useState } from 'react'

const appointmentTimeOfDay = startsAt => {
  const [hour, minute] = new Date(startsAt).toTimeString().split(':')
  return `${hour}:${minute}`
}

export const Appointment = ({customer}) => <div>{customer.firstName}</div>

export const AppointmentsDayView = ({appointments}) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0)

  return (
      <div id="appointmentsDayView">
          <ol>
              {appointments.map((appointment, appointmentNumber) => (
                <li key={appointment.startsAt}>
                    <button type='button' onClick={() => setSelectedAppointment(appointmentNumber)}>
                        {appointmentTimeOfDay(appointment.startsAt)}
                    </button>
                </li>))}
          </ol>
          {appointments.length === 0 ? (
               <p>There are no appointments scheduled for today.</p>
             ) : (
              <Appointment {...appointments[selectedAppointment]}/>
            )
          }
          <p>There are no appointments scheduled for today.</p>
      </div>
  )
}
