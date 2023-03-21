import React from "react";
import PropTypes from 'prop-types';
import {
    Edit,
    Delete,
} from './index';

const iconTypes = {
    edit: Edit,
    delete: Delete,
};

const IconComponent = ({ name, ...props }) => {
    let Icon = iconTypes[name];
    return <Icon {...props} />;
};
IconComponent.propTypes = {
    name: PropTypes.string
};

export default IconComponent;
