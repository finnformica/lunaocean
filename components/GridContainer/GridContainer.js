const GridContainer = ({ display, icons, content, bottom }) => {
  return (
    <article className="grid md:grid-rows-[1fr_100px] grid-cols-[1fr] md:grid-cols-[2fr_1fr] grid-rows-[1fr_200px_0_100px] h-full w-full">
      <div className="border-r border-black/10 dark:border-white/10 border-b h-full">
        {display}
      </div>
      <div className="border-b border-black/10 dark:border-white/10 h-full md:relative flex items-center">
        <div
          className="md:absolute md:right-0 md:bottom-0 md:text-right p-6
      text-center w-full"
        >
          {content}
        </div>
      </div>
      <div className="flex items-center border-r border-black/10 dark:border-white/10 h-full">
        {bottom}
      </div>
      <div className="h-full flex justify-around items-center px-4 py-8">
        {icons}
      </div>
    </article>
  );
};

export default GridContainer;
