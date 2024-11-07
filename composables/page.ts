

type PageParams = {
  title: string;
  is_public?: boolean;
};

export const definePage = async ({
  title,
  is_public = false
}: PageParams) => {

  const route = useRoute();

  const userStore = useUserStore();

  if (!userStore.isLogged) {

    if (!is_public) {
      await navigateTo('/auth/login');

      if (route.name !== 'index') {
          useNotify({
          message: 'Você precisa estar conectado para acessar esta página.',
          type: 'warning'
        });
      }

      throw new PageLogicError('Usuário não logado.');
    }

  } else if (is_public) {
    await navigateTo('/');

    useNotify({
      message: 'Você já está conectado, desconecte-se para acessar esta página.',
      type: 'warning'
    });

    throw new PageLogicError('Usuário logado tentando acessar página pública.');
  }

  onMounted(() => {

    useHead({
      title
    });

  });

};
