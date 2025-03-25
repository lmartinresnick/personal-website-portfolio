// About section data source
// Contains structured data for the About page content

import { getLinkPreview } from './linkPreview';

// Bio paragraphs
export const bioParagraphs = [
    "i'm an innovative software engineer with 5+ years of experience in ios apps, web apps, backend systems, and ai-driven solutions. i have a proven ability to build and scale sophisticated products in fast-paced startup environments, leveraging modern development frameworks, cloud services, and machine learning integrations.",
    "as a former ncaa division i dual-sport athlete in basketball and baseball, i bring exceptional teamwork and performance excellence to technical leadership. my approach to development is centered around creating clean, maintainable code that delivers exceptional user experiences.",
    "when i'm not coding, you can find me exploring new technologies, staying active through sports, and contributing to innovative ai-driven solutions."
];

// Skills data organized by category
export const skillsData = {
    languages: ["swift", "objective-c", "javascript", "typescript", "html/css", "python", "ruby", "kotlin"],
    frameworks: ["swiftui", "uikit", "concurrency", "combine", "coreml", "vision", "arkit", "healthkit", "node.js", "react.js", "express", "next.js", "django", "rails"],
    tools: ["git", "xcode", "vscode", "cursor", "mvvm", "mvc", "viper", "clean", "json", "rest api", "ci/cd", "github actions", "circleci", "docker", "gcp", "aws", "firebase", "xctest", "coredata", "threading", "tdd", "solid", "dry", "ml", "openai", "google gemini", "anthropic", "llms", "prompt engineering", "spm", "fastlane", "testflight", "figma", "sketch", "datadog", "amplitude", "google analytics", "mixpanel", "postgresql", "mysql", "mongodb", "redis"]
};

// Work experience data as an array for easy iteration
export const experienceData = [
    {
        title: "founding engineer, ios & full-stack",
        company: "santa's ai lab",
        period: "mar 2024 - mar 2025",
        description: [
            "led iOS and full-stack development for 8 AI products built within 12 months spanning across healthcare, messaging, content creation tools, and computer vision applications",
            "employee #1 responsible for architecting and implementing full-stack solutions using swift 6 and swiftui for ios, react.js for web interfaces, and node.js for backend systems",
            "integrated openai, anthropic, and google gemini llms"
        ],
        links: [
            {
                title: "santa's ai lab",
                url: "https://santasailab.com",
                preview: {
                    title: "Project Title",
                    description: "Brief description of the project",
                    image: "preview-image-url.jpg"
                }
            }
        ]
    },
    {
        title: "software engineer ii, ios",
        company: "ltk (formerly rewardstyle, inc.)",
        period: "jun 2022 - feb 2024",
        description: [
            "responsible for integrating a modernized update to the creator app's product links, product search and fast pay features while delivering high quality code in tight deadlines",
            "part of a two person pod that specialized in building creator ios share extension that increased share metrics",
            "led uat sessions to optimize app performance and identify ui/ux improvements, while handling solo and hotfix releases",
            "led successful migration from objective-c to swift while following solid principles and tdd to improve code coverage",
            "implemented new technologies, created reusable swiftui component library ensuring consistent ux across consumer and creator applications, the beginning of a modular package architecture",
            "led cross-functional collaboration while managing project priorities and delegating development tasks"
        ],
        links: [
            {
                title: "ltk share extension",
                url: "https://onbrand.shopltk.com/en-au/share-extension",
                preview: {
                    title: "Project Title",
                    description: "Brief description of the project",
                    image: "preview-image-url.jpg"
                }
            },
            {
                title: "ltk",
                url: "https://shopltk.com",
                preview: {
                    title: "Project Title",
                    description: "Brief description of the project",
                    image: "preview-image-url.jpg"
                }
            }
        ]
    },
    {
        title: "ios engineer",
        company: "duffl",
        period: "nov 2021 - jun 2022",
        description: [
            "architected a native ios application using the mvc pattern with advanced design implementations",
            "implemented comprehensive quality assurance processes improving code coverage from 0.23% to 35.4%",
            "engineered a seamless payment processing system integrating multiple sdks to enable venmo, apple pay, and card transactions"
        ],
        links: [
            {
                title: "duffl",
                url: "https://dot.la/ucla-born-duffl-delivery-2656047433",
                preview: {
                    title: "Project Title",
                    description: "Brief description of the project",
                    image: "preview-image-url.jpg"
                }
            }
        ]
    },
    {
        title: "ios developer",
        company: "yoke gaming",
        period: "mar 2021 - nov 2021",
        description: [
            "solely responsible for a complete architectural rebuild and ui/ux redesign of the version 3 application in 6 weeks",
            "scaled the app to the top 10 of the sports chart in the app store and gained 75k new users in two weeks, reaching over 200k total users",
            "app includes hundreds of athletes like justin fields, josh jacobs, tacko fall, and shareef o'neal"
        ],
        links: [
            {
                title: "yoke gaming",
                url: "https://yokegaming.com",
                preview: {
                    title: "Project Title",
                    description: "Brief description of the project",
                    image: "preview-image-url.jpg"
                }
            }
        ]
    }
];

export const contractExperienceData = [
    {
        title: "iOS & full-stack engineer, specialized in ios",
        company: "brem llc",
        period: "jun 2019 - present",
        description: [
            "contract full-stack and ios engineer for social media influencers, music executives, talent agents and more",
            "developed applications combining ios, web, and backend services using swift, objective-c, react.js, and node.js",
            "clients include: feels music messaging, hidden labs, inc., socialchair, player's punch, rfdb",
            "at feels music messaging, managed offshore development teams before independently rewriting the ios codebase in-house using clean architecture; transitioned ui from storyboards to autolayout and swiftui, reducing startup latency by 70% and significantly enhancing video playback and scroll performance",
            "established modular architectures enabling rapid feature iteration across multiple applications",
            "built restful apis and mobile solutions with robust auth systems and third-party integrations with automated testing"
        ],
        links: [
            {
                title: "feels music messaging",
                url: "https://feelsmusic.com",
                preview: {
                    title: "Project Title",
                    description: "Brief description of the project",
                    image: "preview-image-url.jpg"
                }
            },
            {
                title: "player's punch",
                url: "https://playerspunch.com",
                preview: {
                    title: "Project Title",
                    description: "Brief description of the project",
                    image: "preview-image-url.jpg"
                }
            },
            {
                title: "rfdb",
                url: "https://apps.apple.com/us/app/rfdb/id1659177114",
                preview: {
                    title: "Project Title",
                    description: "Brief description of the project",
                    image: "preview-image-url.jpg"
                }
            },
            {
                title: "socialchair",
                url: "https://socialchair.co",
                preview: {
                    title: "Project Title",
                    description: "Brief description of the project",
                    image: "preview-image-url.jpg"
                }
            }
        ]
    },
    // {
    //     title: "senior ios engineer",
    //     company: "feels music messaging",
    //     period: "dec 2022 - feb 2024",
    //     description: [
    //         "executed comprehensive ios codebase rewrite using clean architecture and migrating from storyboard to autolayout and swiftui",
    //         "launched the app's public beta release with open invites via testflight",
    //         "engineered optimizations that reduced startup latency by 70% while enhancing video and scroll performance"
    //     ]
    // },
];

// Section titles for consistency
export const sectionTitles = {
    main: "about me",
    skills: "skills & technologies",
    skillCategories: {
        languages: "languages",
        frameworks: "frameworks & libraries",
        tools: "tools & platforms"
    },
    experience: "work experience",
    contractExperience: "contract experience"
};

const CACHE_KEY = 'link-previews-cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export async function initializeWithLinkPreviews() {
    // Check cache first
    const cache = localStorage.getItem(CACHE_KEY);
    if (cache) {
        const { timestamp, data } = JSON.parse(cache);
        if (Date.now() - timestamp < CACHE_DURATION) {
            return data;
        }
    }

    // Create deep copies of the data
    const updatedExperienceData = JSON.parse(JSON.stringify(experienceData));
    const updatedContractExperienceData = JSON.parse(JSON.stringify(contractExperienceData));

    // Helper function to fetch previews for job links
    async function updateJobLinks(job) {
        if (job.links && job.links.length > 0) {
            for (const link of job.links) {
                try {
                    const preview = await getLinkPreview(link.url);
                    if (preview) {
                        link.preview = preview;
                    }
                } catch (error) {
                    console.error(`Failed to fetch preview for ${link.url}:`, error);
                }
            }
        }
        return job;
    }

    // Update all job links with previews
    for (let i = 0; i < updatedExperienceData.length; i++) {
        updatedExperienceData[i] = await updateJobLinks(updatedExperienceData[i]);
    }

    for (let i = 0; i < updatedContractExperienceData.length; i++) {
        updatedContractExperienceData[i] = await updateJobLinks(updatedContractExperienceData[i]);
    }

    // Save to cache
    localStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        data: {
            experienceData: updatedExperienceData,
            contractExperienceData: updatedContractExperienceData
        }
    }));

    return {
        experienceData: updatedExperienceData,
        contractExperienceData: updatedContractExperienceData
    };
}
