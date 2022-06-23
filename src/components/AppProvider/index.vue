<template>
  <!-- 
    naiveui框架的几个提示类型的组件（如：Dialog），
    都需要把模板在app中引入，
    并且需要RouterView同级或者父级，
    才能在setup中正常使用。 
  -->
  <n-loading-bar-provider>
    <n-dialog-provider>
      <DialogContent />
      <n-notification-provider>
        <n-message-provider>
          <MessageContent />
          <slot></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NDialogProvider, NNotificationProvider, NMessageProvider, NLoadingBarProvider } from 'naive-ui'
import MessageContent from '@/components/MessageContent/index.vue'
import DialogContent from '@/components/DialogContent/index.vue'

export default defineComponent({
  name: 'AppProvider',
  components: {
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider,
    NLoadingBarProvider,
    MessageContent,
    DialogContent,
  },
  setup() {
    return {}
  },
})
</script>
