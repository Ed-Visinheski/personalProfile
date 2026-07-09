<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <span class="sidebar-title">EV</span>
    </div>
    <div class="sidebar-buttons">
      <button
        class="sidebar-btn"
        :class="{ active: explorerOpen }"
        title="Explorer"
        @click="$emit('select-view', 'explorer')"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6">
          <path d="M4 4h7l2 2h7v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
        </svg>
      </button>
      <button
        class="sidebar-btn"
        :class="{ active: activePanel === 'extensions' }"
        title="Extensions"
        @click="$emit('select-view', 'extensions')"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6">
          <path
            d="M14 3.5a1.5 1.5 0 0 1 3 0V5h2.5A1.5 1.5 0 0 1 21 6.5V9h-1.5a1.5 1.5 0 0 0 0 3H21v2.5a1.5 1.5 0 0 1-1.5 1.5H17v1.5a1.5 1.5 0 0 1-3 0V16h-2.5a1.5 1.5 0 0 1 0-3H13v-2a1.5 1.5 0 0 0-3 0v2h-1.5a1.5 1.5 0 0 1 0 3H10v1.5A1.5 1.5 0 0 1 8.5 21H6a1.5 1.5 0 0 1-1.5-1.5V17H3v-2.5A1.5 1.5 0 0 1 4.5 13H6v-2a1.5 1.5 0 0 0-3 0V9.5A1.5 1.5 0 0 1 4.5 8H7V5.5A1.5 1.5 0 0 1 8.5 4H11v1.5a1.5 1.5 0 0 0 3 0z"
          />
        </svg>
      </button>
      <button
        class="sidebar-btn"
        :class="{ active: activePanel === 'sourceControl' }"
        title="Source Control"
        @click="$emit('select-view', 'sourceControl')"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6">
          <circle cx="6" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="9" r="2" />
          <path d="M6 8v8" />
          <path d="M6 12c0-1.5 1-2 3-2h4c2 0 3-.5 3-1" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import '../assets/sidebar.css';
export default {
  name: 'ActivityBar',
  props: {
    explorerOpen: {
      type: Boolean,
      default: true,
    },
    activePanel: {
      type: String,
      default: '',
    },
  },
  emits: ['select-view'],
};
</script>
