import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  FaRegFileAlt,
  FaUser,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    image: string;
    title: string;
    type: string;
    client: string;
    languages: string;
    preview: string;
    description: string;
    bg?: string;
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  open,
  onOpenChange,
  project,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl rounded-xl border-2 dark:bg-gray-900 p-0 overflow-hidden w-[98vw] sm:w-full">
        <div className="p-4 sm:p-8 max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-center text-sky-500 dark:text-white mb-4 sm:mb-6">
              {project.title}
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 text-base sm:text-lg">
            <div className="flex items-center gap-2">
              <FaRegFileAlt className="text-lg sm:text-xl text-gray-700 dark:text-gray-300" />
              <span className="break-words text-gray-700 dark:text-gray-300">
                Project : <b>{project.type}</b>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaUser className="text-lg sm:text-xl text-gray-700 dark:text-gray-300" />
              <span className="break-words text-gray-700 dark:text-gray-300">
                Client : <b>{project.client}</b>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="text-lg sm:text-xl text-gray-700 dark:text-gray-300" />
              <span className="break-words text-gray-700 dark:text-gray-300">
                Langages : <b>{project.languages}</b>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaExternalLinkAlt className="text-lg sm:text-xl text-gray-700 dark:text-gray-300" />
              <span className="break-words text-gray-700 dark:text-gray-300">
                Preview :{" "}
                <b>
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline break-all text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    {project.preview}
                  </a>
                </b>
              </span>
            </div>
          </div>
          {/* Project Image */}
          <div
            className={`w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900
            mb-4 sm:mb-6 rounded-lg overflow-hidden`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-contain w-full h-auto"
            />
          </div>
          <div className="text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-relaxed">
            {project.description}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
