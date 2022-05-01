import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow,mount } from 'enzyme';
import LandingPage from './components/presentation/landingPage';
import Education from './components/presentation/education';
import GettingStarted from './components/presentation/gettingStarted';

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Landing page 1", () => {
  const wrapper = shallow(<LandingPage />);
  const welcome = <h1>Create a resume that stands out</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders Landing page 2", () => {
  const wrapper = shallow(<LandingPage />);
  const welcome = <span>Get Started for Free</span>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it("renders Landing page", () => {
  const wrapper = shallow(<LandingPage />);
  const welcome = <h1>Select a resume template to get started</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

const eprops = {
  SchoolName: "IIITB",
  Degree: "MTech",
  GraduationCGPA: "3.6",
  City: "Banglore",
  GraduationDate: "6-may",
  GraduationYear: "2023"
};

describe("", () => {
  it("accepts user education props", () => {
    const wrapper = mount(<Education props={eprops} />);
    expect(wrapper.props().props).toEqual(eprops);
  });
  //it("contains users account email", () => {
    //const wrapper = mount(<Education props={eprops} />);
    //const value = wrapper.find("p").text();
    //expect(value).toEqual("david@gmail.com");
  //});
});
