import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import apiReducer from './apiSlice'
import projectsReducer from './projectsSlice'
import dbConnectionReducer from './dbConnectionSlice'
import allDBConnectionsReducer from './allDBConnectionsSlice'
import dataModelReducer from './dataModelSlice'
import dbQueryReducer from './dbQuerySlice'
import dbHistoryReducer from './dbHistorySlice'
import configReducer from './configSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      api: apiReducer,
      projects: projectsReducer,
      dbConnection: dbConnectionReducer,
      allDBConnections: allDBConnectionsReducer,
      dataModel: dataModelReducer,
      dbQuery: dbQueryReducer,
      dbHistory: dbHistoryReducer,
      config: configReducer,
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store