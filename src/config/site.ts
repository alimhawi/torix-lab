export interface SiteConfig {
  name: string;
  creator: string;
  creatorTitle: string;
  creatorBio?: string;
  email: string;
  tagline: string;
  description: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
  instagram?: string;
}

export const site: SiteConfig = {
  name: "TORIX",
  creator: "Ali Mhawi",
  creatorTitle: "Certified Sports Therapist & Strength Coach",
  creatorBio:
    "I'm a certified sports therapist and fitness professional with a focus on rehabilitation, bodyweight training, and movement quality. I independently designed and developed this platform to make evidence-based exercise programming and rehabilitation resources more accessible.",
  email: "alimhawi98@gmail.com",
  tagline: "Evidence-Based Bodyweight Exercise & Rehabilitation Library",
  description:
    "A curated, evidence-based library of bodyweight exercises featuring step-by-step instructions, progressions, regressions, and rehabilitation guidance.",
  github: "https://github.com",
  linkedin: "https://jo.linkedin.com/in/ali-mhawi-190265257",
  portfolio: "https://TORIX.app",
  instagram: "https://www.instagram.com/at.mhawi/",
};

export default site;