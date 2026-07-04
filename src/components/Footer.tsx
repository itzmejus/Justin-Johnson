import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] w-full pt-12 pb-28 sm:pb-12 px-4 md:px-8 mt-24 border-t border-zinc-800/15">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center max-w-7xl mx-auto w-full gap-6">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 font-['Inter'] text-[10px] tracking-[0.05em] uppercase hover:text-cyan-400 transition-all duration-300 underline decoration-2 underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 font-['Inter'] text-[10px] tracking-[0.05em] uppercase hover:text-cyan-400 transition-all duration-300 underline decoration-2 underline-offset-4"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-zinc-500 font-['Inter'] text-[10px] tracking-[0.05em] uppercase hover:text-cyan-400 transition-all duration-300 underline decoration-2 underline-offset-4 break-all"
          >
            {profile.email}
          </a>
          <a
            href="/cv"
            className="text-zinc-500 font-['Inter'] text-[10px] tracking-[0.05em] uppercase hover:text-cyan-400 transition-all duration-300 underline decoration-2 underline-offset-4"
          >
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
