import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { DiscussionEmbed } from 'disqus-react'
import DocItem from '@theme-original/DocItem';
import BrowserOnly from '@docusaurus/BrowserOnly';

const Ebook = () => {
  const { siteConfig } = useDocusaurusContext();

  const ebooks = [
    { id: 'dasarpemrogramangolang', name: 'Dasar Pemrograman Golang', src: '/img/cover ebook golang.png',  },
    { id: 'dasarpemrogramanpython', name: 'Dasar Pemrograman Python', src: '/img/cover ebook python.png' },
    { id: 'dasarpemrogramanrust', name: 'Dasar Pemrograman Rust', src: '/img/cover ebook rust.png' },
  ].filter((d) => d.id !== siteConfig.projectName).sort()

  return <>
    <div className='ebook-wrapper'>
      <h3>Ebook/web-book kami lainnya:</h3>
      {ebooks.map((img) => (<a href={`https://${img.id}.novalagung.com/`} target='_blank' className='ebook'>
        <img className='ebook-img' src={img.src} />
        <span className='ebook-title'>Ebook: {img.name}</span>
      </a>))}
    </div>
  </>
}

export default function DocItemWrapper(props) {
  const { siteConfig } = useDocusaurusContext();
  const { metadata } = props.content
  const { comments = true } = metadata.frontMatter

  const title = `${siteConfig.title} - ${metadata.title.split('. ').reverse()[0]}`
  const slug = `${siteConfig.url}${metadata.slug}`

  return (
    <>
      <DocItem {...props} />
      <BrowserOnly>
        {() => <Ebook />}
      </BrowserOnly>
      <BrowserOnly>
        {() => comments && (
          <>
            <div className='disqus-wrapper'>
              <DiscussionEmbed
                shortname="dasarpemrogramangolang"
                config={{
                  url: slug,
                  identifier: slug,
                  title,
                }}
              />
            </div>
          </>
        )}
      </BrowserOnly>
    </>
  );
}
