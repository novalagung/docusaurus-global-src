import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { DiscussionEmbed } from 'disqus-react'
import DocItem from '@theme-original/DocItem';

export default function DocItemWrapper(props) {
  const { siteConfig } = useDocusaurusContext();
  const { metadata } = props.content
  const { comments = true } = metadata.frontMatter

  const title = `${siteConfig.title} - ${metadata.title.split('. ').reverse()[0]}`
  const slug = `${siteConfig.url}${metadata.slug}`

  return (
    <>
      <DocItem {...props} />
      <div style={{marginTop: '30px'}}>
        {comments && (
          <DiscussionEmbed
            shortname="dasarpemrogramangolang"
            config={{
              url: slug,
              identifier: slug,
              title,
            }}
          />
        )}
      </div>
    </>
  );
}
