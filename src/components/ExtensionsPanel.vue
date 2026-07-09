<template>
  <div class="extensions-panel">
    <div class="extensions-header">
      <span class="header-icon">&#10070;</span>
      <span>EXTENSIONS: KEY SKILLS</span>
    </div>
    <div v-for="group in skills" :key="group.category" class="extensions-group">
      <div class="group-title">{{ group.category }}</div>
      <div class="extensions-grid">
        <div v-for="item in group.items" :key="item" class="extension-card">
          <div class="extension-icon">{{ initials(item) }}</div>
          <div class="extension-info">
            <div class="extension-name">{{ item }}</div>
            <div class="extension-publisher">{{ group.category }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { skills } from '../data/portfolio';

export default {
  name: 'ExtensionsPanel',
  data() {
    return { skills };
  },
  methods: {
    initials(item) {
      const cleaned = item.replace(/[^A-Za-z0-9 ]/g, '');
      const parts = cleaned.split(' ').filter(Boolean);
      if (parts.length === 1) {
        return parts[0].slice(0, 2).toUpperCase();
      }
      return (parts[0][0] + parts[1][0]).toUpperCase();
    },
  },
};
</script>

<style scoped>
.extensions-panel {
  padding: 32px;
  color: #d4d4d4;
  font-family:
    'Fira Mono',
    'Consolas',
    'Menlo',
    monospace;
}

.extensions-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1em;
  font-weight: bold;
  letter-spacing: 1px;
  color: #cccccc;
  margin-bottom: 24px;
}

.header-icon {
  color: #c586c0;
}

.extensions-group {
  margin-bottom: 28px;
}

.group-title {
  font-size: 0.85em;
  font-weight: bold;
  letter-spacing: 1px;
  color: #9cdcfe;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.extensions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}

@media (max-width: 768px) {
  .extensions-panel {
    padding: 16px;
  }

  .extensions-grid {
    grid-template-columns: 1fr;
  }
}

.extension-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #333333;
  border-radius: 6px;
}

.extension-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: #007acc;
  color: #fff;
  font-size: 0.8em;
  font-weight: bold;
}

.extension-name {
  font-size: 0.95em;
  color: #d4d4d4;
}

.extension-publisher {
  font-size: 0.75em;
  color: #858585;
}
</style>
