import Button from "./Button"

const Navbar = () => {
  return (
    <div className=" w-full bg-gray-300 flex px-4 py-3 justify-between items-center kavoon-regular">
      {/* Section  */}
      <div className=" flex gap-x-4 font-extralight text-[1.5rem] hover:text-gray-700 ">
        <div>Main</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      {/* Section 2 */}
      <div className=" flex gap-x-5">
        <Button size={"md"} varients="primary" disabled={true}  >
          Signup
        </Button>

        <Button size={"sm"} varients="secondary" disabled={true}  >
          SignIn
        </Button>
      </div>
    </div>
  )
}

export default Navbar