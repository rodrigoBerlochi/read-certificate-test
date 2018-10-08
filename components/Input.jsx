import React from 'react';
import PropTypes from 'prop-types';


export const Input = (props) => {
    return (
        <input
            type={props.type}
            id={props.id}
            name={props.name || props.id}
            onChange={props.onInputChange}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    onInputChange: PropTypes.func
};

Input.defaultProps = {
    onInputChange: (e) => {console.dir(e)}
}