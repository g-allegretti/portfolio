export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  image?: string;
  category: 'demo' | 'university' | 'thesis';
  year: string;
}

export const projects: Project[] = [
  {
    title: 'Railway Inspection Dashboard',
    subtitle: 'Qt/QML Real-Time Dashboard Demo',
    description:
      'Qt5/QML desktop application reproducing a real-time railway inspection monitoring interface. Dual-window layout — dashboard plus full-screen multi-camera viewer — with seven synchronised camera streams driven by a synthetic data engine.',
    tags: ['C++17', 'Qt 5.15', 'QML', 'QQuickImageProvider', 'CMake'],
    github: 'https://github.com/g-allegretti/railway-inspection-dashboard-demo',
    image: '/screenshots/railway-dashboard.png',
    category: 'demo',
    year: '2025',
  },
  {
    title: 'Line-Scan Inspection Dashboard',
    subtitle: 'Qt/QML Real-Time Dashboard Demo',
    description:
      'Qt5/QML desktop application reproducing a real-time line-scan inspection GUI. Four synchronised sensor channels over a 200 m rolling buffer, scan-signal waveform with adaptive thresholds, and live scan-line image strips at ~36 km/h.',
    tags: ['C++17', 'Qt 5.15', 'QML', 'QtCharts', 'QQuickImageProvider', 'CMake'],
    github: 'https://github.com/g-allegretti/line-scan-inspection-dashboard-demo',
    image: '/screenshots/line-scan-dashboard.png',
    category: 'demo',
    year: '2025',
  },
  {
    title: 'Automatic Facial Expression Recognition',
    subtitle: 'Master Thesis — University of Salerno + Erasmus, University of Groningen',
    description:
      'Investigated temporal integration strategies for FER in unconstrained video. Implemented and benchmarked three architectures (SE-ResNet50, SE-ResNet-RNN, C3D) plus multimodal video+audio fusion on the AFEW and Aff-Wild 2 datasets, across 7 emotion classes.',
    tags: ['Python', 'Keras', 'TensorFlow', 'OpenCV', 'MTCNN', 'OpenFace', 'LSTM', 'C3D'],
    github: 'https://github.com/g-allegretti/facial-expression-recognition-thesis',
    image: '/screenshots/facial-expression-recognition.png',
    category: 'thesis',
    year: '2019–2020',
  },
  {
    title: 'Autonomous Vision Rover',
    subtitle: 'Computer Vision — University of Salerno',
    description:
      'ROS-based autonomous navigation for a ground rover. A hybrid pipeline (MobileNet SSD coarse detection + Linear SVM on HOG features) raised F1 on the n_1 sign class from 0.327 to 0.918, with real-time heading and approach correction via RGB+depth fusion.',
    tags: ['Python', 'ROS', 'TensorFlow', 'OpenCV', 'MobileNet SSD', 'scikit-learn', 'Intel RealSense'],
    github: 'https://github.com/g-allegretti/autonomous-vision-rover',
    image: '/screenshots/autonomous-vision-rover.png',
    category: 'university',
    year: '2019',
  },
  {
    title: 'ROS Object Grasping — Niryo One',
    subtitle: 'Cognitive Robotics — University of Salerno',
    description:
      'Autonomous pick-and-place system on a 6-DOF robotic arm (Jetson Nano): coloured-object detection via fine-tuned MobileNet SSD, grasp poses computed by a custom inverse-kinematics solver, and a four-node ROS architecture for end-to-end sorting.',
    tags: ['Python', 'ROS', 'TensorFlow', 'Jetson Nano', 'Intel RealSense', 'Niryo One'],
    github: 'https://github.com/g-allegretti/ros-object-grasping',
    image: '/screenshots/ros-object-grasping.png',
    category: 'university',
    year: '2019',
  },
  {
    title: 'Terrain-Adaptive Kinematics',
    subtitle: 'ALTEC / University of Salerno — Planetary Robotics',
    description:
      'C++ library for ESA/ALTEC computing terrain-constrained base posture (Z, roll, pitch) of a mobile manipulator on uneven terrain — replacing a flat-terrain hardcode in the redundancy resolver. Roll/pitch error ≤ 0.10 rad and Z ≤ 0.10 m on inclined slope, convergence in 0.001–0.009 s.',
    tags: ['C++', 'ROS', 'Gazebo', 'URDF/SRDF'],
    github: 'https://github.com/g-allegretti/terrain-adaptive-kinematics',
    image: '/screenshots/terrain-adaptive-kinematics.jpg',
    category: 'university',
    year: '2019',
  },
  {
    title: 'STM32 Differential-Drive Rover',
    subtitle: 'Embedded Systems — University of Salerno',
    description:
      'Embedded firmware for a 4-wheeled differential-drive rover on STM32F401RETx. Two driving modes — autonomous line-following via reflectance array and manual driving over Bluetooth — both running on a custom PID closed-loop motor controller with encoder feedback. Sonar obstacle detection and Sabertooth motor driver over Packetized Serial UART.',
    tags: ['C', 'STM32', 'HAL', 'PID', 'UART/DMA', 'ADC', 'I2C'],
    github: 'https://github.com/g-allegretti/stm32-rover',
    image: '/screenshots/stm32-rover.jpg',
    category: 'university',
    year: '2018',
  },
];
