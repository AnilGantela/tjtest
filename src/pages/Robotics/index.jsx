import React from "react";
import {
  Container,
  Header,
  HeaderLeft,
  Meta,
  HeaderRight,
  Badge,
  Controls,
  Card,
  MonthTitle,
  Pill,
  Goal,
  Table,
  Summary,
  Footer,
} from "./styledComponents";

const programData = [
  {
    month: "Month 1",
    title: "Foundations of Robotics & Motor Control",
    goal: "Learn basic components, motor control, and robot movement using Arduino.",
    weeks: [
      {
        week: 1,
        classNum: 1,
        name: "Introduction to Robotics & Components",
        desc: "Understand what robotics is, explore tools, motors, drivers (L293D), and Arduino basics.",
      },
      {
        week: 1,
        classNum: 2,
        name: "Building a Basic Robot Chassis",
        desc: "Assemble the robot base, connect DC motors and power supply step-by-step.",
      },
      {
        week: 1,
        classNum: 3,
        name: "Arduino IDE & First Code (LED + Motor Test)",
        desc: "Set up Arduino IDE and upload your first motor test program to verify connections.",
      },
      {
        week: 2,
        classNum: 1,
        name: "Forward & Reverse Motion Coding",
        desc: "Learn how to move the robot forward and backward using motor driver logic.",
      },
      {
        week: 2,
        classNum: 2,
        name: "Turning Logic (Left, Right, Stop)",
        desc: "Code and test how the robot turns and stops using digital pin control.",
      },
      {
        week: 2,
        classNum: 3,
        name: "Obstacle Simulation Practice",
        desc: "Practice maneuvering your robot manually around small obstacles or cones.",
      },
      {
        week: 3,
        classNum: 1,
        name: "Understanding PWM and Speed Control",
        desc: "Learn to vary motor speed using analogWrite() and PWM concepts.",
      },
      {
        week: 3,
        classNum: 2,
        name: "Variable Speed Car Project",
        desc: "Control robot speed using a potentiometer input.",
      },
      {
        week: 3,
        classNum: 3,
        name: "Mini Project – Basic Car Challenge",
        desc: "Test your robot’s speed, stability, and direction in a short track challenge.",
      },
      {
        week: 4,
        classNum: 1,
        name: "Introduction to Sensors in Robotics",
        desc: "Learn about IR, ultrasonic, and line sensors and their uses in robots.",
      },
      {
        week: 4,
        classNum: 2,
        name: "IR Sensor Integration",
        desc: "Use an IR sensor to detect obstacles and stop the robot automatically.",
      },
      {
        week: 4,
        classNum: 3,
        name: "Project: Obstacle Detection Robot",
        desc: "Combine motion control and IR sensing to make a reactive obstacle robot.",
      },
    ],
    summary:
      "Students build and program their first working robot capable of basic movements and obstacle response.",
  },
  {
    month: "Month 2",
    title: "Smart Robots: Bluetooth & Sensor Integration",
    goal: "Add wireless communication and automation to robots.",
    weeks: [
      {
        week: 5,
        classNum: 1,
        name: "Bluetooth Module (HC-05) Introduction",
        desc: "Learn how Bluetooth works and connect it with Arduino for serial communication.",
      },
      {
        week: 5,
        classNum: 2,
        name: "Bluetooth Command Coding",
        desc: "Write Arduino code to receive and respond to Bluetooth commands from a phone.",
      },
      {
        week: 5,
        classNum: 3,
        name: "Bluetooth Controlled Robot Car",
        desc: "Build a robot that can move in all directions via a mobile app.",
      },
      {
        week: 6,
        classNum: 1,
        name: "Voice Controlled Robot (via App)",
        desc: "Use voice commands to control robot motion through mobile speech recognition.",
      },
      {
        week: 6,
        classNum: 2,
        name: "Project – Voice Controlled Vehicle",
        desc: "Implement and test your own voice-controlled robot.",
      },
      {
        week: 6,
        classNum: 3,
        name: "Debug & Race Session",
        desc: "Troubleshoot direction issues and participate in a short “voice race.”",
      },
      {
        week: 7,
        classNum: 1,
        name: "Ultrasonic Sensor Integration",
        desc: "Learn how ultrasonic sensors measure distance and avoid collisions.",
      },
      {
        week: 7,
        classNum: 2,
        name: "Obstacle Avoidance Robot",
        desc: "Build a robot that detects obstacles and automatically changes direction.",
      },
      {
        week: 7,
        classNum: 3,
        name: "Challenge: Avoid & Navigate Track",
        desc: "Compete in obstacle courses using your autonomous robot.",
      },
      {
        week: 8,
        classNum: 1,
        name: "Gyroscope (MPU6050) Introduction",
        desc: "Understand how gyroscopes detect angle, tilt, and balance in robots.",
      },
      {
        week: 8,
        classNum: 2,
        name: "Gyroscope Controlled Robot",
        desc: "Control robot motion using hand or tilt gestures.",
      },
      {
        week: 8,
        classNum: 3,
        name: "Project: Gesture Controlled Robot",
        desc: "Build a full robot that responds to tilt-based controls.",
      },
    ],
    summary:
      "Students make advanced robots that respond to mobile apps, voice commands, and gestures.",
  },
  {
    month: "Month 3",
    title: "Advanced Robotics: Autonomous Systems",
    goal: "Create fully autonomous robots using advanced sensors and algorithms.",
    weeks: [
      {
        week: 9,
        classNum: 1,
        name: "Introduction to Line Following Logic",
        desc: "Learn the concept of line tracking using IR sensor arrays.",
      },
      {
        week: 9,
        classNum: 2,
        name: "Building a Line Follower Robot",
        desc: "Assemble and code a robot to follow black or white lines automatically.",
      },
      {
        week: 9,
        classNum: 3,
        name: "Testing & Adjusting Line Follower",
        desc: "Tune sensor positions and delays for smooth path following.",
      },
      {
        week: 10,
        classNum: 1,
        name: "Maze Solving Algorithms (Left-Hand Rule)",
        desc: "Learn logic-based decision-making for maze-solving robots.",
      },
      {
        week: 10,
        classNum: 2,
        name: "Maze Solver Robot Build",
        desc: "Program the robot to navigate mazes using multiple IR sensors.",
      },
      {
        week: 10,
        classNum: 3,
        name: "Maze Solver Testing & Optimization",
        desc: "Test the robot in real mazes and fine-tune turning logic.",
      },
      {
        week: 11,
        classNum: 1,
        name: "Integrating Multiple Sensors",
        desc: "Combine IR, ultrasonic, and Bluetooth for multi-functional robots.",
      },
      {
        week: 11,
        classNum: 2,
        name: "IoT Smart Robot Concept",
        desc: "Learn how to send sensor data (distance, motion) to other devices.",
      },
      {
        week: 11,
        classNum: 3,
        name: "Final Robot Integration Build",
        desc: "Create a robot that includes control, automation, and communication.",
      },
      {
        week: 12,
        classNum: 1,
        name: "Final Project Planning",
        desc: "Choose project type (Line Follower / Maze Solver / IoT Robot) and form teams.",
      },
      {
        week: 12,
        classNum: 2,
        name: "Final Project Construction & Debugging",
        desc: "Assemble, program, and refine final robot designs.",
      },
      {
        week: 12,
        classNum: 3,
        name: "Showcase & Competition Day",
        desc: "Present and demonstrate projects in a fun competition.",
      },
    ],
    summary:
      "Students design, build, and present fully autonomous robots capable of navigation and communication.",
  },
];

const RoboticsProgram = () => {
  return (
    <Container>
      <Header className="no-print">
        <HeaderLeft>
          <h1>🤖 3-Month Robotics Training Program</h1>
          <Meta>
            Schedule: 3 Classes per Week (≈36 Sessions) • Goal: Build robots
            from wired models to autonomous systems
          </Meta>
        </HeaderLeft>
        <HeaderRight>
          <Badge>Duration: 3 Months • 12 Weeks • 36 Sessions</Badge>
          <Controls>
            <button onClick={() => window.print()}>Print / Save PDF</button>
          </Controls>
        </HeaderRight>
      </Header>

      {programData.map((month) => (
        <Card key={month.month}>
          <MonthTitle>
            <Pill>{month.month}</Pill>
            <strong>{month.title}</strong>
          </MonthTitle>
          <Goal>{month.goal}</Goal>

          <Table>
            <thead>
              <tr>
                <th>Week</th>
                <th>Class</th>
                <th>Session / Project Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {month.weeks.map((wk, idx) => (
                <tr key={idx}>
                  <td>{wk.week}</td>
                  <td>{wk.classNum}</td>
                  <td>{wk.name}</td>
                  <td className="desc">{wk.desc}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Summary>
            <strong>Week Summary:</strong> {month.summary}
          </Summary>
        </Card>
      ))}

      <Footer>
        Designed for instructors and students • Adjust pacing & complexity to
        suit participant level
      </Footer>
    </Container>
  );
};

export default RoboticsProgram;
