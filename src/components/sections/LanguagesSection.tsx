import { languages } from "../../data/languages";

export default function LanguagesSection() {
  return (
    <section className="py-24" id="languages">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-black text-primary">LANGUAGES</h2>
          <p className="text-on-surface-variant uppercase tracking-[0.2em] text-xs mt-2">
            Communication across borders
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="bg-surface-container-low border border-outline-variant/15 rounded-2xl p-6 text-center"
            >
              <h3 className="font-bold text-lg">{lang.name}</h3>
              <p className="text-primary font-black text-sm mt-1 uppercase tracking-widest">
                {lang.level}
              </p>
              {lang.note && (
                <p className="text-on-surface-variant text-xs mt-2">{lang.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
