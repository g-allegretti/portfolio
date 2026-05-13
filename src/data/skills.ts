export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Core Languages',
    skills: ['C++17', 'C', 'Python', 'Ada', 'QML', 'Bash'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['Qt 5/6', 'OpenCV', 'Boost', 'TensorRT', 'TensorFlow / Keras', 'PyTorch', 'ROS / ROS 2', 'ZMQ', 'GTest'],
  },
  {
    category: 'Build & DevOps',
    skills: ['CMake', 'Make', 'Docker', 'GitLab CI/CD', 'Git', 'Kestra'],
  },
  {
    category: 'Platforms & Tools',
    skills: ['Linux', 'Windows', 'GCC / Clang', 'MSVC', 'QtCreator', 'VS Code', 'Intel VTune', 'Doxygen'],
  },
  {
    category: 'Embedded & Hardware',
    skills: ['STM32 HAL', 'ESP-IDF', 'Raspberry Pi', 'NVIDIA Jetson Nano', 'UART / SPI / I2C'],
  },
  {
    category: 'Computer Vision & AI',
    skills: ['YOLO (v5/v8)', 'MobileNet SSD', 'LSTM / C3D', 'HOG + SVM', 'Panoptic Segmentation', 'TensorRT inference'],
  },
];
