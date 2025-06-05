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
      <DialogContent className=" max-w-4xl rounded-3xl p-0 overflow-hidden">
        <div className="p-8 max-h-[80vh]  overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center text-sky-500 mb-6">
              {project.title}
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-lg">
            <div className="flex items-center gap-2">
              <FaRegFileAlt className="text-xl" />
              <span>
                Project : <b>{project.type}</b>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaUser className="text-xl" />
              <span>
                Client : <b>{project.client}</b>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="text-xl" />
              <span>
                Langages : <b>{project.languages}</b>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaExternalLinkAlt className="text-xl" />
              <span>
                Preview :{" "}
                <b>
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {project.preview}
                  </a>
                </b>
              </span>
            </div>
          </div>
          {/* Project Image */}
          <div
            className={`w-full  flex items-center justify-center ${
              project.bg || "bg-gray-100"
            } mb-6`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-contain w-full "
            />
          </div>
          <div className="text-gray-600 leading-relaxed">
            {project.description}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
