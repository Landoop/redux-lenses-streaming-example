import { createTypes } from 'reduxsauce';

export const Type = createTypes(`
  UPDATE_HOST
  UPDATE_CLIENT_ID
  UPDATE_USER
  UPDATE_PASSWORD
  UPDATE_SELECTED_SENSOR
  CLEAR_MESSAGES
`);

const updateHost = (payload) => ({ type: Type.UPDATE_HOST, payload });
const updateClientId = (payload) => ({ type: Type.UPDATE_CLIENT_ID, payload });
const updateUser = (payload) => ({ type: Type.UPDATE_USER, payload });
const updatePassword = (payload) => ({ type: Type.UPDATE_PASSWORD, payload });
const updateSelectedSensor = (payload) => ({ type: Type.UPDATE_SELECTED_SENSOR, payload });
const clearMessages = () => ({ type: Type.CLEAR_MESSAGES });

export const Action = {
  updateHost,
  updateClientId,
  updateUser,
  updatePassword,
  updateSelectedSensor,
  clearMessages,
}
