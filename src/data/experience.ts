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
    location: 'Turin, Italy',
    description:
      'Core developer on a real-time railway infrastructure video inspection system. The platform runs on-board inspection vehicles, processes live multi-camera video streams through a multithreaded C++ pipeline, and infers defects using several DNN backends — all within strict real-time constraints.',
    bullets: [
      'Designed and implemented YOLOv8 + TensorRT inference backend, enabling GPU-accelerated object detection with sub-millisecond preprocessing and batched inference',
      'Built multi-GPU inference support in Docker: parallel dispatch across two GPUs boosted throughput for the KRMV deployment',
      'Redesigned the output management architecture — centralising detection logs, JSON export, benchmarks and diagnostics into a single controller, eliminating scattered write paths across the pipeline',
      'Led the CatenaryWearProcessor 2.0 redesign: rewrote the Qt/QML GUI from scratch, refactored the backend to support generalised N-wire wear calculation, and redesigned the camera/localizer synchronisation logic for multi-source FIFO streams',
      'Decoupled RealTimeMonitor from VIRAiL by integrating LinearImageBuilder for on-the-fly image reconstruction; reduced inter-process coupling significantly',
      'Refactored DMADataBroker, a ZMQ-based video stream multiplexer routing N camera feeds to M decoder sockets in real time',
      'Containerised core libraries with Docker; set up GitLab CI/CD pipelines for Linux (GCC) and Windows (MSVC) builds',
      'Delivered releases for international customers: KRMV (South Korea), TCVIS-INDIA, TIMS (Turkey), INFRABEL (Belgium)',
    ],
    tags: ['C++17', 'Qt/QML', 'OpenCV', 'TensorRT', 'YOLOv8', 'ZMQ', 'Docker', 'GitLab CI/CD', 'CMake', 'Multithreading'],
  },
  {
    company: 'ALTEN (consultant at Leonardo Aircraft Division)',
    role: 'Software Engineer',
    period: '07/2020 – 03/2023',
    location: 'Turin, Italy',
    description:
      'Embedded in Leonardo\'s avionics simulation team as an ALTEN consultant. Developed HMI and simulation software for military aircraft mission systems.',
    bullets: [
      'Designed and developed Qt/C++ HMI applications for avionics mission simulation — real-time monitoring of cockpit inputs and injection of simulated system failures',
      'Developed and maintained a flight and mission simulation model in C++, with a focus on reliability, performance, and system integration',
      'Worked in Ada for safety-critical avionics components, applying DO-178C development practices',
    ],
    tags: ['C++', 'Qt', 'Ada', 'HMI', 'Avionics', 'Real-Time', 'Simulation'],
  },
  {
    company: 'ALTEC S.c.p.A.',
    role: 'Software Engineer (Internship)',
    period: '03/2019 – 07/2019',
    location: 'Turin, Italy',
    description:
      'Industry collaboration with the ESA/ASI centre for space logistics and robotics. Designed a terrain-aware kinematics library for planetary exploration rovers.',
    bullets: [
      'Implemented GazeboTerrainTransformLibrary — a C++ library that queries Gazebo physics services to compute robot base posture (Z, roll, pitch) from commanded (X, Y, yaw), replacing a flat-terrain hardcode in the redundancy resolver',
      'Integrated the library into an existing ROS/MoveIt framework for a Bulldog + MICO6 mobile manipulator; validated on inclined-slope scenarios with roll/pitch error ≤ 0.10 rad',
    ],
    tags: ['C++', 'ROS', 'Gazebo', 'MoveIt', 'Robotics', 'Kinematics'],
  },
];
