import React from 'react';
import { ErrorHandler } from '../ErrorHandler/ErrorHandler';

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <ErrorHandler title='Something went wrong.' />;
      }
  
      return this.props.children; 
    }
  }