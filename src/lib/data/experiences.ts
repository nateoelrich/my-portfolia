import type { WorkExperience } from '$lib/types/experience';

/**
 * Collection of work experience entries in reverse chronological order
 */
export const workExperiences: WorkExperience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Alaska Airlines - via Fuel Talent',
    startDate: 'December 2024',
    endDate: 'Present',
    employmentType: 'Contract',
    responsibilities: [
      'Designed and developed software that reduced profile data processing times from weeks to days, significantly enhancing operational efficiency and creating a model for Hawaiian profile data migration',
      'Led the creation of a mobile-first micro-site for the Atmos brand, improving user accessibility and experience',
      'Developed, deployed, and documented auth packages for company-wide use',
      'Quickly became the domain expert and team lead as company changes took effect',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Imperative | Chronus',
    startDate: 'March 2022',
    endDate: 'September 2024',
    employmentType: 'Full-time',
    responsibilities: [
      'Developed critical onboarding system that enhanced the user experience and operational efficiency',
      'Enhanced web-based video and conversation platform using lightweight front end and robust messaging service',
      'Replaced legacy websites with modernized micro-sites and frameworks to enhance the businesses\' ability to pivot',
    ],
  },
  {
    title: 'Software Engineer II',
    company: 'QuoteWizard | LendingTree',
    startDate: 'March 2019',
    endDate: 'March 2022',
    employmentType: 'Full-time',
    responsibilities: [
      'Rebuilt legacy admin systems in modern frameworks using VueJS and .NET Web APIs',
      'Used .NET and Azure Cloud to develop high-performance transactional systems that support the rapid buying and selling of insurance leads, ensuring system reliability and performance',
      'Started becoming more of a team lead as more senior engineers left',
    ],
  },
  {
    title: 'Senior Technical Lead',
    company: 'City of Tacoma',
    startDate: 'September 2018',
    endDate: 'January 2019',
    employmentType: 'Full-time',
    responsibilities: [
      'Led engineering team in developing and maintaining municipal software systems',
      'Managed database interactions and queries with MSSQL to optimize data retrieval and storage',
      'Performed duties of PM utilizing Agile Scrum methods that included backlog management and normal sprint ceremonies',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Puget Sound Clean Air',
    startDate: 'June 2013',
    endDate: 'August 2018',
    employmentType: 'Contract toFull-time',
    responsibilities: [
      'Modernized the agency\'s web applications for use by public and agency scientists – many of these still in use today',
      'Replaced legacy desktop app for employee timesheets and payroll with a WPF desktop app',
      'Managed database interactions and queries with MSSQL to optimize data retrieval and storage of agency air quality data',
      'Performed duties of PM utilizing Agile Scrum methods that included backlog management and normal sprint ceremonies',
    ],
  },
];
