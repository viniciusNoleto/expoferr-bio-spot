import { defineStore } from 'pinia'

export const useUserStore = defineStore('User', () => {

  const user = ref();

  function setUser(_user: any) {
    user.value = _user;
  };

  const token = ref();

  function setToken(_token: any) {
    token.value = _token;
  };

  return {
    user,
    setUser,
    token,
    setToken
  }

});
