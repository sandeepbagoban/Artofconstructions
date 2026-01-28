import { homePageData } from "../../utils/axios";


export const revalidate = 3600;

export default async function DemoPage() {
    const data = await homePageData();


    return (
        <div className="text-amber-950 text-2xl">
            <h1>Demo Page</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
} 