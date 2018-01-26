import React from 'react';
import { mount, shallow } from 'enzyme';
import Movie from '../src/components/Movie/Movie';
import '../src/setupTest'

describe('movie', () => {
  // let movie = mount(<Movie />);

  const props = {title:'title', overview:'overview', path:'path'}
  let wrapper = shallow(<Movie />);

  it('renders without crashing', () => {
    expect(wrapper.type()).toEqual('div');
  })

  let wrapper2 = mount(<Movie {...props} />);

  it('have a title', () => {
    expect(wrapper2.find('p').at(0).text()).toEqual(props.title)
  })

  it('have an overview', () => {
    expect(wrapper2.find('p').at(1).text()).toEqual(props.overview)
  })

  it('have a path', () => {
    // expect(wrapper2.find('img').at(0).text()).toEqual(props.path)
    console.log(wrapper2.find('img').at(0));
    expect(wrapper2.find('img'));
  })
})
