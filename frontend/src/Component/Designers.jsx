import SliderContainer from "./UI/Slider"
import Button from "./UI/Button"
import AnimateSection from "./UI/AnimateSection"
const disigners = [
    {
        _id: 1,
        name: "Regu",
        profilePic: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
    },
    {
        _id: 2,
        name: "Boomer",
        profilePic: "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=pexels-bertellifotografia-3792581.jpg&fm=jpg"
    },
    

]
const Designers = () => {
    return <AnimateSection className="min-h-28 flex flex-col items-center pt-4 text-center">
        <h3 className=" text-[clamp(1.5rem,3vw,4rem)] font-bold">Our Top Designers</h3>
        <div className="w-full max-w-xl ">
            {
                disigners.length > 1 ? <SliderContainer>
                    {disigners.map((disigner) => {
                        return <div className="h-full w-full p-5 text-center" key={disigner._id}>
                            <div className=" flex justify-center mb-3">
                                <img className="rounded-full w-40 h-40 overflow-hidden object-cover " src={disigner.profilePic} alt={disigner.name} />
                            </div>
                            <p className="mb-2">{disigner.name}</p>
                            <Button btnStyle='px-2 rounded-md p-1'>View Store</Button>
                        </div>
                    })}


                </SliderContainer> : <div className="h-full w-full p-5 text-center">
                    <div className=" flex justify-center mb-3">
                        <img className="rounded-full w-40 h-40 overflow-hidden object-cover " src={disigners[0].profilePic} alt={disigners[0].name} />
                    </div>
                    <p className="mb-2">{disigners[0].name}</p>
                    <Button btnStyle='px-2 rounded-md p-1'>View Store</Button>
                </div>
            }
        </div>

    </AnimateSection>
}

export default Designers