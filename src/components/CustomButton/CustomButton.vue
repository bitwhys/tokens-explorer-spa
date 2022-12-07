<template>
  <button :class="btn">
    <span v-if="hasLeadingIcon" :class="iconWrapperStyles">
      <slot name="leadingIcon"></slot>
    </span>
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { buttonStyles, iconWrapperStyles } from './custom-button.css'

const slots = useSlots()
const props = defineProps<{ text: string; variant?: 'solid' | 'ghost'; size?: 'base' | 'lg' | 'sm' }>()
const hasLeadingIcon = !!slots['leadingIcon']

const btn = computed(() => {
  return buttonStyles({
    size: props.size,
    variant: props.variant,
  })
})
</script>
