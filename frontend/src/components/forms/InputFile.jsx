const InputFile = ({ text, ...props }) => {
  return (
    <label className="w-52 justify-center m-auto flex items-center px-4 py-2 gap-2 bg-primary text-blue rounded-lg shadow-lg tracking-wide cursor-pointer text-white my-8">
      <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
      </svg>
      <p className="text-base leading-normal inline-block">{text}</p>
      <input type="file" className="hidden" {...props} />
    </label>
  );
};

export default InputFile;
