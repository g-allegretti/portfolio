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
      'Working on a real-time video inspection platform for railway infrastructure. The system runs on-board inspection vehicles, processes live multi-camera streams through a multithreaded C++ pipeline, and infers defects via several deep learning backends — all within strict throughput constraints that enable analysis during active track runs.',
    bullets: [
      'Leading the architecture and pre-design of the next major version of the inspection framework — defining the DAG-based execution model, threading strategy, data-flow contracts, and the migration path from the current platform',
      'Designed and integrated a YOLOv8 + TensorRT inference backend, enabling GPU-accelerated object detection with sub-millisecond preprocessing and batched inference',
      'Implemented parallel dual-GPU inference to scale throughput in compute-intensive deployments',
      'Redesigned the output management architecture, consolidating detection logs, structured JSON export, benchmarks, and diagnostics into a single controller and eliminating scattered write paths across the pipeline',
      'Led the full redesign of a catenary wear measurement application: rewrote the Qt/QML GUI from scratch, generalised the backend to support N-wire wear calculation, and redesigned the camera/localizer synchronisation logic for asynchronous multi-source streams',
      'Decoupled the real-time monitoring GUI from the analysis library by integrating a dedicated image reconstruction module, significantly reducing inter-process coupling',
      'Refactored the video stream routing layer — a ZMQ-based multiplexer distributing N camera feeds to M decoder sockets',
      'Built Docker containerisation for core libraries and set up GitLab CI/CD pipelines for Linux (GCC) and Windows (MSVC)',
    ],
    tags: ['C++17', 'Qt/QML', 'OpenCV', 'TensorRT', 'YOLOv8', 'ZMQ', 'Docker', 'GitLab CI/CD', 'CMake', 'Multithreading'],
  },
  {
    company: 'Leonardo S.p.A. (via ALTEN)',
    role: 'Software Engineer',
    period: '07/2020 – 03/2023',
    location: 'Turin, Italy',
    description:
      'Embedded in the avionics software team at Leonardo Aircraft Division for nearly three years, working on mission system software for military aircraft. The environment follows strict safety and quality standards, with formal requirements management and structured development processes.',
    bullets: [
      'Designed and developed Qt/C++ HMI applications for avionics mission simulation — real-time display of cockpit inputs, sensor states, and injection of simulated system failures for testing and training scenarios',
      'Developed and maintained a flight and mission simulation model in C++, focused on high reliability, numerical accuracy, and integration with avionics hardware-in-the-loop environments',
      'Worked with Ada for safety-critical avionics components in a DO-178C-aligned development process',
    ],
    tags: ['C++', 'Qt', 'Ada', 'HMI', 'Avionics', 'Real-Time', 'Simulation', 'DO-178C'],
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
