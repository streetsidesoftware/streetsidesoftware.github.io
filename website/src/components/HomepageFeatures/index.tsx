import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem =   FeatureItemImg;

type FeatureItemImg = {
  title: string;
  imgSrc?: string;
  img?: JSX.Element;
  description: JSX.Element;
  buttonHref: string;
  buttonText: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'CSpell',
    img: <img src={require('@site/static/img/stairs.jpg').default} className={styles.featureImg} alt="Spiral Stairs" />,
    description: (
      <>
        A command line spell checker for code. Perfect for your CI/CD pipeline.
      </>
    ),
    buttonHref: 'https://cspell.org',
    buttonText: 'Read More',
  },
  {
    title: 'VS Code Spell Checker',
    img: <img src={require('@site/static/img/cafe.jpg').default} className={styles.featureImg} alt="Cafe" />,
    imgSrc: require('@site/static/img/cafe.jpg').default,
    description: (
      <>
        A popular VS Code extension with over 11 million installs. It improves productivity by spell checking as you type.
      </>
    ),
    buttonHref: 'https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker',
    buttonText: 'Visual Studio Marketplace',
  },
  {
    title: 'VS Code Extensions',
    img: <img src={require('@site/static/img/books.jpg').default} className={styles.featureImg} alt="Books on shelf" />,
    imgSrc: require('@site/static/img/books.jpg').default,
    description: (
      <>
        Language Dictionaries and other useful extensions for VS Code.
      </>
    ),
    buttonHref: 'https://marketplace.visualstudio.com/publishers/streetsidesoftware',
    buttonText: 'Visual Studio Marketplace',
  },
];

function Feature({title, imgSrc, img, description, buttonHref, buttonText}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {(img) ? img : <img src={imgSrc} className={styles.featureSvg} role="img" />}
      </div>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            href={buttonHref}
            className="button button--secondary button--lg"
            >{buttonText}</Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
