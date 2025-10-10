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
    title: "Basics of IoT and Circuit Fundamentals",
    goal: "Understand IoT basics, circuit building, and learn to work with simple sensors and actuators.",
    weeks: [
      {
        week: 1,
        classNum: 1,
        name: "Introduction to IoT and Kit Components",
        desc: "Learn what IoT is, explore real-life examples, and get familiar with your IoT kit components safely.",
      },
      {
        week: 1,
        classNum: 2,
        name: "Basics of Circuit Building & Arduino IDE Setup",
        desc: "Learn to use the breadboard, install Arduino IDE, and upload your first code to the board.",
      },
      {
        week: 1,
        classNum: 3,
        name: "LED Control using Arduino Code",
        desc: "Write a simple Arduino program using digitalWrite() and delay() to blink LEDs.",
      },
      {
        week: 2,
        classNum: 1,
        name: "Exploring the Breadboard",
        desc: "Understand breadboard connections, series and parallel circuits, and practical circuit assembly.",
      },
      {
        week: 2,
        classNum: 2,
        name: "Light Detection using LDR Sensor",
        desc: "Create a light-sensing system using an LDR to detect brightness or darkness.",
      },
      {
        week: 2,
        classNum: 3,
        name: "Temperature Sensing using LM35/DHT11",
        desc: "Measure and display temperature data using LM35 or DHT11 sensors.",
      },
      {
        week: 3,
        classNum: 1,
        name: "Working with Buzzer and DC Motor",
        desc: "Learn to control sound and motion using buzzers and DC motors with Arduino.",
      },
      {
        week: 3,
        classNum: 2,
        name: "Temperature Controlled Fan System",
        desc: "Build a fan that turns ON/OFF automatically based on temperature readings.",
      },
      {
        week: 3,
        classNum: 3,
        name: "Controlling Servo Motor with Potentiometer",
        desc: "Control the position of a servo motor by rotating a potentiometer knob.",
      },
      {
        week: 4,
        classNum: 1,
        name: "Automatic Street Light System",
        desc: "Automate street lights that turn ON at night and OFF during the day using an LDR sensor.",
      },
      {
        week: 4,
        classNum: 2,
        name: "Fire Detection Alarm using Flame Sensor",
        desc: "Create a fire alert system that triggers an alarm when flames are detected.",
      },
      {
        week: 4,
        classNum: 3,
        name: "Obstacle Detection using IR Sensor",
        desc: "Detect nearby objects using infrared sensors for automation or robotic systems.",
      },
    ],
    summary:
      "Students will gain confidence in circuit design, Arduino programming, and using various sensors and motors for small automated projects.",
  },
  {
    month: "Month 2",
    title: "Intermediate IoT & Sensor Integration",
    goal: "Explore multiple sensors and develop smart, real-time automation systems.",
    weeks: [
      {
        week: 5,
        classNum: 1,
        name: "Understanding Digital & Analog Sensors",
        desc: "Learn how different sensors send data to Arduino and how to process input signals.",
      },
      {
        week: 5,
        classNum: 2,
        name: "Soil Moisture Sensor-based Plant Watering",
        desc: "Build a smart irrigation system that waters plants automatically when the soil is dry.",
      },
      {
        week: 5,
        classNum: 3,
        name: "Rain Detection System",
        desc: "Design a system that senses rain and sends alerts or activates safety mechanisms.",
      },
      {
        week: 6,
        classNum: 1,
        name: "Ultrasonic Distance Measurement",
        desc: "Measure object distance accurately using ultrasonic sound waves.",
      },
      {
        week: 6,
        classNum: 2,
        name: "Automatic Parking System using Ultrasonic Sensor",
        desc: "Simulate an automatic parking assist system that warns about nearby obstacles.",
      },
      {
        week: 6,
        classNum: 3,
        name: "Smart Dustbin using Ultrasonic Sensor & Servo",
        desc: "Create a touchless dustbin that opens automatically when someone approaches.",
      },
      {
        week: 7,
        classNum: 1,
        name: "Gas Leakage Detection System (MQ-2)",
        desc: "Detect gas or smoke leaks using an MQ-2 sensor and trigger a safety alarm.",
      },
      {
        week: 7,
        classNum: 2,
        name: "Smart Home Safety Alarm",
        desc: "Integrate multiple sensors to build a smart alarm system for home safety.",
      },
      {
        week: 7,
        classNum: 3,
        name: "Water Level Monitoring System",
        desc: "Measure and display water levels in a tank to prevent overflow or shortage.",
      },
      {
        week: 8,
        classNum: 1,
        name: "Motion Detection using PIR Sensor",
        desc: "Detect motion in a room for security or energy-saving applications.",
      },
      {
        week: 8,
        classNum: 2,
        name: "Security Light Automation System",
        desc: "Automatically switch lights ON when motion is detected and OFF when idle.",
      },
      {
        week: 8,
        classNum: 3,
        name: "Mini Project: Multi-Sensor Smart Room Setup",
        desc: "Combine multiple sensors to build a smart, automated room environment.",
      },
    ],
    summary:
      "Students will integrate various sensors, automate everyday tasks, and develop hands-on IoT systems.",
  },
  {
    month: "Month 3",
    title: "Bluetooth IoT Projects & Integration",
    goal: "Learn wireless communication and create advanced IoT automation projects.",
    weeks: [
      {
        week: 9,
        classNum: 1,
        name: "Introduction to Bluetooth Module (HC-05)",
        desc: "Understand how Bluetooth modules work and connect Arduino with HC-05 for wireless control.",
      },
      {
        week: 9,
        classNum: 2,
        name: "Pairing & Sending Commands from Mobile",
        desc: "Pair your smartphone and send commands to Arduino using Bluetooth apps.",
      },
      {
        week: 9,
        classNum: 3,
        name: "Bluetooth LED Control",
        desc: "Control LED lights from your phone using Bluetooth signals.",
      },
      {
        week: 10,
        classNum: 1,
        name: "Bluetooth Controlled Fan/Appliance",
        desc: "Build a system to turn home appliances ON/OFF via mobile control.",
      },
      {
        week: 10,
        classNum: 2,
        name: "Bluetooth Controlled Car/Robot",
        desc: "Design a Bluetooth-based robot that moves through directional commands.",
      },
      {
        week: 10,
        classNum: 3,
        name: "Voice Controlled Robot using Bluetooth",
        desc: "Upgrade your robot to respond to voice commands using a voice-control app.",
      },
      {
        week: 11,
        classNum: 1,
        name: "IoT Data Display using LCD/OLED",
        desc: "Display live sensor readings or system status on LCD/OLED screens.",
      },
      {
        week: 11,
        classNum: 2,
        name: "IoT Smart Home Dashboard (Local Control)",
        desc: "Build a small control dashboard to manage smart home devices locally.",
      },
      {
        week: 11,
        classNum: 3,
        name: "Bluetooth Home Automation System",
        desc: "Integrate multiple devices into one system for full Bluetooth-based automation.",
      },
      {
        week: 12,
        classNum: 1,
        name: "Final Project Planning & Team Formation",
        desc: "Form teams, select project topics, and plan system design with guidance.",
      },
      {
        week: 12,
        classNum: 2,
        name: "Final Project Development",
        desc: "Build, test, and troubleshoot your final IoT project.",
      },
      {
        week: 12,
        classNum: 3,
        name: "Presentation & Demonstration Day",
        desc: "Showcase your completed projects and demonstrate them live.",
      },
    ],
    summary:
      "Students will learn Bluetooth-based IoT control, wireless communication, and teamwork through a final showcase project.",
  },
];

const IotProgram = () => {
  return (
    <Container>
      <Header className="no-print">
        <HeaderLeft>
          <h1>⚙ IoT Course Outline — 3-Month Plan</h1>
          <Meta>
            Schedule: 3 Classes per Week (≈36 Sessions) • Goal:Comprehensive
            instructor-led curriculum with weekly projects and final showcase
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

export default IotProgram;
