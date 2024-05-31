import PackageCard from "../../components/PackageCard/PackageCard";
import { Home } from "../../sites/home/Home";
import styles from "./page.module.css";
import data from "../../public/assets/data/packages.json";
export default function HomePage() {
  return (
    <>
      <PackageCard  {...data[0]} />
      <Home />
    </>
  );
}


