import Header from "./Components/Header";
import Latest from "./Components/Latest";
import MainPart from "./Components/MainPart";
import Navbar from "./Components/Navbar";

const MainRoot = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Latest></Latest>
            <Navbar></Navbar>
            <MainPart></MainPart>
        </div>
    );
};

export default MainRoot;