import { NavBar, SearchSvg, MicSvg, Categories } from "./index"

const HomePage = () => {
    return (
        <div className="w-full  flex flex-col items-center mx-auto bg-[#FDFDFD]">
            <div className="min-w-[384px] max-w-[383px] p-4 flex flex-col gap-4">
                <NavBar />

                <div className="w-full flex justify-center relative">
                    <SearchSvg className=" absolute top-2/4 left-6 translate-x-[-50%] translate-y-[-50%]" />
                    <input type="text" placeholder="Search any Product.." className="bg-white w-full p-2 pl-10 rounded-md shadow-sm text-sm text-[#BBBBBB]" />
                    <MicSvg className=" absolute top-2/4 right-1 translate-x-[-50%] translate-y-[-50%]" />
                </div>

                <div className="w-full flex gap-2">
                    <Categories />
                </div>
            </div>
        </div>
    )
}

export default HomePage