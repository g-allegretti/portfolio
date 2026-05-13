export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  category: 'demo' | 'university' | 'thesis';
  year: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    title: 'Line Scanner Monitor',
    subtitle: 'Qt/QML Real-Time Dashboard Demo',
    description:
      'Standalone desktop application simulating the live monitoring GUI of a line-scan inspection system for railway track geometry and surface analysis. Features dual geometry plots (elevation/lateral, 4 sensors, 200 m rolling window), waveform signal trace with threshold markers, zoomed unit detail view, and scrolling scan-line image strips.',
    tags: ['C++17', 'Qt 5.15', 'QML', 'QtCharts', 'QQuickImageProvider', 'CMake'],
    github: 'https://github.com/g-allegretti/line-scanner-monitor-demo',
    category: 'demo',
    year: '2025',
    highlights: [
      'VXYModelMapper bindings created dynamically at runtime via Qt.createQmlObject',
      'QAbstractTableModel with 200 m rolling buffer for 9-column geometry data',
      'QPainter Gaussian scan-line synthesis streamed through QQuickImageProvider',
    ],
  },
  {
    title: 'Wire Wear Monitor',
    subtitle: 'Qt/QML Real-Time Dashboard Demo',
    description:
      'Desktop application mimicking the real-time monitoring GUI of an automated catenary wire wear measurement system. Displays height/stagger position plots for 4 conductors, sensor luminance profile with boundary markers, zoomed channel profile, and accumulated sensor image strips.',
    tags: ['C++17', 'Qt 5.15', 'QML', 'QtCharts', 'QQuickImageProvider', 'CMake'],
    github: 'https://github.com/g-allegretti/wire-wear-monitor-demo',
    category: 'demo',
    year: '2025',
    highlights: [
      'Multi-series ChartView with ChartThemeDark and useOpenGL rendering',
      'FastBlur disabled-state overlay for inactive sensor channels',
      'QTimer-driven synthetic data at ~36 km/h with sinusoidal drift and Gaussian noise',
    ],
  },
  {
    title: 'Railway Inspection Monitor',
    subtitle: 'Qt/QML Real-Time Dashboard Demo',
    description:
      'Real-time monitoring dashboard simulating a railway video inspection system. Shows defect detection results, live video feed simulation, measurement plots and a structured results panel — all driven by a synthetic data engine without proprietary library dependencies.',
    tags: ['C++17', 'Qt 5.15', 'QML', 'QtCharts', 'CMake'],
    github: 'https://github.com/g-allegretti/railway-inspection-monitor-demo',
    category: 'demo',
    year: '2025',
  },
  {
    title: 'Automatic Facial Expression Recognition',
    subtitle: 'Master Thesis — University of Salerno + Erasmus, University of Groningen',
    description:
      'Investigated temporal integration strategies for Automatic FER in unconstrained video ("in the wild"). Implemented and benchmarked three architectures — SE-ResNet50 baseline, SE-ResNet-RNN (LSTM), and C3D — on AFEW and Aff-Wild 2 datasets. Also implemented multimodal fusion combining video (CNN-RNN + C3D) and audio (SVM on HOG features) with learned per-modality weights.',
    tags: ['Python', 'Keras', 'TensorFlow', 'OpenCV', 'MTCNN', 'OpenFace', 'LSTM', 'C3D'],
    github: 'https://github.com/g-allegretti/facial-expression-recognition-thesis',
    category: 'thesis',
    year: '2019–2020',
    highlights: [
      'Three temporal architectures: SE-ResNet50, SE-ResNet-RNN, C3D',
      'Multimodal fusion: video CNN-RNN + C3D + audio SVM with learned weights',
      'Evaluated on AFEW (EmotiW) and Aff-Wild 2 across 7 emotion classes',
    ],
  },
  {
    title: 'Autonomous Vision Rover',
    subtitle: 'Computer Vision — University of Salerno',
    description:
      'ROS-based autonomous navigation system for a ground rover. Reads numbered signs and directional arrows using a hybrid DNN + SVM pipeline: MobileNet SSD v2 for coarse detection, then a Linear SVM on HOG features for fine-grained classification. The rover locks onto targets, corrects heading and approach angle in real time, and drives through a gate course.',
    tags: ['Python', 'ROS', 'TensorFlow', 'OpenCV', 'MobileNet SSD', 'scikit-learn', 'Intel RealSense'],
    github: 'https://github.com/g-allegretti/autonomous-vision-rover',
    category: 'university',
    year: '2019',
    highlights: [
      'Hybrid DNN + Linear SVM pipeline raised F1 on n_1 class from 0.327 to 0.918',
      'State-machine navigation with alignment and distortion correction',
      'RGB + depth fusion via Intel RealSense D435i for distance/angle estimation',
    ],
  },
  {
    title: 'ROS Object Grasping — Niryo One',
    subtitle: 'Cognitive Robotics — University of Salerno',
    description:
      'Autonomous pick-and-place system: a 6-DOF robotic arm on a Jetson Nano identifies coloured objects with a depth camera and a fine-tuned MobileNet SSD, computes grasp poses via custom inverse kinematics, and sorts objects into matching boxes — all without human intervention.',
    tags: ['Python', 'ROS', 'TensorFlow', 'MoveIt', 'Jetson Nano', 'Intel RealSense', 'Niryo One'],
    github: 'https://github.com/g-allegretti/ros-object-grasping',
    category: 'university',
    year: '2019',
    highlights: [
      'Four-node ROS architecture: vision, engine, robot manager, trajectory listener',
      'Custom IK solver using homogeneous transformation matrices',
      'Shortest-path heuristic for optimal ball–box pair selection',
    ],
  },
  {
    title: 'Terrain-Adaptive Kinematics for Mobile Manipulators',
    subtitle: 'ALTEC / University of Salerno — Planetary Robotics',
    description:
      'C++ library for ESA/ALTEC that computes the terrain-constrained posture of a mobile manipulator base (Z, roll, pitch) from commanded (X, Y, yaw) by querying Gazebo physics services — replacing a flat-terrain hardcode in the redundancy resolver for a Bulldog + MICO6 planetary exploration robot.',
    tags: ['C++', 'ROS', 'Gazebo', 'MoveIt', 'URDF/SRDF'],
    github: 'https://github.com/g-allegretti/terrain-adaptive-kinematics',
    category: 'university',
    year: '2019',
    highlights: [
      'Roll/pitch error ≤ 0.10 rad, Z error ≤ 0.10 m on inclined slope',
      'Convergence time 0.001–0.009 s for adjacent poses',
      'Validated on slope scenario representative of planetary exploration',
    ],
  },
  {
    title: 'STM32 Line-Following Rover',
    subtitle: 'Embedded Systems — University of Salerno',
    description:
      'Embedded firmware for a 4-wheeled differential-drive rover on STM32F401RETx. PID closed-loop motor control via encoder feedback, reflectance sensor array for line following, sonar obstacle detection, Bluetooth monitoring, and Sabertooth motor driver over Packetized Serial UART.',
    tags: ['C', 'STM32', 'HAL', 'PID', 'UART/DMA', 'ADC', 'I2C'],
    github: 'https://github.com/g-allegretti/stm32-rover',
    category: 'university',
    year: '2018',
    highlights: [
      'PID closed-loop on 4 encoder timers; Sabertooth Packetized Serial over UART+DMA',
      '3-sensor steering state machine with stability control on oscillation detection',
      'Peripheral stack: Timer encoder mode, ADC+DMA, I2C, USART, HC-SR04 sonar',
    ],
  },
];
