/**
 * Represents a single project entry
 */
export interface Project {
  /** Project title or name */
  title: string;
  
  /** Technologies and tools used in the project */
  techStack: string[];
  
  /** Detailed description of the project */
  description: string;
  
  /** Who the project was built for (company, client, personal, etc.) */
  client: string;
  
  /** Project duration or timeframe */
  duration: string;
  
  /** Optional: Link to live project or demo */
  liveUrl?: string;
  
  /** Optional: Link to GitHub repository */
  githubUrl?: string;
  
  /** Optional: Array of image URLs for the project */
  images?: string[];
}
