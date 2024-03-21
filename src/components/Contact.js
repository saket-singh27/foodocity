import SignupForm from "./signupForm";

const Contact = ()=>{
    return (<>
    <div className="signup-form grid grid-cols-6 gap-4 h-1/2">
        <div className="col-start-2 col-span-4 py-3 mt-4">
        <h1 className="border-b font-sans text-2xl pb-2 bold">FILL THE FORM IN CASE OF ANY QUERY</h1>
        <div className="col-start-2 col-span-4 py-5 ">
        <SignupForm/>
        </div>
        </div>
        </div>
    </>)
}

export default Contact;