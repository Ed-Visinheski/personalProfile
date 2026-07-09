<template>
  <div class="source-control-panel">
    <div class="sc-header">
      <span class="header-icon">&#8942;</span>
      <span>SOURCE CONTROL: CONNECT</span>
    </div>
    <div class="sc-location">{{ profile.location }}</div>
    <ul class="sc-log">
      <li v-for="link in profile.contactLinks" :key="link.label" class="sc-entry">
        <span class="sc-status">M</span>
        <a class="sc-link" :href="link.href" target="_blank" rel="noopener">
          <span class="sc-label">{{ link.label }}</span>
          <span class="sc-value">{{ link.value }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { profile } from '../data/portfolio';

export default {
  name: 'SourceControlPanel',
  data() {
    return { profile };
  },
};
</script>

<style scoped>
.source-control-panel {
  padding: 32px;
  color: #d4d4d4;
  font-family:
    'Fira Mono',
    'Consolas',
    'Menlo',
    monospace;
}

.sc-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1em;
  font-weight: bold;
  letter-spacing: 1px;
  color: #cccccc;
  margin-bottom: 8px;
}

.header-icon {
  color: #6a9955;
}

.sc-location {
  color: #858585;
  font-size: 0.85em;
  margin-bottom: 24px;
}

.sc-log {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sc-entry {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #2d2d2d;
}

.sc-status {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: rgba(106, 153, 85, 0.2);
  color: #6a9955;
  font-weight: bold;
  font-size: 0.8em;
}

.sc-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  overflow-wrap: anywhere;
}

@media (max-width: 768px) {
  .source-control-panel {
    padding: 16px;
  }
}

.sc-label {
  font-size: 0.95em;
  color: #d4d4d4;
}

.sc-link:hover .sc-label {
  color: #4fc1ff;
  text-decoration: underline;
}

.sc-value {
  font-size: 0.8em;
  color: #858585;
}
</style>
