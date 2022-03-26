import { asynchrounousRequest, REQUEST_METHODS } from 'api/utils';

export function sendUserData(userData) {
  return asynchrounousRequest('users/login', {
    type: REQUEST_METHODS.POST,
    body: userData,
  });
}

export function validateRoomMember(idToken, roomID) {
  return asynchrounousRequest('users/rooms/validate_member', {
    body: { idToken, roomID },
  }).then(response => response.json());
}

export function getRoomDetails(userRooms) {
  return asynchrounousRequest('users/rooms/details', {
    type: REQUEST_METHODS.POST,
    body: { userRooms },
  }).then(response => response.json());
}

export function getRoomMembers(roomID) {
  return asynchrounousRequest(`users/rooms/members/${roomID}`).then(response => response.json());
}

export function requestInvite(roomID, type) {
  return asynchrounousRequest('users/rooms/invite_members', {
    type: REQUEST_METHODS.POST,
    body: { roomID, type },
  }).then(response => response.json());
}

export function validateInvitation(email, inviteID, roomID) {
  return asynchrounousRequest('users/rooms/validate_invite', {
    type: REQUEST_METHODS.POST,
    body: { email, inviteID, roomID },
  }).then(response => response.json());
}
