import { notFound } from 'next/navigation';
import { slangInternet } from '@/databases/slangInternet';
import { slangYouth } from '@/databases/slangYouth';
import Footer from "@/components/FooterComponent/footer";
import Header from "@/components/HeaderComponent/header";
import Link from 'next/link';
import styles from "./page.module.css"

const categoryMap: Record<string, { title: string; data: any[] }> = {
  internet: { title: 'Интернет-сленг', data: slangInternet },
  youth: { title: 'Молодёжный сленг', data: slangYouth },
};

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return [
    { category: 'internet' },
    { category: 'youth' }
  ];
}

export default async function SlangCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryInfo = categoryMap[category];

  if (!categoryInfo) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Header/>
      <div style={{marginTop: "60px", height:"100vh"}}>
        <Link href="/dictionary/slang" className={styles.back}>Назад</Link>
        <h2 className={styles.title}>{categoryInfo.title}</h2>
        <ul className={styles.verb}>
          {categoryInfo.data.map((item) => (
            <li key={item.id}>
              <strong>{item.term}</strong> — {item.meaning}
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </main>
  );
}