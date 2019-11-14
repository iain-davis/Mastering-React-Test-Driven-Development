import React from 'react'
import ReactDOM from 'react-dom'
import {Appointment, AppointmentsDayView} from '../src/Appointment'

const render = component => {
    const container = document.createElement('div')
    ReactDOM.render(component, container)
    return container
}

describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = {firstName: 'Ashley'}

        const container = render(<Appointment customer={customer}/>)

        expect(container.textContent).toMatch('Ashley')
    })

    it('renders another customer first name', () => {
        const customer = {firstName: 'Jordan'}

        const container = render(<Appointment customer={customer}/>)

        expect(container.textContent).toMatch('Jordan')
    })

})

describe('AppointmentsDayView', () => {
    it('renders a div with the right id', () => {
        const container = render(<AppointmentsDayView appointments={[]}/>)

        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull()
    })

    it('renders multiple appointments in an ol element', () => {
        const today = new Date()
        const appointments = [
            {startsAt: today.setHours(12, 0)},
            {startsAt: today.setHours(13, 0)}
        ]
        const container = render(<AppointmentsDayView appointments={appointments}/>)

        expect(container.querySelector('ol')).not.toBeNull()
        expect(container.querySelector('ol').children).toHaveLength(2)
    })
})
