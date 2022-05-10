import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './todos.action';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};

export const useActionsV2 = () => {
  const dispatch = useDispatch();

  const actions = useCallback(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);

  return actions;
};
