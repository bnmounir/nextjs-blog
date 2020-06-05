import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';

export default function Home({
    allPostsData,
}: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
    }[];
}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    I am a self-taught Software Engineer and have spent the past
                    three years learning and gaining experience. Before I became
                    a coder, I earned a BS in Environmental Engineering. With
                    this dual-background, I have an extensive skill set and
                    unique perspective on technical adaptability and
                    problem-solving techniques. I strive to have a driven and
                    resourceful attitude every day. As both a technical problem
                    solver and a reliable product builder, I am eager to find
                    new opportunities for growth, collaboration, and community
                    outreach.
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this in{' '}
                    <a href='https://nextjs.org/learn'>our Next.js tutorial</a>
                    .)
                </p>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href='/posts/[id]' as={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};
