import type { ReactNode } from "react";

type ProjectPostProps = {
  name: string;
  headline?: string;
  date?: string;
  badge?: string;
  title: string;
  description: string;
  image?: string;
  technologies?: string[];
  link?: string;
  linkLabel?: string;
  footer?: ReactNode;
  emblemSrc: string;
};

function ProjectPost({
  name,
  headline = "Software Engineer",
  date,
  badge,
  title,
  description,
  image,
  technologies = [],
  link,
  linkLabel = "View Project",
  footer,
  emblemSrc,
}: ProjectPostProps) {
  return (
    <article
      className="group w-full overflow-hidden rounded-2xl border
        border-[#33291D] bg-[#11100F] text-[#E8DFCC]
        transition-all duration-300
        hover:border-[#C6A15B]/50
        hover:shadow-[0_8px_35px_rgba(198,161,91,0.06)]"
    >
      {/* Author header */}
      <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center
              rounded-full border border-black bg-[#171410]
              text-sm font-semibold text-[#C6A15B]"
            aria-hidden="true"
          >
            <img
              src={emblemSrc}
              alt=""
              className="border border-black rounded-full"
            />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold">{name}</h3>

            <p className="mt-0.5 text-xs text-[#928675]">{headline}</p>

            {date && <p className="mt-1 text-xs text-[#928675]">{date}</p>}
          </div>
        </div>

        {badge && (
          <span
            className="shrink-0 rounded-full border border-[#C6A15B]/30
              bg-[#C6A15B]/10 px-3 py-1 text-[10px] font-medium
              uppercase tracking-wider text-[#C6A15B]"
          >
            {badge}
          </span>
        )}
      </div>

      {/* Post content */}
      <div className="px-5 pb-5 sm:px-6">
        <h2 className="text-lg font-semibold tracking-wide sm:text-xl">
          {title}
        </h2>

        <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#B8AD9A]">
          {description}
        </p>

        {/* Project image */}
        {image && (
          <div className="mt-5 overflow-hidden rounded-xl border border-[#33291D] bg-[#080808]">
            <img
              src={image}
              alt={`${title} preview`}
              loading="lazy"
              className="h-auto max-h-[420px] w-full object-cover
                transition-transform duration-500
                group-hover:scale-[1.01]"
            />
          </div>
        )}

        {/* Technology tags */}
        {technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((technology: any) => (
              <span
                key={technology}
                className="rounded-full border border-[#33291D]
                  bg-[#171410] px-3 py-1.5 text-xs text-[#C6A15B]"
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        {footer && (
          <div className="mt-5 border-t border-[#33291D] pt-4">{footer}</div>
        )}

        {/* Action */}
        {link && (
          <div className="mt-5 border-t border-[#33291D] pt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm
                font-medium text-[#C6A15B] transition-colors
                hover:text-[#F4D58D]"
            >
              {linkLabel}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectPost;
