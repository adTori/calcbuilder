import { projects, ProjectType } from '@/lib/materials';
import { cn } from '@/lib/utils';

interface ProjectSelectorProps {
  selected: ProjectType | null;
  onSelect: (project: ProjectType) => void;
}

export function ProjectSelector({ selected, onSelect }: ProjectSelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {projects.map((project) => (
        <button
          key={project.id}
          onClick={() => onSelect(project.id)}
          className={cn(
            "group relative flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all duration-200",
            "hover:border-primary hover:bg-primary/5",
            selected === project.id
              ? "border-primary bg-primary/10 shadow-md"
              : "border-border bg-card"
          )}
        >
          <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
            {project.icon}
          </span>
          <div className="text-center">
            <p className="font-display font-semibold text-foreground">{project.name}</p>
            <p className="text-xs text-muted-foreground">{project.description}</p>
          </div>
          {selected === project.id && (
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-pulse" />
          )}
        </button>
      ))}
    </div>
  );
}
