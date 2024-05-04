import Navbar, { colorPalette } from "@/component/Navbar";

const Brandbook = () => {
    return (
        <div style={{ backgroundColor: colorPalette.backgroudColor, height: '100vh' }}>
        <Navbar page={'brandbook'}/>
        <div style={{ display: 'flex' }}>
            brandbook
        </div>
      </div>
    )
}

export default Brandbook;
