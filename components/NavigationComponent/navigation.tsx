import Link from 'next/link';
import styles from "./navigation.module.css"
import { Navigation } from "@/databases/navigation";

export const NavigationComponent = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          {Navigation.map((item) => (
            <li key={item.id} style={{marginTop: "10px"}}>
              <Link href={item.href}>
                  {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};