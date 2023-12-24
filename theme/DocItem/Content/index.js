import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Content from '@theme-original/DocItem/Content';
import BrowserOnly from '@docusaurus/BrowserOnly';

const SubStack = () => {
  const { siteConfig } = useDocusaurusContext();

  return <>
    <iframe
      src={`https://${siteConfig.organizationName}.substack.com/embed`}
      width="100%"
      height="320"
      className='substack-iframe'
      frameborder="0"
      scrolling="no"
    ></iframe>
  </>
}

export default function ContentWrapper(props) {
  return (
    <>
      <Content {...props} />
      <BrowserOnly>
        {() => window?.location?.pathname === '/' && (
          <>
            <hr />
            <SubStack />
          </>
        )}
      </BrowserOnly>
    </>
  );
}
