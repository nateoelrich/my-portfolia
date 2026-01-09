/**
 * Represents a single work experience entry
 */
export interface WorkExperience {
  /** Job title or position held */
  title: string;
  
  /** Company or organization name */
  company: string;
  
  /** Start date of employment (e.g., "January 2020" or "2020-01") */
  startDate: string;
  
  /** End date of employment (e.g., "December 2022" or "Present") */
  endDate: string;
  
  /** List of responsibilities, achievements, or key points about the role */
  responsibilities: string[];
  
  /** Optional: Company location */
  location?: string;
  
  /** Optional: Employment type (Full-time, Contract, Part-time, etc.) */
  employmentType?: string;
}
