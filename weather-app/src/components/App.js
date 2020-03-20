import React from 'react';
import './css/App.css';

import { connect } from 'react-redux';
import { changePage } from '../redux/actions';

function App(props) {
  return (
    <div>
      {props.page.activePage}
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
      page: state.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      updatePage: (newPage) => dispatch(changePage(newPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);