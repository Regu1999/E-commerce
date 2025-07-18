import Button from "./UI/Button"
import dressMaker from '/img/dress-maker.png'
const Promotion = () => {
    return <section className="flex m-5 md:m-10 max-[681px]:text-center max-[681px]:justify-center justify-between items-center">
        <div>
            <h3 className="text-[clamp(1.5rem,3vw,4rem)] font-bold max-w-[35rem]">Are You a Designer? Start Selling Today!</h3>
            <p className="mb-3"> Join 100+ dressmakers growing their brand </p>
            <div>
                <Button btnStyle="p-1 px-2 me-5 rounded-md">Start Selling</Button>
                <Button btnStyle="p-1 px-2 me-5 rounded-md">Learn More</Button>

            </div>
        </div>
        <div>
            <img src={dressMaker} alt="dress maker" className="max-w-96 rounded-lg hidden min-[681px]:block" />
        </div>

    </section>

}
export default Promotion