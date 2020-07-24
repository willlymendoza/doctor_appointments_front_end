import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authDuck";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  authData: persistReducer(persistConfig, authReducer),
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { persistor, store };
