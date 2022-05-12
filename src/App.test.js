import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow,mount } from 'enzyme';
import LandingPage from './components/presentation/landingPage';
import Education from './components/presentation/education';
import GettingStarted from './components/presentation/gettingStarted';
import AboutUs from './components/presentation/aboutUs';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import rootReducer from './redux/reducers/rootReducer';


it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Landing page 1", () => {
  const wrapper = shallow(<LandingPage />);
  const w = <h1>Create a resume that stands out</h1>;
  expect(wrapper.contains(w)).toEqual(true);
});

it("renders Landing page 2", () => {
  const wrapper = shallow(<LandingPage />);
  const w = <span>Get Started for Free</span>;
  expect(wrapper.contains(w)).toEqual(true);
});

it("renders Landing page 3", () => {
  const wrapper = shallow(<LandingPage />);
  const w = <p >Create a Resume that perfectally describes your skils and match job profile.</p>;
  expect(wrapper.contains(w)).toEqual(true);
});

it("renders AboutUs page", () => {
  const wrapper = shallow(<AboutUs/>);
  const w = <p>Do you have any comments or questions? Our team will be happy to assist you. Send us a message.</p>;
  expect(wrapper.contains(w)).toEqual(true);
});
