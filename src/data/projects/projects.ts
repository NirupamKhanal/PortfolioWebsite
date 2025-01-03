import { Project } from '../../components/projects/types';

export const projects: Project[] = [
  {
    title: "OCR-based Learning Interface for Dyslexia Assistance",
    period: "October 2024 - Present",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1200",
    technologies: ["AR", "ML", "OCR", "UX/UI"],
    description: [
      "Designing and developing augmented reality (AR) tools and machine learning (ML)-based Optical Character Recognition (OCR) systems to enhance accessibility and engagement in text-based learning.",
      "Leveraging AR interfaces for real-time text manipulation and interaction, including customizations for improved readability and comprehension.",
      "Implementing ML-driven algorithms to provide personalized feedback for language and literacy development, focusing on user-specific learning trajectories.",
      "Exploring applications of advanced UX/UI principles and interactive technologies for accessibility and educational innovation."
    ],
    note: "The project is part of an ongoing initiative focused on accessibility and literacy enhancement. Details are intentionally limited due to potential proprietary considerations.",
    animation: "ocr"
  },
  {
    title: "Quantitative Finance and Econometrics Portfolio",
    period: "Sep 2024 - Present",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
    technologies: ["Monte Carlo", "VaR", "Tableau", "Matplotlib"],
    description: [
      "Implemented data-driven solutions for portfolio optimization, risk assessment, volatility modeling and asset allocation by integrating Monte Carlo simulations, Value at Risk (VaR) analysis, and regression techniques.",
      "Applied time-series analysis and machine learning models to extract insights from large datasets, enhancing decision-making for investment strategies and risk mitigation.",
      "Delivered insightful reports and visualizations using Tableau and Matplotlib, effectively communicating complex data analysis."
    ],
    githubUrl: "https://github.com/NirupamKhanal/Quant",
    animation: "quant"
  },
  {
    title: "Numerical Analysis Portfolio",
    period: "Aug 2024 - Present",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1200",
    technologies: ["MATLAB", "Fortran 90", "Julia", "Python"],
    description: [
      "Developed a comprehensive portfolio of numerical methods and algorithms, applied to complex problem-solving and simulation prototyping in computational mathematics and physics.",
      "Designed and implemented algorithms for solving PDEs, ODEs, and linear algebra systems, ensuring high computational efficiency across different platforms.",
      "Applied advanced numerical techniques such as FEM, spectral methods, and Monte Carlo simulations to solve physics-based models."
    ],
    githubUrl: "https://github.com/NirupamKhanal/NumericalAnalysis",
    animation: "numerical"
  },
  {
    title: "Quantum Algorithms Development",
    period: "Jun 2024 - Present",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200",
    technologies: ["IBM Qiskit", "Python", "Quantum Computing"],
    description: [
      "Using IBM's Qiskit API to initialise and instantiate workflows in quantum computing for personal projects.",
      "Deploying algorithms to find optimal settings for transpilation and execution of code in QPUs.",
      "Developing quantum algorithms including error analysis, Grover's algorithm, and variational quantum eigenvalue solver."
    ],
    githubUrl: "https://github.com/NirupamKhanal/Quantum",
    animation: "quantum"
  },
  {
    title: "Data Structures and Algorithms Documentation",
    period: "May 2024 - Present",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80&w=1200",
    technologies: ["C", "C++", "Make", "Shell"],
    description: [
      "Authored comprehensive documentation on various data structures and algorithms implementation.",
      "Leveraged pointers for dynamic memory allocation and efficient data manipulation.",
      "Implemented shell-scripts for automated compilation and project build processes."
    ],
    githubUrl: "https://github.com/NirupamKhanal/DSA",
    animation: "pathfinding"
  },
  {
    title: "ChatBot Application",
    period: "Jun 2023",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=1200",
    technologies: ["OpenAI API", "React", "Node.js"],
    description: [
      "Designed and developed an intelligent ChatBot leveraging OpenAI's ChatGPT API.",
      "Implemented a seamless front-end interface with advanced API functionalities.",
      "Engineered real-time conversation flow management for dynamic user engagement."
    ],
    githubUrl: "https://github.com/NirupamKhanal/Project-Chat-Completion---ChatGPT-application",
    animation: "chatbot"
  }
];