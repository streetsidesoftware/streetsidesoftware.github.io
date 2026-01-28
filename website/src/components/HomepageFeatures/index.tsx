import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = FeatureItemImg;

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
    description: <>A command line spell checker for code. Perfect for your CI/CD pipeline.</>,
    buttonHref: 'https://cspell.org',
    buttonText: 'Read More',
  },
  {
    title: 'Code Spell Checker for VS Code',
    img: <img src={require('@site/static/img/cafe.jpg').default} className={styles.featureImg} alt="Cafe" />,
    imgSrc: require('@site/static/img/cafe.jpg').default,
    description: <>A popular VS Code extension with over 11 million installs. It improves productivity by spell checking as you type.</>,
    buttonHref: 'https://streetsidesoftware.com/vscode-spell-checker/',
    buttonText: 'Code Spell Checker',
  },
  {
    title: 'VS Code Extensions',
    img: <img src={require('@site/static/img/books.jpg').default} className={styles.featureImg} alt="Books on shelf" />,
    imgSrc: require('@site/static/img/books.jpg').default,
    description: <>Language Dictionaries and other useful extensions for VS Code.</>,
    buttonHref: 'https://marketplace.visualstudio.com/publishers/streetsidesoftware',
    buttonText: 'Visual Studio Marketplace',
  },
];

function Feature({ title, imgSrc, img, description, buttonHref, buttonText }: FeatureItem): JSX.Element {
  return (
    <div className={styles.featureCol}>
      <div>
        {img ? img : <img src={imgSrc} className={styles.featureSvg} role="img" />}
        <Heading as="h3" className={styles.featureHeading}>
          {title}
        </Heading>
        <p>{description}</p>
      </div>
      <div className={styles.buttons}>
        <Link href={buttonHref} className="button button--secondary button--lg">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureList}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
