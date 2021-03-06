import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddItem = (props) => {
    return(
        <div>
        <form>
            <input focus="true" type="text" value={props.newItem} onChange={props.handleOnChangeInput} />
            <input type="button" onClick={props.handleSubmit} value = "Add" />
        </form>
        </div>
    );
}

AddItem.propTypes = {
    newItem: PropTypes.string,
    handleOnChangeInput: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}