import { productsprops } from "../../models/models";

export default function SideNav({products}:productsprops) {
    return (
        <>
        <aside className="flex-20 sidebar">
            <div className="flex-display wrap">
                <span className="size">S</span>
                <span className="size">S</span>
                <span className="size">S</span>
                <span className="size">S</span>
                <span className="size">S</span>
                <span className="size">S</span>
            </div>
        </aside>
        </>
    )
}