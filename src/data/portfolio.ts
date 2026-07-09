export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface Module {
  name: string;
  grade: string;
}

export interface Role {
  title: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
}

export interface Project {
  id: string;
  fileName: string;
  language: 'cpp' | 'java';
  name: string;
  period: string;
  achievement?: string;
  github?: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const profile = {
  name: 'Eduardo Cook Visinheski',
  location: 'London, UK',
  summary:
    'Graduate software engineer with two years of professional experience developing high-performance C++ systems for signal processing and telecommunications software. Experienced in modern C++17/20, concurrent programming, binary protocol encoding and decoding, and Linux development. First-class Computer Science graduate seeking a graduate C++ software engineering role in high-performance systems and low-level software development.',
  contactLinks: [
    {
      label: 'Email',
      value: 'eduardovisinheski@gmail.com',
      href: 'mailto:eduardovisinheski@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/eduardo-cook-visinheski',
      href: 'https://www.linkedin.com/in/eduardo-cook-visinheski',
    },
    {
      label: 'GitHub',
      value: 'github.com/Ed-Visinheski',
      href: 'https://github.com/Ed-Visinheski',
    },
  ] as ContactLink[],
};

export const education = {
  institution: "City St George's, University of London",
  degree: 'BSc Hons Computer Science (First Class)',
  period: 'Sept 2022 - July 2026',
  modules: [
    { name: 'Modern C++', grade: '88.3%' },
    { name: 'Java', grade: '88.1%' },
    { name: 'Functional Programming (Haskell)', grade: '85.8%' },
    { name: 'System Architecture', grade: '81.5%' },
    { name: 'Data Structures & Algorithms', grade: '80%' },
    { name: 'Theory of Computation', grade: '79.4%' },
    { name: 'Language Processors', grade: '75.3%' },
    { name: 'Mathematics', grade: '70.2%' },
    { name: 'Advanced Programming: Concurrency', grade: '70%' },
  ] as Module[],
};

export const experience = {
  roles: [
    {
      title: 'Software Engineer',
      company: 'Rohde & Schwarz',
      period: 'July 2025 - July 2026',
      summary:
        'Member of the UK development team responsible for the CrossACT application for the FSWX Signal & Spectrum Analyzer.',
      bullets: [
        'Implemented new functionality for the CrossACT application using modern C++20 and Qt5 within an international development team.',
        'Investigated and resolved multithreading race conditions involving Qt signal/slot interactions, improving application stability and thread safety.',
        'Improved synchronisation of raw signal measurements across multiple input channels, enabling simultaneous multi-channel spectral analysis.',
        'Developed SCPI-based Python unit tests for component validation.',
      ],
    },
    {
      title: 'Protocol Stack Software Engineer',
      company: 'Rohde & Schwarz',
      period: 'July 2024 - July 2025',
      summary:
        'Contributed to Layer 3 Non-Access Stratum (NAS) protocol software for the R&S CMX500, developing tooling and infrastructure for real-time 3GPP protocol processing.',
      bullets: [
        'Optimised modern C++17 code generators responsible for producing high-performance binary protocol encoders and decoders from 3GPP specifications.',
        'Designed and implemented a framework enabling dynamic modification of NAS protocol messages exchanged between mobile devices and core network components.',
        'Implemented C++ unit tests using the GoogleTest framework.',
      ],
    },
  ] as Role[],
  sharedExpertise: [
    'Implemented performance-critical modern C++ using templates, polymorphism, smart pointers, operator overloading, bitwise operations and conditional compilation.',
    'Implemented multithreaded software using modern C++ concurrency primitives.',
    'Maintained Conan packages and CMake build infrastructure for large-scale C++ projects.',
    'Built, tested and debugged modern C++ software in Linux using Docker-based development environments.',
  ],
};

export const projects: Project[] = [
  {
    id: 'wave_synth',
    fileName: 'wave_synth.cpp',
    language: 'cpp',
    name: 'WAVE: Virtual Harmonic Synthesizer with Hand-Tracking',
    period: '2026',
    github: 'https://github.com/Ed-Visinheski/WaveController_Final',
    bullets: [
      'Built a real-time additive synthesiser in C++20 and Qt6.',
      'Implemented a lock-free single-producer single-consumer (SPSC) ring buffer using atomic operations.',
      "Integrated Google's Python MediaPipe for real-time gesture-controlled frequency manipulation.",
      'Visualised harmonic waveforms and frequency spectra using KISS FFT.',
      'Tested and validated output with Sonic Visualiser and Librosa.',
    ],
  },
  {
    id: 'distributed_hash_table',
    fileName: 'distributed_hash_table.java',
    language: 'java',
    name: 'Computer Networks Coursework: 2D#4 Distributed Hash Table',
    period: '2023',
    achievement: 'Achieved 1st class',
    github: 'https://github.com/Ed-Visinheski/2DHash4-Distributed-Hash-Table',
    bullets: [
      'Implemented a distributed hash table following the proprietary 2D#4 networking protocol.',
      'Designed concurrent networking components supporting node discovery, routing, heartbeat monitoring and fault tolerance.',
      'Applied multithreading to enable concurrent peer communication while maintaining protocol correctness.',
    ],
  },
  {
    id: 'compiler',
    fileName: 'compiler.java',
    language: 'java',
    name: 'Language Processor Coursework: Parser and Compiler',
    period: '2023',
    achievement: 'Achieved 1st class',
    bullets: [
      'Implemented a parser and compiler using abstract syntax trees.',
      'Supported functions, conditionals, loops, lexical scoping and code generation.',
    ],
  },
  {
    id: 'lauzhack_ticketing',
    fileName: 'lauzhack_ticketing.cpp',
    language: 'cpp',
    name: 'LauzHack Switzerland Hackathon',
    period: 'Dec 2025',
    github: 'https://github.com/Ed-Visinheski/LauzHack_SBB_Ticketing_System',
    bullets: [
      'Built an anonymous ticketing platform in C++20 and Qt6 using PGP cryptographic signatures for ticket ownership verification.',
    ],
  },
];

export const skills: SkillCategory[] = [
  { category: 'Languages', items: ['C++17/20', 'Python', 'Java', 'Shell', 'SQL'] },
  {
    category: 'Systems Programming',
    items: [
      'Concurrent programming',
      'Multithreading',
      'Binary protocol encoding/decoding',
      'Templates',
      'Smart pointers (RAII)',
      'Bitwise operations',
    ],
  },
  { category: 'Tools', items: ['Qt5/6', 'Git', 'Docker', 'Conan', 'CMake'] },
  { category: 'Platforms', items: ['Linux', 'UNIX', 'WSL2'] },
];
