import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import store from '../redux/store.js';
import InitialPage from '../components/inicialPage.jsx'


configure({ adapter: new Adapter() });

describe('InitialPage', () => {
    let render = mount(
        <Provider store={store}>
            <MemoryRouter >
                <InitialPage />
            </MemoryRouter>
        </Provider>
    ) 
	it('should have divs', () => {
        
		expect(render.find('div').length).toBe(6)
	});
    it('should have a button', () => {
        expect(render.find('button').length).toBe(1)
    });
    it('should have a h1 "Countries-PI"', () => {
        expect(render.find('h1').text()).toEqual('Countries-PI')
    })
})