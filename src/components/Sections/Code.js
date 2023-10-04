import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CodeCard from "../Cards/CodeCard";
import code from "../../data/code";

const codeCategories = [
  {
    id: "file-summary",
    title: "File Summary",
    image: "/ai-icons/file-summary.svg",
  },
  { id: "file-chat", title: "File Chat", image: "/ai-icons/file-chat.svg" },
  {
    id: "generate-content",
    title: "Generate Content",
    image: "/ai-icons/generate-content.svg",
  },
  { id: "csv-story", title: "CSV story", image: "/ai-icons/csv-story.svg" },
];

const languages = [
  { id: "js", iconClass: "fa-brands fa-js", label: "Javascript" },
  { id: "python", iconClass: "fa-brands fa-python", label: "Python" },
  { id: "bash", iconClass: "fa-solid fa-terminal", label: "Bash" },
  { id: "go", iconClass: "fa-brands fa-golang", label: "Go" },
];

const Code = () => {
  const [selectedLang, setSelectedLang] = useState("js");
  const [selectedCategory, setSelectedCategory] = useState("file-summary");
  const categoryData = code.find((item) => item.id === selectedCategory);
  const desiredCode = categoryData[selectedLang];

  return (
    <div className="flex flex-row gap-[50px] mt-[20px]">
      <div className="flex flex-col gap-[20px] w-[404px]">
        {codeCategories.map((category) => (
          <CodeCard
            key={category.id}
            title={category.title}
            image={category.image}
            onClick={() => setSelectedCategory(category.id)}
          />
        ))}
      </div>
      <div className="flex flex-col w-[606px]">
        <div className="flex flex-row gap-[20px] mb-[20px]">
          {languages.map((lang) => (
            <button
              key={lang.id}
              className="btn btn-outline btn-primary min-w-[130px]"
              onClick={() => setSelectedLang(lang.id)}
            >
              <i className={`${lang.iconClass} fa-lg`}></i>
              {lang.label}
            </button>
          ))}
        </div>
        <CopyBlock
          text={desiredCode}
          language={selectedLang}
          showLineNumbers={true}
          theme={dracula}
          wrapLongLines={true}
        />
      </div>
    </div>
  );
};

export default Code;
