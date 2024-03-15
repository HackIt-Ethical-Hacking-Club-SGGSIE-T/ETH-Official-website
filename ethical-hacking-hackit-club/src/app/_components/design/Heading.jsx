import TagLine from "./Tagline";


const Heading = ({ className, title, text, tag }) => {
  return (
    <>
      {/* Visible for mobile or tablet view */}
      <div className={`${className} mx-auto mb-12 md:text-center font-bold`}>
        {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
        {title && <h2 className="h2">{title}</h2>}
        {text && <p className="mt-4 body-2 text-n-4">{text}</p>}
      </div>


    </>
  );
};

export default Heading;
