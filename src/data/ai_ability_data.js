import {
  CsvStory,
  CsvVisualisation,
  FileChat,
  FileSummary,
  GenerateContent,
  ImageFusion,
  ImagePrompt,
  ImageSimilar,
} from "../components/AIAbilities";

const ai_ability_data = [
  {
    title: "Generate Visualisation",
    image: "/ai-icons/csv-visualization.svg",
    description: "Generate charts and graphs.",
    id: "csv-visualization",
    category: "csv",
    component: CsvVisualisation,
  },
  {
    title: "Get data story",
    image: "/ai-icons/csv-story.svg",
    description: "Get relevant data stories from the files.",
    id: "csv-story",
    category: "csv",
    component: CsvStory,
  },
  {
    title: "Generate Similar Image",
    image: "/ai-icons/image-similar.svg",
    description: "Generate an image similar to the ones in the dataset.",
    id: "image-similar",
    category: "image",
    component: ImageSimilar,
  },
  {
    title: "Generate Fusion Image",
    image: "/ai-icons/image-fusion.svg",
    description: "Generate an image combining two images.",
    id: "image-fusion",
    category: "image",
    component: ImageFusion,
  },
  {
    title: "Generate with prompt",
    image: "/ai-icons/image-prompt.svg",
    description: "Generate an image by giving a custom prompt.",
    id: "image-prompt",
    category: "image",
    component: ImagePrompt,
  },
  {
    title: "File summary",
    image: "/ai-icons/file-summary.svg",
    description: "Get the summary of a PDF file.",
    id: "file-summary",
    category: "pdf",
    component: FileSummary,
  },
  {
    title: "Chat with file",
    image: "/ai-icons/file-chat.svg",
    description:
      "Chat with a PDF file, ask questions get contextual relevant answers.",
    id: "file-chat",
    category: "pdf",
    component: FileChat,
  },
  {
    title: "Generate content",
    image: "/ai-icons/generate-content.svg",
    description: "Generate content based on a file.",
    id: "generate-content",
    category: "pdf",
    component: GenerateContent,
  },
];

export default ai_ability_data;
