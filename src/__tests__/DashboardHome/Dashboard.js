import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import Container from '../../components/DashboardHome/Dashboard'
import store from '../../state/store'

describe('dashboard', () => {
    test('renders the welcome message', () => {
        const { getByText } = render(<Provider store={store}><Container /></Provider>)
        const logo = getByText(/welcome/i)
        expect(logo).toBeVisible()
    })
    test('renders overview', () => {
        const { getByText } = render(<Provider store={store}><Container /></Provider>)
        const logo = getByText(/overview/i)
        expect(logo).toBeVisible()
    })
    test('renders sales history', () => {
        const { getByText } = render(<Provider store={store}><Container /></Provider>)
        const logo = getByText(/sales history/i)
        expect(logo).toBeVisible()
    })
    test('renders this month you earned', () => {
        const { getByText } = render(<Provider store={store}><Container /></Provider>)
        const logo = getByText(/this month you earned/i)
        expect(logo).toBeVisible()
    })
    test('renders lifetime earnings', () => {
        const { getByText } = render(<Provider store={store}><Container /></Provider>)
        const logo = getByText(/lifetime earnings/i)
        expect(logo).toBeVisible()
    })
    test('renders the navbar', () => {
        const { getByText } = render(<Provider store={store}><Container /></Provider>)
        expect(getByText(/home/i)).toBeVisible()
        expect(getByText(/^store$/i)).toBeVisible() 
        expect(getByText(/account/i)).toBeVisible()
        expect(getByText(/profile/i)).toBeVisible()
    })
})