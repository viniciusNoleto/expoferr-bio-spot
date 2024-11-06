
import { useAuthRepository } from '~/app/auth/repositories/authRepository';

export const useLoginService = defineService(() => {
  const { login } = useAuthRepository();

  const userStore = useUserStore();

  async function loginService(form: any) {
    return await login(form).then(useCallAndReturn((response) => {
      userStore.setToken(response.data.token);
      userStore.setUser(response.data.user);

      navigateTo('/home');
    }));
  }

  return {
    loginService
  };
});
