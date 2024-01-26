import mainStyle from "@/app/mainstyle.module.css";
import Image from "next/image";

export default function Loading() {
    return (
        <main className={mainStyle.main}>
            <div className={mainStyle.center}>
                <div className={mainStyle.margin}>
                    <Image className={mainStyle.img} width={100} height={100} src={"./wait.svg"} alt={"wait"}/>
                    <h2 className={mainStyle.title}>Идёт подготовка...</h2>
                </div>
            </div>
        </main>
    )
}