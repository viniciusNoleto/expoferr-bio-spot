<template>
  <UtilsPageFrame
    :breadcrumbs="[
      { route: 'index', name: 'Início' },
      { route: 'complaint', name: 'Denúncias' },
    ]"
  >
    <UtilsCard>
      <UtilsTable
        title="Denúncias"
        :data="complaints"
        :columns="[
          { field: 'id', label: 'ID' },
          { field: 'description', label: 'Descrição' },
          { field: 'status.name', label: 'Situação' },
        ]"
      >
        <template #actions="{ item }">
          <ExpoButton
            :to="`/complaints/${item.id}`"
            color="hover-primary"
            :icon="GLOBAL_ICONS.detail"
          />
        </template>
      </UtilsTable>
    </UtilsCard>
  </UtilsPageFrame>
</template>

<script setup>

  import { GLOBAL_ICONS } from '~/shared/packages/constants/icons';

  // complaints of suspected plagues
  const complaints = ref([
    {
      id: 1,
      description: 'Denúncia de praga na plantação de milho',
      status: {
        name: 'Em análise',
        slug: 'pending',
      }
    },
    {
      id: 2,
      description: 'Denúncia de praga na plantação de soja',
      status: {
        name: 'Confirmada',
        slug: 'confirmed',
      }
    },
    {
      id: 3,
      description: 'Denúncia de praga na plantação de feijão',
      status: {
        name: 'Descartada',
        slug: 'discarded',
      }
    },
  ]);

</script>
