<template>
  <div class="explorer-backdrop" v-if="open" @click="$emit('close')"></div>
  <div class="explorer-panel" :class="{ open: open }">
    <div class="explorer-title">Explorer</div>
    <div class="explorer-root">Portfolio</div>
    <ul class="explorer-tree">
      <li
        v-for="file in rootFiles"
        :key="file.id"
        class="explorer-file"
        :class="{ active: activeFileId === file.id }"
        @click="$emit('open-file', file.id)"
      >
        <span class="file-icon" :class="`icon-${file.language}`"></span>
        <span class="file-name">{{ file.fileName }}</span>
      </li>
      <li class="explorer-folder" @click="projectsOpen = !projectsOpen">
        <span class="folder-caret" :class="{ open: projectsOpen }">&#9656;</span>
        <span class="folder-name">projects</span>
      </li>
      <ul v-if="projectsOpen" class="explorer-tree explorer-tree-nested">
        <li
          v-for="file in projects"
          :key="file.id"
          class="explorer-file"
          :class="{ active: activeFileId === file.id }"
          @click="$emit('open-file', file.id)"
        >
          <span class="file-icon" :class="`icon-${file.language}`"></span>
          <span class="file-name">{{ file.fileName }}</span>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
import '../assets/explorer.css';
import { projects } from '../data/portfolio';

export default {
  name: 'ExplorerPanel',
  props: {
    activeFileId: {
      type: String,
      default: '',
    },
    open: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['open-file', 'close'],
  data() {
    return {
      projectsOpen: true,
      rootFiles: [{ id: 'profile', fileName: 'profile.cpp', language: 'cpp' }],
      projects,
    };
  },
};
</script>
