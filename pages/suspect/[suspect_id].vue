<template>
  <UtilsPageFrame
    :breadcrumbs="[
      { route: 'index', name: 'Início' },
      { route: 'suspect', name: 'Suspeitas' },
      { route: 'suspect-suspect_id', name: 'Suspeita' },
    ]"
  >
    <UtilsCard class="gap-10">
      <template v-if="suspectLoading">
        <div class="flex flex-col gap-1">
          <UtilsSkeleton width="6rem" height="1rem" />

          <UtilsSkeleton width="4rem" height="0.5rem" />
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
              Suspeita #{{ suspect.id }}
            </span>

            <span class="text-sm font-medium">
              {{ Formatter.date(suspect.started_at) }}
            </span>
          </div>

          <div class="center-flex">
            <UtilsBadge
              :style="{
                backgroundColor: suspect.status.color + '4d',
              }"
              class="text-sm"
            >
              {{ suspect.status.name }}
            </UtilsBadge>
          </div>
        </div>

        <span>
          {{ suspect.process_info.description }}
        </span>

        <div
          v-if="suspect.actions === 'executor' || true"
          class="center-flex gap-6"
        >
          <ExpoButton
            label="Descartar suspeita"
            color="red"
            @action="discartSuspect"
          />

          <ExpoButton
            label="Confirmar suspeita"
            color="primary"
            @action="confirmSuspect"
          />
        </div>
      </template>
    </UtilsCard>
  </UtilsPageFrame>
</template>

<script setup>

  import { useGetSuspectLoadingRequestHandler } from '~/app/suspect/handlers/getSuspectLoadingRequestHandler';

  const route = useRoute();

  const {
    data: suspect,
    loading: suspectLoading,
    request: getSuspectRequest,
  } = useGetSuspectLoadingRequestHandler(
    () => route.params.suspect_id,
    {
      immediate: false
    }
  );

  await defineSafeSpace(
    getSuspectRequest,
    () => navigateToPrevious('/suspect')
  );

  function confirmSuspect() {

  }

  function discartSuspect() {

  } 

</script>
