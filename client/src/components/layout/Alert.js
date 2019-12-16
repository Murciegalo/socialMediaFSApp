import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
  return (
    alerts !== null && alerts.length > 0 && alerts.map( el => (
    <div key={el.id} className={`alert alert-${el.alertType}`}>
      {el.msg}
    </div>
  )) 
)}
Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
}

const mapStatetoProps = state => { 
  return { 
    alerts: state.alert 
  }
}
export default connect( mapStatetoProps )(Alert);
