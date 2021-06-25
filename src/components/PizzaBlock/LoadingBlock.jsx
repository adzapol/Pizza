import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 457"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="132" cy="162" r="108" />
      <rect x="-2" y="281" rx="6" ry="6" width="280" height="26" />
      <rect x="-2" y="314" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="415" rx="6" ry="6" width="91" height="31" />
      <rect x="136" y="408" rx="25" ry="25" width="140" height="43" />
    </ContentLoader>
  );
}

export default LoadingBlock;
