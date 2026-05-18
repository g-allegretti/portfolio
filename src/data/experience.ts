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
    company: 'DMA Accurate & Reliable',
    role: 'Software Engineer',
    period: '04/2023 – Present',
    location: 'Rome, Italy (remote)',
    description:
      'Working on a real-time video inspection platform for railway infrastructure. The system runs on-board inspection vehicles, processes live multi-camera streams through a multithreaded C++ pipeline, and infers defects via several deep learning backends — all within strict throughput constraints that enable analysis during live inspection runs.',
    bullets: [
      'Lead architectural decisions across the framework — execution model, threading strategy, and overall system composition',
      'Designed the GPU-accelerated inference layer (TensorRT) and scaled it across multiple cards to meet the throughput of the most demanding deployments',
      'Led the full redesign of a catenary-wear measurement product: ground-up Qt/QML GUI rewrite, generalised the analysis from 1 to N wires, and rebuilt the way the system synchronises heterogeneous data streams',
      'Designed and built a standalone Qt/QML real-time monitoring application around the framework — live camera streams, defect detection results, runtime benchmarks',
      'Built additional Qt/QML interfaces and internal tools tailored to different customer deployments',
      'Containerised the core libraries, packaged dependencies into a self-hosted Debian/APT repository, and set up multi-platform CI/CD pipelines (Linux GCC, Windows MSVC)',
    ],
    tags: ['C++17', 'Qt/QML', 'OpenCV', 'TensorRT', 'ZMQ', 'Docker', 'GitLab CI/CD', 'CMake', 'Multithreading'],
  },
  {
    company: 'Leonardo S.p.A. — Aircraft Division (via ALTEN)',
    role: 'Software Engineer',
    period: '07/2020 – 03/2023',
    location: 'Turin, Italy',
    description:
      'Embedded in the avionics software team at Leonardo Aircraft Division for nearly three years, working on an avionics mission-simulation environment — Qt/C++ on the HMI side, and on the underlying flight and mission simulation model.',
    bullets: [
      'Designed and developed Qt/C++ HMI applications for avionics mission simulation — real-time display of cockpit inputs, sensor states, and injection of simulated system failures for testing and training scenarios',
      'Developed and maintained a flight and mission simulation model in C++, focused on high reliability, numerical accuracy, and integration with avionics hardware-in-the-loop environments',
    ],
    tags: ['C++', 'Qt', 'HMI', 'Avionics', 'Real-Time', 'Simulation'],
  },
  {
    company: 'ALTEC S.c.p.A.',
    role: 'Software Engineer (Internship)',
    period: '03/2019 – 07/2019',
    location: 'Turin, Italy',
    description:
      'Industry collaboration with the ESA/ASI centre for space logistics and robotics. Designed a terrain-aware kinematics library for planetary exploration rovers.',
    bullets: [
      'Implemented a C++ library that computes robot base posture (Z, roll, pitch) from commanded (X, Y, yaw) by querying Gazebo physics services — replacing a flat-terrain hardcode in the redundancy resolver',
      'Integrated the library into an existing ROS/MoveIt framework for a mobile manipulator; validated on inclined-slope scenarios with roll/pitch error ≤ 0.10 rad',
    ],
    tags: ['C++', 'ROS', 'Gazebo', 'MoveIt', 'Robotics', 'Kinematics'],
  },
];
