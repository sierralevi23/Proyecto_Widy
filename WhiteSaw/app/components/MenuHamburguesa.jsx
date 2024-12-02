import React from 'react';
import { TouchableOpacity } from 'react-native';
import FeatherIcon from 'feather-icons-react';
const MenuHamburguesa = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FeatherIcon icon="menu" size={24} color="#000" />
    </TouchableOpacity>
  );
};
export default MenuHamburguesa; 