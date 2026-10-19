export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'DMA (Plasser Diagnostics, Plasser & Theurer Group)',
    role: 'Senior Software Engineer',
    period: '04/2023 – Present',
    location: 'Turin, Italy (hybrid, fully remote since 2025)',
    description:
      'Working on a real-time video inspection platform for railway infrastructure. DMA is part of Plasser Diagnostics, the track diagnostics brand of the Plasser & Theurer Group. The system runs on-board inspection vehicles, processes live multi-camera streams through a multithreaded C++ pipeline, and infers defects via several deep learning backends - all within strict throughput constraints that enable analysis during live inspection runs.',
    bullets: [
      'Lead the architecture of the framework, now being brought to high-speed train inspection: redesigned it from a thread-per-stage pipeline into a DAG-based execution model (Taskflow) with GPU-aware scheduling and decode/analysis overlap, delivering roughly 2-3x per-GPU inference throughput',
      'Engineered the GPU-accelerated inference layer (TensorRT) and scaled it across up to 4 GPUs (~4.6x throughput), sustaining ~99% GPU utilization where the previous serial-decode design dropped to ~40%. Validated on multi-GPU hardware (4x RTX 3090, NVIDIA L40S)',
      'Led the full redesign of a catenary-wear measurement product: ground-up Qt/QML GUI rewrite, generalized the analysis from a single wire to up to 8 wires, rebuilt the way the system synchronizes heterogeneous data streams, and sped up processing. Currently extending it to line-scan cameras running at up to 5 kHz for high-speed train inspection',
      'Built a standalone Qt/QML real-time monitoring application around the framework: live camera streams, defect detection results and runtime benchmarks',
      'Built additional Qt/QML interfaces and internal tools tailored to different customer deployments',
      'Containerized the core libraries, packaged dependencies into a self-hosted Debian/APT repository, and set up multi-platform CI/CD pipelines (Linux GCC, Windows MSVC)',
      "Review colleagues' code and support them with design and implementation choices, raising code quality across the team",
    ],
    tags: ['C++17/20', 'Qt/QML', 'OpenCV', 'TensorRT', 'CUDA', 'Taskflow', 'ZMQ', 'Docker', 'GitLab CI/CD', 'CMake', 'Multithreading'],
  },
  {
    company: 'Leonardo S.p.A. - Aircraft Division (via ALTEN)',
    role: 'Software Developer',
    period: '07/2020 – 04/2023',
    location: 'Turin, Italy',
    description:
      'Embedded in the avionics software team at Leonardo Aircraft Division for nearly three years, working on an avionics mission-simulation environment - QML/C++ on the HMI side, and on the underlying flight and mission simulation model.',
    bullets: [
      'Designed and developed QML/C++ HMI applications to configure and run simulated missions for pilot training - mission parameters and configurations, live mission telemetry, and injection of simulated system failures',
      'Built a mission playback tool for pilot debriefing, featuring a macOS-style dock of simulation events that magnify on hover and open detail popups',
      'Attended a three-week Qt training course (Qt Core, QML, Qt Quick) delivered by The Qt Company (2021)',
      'Developed and maintained a flight and mission simulation model in C++, focused on high reliability, numerical accuracy, and integration with avionics hardware-in-the-loop environments',
    ],
    tags: ['C++', 'Qt', 'QML', 'HMI', 'Avionics', 'Real-Time', 'Simulation'],
  },
  {
    company: 'ALTEC S.c.p.A.',
    role: 'Software Engineer (Internship)',
    period: '03/2019 – 07/2019',
    location: 'Turin, Italy',
    description:
      'Industry collaboration with the ESA/ASI center for space logistics and robotics. Designed a terrain-aware kinematics library for planetary exploration rovers.',
    bullets: [
      'Implemented a C++ library that computes robot base posture (Z, roll, pitch) from commanded (X, Y, yaw) by querying Gazebo physics services - replacing a flat-terrain hardcode in the redundancy resolver',
      'Integrated the library into an existing ROS/MoveIt framework for a mobile manipulator; validated on inclined-slope scenarios with roll/pitch error ≤ 0.10 rad',
    ],
    tags: ['C++', 'ROS', 'Gazebo', 'MoveIt', 'Robotics', 'Kinematics'],
  },
];
