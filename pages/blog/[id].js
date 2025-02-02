import Head from 'next/head';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { getAllPostsPath, getPostData } from '../../lib/get-all-posts-data.js';

import Header from '../../components/Header.js';
import NextOptimizedImage from '../../components/NextOptimizedImage.js';
import HoverableLink from '../../components/HoverableLink.js';
import CodeSyntaxHighlighter from '../../components/CodeSyntaxHighlighter.js';
import Footer from '../../components/Footer.js';

const c1 = '#071013', c2 = '#fffecb', c3 = '#20a4f3',  c4 = '#1d2b35', c5 = '#fb232e', c6 = '#ffaa33';

const h1_color = c4, h1_text_decoration = c4 + '80', h2_color = c4, h3_color = c4;
const p_color = c1 + 'f2', ul_color = c1 + 'e6', ol_color = c1 + 'e6', em_background = c5 + '26', em_color = c4 + 'f2';
const strong_background = c1 + '26', strong_color = c1 + 'f2';
const hr_color = c1 + '80', blockquote_background_color = c3 + '26', blockquote_border = c3 + 'e6';

const components = {
	img: props => <NextOptimizedImage img_props = {props} />,

	h1: props => <h1 style = {{ fontFamily: "'Ubuntu', sans-serif", 
															fontSize: 'calc(1rem + 1.5vw)', 
															color: h1_color,
															margin: '1vh 0 1vh 0',
															overflowWrap: 'break-word', }} 
									{...props} />,

	h2: props => <h2 style = {{ fontFamily: "'Maven Pro', sans-serif", 
															fontSize: 'calc(1rem + 1vw)', 
															color: h2_color,
															margin: '1vh 0 1vh 0',
															overflowWrap: 'break-word', }} 
										{...props} />,

	h3: props => <h3 style = {{ fontFamily: "'Maven Pro', sans-serif", 
															fontSize: 'calc(1rem + 0.5vw)', 
															color: h3_color,
															margin: '1vh 0 1vh 0',
															overflowWrap: 'break-word', }} 
									{...props} />,

	p: props => <p style = {{ fontFamily: "'Source Sans Pro', sans-serif", 
														fontSize: 'calc(1rem + 0.1vw)', 
														color: p_color,
														margin: '0vh 0 1vh 0',
														overflowWrap: 'break-word', }} 
									{...props} />,
	
	ul: props => <ul style = {{ fontFamily: "'Source Sans Pro', sans-serif", 
														fontSize: 'calc(1rem + 0.1vw)', 
														color: ul_color,
														margin: '1vh 0 1vh calc(2vw)',
														overflowWrap: 'break-word', }} 
									{...props} />,

	ol: props => <ol style = {{ fontFamily: "'Source Sans Pro', sans-serif", 
													fontSize: 'calc(1rem + 0.1vw)', 
													color: ol_color,
													margin: '1vh 0 1vh calc(2vw)',
													overflowWrap: 'break-word', }} 
								{...props} />,

	a: props => <HoverableLink link_props = {props} />,

	code: props => <CodeSyntaxHighlighter code_props = {props} />,

	em: props => <em style = {{ fontFamily: "'Source Sans Pro', sans-serif", 
													fontSize: 'calc(1rem + 0.1vw)', 
													fontStyle: 'normal',
													backgroundColor: em_background,
													color: em_color,
													margin: '0vh 0 1vh 0',
													padding: '0 2px 0 2px',
													borderRadius: '2px' }} 
								{...props} />,

	strong: props => <strong style = {{ fontFamily: "'Source Sans Pro', sans-serif", 
												fontSize: 'calc(1rem + 0.1vw)', 
												fontStyle: 'normal',
												fontWeight: 'normal',
												backgroundColor: strong_background,
												color: strong_color,
												margin: '0vh 0 1vh 0',
												padding: '0 2px 0 2px',
												borderRadius: '2px',
												overflowWrap: 'break-word', }} 
							{...props} />,

	hr: _ => <hr style = {{ margin: '2vh 25% 2vh 25%',
    											border: `1px solid ${hr_color}`, }} />,

	blockquote: props => <blockquote style = {{ backgroundColor: blockquote_background_color, 
																						padding: '10px',
																						margin: '1vh 0 1vh 0',
																						borderLeft: `5px solid ${blockquote_border}`, }} 
								{...props} />,
}

const home_page_url = 'https://dadapunk.github.io/';

export default function Blog({ postMetadata, postContent }) {
	//const Mdx = require(`../../posts/${postMetadata.id}.mdx`).default;
	//let mdx = <Mdx />;

	const content = hydrate(postContent, { components });

	return (
		<div style = {{minHeight: '100vh'}}>
      <Head>
        <meta charSet="utf-8" />
        <meta name = "viewport" content = "width=device-width, initial-scale=1" />
        <meta name = 'description' content = {postMetadata.description} />
        <meta name="author" content="Sebastián Velásquez Arancibia" />
        <meta name="keywords" content={postMetadata.keywords.join(',')} />

        <meta property="og:title" content={postMetadata.title + '- Sebastián Velásquez Arancibia'} key="ogtitle" />
        <meta property="og:description" content={postMetadata.description} key="ogdesc" />
        <meta property="og:url" content={home_page_url + 'blog/' + postMetadata.id} key="ogurl" />
				<meta property="og:image" content={home_page_url + 'images/' + postMetadata.imgName} key="ogimage" />
				<meta property="og:type" content="article" />
				<meta property='og:article:publisher' content={home_page_url} key='ogaritclepublisher'/>
				<meta property="og:site_name" content={"Sebastián Velásquez Arancibia"} key="ogsitename" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={postMetadata.title + '- Sebastián Velásquez Arancibia'} />
				<meta name="twitter:description" content={postMetadata.description} />
				<meta name="twitter:url" content={home_page_url + 'blog/' + postMetadata.id} />
				<meta name="twitter:site" content="@dadapunk" />
				<meta name="twitter:image" content={home_page_url + 'images/' + postMetadata.imgName} />
				<meta name="twitter:creator" content='@dadapunk' />

				<link rel = 'icon' href = '/images/santha-lakshmi-narayana-logo.png?' />
				<link rel="canonical" href={home_page_url + 'blog/' + postMetadata.id} />

        <title>{postMetadata.title + '- Sebastián Velásquez Arancibia'}</title>
      </Head>

			<Header />

			<article className = 'blog-content'>
				{content}
			</article>

			<Footer bg_color = {c4 + 'e6'} normal_color = {c2} icon_size = {'calc(0.8rem + 1vw)'} 
          horizontal_margin = {'1vw'} horizontal_padding = {'1vw'} vertical_padding = {'1vw'}
          github = {true} linkedin = {true} medium = {true} kaggle = {true} quora = {true}
          need_copy_right = {true} />

			<style jsx>{`
				.blog-content {
					display: flex;
					flex: 100%;
					flex-direction: column;
					margin: 1vw 25vw 1vw 25vw;
					width: 50vw;
					max-width: 50vw;
					min-height: 90vh;
				}

				@media screen and (max-width: 980px) {
					.blog-content {
						margin: 1vw 15vw 1vw 15vw;
						width: 70vw;
						max-width: 70vw;
					}
				}

				@media screen and (max-width: 760px) {
					.blog-content {
						margin: 1vw 5vw 1vw 5vw;
						width: 90vw;
						max-width: 90vw;
					}
				}

		  `}</style>
			
		</div>
	)
}

export async function getStaticPaths() {
	const paths = getAllPostsPath();
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	const mdxSource = await renderToString(postData.content, { components })
	return {
		props: {
			postMetadata: postData.metadata,
			postContent: mdxSource,
			id: params.id,
		}
	}
}