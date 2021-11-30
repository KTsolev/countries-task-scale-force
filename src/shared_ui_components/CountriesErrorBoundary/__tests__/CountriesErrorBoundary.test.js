import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import { ErrorBoundary } from '../CountriesErrorBoundary';

class ComponentWithError extends Component {
    render() {
      return (
        <div>
          <input type = {null} value = {null}/>  
        </div>
      );
    }
  }

describe('<ErrorBoundary> window',()=> {
  it('should match the snapshot', () => {
    const tree = renderer.create(<ErrorBoundary>Test</ErrorBoundary>);

    expect(tree.toJSON()).toMatchSnapshot();
  })

  it('displays error message on error generated by child', () => {

    const tree = renderer.create(
      <ErrorBoundary hasError errorInfo='Something went wrong' > 
        <ComponentWithError />
      </ErrorBoundary> 
      );
      
    expect(tree.toJSON()).toMatchSnapshot();
  })
})