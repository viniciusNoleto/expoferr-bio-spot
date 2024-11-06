<template>
  <UtilsPageFrame
    :breadcrumbs="[
      { route: 'index', name: 'Início' },
      { route: 'plague', name: 'Suspeitas' },
      { route: 'plague-plague_id', name: 'Suspeita' },
    ]"
  >
    <UtilsCard class="gap-10">
      <template v-if="plagueLoading">
        <div class="flex flex-col gap-1">
          <UtilsSkeleton
            width="6rem"
            height="1rem"
          />

          <UtilsSkeleton
            width="4rem"
            height="0.5rem"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <UtilsSkeleton
            v-for="i in 5"
            :key="i"
            height="0.75rem"
          />
        </div>
      </template>

      <template v-else>
        <div class="flex justify-between items-center">
          <div class="flex flex-col gap-1">
            <span class="font-semibold text-primary-700">
              Suspeita #{{ plague.id }}
            </span>

            <span class="text-sm font-medium">
              {{ Formatter.date(plague.started_at) }}
            </span>
          </div>

          <div class="center-flex">
            <UtilsBadge
              :style="{
                backgroundColor: plague.status.color + '4d',
              }"
              class="text-sm"
            >
              {{ plague.status.name }}
            </UtilsBadge>
          </div>
        </div>

        <span>
          {{ plague.process_info.description }}
        </span>
      </template>
    </UtilsCard>
  </UtilsPageFrame>
</template>

<script setup>

  import { useGetPlagueLoadingRequestHandler } from '~/app/plague/handlers/getPlagueLoadingRequestHandler';

  const route = useRoute();

  const {
    data: plague,
    loading: plagueLoading,
    request: getPlagueRequest,
  } = useGetPlagueLoadingRequestHandler(
    () => route.params.plague_id,
    {
      immediate: false
    }
  );

  await defineSafeSpace(
    getPlagueRequest,
    () => navigateToPrevious('/plague')
  );

</script>
