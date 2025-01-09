import Objective from "@/components/home/Objective";
import Schedule from "@/components/home/Schedule";
import styles from "@styles/appStyles/home/Page.module.scss";
import Footer from "@/components/Footer";
import DayCounter from "@/components/home/DayCounter";

export default function ObjectivesPage() {
    return (
        <>
            <div className={styles.PageWrap}>
                <Objective Objective="grand" />
                <Objective Objective="week" />
                <Schedule />
                <DayCounter />
            </div>
            <Footer />
        </>
    );
}
