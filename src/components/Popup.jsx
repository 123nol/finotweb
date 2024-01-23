import React from 'react'
import { Close } from '@mui/icons-material';
const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          <Close />
        </button>
        <div className="popup-info">{props.children}</div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup