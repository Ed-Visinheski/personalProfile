<template>
  <div class="editor-container" :class="{ 'explorer-open': explorerOpen }">
    <div v-if="!activeTab" class="empty-state">Select a file from the Explorer to preview it here.</div>

    <ExtensionsPanel v-else-if="activeTab.kind === 'extensions'" />

    <SourceControlPanel v-else-if="activeTab.kind === 'sourceControl'" />

    <div v-else-if="activeTab.id === 'profile'" class="code-block">
      <div class="line"><span class="comment">/**</span></div>
      <div class="line"><span class="comment">&nbsp;* @file&nbsp;&nbsp;&nbsp;profile.cpp</span></div>
      <div class="line"><span class="comment">&nbsp;* @author&nbsp;</span><span class="classname">{{ profile.name }}</span></div>
      <div class="line"><span class="comment">&nbsp;* @brief&nbsp;&nbsp;Graduate C++ software engineer - high-performance systems &amp; low-level development.</span></div>
      <div class="line"><span class="comment">&nbsp;*</span></div>
      <div class="line"><span class="comment">&nbsp;* @note&nbsp;&nbsp;&nbsp;Open the files in the Explorer (left) to view project details.</span></div>
      <div class="line"><span class="comment">&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click a #include or forward-declared class below to jump straight to it.</span></div>
      <div class="line"><span class="comment">&nbsp;*</span></div>
      <div class="line"><span class="comment">&nbsp;* Location:&nbsp;{{ profile.location }}</span></div>
      <div v-for="link in profile.contactLinks" :key="link.label" class="line">
        <span class="comment">&nbsp;* {{ link.label }}:&nbsp;</span>
        <a class="doc-link" :href="link.href" target="_blank" rel="noopener">{{ link.value }}</a>
      </div>
      <div class="line"><span class="comment">&nbsp;*</span></div>
      <div class="line doc-summary"><span class="comment">&nbsp;*&nbsp;{{ profile.summary }}</span></div>
      <div class="line"><span class="comment">&nbsp;*/</span></div>
      <div class="line">&nbsp;</div>

      <div class="line"><span class="comment">// Featured projects - click an include to open it</span></div>
      <div v-for="proj in projects" :key="'inc-' + proj.id" class="line">
        <span class="preprocessor">#include </span
        ><span class="string code-link" @click="$emit('open-file', proj.id)">"{{ proj.fileName }}"</span>
      </div>
      <div class="line">&nbsp;</div>

      <div class="line"><span class="comment">// Forward declarations - click a class to jump to its file</span></div>
      <div v-for="proj in projects" :key="'fwd-' + proj.id" class="line">
        <span class="keyword">class</span> <span class="classname code-link" @click="$emit('open-file', proj.id)">{{
          toClassName(proj.name)
        }}</span
        >;
      </div>
      <div class="line">&nbsp;</div>

      <div class="line"><span class="comment">// Education</span></div>
      <div class="line"><span class="keyword">class</span> <span class="classname">Education</span></div>
      <div class="line">{</div>
      <div class="line indent"><span class="keyword">public:</span></div>
      <div class="line indent2">
        <span class="type">std::string</span> institution = <span class="string">"{{ education.institution }}"</span>;
      </div>
      <div class="line indent2">
        <span class="type">std::string</span> degree = <span class="string">"{{ education.degree }}"</span>;
      </div>
      <div class="line indent2">
        <span class="type">std::string</span> period = <span class="string">"{{ education.period }}"</span>;
      </div>
      <div class="line indent2">&nbsp;</div>
      <div class="line indent2"><span class="comment">// Key modules</span></div>
      <div class="line indent2"><span class="type">Module</span> modules[] =</div>
      <div class="line indent2">{</div>
      <div v-for="mod in education.modules" :key="mod.name" class="line indent3">
        { <span class="string">"{{ mod.name }}"</span>, <span class="string">"{{ mod.grade }}"</span> },
      </div>
      <div class="line indent2">};</div>
      <div class="line">};</div>
      <div class="line">&nbsp;</div>

      <div class="line"><span class="comment">// Experience</span></div>
      <template v-for="role in experience.roles" :key="role.title">
        <div class="line">
          <span class="keyword">class</span> <span class="classname">{{ toClassName(role.title) }}</span> :
          <span class="keyword">public</span> <span class="type">Role</span>
        </div>
        <div class="line">{</div>
        <div class="line indent"><span class="keyword">public:</span></div>
        <div class="line indent2">
          <span class="type">std::string</span> company = <span class="string">"{{ role.company }}"</span>;
        </div>
        <div class="line indent2">
          <span class="type">std::string</span> period = <span class="string">"{{ role.period }}"</span>;
        </div>
        <div class="line indent2"><span class="comment">// {{ role.summary }}</span></div>
        <div class="line indent2">&nbsp;</div>
        <div class="line indent2"><span class="type">void</span> responsibilities()</div>
        <div class="line indent2">{</div>
        <div v-for="(bullet, idx) in role.bullets" :key="idx" class="line indent3">
          <span class="comment">// {{ bullet }}</span>
        </div>
        <div class="line indent2">}</div>
        <div class="line">};</div>
        <div class="line">&nbsp;</div>
      </template>
    </div>

    <div v-else-if="activeProject" class="code-block">
      <div class="line"><span class="keyword">class</span> <span class="classname">{{ toClassName(activeProject.name) }}</span></div>
      <div class="line">{</div>
      <div class="line indent"><span class="keyword">public:</span></div>
      <div class="line indent2">
        <span class="type">std::string</span> period = <span class="string">"{{ activeProject.period }}"</span>;
      </div>
      <div v-if="activeProject.achievement" class="line indent2"><span class="comment">// {{ activeProject.achievement }}</span></div>
      <div v-if="activeProject.github" class="line indent2">
        <span class="type">std::string</span> github =
        <span class="string"
          >"<a class="doc-link" :href="activeProject.github" target="_blank" rel="noopener">{{ activeProject.github }}</a>"</span
        >;
      </div>
      <div class="line indent2">&nbsp;</div>
      <div class="line indent2"><span class="type">void</span> overview()</div>
      <div class="line indent2">{</div>
      <div v-for="(bullet, idx) in activeProject.bullets" :key="idx" class="line indent3">
        <span class="comment">// {{ bullet }}</span>
      </div>
      <div class="line indent2">}</div>
      <div class="line">};</div>
    </div>
  </div>
</template>

<script>
import { profile, education, experience, projects } from '../data/portfolio';
import ExtensionsPanel from './ExtensionsPanel.vue';
import SourceControlPanel from './SourceControlPanel.vue';

export default {
  name: 'CodeEditor',
  components: { ExtensionsPanel, SourceControlPanel },
  props: {
    activeTab: {
      type: Object,
      default: null,
    },
    explorerOpen: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['open-file'],
  data() {
    return { profile, education, experience, projects };
  },
  computed: {
    activeProject() {
      if (!this.activeTab || this.activeTab.kind !== 'file') return null;
      return this.projects.find((p) => p.id === this.activeTab.id) || null;
    },
  },
  methods: {
    toClassName(text) {
      return text
        .replace(/[^A-Za-z0-9 ]/g, '')
        .split(' ')
        .filter(Boolean)
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join('');
    },
  },
};
</script>

<style scoped>
.editor-container {
  position: fixed;
  top: var(--topbar-h);
  left: var(--sidebar-w);
  right: 0;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background: #1e1e1e;
  color: #d4d4d4;
  transition: left 0.2s ease;
}

@media (min-width: 769px) {
  .editor-container.explorer-open {
    left: calc(var(--sidebar-w) + var(--explorer-w));
  }
}

.empty-state {
  padding: 32px;
  color: #858585;
  font-family:
    'Fira Mono',
    'Consolas',
    'Menlo',
    monospace;
}

.code-block {
  padding: 32px;
  font-family:
    'Fira Mono',
    'Consolas',
    'Menlo',
    monospace;
  font-size: 1em;
  line-height: 1.7;
  white-space: pre-wrap;
}

.line {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.indent {
  padding-left: 2em;
}

.indent2 {
  padding-left: 4em;
}

.indent3 {
  padding-left: 6em;
}

@media (max-width: 768px) {
  .code-block {
    padding: 16px;
    font-size: 0.85em;
  }

  .indent {
    padding-left: 1em;
  }

  .indent2 {
    padding-left: 2em;
  }

  .indent3 {
    padding-left: 3em;
  }
}

.keyword {
  color: #569cd6;
  font-weight: bold;
}

.classname {
  color: #4ec9b0;
}

.type {
  color: #b5cea8;
}

.string {
  color: #ce9178;
}

.comment {
  color: #6a9955;
}

.preprocessor {
  color: #c586c0;
}

.doc-summary {
  display: inline-block;
  max-width: min(70ch, 100%);
}

.doc-link {
  color: #4fc1ff;
  text-decoration: none;
}

.doc-link:hover {
  text-decoration: underline;
}

.code-link {
  cursor: pointer;
}

.code-link:hover {
  text-decoration: underline;
}
</style>
