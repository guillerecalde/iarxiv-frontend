import { createContext, useCallback, useMemo, useReducer } from 'react';

interface UIState {
  displayRightSidebar: boolean;
  toggleRightSidebar: () => void;
  closeRightSidebar: () => void;
}

type UIAction =
  | { type: 'OPEN_RIGHT_SIDEBAR' }
  | { type: 'CLOSE_RIGHT_SIDEBAR' };

const initialState: UIState = {
  displayRightSidebar: false,
  closeRightSidebar: () => null,
  toggleRightSidebar: () => null,
};

export const UIContext = createContext<UIState>(initialState);

function uiReducer(state: UIState, action: UIAction) {
  switch (action.type) {
    case 'OPEN_RIGHT_SIDEBAR':
      return {
        ...state,
        displayRightSidebar: true,
      };

    case 'CLOSE_RIGHT_SIDEBAR':
      return {
        ...state,
        displayRightSidebar: false,
      };
  }
}

interface UIProviderProps {
  children: React.ReactNode;
}

export const UIProvider = ({ children }: UIProviderProps) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const closeRightSidebar = useCallback(() => {
    dispatch({ type: 'CLOSE_RIGHT_SIDEBAR' });
  }, [dispatch]);

  const toggleRightSidebar = useCallback(() => {
    return state.displayRightSidebar
      ? dispatch({ type: 'CLOSE_RIGHT_SIDEBAR' })
      : dispatch({ type: 'OPEN_RIGHT_SIDEBAR' });
  }, [dispatch, state.displayRightSidebar]);

  const value = useMemo(() => {
    return {
      ...state,
      closeRightSidebar,
      toggleRightSidebar,
    };
  }, [state, closeRightSidebar, toggleRightSidebar]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
