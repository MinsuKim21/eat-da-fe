import React from 'react';
import { useLocation } from 'react-router';
import Icon from '../../../components/Icon';
import location from '../../../assets/location.svg';
import call from '../../../assets/call.svg';
import eye from '../../../assets/eye.svg';
// import withList from '../../hocs/withList';
import IconButton from '../../../components/IconButton';

export default function StorePage() {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  return <div className=''>{id}</div>;
}
