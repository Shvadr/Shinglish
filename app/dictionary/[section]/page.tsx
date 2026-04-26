import { notFound } from 'next/navigation';
import { NavigationComponent } from '@/components/NavigationComponent/navigation';
import { phrasalVerbsList } from '@/databases/phrasalVerbsList';
import { idiomsList } from '@/databases/idiomsList';
import { slangCategories } from '@/databases/slangCategories';
import Footer from "@/components/FooterComponent/footer";
import Header from "@/components/HeaderComponent/header";
import styles from "./page.module.css"
import Link from 'next/link';

const validSections = ['phrasal-verbs', 'idioms', 'slang'];

interface PageProps {
  params: Promise<{ section: string }>;
}

export async function generateStaticParams() {
  return [
    { section: 'phrasal-verbs' },
    { section: 'idioms' },
    { section: 'slang' }
  ];
}

export default async function SectionPage({ params }: PageProps) {
  // Разворачиваем Promise с помощью await
  const { section } = await params;

  if (!validSections.includes(section)) {
    notFound();
  }

  const renderContent = () => {
    switch (section) {
      case 'phrasal-verbs':
        return (
          <main>
            <h2 className={styles.title}>Список фразовых глаголов</h2>
            <ul className={styles.link}>
              {phrasalVerbsList.map((verb) => (
                <li key={verb.id}>
                  <Link href={`/dictionary/phrasal-verbs/${verb.verb}`}>
                    {verb.verb}
                  </Link>
                </li>
              ))}
            </ul>
          </main>
        );

      case 'idioms':
        return (
          <main>
            <h2 className={styles.title}>Список идиом</h2>
            <ul className={styles.idioms}>
              {idiomsList.map((idiom, index) => (
                <li key={index}>{idiom}</li>
              ))}
            </ul>
          </main>
        );

      case 'slang':
        return (
          <main>
            <h2 className={styles.title}>Категории сленга</h2>
            <ul className={styles.slang}>
              {slangCategories.map((category) => (
                <li key={category.id}>
                  <Link href={`/dictionary/slang/${category.link.split('/').pop()}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </main>
        );

      default:
        return null;
    }
  };

  return (
    <main className={styles.main}>
      <Header/>
      <div style={{height: "100vh"}}>
        <NavigationComponent />
        <div style={{ marginTop: '2rem' }}>{renderContent()}</div>
      </div>
      <Footer/>
      
    </main>
  );
}