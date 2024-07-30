import Masonry from 'react-masonry-css';

const MasonryLayout = ({ children }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
    320: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-5 w-auto"
    >
      {children}
    </Masonry>
  );
};

export default MasonryLayout;
