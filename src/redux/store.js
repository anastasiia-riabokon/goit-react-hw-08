import {configureStore} from "@reduxjs/toolkit";
import {contactReducer} from "./contacts/slice";
import {filterReducer} from "./filters/slice";
import {authReducer} from "./auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {themeReducer} from "./theme/slice";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token"],
};

const themePersistConfig = {
  key: "theme",
  storage,
  whitelist: ["theme"],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

const themePersistedReducer = persistReducer(themePersistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: authPersistedReducer,
    theme: themePersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
