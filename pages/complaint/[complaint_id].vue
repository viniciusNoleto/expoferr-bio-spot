<template>
  <UtilsPageFrame
    :breadcrumbs="[
      { route: 'index', name: 'Início' },
      { route: 'complaint', name: 'Denúncias' },
      { route: 'complaint-complaint_id', name: 'Denúncia' },
    ]"
  >
    <UtilsCard class="gap-10">
      <template v-if="complaintLoading">
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
              Denúncia #{{ complaint.id }}
            </span>

            <span class="text-sm font-medium">
              {{ Formatter.date(complaint.started_at) }}
            </span>
          </div>

          <div class="center-flex">
            <UtilsBadge
              :style="{
                backgroundColor: complaint.status.color + '4d',
              }"
              class="text-sm"
            >
              {{ complaint.status.name }}
            </UtilsBadge>
          </div>
        </div>

        <span>
          {{ complaint.process_info.description }}
        </span>

        <div
          v-if="complaint.actions === 'executor' || true"
          class="center-flex gap-6"
        >
          <ExpoButton
            label="Descartar denúncia"
            color="red"
            @action="discartComplaint"
          />

          <ExpoButton
            label="Confirmar denúncia"
            color="primary"
            @action="confirmComplaint"
          />
        </div>
      </template>
    </UtilsCard>
  </UtilsPageFrame>
</template>

<script setup>

  import { useGetComplaintLoadingRequestHandler } from '~/app/complaint/handlers/getComplaintLoadingRequestHandler';

  const route = useRoute();

  const {
    data: complaint,
    loading: complaintLoading,
    request: getComplaintRequest,
  } = useGetComplaintLoadingRequestHandler(
    () => route.params.complaint_id,
    {
      immediate: false
    }
  );

  await defineSafeSpace(
    getComplaintRequest,
    () => navigateToPrevious('/complaint')
  );

  function confirmComplaint() {

  }

  function discartComplaint() {

  } 

</script>
