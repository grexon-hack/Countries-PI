import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import store from './redux/store.js';
import MainPage from './components/mainPage.jsx';
import InicialPage from './components/inicialPage.jsx';
import App from './App.js';
import Navbar from './components/navbar.jsx';
import DetailsPage from './components/detailsPage.jsx';
import CreatorPage from './components/creatorPage.jsx';

configure({ adapter: new Adapter() });


describe('renders learn react link', () => {
  let render = mount(
    <Provider store={store}>
        <MemoryRouter >
            <App />
        </MemoryRouter>
    </Provider>
  )

  it('should have render <MainPage />', () => {
    
    expect(render.find(MainPage)).toBeTruthy()
  });
  it('should have render <InicialPage />', () => {
    expect(render.find(InicialPage)).toBeTruthy()
  });
  it('should have render <Navbar />', () => {
    expect(render.find(Navbar)).toBeTruthy()
  });
  it('should have render <DetailsPage />', () => {
    expect(render.find(DetailsPage)).toBeTruthy()
  });
  it('should have render <CreatorPage />', () => {
    expect(render.find(CreatorPage)).toBeTruthy()
  });
  
});
