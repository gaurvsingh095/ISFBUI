import React from 'react';

type LanguageSelectorProps = {
  language: string;
  setLanguage: (language: string) => void;
  className?: string;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  language, 
  setLanguage,
  className = ''
}) => {
  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' }
  ];

  return (
    <div className={`flex items-center text-white ${className}`}>
      {languages.map((lang) => (
        <button
          key={lang.value}
          className={`flex cursor-pointer items-center rounded focus:outline-none px-2 py-1.5 font-medium mr-2 ${
            language === lang.value 
              ? 'bg-dark-fill-3 text-white' 
              : 'bg-dark-layer-2 text-dark-label-2 hover:bg-dark-fill-2'
          }`}
          onClick={() => setLanguage(lang.value)}
        >
          <div className="flex items-center px-1">
            <div className="text-xs">{lang.label}</div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;