<template>
  <UtilsPageFrame
    :breadcrumbs="[
      { route: 'index', name: 'Início' },
      { route: 'suspect', name: 'Suspeitas' },
    ]"
  >
    <UtilsCard>
      <UtilsTable
        title="Suspeitas"
        :data="suspects"
        :columns="[
          { field: 'id', label: 'ID' },
          { field: 'description', label: 'Descrição' },
          { field: 'status.name', label: 'Situação' },
        ]"
      >
        <template #actions="{ item }">
          <ExpoButton
            :to="`/suspects/${item.id}`"
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

  // suspects of suspected plagues
  const suspects = ref([
    {
      id: 1,
      description: 'Suspeita de praga na plantação de milho',
      status: {
        name: 'Em análise',
        slug: 'pending',
      }
    },
    {
      id: 2,
      description: 'Suspeita de praga na plantação de soja',
      status: {
        name: 'Confirmada',
        slug: 'confirmed',
      }
    },
    {
      id: 3,
      description: 'Suspeita de praga na plantação de feijão',
      status: {
        name: 'Descartada',
        slug: 'discarded',
      }
    },
  ]);

</script>
