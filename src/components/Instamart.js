import { useState } from "react"

const Section = ( {title , discription , isVisible ,setIsVisible} )=>{
    return (
        <>  
        {console.log(setIsVisible)}
            <h1>{title}</h1>
            {isVisible? <button onClick={()=>{
                setIsVisible(false)
            }}>hide</button>:
            <button onClick={()=>{
                setIsVisible(true)
            }}>show</button>}
            {isVisible && <p>{discription}</p>}
        </>
    )
}
const Instamart = ()=>{
    const [visibleSection , setVisibleSection] = useState("")
    return (
        <>
            <h1>Instamart</h1>
            <Section title={"about_instamart"}
            discription= {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
            isVisible={visibleSection == "about"}
            setIsVisible = {()=>{
                setVisibleSection("about")
            }
            
            }
            />

            <Section title={"details of instamart"}
            discription= {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
                isVisible={visibleSection === "details"}
                setIsVisible = {()=>{
                    setVisibleSection("details")
                }}
            />

            <Section title={"team instamart"}
            discription= {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
                isVisible={visibleSection === "teams"}
                setIsVisible = {()=>{
                    setVisibleSection("teams")
                }}
            />


        </>
    )
}

export default Instamart;