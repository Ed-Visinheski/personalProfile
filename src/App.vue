<script>
import Sidebar from './components/Sidebar.vue';
import Filebar from './components/Filebar.vue';
import Background from './components/Background.vue';
import ExplorerPanel from './components/ExplorerPanel.vue';
import Editor from './components/Editor.vue';

const FILE_LABELS = {
  profile: { label: 'profile.cpp', icon: 'cpp' },
  wave_synth: { label: 'wave_synth.cpp', icon: 'cpp' },
  distributed_hash_table: { label: 'distributed_hash_table.java', icon: 'java' },
  compiler: { label: 'compiler.java', icon: 'java' },
  lauzhack_ticketing: { label: 'lauzhack_ticketing.cpp', icon: 'cpp' },
};

export default {
  name: 'App',
  components: {
    Background,
    Sidebar,
    Filebar,
    ExplorerPanel,
    Editor,
  },
  data() {
    return {
      openTabs: [{ id: 'profile', kind: 'file', label: 'profile.cpp', icon: 'cpp' }],
      activeTabId: 'profile',
      explorerOpen: !window.matchMedia('(max-width: 768px)').matches,
    };
  },
  computed: {
    activeTab() {
      return this.openTabs.find((tab) => tab.id === this.activeTabId) || null;
    },
    activeFileId() {
      return this.activeTab && this.activeTab.kind === 'file' ? this.activeTab.id : '';
    },
    activePanel() {
      return this.activeTab && this.activeTab.kind !== 'file' ? this.activeTab.kind : '';
    },
  },
  methods: {
    openFile(fileId) {
      const meta = FILE_LABELS[fileId];
      if (!meta) return;
      this.openTab({ id: fileId, kind: 'file', label: meta.label, icon: meta.icon });
      if (window.matchMedia('(max-width: 768px)').matches) {
        this.explorerOpen = false;
      }
    },
    openPanelTab(kind) {
      const meta =
        kind === 'extensions'
          ? { label: 'Extensions', icon: 'extensions' }
          : { label: 'Source Control', icon: 'sourceControl' };
      this.openTab({ id: kind, kind, label: meta.label, icon: meta.icon });
      this.explorerOpen = false;
    },
    openTab(tab) {
      if (!this.openTabs.some((t) => t.id === tab.id)) {
        this.openTabs.push(tab);
      }
      this.activeTabId = tab.id;
    },
    toggleExplorer() {
      this.explorerOpen = !this.explorerOpen;
    },
    selectTab(id) {
      this.activeTabId = id;
    },
    closeTab(id) {
      const idx = this.openTabs.findIndex((t) => t.id === id);
      if (idx === -1) return;
      this.openTabs.splice(idx, 1);
      if (this.activeTabId === id) {
        const next = this.openTabs[idx] || this.openTabs[idx - 1];
        this.activeTabId = next ? next.id : '';
      }
    },
    handleSelectView(view) {
      if (view === 'explorer') {
        this.toggleExplorer();
        return;
      }
      this.openPanelTab(view);
    },
  },
};
</script>

<template>
  <Background />
  <Sidebar :explorer-open="explorerOpen" :active-panel="activePanel" @select-view="handleSelectView" />
  <ExplorerPanel :active-file-id="activeFileId" :open="explorerOpen" @open-file="openFile" @close="explorerOpen = false" />
  <Filebar
    :tabs="openTabs"
    :active-tab-id="activeTabId"
    @select-tab="selectTab"
    @close-tab="closeTab"
    @toggle-explorer="toggleExplorer"
  />
  <Editor :active-tab="activeTab" :explorer-open="explorerOpen" @open-file="openFile" />
</template>

<style scoped></style>
