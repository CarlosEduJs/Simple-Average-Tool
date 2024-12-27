import { RectangleGroupIcon } from "@heroicons/react/16/solid"

const Logo = () => {
    return (
        <div className="flex items-center gap-3 text-white">
            <RectangleGroupIcon className="w-7"/>
            <h1 className="logoText font-bold text-3xl">Simple Average Tool</h1>
        </div>
    )
}

export default Logo