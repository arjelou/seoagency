// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const SeoVid = ({ embedId }) => (
  <div className="overflow-hidden relative pb-4 w-full items-center justify-center">
    <iframe
    className="w-full h-[500px] sm:h-[200px] rounded-lg shadow-xl sm:shadow-md"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

SeoVid.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default SeoVid;
