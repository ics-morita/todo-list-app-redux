import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from "../actions";
import { FooterButtonComponent } from "../components/FooterButtonComponent";
export const FooterButton = (props) => {
const useStateProps = () => {
  const filters = useSelector((state) => state.filters);
  return { filters };
};

const useDispatchProps = () => {
  const dispatch = useDispatch();
  const handleChange = useCallback(
    (payload) => {
      dispatch(setFilter(payload));
    },
    [dispatch]
  );
  return { handleChange }

};
const _props = { ...useStateProps(), ...useDispatchProps(), ...props };

return <FooterButtonComponent {..._props} />
}
