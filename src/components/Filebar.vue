<template>
  <div class="filebar">
    <button class="filebar-toggle" title="Toggle Explorer" @click="$emit('toggle-explorer')">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round" />
      </svg>
    </button>
    <div class="filebar-buttons">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="filebar-tab"
        :class="{ active: activeTabId === tab.id }"
        @click="$emit('select-tab', tab.id)"
      >
        <span class="tab-icon" :class="`icon-${tab.icon}`"></span>
        <span class="tab-label">{{ tab.label }}</span>
        <button class="tab-close" title="Close" @click.stop="$emit('close-tab', tab.id)">&times;</button>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/filebar.css';
export default {
  name: 'TabBar',
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    activeTabId: {
      type: String,
      default: '',
    },
  },
  emits: ['select-tab', 'close-tab', 'toggle-explorer'],
};
</script>
