import React from 'react';
import ContentLoader from 'react-content-loader';

const UserDetailsLoader = () => (
    <ContentLoader 
    speed={1}
    width="100%"
    height={500}    
    backgroundColor="#c3dcf1"
    foregroundColor="#a7e3ff"
  >    
    <rect x="0" y="0" rx="2" ry="2" width="1200" height="400" /> 
    
  </ContentLoader>
)

export default UserDetailsLoader;