import Menu from "./Menu"
import Footer from "./Footer"

const Page = ({back,changeTheme,iconTheme,...props}) => {
    return (
        <div>
            <Menu back={back} changeTheme={changeTheme} iconTheme={iconTheme}/>
            {props.children}
            <Footer/> 
        </div>
    )
}

export default Page;