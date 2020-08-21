import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from "../actions";
import { FooterComponent } from '../components/FooterComponent';

export const Footer = (props) => {
const useDispatchProps = () => {
  const dispatch = useDispatch();
  const handleFetchData = useCallback(
    () => {
      dispatch(fetchData());
    },
    [dispatch]
  )
  return { handleFetchData }
};
const _props = { ...useDispatchProps(), ...props };

return <FooterComponent {..._props} />
}
