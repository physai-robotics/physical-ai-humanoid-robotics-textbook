module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Course Overview',
      items: [
        'intro',
        'course-structure',
        'learning-outcomes',
      ],
    },
    {
      type: 'category',
      label: 'Weeks 1-2: Introduction to Physical AI',
      items: [
        'week-01/introduction',
        'week-01/embodied-intelligence',
        'week-01/hardware-software-codesign',
        'week-02/ros-overview',
        'week-02/getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Weeks 3-5: ROS 2 Fundamentals',
      items: [
        'week-03/ros2-architecture',
        'week-03/nodes-topics',
        'week-03/publishers-subscribers',
        'week-04/services-actions',
        'week-04/launch-files',
        'week-05/parameter-server',
        'week-05/best-practices',
      ],
    },
    {
      type: 'category',
      label: 'Weeks 6-7: Robot Simulation with Gazebo',
      items: [
        'week-06/gazebo-physics',
        'week-06/urdf-basics',
        'week-06/robot-models',
        'week-07/sensor-simulation',
        'week-07/advanced-gazebo',
      ],
    },
    {
      type: 'category',
      label: 'Weeks 8-10: NVIDIA Isaac Platform',
      items: [
        'week-08/isaac-sim-intro',
        'week-08/digital-twins',
        'week-09/sim-to-real',
        'week-09/model-training',
        'week-10/optimization',
        'week-10/deployment',
      ],
    },
    {
      type: 'category',
      label: 'Weeks 11-12: Humanoid Robot Development',
      items: [
        'week-11/kinematics',
        'week-11/dynamics',
        'week-11/control-systems',
        'week-12/gait-generation',
        'week-12/motion-planning',
      ],
    },
    {
      type: 'category',
      label: 'Week 13: Conversational Robotics',
      items: [
        'week-13/voice-interaction',
        'week-13/nlp-integration',
        'week-13/ai-agents',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/hardware-setup',
        'resources/software-tools',
        'resources/references',
      ],
    },
  ],
};
