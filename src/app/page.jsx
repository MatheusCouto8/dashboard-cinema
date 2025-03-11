import Header from "@/components/header";
import styles from "./page.module.css";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div>
      <Header />

      <main class="dashboardContainer">
        <Sidebar />
      </main>
    </div>
  );
}