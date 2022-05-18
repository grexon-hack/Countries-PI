import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import store from '../redux/store.js';
import MainPage from '../components/mainPage.jsx';
import FilterPage from '../components/filters.jsx';


configure({ adapter: new Adapter() });

describe('MainPage', () => {
    let render = mount(
        <Provider store={store}>
            <MemoryRouter >
                <MainPage />
            </MemoryRouter>
        </Provider>
    )

    it('should it render <FilterPage />', () => {

        expect(render.find(FilterPage)).toBeTruthy()
    })
    it('should have a "LOADING..."',  () => {
        
        expect(render.find('h1').text()).toBe('LOADING...')
    })
})